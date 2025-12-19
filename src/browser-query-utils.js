(function () {
	'use strict';

	window.browserQueryUtils = window.browserQueryUtils || {};

	/**
	 * Parses query parameters from a URL into an object.
	 *
	 * @param {string} url - The full URL, relative URL, or query string.
	 *
	 * @returns {Object<string, string>} - An object mapping parameter names to decoded values.
	 */
	function getQueryParams(url) {
		const params = {};
		if (typeof url !== 'string' || !url) return params;

		let queryString = url.split('?')[1] || '';
		queryString = queryString.split('#')[0]; // remove hash

		if (!queryString) return params;

		queryString.split('&').forEach((pair) => {
			if (!pair) return;

			const [rawKey, rawValue] = pair.split('=');
			try {
				const key = decodeURIComponent((rawKey || '').replace(/\+/g, ' '));
				const value = decodeURIComponent((rawValue || '').replace(/\+/g, ' '));
				if (key) params[key] = value;
			} catch (e) {
				// ignore malformed
				window.console.log(e);
			}
		});

		return params;
	}

	/**
	 * Updates or adds query parameters to a URL.
	 *
	 * @param {string} url - The original URL.
	 * @param {Object<string, any>} newParams - Key-value pairs to set/update in the query string.
	 *
	 * @returns {string} - The new URL with updated query parameters.
	 */
	function setQueryParams(url, newParams) {
		if (typeof url !== 'string' || !url) return '';
		if (!newParams || typeof newParams !== 'object') return url;

		const [baseAndQuery, hash] = url.split('#');
		const [baseUrl, existingQuery = ''] = baseAndQuery.split('?');

		const currentParams = getQueryParams(existingQuery);
		const mergedParams = { ...currentParams, ...newParams };

		const queryString = Object.keys(mergedParams)
			.filter((k) => mergedParams[k] !== undefined && mergedParams[k] !== null)
			.map(
				(k) =>
					encodeURIComponent(k) +
					'=' +
					encodeURIComponent(String(mergedParams[k]))
			)
			.join('&');

		return queryString
			? `${baseUrl}?${queryString}${hash ? '#' + hash : ''}`
			: `${baseUrl}${hash ? '#' + hash : ''}`;
	}

	/**
	 * Deletes one or multiple query parameters from a URL.
	 *
	 * @param {string} url - The original URL.
	 * @param {string|string[]} keys - Parameter key or array of keys to delete.
	 *
	 * @returns {string} - The new URL with parameters removed.
	 */
	function deleteQueryParams(url, keys) {
		if (typeof url !== 'string' || !url) return '';
		if (!keys) return url;
		if (!Array.isArray(keys)) keys = [keys];

		const [baseAndQuery, hash] = url.split('#');
		const [baseUrl, existingQuery = ''] = baseAndQuery.split('?');

		const currentParams = getQueryParams(existingQuery);
		keys.forEach((k) => delete currentParams[k]);

		const queryString = Object.keys(currentParams)
			.map(
				(k) =>
					encodeURIComponent(k) + '=' + encodeURIComponent(currentParams[k])
			)
			.join('&');

		return queryString
			? `${baseUrl}?${queryString}${hash ? '#' + hash : ''}`
			: `${baseUrl}${hash ? '#' + hash : ''}`;
	}

	window.browserQueryUtils.getQueryParams = getQueryParams;
	window.browserQueryUtils.setQueryParams = setQueryParams;
	window.browserQueryUtils.deleteQueryParams = deleteQueryParams;
})();

/*! browser-query-utils v2.0.1 | License: MIT */
'use strict';

/**
 * Parses query parameters from a URL into an object.
 *
 * @param {string} url - The full URL, relative URL, or query string.
 *
 * @returns {Object<string, string>} - An object mapping parameter names to decoded values.
 */
function getQueryParams(url) {
	if (typeof url !== 'string' || !url) return {};
	try {
		const urlObj = url.includes('://')
			? new URL(url)
			: new URL('https://www.yasglobal.com/' + url);
		const params = {};
		for (const [key, value] of urlObj.searchParams.entries()) {
			params[key] = value;
		}
		return params;
	} catch {
		return {};
	}
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
	if (
		typeof url !== 'string' ||
		!url ||
		!newParams ||
		typeof newParams !== 'object'
	)
		return url;
	try {
		const hasProtocol = url.includes('://');
		const urlObj = hasProtocol
			? new URL(url)
			: new URL('https://www.yasglobal.com/' + url);

		for (const key in newParams) {
			const value = newParams[key];
			if (value === undefined || value === null) {
				urlObj.searchParams.delete(key);
			} else {
				urlObj.searchParams.set(key, String(value));
			}
		}

		if (hasProtocol) return urlObj.toString();
		return (
			urlObj.pathname +
			(urlObj.search ? urlObj.search : '') +
			(urlObj.hash ? urlObj.hash : '')
		);
	} catch {
		return url;
	}
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
	if (typeof url !== 'string' || !url || !keys) return url;
	if (!Array.isArray(keys)) keys = [keys];
	try {
		const hasProtocol = url.includes('://');
		const urlObj = hasProtocol
			? new URL(url)
			: new URL('https://www.yasglobal.com/' + url);

		keys.forEach((key) => urlObj.searchParams.delete(key));

		if (hasProtocol) return urlObj.toString();
		return (
			urlObj.pathname +
			(urlObj.search ? urlObj.search : '') +
			(urlObj.hash ? urlObj.hash : '')
		);
	} catch {
		return url;
	}
}

export { getQueryParams, setQueryParams, deleteQueryParams };

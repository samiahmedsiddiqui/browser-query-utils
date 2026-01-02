# 🔍 browser-query-utils

[![License: MIT][license-image]][license-url]
[![NPM version][npm-image]][npm-url]
[![Build][build-image]][build-url]
[![Downloads][jsdelivr-image]][jsdelivr-url]

Lightweight, safe helpers for getting, setting, and deleting URL query parameters in browsers.

## Features

- Zero runtime dependencies
- Browser-only (no Node.js required in production)
- Get, set, and delete query parameters
- Handles full URLs, relative URLs, and hash fragments
- Minified build for production
- Linted and formatted with ESLint + Prettier

---

## Installation

#### Option 1: Download / Copy

```html
<script src="dist/browser-query-utils.min.js"></script>
```

### Option 2: NPM

```bash
npm install browser-query-utils
```

### Option 3: jsDelivr CDN

#### Latest version:

```html
<script src="https://cdn.jsdelivr.net/npm/browser-query-utils/dist/browser-query-utils.min.js"></script>
```

#### Specific version:

```html
<script src="https://cdn.jsdelivr.net/npm/browser-query-utils@1.1.0/dist/browser-query-utils.min.js"></script>
```

> **Note:** The library attaches itself to `window.browserQueryUtils` in the browser.


## Usage

### Get query parameters

```js
const params = browserQueryUtils.getQueryParams("https://example.com/?foo=bar&baz=42");
// returns: { foo: "bar", baz: "42" }
```

### Set or update query parameters

```js
const newUrl = browserQueryUtils.setQueryParams("https://example.com/?foo=bar", { baz: 42, foo: "updated" });
// returns: "https://example.com/?foo=updated&baz=42"
```

### Delete query parameters

```js
const newUrl = browserQueryUtils.deleteQueryParams("https://example.com/?foo=bar&baz=42", "baz");
// returns: "https://example.com/?foo=bar"
```

You can delete multiple keys by passing an array:

```js
browserQueryUtils.deleteQueryParams(url, ["foo", "baz"]);
```

## License

MIT © [Sami Ahmed Siddiqui](https://github.com/samiahmedsiddiqui)

[build-image]:https://img.shields.io/github/actions/workflow/status/samiahmedsiddiqui/browser-query-utils/ci.yml
[build-url]: https://github.com/samiahmedsiddiqui/browser-query-utils/actions

[npm-image]: https://img.shields.io/npm/v/browser-query-utils.svg
[npm-url]: https://www.npmjs.com/package/browser-query-utils

[license-image]: https://img.shields.io/badge/License-MIT-green.svg
[license-url]: LICENSE

[jsdelivr-image]: https://img.shields.io/jsdelivr/npm/hm/browser-query-utils
[jsdelivr-url]: https://www.jsdelivr.com/package/npm/browser-query-utils

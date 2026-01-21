# 🔍 browser-query-utils

[![License: MIT][license-image]][license-url]
[![NPM version][npm-image]][npm-url]
[![Build][build-image]][build-url]
[![Downloads][jsdelivr-image]][jsdelivr-url]

Lightweight, safe helpers for getting, setting, and deleting URL query parameters — with modern ESM, CJS, and UMD builds.

## Features

- Zero runtime dependencies
- Browser-focused utilities (Node.js supported via CJS)
- Get, set, and delete query parameters
- Handles full URLs, relative URLs, and hash fragments
- Minified build for production
- Linted and formatted with ESLint + Prettier

---

## Installation

### NPM (Modern ESM / CJS)

```sh
npm install browser-query-utils@2
```

#### ESM import (modern bundlers):

```js
import { getQueryParams, setQueryParams, deleteQueryParams } from 'browser-query-utils';
```

#### CJS import (Node.js / legacy bundlers):

```js
const { getQueryParams, setQueryParams, deleteQueryParams } = require('browser-query-utils');
```

### Browser (UMD / CDN)

```html
<script src="https://cdn.jsdelivr.net/npm/browser-query-utils/dist/browser-query-utils.umd.js"></script>
```

### Available Builds

| File                             | Format     | Notes                                   |
| -------------------------------- | ---------- | --------------------------------------- |
| `browser-query-utils.js`         | ESM        | Non-minified, modern bundlers           |
| `browser-query-utils.min.js`     | ESM        | Minified, production-ready (ES module)  |
| `browser-query-utils.cjs.js`     | CJS        | Non-minified, Node.js / CommonJS        |
| `browser-query-utils.cjs.min.js` | CJS        | Minified, production-ready              |
| `browser-query-utils.umd.js`     | UMD        | Legacy browsers / script tag & CommonJS |
| `browser-query-utils.min.js.map` | Source map | For minified ESM                        |

## Usage by environment

### ES Modules (recommended)

```js
import { getQueryParams, setQueryParams, deleteQueryParams } from 'browser-query-utils';

setQueryParams(
  'https://example.com/?foo=bar',
  {
    foo: 'updated',
    baz: 42
  }
);
```

### CommonJS

```js
const { getQueryParams, setQueryParams, deleteQueryParams } = require('browser-query-utils');

setQueryParams(
  'https://example.com/?foo=bar',
  {
    foo: 'updated',
    baz: 42
  }
);
```

### Browser (script tag / CDN)

```js
<script src="https://cdn.jsdelivr.net/npm/browser-query-utils/dist/browser-query-utils.umd.js"></script>
<script>
  browserQueryUtils.setQueryParams(
    'https://example.com/?foo=bar',
    {
      foo: 'updated',
      baz: 42
    }
  );
</script>
```

> The global `browserQueryUtils` is available only when using the UMD build.

## API Usage

### Get query parameters

```js
import { getQueryParams } from 'browser-query-utils';

const params = getQueryParams("https://example.com/?foo=bar&baz=42");
// returns: { foo: "bar", baz: "42" }
```

### Set or update query parameters

```js
import { setQueryParams } from 'browser-query-utils';

const newUrl = setQueryParams("https://example.com/?foo=bar", { baz: 42, foo: "updated" });
// returns: "https://example.com/?foo=updated&baz=42"
```

### Delete query parameters

```js
import { deleteQueryParams } from 'browser-query-utils';

const newUrl = deleteQueryParams("https://example.com/?foo=bar&baz=42", "baz");
// returns: "https://example.com/?foo=bar"
```

You can delete multiple keys by passing an array:

```js
import { deleteQueryParams } from 'browser-query-utils';

deleteQueryParams(url, ["foo", "baz"]);
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

# Changelog

All notable changes will be documented in this file.

## [v2.0.1] - Jan 21, 2026

### Fixed

- Corrected CommonJS and UMD build outputs to export the proper query utility functions:
  - getQueryParams
  - setQueryParams
  - deleteQueryParams
- Fixed an incorrect function name reference introduced in the previous release’s build script.
- No changes to source code or public API.

## [v2.0.0] - Jan 21, 2026

### Added

- Dual-publish minified builds for ESM and CJS
- UMD build for legacy browsers / script tag & CommonJS
- Non-minified ESM and CJS builds for easier debugging
- Source maps for minified ESM
- Updated package.json `exports` field for proper module resolution

### Changed

- Build system updated for professional multi-format workflow
- README updated with examples for ESM, CJS, and UMD usage
- Robust Terser minification with banners and error handling

## [v1.1.0] – Jan 02, 2026

### Added

- Modernized query utilities to use `URL` and `URLSearchParams`

### Notes

- Public API remains unchanged: `getQueryParams`, `setQueryParams`, `deleteQueryParams`

## [v1.0.0] - Dec 19, 2025

- Initial release of **browser-query-utils**

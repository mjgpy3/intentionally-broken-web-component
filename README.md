# Intentionally Broken Web Component

A minimal web component built with Lit that intentionally throws an exception. Useful for testing error handling and monitoring.

## Usage

```html
<script type="module" src="https://example.com/path/to/dist/index.js"></script>
<broken-component></broken-component>
```

The component will throw an error: `This component is intentionally broken!`

## Development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

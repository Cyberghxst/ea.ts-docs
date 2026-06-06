---
title: Escapers
description: A brief guide about what an escaper is and which ones exist.
---

## Escapers

Escapers are special placeholders that are replaced with their corresponding characters before the code is executed.

They are useful when you need to include reserved characters inside strings, function arguments, or places where writing the character directly may cause parsing issues.

### Example

```js id="w4x8p2"
%SEMI%%LPAREN%
```

After processing escapers, the result becomes:

```txt id="g5m9q1"
;)
```

### xxi.js Compatibility

If you're coming from xxi.js, escapers follow a similar concept. However, easy-api.ts uses the `%NAME%` syntax:

| xxi.js    | easy-api.ts |
| --------- | ----------- |
| `#SEMI#`  | `%SEMI%`    |
| `#COLON#` | `%COLON%`   |
| `#DOL#`   | `%DOL%`     |

## Available Escapers

| Escaper    | Replaced With         |
| ---------- | --------------------- |
| `%LEFT%`   | `[`                   |
| `%RIGHT%`  | `]`                   |
| `%SEMI%`   | `;`                   |
| `%COLON%`  | `:`                   |
| `%SPACE%`  | Space character (` `) |
| `%AT%`     | `@`                   |
| `%OR%`     | `\|\|`                |
| `%AND%`    | `&&`                  |
| `%RPAREN%` | `(`                   |
| `%LPAREN%` | `)`                   |
| `%DOL%`    | `$`                   |

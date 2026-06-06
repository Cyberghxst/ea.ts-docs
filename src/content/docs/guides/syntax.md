---
title: Syntax style
description: A brief guide about the syntax styles in easy-api.ts
---

# Syntax Styles
Since **easy-api.ts 3.0.0**, the parser supports multiple syntax styles for function calls.
This allows developers to choose the style they find most readable while keeping the same functionality and behavior.

## Choosing a Default Style
You can configure the preferred syntax style through the `dots` option in the API constructor.
```js
// index.js
const api = new API({
    dots: true
});
```

| Value   | Default Style |
| ------- | ------------- |
| `true`  | Colon Style   |
| `false` | Classic Style |

## Colon Style
The Colon Style introduces a colon (`:`) between the function name and its argument block.
Examples:
```eats
$function:[arg;arg;...]

$function: [arg;arg;...]

$function: [
    arg;
    arg;
    ...
]

$function:
[
    arg;
    arg;
    ...
]
```
Some developers prefer this style because it visually separates the function name from its arguments, especially in large or nested expressions.

## Classic Style
The Classic Style is the original syntax used by previous versions of easy-api.ts.
Examples:
```eats
$function[arg;arg;...]

$function[
    arg;
    arg;
    ...
]
```

This style is more compact and may feel familiar to users coming from older easy-api.ts versions.

## Comparison
| Colon Style            | Classic Style         |
| ---------------------- | --------------------- |
| `$reply:[Hello World]` | `$reply[Hello World]` |
| `$log:[Message]`       | `$log[Message]`       |
| `$if:[condition;code]` | `$if[condition;code]` |

Both examples above produce exactly the same result.

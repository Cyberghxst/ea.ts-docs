---
title: Custom Functions
description: Learn to make your own custom functions using this guide.
---

# Custom Functions
One of the core features of easy-api.ts is the ability to create your own functions.
Custom functions allow you to extend the language with new functionality and integrate external logic directly into your API code.

## Creating Your First Function
Start by importing the required classes and enums:
```js
const { APIFunction, ParamType } = require("easy-api.ts");
```

Then create a class that extends `APIFunction`.
In this example, we'll create a `$reverse` function that reverses a string.

```js
class ReverseFunction extends APIFunction {
    name = "$reverse";
    description = "Reverses a string.";

    parameters = [{
        name: "Text",
        description: "Text to reverse.",
        type: ParamType.String,
        required: true,
        rest: false,
        defaultValue: null
    }];

    usage = "$reverse[text]";
    returns = ParamType.String;
    compile = true;
    aliases = [];

    async run(d, [text]) {
        return text.split("").reverse().join("");
    }
}
```

## Exporting the Function
Export the class as the default module export:
```js
exports.default = ReverseFunction;
```

## Using the Function
```eats
$reverse[hello world]
```

Result:
```txt
dlrow olleh
```

## Function Properties
Every custom function can define metadata that is used by the parser and documentation system.
| Property      | Description                                            |
| ------------- | ------------------------------------------------------ |
| `name`        | Function name.                                         |
| `description` | Human-readable description.                            |
| `parameters`  | Function parameter definitions.                        |
| `usage`       | Usage example.                                         |
| `returns`     | Expected return type.                                  |
| `compile`     | Whether arguments should be compiled before execution. |
| `aliases`     | Alternative names for the function.                    |
| `run()`       | Function execution logic.                              |
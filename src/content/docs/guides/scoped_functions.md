---
title: Scoped Functions
description: Functions that are only available inside another function's execution context.
---

# Scoped Functions
Functions that are only available inside another function's execution context.

## Why Use Scoped Functions?
Consider the following example:
```eats
$match[$get[userRole];
    $when[admin;
        Access granted.
    ]

    $when[moderator;
        Limited access.
    ]

    $when[user;
        Standard access.
    ]
]
```

The `$when` function only makes sense inside `$match`.
Allowing `$when` to be called anywhere would introduce invalid usage patterns such as:
```eats
$when[fruit;97268]
```
By making `$when` a scoped function, it can only be used inside `$match`, where the required context exists.

## How Scoped Functions Work
A scoped function always has a **parent function**.
```text
$match
 └─ $when
```
or basically...
```text
$switch[]
└── $case[]
```

When the parent function executes:
1. A child execution context is created.
2. The scoped functions are loaded into that context.
3. The scoped code is evaluated.
4. The scoped functions are discarded.

As a result, scoped functions are unavailable outside their parent scope.

## Creating the Parent Function
Let's create a simple `$match` function.

```js
// functions/match.js

const {
    APIFunction,
    ParamType,
    Util
} = require("easy-api.ts");

exports.default = class MatchFunction extends APIFunction {
    name = "$match";
    description = "Evaluates multiple match branches.";

    parameters = [
        {
            name: "Value",
            type: ParamType.String,
            required: true,
            // ...
        },
        {
            name: "Code",
            type: ParamType.String,
            required: true,
            // ...
        }
    ];

    compile = false;

    async run(d, [value, code]) {
        const data = d.extend(d._, d.__);

        data.functions.load(
            __dirname,
            (fn) =>
                typeof fn.parent !== "undefined" &&
                fn.parent.name === this.name
        );

        data.setInternalVar("MATCH", value);

        return await Util.resolveCode(
            data,
            code
        );
    }
};
```

### Why `compile = false`?
The second parameter contains executable code.
If compilation is enabled, the code may be resolved before the scoped functions are loaded.
For this reason, parent functions that execute custom code usually set:

```js
compile = false;
```

## Creating the Scoped Function
Now let's create the `$when` function.

```js
// functions/when.js
const {
    APIFunction,
    ParamType
} = require("easy-api.ts");

const MatchFunction = require("./match.js");

exports.default = class WhenFunction extends APIFunction {
    name = "$when";
    description = "Executes code when the value matches.";

    parameters = [
        {
            name: "Value",
            type: ParamType.String,
            required: true
        },
        {
            name: "Code",
            type: ParamType.String,
            required: true
        }
    ];

    parent = new MatchFunction();
    compile = true;

    async run(d, [value, code]) {
        if (!d.getInternalVar("MATCH") === value) return;
        return code;
    }
};
```

## The `parent` Property
The `parent` property determines where the function can be used.

```js
parent = new ParentFunction();
```

This means the function will only be loaded when `$match` creates its scoped execution context.
## Using the Scoped Function
Valid usage:
```eats
$let[role;admin]

$match[$get[role];
    $when[owner;
        Owner panel.
    ]

    $when[admin;
        Admin panel.
    ]

    $when[user;
        User panel.
    ]
]
```

Invalid usage:

```eats
$when[result;123]
```

Output:

```txt
ERROR: $when is not a function.
```

This happens because `$when` only exists inside `$match`.

## Scoped Contexts
A scoped function has access to the execution context created by its parent.
This includes:
* Variables created with `$let`
* Internal execution data
* Scoped placeholders
* Other scoped functions loaded by the same parent

```text
Parent Context
│
├── Variables
├── Internal Data
│
└── Child Context
    ├── Scoped Functions
    ├── Scoped Variables
    └── Scoped Placeholders
```

## Best Practices
* Use scoped functions when a function only makes sense inside a specific context.
* Keep scoped APIs small and focused.
* Load scoped functions into a cloned context instead of the parent context.
* Avoid exposing internal helper functions globally.

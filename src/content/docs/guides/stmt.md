---
title: Conditional Statements
description: Brief guide on how to use "$stmt".
---

# Conditional Statements
The `$stmt` function allows multiple conditional branches to be evaluated as a single statement block.
It is designed to group `$if`, `$elseif`, and `$else` conditions together, making complex decision logic easier to read and maintain.

## Basic Example
```eats
$let[myValue;bedwars]

$stmt[
    $if[$get[myValue]==skyblock;
        SkyBlock selected.
    ]

    $elseif[$get[myValue]==bedwars;
        BedWars selected.
    ]

    $else[
        Unknown game mode.
    ]
]
```

In this example:
* If `myValue` is `skyblock`, the first branch is executed.
* If `myValue` is `bedwars`, the second branch is executed.
* If none of the conditions match, the `$else` branch is executed.

## Supported Functions
Only the following functions can be used directly inside a `$stmt` block:
* `$if`
* `$elseif`
* `$else`

Example:
```eats
$stmt[
    $if[condition;
        ...
    ]

    $elseif[anotherCondition;
        ...
    ]

    $else[
        ...
    ]
]
```

## Invalid Example
```eats
$stmt[
    $log[Hello]

    $if[condition;
        ...
    ]
]
```
The example above is invalid because `$log` is not a supported statement inside `$stmt`.

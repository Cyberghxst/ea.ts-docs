---
title: Reverse Reading
description: Which reading style do you prefer?
---

# Reverse Reading
By default, easy-api.ts reads and executes code from **top to bottom**, following the order in which instructions appear.
Reverse Reading is an experimental mode that changes this behavior, causing the parser to process code from **bottom to top** instead.

## Enabling Reverse Reading
You can enable Reverse Reading through the API constructor:
```js
const { API } = require("easy-api.ts");

const api = new API({
    reverse: true
});
```

Once enabled, all parsed code will be read from the last instruction to the first.
## Default Behavior
```eats
$log[First]
$log[Second]
$log[Third]
```

Execution order:
```txt
First
Second
Third
```

## Reverse Reading Behavior
```eats
$log[First]
$log[Second]
$log[Third]
```

Execution order:
```txt
Third
Second
First
```

> Unlike most scripting languages, easy-api.ts can parse code in either direction, allowing alternative execution flows through Reverse Reading mode.
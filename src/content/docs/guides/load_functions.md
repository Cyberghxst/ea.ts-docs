---
title: Loading Custom Functions
description: Load your custom functions using this guide.
---

# Loading Custom Functions
Once your function has been created, it must be registered before it can be used.

## Loading from a File
```js
const api = new API(...);

api.functions.load("./functions/");
```

## Loading a Function Class
```js
api.addFunctions(ReverseFunction);
```

## Loading an Instance
```js
const fn = new ReverseFunction();

api.addFunctions(fn);
```

## Loading a Raw Definition
```js
api.addFunctions({
    name: "$hello",
    ...
});
```

## Loading Multiple Functions
```js
api.addFunctions(
    fn,
    ReverseFunction,
    anotherFunction
);
```

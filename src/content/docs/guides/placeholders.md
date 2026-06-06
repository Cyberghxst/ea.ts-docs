---
title: Function Placeholders
description: Using placeholders in supported functions.
---

# Placeholders

Placeholders are special values that are dynamically replaced by a function during execution.

They provide access to contextual data such as callback parameters, iteration values, object entries, or runtime errors.

## Placeholder Reference

| Placeholder | Used By |
|-------------|---------|
| %param_N% | $createCallback |
| %element% | $arrayForEach |
| %error% | $try |
| %key% | $objectEntries |
| %value% | $objectEntries |
| %default% | $setBody |

## Functions Supporting Placeholders

### $createCallback

`$createCallback` provides access to callback arguments through the `%param_N%` placeholder syntax.

```eats id="g9w2k1"
$ignore[Example]

$createCallback[
    deg2rad;
    $calculate[%param_0% * $pi / 180]
]
```

#### Available Placeholders

| Placeholder | Description           |
| ----------- | --------------------- |
| `%param_0%` | First parameter       |
| `%param_1%` | Second parameter      |
| `%param_2%` | Third parameter       |
| ...         | Additional parameters |

---

### $arrayForEach

`$arrayForEach` exposes the current element being processed through the `%element%` placeholder.

```eats id="m2x8p4"
$ignore[Example]

$arrayCreate[
    fruits;
    Apple,Banana,Mango,Watermelon
]

$arrayForEach[
    fruits;
    $log[Current element: %element%]
]
```

#### Available Placeholders

| Placeholder | Description           |
| ----------- | --------------------- |
| `%element%` | Current array element |

---

### $try

Inside the catch block of `$try`, the `%error%` placeholder contains the error message that caused the failure.

```eats id="t7n5q9"
$ignore[Example]

$try[
    $log;
    $log[Unable to run code with reason: %error%]
]
```

#### Available Placeholders

| Placeholder | Description   |
| ----------- | ------------- |
| `%error%`   | Error message |

---

### $objectEntries

`$objectEntries` exposes both the current key and value during iteration.

```eats id="p3r7v6"
$ignore[Example]

$objectCreate[user;{
    "name": "Matt",
    "age": "96",
    "joinedAt": "1972"
}]

$objectEntries[
    user;
    Current data: **%key%** = **%value%**
]
```

#### Available Placeholders

| Placeholder | Description          |
| ----------- | -------------------- |
| `%key%`     | Current object key   |
| `%value%`   | Current object value |

---

### $setBody

When returning a canvas response, `$setBody` exposes the generated canvas output through `%default%`.

```eats id="d4s1h8"
$ignore[Example]

$setBody[%default%]
```

#### Available Placeholders

| Placeholder | Description               |
| ----------- | ------------------------- |
| `%default%` | Generated canvas response |
| :::         |                           |

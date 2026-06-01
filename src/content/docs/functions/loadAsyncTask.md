---
title: $loadAsyncTask
description: Loads an asynchronous task to execute later.
---

Loads an asynchronous task to execute later.
## Parameters
|   Name    |                  Description                   | Enforced | Default Value |
|-----------|------------------------------------------------|----------|---------------|
| Task Name | The name of the asynchronous task to load.     | Yes      | None          |
| Code      | The code to execute for the asynchronous task. | Yes      | None          |
## Example
```eats
$loadAsyncTask[taskName;code]
```
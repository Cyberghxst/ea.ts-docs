---
title: $promiseAny
description: Waits for the first promise to resolve and returns its result.
---

Waits for the first promise to resolve and returns its result.
:::danger
**$promiseAny** is only usable inside **$async**.
:::
## Parameters
|    Name    |                 Description                 | Enforced | Default Value |
|------------|---------------------------------------------|----------|---------------|
| Task Names | An array of asynchronous tasks to wait for. | Yes      | None          |
## Example
```eats
$promiseAny[...taskNames]
```
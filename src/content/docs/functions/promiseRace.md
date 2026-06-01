---
title: $promiseRace
description: Waits for the faster promise to resolve and returns its result.
---

Waits for the faster promise to resolve and returns its result.
:::danger
**$promiseRace** is only usable inside **$async**.
:::
## Parameters
|    Name    |                 Description                 | Enforced | Default Value |
|------------|---------------------------------------------|----------|---------------|
| Task Names | An array of asynchronous tasks to wait for. | Yes      | None          |
## Example
```eats
$promiseRace[...taskNames]
```
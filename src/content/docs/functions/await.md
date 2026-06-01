---
title: $await
description: Waits for a promise to resolve and returns its result.
---

Waits for a promise to resolve and returns its result.
:::danger
**$await** is only usable inside **$async**.
:::
## Parameters
|   Name    |                  Description                   | Enforced | Default Value |
|-----------|------------------------------------------------|----------|---------------|
| Task Name | The name of the asynchronous task to wait for. | Yes      | None          |
## Example
```eats
$await[taskName]
```
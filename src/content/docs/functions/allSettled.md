---
title: $allSettled
description: Waits for all promises to settle and returns an array of their results.
---

Waits for all promises to settle and returns an array of their results.
:::danger
**$allSettled** is only usable inside **$async**.
:::
## Parameters
|    Name    |                  Description                   | Enforced | Default Value |
|------------|------------------------------------------------|----------|---------------|
| Separator  | The separator to use when joining the results. | Yes      | None          |
| Task Names | An array of asynchronous tasks to wait for.    | Yes      | None          |
## Example
```eats
$allSettled[separator;...taskNames]
```
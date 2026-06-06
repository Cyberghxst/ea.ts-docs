---
title: Not Found Handler
description: How to set a custom "not found" error handler.
---

## Custom Not Found Handler

By default, easy-api.ts returns a standard response when a requested route does not exist.

You can customize this behavior using the `setNotFoundHandler()` method, allowing you to return your own response body, status code, and content type.

### Example

```js
// index.js
const api = new API(...);

api.setNotFoundHandler(`
$reply[
    $setCode[404]
    $setType[json]
    $setBody[{
        "msg": "route not found."
    }]
]
`);
```

When a client requests a route that is not registered, the API will respond with:

```json
{
    "msg": "route not found."
}
```

And the HTTP status code:

```txt
404 Not Found
```

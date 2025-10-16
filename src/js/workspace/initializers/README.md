# Initializer Contract

Each initializer must implement:

```js
class SomeInitializer {
  canHandle(category, module) { /* return boolean */ }
  async init(data, ctx) { /* perform initialization */ }
}
```

Where `data` is:
```js
{
  category: string, // e.g., 'mdmp', 'opord', 'jpp'
  module?: string,  // contentModule name
  html?: string     // optional content html if needed
}
```

And `ctx` provides shared utilities:
```js
{
  timing: { detectBrowser, scheduleInitialize },
  container: { assertContainers },
  scripts: { executeEmbeddedScripts },
  state: { setCurrentView, getCurrentView },
  log: Log
}
```

Errors:
- Throw a typed error (e.g., InitializerError) on failure; router/WorkspaceComponent renders ContentErrorView.

Cleanup:
- Any module that attaches listeners should expose cleanup(); initializers must call cleanup before switching sections.


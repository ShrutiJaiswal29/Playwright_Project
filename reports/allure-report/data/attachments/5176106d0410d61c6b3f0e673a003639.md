# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.ts >> @regression login with wrong password shows error
- Location: tests\ui\login.spec.ts:11:5

# Error details

```
Error: page.goto: net::ERR_ABORTED at https://parabank.parasoft.com/
Call log:
  - navigating to "https://parabank.parasoft.com/", waiting until "load"

```

```
Error: browserContext.close: Target page, context or browser has been closed
```
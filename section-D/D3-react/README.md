# D3: Student Board in React (6 bugs, 6 marks)

A React app that loads students from the mock API and lets you add and delete them (add and delete only change the screen, they are not saved to the API). There are **6 bugs**. Some crash the app, some only show up when you use it, and some only show up in the browser console or the mock-api terminal.

Start:

1. In `mock-api/`: `pnpm install` and `pnpm start` (keep it running)
2. In `D4-react/`: `pnpm install` and `pnpm dev`, then open the URL Vite prints

## When everything is fixed

- "Loading students..." shows briefly, then 7 student cards appear with name, email, course and an Active/Inactive badge.
- The mock-api terminal shows only 1 or 2 requests in total (2 is normal in development because of StrictMode), not a number that keeps growing.
- You can type in **both** inputs of the form. "Add student" adds a new card at the end and the count goes up.
- "Delete" removes only that card, and it does not come back.
- The browser console has no red errors and no warnings about keys.

Mark every fix with a `// FIX n:` comment (use `{/* FIX n: ... */}` inside JSX).

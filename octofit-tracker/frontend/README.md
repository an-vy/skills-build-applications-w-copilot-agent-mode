# OctoFit Frontend

Define `VITE_CODESPACE_NAME` in `.env.local` when you want the React app to call the backend through the Codespaces URL.

Example:

```env
VITE_CODESPACE_NAME=your-codespace-name
```

When `VITE_CODESPACE_NAME` is unset, the frontend falls back to `http://localhost:8000/api` to avoid broken `https://undefined-8000.app.github.dev` requests.
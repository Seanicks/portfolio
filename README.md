# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## Contact form (serverless Gmail)

This project includes a serverless endpoint to forward contact form submissions directly to your Gmail via Nodemailer. To enable it:

1. Enable 2FA on your Google account and create an **App Password** for Mail: https://myaccount.google.com/security → App passwords.
2. Add the following environment variables to your deployment (Vercel, Netlify, etc.):

   - `GMAIL_USER=seanjameslacaba@gmail.com`
   - `GMAIL_PASS=<your_app_password>`
   - `VITE_USE_SERVERLESS=true`
   - (Optional) `VITE_API_CONTACT_URL=/api/contact`

3. Deploy the site (on Vercel, the serverless function lives at `/api/contact`).

Local dev: keep `VITE_USE_SERVERLESS=false` (default) and test using Formspree or the mailto fallback.

Security: Do NOT commit your real app password to source control—use your hosting provider's secret/env settings.


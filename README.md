# CFI Exam Starter Kit

Copy this whole folder, rename it to `exam-<your-name>`, and work inside it.

| Folder | Used for | How to start |
| --- | --- | --- |

| `D1-express/` | Debugging task D1 | `pnpm install` then `pnpm dev` |
| `D2-mongoose/` | Debugging task D3 (needs MongoDB) | `pnpm install`, `pnpm seed`, then `pnpm dev` |
| `D3-react/` | Debugging task D4 (needs mock-api running) | `pnpm install` then `pnpm dev` |

Create these folders yourself for Section C:

- `C-backend/` for C1 and C2(one Express project)

## Rules for Section D

- Each `D` folder has its own `README.md` that says what the app should do and how many bugs it has.
- Fix bugs **in place**. Next to every fix, add a comment like `// FIX 3: route param needs a colon`.
- Do not rewrite whole files. Change only what is broken.
- If you need to change the port or the MongoDB URI for your machine, edit `.env`. That is not a bug.

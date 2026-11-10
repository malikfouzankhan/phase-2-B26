# D1: Course API (6 bugs, 6 marks)

A small Express API that keeps courses in memory (no database). There are **6 bugs**.

Start: `pnpm install` then `pnpm dev`. It should run on http://localhost:5001.

## When everything is fixed

| Request | Expected result |
| --- | --- |
| `GET /api/courses` | 200, array of 3 courses |
| `GET /api/courses?maxFee=20000` | 200, only "Data Analytics". No error in the server terminal. |
| `GET /api/courses/2` | 200, the "Python Full Stack" course |
| `GET /api/courses/99` | 404, `{ "message": "Course not found" }` |
| `POST /api/courses` with `{ "title": "DevOps", "fee": 20000, "duration": "3 months" }` | 201, the new course with id 4 |
| `POST /api/courses` with `{ "duration": "1 month" }` | 400, `{ "message": "title and fee are required" }` |
| `PATCH /api/courses/1` with `{ "fee": 27000 }` | 200, MERN Stack with fee 27000 |
| `DELETE /api/courses/3` | 200, `{ "message": "Course deleted" }` |

Test with Postman, Thunder Client, or curl. Mark every fix with a `// FIX n:` comment.

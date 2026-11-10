# D3: Student API with Mongoose (6 bugs, 6 marks)

Courses, students and enrollments stored in MongoDB. There are **6 bugs**, all inside `models/` and `controllers/`.

Start:

1. Make sure MongoDB is running (local or Atlas). Put your URI in `.env` if it is not the default.
2. `pnpm install`
3. `pnpm seed` (prints the ids you need for testing; `seed.js` has no bugs)
4. `pnpm dev` (runs on http://localhost:5003)

## When everything is fixed

| Request | Expected result |
| --- | --- |
| Server start | Prints "MongoDB connected" and does not crash |
| `GET /api/courses` | 200, 2 courses |
| `GET /api/students` | 200, 3 students, each with `course: { _id, title, fee }` |
| `GET /api/students/<Ayesha's id>` | 200, Ayesha with her course populated |
| `PATCH /api/students/<Ayesha's id>` with `{ "age": 22 }` | 200, Ayesha with `age: 22` (the **new** value) |
| `POST /api/enrollments` with `{ "student": "<Rahul's id>", "course": "<MERN id>" }` | 201, enrollment with `status: "active"` |
| `GET /api/enrollments/details` | 200, array of `{ studentName, studentEmail, courseTitle, fee, status }` (not empty) |

Mark every fix with a `// FIX n:` comment.

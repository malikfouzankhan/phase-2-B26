export default function StudentCard(id, name, email, course, isActive, onDelete) {
  return (
    <article className="card">
      <div className="card-top">
        <h3>{name}</h3>
        <span className={isActive ? "badge active" : "badge inactive"}>
          {isActive ? "Active" : "Inactive"}
        </span>
      </div>
      <p>{email}</p>
      <p className="course">{course}</p>
      <button className="delete" onClick={onDelete(id)}>
        Delete
      </button>
    </article>
  );
}

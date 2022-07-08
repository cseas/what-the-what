export function SearchResult({ problem, tags, answer = null }) {
  return (
    <>
      <p className="p-bold" style={{ padding: "16px 0 4px" }}>
        {problem}
      </p>
      <p>{answer}</p>
      <div>
        {tags.map((tag) => (
          <span className="span-tag">{tag}</span>
        ))}
        <button>Add answer</button>
      </div>
    </>
  );
}

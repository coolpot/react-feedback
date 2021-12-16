function App() {
  const title = "Blog Post";
  const body = "Blog post data!";
  const loading = false;
  const showComments = true;

  const comments = [
    { id: 1, text: "Comment 1" },
    { id: 2, text: "Comment 2" },
    { id: 3, text: "Comment 3" },
  ];

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <h1>{title}</h1>
      <h4>{body}</h4>

      {showComments ? (
        <div className="comments">
          <h3>Comments ({comments.length})</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment.text}</li>
            ))}
          </ul>
        </div>
      ) : (
        "NO"
      )}
    </>
  );
}

export default App;

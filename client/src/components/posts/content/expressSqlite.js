import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import "components/css/posts.scss";

function ExpressSqlite() {
  let Title = "Express with Sqlite3";
  return (
    <div className="post-wrapper post">
      <h3 className="post-title text-center">{Title}</h3>
      <div className="sec01">
        <h5 className="subsub">app.js</h5>
        <SyntaxHighlighter language="javascript" style={nightOwl}>
          {`const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database(':memory:')

db.serialize(() => {
  db.run('CREATE TABLE lorem (info TEXT)')
  const stmt = db.prepare('INSERT INTO lorem VALUES (?)')

  for (let i = 0; i < 10; i++) {
    stmt.run(\`Ipsum $\{i}\`)
  }

  stmt.finalize()

  db.each('SELECT rowid AS id, info FROM lorem', (err, row) => {
    console.log(\`$\{row.id}: $\{row.info}\`)
  })
})

db.close()

`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
export default ExpressSqlite;

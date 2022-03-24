import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {nightOwl} from 'react-syntax-highlighter/dist/esm/styles/prism';

export const P04Conflicted = () => {
  let code1 = `Compiled with problems:

  ERROR

  Plugin "react" was conflicted between "package.json » eslint-config-react-app » D:\repo\sqlite3app\node_modules\eslint-config-react-app\base.js" and "BaseConfig » D:\Repo\sqlite3app\node_modules\eslint-config-react-app\base.js".

  webpack 5.70.0 compiled with 1 error in 12270 ms
  `;

  let Post = (
    <div className="sec" id="conflicted">
      <h4 className="subtitle">
        Plugin "react" was conflicted between package.json and BaseConfig
      </h4>
      <hr/>
      <SyntaxHighlighter
          language="javascript"
          style={nightOwl}
        >
          {code1}
      </SyntaxHighlighter>
      <p className="post-text">
        Running <code>npm start</code> on a create-react-app application failed to compile. If you look closely you can see that eslint-config-react-app is looking for "D:\repo" while BaseConfig is looking for "D:\Repo".
      </p>
      <p className="post-text">
        This is a Windows problem. Windows is case-insensitive but Webpack is case-sensitive.
      </p>
      <p className="post-text">
        To fix, simply open the folder "D:\Repo" in VS Code.
      </p>
    </div>
  );

  return <>{Post}</>;
};

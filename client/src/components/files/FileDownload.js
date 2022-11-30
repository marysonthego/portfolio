import React, {useState }from "react";
import "./style.css";

export default function FileDownload() {
  const defaultFileType = "json";
  const [file, setFile] = useState({
    file: {
    fileType: defaultFileType,
    fileDownloadUrl: null,
    status: "",
    data: [
      	{ state: "Arizona",        electors: 11 },
      	{ state: "Florida",        electors: 29 },
      	{ state: "Iowa",           electors:  6 },
      	{ state: "Michigan",       electors: 16 },
      	{ state: "North Carolina", electors: 15 },
      	{ state: "Ohio",           electors: 18 },
      	{ state: "Pennsylvania",   electors: 20 },
      	{ state: "Wisconsin",      electors: 10 },
      ]
    }
  });
  const [data, setData] = useState(
    data = [
      { state: "Arizona",        electors: 11 },
      { state: "Florida",        electors: 29 },
      { state: "Iowa",           electors:  6 },
      { state: "Michigan",       electors: 16 },
      { state: "North Carolina", electors: 15 },
      { state: "Ohio",           electors: 18 },
      { state: "Pennsylvania",   electors: 20 },
      { state: "Wisconsin",      electors: 10 },
    ]
  );

  const changeFileType = (e) => {
    const value = e.target.value;
      setFile({
        file: {...file, fileType: value}
    });
  };

  const download = (e) => {
    e.preventDefault();
    // Prepare the file
    let output;
    if (file.fileType === "json") {
      output = JSON.stringify({states: data}, null, 4);
    } else if (file.fileType === "csv") {
      // Prepare data:
      let contents = [];
      contents.push (["State", "Electors"]);
      data.forEach(row => {
        contents.push([row.state, row.electors])
      });
      output = makeCSV(contents);

    } else if (file.fileType === "text"){
      // Prepare data:
      output = '';
      data.forEach(row => {
        output += `${row.state}: ${row.electors}\n`
      });
    };
    setData({
      data: [...data, output]
    });
    // Download it
    const blob = new Blob([output]);
    const fileDownloadUrl = URL.createObjectURL(blob);
    setFile ({
      file: {...file, fileDownloadUrl: fileDownloadUrl}
    });
    //dofileDownload.click();
    //URL.revokeObjectURL(fileDownloadUrl);  // free up storage--no longer needed.
    //setFile({fileDownloadUrl: ""})
  };

  const makeCSV = (content) => {
  	let csv = '';
    content.forEach(value => {
    	value.forEach((item, i) => {
        let innerValue = item === null ? '' : item.toString();
        let result = innerValue.replace(/"/g, '""');
        if (result.search(/("|,|\n)/g) >= 0) {
          result = '"' + result + '"'
        }
        if (i > 0) {csv += ','}
        csv += result;
      })
    	csv += '\n';
	  })
    return csv;
  };

 const upload = (e) => {
  	e.preventDefault();
    //dofileUpload.click();
  };

  const openFile = (evt) => {
    let status = []; // Status output
    const fileObj = evt.target.files[0];
    const reader = new FileReader();

    let fileloaded = e => {
      // e.target.result is the file's content as text
      const fileContents = e.target.result;
      status.push(`File name: "${fileObj.name}". Length: ${fileContents.length} bytes.`);
      // Show first 80 characters of the file
      const first80char = fileContents.substring(0,80);
      status.push (`First 80 characters of the file:\n${first80char}`)
      setFile({
        file: {...file, status: status.join("\n")}
      });

      reader.onload = fileloaded;
      reader.readAsText(fileObj);
    }
  };

  return (

      <div>
        <h2>2020 US Swing States</h2>
        <table>
          <thead>
          <tr><th>State</th><th>Electors</th></tr>
          </thead>
          <tbody>
          {data.map(item => (
            <tr key={item.state}>
              <td>{item.state}</td><td>{item.electors}</td>
            </tr>
          ))}
        	</tbody>
        </table>
        <form>
          <span className="mr">File type:</span>
          <select name="fileType"
            onChange={changeFileType}
            value={file.fileType}
            className="mr"
          >
            <option value="csv">CSV</option>
            <option value="json">JSON</option>
            <option value="text">Text</option>
          </select>

          <button onClick={download}>
            Download the file!
          </button>

          {/* <a className="hidden"
             download={fileNames[file.fileType]}
             href={file.fileDownloadUrl}
             ref={e=>dofileDownload = e}
          >download it</a> */}

          <p><button onClick={upload}>
            Upload a file!
          </button> Only json, csv, and text files are ok.</p>

          <input type="file" className="hidden"
            multiple={false}
            accept=".json,.csv,.txt,.text,application/json,text/csv,text/plain"
            onChange={evt => openFile(evt)}
            // ref={e=>dofileUpload = e}
          />
        </form>
        <pre className="status">{file.status}</pre>
      </div>
	);
};

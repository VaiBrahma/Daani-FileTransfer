import React, { useState } from 'react';
import {Link} from "react-router-dom";
import './InputFile.css'

function FileSorter() {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;

    const sortedFiles = Array.from(selectedFiles).reduce((acc, file) => {
      const fileType = file.type.split('/')[0]; // Get the file type (e.g., image, text)

      if (!acc[fileType]) {
        acc[fileType] = [];
      }
      acc[fileType].push(file);

      return acc;
    }, {});

    setFiles(sortedFiles);
  };

  return (
    <div className='flex'>

      <form className='flex' action="/upload" method="post" encType="multipart/form-data">
        <label htmlFor="file-upload" className='file-upload return circularButton'>Select Files</label>
        <input id='file-upload' type="file" multiple onChange={handleFileChange} />

        <div className="container">
        <div className="tables">
          {Object.keys(files).map((fileType) => (
              <table className={fileType}>
                  <thead>
                    <th>{fileType==='audio'?'Tunes':(fileType==='image'?'Pics':(fileType==='application'?'PDFs':(fileType===''?'Codes':`${fileType}`)))}</th>
                  </thead>
                  <tbody>
                    {files[fileType].map((file, index) => (
                        <tr key={index}>{file.name}</tr>
                    ))}
                  </tbody>
              </table>
          ))}
        </div>
        
      </div>

        <div className="positionBelow">
          <input type="submit" value="Send" className='btn circularButton return uploadCss'/>
        </div>
          <Link to='/' className='return circularButton uploadCss'>Return</Link>
      </form>
      
    </div>
  );
}

export default FileSorter;

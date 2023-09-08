import React, { useState } from 'react';
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
      <input type="file" multiple onChange={handleFileChange} />
      <div className="container">
        <div className="tables">
          {Object.keys(files).map((fileType) => (
              <table className={fileType}>
                  <th>{fileType==='audio'?'Tunes':(fileType==='image'?'Pics':(fileType==='application'?'PDFs':(fileType===''?'Codes':`${fileType}`)))}</th>
                  {files[fileType].map((file, index) => (
                      <tr key={index}>{file.name}</tr>
                  ))}
              </table>
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default FileSorter;

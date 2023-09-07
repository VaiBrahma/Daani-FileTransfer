import React, { useState } from 'react';
import {Link} from "react-router-dom";
import './InputFile.css'

function FileSorter() {

  fetch(`http://10.81.36.117:7883/api/upload`).then((response)=>response.json()).then((data)=>{}).catch((error)=>{console.log('Error',error)})

  const [flag,setFlag] = useState(0);
  const onclick = ()=>{
    setTimeout(() => {
      setFlag(1);
    }, 3000);
  }
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

      <form className='flex' action="http://10.81.36.117:7883/api/upload" method="post" encType="multipart/form-data">
        <label htmlFor="file-upload" className='file-upload return circularButton'>Select Files</label>
        <input id='file-upload' type="file" multiple onChange={handleFileChange} onClick={onclick}/>

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
        {flag?<input type="submit" value="Send" className='btn circularButton return uploadCss'/>:''}
        {flag?<input type="submit" value="Send" className='btn top-right top-right2 circularButton return uploadCss'/>:''}
          <Link to='/' className='return top-right circularButton uploadCss'>Return</Link>
        </div>
      </form>
      
    </div>
  );
}

export default FileSorter;

import React, { useState } from 'react';

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
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      {Object.keys(files).map((fileType) => (
        <table>
            <th>{fileType}</th>
            {files[fileType].map((file, index) => (
                <tr key={index}>{file.name}</tr>
            ))}
        </table>
      ))}
    </div>
  );
}

export default FileSorter;

import React, { useState } from 'react';
import axios from 'axios';

function FileUpload() {
    const [file, setFile] = useState(null);

    const onInputChange = (event) => {
        setFile(event.target.files[0]);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        
        axios.post('http://localhost:5000/pdf_manipulation/upload_pdf', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => alert('File uploaded successfully'))
        .catch(error => alert('Error uploading file'));
    };

    return (
        <form onSubmit={onFormSubmit}>
            <h1>Upload PDF</h1>
            <input type="file" name="file" onChange={onInputChange} accept=".pdf" />
            <button type="submit">Upload</button>
        </form>
    );
}

export default FileUpload;

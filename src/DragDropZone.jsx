import { useState } from 'react';
import PropTypes from 'prop-types';

function DragDropZone({ onDataExtracted }) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadStatus, setUploadStatus] = useState('');

  const parseAHKFile = (content) => {
    const data = {
      name: '',
      address: '',
      email: '',
      degree: '',
      phonenumber: ''
    };

    try {
      // Extract values using regex patterns
      const nameMatch = content.match(/replacementText_name\s*:=\s*"([^"]*)"/);
      const addressMatch = content.match(/replacementText_address\s*:=\s*"([^"]*)"/);
      const emailMatch = content.match(/replacementText_email\s*:=\s*"([^"]*)"/);
      const degreeMatch = content.match(/replacement_degree\s*:=\s*"([^"]*)"/);
      const phoneMatch = content.match(/replacement_phonenumber\s*:=\s*"([^"]*)"/);

      if (nameMatch) data.name = nameMatch[1];
      if (addressMatch) data.address = addressMatch[1];
      if (emailMatch) data.email = emailMatch[1];
      if (degreeMatch) data.degree = degreeMatch[1];
      if (phoneMatch) data.phonenumber = phoneMatch[1];

      return data;
    } catch (error) {
      console.error('Error parsing AHK file:', error);
      return null;
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length === 0) return;

    const file = files[0];
    
    // Check if file is .ahk
    if (!file.name.endsWith('.ahk')) {
      setUploadStatus('error');
      setTimeout(() => setUploadStatus(''), 3000);
      return;
    }

    try {
      const content = await file.text();
      const extractedData = parseAHKFile(content);
      
      if (extractedData) {
        onDataExtracted(extractedData);
        setUploadStatus('success');
        setTimeout(() => setUploadStatus(''), 3000);
      } else {
        setUploadStatus('error');
        setTimeout(() => setUploadStatus(''), 3000);
      }
    } catch (error) {
      console.error('Error reading file:', error);
      setUploadStatus('error');
      setTimeout(() => setUploadStatus(''), 3000);
    }
  };

  const handleFileInput = async (e) => {
    const files = e.target.files;
    if (files.length === 0) return;

    const file = files[0];
    
    if (!file.name.endsWith('.ahk')) {
      setUploadStatus('error');
      setTimeout(() => setUploadStatus(''), 3000);
      return;
    }

    try {
      const content = await file.text();
      const extractedData = parseAHKFile(content);
      
      if (extractedData) {
        onDataExtracted(extractedData);
        setUploadStatus('success');
        setTimeout(() => setUploadStatus(''), 3000);
      } else {
        setUploadStatus('error');
        setTimeout(() => setUploadStatus(''), 3000);
      }
    } catch (error) {
      console.error('Error reading file:', error);
      setUploadStatus('error');
      setTimeout(() => setUploadStatus(''), 3000);
    }

    // Reset input
    e.target.value = '';
  };

  return (
    <div className="mt-5">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-all cursor-pointer ${
          isDragging
            ? 'border-blue-500 bg-[rgba(59,130,246,0.1)]'
            : uploadStatus === 'success'
            ? 'border-green-500 bg-[rgba(34,197,94,0.1)]'
            : uploadStatus === 'error'
            ? 'border-red-500 bg-[rgba(239,68,68,0.1)]'
            : 'border-[#424242] bg-[rgba(255,255,255,0.05)] hover:border-[#666] hover:bg-[rgba(255,255,255,0.08)]'
        }`}
      >
        <input
          type="file"
          accept=".ahk"
          onChange={handleFileInput}
          className="hidden"
          id="file-upload"
        />
        <label htmlFor="file-upload" className="cursor-pointer">
          <div className="text-4xl mb-3">
            {uploadStatus === 'success' ? '✅' : uploadStatus === 'error' ? '❌' : '📁'}
          </div>
          <p className="text-[white] font-semibold mb-2">
            {uploadStatus === 'success'
              ? 'File Imported Successfully!'
              : uploadStatus === 'error'
              ? 'Error: Invalid AHK File'
              : 'Drop your AHK file here'}
          </p>
          <p className="text-[#888] text-sm">
            {uploadStatus === ''
              ? 'or click to browse (.ahk files only)'
              : uploadStatus === 'success'
              ? 'Form fields have been populated'
              : 'Please select a valid AutoHotkey script file'}
          </p>
        </label>
      </div>
    </div>
  );
}

DragDropZone.propTypes = {
  onDataExtracted: PropTypes.func.isRequired,
};

export default DragDropZone;

import React, { useState } from 'react'

export default function FilePicker({
  label = 'Label',
  description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  learnMoreText = 'Learn more',
  onFilesSelected = null,
  maxFileSize = 25
}) {
  const [files, setFiles] = useState([
    { id: 1, name: 'File name 1', size: '441.9 KB' },
    { id: 2, name: 'File name 2', size: '441.9 KB' },
    { id: 3, name: 'File name 3', size: '441.9 KB' },
    { id: 4, name: 'File name 4', size: '441.9 KB' },
    { id: 5, name: 'File name 5', size: '441.9 KB' }
  ])
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    // Handle dropped files
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // You can process files here
      if (onFilesSelected) {
        onFilesSelected(e.dataTransfer.files)
      }
    }
  }

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      if (onFilesSelected) {
        onFilesSelected(e.target.files)
      }
    }
  }

  const removeFile = (id) => {
    setFiles(prev => prev.filter(f => f.id !== id))
  }

  const clearAll = () => {
    setFiles([])
  }

  return (
    <div className="file-picker">
      {/* Label and description */}
      <div className="file-picker-header">
        <div>
          <p className="file-picker-label">{label}</p>
          <p className="file-picker-description">
            {description}
            <span style={{ color: 'var(--dvt-3)', marginLeft: 6 }}>{learnMoreText}</span>
          </p>
        </div>
      </div>

      {/* File drop zone */}
      <input
        type="file"
        id="file-input"
        multiple
        onChange={handleChange}
        style={{ display: 'none' }}
      />
      <label
        htmlFor="file-input"
        className={`file-picker-dropzone ${dragActive ? 'active' : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <div className="file-picker-dropzone-content">
          <p className="file-picker-dropzone-title">Select a file or drop one here.</p>
          <p className="file-picker-dropzone-text">Maximum file size is {maxFileSize} MB.</p>
        </div>
      </label>

      {/* Files queued section */}
      {files.length > 0 && (
        <div className="file-picker-files">
          <div className="file-picker-files-header">
            <h4 className="file-picker-files-title">Files queued</h4>
            <button className="file-picker-clear-btn" onClick={clearAll}>
              Clear
            </button>
          </div>
          <div className="file-picker-files-list">
            {files.map(file => (
              <div key={file.id} className="file-picker-file-item">
                <div className="file-picker-file-name">{file.name}</div>
                <div className="file-picker-file-size">{file.size}</div>
                <div className="file-picker-file-actions">
                  <button
                    className="file-picker-delete-btn"
                    onClick={() => removeFile(file.id)}
                    aria-label="Remove file"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

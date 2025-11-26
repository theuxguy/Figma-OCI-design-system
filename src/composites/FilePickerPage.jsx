import React from 'react'
import FilePicker from '../components/FilePicker'

export default function FilePickerPage() {
  const handleFilesSelected = (files) => {
    console.log('Files selected:', files)
  }

  return (
    <div style={{ padding: 16 }}>
      <FilePicker
        label="Upload Files"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        learnMoreText="Learn more"
        onFilesSelected={handleFilesSelected}
        maxFileSize={25}
      />
    </div>
  )
}

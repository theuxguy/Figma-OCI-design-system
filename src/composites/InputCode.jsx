import React from 'react'
import InputCode from '../components/InputCode'

export default function InputCodePage() {
  return (
    <div style={{ padding: 16 }}>
      <div style={{ marginTop: 24 }}>
        <InputCode
          label="Policy"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          learnMoreText="Learn more"
          copyAction
          lines={6}
          codeText={'Allow group <group-name> to read buckets in compartment <compartment-name>'}
        />
      </div>
    </div>
  )
}

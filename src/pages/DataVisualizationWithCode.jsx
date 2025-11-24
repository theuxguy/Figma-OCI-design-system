import React from 'react'
import DataVisualizationRuleBuilderRow from '../components/DataVisualizationRuleBuilderRow'
import InputCode from '../components/InputCode'

const sampleSeries = [
  { name: 'Series 1', color: 'var(--dvt-1)', values: [45, 46, 47, 46] },
  { name: 'Series 2', color: 'var(--dvt-2)', values: [30, 31, 30, 31] },
  { name: 'Series 3', color: 'var(--dvt-3)', values: [20, 20, 20, 20] },
  { name: 'Series 4', color: 'var(--dvt-4)', values: [40, 41, 40, 41] }
]

const labels = ['Q1', 'Q2', 'Q3', 'Q4']

export default function DataVisualizationWithCode() {
  return (
    <div style={{ padding: 16 }}>
      <div style={{ marginBottom: 18 }}>
        <DataVisualizationRuleBuilderRow order={1} fieldLabel="Resource" fieldValue="Instance" series={sampleSeries} labels={labels} onRemove={null} />
      </div>

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

import React from 'react'
import InputRow from '../components/InputRow'
import DataVisualizationCard from '../components/DataVisualizationCard'

const sampleSeries = [
  { name: 'Series 1', color: 'var(--dvt-1)', values: [45, 46, 47, 46] },
  { name: 'Series 2', color: 'var(--dvt-2)', values: [30, 31, 30, 31] },
  { name: 'Series 3', color: 'var(--dvt-3)', values: [20, 20, 20, 20] },
  { name: 'Series 4', color: 'var(--dvt-4)', values: [40, 41, 40, 41] }
]

const labels = ['Label', 'Label', 'Label', 'Label']

export default function VisualizationPage() {
  return (
    <div>
      <InputRow />

      <DataVisualizationCard
        title="Data visualization card title (horizontally grouped Bar)"
        series={sampleSeries}
        labels={labels}
        filters={[{label:'Interval', value:'Auto'}, {label:'Statistic', value:'Mean'}]}
      />
    </div>
  )
}

import React from 'react'
import ChartistGraph from 'react-chartist'
import CardWrapper from '../../cards/CardWrapper/CardWrapper'

type Props = {
  title: string
}

const BarChart = ({ title }: Props) => {
  const data = {
    labels: ['W1', 'W2', 'W3', 'W4', 'W5'],
    series: [[1, 2, 4, 8, 6]],
  }

  const options = {
    width: 600,
    high: 10,
    low: -10,
    axisX: {
      labelInterpolationFnc: function (value: number, index: number) {
        return index % 2 === 0 ? value : null
      },
    },
  }

  const type = 'Bar'

  return (
    <CardWrapper title={title}>
      <div className="bar-chart__content">
        <ChartistGraph data={data} options={options} type={type} />
      </div>
      <style>{`
        .bar-chart__content{

        }
      `}</style>
    </CardWrapper>
  )
}

export default BarChart

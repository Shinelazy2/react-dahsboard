import { Link } from 'react-router-dom'
import './chartBox.scss'
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'
import '../../data'
type Props = {
  color: string,
  title: string,
  icon: string,
  dataKey: string,
  number: number | string,
  percentage: number,
  chartData: object[]
}

const ChartBox = (props: Props) => {
  return (
    <div className='chartBox'>
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
          <h1>{props.number}</h1>
          <Link to='/' style={{color: props.color}}>View all</Link>
        </div>
      </div>
      <div className="chartInfo">
        <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <LineChart data={props.chartData}>
            <Tooltip 
              contentStyle={{ background: 'transparent', border: 'none'}}
              labelStyle={{display: 'none'}}
              position={{ x: 10, y: 70}}
            />
            <Line type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2} dot={false}/>
          </LineChart>
        </ResponsiveContainer>
        </div>
        <div className="text">
          <div className="percentage" style={{color: props.percentage < 0 ? 'tomato' : 'limegreen'}}>{props.percentage}</div>
          <div className="duration">
            this month
          </div>
        </div>
      </div>

    </div>
  )
}

export default ChartBox
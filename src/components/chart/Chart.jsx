import "./Chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({ title, data1, dataKey1, grid }) => {

    const data = [
        {
            name: 'Jan',
            "Active User": 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Feb',
            "Active User": 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Mar',
            "Active User": 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Apr',
            "Active User": 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'May',
            "Active User": 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Jun',
            "Active User": 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'July',
            "Active User": 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Aug',
            "Active User": 4490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Sep',
            "Active User": 4590,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Oct',
            "Active User": 4990,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Nov',
            "Active User": 5490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Dec',
            "Active User": 5790,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data1}>
                    <XAxis dataKey="name" stroke="5550bd" />
                    <Line type="monotone" dataKey={dataKey1} stroke="#5550bd" />
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#ebdfdf" strokeDasharray="5 5" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart
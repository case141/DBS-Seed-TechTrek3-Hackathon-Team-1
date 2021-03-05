
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap'
import './index.css'
import Data from '../data'
import LineGraph from 'react-line-graph'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, } from 'recharts';
const test = [
    {
        x: 10,
        y: 2
    },
    {
        x: 5,
        y: 5
    }

]; // LineGraph reads these as x,y pairs


function timeConverter(UNIX_TIMESTAMP) {
    var a = new Date(UNIX_TIMESTAMP * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min;
    return time;
}
function HistoricalPricing() {
    const [history, setHistory] = useState([{}])

    useEffect(() => {

        let data = axios.post(
            'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/historical',
            {},
            {
                headers: {
                    'x-api-key': 'dgkCTGTaXm7HYZNgyizLY4ocEVSO7G3c54QcYSIu'
                }
            }
        )
            .then(function (res) {
                var data = res.data
                for (var i = 0; i < data.length; i++) {
                    data[i]["timestamp"] = timeConverter(data[i]["timestamp"])
                }
                console.log(data)
                setHistory(data)
            })
    }, [])

    return (
        <>

            <ResponsiveContainer width="100%" height={550}>
                <LineChart width={730} height={550} data={history}
                    className="darkblue-bg"
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="timestamp" />
                    <YAxis />
                    <Tooltip />
                    <Legend
                        layout="vertical"
                        align="right"
                        verticalAlign="middle"
                        iconType="square"
                        wrapperStyle={{ right: 10, backgroundColor: '#f5f5f5' }}

                    />
                    <Line type="monotone" dataKey="price" stroke="#046fd5" />

                </LineChart>
            </ResponsiveContainer>
        </>

    )
}

export default HistoricalPricing
import React from 'react'
import Chart from '../components/chart/Chart'
import FeaturedInfo from '../components/featuredInfo/FeaturedInfo'
import WidgetLg from '../components/widgets/widgetLg/WidgetLg'
import WidgetSm from '../components/widgets/widgetSm/widgetSm'
import { userData } from '../DummyData'
import "./Home.css"


const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart title="User Analytics" data1={userData} dataKey1="Active User" grid />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
import React from 'react'
import "./FeaturedInfo.css"

const FeaturedInfo = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,425</span>
                    <span className="featuredMoneyRate">
                        -11.5 <ArrowDownward className="featuredIcon negetive"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,425</span>
                    <span className="featuredMoneyRate">
                        -11.5 <ArrowDownward className="featuredIcon negetive"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,425</span>
                    <span className="featuredMoneyRate">
                        +3.5 <ArrowUpward className="featuredIcon positive"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}

export default FeaturedInfo

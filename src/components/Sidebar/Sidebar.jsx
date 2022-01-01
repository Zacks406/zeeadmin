import React from 'react'
import { LineStyle, Timeline, TrendingUp } from '@mui/icons-material'
import "./Sidebar.css"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItems active">
                            <LineStyle className="sidebarIcon" />
                            Home
                        </li>
                        <li className="sidebarListItems">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItems">
                            <TrendingUp className="sidebarIcon" />
                            Home
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quit Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItems">
                            <LineStyle className="sidebarIcon" />
                            Users
                        </li>
                        <li className="sidebarListItems">
                            <Timeline className="sidebarIcon" />
                            Products
                        </li>
                        <li className="sidebarListItems">
                            <TrendingUp className="sidebarIcon" />
                            Transactions
                        </li>
                        <li className="sidebarListItems">
                            <TrendingUp className="sidebarIcon" />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notification</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItems">
                            <LineStyle className="sidebarIcon" />
                            Home
                        </li>
                        <li className="sidebarListItems">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItems">
                            <TrendingUp className="sidebarIcon" />
                            Home
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItems">
                            <LineStyle className="sidebarIcon" />
                            Home
                        </li>
                        <li className="sidebarListItems">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItems">
                            <TrendingUp className="sidebarIcon" />
                            Home
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Sidebar

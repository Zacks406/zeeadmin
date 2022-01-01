import { Language, NotificationsNone, Settings } from "@mui/icons-material"
import "./Topbar.css"

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarwrapper">
                <div className="topleft">
                    <span className="logo">zeeadmin</span>
                </div>
                <div className="topright">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="./images/pf8.png" className="topAvatar" alt=""></img>
                </div>
            </div>
        </div>
    )
}

export default Topbar

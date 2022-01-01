import React from 'react'
import "./widgetLg.css"
const widgetLg = () => {
    const Button1 = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgth">Customer</th>
                    <th className="widgetLgth">Date</th>
                    <th className="widgetLgth">Amount</th>
                    <th className="widgetLgth">Status</th>
                </tr>
                <tr className="widgetLgtr">
                    <td className="widgetLgUser">
                        <img
                            className="widgetLgImg"
                            src="./images/pf8.png"
                            alt=""
                        />
                        <span className="widgetLgName">Isaac John</span>
                    </td>
                    <td className="widgetLgDate">2 jun 2021</td>
                    <td className="widgetLgAmount">$224.45</td>
                    <td className="widgetLgStatus">
                        <Button1 type="Approved" />
                    </td>

                </tr>
                <tr className="widgetLgtr">
                    <td className="widgetLgUser">
                        <img
                            className="widgetLgImg"
                            src="./images/pf8.png"
                            alt=""
                        />
                        <span className="widgetLgName">Isaac John</span>
                    </td>
                    <td className="widgetLgDate">2 jun 2021</td>
                    <td className="widgetLgAmount">$224.45</td>
                    <td className="widgetLgStatus">
                        <Button1 type="Approved" />
                    </td>

                </tr>
                <tr className="widgetLgtr">
                    <td className="widgetLgUser">
                        <img
                            className="widgetLgImg"
                            src="./images/pf8.png"
                            alt=""
                        />
                        <span className="widgetLgName">Isaac John</span>
                    </td>
                    <td className="widgetLgDate">2 jun 2021</td>
                    <td className="widgetLgAmount">$224.45</td>
                    <td className="widgetLgStatus">
                        <Button1 type="Declined" />
                    </td>

                </tr>
                <tr className="widgetLgtr">
                    <td className="widgetLgUser">
                        <img
                            className="widgetLgImg"
                            src="./images/pf8.png"
                            alt=""
                        />
                        <span className="widgetLgName">Isaac John</span>
                    </td>
                    <td className="widgetLgDate">2 jun 2021</td>
                    <td className="widgetLgAmount">$224.45</td>
                    <td className="widgetLgStatus">
                        <Button1 type="Pending" />
                    </td>

                </tr>
                <tr className="widgetLgtr">
                    <td className="widgetLgUser">
                        <img
                            className="widgetLgImg"
                            src="./images/pf8.png"
                            alt=""
                        />
                        <span className="widgetLgName">Isaac John</span>
                    </td>
                    <td className="widgetLgDate">2 jun 2021</td>
                    <td className="widgetLgAmount">$224.45</td>
                    <td className="widgetLgStatus">
                        <Button1 type="Approved" />
                    </td>

                </tr>
                <tr className="widgetLgtr">
                    <td className="widgetLgUser">
                        <img
                            className="widgetLgImg"
                            src="./images/pf8.png"
                            alt=""
                        />
                        <span className="widgetLgName">Isaac John</span>
                    </td>
                    <td className="widgetLgDate">2 jun 2021</td>
                    <td className="widgetLgAmount">$224.45</td>
                    <td className="widgetLgStatus">
                        <Button1 type="Declined" />
                    </td>

                </tr>
            </table>
        </div>
    )
}

export default widgetLg

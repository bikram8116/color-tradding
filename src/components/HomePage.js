import React from 'react'
import './HomePage.css'

const HomePage = () => {

    const tableData = [
        { period: "204521835218", price: 120, number: 5, result: "Red" },
        { period: "204521835219", price: 150, number: 7, result: "Green" },
        { period: "204521835220", price: 90, number: 2, result: "Violet" },
        { period: "204521835221", price: 190, number: 2, result: "Violet" },
        { period: "204521835222", price: 290, number: 7, result: "Green" },
        { period: "204521835223", price: 130, number: 5, result: "Red" },
        { period: "204521835223", price: 130, number: 5, result: "Red" },
        // Add more data as needed
    ];

    return (
        <div className='mobile-screen'>
            <div className='HomePage'>
            <div className='header'>
                <div>Fast-Parity</div> {/* Centered and larger font size */}
                <div>Available Balance: 200</div> {/* Left-aligned, smaller font size */}
                <div>
                    <button>Recharge</button> {/* Button on the third line */}
                </div>
            </div>
                <div className='container'>
                    <div className='period'>
                        <div className='first-period'>
                            <div className='period1'>
                                <div className='logo'>
                                    <img src="/trophy.JPG" alt="Trophy Logo" className="logo-image" />
                                </div>
                                <div className='name'>Period</div>
                                {/* <div className='empty'>C</div> */}
                            </div>
                            <div className='period2'>204521835219</div>
                        </div>
                        <div className='countdown'>
                            <div className='countdown1' style={{ marginRight: "10px" }}>Count Down</div>
                            <div className='countdown2' style={{ marginRight: "10px" }}>00:26</div>
                        </div>
                    </div>
                    <hr class="custom-line"></hr>
                    <div className='main-button'>
                        <button className='green'>Green</button>
                        <button className='violet'>Violet</button>
                        <button className='red'>Red</button>
                    </div>
                    <div className='number-button'>
                        <div className='first-row-number'>
                            <button className='num-button-mix1'>0</button>
                            <button className='num-button-odd'>1</button>
                            <button className='num-button-even'>2</button>
                            <button className='num-button-odd'>3</button>
                            <button className='num-button-even'>4</button>
                        </div>
                        <div className='second-row-number'>
                            <button className='num-button-mix2'>5</button>
                            <button className='num-button-even'>6</button>
                            <button className='num-button-odd'>7</button>
                            <button className='num-button-even'>8</button>
                            <button className='num-button-odd'>9</button>
                        </div>
                    </div>
                </div>
                <div className='second-container'>
                    <div className='second-container1'>
                        <img src="/trophy.JPG" alt="Trophy Logo" className="logo-image" />
                        <div>Parity Record</div>
                    </div>
                    <hr class="custom-line"></hr>
                    <div className="second-container2">
                        <table>
                            <thead>
                                <tr className="trow">
                                    <th>Period</th>
                                    <th>Price</th>
                                    <th>Number</th>
                                    <th>Result</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((row, index) => (
                                    <tr key={index}>
                                        <td>{row.period}</td>
                                        <td>{row.price}</td>
                                        <td>{row.number}</td>
                                        <td>{row.result}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>

                <div className='footer'>

                    <button className='buttonH'>Home</button>
                    <button className='buttonH'>Search</button>
                    <button className='buttonH'>Win</button>
                    <button className='buttonH'>More</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage

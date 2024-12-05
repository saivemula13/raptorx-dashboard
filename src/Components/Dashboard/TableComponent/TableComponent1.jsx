import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { apiData } from '../../ApiData'


function TableComponent1() {
    let cryptoApiData = useSelector((state) => state.crypto.data)

    const [cryptoData, setCryptoData] = useState(apiData)

    console.log(cryptoData);
    return (
        <table>
            <thead>
                <tr>
                    <th>Market Rank</th>
                    <th>Image</th>
                    <th>Market cap</th>
                    <th>Name</th>
                    <th>Current price</th>
                    <th>High</th>
                    <th>Low</th>
                    <th>Price Change</th>
                    <th>Price Change Percentage</th>
                </tr>
            </thead>
            <tbody>
                {cryptoData.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.market_cap_rank}</td>
                            <td><img src={item.image} alt={item.image} width="20" className="img-fluid" /></td>
                            <td>{item.market_cap}</td>
                            <td>{item.name}</td>
                            <td>{item.current_price}</td>
                            <td>{item.high_24h}</td>
                            <td>{item.low_24h}</td>
                            <td>{item.price_change_24h}</td>
                            <td>{item.price_change_percentage_24h}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default TableComponent1

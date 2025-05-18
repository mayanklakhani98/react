import React, { useState } from 'react';
import axios from 'axios';

const Api = () => {
    const [data, setData] = useState([]);
    const fetchdata = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setData(response.data)
        }
        catch (error) {
            console.error('unable to fetch data', error)
        }
    }
    fetchdata();
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">username</th>
                        <th scope="col">email</th>
                    </tr>
                </thead>
                <tbody>
                
                    <tr>
                        <th scope="row">Chris</th>
                        <td>HTML tables</td>
                        <td>22</td>
                    </tr>
                </tbody>
            </table>

        </>
    )
}

export default Api

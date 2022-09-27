import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'


function Userprofile() {
    let { userObj } = useSelector(state => state.userLogin)
    let [data, setData] = useState("")

    const getPrivateData = async () => {
        //get token from local storage
        let token = localStorage.getItem("token")
        let res = await axios.get("http://localhost:4000/user/private-1",
            { headers: { "Authorization": token }, });
        if (res.data.message === 'error') {
            setData(res.data.payload.message)
        }

        else {
            setData(res.data.message)
        }

        // alert(res.data.message);
    }
    return (
        <div className='container'>
        <h1 className="text-center text-info">Welcome,{ " " }<span className='text-success fw-bold'>{userObj.username}</span></h1>


        {/* Nav links fro products &cart */}
        <ul className='nav justify-content-between'>
            <li className='nav-item'>
                <NavLink className="nav-link" to="products">Products</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink className="nav-link" to="cart">Cart</NavLink>
            </li>
        </ul>

        {/* Component placeholder - outlet */}
        <Outlet/>

        {/* <button className='btn btn-info'>Get data from private route-1</button> */}
    </div>
    )
}

export default Userprofile;
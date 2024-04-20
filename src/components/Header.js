import { useState,useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
    const [btnNameReact,setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const {loggedInUser}= useContext(UserContext);
    //console.log(loggedInUser);

    //Subscribing to the store using Selector
    const cartItems = useSelector((store)=>store.cart.items)
    console.log(cartItems);
    //If no dependency array => useEffect will called on every render
    //If depedency array is empty = [] => useEffect is called only once at the initial render.
    //If depedency array is [btnNameReact] => called everytime when btnNameReact updated.  
    useEffect(()=>{
        console.log("useEffect Called")
    });
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-orange-300">
            <div className='logo-container'>
                <img 
                className='w-24'
                src={LOGO_URL}/>
            </div>
            <div className='flex items-center'>
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🟠"}</li>
                    <li className="px-4">
                        <Link to="/">Home</Link> 
                    </li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to ="/grocery">Grocery</Link></li>
                    <li className="px-4 font-bold text-xl"><Link to ="/cart">Cart ({cartItems.length} items)</Link></li>
                    <button className="login" onClick={()=>{
                       btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login"); // setBtnNameReact track the state variable and update it and reRender the Header component. 
                    }}>{btnNameReact}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
// Passing a props to a component is same as passing an arguent to a function.

const RestaurantCard=(props)=>{
    const {resData}=props;

    const {loggedInUser}=useContext(UserContext);

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo
    } = resData?.info

    const {
        deliveryTime
    }=resData.info.sla
    //return jsx
    return(
        <div className='m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-400'>
            <img 
            className='rounded-2xl'
            alt='res-logo'
            src={ CDN_URL + cloudinaryImageId}/>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} star rating</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
            <h4>User: {loggedInUser}</h4>
        </div>
    )
}

//Higher Order Component
// input - RestaurantCard ==> RestaurantWithFreeDelivery

export const withFreeDelivery = (RestaurantCard)=>{
    return (props)=>{
        const {data} = props
        return (
            <div>
             <label className="absolute bg-black text-gray-50 m-2 p-2 rounded-lg">Open</label>
             <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;
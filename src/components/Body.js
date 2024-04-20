import Shimmer from "./Shimmer"
import RestaurantCard,{withFreeDelivery} from "./RestaurantCard"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import { Input } from "postcss"
import UserContext from "../utils/UserContext"
const Body=()=>{
    //local state variable - Super powerful state variable
    const [listOfRestaurants,setListOfRestaurant] = useState([]);
    const [filteredRestaurants,setOfFilteredRestaurant] = useState([]);
    const [searchText,setSearchText] = useState("");
    const {loggedInUser,setUserName} = useContext(UserContext);
    const RestaurantWithFreeDelivery = withFreeDelivery(RestaurantCard);

    console.log("Body Render",listOfRestaurants);
    // filteredRestaurants.map((restaurant) =>(
    // console.log("FreeDelivery: ",restaurant.info.aggregatedDiscountInfoV3)))


    useEffect(()=>{
        fetchData()
    },[]);

    const fetchData= async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.190474262962358&lng=77.4348522350192&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        //console.log("Shubh:",json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
        //Optional chaining
        setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setOfFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //console.log(listOfRestaurants);
    }
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return (
    <h1>Looks like you are offline. Please check your Internet connection!! </h1>)

    //this is know as conditional rendering
    if(listOfRestaurants?.length === 0){
        return <Shimmer/> // for better user experiance we use shimmer
    }
    
    
    return (
        <div className='body'>
            <div className='filter flex'>
                <div className="search m-4 p-4">
                    <input type="text" 
                    className="border border-solid border-black" 
                    value={searchText} 
                    onChange={(e)=>{
                        setSearchText(e.target.value)
                    }} />
                    <button className="px-4 py-1 bg-orange-100 m-4 rounded-lg" 
                    onClick={()=>{
                        //Filter the restaurant card and update the UI
                        //searchText
                        console.log(searchText)
                        const filteredListOfRestaurants = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        console.log(filteredListOfRestaurants);
                        setOfFilteredRestaurant(filteredListOfRestaurants);

                    }}>Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <button className="px-4 py-2 bg-gray-100" 
                    onClick={()=>{
                    const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating >= 4
                    )
                    setOfFilteredRestaurant(filteredList)
                    }}
                    >
                    Top Rated Restaurants
                    </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <label>UserName:</label>
                    <input className="border border-black p-2"
                    value={loggedInUser}
                    onChange={(e)=>setUserName(e.target.value)}
                    />
                </div>
                
            </div>
            <div className='flex flex-wrap'>
            {
                filteredRestaurants.map((restaurant) =>(
                     <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}> 
                     { 
                     restaurant.info.isOpen ? <RestaurantWithFreeDelivery resData={restaurant}/> :
                     <RestaurantCard resData={restaurant}/>
                     }
                       </Link>
                     
                     ))
            }
            </div>       
        </div>
    )
}

export default Body
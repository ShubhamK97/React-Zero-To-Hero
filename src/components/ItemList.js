// import { CDN_URL } from "../utils/constants";

import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

// import { CDN_URL } from "../utils/constants";
const ItemList = ({items})=>{
    //console.log("Items:",items)

    const dispatch = useDispatch();
    const handleAddItem=(items)=>{
        //dispatch an action
        dispatch(addItem(items));
    }

    return(
        <div>
            {items.map((item)=>(
                <div key={item.card.info.id} className="p-2 m-2 border-black border-b-2 text-left flex justify-between">
                  <div className="w-9/12">
                  <div className="py-2">
                    <span>{item.card.info.name}</span>
                    <span>
                        - ₹
                        {item.card.info.price/100}</span>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>  
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button className="p-2 mx-16 rounded-lg bg-slate-950 text-white shadow-lg"
                            onClick={()=>handleAddItem(item)}>
                                Add +
                            </button>
                        </div>
                        <img className="w-full" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + item.card.info.imageId}/>
                    </div>
                </div>
            ))}
        </div>       
    )
}

export default ItemList;
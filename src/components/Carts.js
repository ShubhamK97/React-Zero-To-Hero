import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Carts = ()=>{
    //Points where u need to be awaire
    //1.when u r using selector make sure u r subscribing to the right portion of the store
    // Otherwise it will be a big performance loss.
    const cartItems = useSelector((store)=>store.cart.items);
    // If we use like below
    /*
        const store = useSelector((store)=>store)
        const cartItems = store.cart.items

        than  it is less efficient
        So, be carefull
    */
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart())
    }
return(
    <div className="text-center m-4 p-4">
        <h1 className="text-bold font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
            <button className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}>
                Clear Cart
            </button>
            {cartItems.length === 0 && <h1>Cart is empty. Please add the item first!</h1>} 
        <ItemList items={cartItems}/>
        </div>     
    </div>
)
}

export default Carts
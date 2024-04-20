import React,{lazy,Suspense, useState, useEffect} from 'react' // this is imported from node_modules 
import ReactDOM from 'react-dom/client' // this is imported from node_modules
import Header from './components/Header'
import Body from './components/Body'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'
 import UserContext from './utils/UserContext'
 import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import Carts from './components/Carts'
//import RestaurantCard from './components/RestaurantCard'
/*

React.createElement => Object => When we render into the DOM  It will become => HTML Element  

const heading = React.createElement(  // Here createElement is simply a JS Object.
'h1',
{id:"heading"}, // here in object we pass attribute
"Hello World from React!") // use for h1 tag creation called children
*/

// Now we are going to create a parent child object or React element.
//core React
/*
<div id='parent'>
    <div id='child'>
    <h1>I'm h1 tag</h1>
    <h2>I'm h2 tag</h2>
    </div>
</div>    
*/
/*
const parent=React.createElement(
    "div",
    {id:'parent'},
    React.createElement('div',{id:'child'},[
        React.createElement('h1',{},"I'm in h1 tag ❤️😂"),//children
        React.createElement('h2',{},"I'm in h2 tag")//children
    ]
    
    )
);           

//ReactElement(Object) => HTML(Browser UnderStands)
// console.log(heading); //Object

//JSX => It is a JS Syntext to create a reactElement
//JSX => It is transpiled before it reaches the JS - Parcel - Babel, Its job is to create a reactElement
//babel is a js compiler
const jsxHeading = (<h1 id className="heading" tabIndex="5">Namaste React Using JSX 🚀</h1>)

//React Components
//1.Class Based component
//2.Function Based component
//We use function base component
const HeadingComponent1 = ()=> <h1 id className="heading" tabIndex="5">If we use single line then there is no need to use return command and () bracket 🚀</h1>

const HeadingComponent2 = ()=> (
 <div id="container">
    <HeadingComponent1/>
 <h1 id className="heading" tabIndex="5">
    If we use more then one line then there is to use return command and () bracket 🚀</h1>
    </div>
     )

const root = ReactDOM.createRoot(document.getElementById('root')); //use reactdom for showing h1 n browser.

// root.render(heading); // It will take the object and wrap it into a h1 tag and show the result on browser.
root.render(<HeadingComponent2/>); // rendring function component
*/
//-----------------------------------------------------------------------------------------------------//
//JSX
/*
const title = (
    <h1 className='head' tabIndex="5">
        Namaste React Using JSX🚀
    </h1>
) 
const Title =()=> (
    <h1 className='head' tabIndex="5">
        Namaste React Using Functional Comp.🚀
    </h1>
) 

//React Functional component:
const HeadingComponent = ()=>(
    <div id = 'container'>
        {title} 
        {Title()}
        <Title/>
        <Title></Title>
        <h1 className='heading'>Namaste React Functional component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent/>);
*/

//--------------Episode-04-------------------------------//

// Now start building our Project:

/*
    -Chunking
    -Code Splitting
    -Dynamic Bundling
    -lazy loading
    -on demand loading
    -dynamic import
    all the above do same thing only names are different
    used for seperate bundling
*/
const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = () =>{

    const [userName,setUserName] = useState();
    //authentication
    useEffect(()=>{
        // Make an API call and send user info and password
        const data={
            name:"Shubham Kr."
        };
        setUserName(data.name)
    },[])

    return(
            <Provider store={appStore}>
         <UserContext.Provider value={{loggedInUser:userName,setUserName}}> 
    <div className='App'>
        <Header/>
        <Outlet/>
    </div>
      </UserContext.Provider>
      </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/cart',
                element:<Carts/>
            },
            {
                path:'/grocery',
                element:(<Suspense fallback={<h1>Loading...</h1>}> <Grocery/></Suspense>)
            },
            {
                path:'/restaurant/:resId',
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    },

    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);
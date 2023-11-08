/*
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
const parent=React.createElement(
    "div",
    {id:'parent'},
    React.createElement('div',{id:'child'},[
        React.createElement('h1',{},"I'm in h1 tag"),//children
        React.createElement('h2',{},"I'm in h2 tag")//children
    ]
    
    )
);           

//ReactElement(Object) => HTML(Browser UnderStands)
// console.log(heading); //Object

const root = ReactDOM.createRoot(document.getElementById('root')); //use reactdom for showing h1 n browser.

// root.render(heading); // It will take the object and wrap it into a h1 tag and show the result on browser.
root.render(parent);
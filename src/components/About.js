import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
// In a class based component we do not use hooks
class About extends Component{
    constructor(props){
        super(props)
        //console.log("Parent Constructor called...");
    }
    componentDidMount(){
        //console.log("Parent ComponentDidMount called...");
        // It is used for Api call
    }
    render(){
        //console.log("Parent render called...");
        return(
            <div>
            <h1>About</h1>
            <div>
                LoggedIn User
            <UserContext.Consumer>
                {
                    ({loggedInUser})=>(
                        <h1 className="text-xl font-bold">{loggedInUser}</h1>
                    )
                }
            </UserContext.Consumer>
            </div>
            <h2>This is About page of our Application</h2>
            {/* <User name={"Shubham Kumar (function)"} Location={"Bhopal (function)"}/>
            <UserClass name={"Shubham Kumar first (class)"} Location={"Bhopal class"}/> */}
            <UserClass name={"Shubham Kumar Second (class)"} Location={"Bhopal class"}/>
        </div>
        )
    }
}

/* console output: How life cycle of class based component constructor work

-  Parent Constructor called...
-  Parent render called...

-  First Constructor called...
-  First Render called...

-  Second Constructor called...
-  Second Render called...

<DOM Update - IN Single batch>

-  First ComponentDidMount called...
-  Second ComponentDidMount called...
*/
export default About;
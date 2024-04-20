import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props)
        this.state={  // how to create state variable in class based component
            userInfo:{
                name:"Dummy",
                location:"XYZ"
            },
        };
        //console.log(this.props.name + " Constructor called...");
    }
    async componentDidMount(){
        // console.log(this.props.name + " ComponentDidMount called...");
        const data = await fetch("https://api.github.com/users/Shubhamk97");
        const json = await data.json(); 
        
        this.setState({
            userInfo:json
        });
        
        console.log(json);
    }

    componentDidUpdate(){
        console.log('Component Did Update');
    }

    componentWillUnmount(){
        console.log('Component Will Unmount');
    }

    render(){
        //console.log(this.props.name + " Render called...");
        return(
            <div className="user-card">
                {/* <h1>Count= {this.state.count}</h1>
                <button onClick={()=>{
                    //NEVER UPDATE STATE VARIABLE DIRECTLY
                    this.setState({
                        count:this.state.count+1
                    })
                }}>count Increased</button> */}
            <h2>Name: {this.state.userInfo.name}</h2>
            <h3>Location: {this.state.userInfo.location}</h3>
            <h4>Contact: shubhamjnv97@gmail.com</h4>
        </div>
        )
    }
}

export default UserClass;
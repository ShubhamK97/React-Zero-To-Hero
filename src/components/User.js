const User = (props) =>{
    return(
        <div className="user-card">
            <h2>Name: {props.name}</h2>
            <h3>Location: {props.Location}</h3>
            <h4>Contact: shubhamjnv97@gmail.com</h4>
        </div>
    )
}

export default User;
import React from "react";
function  Header(props){
    console.log(props);
    const styleName = {
        background : "red",

    }
    return(
        <h1 style={styleName}>  {props.name} , {props.color} , content from Header</h1>
    );
}
export default Header
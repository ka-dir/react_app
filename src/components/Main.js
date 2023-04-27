import React from "react";

function Main(props){
    console.log(props)
    return(
        <p> {props.greetings} from Main</p>
    );
}
export default Main
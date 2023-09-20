import React from "react";
import "./styles.css";


const Button = ({text, darlcolor}) => {

    return(
        <div className={darlcolor ? "darlcolor-btn" : "btn"} > {text} </div>
    )

}

export default Button;
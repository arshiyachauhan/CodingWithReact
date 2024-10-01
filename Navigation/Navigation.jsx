import React from "react";
import "./Navigation.css";
function Navigation(props){
    return(
        <nav class = 'nav'>
            <span><a href='#home'>{props.title}</a></span>
            <span><a href='about'>About</a></span>
            <span><a href='#contact'>{props.title}</a></span>
            <span><a href='#service'>Services</a></span>
            <div>
            <input type= "search" placeholder="search here"/>
            <button>Go</button>
            </div>

        </nav>
    )
};
// defaultProps used to pass data in same file and component
Navigation.defaultProps= {
    title: "react"
};
export default Navigation;

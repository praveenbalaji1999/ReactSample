import React from "react";
import style from "./Header.module.css"



const Header = (props) => {
  return (
    <div className={style.head}> {props.title} List</div>
  )
}



export default Header

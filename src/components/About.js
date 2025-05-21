import React, { useState } from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState({
        color:"black",
        backgroundColor:"white"
    })
    const [theme,setTheme]= useState("dark");

    const handleThemeClick = ()=>{
        if(myStyle.color ==="black"){
            setMyStyle({
                color:"white",
                backgroundColor:"black"
            })
            setTheme("light")
        }
        else{
            setMyStyle({
                color:"black",
                backgroundColor:"white"
            })
            setTheme("dark")
        }
    }
    return (
        <div>
            <h1>About us</h1>
            <p style={myStyle}>This is sample details</p>
            <button className="btn btn-primary" onClick={handleThemeClick}>{theme}</button>
        </div>
    )
}

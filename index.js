import React, { useState } from "react"
import arrowIcon from "./down-arrow.png"

function DropdownMenu ({data,value,setValue}) {

    const [display, setDisplay] = useState( "none" )

    function toggleMenu() {
        if ( display === "none") {
            setDisplay( "flex" )
        } else {
            setDisplay( "none" )
        }
    }

    function handleClick(e) {
        let selection = e.target.innerHTML
        setValue(selection)
        setDisplay( "none" )
    }

    return (
        <div className="dropdown">
            <div className="menu_bar" onClick={toggleMenu}>
                {value}
                <img src={arrowIcon} className="arrowIcon" alt="Icone de menu déroulant"/>
            </div>
            <div className="menu_content" style={{display:display}} onClick={handleClick}>
                <ul className="list">
                    {
                        data.map((element,index) => {
                            return (
                                <li key={index}>{element}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default DropdownMenu
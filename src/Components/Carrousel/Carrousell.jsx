import React from 'react'

//Images
import spa20 from "../../Assets/spa20.jpg"
import imgdosmil from "../../Assets/imgdosmil.png"
import spa2 from "../../Assets/spa2.jpg"


// Styles
import "./Carrousell.styles.css"

const Carrousell = () => {


    return (


        <div className="slider-home-container">

            <div className="slides-home">
                <div className="slide">
                    <img  src={imgdosmil} alt="" />
                </div>
                <div className="slide">
                    <img src={spa20} alt="" />
                </div>
                <div className="slide">
                    <img src={spa2} alt="" />
                </div>
            </div>

        </div>

    )
}

export default Carrousell
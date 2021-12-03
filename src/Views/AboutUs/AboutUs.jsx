import React from 'react'
import "./AboutUs.styles.css"
import { Link } from 'react-router-dom'

import imgMapaEcomerce from "../../Assets/imgMapaEcomerce.png"

const AboutUs = () => {
    return (
        <div className="contenedor-about">
         <div className="container-general">

              <div className="container-info">
                <h2>Sobre nosotros</h2>
                <p>LAURA ARANGO consmetologa y esteticista.<br/> 
                    Nuestra Misión es brindar servicios de salud, bienestar y belleza integral de calidad con atención personalizada, 
                    que superen las expectativas de nuestros clientes. Aspiramos ser una empresa con un crecimiento sostenido, innovadora y dedicada 
                    a servir y ayudar a nuestros clientes a verse y sentirse bien, teniendo en cuenta que no es solo cómo nos vemos si no el aporte a 
                    la parte emocional y el acompañamiento en rutinas de Skin Care en casa educando a cada uno de nuestros usuarios en el cuidado de la piel. 
                    En la prestación del servicio ofrecemos equipos de última tecnología y productos de alta calidad, estando conformada por profesionales en 
                    el campo de la Alta estética con un trabajo comprometido y sólido. <br/> <br/> 
                    VISIÓN: Ser reconocidos como una marca de salud y belleza líder en el mercado local, identificados por nuestro profesionalismo, calidad humana y excelente servicio al cliente, lo que nos permita ser la mejor opción en el mercado..</p>
              </div>
            
              <div className="container-map">
                <h3 className="text-center py-2 my-2">Nuestra ubicacion</h3>
                <div className="contenedor-map">
                  <a href="https://www.google.com/maps/place/Cl%C3%ADnica+Oftalmol%C3%B3gica+de+Antioquia+-+Clof%C3%A1n/@6.2232396,-75.5768039,17z/data=!3m1!4b1!4m5!3m4!1s0x8e4429ccac1d781b:0x756dde10c43680e8!8m2!3d6.2232349!4d-75.574882" target="_blanck" rel="noreferrer"><img src={imgMapaEcomerce} alt="" /></a>
                </div>
              </div>
         </div>

          <div className="icon-dev">
              <Link to="/developers"><i className="fas fa-code "></i></Link>
          </div>
           
        </div>
    )
}

export default AboutUs

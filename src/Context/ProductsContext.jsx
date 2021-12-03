import React, { createContext, useReducer } from 'react'
import Amatista1 from '../Imgs/Amatista1.jpg'
import Amatista2 from '../Imgs/Amatista2.jpg'
import Amatista3 from '../Imgs/Amatista3.png'
import Cristal1 from '../Imgs/Cristal1.jpg'
import Cristal2 from '../Imgs/Cristal2.jpg'
import Cristal3 from '../Imgs/Cristal3.jpg'
import QuarzoRosa1 from '../Imgs/QuarzoRosa1.jpg'
import QuarzoRosa2 from '../Imgs/QuarzoRosa2.jpg'
import QuarzoRosa3 from '../Imgs/QuarzoRosa3.png'
import Hydrafacial1 from '../Imgs/Hydrafacial1.jpg'
import Hydrafacial2 from '../Imgs/Hydrafacial2.png'
import Hydrafacial3 from '../Imgs/Hydrafacial3.png'
import Tonic1 from '../Imgs/Tonic1.jpg'
import Tonic2 from '../Imgs/Tonic2.png'
import Tonic3 from '../Imgs/Tonic3.png'
import Drenaje1 from '../Imgs/Drenaje1.jpg'
import Drenaje2 from '../Imgs/Drenaje2.png'
import Drenaje3 from '../Imgs/Drenaje3.png'
import Relaxing1 from '../Imgs/Relaxing1.png'
import Relaxing2 from '../Imgs/Relaxing2.jpg'
import Relaxing3 from '../Imgs/Relaxing3.jpg'
import Sporty1 from '../Imgs/Sporty1.png'
import Sporty2 from '../Imgs/sporty2.jpg'
import Sporty3 from '../Imgs/Sporty3.jpg'
import Deconst1 from '../Imgs/Deconst1.png'
import Deconst2 from '../Imgs/Deconst2.jpg'
import Deconst3 from '../Imgs/Deconst3.jpg'

import { ReviewData } from './ReviewsData/ReviewsData'
const ProductsContext = createContext()

const reducer = ( state, action )=>{

    switch ( action.type ) {
        case "ADD_TO_CART":

            let isProduct = state.cart.find( x => x.idCard === action.payload.idCard)

            return isProduct ? { 
                ...state,
                cart: state.cart.map( x => x.idCard === action.payload.idCard ? {...x, amount: x.amount + 1} : x ) ,            
                priceTotal: state.priceTotal + action.payload.price,
               
            } : {
                ...state,
                cart:[ ...state.cart, {...action.payload, amount: 1}],
                priceTotal: state.priceTotal + action.payload.price,
            }

         case "REMOVE_ONE":

            let isDelete = state.cart.find( x => x.idCard === action.payload.idCard & x.amount > 1)

             return isDelete ? {
                ...state,
                cart: state.cart.map( x => x.idCard === action.payload.idCard ? {...x, amount: x.amount - 1} : x ),
                priceTotal: state.priceTotal - action.payload.price,

            } : {

               ...state
               
            }
        
        case "REMOVE_FROM_CART":
            return{

                ...state,
                cart: state.cart.filter( x => x.idCard !== action.payload.idCard),
                priceTotal: state.priceTotal - action.payload.price * action.payload.amount

            }
        
        case "ADD_REVIEW":
            
            return{
                ...state,
                cart: [...state.cart],
                newComment: [...state.newComment, action.payload]
            }
            
        case "LOG_IN_GMAIL":
            
            return{
                ...state,
                loggedUser: action.payload
            } 

        case "LOG_IN_EMAIL":
        
            return{
                ...state,
                loggedUser: action.payload
            } 

        case "REGISTER":
    
            return{
                ...state,
                loggedUser: action.payload
            } 
        case "LOG_OUT":
    
            return{
                ...state,
                loggedUser: action.payload
            } 

        default:
            return state
    }

}

const ProductsContextProvider = ({children}) => {

    const inicialState = {
        products: [
            {   
                id: 1,
                name: 'Limpieza Facial',
                subname: 'Cuarzo Rosa',
                descp: "Elimina y remueve las impurezas y células muertas. Esto retrasa el envejecimiento, y la aparición de arrugas, la piel se vuelve más luminosa, suave y tersa.",
                price: 150000,
                img:{
                    img1: QuarzoRosa1,
                    img2: QuarzoRosa2,
                    img3: QuarzoRosa3
                }
            },

            {   
                id: 2,
                name: 'Limpieza Facial',
                subname: 'Cuarzo Amatista',
                descp: "Experimenta el poder del cuarzo amatista para lograr una limpieza más profunda, extrayendo impurezas y regulando el flujo de oxígeno por tu piel.",
                price: 150000,
                img:{
                    img1: Amatista1,
                    img2: Amatista3,
                    img3: Amatista2
                }
            },

            {   
                id: 3,
                name: 'Limpieza Facial',
                subname: 'Cuarzo Cristal',
                descp: "Peeling ultrasónico, Nutrición facial, Masaje facial + vibración cuarzo cristal, mascarilla de alta hidratación.",
                price: 130000,
                img:{
                    img1: Cristal1,
                    img2: Cristal2,
                    img3: Cristal3
                }
            },

            {   
                id: 4,
                name: 'Hydrafacial Basic',
                subname: 'Piel Mixta - Grasa',
                descp: "Hydrafacial Es el más reciente avance en rejuvenecimiento de la piel. Es un procedimiento único que combina limpieza, exfoliación, extracción, hidratación y protección antioxidante.",
                price: 140000,
                img:{
                    img1: Hydrafacial1,
                    img2: Hydrafacial2,
                    img3: Hydrafacial3
                }
            },

            {   
                id: 5,
                name: 'Hydrafacial Tonic',
                descp: "Combina en una misma sesión limpieza, extracción de impurezas, peeling, e infiltración de sueros para obtener una piel de aspecto fresco, saludable, radiante y brillante.",
                price: 180000,
                img:{
                    img1: Tonic1,
                    img2: Tonic2,
                    img3: Tonic3
                }
            },

            {   
                id: 6,
                name: 'Drenaje Linfático',
                subname: 'Piernas cansadas',
                descp: "Con este servicio, estarías combatiendo lesiones musculares, hinchazón, retención de líquido intersticial, y celulitis entre muchas otras cosas más. ",
                price: 70000,
                img:{
                    img1: Drenaje1,
                    img2: Drenaje2,
                    img3: Drenaje3
                }
            },

            {   
                id: 7,
                name: 'Masaje',
                subname: 'Relajacion',
                descp: "Terapia manual que neutraliza las energías  y aumenta las vibraciones positivas a través de maniobras suaves y específicas.",
                price: 50000,
                img:{
                    img1: Relaxing1,
                    img2: Relaxing2,
                    img3: Relaxing3
                }
            },

            {   
                id: 8,
                name: 'Masaje',
                subname: 'Deportivo',
                descp: "Activa la circulación sanguínea y de la linfa, eliminando toxinas. Relaja y ayuda a dormir bien, descansando profundamente.",
                price: 150000,
                img:{
                    img1: Sporty1,
                    img2: Sporty2,
                    img3: Sporty3
                }
            },

            {   
                id: 9,
                name: 'Descontracturante',
                subname: 'Muscular',
                descp: "Disuelve las contracturas que se producen por el estrés, las malas posturas, la falta de descanso o una vida demasiado sedentaria.",
                price: 150000,
                img:{
                    img1: Deconst1,
                    img2: Deconst2,
                    img3: Deconst3
                }
            },

            {   
                id: 10,
                name: 'Microdermabrasion',
                descp: "Una de las técnicas más revolucionarias para mantener la piel suave, limpia y joven. Elimina las cicatrices y las manchas de la edad.",
                price: 150000,
                img:{
                    img1: Amatista1,
                    img2: Amatista2,
                    img3: Amatista3
                }
            }

        ],
        cart: [],
        priceTotal: 0,
        ReviewData,
        newComment:[],
        loggedUser: null
    }

    const [state, dispatch] = useReducer( reducer, inicialState )


    const data = {
        state, dispatch
    }

    return (
        <ProductsContext.Provider value={data}>
            {children}
        </ProductsContext.Provider>
    )
}

export { ProductsContextProvider }
export default ProductsContext

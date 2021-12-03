import React, {useState, useContext} from 'react'
import UserModal from '../../Context/ReviewsData/imgUsers/UserModal.png'
import './Form.styles.css'
import ProductsContext from '../../Context/ProductsContext'
const CommentForm = () => {

    const { dispatch } = useContext(ProductsContext)

    const [date, setDate] = useState('')
    const [name, setName] = useState('')
    const [profession, setProfession] = useState('')
    const [review, setReview] = useState('')
    const [id, setId] = useState(1)

    const handlerDate = ({value})=>{
        setDate(value)
    }
    const handlerName = ({value})=>{
        setName(value)
    }
    const handlerProfession = ({value})=>{
        setProfession(value)
    }
    const handlerReview = ({value})=>{
        setReview(value)
    }

    const handlerUserInfo = (e)=>{
        e.preventDefault()
        setId( id + 1)
        dispatch({type:'ADD_REVIEW', payload: {name, date, profession, review, id, UserModal}})
    }

    

    return (
        <form 
            onSubmit={(e)=> handlerUserInfo(e)}
            className="comments-container">
            <input 
                onChange={({target})=> handlerName (target)}
                type="text" 
                placeholder="Escribe tu nombre"/>
            <input 
                onChange={({target})=> handlerProfession (target)}
                type="text" 
                placeholder="Profesion"/>
            <input
                onChange={({target})=> handlerDate (target)}
                type="date"
                id="dateInput" 
                value={ date <= 0? "2019-07-22" : date }
                min="2015-01-01" max="2021-12-31"
            />
            <textarea 
                onChange={({target})=> handlerReview (target)}
                placeholder="Tu comentario es importante para mi."
                rows="4" 
                cols="50" 
                name="comment" 
                form="usrform"
            />
            <div className="button-form">
                <button type='Submit'><i className="fas fa-share"></i>Enviar</button>
            </div>
        </form>
    )
}

export default CommentForm

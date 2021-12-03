import React, {useContext} from 'react'
import ProductsContext from '../../Context/ProductsContext'
import './Review.styles.css'
import Reviews from '../../Components/Review/Reviews'
import CommentForm from '../../Components/CommentForm/CommentForm'

const Review = () => {
    const { state } = useContext(ProductsContext)
    const {newComment} = state
    return (
        <div className='reviews-container'>
            <h2>Comentarios</h2>
            {
                state?.ReviewData?.map(user =>
                    <Reviews
                        key = {user.id}
                        userName = {user.name}
                        prof = {user.profession}
                        date = {user.date}
                        rev = {user.review}
                        avatar = {user.avatar}
                    />

                )  
            
            }
            {
                newComment?.map(user =>
                    <Reviews
                        key = {user.id}
                        userName = {user.name}
                        prof = {user.profession}
                        date = {user.date}
                        rev = {user.review}
                        avatar = {user.UserModal}
                    />

                )
            }
            <CommentForm/>
        </div>
    )
}

export default Review

import React from 'react'
import '../../Views/Reviews/Review.styles.css'

const Review = ({ userName, prof, date, rev, avatar}) => {
    return (

        
        <div className="reviews-user-container">
           
            <div className="reviews-users-img">
                {
                    avatar ? <img src={avatar} alt="avatar" /> : null
                }
                <div className="users-information">
                    <h1>{userName}</h1>
                    <h4>{prof}</h4>
                    <h6>{date}</h6>
                </div>
            </div>
            
            <div className="users-reviews">
                <p>{rev}</p>
            </div>
            {
                avatar ? 
                <section className="reviews-stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </section> :
                null
            }
        </div>
    )
}

export default Review

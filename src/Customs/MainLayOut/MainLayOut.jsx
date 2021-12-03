import React from 'react'

//import
import Header from '../Header'

const MainLayOut = ({children}) => {
    return (
        <>
          <Header/>
            {children}
        </>
    )
}

export default MainLayOut

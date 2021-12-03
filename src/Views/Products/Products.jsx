import React, { useContext } from 'react'
import ProductsContext from '../../Context/ProductsContext'
import RenderCard from '../../Components/RenderCard/RenderCard'

import "./Products.styles.css"

const Products = () => {

    const { state } = useContext(ProductsContext)
    
    return (
        <div className="contenedor-prodcuts">
        {
            state?.products?.map(product =>
                
                <RenderCard
                    key={product.id}
                    idCard={product.id}
                    name={product.name}
                    imgs={product.img}
                    description={product.descp}
                    price={product.price}
                    subname={product?.subname}
                />
            )
        }
    </div>
    )
}

export default Products

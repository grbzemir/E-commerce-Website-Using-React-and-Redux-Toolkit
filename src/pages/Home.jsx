import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { productsAction } from '../redux/actions/products'
import ProductCard from '../components/ProductCard'

const Home = () => {
    const { products } = useSelector(state => state.products)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productsAction())
    }, [dispatch])

    console.log("products", products);

    return (
        <div className="flex flex-wrap justify-center">
            {
                products && products.map((prd, i) => {
                    <ProductCard key={i} prd={prd} />
                })
            }
        </div>
    )
}

export default Home

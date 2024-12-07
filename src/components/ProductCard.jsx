import React from 'react'
import PropTypes from 'prop-types'

const ProductCard = ({ prd }) => {
    return (
        <div className="hover:border-indigo w-1/5={350px} border rounded-lg m-24 flex flex-col items-center p-1 space-y-2">
            <img onClick={() => window.location = `detail/${prd.id}`} className="h-32 object-cover" src={prd?.image} alt="" />
            <div className="font-bold h-16 text-center mt-2">{(prd?.title ?? '').substring(0, 35)}</div>
            <div className="text-center opacity-70 text-sm" >{(prd?.description ?? '').substring(0, 45)}</div>
            <div className="font-bold text-lg">{prd?.price}</div>
            <button className="bg-indigo-600 w-full p-2 rounded-lg text-white">Sepete Ekle</button>
        </div>
    )
}

ProductCard.propTypes = {
    prd: PropTypes.object.isRequired,
}

export default ProductCard

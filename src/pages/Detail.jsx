import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { productsActionDetail } from '../redux/actions/products';
import { useSelector } from 'react-redux';
import { CgMathMinus, CgMathPlus } from 'react-icons/cg';

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(productsActionDetail(id));
    }, [dispatch, id]);

    console.log("product", product);

    return (
        <div className='w-full flex justify-center space-x-5'>
            <img className='w-1/3' src={product?.image} alt="" />
            <div className="w-2/3 space-y-5" >
                <div className='font-bold text-xl'>{product?.title}</div>
                <div className='opacity-70'>{product?.description}</div>
                <div className='opacity-70'>Category: {product?.category}</div>
                <div className='opacity-70'>Rate:{product?.rating?.rate} - Stock: {product?.rating?.count}</div>
                <div className='font-bold text-xl'>Category: {product?.price}</div>
                <div className='flex items-center space-x-4'>
                    <CgMathMinus className='cursor-pointer border rounded-full p-1' size={30} />
                    <span>0</span>
                    <CgMathPlus className='cursor-pointer border rounded-full p-1' size={30} />
                </div>
            </div>
        </div>
    );
};

export default Detail;

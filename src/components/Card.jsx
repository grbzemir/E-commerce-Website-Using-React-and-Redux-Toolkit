import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch } from 'react-redux'

const Card = () => {

    const dispatch = useDispatch()
    return (
        <div className="w-1/3 h-full border fixed top-0 right-0 z-50 bg-white">
            <div className='flex items-center h-20 justify-between'>
                <h1 className="text-2xl">SEPETİM</h1>
                <AiOutlineClose onClick={() => dispatch({ type: 'DRAWER', payload: false })} size={25} className="cursor-pointer" />
            </div>
            <div className="h-28 flex items-center justify-between py-10 mt-5">
                <img className="h-24" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSReewFFO2PMQ-aWm3XT1RyZSR_8QYR2wH4ZQ&s"></img>
                <div className="w-44">
                    <div className="font-bold text-sm">Fjallraven - Foldsack No. 1 </div>
                    <div className="opacity-70 text-xs">Fjallraven - Foldsack No. 1  Fjallraven - Foldsack No. 1 Fjallraven - Foldsack No. 1 </div>
                </div>
                <div className="font-bold text-lg">199.99 Tl</div>
                <div className="bg-red-500 w-20 p-2 text-center text-white rounded-lg cursor-pointer">Sil</div>
            </div>
            <div className="h-28 flex items-center justify-between  py-10  mt-5">
                <img className="h-24" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSReewFFO2PMQ-aWm3XT1RyZSR_8QYR2wH4ZQ&s"></img>
                <div className="w-44">
                    <div className="font-bold text-sm">Fjallraven - Foldsack No. 1 </div>
                    <div className="opacity-70 text-xs">Fjallraven - Foldsack No. 1  Fjallraven - Foldsack No. 1 Fjallraven - Foldsack No. 1 </div>
                </div>
                <div className="font-bold text-lg">199.99 Tl</div>
                <div className="bg-red-500 w-20 p-2 text-center text-white rounded-lg cursor-pointer">Sil</div>
            </div>
            <div className="h-28 flex items-center justify-between py-10  mt-5">
                <img className="h-24" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSReewFFO2PMQ-aWm3XT1RyZSR_8QYR2wH4ZQ&s"></img>
                <div className="w-44">
                    <div className="font-bold text-sm">Fjallraven - Foldsack No. 1 </div>
                    <div className="opacity-70 text-xs">Fjallraven - Foldsack No. 1  Fjallraven - Foldsack No. 1 Fjallraven - Foldsack No. 1 </div>
                </div>
                <div className="font-bold text-lg">199.99 Tl</div>
                <div className="bg-red-500 w-20 p-2 text-center text-white rounded-lg cursor-pointer">Sil</div>
            </div>
        </div>
    )
}

export default Card

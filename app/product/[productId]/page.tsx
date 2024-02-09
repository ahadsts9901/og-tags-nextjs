import "../../globals.css"
import Navbar from '@/app/components/Navbar';
import Button from "@/app/components/Button";
import axios from "axios"

const Product = async () => {

    // TODO: get the product id

    const res = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    const product = await res.data

    return (
        <>
            <Navbar />
            {
                product ?
                    <div className='w-full h-full flex flex-col sm:flex-row gap-4 p-4'>
                        <img src={product?.image} alt="image" className='w-[20rem] h-[20rem] object-contain rounded-md' />
                        <div className='flex flex-col gap-4'>
                            <h1 className='text-lg font-bold w-full p-2 text-left capitalize'>{product?.title}</h1>
                            <p className='w-full text-sm text-left p-2 capitalize'>{product?.description}</p>
                            <p className='w-full text-sm text-left p-2 font-bold'>Price: ${product?.price}</p>
                            <div className='w-full flex p-2 gap-2'>
                                <Button />
                            </div>
                        </div>
                    </div>
                    : <div className='w-full h-[100vh] overflow-y-hidden flex justify-center items-center'>
                        <span className="loader"></span>
                    </div>
            }
        </>
    )

}

export default Product
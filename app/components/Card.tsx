import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Card = (props: any) => {

  const [copy, setCopy] = useState("Copy URL")

  const router = useRouter()

  const copyUrl = (id: string) => {

    navigator.clipboard.writeText(`${window?.location?.href}product/${id}`)

    setCopy("Copied")

    setTimeout(() => {
      setCopy("Copy URL")
    }, 1500)

  }

  const desc = props.description.trim("").slice(0, 80)

  return (
    <div className='flex flex-col rounded-lg w-[20rem] border p-2 shadow-xl'>
      <img src={props.image} alt="image" className='w-full h-[10rem] object-contain object-left' />
      <h1 className='text-lg font-bold w-full p-2 text-left capitalize'>{props.title}</h1>
      <p className='w-full text-sm text-left p-2 h-[7rem] capitalize'>{desc}</p>
      <p className='w-full text-sm text-left p-2 font-bold'>Price: ${props.price}</p>
      <div className='w-full flex p-2 gap-2'>
        <button className='w-full p-2 text-sm rounded-md bg-[#7f12ed] text-white flex-1'
          onClick={() => router.push(`/product/${props.id}`)}
        >More</button>
        <button className='w-full p-2 text-sm rounded-md bg-[#7f12ed] text-white flex-1'
          onClick={() => copyUrl(props.id)}
        >{copy}</button>
      </div>
    </div>
  )
}

export default Card
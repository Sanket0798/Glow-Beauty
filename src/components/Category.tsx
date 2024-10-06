import React from 'react'
import { Whisper } from 'next/font/google'
import CategoryCard from './CategoryCard';


const whisper = Whisper({subsets: ["latin"], weight:["400"]});


const data = [
    {
        img: "/asset 19.jpg",
        type: "Makeup",
        quantity: "(4 items)",
    },

    {
        img: "/asset 20.jpg",
        type: "Nail & Wax",
        quantity: "(8 items)",
    },

    {
        img: "/asset 21.jpg",
        type: "Skincare",
        quantity: "(6 items)",
    },
]

const Category = () => {
  return (
    <div className='bg-[url(/cats__bg.jpg)] bg-no-repeat py-16 mt-32'>
        <div className="container text-center text-white">
            <h3 className={`${whisper.className} text-[40px]`}>Favorite Category</h3>

            <h2 className='text-[40px] font-medium uppercase'>top category</h2>

<div className="flex justify-center gap-4 md:gap-16 py-8">
    {data.map((item) => (
<CategoryCard
        key={item.type}
        img={item.img}
        type={item.type}
        quantity={item.quantity}
/>
    ))}
</div>


        </div>
    </div>
  )
}

export default Category
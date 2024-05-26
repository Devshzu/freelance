import React from 'react'
import ReactStars from "react-rating-stars-component";
import {Link, useLocation} from 'react-router-dom';
import img from "../img/971.jpg"


const ProductCart = (props) => {
  const {grid} = props;
  let location = useLocation();
  return (
    <>
    <div className='w-[70%] lg:w-[30%]'>
      <Link to={`${location.pathname === "/" ? "product/:id" : location.pathname === "/product/:id" ? "/product/:id" : ":id"} `} className="product-card position-relative  border border-slate-500">
        <div className={grid === 12 ? "product-image-2 product-image" : "bg-no-repeat"}>
            <img src={img} className='object-cover rounded-lg lg:rounded-sm' alt="product" />
        </div>
        <div className="product-details mt-[10px] lg:mt-[70px]">
            <h6 className="brand text-center">Havels</h6>
            <h5 className='product-title text-center'>Kids headphones bulk 10 pack multi colored for students</h5>
            {/* render( */}
  <div className='w-full flex justify-center'>
  <ReactStars
    count={5}
    size={24}
    activeColor="#ffd700"
    value={'3'}
    edit={false}
  />
  </div>
   <p className={`description ${grid===12 ? "d-block" : "d-none"} text-justify text-slate-500`}>Lorem, ipsum dolor sit amet dicta cupiditate, optio ratione minima consequuntur asperiores quis similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, alias illo inventore in tempore similique pariatur! Eveniet, culpa? vero, deleniti numquam quos....</p>
        <p className='price text-center text-xl mt-4'>$100.00</p>
        </div>
    </Link>
      </div>
      </>
  )
}

export default ProductCart
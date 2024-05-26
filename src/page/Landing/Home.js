import React from 'react';
import Navbar from '../../components/navbar';
import Container from '../../components/Container';
import { Link } from 'react-router-dom';
import img from '../../img/971.jpg';
import { services } from '../../utils/services';
import ProductCart from '../../components/productCart';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Container>
          <div className="flex flex-wrap">
          <div className='flex justify-center'>
          <div className="w-[90%] lg:w-[40%]">
              <div className="relative bg-white rounded-lg shadow-md">
                <img src={img} className="w-full rounded-3" alt="" />
                <div className="absolute hidden lg:flex gap-20 bottom-4 left-20 p-3">
                  <Link className="inline-block mt-2 bg-blue-500 text-slate-300 py-2 px-4 rounded" to="#">
                    BUY NOW
                  </Link>
                  <Link className="inline-block mt-2 bg-blue-500 text-slate-300 py-2 px-4 rounded" to="#">
                    Add Cart
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-[49%] h-20 ml-8 hidden lg:flex flex-wrap gap-3">
              <div className="w-[40%] relative bg-white rounded-lg shadow-md">
                <img src={img} className="w-full" alt="" />
              </div>
              <div className="w-[40%] h-20 relative bg-white rounded-lg shadow-md">
                <img src={img} className="w-full" alt="" />
              </div>
              <div className="w-[40%] h-20 relative bg-white rounded-lg shadow-md">
                <img src={img} className="w-full" alt="" />
              </div>
              <div className="w-[40%] h-20 relative bg-white rounded-lg shadow-md">
                <img src={img} className="w-full" alt="" />
              </div>
            </div>
          </div>
          </div>
        
        </Container>
      </div>
      <div className='w-full min-h-max mt-20 flex justify-center items-center'>
      <div>
        <h2 className='text-center mb-5'>Total Items:-</h2>
        <div className='flex gap-6 flex-wrap ml-1 justify-center lg:ml-10'>
     {
      services.map((val, _index)=>{
          return (
           <ProductCart val={val} key={_index}/>
          )
      })
     }
        </div>
      </div>

      </div>

      <Footer/>
    </div>
  );
};

export default Home;

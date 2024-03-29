import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Footer from './Footer';
import ServingCard from './ServingCard';  
import FormData from './FormData';

function Home() {
  return (
    <div className=''>
        {/* Navbar */}
        <Navbar></Navbar>

        {/* section1 */}
        <div>
          <div className='w-[1080px] mx-auto flex lg:flex-row md:flex-row flex-col-reverse gap-3 p-5 h-[70vh]'>
            <div className='flex-[0.5] flex justify-between items-center'>
              <img height={480} width={720} src="data:image/jpeg;base64,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" alt="" />
            </div>
            <div className=' flex-[0.5] flex flex-col text-[#02042A] justify-center items-center gap-2'>
              <p className='text-5xl font-bold'>Your Roadtrip, Our Ride.</p>
              <p className='text-gray-600 text-lg'>Get behind the wheel of comfort and convenience. Our car rentals offer top-notch options to suit every adventure, ensuring a smooth ride from start to finish.</p>
              <div className='flex gap-6'>
                <div className='bg-blue-500 rounded-full px-2 py-2 text-white w-fit font-bold text-2xl'>
                  <button>Book a slot</button>
                </div>
                <div className='text-blue-500 border-2 border-blue-500 rounded-full px-2 py-2 bg-white w-fit font-bold text-2xl'>
                  <button>Explore</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* card */}
        <div className='bg-[#02042b] text-gray-200 p-4'>
          <div className='w-[1080px] mx-auto flex flex-col h-[65vh] justify-center'>
            <div className='mx-auto flex flex-col gap-2'>
              <p className='text-4xl font-bold mx-auto'>Why Choose Flagship Rentals</p>
              <p className='mx-auto text-center'>Doorstep car delivery and pick-up</p>
            </div>
            <div className='flex gap-4 justify-center items-center my-5'>
              <Card heading={'Pre Book Your Car'} description={"Book ahead for a seamless journey. Your chosen car will be ready and waiting, guaranteeing a hassle-free travel experience."} />
              <Card heading={'Doorstep delivery/Pick-up'} description={"Experience ultimate convenience with our doorstep car delivery and pickup. We bring the rental to you, saving you time and effort."} />
              <Card heading={'Affordable Prices'} description={"Discover budget-friendly travel solutions with our affordable car rentals. Quality vehicles, unbeatable rates, your journey, your savings."} />
            </div>
          </div>
        </div>
        {/* scction2 */}
        <div className=''>
          <div className='w-[1080px] flex flex-col mx-auto h-[80vh] justify-center gap-4'>
            <div className='mx-auto flex flex-col justify-center items-center'>
              <p className='text-blue-500 text-4xl font-bold '>Explore</p>
              <p className='text-[#02042A] text-xl'>Our Collections</p>
            </div>
            <div className='flex mx-auto justify-between gap-2'>
              <ServingCard heading={'Affordable Hatchbacks'} im={'https://i0.wp.com/gomechanic.in/blog/wp-content/uploads/2020/05/Fiat-Punto-Abarth.jpg?resize=1000%2C664&ssl=1'} />
              <ServingCard heading={'Luxurious Sedans'} im={'https://cdn.arstechnica.net/wp-content/uploads/2021/11/BMW-M5-CS-.jpg'} />
              <ServingCard heading={'Comfortable SUVs'} im={'https://www.rushlane.com/wp-content/uploads/2023/08/hyundai-creta-adventure-alcazar-edition-launch-price-1-1200x675.jpg'} />
            </div>
          </div>
        </div>
        {/* formData */}
        <FormData />
        {/* footer */}
        <Footer />
    </div>
  )
}

export default Home
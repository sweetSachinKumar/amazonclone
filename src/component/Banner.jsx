import React from 'react'
import bannerImg from './img/ban_ner.jpg'
import ProductCard from './ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/slices/cartSlice'

const Banner = () => {
    const imgStyle = {
        width: "100%",
        WebkitMaskImage: "linear-gradient(186deg, #3a4394, #6b02fd0b)",
        maskImage: "linear-gradient(186deg, #3a4394, #6b02fd13)"
    }

    const { cartItems } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const addToCarthandler = (data) => {
        const { id, title, price, rating, image } = data;
        const isExist = cartItems.find(item => item.id === id)
        if (isExist) {
            console.log(isExist)
        }

        const dataItem = { id, title, price, rating, image, amount: 1 }

        dispatch(addToCart(dataItem))
    }

    const singleData = {
        id: 7,
        title: "MageGee Portable 60% Mechanical Gaming Keyboard, MK-Box LED Backlit Compact 68 Keys Mini Wired Office Keyboard",
        price: 588,
        rating: 5,
        image: "https://m.media-amazon.com/images/I/617yPJ1t9AL._AC_SY310_.jpg"
    }

    return (
        <>
            <div className='-mb-[150px]'>
                <img src={bannerImg} style={imgStyle} alt="" className='w-full lg:h-[80vh] object-cover object-center h-[40vh] md:h-[60vh] ' />
            </div>

            <div>
                <div className='flex w-full'>
                    <ProductCard
                        id="3"
                        title="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones"
                        price={229}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/51B7kuFwQFL._SX329_BO1,204,203,200_.jpg"
                    />

                    <ProductCard
                        id="4"
                        title="Lenovo LOQ Intel Core i5-12450H 15.6' (39.6cm) FHD IPS 144Hz 350Nits Gaming Laptop (16GB/512GB SSD/Win 11/NVIDIA RTX 2050 4GB Graphics/Office 2021/3 Month Game Pass/Storm Grey/2.4Kg),"
                        price={123339}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/61cDezSN9wL._AC_SY200_.jpg"
                    />
                </div>
                <div className='flex w-full overflow-auto'>
                    {/* <ProductCard
                        id="3"
                        title=" Portronics Toad 27 Wireless Mouse, Silent Buttons, 2.4 GHz with USB Nano Dongle for PC/Mac/Laptop"
                        price={39}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/41SN9pIFyKL._AC_UF1000,1000_QL80_FMwebp_.jpg"
                    /> */}
                    <ProductCard
                        id="5"
                        title=" Dell G16-7630 Gaming 13th Gen Laptop, Intel i7-13650HX/32GB/1TB SSD/NVIDIA RTX 4060"
                        price={93222}
                        rating={4}
                        image="	https://m.media-amazon.com/images/I/41vnRg+MoaL._AC_SR160,160_.jpg"
                    />

                    <ProductCard
                        id="6"
                        title="Lenovo Legion 5 Pro AMD Ryzen 7 5800H 16 (40.64cm) QHD IPS 165Hz 500Nits Gaming Laptop "
                        price={51229}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/61tAKdpQQzL._SX679_.jpg"
                    />
                    <ProductCard
                        id="7"
                        title="Redmi Note 13 Pro+ 5G (Fusion Black, 12GB RAM, Memory and Storage: 16GB RAM DDR4-3200"
                        price={1449}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/71qP0biacfL._AC_SS304_.jpg"
                    />
                </div>

                <div className='p-2.5'>
                    <div className='z-30  sm:min-w-min min-w-[43%] w-full h-full'>
                    <div className='flex flex-col p-2.5 h-full   items-center border-2  z-20  bg-white w-full' >

                        <div className='  flex flex-col mb-3 justify-around '>
                            <p className=" leading-normal mb-2      text-xs sm:text-sm md:text-base">       MageGee Portable 60% Mechanical Gaming Keyboard, MK-Box LED Backlit Compact 68 Keys Mini Wired Office Keyboard</p>
                            <span> &#x20B9;  <span className='font-bold  text-xs sm:text-sm md:text-base '> 588 </span> </span>
                            <div>
                                {
                                    Array(5).fill().map((_, i) => <span key={i}>&#11088;</span>)
                                }
                            </div>

                        </div>
                        <img src="https://m.media-amazon.com/images/I/617yPJ1t9AL._AC_SY310_.jpg" className='h-full  md:max-w-[500px] mx-auto sm:w-7/12 w-10/12   object-contain' alt="/" />

                        <div>
                            <button style={{
                                backgroundColor: " #f0c15b",
                                border: "1px solid",
                                borderColor: "#a88734 #9c7e31 #845a29",
                                marginTop: "10px",
                                fontSize: "12px"

                            }} onClick={() => addToCarthandler(singleData)} >Add to basket</button>
                        </div>
                    </div>
                </div>
                </div>

            </div>

        

 

        </>
    )
}

export default Banner

import React from 'react'
import bannerImg from './img/ban_ner.jpg'
import Product from './Product'

const Abanner = () => {

    const imgStyle = {
        width: "100%",
        WebkitMaskImage: "linear-gradient(186deg, #3a4394, #6b02fd0b)",
        maskImage: "linear-gradient(186deg, #3a4394, #6b02fd13)"
    }


    return (
        <div>
            <div className='-mb-[150px]'>
                <img src={bannerImg} style={imgStyle} alt="" />
                </div>

                <div className=''>
                <div className='flex w-full'>
                    <Product
                        id="3"
                        title="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones"
                        price={19}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/51B7kuFwQFL._SX329_BO1,204,203,200_.jpg"
                    />
                    <Product
                        id="31"
                        title="World’s Greatest Books For Personal Growth & Wealth (Set of 4 Books): Perfect Motivational Gift Set"
                        price={11.96}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71frknp-CWL._AC_UY327_FMwebp_QL65_.jpg"
                    />
                </div>
                <div className='flex'>
                    <Product
                        id="32"
                        title="World’s Greatest Books For Personal Growth & Wealth (Set of 4 Books): Perfect Motivational Gift Set"
                        price={49.96}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71ULHpuBXqL._AC_UY327_FMwebp_QL65_.jpg"
                    />
                    <Product
                        id="33"
                        title='BiTECOOL 15.6" Windows 11 Laptop, Intel Core i3-5005U, 12GB RAM, 512GB SSD, FHD IPS Display, 2.4G/5G WiFi, Bluetooth 5.0, RJ45, Type C, Webcam'
                        price={296}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71fjIBzS3IL._AC_SY355_.jpg"
                    />
                    <Product
                        id="34"
                        title='Acer Aspire 1 A115-32-C96U Slim Laptop | 15.6" Full HD Display | Intel Celeron N4500 Processor | 4GB DDR4 | 128GB eMMC | WiFi 5'
                        price={396}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71wDgtnkHwL._AC_SX355_.jpg"
                    />
                </div>

                <div className='flex justify-center'>
                    <Product
                        id="37"
                        title="Packard Bell Basic Dual Computer Monitor, 24 Inch, Ultrawide, VESA Mount, Tilt, VGA and HDMI, FHD 1920 x 1080 ,75 Hz, 5 Milliseconds For Gaming, 2 Pack"
                        price={256}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/714QzulrQWL._AC_SY450_.jpg"
                        
                    />
                    
                </div>
</div>
           
        </div>
    )
}

export default Abanner

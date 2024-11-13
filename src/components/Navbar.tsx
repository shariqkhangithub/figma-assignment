// import { Montserrat } from 'next/font/google';
// import { Montserrat } from '@next/font/google';
// const Montserrat = Montserrat({ subsets: ['latin'] });
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: [ '700'] });




export default function Navbar(){
    return(
        <>
        <div className="w-[1322px] h-[91px] ml-[59px] bg-[#252B42] flex justify-center items-center">
          <div className="h-[91px] w-[1322px] bg-[#252B42] flex justify-center items-center gap[92px]">
            <div className="w-[187px] h-[58px] content-center mr-4">
              <h3 className={` text-[24px] text-white  leading-[0.5px]  ${montserrat.className}`}>BrandName</h3>
            </div>
            <div className="w-[815px] h-[58px] flex items-center ">
              <div className="w-[275px] h-[24px] bg-[#252B42] ">
                <ul className={`flex gap-[21px]  ${montserrat.className}`}>
                  <li className="text-white text-[14px]">Home</li>
                  <li className="text-white  text-[14px]">Product</li>
                  <li className="text-white  text-[14px]">Pricing</li>
                  <li className="text-white  text-[14px]">Contact</li>
                </ul>
              </div>
              <div className="left-[626px] ml-[351px] flex w-[189px] gap-[45px]">
                <button className="text-white font-bold  text-[14px]">Login</button>
                <button className={`text-white w-[110px] h-[52px]  rounded-l-[5px] bg-[#23A6F0] text-[14px]  ${montserrat.className} `}>Join us</button>
    
              </div>
            </div>
    
    
          </div>
        </div>
      </>
    )
}
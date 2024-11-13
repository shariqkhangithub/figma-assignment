import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: [ '700'] });


export default function Hero(){
return(
    <div className="h-[1028px] w-[1046px] absolute left-[197px] top-[104px] py-[80px] gap-[80px] flex flex-col items-center">
        <div className="w-[701px] h-[496px] py-[40px] flex gap-[40px] flex-col items-center">
            <h5 className={` text-[#23A6F0] ${montserrat.className} text-[16px] tracking-[0.5px] `}>Welcome</h5>
            <h1 className={`${montserrat.className} text-[58px] tracking-[0.2px] leading-[80px] text-[#FFFFFF] text-center`}>Selling on the <br /> internet like a pro</h1>
            <h4 className={` text-[#ffffff] text-[20px] font-normal text-center leading-[30px] tracking-[0.2px] `}>We know how large objects will act, but things on a 
           <br /> small scale just do not act that way.</h4>
            <div className='w-[365px] h-[52px] gap-10px flex'>
                <button className='w-[193px] h-[52px] rounded-[5px] py-[15px] px-[40px] bg-[#23A6F0] text-[#ffffff]'>Get Quote Now</button>
                <button className={`border-[#23A6F0] text-[#23A6F0] border-solid`}>Learn More</button>
            </div>
        </div>
        <div className="w-[1046px] h-[292px] bg-orange-400"></div>
    </div>
)
}
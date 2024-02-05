import heroCloud from '../assets/herocloud.jpg'
import heroMountain from "../assets/heromountain.png"
import logo from "../assets/logo.png"
const NavBar = () => {
    // function data(){
    //     for(var i=0;i<4;i++){
    //         console.log(i)
    //     }
    //     console.log("i"+ i)
    // }
    // data()
    // function d(){
    //     var j=10
    // }
    // d()
    // console.log(j)
    const navItem=[{text:"01.HISTORY"},{text:"02.TEAM"}]
  return (
    <div>
        <img src={heroCloud} alt='cloud' className='relative h-[520px] w-full' />
        <div className='absolute top-[130px] w-full grid justify-center text-8xl font-bold leading-[0.90em] tracking-wide '><h1 className='flex text-[#4d4d4d] justify-center'>LOSANGELS</h1><h1 className='flex text-[#404f6c] justify-center'>MOUNTAINS</h1></div>
        <img src={heroMountain} alt='cloud' className='absolute top-0 h-[580px] w-full'/>
        <div  className='absolute top-0 flex items-center justify-between w-full px-40'>
            <img src={logo} alt='logo'/>
        <ul className='flex gap-10 italic font-medium text-white'>
            {navItem.map(item=>(
                <li key={item.text}>{item.text}</li>
            ))}
        </ul>
        </div>
       
    </div>
  )
}

export default NavBar
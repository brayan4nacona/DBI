import React from 'react';
import logo from '../../images/BDIB.png'
import styles from './Navbar.module.css'
const Navbar =() => {

    return (
     <div className='w-full bg-[#51ad87] h-[90px]  flex items-center space-x-10  pl-20 pr-20  '>
        <div className='text-center items-center'>
<img  src={logo} className='w-[150px] '   />
        </div>
    <div>
        <h2 className='w-[100px] h-[30px]  text-xl  font-bold not-italic  hover:text-white hover:translate-y-[-7px] duration-300  center items-center text-center   '>
            Contenido 
        </h2>
<hr className=' bg-[#6ccaa3]  border-[#6ccaa3] hover:border-white border-[1px]'/>
    </div>
    <div>
        <h2 className='w-[100px] bg-slate-400 font-semibold not-italic  center items-center text-center  '>
            Redesaaaaaaaaaaaaaaaaaaa
        </h2>

    </div>
    <div>
        <h2 className='w-[100px] bg-slate-400 font-semibold not-italic  center items-center text-center  '>
            Asesorias
        </h2>

    </div>
    <div>
        <h2 className='w-[100px] bg-slate-400 font-semibold not-italic  center items-center text-center  '>
            Tienda 
        </h2>

    </div>



     </div>
    );
};

export default Navbar;

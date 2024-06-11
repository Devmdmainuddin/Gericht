import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import avatarImg from '../assets/user-profile.png'
// import { IoMdCloseCircleOutline } from "react-icons/io";
import logo from '../../public/logo.png'
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
    const {user,logOut}= useAuth()
    const [isOpen, setIsOpen] = useState(false)
    const show = () => {
        const togglemenu = document.querySelector('.togglemenu')
        togglemenu.classList.toggle("opacity-100")
    }

    return (
        <div className="w-full bg-[#0C0B08]">

            <div className="flex justify-between items-center p-6 text-white relative  max-w-[1680px] mx-auto">
                <div className="logo w-full lg:w-auto"><Link><img src={logo} alt="" /></Link></div>
                <ul className="showhid hidden lg:flex gap-x-8 flex-col  md:flex-row gap-y-4 md:static absolute top-full left-12">
                    <li><Link to='/'>home</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/blogs'>bloge</Link></li>
                    <li><Link to='/contact'>contact us</Link></li>
                    <li><Link to='/aboutUs'>about Us</Link></li>
                    


                </ul>
                <div className="hidden lg:flex lg:flex-col">
                    <ul className=" flex gap-x-[50px] items-center">
                    <div
                  onClick={() => setIsOpen(!isOpen)}
                  className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                >
                  <AiOutlineMenu />
                  <div className='hidden md:block'>
                    {/* Avatar */}
                    <img
                      className='rounded-full'
                      referrerPolicy='no-referrer'
                      src={user && user.photoURL ? user.photoURL : avatarImg}
                      alt='profile'
                      height='30'
                      width='30'
                    />
                  </div>
                </div>
                        <li><Link to='/booktable'>book table</Link></li>
                    </ul>
                    {isOpen && (
                <div className=' rounded-xl shadow-md w-[40vw] md:w-[10vw]  overflow-hidden  text-sm'>
                

                    {user ? (
                      <>
                     
                        <div
                          onClick={logOut}
                          className='px-4 absolute py-3 hover:text-[#f5cc5a] transition font-semibold cursor-pointer'
                        >
                          Logout
                        </div>
                      </>
                    ) : (
                      <>
                        <Link
                          to='/registation'
                          className='px-4 py-3 absolute hover:text-[#f5cc5a] transition font-semibold'
                        >
                          Login/signUp
                        </Link>
                       
                      </>
                    )}
                  </div>
             
              )}
                </div>
             


                <CiMenuBurger onClick={show} className="lg:hidden inline-block " />

                <div className="flex lg:hidden ">
                    <div className="togglemenu absolute top-full left-0 bg-slate-700 w-full opacity-0 z-30">
                        <ul className="p-6 flex flex-col gap-y-6  ">
                            <li><Link to='/'>home</Link></li>
                            <li><Link to='/services'>Services</Link></li>
                            <li><Link to='/blogs'>bloge</Link></li>
                            <li><Link to='/contact'>contact us</Link></li>
                            <li><Link to='/aboutUs'>about Us</Link></li>
                            <li><Link  to='/booktable'>book table</Link></li>
                        </ul>
                        <ul className="flex gap-y-6 p-6 flex-col items-center">
                            {
                            user ?  <><img
                            className='rounded-full'
                            referrerPolicy='no-referrer'
                            src={user && user.photoURL ? user.photoURL : avatarImg}
                            alt='profile'
                            height='30'
                            width='30'
                          />
                          <div
                          onClick={logOut}
                          className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                        >
                          Logout
                        </div>
                           </>  : <li><Link to='/registation'>login / registation</Link></li>
                            }
                           
                           
                        </ul>
                       
                    </div>



                </div>


            </div>



            {/* <div className="flex justify-between items-center p-6 bg-slate-200 relative">
                <div className="logo inline-flex items-center"><Link>mainuddin</Link></div>
                <ul className="hidden lg:flex  items-center  gap-x-6 ">
                    <li><Link>home</Link></li>
                    <li><Link>pages</Link></li>
                    <li><Link>contact us</Link></li>
                    <li><Link>bloge</Link></li>
                    <li><Link>landing</Link></li>

                </ul>
                <div className="hidden lg:flex items-center  gap-x-3 ">
                    <ul className="showhid flex gap-x-[50px]   md:static absolute top-full right-12">
                        <li><Link>login / registation</Link></li>
                        <li><Link>book table</Link></li>
                    </ul>

                </div>


                <div className='lg:hidden'>
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <CiMenuBurger className="md:hidden inline-block" />
                    </button>
                    {isMenuOpen && (
                        <div className='absolute z-10 top-0 left-0 w-full'>
                            <div className='p-5 bg-white border rounded shadow-sm'>
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <Link to='/'
                                            aria-label='shopSwiftly'
                                            title='shopSwiftly'
                                            className='inline-flex items-center'>shopSwiftly</Link>


                                    </div>
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <IoMdCloseCircleOutline></IoMdCloseCircleOutline>
                                        </button>
                                    </div>
                                </div>
                                <ul className="">
                                    <li><Link>home</Link></li>
                                    <li><Link>pages</Link></li>
                                    <li><Link>contact us</Link></li>
                                    <li><Link>bloge</Link></li>
                                    <li><Link>landing</Link></li>

                                </ul>
                            </div>




                        </div>

                    )}
                </div>

            </div> */}


        </div>
    );
};

export default Navbar;
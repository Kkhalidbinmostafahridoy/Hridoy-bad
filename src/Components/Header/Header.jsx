import { HiBars2 } from "react-icons/hi2";
import { SiStimulus } from "react-icons/si";
import nav1 from '../../assets/svg file/nav1.svg'

const Header = () => {
    return (
        <div className="mt-6">
            <div className="navbar max-w-[1140px] mx-auto px-6 py-2 rounded-full bg-[#111820] border-[2px] border-gray-500 backdrop-blur-md text-white">
                <div className="navbar-start space-x-2">
                    <div className="navbar-start">
                        <div className="flex-none">
                            <button className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <img className="w-full h-auto" src={nav1} />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="dropdown lg:hidden">
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52">
                            <li><a>About</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Work</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex"></div>
                <div className="navbar-end space-x-4">
                    <ul className="menu menu-horizontal px-1 hidden lg:flex">
                        <li><a>About</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Work</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                    <div className="flex-none">
                        <button className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <HiBars2 size={28} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

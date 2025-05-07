import { HiBars2 } from "react-icons/hi2";
import nav1 from '../../assets/svg file/nav1.svg';

const Header = () => {
    return (
        <header className="mt-6 px-4">
            <nav className="navbar max-w-[1140px] mx-auto px-6 py-2 rounded-full bg-[#111820] border-2 border-gray-500 backdrop-blur-md text-white">
                {/* Left: Logo */}
                <div className="flex items-center space-x-3">
                    <button className="btn btn-ghost btn-circle">
                        <img className="w-8 h-8 object-contain" src={nav1} alt="Logo" />
                    </button>

                    {/* Mobile Menu Button (visible on small screens) */}
                    <div className="dropdown lg:hidden">
                        <button tabIndex={0} className="btn btn-ghost btn-circle">
                            <HiBars2 size={24} />
                        </button>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-white text-black rounded-box w-52">
                            <li><a>About</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Work</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                </div>

                {/* Center: Desktop Menu */}
                <ul className="hidden lg:flex menu menu-horizontal space-x-6 text-sm font-medium ml-auto">
                    <li><a className="hover:text-gray-300">About</a></li>
                    <li><a className="hover:text-gray-300">Blog</a></li>
                    <li><a className="hover:text-gray-300">Work</a></li>
                    <li><a className="hover:text-gray-300">Contact</a></li>
                </ul>

                {/* Right: Extra Icon (Optional) */}
                <div className="hidden lg:flex ml-6">
                    <button className="btn btn-ghost btn-circle">
                        <HiBars2 size={24} />
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;

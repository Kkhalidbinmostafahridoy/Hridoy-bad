import footer from '../../assets/btn/1.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content h-[339px]" style={{
                backgroundImage: `url(${footer})`,
            }}>
                <nav>
                    <div>
                        <h2 className='text-[24px] '>Have a project in mind?</h2>
                        <h2 className='text-5xl mt-3 font-bold texyt-[#92d0fc]'>Let's Talk</h2>
                    </div>
                    <h2 className='text-[64px] underline font-semibold mt-[122px]'>hey@pixll.com</h2>
                </nav>
                <nav className='ml-[740px]'>
                    <a className="link link-hover">Github</a>
                    <a className="link link-hover">Tweeter</a>
                    <a className="link link-hover">FaceBook</a>
                    <a className="link link-hover">Instragram</a>
                </nav>
            </footer>
            <div className='flex ml-[790px] mt-[-40px]'>
                <aside className='mt-[-30px] gap text-center items-center mb-3 ml-4'>
                    <a className="link link-hover">Privacy</a>
                    <a className="link link-hover mx-3 ">Term</a>
                </aside>
                <aside className='mt-[-30px] gap text-center items-center mb-3 ml-[380px]'>
                    <h2>© 2017 - 2025 Pixll</h2>
                </aside>
            </div>
        </div>
    );
};

export default Footer;
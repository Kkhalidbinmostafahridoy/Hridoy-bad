import React from 'react';
import MobileCard from '../../assets/Card/1.png';
import blogCard from '../../assets/Card/2.png';
import statisticCard from '../../assets/Card/3.png';
import bg123 from '../../assets/Card/bg-work-.png';
import CardBg from '../../assets/svg file/cardBg1.svg';

const Blog = () => {
    const cards = [
        { img: MobileCard, alt: 'Mobile Card' },
        { img: blogCard, alt: 'Blog Card' },
        { img: statisticCard, alt: 'Statistic Card' },
    ];

    return (
        <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#111517] bg-cover bg-center bg-no-repeat w-full min-h-screen p-6"
            style={{ backgroundImage: `url(${bg123})` }}
        >
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="relative w-[460px] h-[340px] bg-[#0a0a0b] shadow-lg rounded-xl overflow-hidden"
                >
                    <div
                        className="absolute inset-0 bg-no-repeat bg-cover z-0"
                        style={{
                            backgroundImage: `url(${CardBg})`,
                        }}
                    ></div>
                    <img
                        src={card.img}
                        alt={card.alt}
                        className="w-full h-full object-cover relative z-10"
                    />
                </div>
            ))}
        </div>
    );
};

export default Blog;

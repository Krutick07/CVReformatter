import React, { useState, useEffect } from 'react';
import './Section6.css';
import arrow from '../Assets/arrow-down.png';
import Lottie from 'lottie-react';
import AI_Assisted from '../Assets/ai boosted.json';
import _Accuracey from '../Assets/100% Accuracy.json';
import Use_it_seconds from '../Assets/USE IT IN SECONDS.json';
import Instant_reformatting from '../Assets/Instant reformating.json';

export const Section6 = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [activeIndex, setActiveIndex] = useState(1); 

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

  
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.how-item');
            let newIndex = 0;

            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
                    newIndex = index + 1; 
                }
            });

            setActiveIndex(newIndex);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='container'>
            <div className="main">
                <h2>How Does it Work?</h2>
                <div className="how-holder">
                    {[
                        {
                            title: "AI Assisted",
                            content: "Upload any CV on our Secure platform and our AI-boosted engine will instantly parse your CV ensuring you get maximum accuracy every time.",
                            accordionItems: [
                                {
                                    heading: "AI Boosted Parsing",
                                    content: "Think of our AI as a super-sleuth, precisely parsing every CV and catching details even experts might miss.",
                                    index: 1
                                },
                                {
                                    heading: "Intelligent Error Identification",
                                    content: "CVR has a keen eye for spotting highlighting formatting missteps or missing data that even seasoned professionals might overlook.",
                                    index: 8
                                },
                            ],
                            animation: AI_Assisted
                        },
                        {
                            title: "Use It In Seconds",
                            content: "Our highly visual validation process enables the human and machine collaboration to instantly parse and perfectly validate CVs in 2-3 minutes - every time.",
                            accordionItems: [
                                {
                                    heading: "Friendly Interface",
                                    content: "No tech degree? No problem! Our tool is designed to be as intuitive and easy-to-use as possible.",
                                    index: 2
                                },
                                {
                                    heading: "Rapid Navigation",
                                    content: "Move at lightning speed! Navigate through any CV section rapidly.",
                                    index: 3
                                },
                            ],
                            animation: Use_it_seconds
                        },
                        {
                            title: "100% Accurate",
                            content: "AI assistance, machine automation, and human validation ensure 100% accuracy of the data.",
                            accordionItems: [
                                {
                                    heading: "Visual Validation",
                                    content: "Our visual validation UI is like having X-ray vision!",
                                    index: 4
                                },
                                {
                                    heading: "Precision Insights",
                                    content: "Unlock deeper insights with pinpoint accuracy.",
                                    index: 5
                                },
                            ],
                            animation: _Accuracey
                        },
                        {
                            title: "Instant Reformatting",
                            content: "Instant reformatting happens in a flash. Any validated CV will be perfectly reformatted freeing you to do moreimportant work.",
                            accordionItems: [
                                {
                                    heading: "Perfect Reformatting",
                                    content: "Transform CVs in a flash! Whatever the template, our tool guarantees a perfect reformat.",
                                    index: 6
                                },
                                {
                                    heading: "Customizable Outputs",
                                    content: "Don't be boxed in by limited formatting options.",
                                    index: 7
                                },
                            ],
                            animation: Instant_reformatting
                        },
                    ].map((item, sectionIndex) => (
                        <div >
                            <div className="how-item" key={sectionIndex}>
                            <div className="how-order-1">
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                                <div className="accordion-wrapper">
                                    {item.accordionItems.map((accordionItem) => (
                                        <div className={`accordion-item ${openIndex === accordionItem.index ? 'open' : ''}`} key={accordionItem.index}>
                                            <div className="accordion-item-trigger" onClick={() => toggleAccordion(accordionItem.index)}>
                                                <h4 className={`accordion-heading ${openIndex === accordionItem.index ? 'active' : ''}`}>{accordionItem.heading}</h4>
                                                <img src={arrow} alt="" className={`arrow-icon ${openIndex === accordionItem.index ? 'rotate' : ''}`} />
                                            </div>
                                            <div className={`accordion-item-content ${openIndex === accordionItem.index ? 'show' : ''}`}>
                                                <p>{accordionItem.content}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            
                            <div className={`how-number-holder ${activeIndex === sectionIndex + 1 ? 'active' : ''}`}>
                                <div className="how-number">
                                    <div>{sectionIndex + 1}</div>
                                </div>
                            </div>
                            <div className="how-order-last">
                                <div className="how-lottie-wrap">
                                    <Lottie animationData={item.animation} loop={true} />
                                </div>
                            </div>
                            </div>
                            <div className="how-bar"></div>
                        </div>
                        
                    ))}
                </div>
            </div>
        </div>
    );
}

import React, { useState } from 'react';

const faqs = [
    {
        question: 'What is Ustream?',
        answer: `Ustream is not just streaming service but also a platform that allows users to stream and earn cryptocurrency at the same time. <br /><br /> Ustream is packed with different movies you can stream anytime anyplace, anywhere, all in one of the lowest monthly prices and still earn free cryptocurrency. New movies are added every week.`,
    },
    {
        question: 'How much does Ustream cost?',
        answer: 'You can watch Ustream on your smartphone and laptop all on a fixed monthly price. You have access to streaming as low as $1 a month. No extra costs, no contracts.',
    },
    {
        question: 'Would I earn cryptocurrency?',
        answer: 'Yes as you stream movies you earn free cryptocurrency.',
    },
    {
        question: 'How do I cancel?',
        answer: 'Ustream is flexible. There are no hidden contracts and can cancel anytime. No cancellation fees- start or stop your account anytime.',
    },
    {
        question: 'What can I watch on Ustream?',
        answer: 'Ustream has a vast library of exclusive movies. Watch as much as many movie as you want and earn free cryptocurrency.',
    }
];

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='faq-container bg-[#4A0000] text-white p-5 sm:p-10'>
            <h2 className='text-center text-2xl sm:text-3xl font-semibold mb-6'>Frequently Asked Questions</h2>
            <div className='space-y-4'>
                {faqs.map((faq, index) => (
                    <div key={index} className='bg-[#430000] rounded-lg'>
                        <div
                            className='p-[1px] gradient'
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className='bg-[#430000] h-full flex justify-between items-center p-4 cursor-pointer'>
                                <h3 className='text-lg font-medium'>{faq.question}</h3>
                                <span>{activeIndex === index ? '✕' : '+'}</span>
                            </div>
                        </div>
                        {activeIndex === index && (
                            <div className='gradient p-[1px]'>
                                <div
                                    className='px-4 pb-6 pt-2 text-sm text-gray-300 bg-[#430000]'
                                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQs;

import React from 'react'
import questions from '../../data/questionsAnswers'
import Reveal from "../ui/Reveal";

export default function CommonQuestions() {
    return (
        <section aria-labelledby="common-questions-title" className="px-6 md:px-36 py-12 md:py-24">
            <div className="max-w-7xl mx-auto">
                <Reveal as="h2" variant="slide-up" id="common-questions-title" className="text-[40px] leading-[52px] font-medium text-[#11142D]">
                    Common Questions
                </Reveal>
                <div className="mt-10 grid gap-8">
                    {questions.map((q, idx) => (
                        <Reveal key={idx} variant="fade" delay={idx * 100} className="group">
                            <h3 className="text-[19px] leading-[35px] font-medium text-[#11142D]">{q.question}</h3>
                            <p className="mt-3 text-[19px] leading-[35px] text-[#6D6E7A]">{q.answer}</p>
                        </Reveal>
                    ))}
                </div>
                <Reveal variant="scale-in" delay={questions.length * 100 + 100} className="mt-8">
                    <a
                        href="#more-questions"
                        role="button"
                        className="group inline-flex items-center px-6 py-3 border-2 rounded-[16px] border-[rgba(83,180,218,0.695577)] text-[16px] font-semibold text-[#1E3E85] transition-transform transform hover:scale-[1.03] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#52B4DA]"
                    >
                        <span className="transition-colors duration-200 group-hover:text-[#08345A]">More Questions</span>
                    </a>
                </Reveal>
            </div>
        </section>
    )
}

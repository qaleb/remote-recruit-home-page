import React from 'react'
import questions from '../data/questionsAnswers'

export default function CommonQuestions() {
    return (
        <section aria-labelledby="common-questions-title" className="px-6 md:px-36 py-12 md:py-24">
            <div className="max-w-7xl mx-auto">
                <h2 id="common-questions-title" className="text-[40px] leading-[52px] font-medium text-[#11142D]">
                    Common Questions
                </h2>

                <div className="mt-10 grid gap-8">
                    {questions.map((q, idx) => (
                        <div key={idx} className="group">
                            <h3 className="text-[19px] leading-[35px] font-medium text-[#11142D]">
                                {q.question}
                            </h3>
                            <p className="mt-3 text-[19px] leading-[35px] text-[#6D6E7A]">
                                {q.answer}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-8">
                    <a
                        href="#more-questions"
                        role="button"
                        className="inline-flex items-center px-6 py-3 border-2 rounded-[16px] border-[rgba(83,180,218,0.695577)] text-[16px] font-semibold text-[#1E3E85]"
                    >
                        More Questions
                    </a>
                </div>
            </div>
        </section>
    )
}

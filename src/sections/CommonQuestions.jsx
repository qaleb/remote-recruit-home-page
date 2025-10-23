import React from 'react'

export default function CommonQuestions() {
    return (
        <section aria-labelledby="common-questions-title" className="px-6 md:px-36 py-12 md:py-24">
            <div className="max-w-7xl mx-auto">
                <h2 id="common-questions-title" className="text-[40px] leading-[52px] font-medium text-[#11142D]">
                    Common Questions
                </h2>

                <div className="mt-10 grid gap-8 max-w-3xl">
                    <div>
                        <h3 className="text-[19px] leading-[35px] font-medium text-[#11142D]">
                            Do I have to sign a long-term contract?
                        </h3>
                        <p className="mt-3 text-[19px] leading-[35px] text-[#6D6E7A]">
                            Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party
                        </p>
                    </div>

                    <div>
                        <h3 className="text-[19px] leading-[35px] font-medium text-[#11142D]">
                            Can I pay for a whole year?
                        </h3>
                        <p className="mt-3 text-[19px] leading-[35px] text-[#6D6E7A]">
                            Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party
                        </p>
                    </div>

                    <div>
                        <h3 className="text-[19px] leading-[35px] font-medium text-[#11142D]">
                            What if I need help?
                        </h3>
                        <p className="mt-3 text-[19px] leading-[35px] text-[#6D6E7A]">
                            Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party
                        </p>
                    </div>
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

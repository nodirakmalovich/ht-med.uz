'use client'
import { useState } from 'react'
import './ui/AboutPageData.scss'
import useAchievments from "@/data/useAchievments"

export default function AboutPageData() {

    const { achievments } = useAchievments()
    const [singleAchievment, setSingleAchievment] = useState({})


    function handleAchiev(achiev) {
        setSingleAchievment(achiev)
        console.log(singleAchievment);
    }
    return (
        <div className="AboutPageData">
            <div className="my-container">
                <div className="AboutPageData_header">
                    <p className="AboutPageData_header_title">
                        Чего мы достигли?
                    </p>
                </div>

                <div className="AboutPageData_content">
                    <div className="AboutPageData_content_years">
                        {
                            achievments?.map((achievment, index) => {
                                return (
                                    <button
                                        className='AboutPageData_content_years_btn'
                                        key={index}
                                        onClick={() => { handleAchiev(achievment) }}
                                    >
                                        {achievment?.year?.slice(0, 4)}
                                    </button>
                                )
                            })
                        }
                    </div>

                    <div className="AboutPageData_content_numbers">
                        <div className="AboutPageData_content_numbers_card">
                            <img
                                className='AboutPageData_content_numbers_card_image'
                                src={singleAchievment?.image_url}
                                alt={singleAchievment?.year}
                            />
                            <div
                                className="AboutPageData_content_numbers_card_body"
                                dangerouslySetInnerHTML={{ __html: singleAchievment?.body }}
                            />

                        </div>

                    </div>

                    <p className="AboutPageData_content_year">
                        {
                            singleAchievment?.year?.slice(0, 2)
                        } <br />
                        {
                            singleAchievment?.year?.slice(2, 4)
                        }
                    </p>

                </div>
            </div>

        </div>
    )
}
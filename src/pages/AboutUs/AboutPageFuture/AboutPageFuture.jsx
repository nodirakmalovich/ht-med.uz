'use client'

import MissionComponent from '@/components/Mission/MissionComponent'
import './ui/AboutPageFuture.scss'
import FuturePlanComponent from '@/components/FuturePlan/FuturePlan'
import useFutureWork from '@/data/useFutureWork'
import HomeAdvantages from '@/pages/Home/HomeAdvantages/HomeAdvantages'

export default function AboutPageFuture() {
    const { futureWork } = useFutureWork()
    return (
        <div className="AboutPageFuture">
            <div className="my-container">
                <MissionComponent
                    title={'Планы на будущее'}
                    description={'Основной целью компании является создание дилерства во всех регионах страны, повышение уровня медицины в Узбекистане, анализ и изучение рынка, обучение врачей и повышение их квалификации. Внедрение адаптированного программного обеспечения, новых технологий и доступных расходных материалов.'}
                />

                <table >
                    <thead>
                        <tr>
                            <th>год</th>
                            <th>Цели</th>
                        </tr>
                    </thead>
                    <tbody>
                        {futureWork?.map((plan, index) => {
                            return (
                                <tr key={index} className='mt-5'>
                                    <td className='table-cell-top'>
                                        <button className='table_year'>
                                            {plan?.year?.slice(0, 4)}

                                        </button>
                                    </td>
                                    <td className='table-cell-top'>
                                        <p className='table_description'>

                                            {plan?.description}
                                        </p>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                <HomeAdvantages/>
            </div>
        </div>
    )
}
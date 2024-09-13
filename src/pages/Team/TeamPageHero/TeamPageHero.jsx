'use client'

import Header from '@/components/Header/Header'
import './ui/TeamPageHero.scss'
import useTeamData from '@/data/useTeamData'
import PersonCard from '@/components/Cards/PersonCard/PersonCard'

export default function TeamPageHero() {

    const { personData, teamData } = useTeamData()
    return (
        <div className="TeamPageHero">
            <div className="my-container">
                <div className="TeamPageHero_header">
                    <Header
                        mainText={'Команда'}
                        btnText={'Назад'}
                    />
                </div>

                <div className="TeamPageHero_team">
                    <p className='TeamPageHero_team_title'>
                        {teamData?.title}
                    </p>

                    <p className="TeamPageHero_team_description">
                        {teamData?.description}
                    </p>

                    <img src={teamData?.image} alt="" />
                </div>

                <div className="TeamPageHero_command">
                    <p className="TeamPageHero_command_title">
                        Наша команда
                    </p>

                    <div className="TeamPageHero_command_row">
                        {
                            personData?.map((person, index) => {
                                return (
                                    <div key={index}>
                                        <PersonCard
                                            image={person.image}
                                            name={person.full_name}
                                            position={person.position}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
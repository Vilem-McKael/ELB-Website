import React, {useState} from 'react'
import CreditContainer from './CreditContainer'
import { AllMedia } from '../../data/creditMedia'

const roleObj = {
    'vocalist': false,
    'vocal contractor': false,
    'conductor': false,
    'vocal coach': false,
    'arranger': false,
    'musician': false,
    'vocal producer': false,
    'vocal consultant': false
}

const typeObj = {
    movie: false,
    tv: false,
    album: false,
    song: false,
    game: false,
    live: false,
}

const yearObj = {
    startYear: 1970,
    endYear: 2024
}

const sortObj = {
    alphabetically: false,
    reverseAlphabetically: false,
    chronologically: false,
    reverseChronologically: true
}

const emptySortObj = {
    alphabetically: false,
    reverseAlphabetically: false,
    chronologically: false,
    reverseChronologically: false
}

export default function AllMediaList({filters, viewedCredits, updateFilters, sortPreference, sortCredits}) {

    const [roles, setRoles] = useState({...filters.roles})
    const [years, setYears] = useState({...filters.years})
    const [types, setTypes] = useState({...filters.types})
    const [sortType, setSortType] = useState(sortPreference)

    const handleSortCheckbox = (evt) => {
        let newSort = {...emptySortObj, [evt.target.name]: Boolean(evt.target.checked)}
        console.log(newSort)
        sortCredits(newSort)
        setSortType(newSort)
    }

    const handleRoleCheckbox = (evt) => {
        console.log(evt.target.name, Boolean(evt.target.checked))
        setRoles({...roles, [evt.target.name]: Boolean(evt.target.checked)})
    }

    const handleTypeCheckbox = (evt) => {
        setTypes({...types, [evt.target.name]: Boolean(evt.target.checked)})
    }

    const handleSelectYear = (evt) => {
        setYears({...years, [evt.target.name]: evt.target.value})
    }

    const handleApplyFilters = () => {

        const newFilters = {
            roles: {...roles},
            types: {...types},
            years: {...years}
        }

        console.log(sortType)
        updateFilters(newFilters, sortType, viewedCredits)

    }

    const handleClearFilters = () => {

        const starterFilters = {
            roles: {...roleObj},
            types: {...typeObj},
            years: {...yearObj}
        }

        setRoles(starterFilters.roles)
        setTypes(starterFilters.types)
        setYears(starterFilters.years)

        setSortType({...sortObj})

        updateFilters(starterFilters, sortObj, AllMedia)

    }

  return (
    <div className='flex justify-center items-start w-full md:w-[800px] lg:w-[1000px] md:pl-[250px]'>
        <div className='fixed w-[240px] h-[560px] border-black border-[1px] flex flex-col left-[20px] top-[200px] p-4 gap-2'>
            <input className='h-[30px] w-full border-black border-[1px] p-1 mb-1' placeholder='Search...' />
            <div className='flex flex-col'>
                <div className='text-sm flex items-center'>
                    Sort <span className='text-xs pl-1'>(Applied Automatically)</span>
                </div>
                <div className='flex flex-col text-xs border-b-[1px] border-black pb-2'>
                    <div>
                    <input type="checkbox" name="alphabetically" checked={sortType.alphabetically} onChange={handleSortCheckbox}/>
                    <label className='pl-2'>Title A-Z</label>
                    </div>
                    <div>
                    <input type="checkbox" name="reverseAlphabetically" checked={sortType.reverseAlphabetically} onChange={handleSortCheckbox}/>
                    <label className='pl-2'>Title Z-A</label>
                    </div>
                    <div>
                    <input type="checkbox" name="chronologically" checked={sortType.chronologically} onChange={handleSortCheckbox}/>
                    <label className='pl-2'>Chronologically</label>
                    </div>
                    <div>
                    <input type="checkbox" name="reverseChronologically" checked={sortType.reverseChronologically} onChange={handleSortCheckbox}/>
                    <label className='pl-2'>Reverse Chrono</label>
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='text-sm'>
                    Role
                </div>
                
                <div className='flex flex-col text-xs'>
                    <div>
                    <input type="checkbox" name="vocalist" checked={roles['vocalist']} onChange={handleRoleCheckbox}/>
                    <label className='pl-2'>Vocalist</label>
                    </div>
                    <div>
                    <input type="checkbox" name="vocal contractor" checked={roles['vocal contractor']} onChange={handleRoleCheckbox}/>
                    <label className='pl-2'>Vocal Contractor</label>
                    </div>
                    <div>
                    <input type="checkbox" name="conductor" checked={roles['conductor']} onChange={handleRoleCheckbox}/>
                    <label className='pl-2'>Conductor</label>
                    </div>
                    <div>
                    <input type="checkbox" name="vocal coach" checked={roles['vocal coach']} onChange={handleRoleCheckbox}/>
                    <label className='pl-2'>Vocal Coach</label>
                    </div>
                    <div>
                    <input type="checkbox" name="arranger" checked={roles['arranger']} onChange={handleRoleCheckbox}/>
                    <label className='pl-2'>Arranger</label>
                    </div>
                    <div>
                    <input type="checkbox" name="vocal consultant" checked={roles['vocal consultant']} onChange={handleRoleCheckbox}/>
                    <label className='pl-2'>Vocal Consultant</label>
                    </div>
                    <div>
                    <input type="checkbox" name="vocal producer" checked={roles['vocal producer']} onChange={handleRoleCheckbox}/>
                    <label className='pl-2'>Vocal Producer</label>
                    </div>
                    <div>
                    <input type="checkbox" name="musician" checked={roles['musician']} onChange={handleRoleCheckbox}/>
                    <label className='pl-2'>Musician</label>
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='text-sm'>Year</div>
                <div className='flex flex-col pl-4 text-xs'>
                    <div>
                        <input type='number' min="1970" max="2024" value={years.startYear} name='startYear' onChange={handleSelectYear}/>
                        <label className='pl-2'>Start</label>
                    </div>
                    <div>
                        <input type='number' min='1970' max='2024' value={years.endYear} name='endYear' onChange={handleSelectYear} />
                        <label className='pl-2'>End</label>
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='text-sm'>
                    Type of Media
                </div>
                <div className='text-xs flex flex-col'>
                    <div>
                    <input type="checkbox" name="movie" checked={types.film} onChange={handleTypeCheckbox}/>
                    <label className='pl-2'>Movie</label>
                    </div>
                    <div>
                    <input type="checkbox" name="tv" checked={types.tv} onChange={handleTypeCheckbox}/>
                    <label className='pl-2'>TV</label>
                    </div>
                    <div>
                    <input type="checkbox" name="album" checked={types.album} onChange={handleTypeCheckbox}/>
                    <label className='pl-2'>Album</label>
                    </div>
                    <div>
                    <input type="checkbox" name="song" checked={types.song} onChange={handleTypeCheckbox}/>
                    <label className='pl-2'>Song</label>
                    </div>
                    <div>
                    <input type="checkbox" name="game" checked={types.game} onChange={handleTypeCheckbox}/>
                    <label className='pl-2'>Game</label>
                    </div>
                    <div>
                    <input type="checkbox" name="live" checked={types.live} onChange={handleTypeCheckbox}/>
                    <label className='pl-2'>Live</label>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-evenly mt-1'>

                <button className='px-2 py-1 rounded-lg font-medium border-black border-[1px] text-sm transform duration-100 hover:scale-105' onClick={handleApplyFilters}>Apply</button>

                <button className='px-2 py-1 rounded-lg font-medium border-black border-[1px] text-sm transform duration-100 hover:scale-105' onClick={handleClearFilters}>Clear</button>
    
            </div>
        </div>
        <table className='flex flex-col mb-12 text-sm font-normal'>
            <tbody>
                <tr className='w-full h-[44px] text-start border-[1px] border-black text-lg'>
                    <th className='w-[200px] p-2 border-r-[1px] border-black text-start'>
                        Type
                    </th>
                    <th className='w-[400px] p-2 border-r-[1px] border-black text-start'>
                        Title
                    </th>
                    <th className='w-[200px] p-2 border-r-[1px] border-black text-start'>
                        Artist
                    </th>
                    <th className='w-[100px] p-2 border-r-[1px] border-black text-start'>
                        Year
                    </th>
                    <th className='w-[200px] p-2 text-start'>
                        Roles
                    </th>
                </tr>
                {viewedCredits.map((credit, index) => {
                    return <CreditContainer key={index} credit={credit}/>
                })}
            </tbody>
        </table>
    </div>
  )
}

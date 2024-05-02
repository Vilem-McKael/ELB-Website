import React, { useCallback, useEffect } from 'react'
import { useState } from 'react'
import CategoryButton from '../../components/Credits/CategoryButton'
import MediaGrid from '../../components/Credits/MediaGrid'
import { CreditCategory, AllMedia, FeaturedMedia } from '../../data/creditMedia'
import AllMediaList from '../../components/Credits/AllMediaList'
import FeaturedCreditsList from '../../components/Credits/FeaturedCreditsList'


const emptyFilters = {
    types: {
        movie: false,
        tv: false,
        album: false,
        song: false,
        game: false,
        live: false,
    },
    roles: {
        'vocalist': false,
        'vocal contractor': false,
        'conductor': false,
        'vocal coach': false,
        'musician': false,
        'arranger': false,
        'vocal producer': false,
        'vocal consultant': false
    },
    years: {
        startYear: 1970,
        endYear: 2024
    }
}

const defaultSort = {
    alphabetically: false,
    reverseAlphabetically: false,
    chronologically: false,
    reverseChronologically: true
}

const capitalizedKeys = {
    'vocalist': 'Vocalist',
    'vocal contractor': 'Vocal Contractor',
    'conductor': 'Conductor',
    'musician': 'Musician',
    'background vocalist': 'Background Vocalist',
    'vocal coach': 'Vocal Coach',
    'movie': 'Movie',
    'tv': 'TV',
    'song': 'Song',
    'album': 'Album',
    'game': 'Game',
    'live': 'Live'
}

const roleEquivalents = {
    'vocal coach': ['Coach', 'coach'],
    'vocalist': ['Vocalist', 'vocalist', 'Soloist', 'soloist', 'Singer', 'singer', 'Choir Member'],
    'vocal contractor': ['Contractor', 'contractor'],
    'musician': ['Musician', 'musician'],
    'arranger': ['Arranger', 'arranger'],
    'conductor': ['Conductor', 'conductor'],
    'vocal producer': ['Producer', 'producer'],
    'vocal consultant': ['Consultant', 'consultant']
}

export default function CreditsPage() {

    const [selectedSubpage, setSelectedSubpage] = useState("Featured")
    const [selectedCategory, setSelectedCategory] = useState(CreditCategory.Artists)
    const [creditFilters, setCreditFilters] = useState(emptyFilters)
    const [viewedCredits, setViewedCredits] = useState([])
    const [preSearchCredits, setPreSearchCredits] = useState([])
    const [sortPreference, setSortPreference] = useState(defaultSort)
    const [isLoadingCredits, setIsLoadingCredits] = useState(false)


    useEffect(() => {
        // setIsLoadingCredits(true)
        filterCredits(creditFilters, defaultSort)
    }, [])

    const updateSelectedCategory = useCallback((category) => {
        setIsLoadingCredits(true)
        setSelectedCategory(category)
        setIsLoadingCredits(false)
    })

    const sortCredits = useCallback((sortObj, credits=null) => {

        console.log(sortObj)

        let sortType;
        for (const [key, value] of Object.entries(sortObj)) {
            console.log(key, value)
            if (value) {
                console.log('here')
                // console.log(key, value)
                sortType = key
            }
        }

        let sorter;

        switch (sortType) {
            case 'chronologically':
                sorter = (a, b) => {
                    let yearA = parseInt(a.year)
                    let yearB = parseInt(b.year)

                    if (!yearA) {
                        yearA = Infinity
                    }
                    if (!yearB) {
                        yearB = Infinity
                    }

                    return yearA - yearB
                }
                break
            case 'reverseChronologically':
                sorter = (a, b) => {
                    let yearA = parseInt(a.year)
                    let yearB = parseInt(b.year)

                    if (!yearA) {
                        yearA = 0
                    }
                    if (!yearB) {
                        yearB = 0
                    }

                    return yearB - yearA
                    }
                break
            case 'alphabetically':
                sorter = (a, b) => a.title.toString().localeCompare(b.title.toString())
                break
            case 'reverseAlphabetically':
                sorter = (a, b) => b.title.toString().localeCompare(a.title.toString())
                break
            default:
                sorter = (a, b) => {
                    let yearA = parseInt(a.year)
                    let yearB = parseInt(b.year)

                    if (!yearA) {
                        yearA = 0
                    }
                    if (!yearB) {
                        yearB = 0
                    }

                    return yearB - yearA
                    }
                break
        }

        console.log(sortType, sorter)
        console.log('here')
        if (!credits) {
            console.log('here1')
            credits = viewedCredits
        }
        let sortedCredits = credits.sort(sorter)
        setSortPreference(sortObj)
        console.log(sortedCredits)
        setViewedCredits(sortedCredits)
        setIsLoadingCredits(false)
    })

    const searchCredits = (searchTerms) => {

        let searchResults = []

        for (credit of viewedCredits) {
            if (credit.title.toLowerCase().contains(searchTerms)) {
                searchResults.push(credit)
            }
        }

        setPreSearchCredits(viewedCredits)
        setViewedCredits(searchResults)
    }

    const filterCredits = useCallback((filters, sortObj) => {

        setIsLoadingCredits(true)

        const typeIsFiltered = Object.values(filters.types).some((value) => value)
        const roleIsFiltered = Object.values(filters.roles).some((value) => value)
        const yearsAreFiltered = filters.years.startYear !== 1970 || filters.years.endYear !== 2024

        if (!typeIsFiltered && !roleIsFiltered && !yearsAreFiltered) {
            setCreditFilters(emptyFilters)
            // setViewedCredits([...AllMedia])
            sortCredits(sortObj, AllMedia)
            return
        }

        let filteredCredits = []
        // let newFilters = emptyFilters

        console.log(sortObj)

        for (let i = 0; i < AllMedia.length; i++) {
            let credit = AllMedia[i]
            // let shouldAdd = false
            let typeIncluded = false
            let roleIncluded = false
            let yearIncluded = false
//  ********************** THERE IS A BETTER WAY TO DO THIS THAN SPLITTING EVERY TIME **********
            if (typeIsFiltered) {
                for (const [key, value] of Object.entries(filters.types)) {
                    console.log(credit.type)
                    
                    if (value && credit.type && credit.type.includes(capitalizedKeys[key])) {
                        // console.log('here')
                        typeIncluded = true
                        break
                    }
                }
                
            } else {
                // console.log('here1')
                typeIncluded = true
            }

            if (typeIncluded) {
                if (roleIsFiltered) {
                    // roleIsFiltered ? credit.role.some(r => filters.roles.some(role => r.includes(role))) : true;
                    for (const [key, value] of Object.entries(filters.roles)) {
                        if (value) {
                            let associatedKeywords = roleEquivalents[key];
                            for (const role of credit.role) {
                                for (const keyword of associatedKeywords) {
                                    if (role.includes(keyword)) {
                                        roleIncluded = true
                                        break
                                    }
                                }
                            }
                        }
                    }
            
                } else {
                    // console.log('here3')
                    roleIncluded = true
                }

                if (roleIncluded) {
                    if (yearsAreFiltered) {
                        // console.log('here4', credit.year, parseInt(credit.year), filters.years.startYear, filters.years.endYear)
                        yearIncluded = parseInt(credit.year) >= filters.years.startYear && credit.year <= filters.years.endYear
                    } else {
                        // console.log('here5')
                        yearIncluded = true
                    }

                    if (yearIncluded) {
                        // console.log("typeIncluded: ", typeIncluded, "roleIncluded: ", roleIncluded, "yearIncluded: ", yearIncluded, "credit: ", credit)
                        filteredCredits.push(credit)
                    }
                }
            }
        }
        
        console.log("FILTERED CREDITS: ", filteredCredits)

        sortCredits(sortObj, filteredCredits)
        setCreditFilters(filters)

    })

    const updateSubpage = (subpage) => {
        setSelectedSubpage(subpage)
    }

  return (
    <div className='flex flex-col w-full items-center bg-light7'>
        <div className='text-4xl font-semibold pt-16'>
            Credits
        </div>
        {/* <div className='mt-8 text-center'>
            Short blurb about Edie's impact on the music industry
        </div> */}

        <div className='flex flex-row w-full justify-center mt-8 gap-8 text-xl'>
            <button className={`w-[120px] h-[60px] border-black flex items-center justify-center transform hover:scale-105 hover:font-semibold duration-150 origin-top ${selectedSubpage === 'Featured' ? 'border-2' : ''}`} onClick={() => updateSubpage("Featured")}><span className='border-b-[1px] border-black'>Featured</span></button>
            <button className={`w-[120px] h-[60px] border-black flex items-center justify-center transform hover:scale-105 hover:font-semibold duration-150 origin-top ${selectedSubpage === 'All' ? 'border-2' : ''}`} onClick={() => updateSubpage("All")}><span className='border-b-[1px] border-black'>All</span></button>
        </div>

        <div className='flex flex-col items-center mt-8 mb-16'>
            {isLoadingCredits ? 
            <></>
            :
            selectedSubpage === "Featured" ?
            <FeaturedCreditsList selectedCategory={selectedCategory} updateSelectedCategory={updateSelectedCategory}/>
            :
            <AllMediaList filters={creditFilters} viewedCredits={viewedCredits} updateFilters={filterCredits} sortPreference={sortPreference} sortCredits={sortCredits}/>
            }
        </div>
    </div>
  )
}

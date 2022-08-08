import React, { useState } from 'react'
import Listing from './components/Listing'
import data from './local-json/data.json'
import './App.css'

function App() {
  const [filtered, setFiltered] = useState([])

  // ----------------------------------

  //filters selected roles
  const filterRoles = data.filter(listing => {
    const findWord = filtered.find(checker => checker === listing.role)
    if(findWord) {return true}
  })
  // console.log(filterRoles)

  //filters selected level
  const filterLevel = data.filter(listing => {
    const findWord = filtered.find(checker => checker === listing.level)
    if(findWord) {return true}
  })
  // console.log(filterLevel)

  //filters selected languages
  //needs to be worked on
  const filterLanguages = data.filter(listing => {
    for(let checker of listing.languages) {
      const findWord = filtered.find(word => word === checker)
      if(findWord) {return true}
    }
  })
  // console.log(filterLanguages)

  //concat all 3 arrays
  const concatFilteredData = [...filterRoles, ...filterLevel, ...filterLanguages]
  console.log(concatFilteredData)

  //eliminate douplicates
  const 

// ---------------------------------------

  function toFilter(e) {
    console.log( e.target.innerHTML + " clicked")
    const wordBtn = e.target.innerHTML
    const findWord = filtered.find(word => word === wordBtn)
    if(!findWord) {
      setFiltered(prevFiltered => [...prevFiltered, wordBtn])
    } else {
      setFiltered(prevFiltered => prevFiltered.filter(word => word !== wordBtn))
    }
    console.log(filtered)
  }

  const listings = data.map(listing => {
    return (
      <Listing 
        key={listing.id}
        logo={listing.logo}
        company={listing.company}
        isNew={listing.new}
        isFeatured={listing.featured}
        position={listing.position}
        postedAt={listing.postedAt}
        contract={listing.contract}
        location={listing.location}

        role={listing.role}
        level={listing.level}
        languages={listing.languages}
        tools={listing.tools}
        toggleBtn={toFilter}
      />)
  })

  return (
    <div className='container'>
      {listings}
    </div>
  )
}

export default App

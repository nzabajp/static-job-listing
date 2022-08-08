import React, { useState } from 'react'
import Listing from './components/Listing'
import data from './local-json/data.json'
import './App.css'

function App() {
  const [filtered, setFiltered] = useState([])

  function toFilter(e) {
    console.log( e.target.innerHTML + " clicked")
    const wordBtn = e.target.innerHTML
    const findWord = filtered.find(word => word === wordBtn)
    if(!findWord) {
      setFiltered(prevFilter => [...prevFilter, wordBtn])
    } else {
      setFiltered(prevFilter => prevFilter.filter(word => word !== wordBtn))
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
        btn={toFilter}
      />)
  })

  return (
    <div className='container'>
      {listings}
    </div>
  )
}

export default App

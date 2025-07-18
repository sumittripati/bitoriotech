import React from 'react'
import Herosection from '../components/Herosection'
import Offers from '../components/Offers'
import Innovation from '../components/Innovation'
import Projects from '../components/Projects'
import Services from '../components/Services'
import Clients from '../components/Clients'
import Latest from '../components/Latest'

const Home = () => {
  return (
    <div>
        {/* <h1>Welcome to the Home Page</h1> */}

        <Herosection />
        <Offers />
        <Innovation />
        <Projects />
        <Services />
        <Clients />
        <Latest />

    </div>
  )
}

export default Home

import React from 'react'
import Banner from '../components/Banner'
import Map from '../components/Map'
import Teams from '../components/Teams'
import { Helmet } from 'react-helmet'
import PricingTable from '../components/PricingTable'
import FeaturedRooms from '../components/FeaturedRooms'
import Promotion from '../components/Promotion'

export default function Home() {
  return (
    <div>
        <Helmet>
            <title> Stock Room </title>
        </Helmet>
        <Banner></Banner>
        <Map></Map>
        <Promotion></Promotion>
        <FeaturedRooms></FeaturedRooms>
        
        <Teams></Teams>
        <PricingTable></PricingTable>
    </div>
  )
}

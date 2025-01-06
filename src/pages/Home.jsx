import React from 'react'
import Banner from '../components/Banner'
import Map from '../components/Map'
import Teams from '../components/Teams'
import { Helmet } from 'react-helmet'
import PricingTable from '../components/PricingTable'

export default function Home() {
  return (
    <div>
        <Helmet>
            <title> Stock Room </title>
        </Helmet>
        <Banner></Banner>
        {/* <Map></Map> */}
        <Teams></Teams>
        <PricingTable></PricingTable>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { LuTimerReset } from 'react-icons/lu'
import Table from '../components/AllTender'
import Dropdown from '../components/Dropdown'
import ProgressBar from '../components/ProgressBar'
import Filter from '../components/Filter'
import Status from '../components/Status'


const dataset = [
  {
    amount: "500",
    name: "Private Tenders",
    percent: "40%",
  },
  {
    amount: "1,200",
    name: "IT Tenders",
    percent: "80%",
  },
  {
    amount: "350",
    name: "Construction Tenders",
    percent: "28%",
  },
  {
    amount: "950",
    name: "Consulting Tenders",
    percent: "76%",
  }
]

const Index = () => {
  return (
    
    // <div className="flex items-center justify-between mb-5">
    //   <section className=' bg-white p-8 shadow dark:bg-black rounded-[20px]'>
    //     <div className="flex items-center justify-between mb-5">
    //       <h5 className="font-semibold text-lg dark:text-white-light">All Tenders</h5>
    //       <button type="button" className="font-semibold bg-[#3328a8] text-white px-5 py-3 cursor-pointer rounded-full hover:bg-[#3328a8]/90">
    //         Add new Tender
    //       </button>
    //     </div>
    //     <Table />

    //   </section>

    //   </div>
    <div>
      <ul className="flex space-x-2 rtl:space-x-reverse">
        <li>

          <NavLink to="/">{('  Dashboard')}</NavLink>


        </li>
        <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
          <span>Tenders</span>
        </li>
      </ul>

      <div className="pt-5">

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">

        </div>

        <div className="grid lg:grid-cols-1 grid-cols-1 gap-6">

          <div className="panel h-full w-full">
            <div className="flex items-center justify-between mb-5">
              <h5 className="font-semibold text-lg dark:text-white-light">All Tenders</h5>

              <div className='rounded-full bg-blue-950 p-2 text-white-light'>
                <NavLink to="/PublicTender">{('Add New Tenders')}</NavLink> </div>
            </div>
            <hr />

            <div className=' flex  flex-row justify-between '>  <Filter />  <Status /> </div>
            <div className="table-responsive">

              {/* Table */}
              <Table />
            </div>
          </div>
        </div>
      </div>
    </div>

)
}

export default Index;

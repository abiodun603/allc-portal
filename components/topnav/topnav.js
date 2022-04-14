import React from 'react'
import {TopNavWrapper} from './style-topnav'
import Link from 'next/link'
import { useRouter } from "next/router";
import Button from "../shared/button"
import { Breadcrumbs } from '@mui/material'

const Topnav = ({url}) => {
  const router = useRouter();
  console.log(router.pathname)

  let name = "";
  if(router.pathname === "/"){
    name = "Dashboard"
  }else if(router.pathname === "/leave/leave"){
    name = "Leave Request"
  }
  return (
    <>
      <TopNavWrapper className='shadow-slate-50'>
        {/* Left hand side top nav */}
        <div className = "left_Topnav flex flex-col ml-10">
          {/* search */}
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover"  href="/">
              Portal
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/getting-started/installation/"
            >
              {name}
            </Link>
          </Breadcrumbs>

          <h3 className='text-black font-semibold mt-2 text-lg'>{name}</h3>
        </div>

        {/* Right Hand side nav */}
        <div className = "right_Topnav mr-8">
         <Button buttonSize="btn--large">Sign Out</Button>
        </div>
      </TopNavWrapper>
    </>
  )
}

export default Topnav
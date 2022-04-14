import React from 'react'
import { RiHeartAddFill } from 'react-icons/ri'
import { SidebarWrapper } from './style-sidebar'
import { SidebarNav } from './sidebarNav'
// import {CSidebarNav} from "@coreui/react"
import { MENU_ITEMS, navigation } from '../../utils/ui-data'
import MenuItemsList from '../MenuItemsList'
import { Avatar, Divider } from '@mui/material'
import Image from 'next/image'
import one from "../../assets/image/one.png"

export const Sidebar = ({children}) => {
  return (
    <>
        <SidebarWrapper>
            {/* HMO LOGO */}
            <div className = "hmo_logo mb-12 flex flex-col">
              {/* image */}
              <Avatar
                alt="Remy Sharp"
                src={"../../assets/image/one.png"}
                sx={{ width: 186, height: 186, cursor: "pointer" }}
              >
                  <Image src={one} layout="fill" />
              </Avatar>
                {/* name */}
                <h2 className='mt-4 text-black font-semibold'>David Olorunda</h2>
                <Divider variant="" className='w-full mt-8' />
            </div>

            {/* Profile Listing */}
            {/* <CSidebarNav style={{listStyle: "none"}}> */}
            <MenuItemsList options={MENU_ITEMS} />            
            {/* </CSidebarNav> */}

        </SidebarWrapper>
    </>
  )
}


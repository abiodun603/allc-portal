import React from 'react'
import { Divider} from '@mui/material'
import { useForm } from 'react-hook-form'
import { SelectField, TextField } from './FormComponent';
import Button from './button';
import ScrollTextArea from './scrollTextarea/scrollTextarea';

export const NewCard = ({title, children}) => {

    return(
        <>
            <div className='h-full w-[full] flex flex-col items-center justify-center'>
                <div className="w-[500px] bg-[#F7F7F7] py-8 ">
                    {/* title */}
                    <h3 className='text-black text-xl font-semibold ml-5'>{title}</h3>

                    <Divider className='mt-5'/>
                    <div className='mx-5 pt-3'>
                       {children}
                    </div>
                </div>
            </div>
        </>
    )
    
}


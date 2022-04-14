import React from 'react'
import Table from '../../components/shared/table/table'
import Badge from '../../components/shared/badge/badge'
import { TableCard } from '../../components/shared/table/styled-table'
import { AiFillPlusCircle } from 'react-icons/ai'
import { Modal } from '@mui/material'
import { NewCard } from '../../components/shared/NewCard'
import { SelectField, TextField } from '../../components/shared/FormComponent'
import ScrollTextArea from '../../components/shared/scrollTextarea/scrollTextarea'
import Button from '../../components/shared/button'
import { useForm } from 'react-hook-form'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const dashTable = {
    head: [
        "#",
        "TYPE",
        "DETAIL",
        "STARTS",
        "ENDS",
        "SUBMITTED",
        "UPDATED",
        "APPROVAL STATUS"
    ],

    body: [
        {
            id: "1",
            type: "Sick Leave",
            details: "Medical attention",
            start: "22/10/2022",
            ends : "30/10/2022",
            submitted: "17/10/2022",
            update : "2 Days Ago",
            status: "Approved"

        },
        {
            id: "2",
            type: "Sick Leave",
            details: "Medical attention",
            start: "22/10/2022",
            ends : "30/10/2022",
            submitted: "17/10/2022",
            update : "2 Days Ago",
            status: "Pending"

        },
        
        {
            id: "3",
            type: "Sick Leave",
            details: "Medical attention",
            start: "22/10/2022",
            ends : "30/10/2022",
            submitted: "17/10/2022",
            update : "2 Days Ago",
            status: "Approved"

        },
        {
            id: "4",
            type: "Sick Leave",
            details: "Medical attention",
            start: "22/10/2022",
            ends : "30/10/2022",
            submitted: "17/10/2022",
            update : "2 Days Ago",
            status: "Rejected"

        },
        {
            id: "5",
            type: "Sick Leave",
            details: "Medical attention",
            start: "22/10/2022",
            ends : "30/10/2022",
            submitted: "17/10/2022",
            update : "2 Days Ago",
            status: "Approved"

        },
        {
            id: "6",
            type: "Sick Leave",
            details: "Medical attention",
            start: "22/10/2022",
            ends : "30/10/2022",
            submitted: "17/10/2022",
            update : "2 Days Ago",
            status: "Approved"

        },
        
    ]
}

// index below should be change to id
const renderHead = (item, index) => <th key = {index}>{item}</th>

// status color
const claimStatus = {
    "Rejected" : "danger",
    "Approved": "success",
    "Pending" : "pending"
}


// renderBody
const Renderbody = (item, index) => {

    return(
        <tr key = {index} className = "">
            <td className = "">{item.id}</td>
            <td className = "">{item.type}</td>
            <td className = "">{item.details}</td>
            <td className = "">{item.start}</td>
            <td className = "">{item.ends}</td>
            <td className = "">{item.submitted}</td>
            <td className = "">{item.update}</td>
            <td className = "">
                <span className='cursor-pointer'>
                    <Badge
                        type = {claimStatus[item.status]}
                        content = {item.status}
                    />
                </span>
            </td>
        </tr>
    )
}


const Dash = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { handleSubmit, errors, formState, register } = useForm({
        mode: "onChange"
    });
    return (
        <>
            <TableCard className='drop-shadow-sm mt-5 shadow-slate-50'>
                <div className='flex justify-end'>
                    <div onClick={handleOpen} className='flex items-center place-items-end justify-end h-[48px] cursor-pointer w-fit px-5 mb-4  rounded-lg bg-primary ease-out duration-500 hover:scale-y-105'>
                        {/* icon */}
                        <AiFillPlusCircle className='text-2xl text-white ease-out duration-500 hover:scale-105 mr-2'/>
                        {/* title */}
                        <p className='text-white text-sm font-normal'>New Application</p>
                    </div>
                </div>

                {/* Modal */}
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <NewCard title = "New Leave Request">
                        <form>
                            <SelectField
                                label = "Title"
                            >
                                <option value="">SSelect purpose of leave request</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option> 
                            </SelectField>

                            <ScrollTextArea
                                label = "Description"
                                placeholder = "A little detail please?"
                            />

                            <TextField
                                label="Expected Date To Start"
                                name="fname"
                                type="text"
                                placeholder="DD/MM/YYYY"
                                required={true}
                                {...register("text", { required: true })}
                            />

                            <TextField
                                label="Expected Date of Return"
                                name="fname"
                                type="text"
                                placeholder="DD/MM/YYYY"
                                required={true}
                                {...register("text", { required: true })}
                            />

                            <div className='flex mt-7'>
                                <Button buttonStyle="btn--grey--solid" onClick={handleClose}>Cancel</Button>
                                <span className='mr-3'></span>
                                <Button buttonSize="btn--medium" onClick={handleClose}>Save Task</Button>
                            </div>
                        </form>
                    </NewCard>
                </Modal>
                
                <Table
                    limit = "5"
                    headData = {dashTable.head}
                    renderHead = {(item, index) => renderHead(item, index)}
                    bodyData = {dashTable.body}
                    renderBody = {(item, index) => Renderbody(item, index)}
                /> 
            </TableCard>

        </>
    )
}
const Leave = () => {
  return (
    <>
        <Dash/>
    </>
  )
}

export default Leave
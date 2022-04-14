import { Avatar,Grid, Modal, Tooltip } from '@mui/material'
import React from 'react'
import Button from '../components/shared/button'
import {MdAssignmentTurnedIn} from "react-icons/md"
import {AiFillPlusCircle} from "react-icons/ai"
import { task } from '../utils/ui-data'
import { useForm } from 'react-hook-form'
import { NewCard } from '../components/shared/NewCard'
import { SelectField, TextField } from '../components/shared/FormComponent'
import ScrollTextArea from '../components/shared/scrollTextarea/scrollTextarea'

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
            id: "1",
            type: "Sick Leave",
            details: "Medical attention",
            start: "22/10/2022",
            ends : "30/10/2022",
            submitted: "17/10/2022",
            update : "2 Days Ago",
            status: "Pending"

        },
        
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
            id: "1",
            type: "Sick Leave",
            details: "Medical attention",
            start: "22/10/2022",
            ends : "30/10/2022",
            submitted: "17/10/2022",
            update : "2 Days Ago",
            status: "Rejected"

        },
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
            id: "1",
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
    "Rejected" : "fail",
    "Posted": "success",
    "Pending" : "pending"
}

const renderClaimsToggle = (user) => (
    <Tooltip title="Report claim">
        <span  style={{backgroundColor: "#EAEAEA", height: 24, width: 24}} className='ml-2 flex items-center justify-center rounded -z-10'>
            <MoreVertIcon  className='z-0' style={{fontSize: 17}}/>
        </span>
    </Tooltip>   
)

const renderClaimsData = (item, index) => (
    <Link href = {item.url} key={index} className="z-0">
      <a className='z-0'>
          {/* {item.icon} */}
          <div className='py-3 px-8 border-none'>
            <span className='text-[#E72E1E]'>{item.name}</span>
          </div>
      </a>
    </Link>
)
// renderBody
const Renderbody = (item, index) => {
    return(
        <tr key = {index} className = "">
            <td className = "">{item.claim}</td>
            <td className = "">{item.date}</td>
            <td className = "">{item.hospital}</td>
            <td className = "">
                <span className='cursor-pointer'>
                    <Badge
                        type = {claimStatus[item.status]}
                        content = {item.status}
                    />
                </span>
            </td>
            <td>
                <div className='flex items-center '>
                    <Button buttonSize="btn--table" onClick={(e) => handleClick(e, "/claim-details")}>View Details</Button>
                    <Dropdown
                        customToggle = {() => renderClaimsToggle()}
                        contentData = {claimsDown}
                        renderData = {(item, index) => renderClaimsData(item, index)}
                    />
                </div>
            </td>
        </tr>
    )
}

/**======== DASHBOARD RIGHT COMPONENT ========== * */
const LeftComponent = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return(
        <div>
            <div className='mt-10 flex items-center'>
                <Avatar
                    sx={{ width: 300, height: 300, bgcolor: "#070F4A", position: "relative"}}
                >
                    <h1 className='text-white text-5xl'>15 : 00</h1>
                </Avatar>

                <div className='ml-7'>
                    {/* title */}
                    <span className='font-light text-black'>Thursday</span>
                    {/* date */}
                    <p className='font-bold text-black mb-5 mt-2 text-3xl'>17/02/2022</p>
                    {/* clock in */}
                    <Button  buttonSize="btn--large" onClick={handleOpen}>Clock In</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <div className='flex h-full items-center justify-center' >
                            <div className='w-[500px] h-[260px] self-center rounded-lg bg-white flex flex-col items-center justify-center'>
                                {/* header text */}
                                <p className='text-center text-xl text-black font-normal'>
                                    Are you sure you want<br/>to <span className="font-semibold">CLOCK IN</span> now?
                                </p>
                                <div className='flex mt-7'>
                                    <Button buttonStyle="btn--grey--solid" onClick={handleClose}>Cancel</Button>
                                    <span className='mr-3'></span>
                                    <Button buttonSize="btn--medium">Yes, Ready to go</Button>
                                </div>
                            </div>
                        </div>
                        
                    </Modal>
                </div>
            </div>

            <div class="grid gap-x-6 gap-y-4 grid-cols-3 mt-16">
                {
                    task.map(item => {
                        return (
                            <>
                                {item.status == "completed" ? <LeftCard Color="bg-green" number = {item.number} status = {item.status}/> : item.status == "In Progress" ? <LeftCard Color="bg-kyellow" number = {item.number} status = {item.status}/> : <LeftCard Color = "bg-kgray " number = {item.number} status = {item.status}/>}
                            </>                                
                        )
                    })
                }
            </div>
        </div>
    )
}
const LeftCard = (props) => {
    return (
        <>
            <div className={`h-[180px] ease-out duration-500 hover:scale-105  rounded flex flex-col items-center justify-center ${props.Color}`} >
                    {/* icon */}
                    <MdAssignmentTurnedIn className='text-white text-4xl'/>
                    {/* count */}
                    <h3 className='text-white font-normal text-3xl  my-3'>{props.number}</h3>

                {/* completed task */}
                <p  className='text-white font-normal text-sm opacity-70'>{props.status}</p>
            </div>
        </>
            
    )
}

/**======== DASHBOARD LEFT COMPONENT ========== * */

/**======== DASHBOARD DASHBOARD COMPONENT ========== * */
const RightComponent = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { handleSubmit, errors, formState, register } = useForm({
        mode: "onChange"
    });
    return(
        <div className='h-full bg-klightgray py-5 p-5'>
            <div className='flex items-center justify-between '>
                {/* task */}
                <p className='font-semibold text-xl text-black'>Tasks</p>
                {/* icon */}
                <Tooltip title="Add task">
                    <div onClick={handleOpen}>
                        <AiFillPlusCircle className='text-2xl ease-out duration-500 hover:scale-110'/>
                    </div>
                </Tooltip>
            </div>
            <RightCard/>

            {/* Modal */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <NewCard title = "New Task">
                    <form>
                        <SelectField
                            label = "Project"
                        >
                            <option value="">Select a project classification for this task</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option> 
                        </SelectField>

                        <TextField
                            label="Task Title"
                            name="fname"
                            type="text"
                            placeholder="Give this task a name"
                            required={true}
                            {...register("text", { required: true })}
                        />

                        <ScrollTextArea
                            label = "Description"
                            placeholder = "A little detail please?"
                        />

                        <SelectField
                            label = "Status"
                        >
                            <option value="">Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option> 
                        </SelectField>

                        <SelectField
                            label = "Set as priority?"
                        >
                            <option value="">Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option> 
                        </SelectField>

                        <div className='flex mt-7'>
                            <Button buttonStyle="btn--grey--solid" onClick={handleClose}>Cancel</Button>
                            <span className='mr-3'></span>
                            <Button buttonSize="btn--medium" onClick={handleClose}>Save Task</Button>
                        </div>
                    </form>
                </NewCard>
            </Modal>
        </div>
    )
}

const RightCard = (props) => {
    return (
        <div className='mt-8'>
            <div class="flex flex-col mb-3 ">
                <div className="bg-klightgreen w-full py-3 px-3 rounded-lg ease-out duration-500 hover:scale-105">
                    {/* title */}
                    <h3 className='text-black font-semibold text-base'>Internal Operations Portal User Interface Design</h3>
                    {/* desc */}
                    <p className='text-black font-light text-xs mt-3 w-[80%]'>
                        Create user screens for the internal operations portal, 
                        to replace the current screen. 
                    </p>

                    {/* status bar */}
                    <div className='flex items-center justify-center w-fit rounded-full mt-4 h-[30px] px-6 bg-white ease-out duration-500 hover:scale-110 cursor-pointer'>
                       <p className='font-normal text-sm'>Completed</p> 
                    </div>
                </div>
            </div>

            <div class="flex flex-col  mb-3">
                <div className="bg-kpink w-full py-3 px-3 rounded-lg ease-out duration-500 hover:scale-105">
                    {/* title */}
                    <h3 className='text-black font-semibold text-base'>Internal Operations Portal User Interface Design</h3>
                    {/* desc */}
                    <p className='text-black font-light text-xs mt-3 w-[80%]'>
                        Create user screens for the internal operations portal, 
                        to replace the current screen. 
                    </p>

                    {/* timelinke */}
                    <div className='flex mt-3'>
                        <p className='text-black font-normal text-sm mr-3'>Last Updated: <span className='font-semibold'>3 Weeks ago</span></p>
                        <p className='text-black font-normal text-sm'>Deadline: <span className='font-semibold'>14-02-2022</span></p>
                    </div>
                    {/* status bar */}
                    <div className='flex items-center justify-center w-fit rounded-full mt-4 h-[30px] px-6 bg-white'>
                       <p className='font-normal text-sm '>Overdue</p> 
                    </div>
                </div>
            </div>

            <div class="flex flex-col">
                <div className="bg-klightyellow w-full py-3 px-3 rounded-lg ease-out duration-500 hover:scale-105">
                    {/* title */}
                    <h3 className='text-black font-semibold text-base'>Internal Operations Portal User Interface Design</h3>
                    {/* desc */}
                    <p className='text-black font-light text-xs mt-3 w-[80%]'>
                        Create user screens for the internal operations portal, 
                        to replace the current screen. 
                    </p>
                    {/* status bar */}
                    <div className='flex items-center justify-center w-fit rounded-full mt-4 h-[30px] px-6 bg-white'>
                       <p className='font-normal text-sm'>Active</p> 
                    </div>
                </div>
            </div>
        </div>
    )
}



const Dashboard = () => {
  return (
    <>
       <Grid container spacing={4}>
            <Grid item xs={7}>
                <LeftComponent/>
            </Grid>
            <Grid item xs={5}>
                <RightComponent/>
            </Grid>
        </Grid>    
    </>
  )
}

export default Dashboard
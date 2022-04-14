import {FiUser, FiSettings, FiLogOut} from "react-icons/fi"
import {MdDashboard, MdNotificationsOff} from "react-icons/md"
import {VscTasklist} from "react-icons/vsc"
import { FaGraduationCap} from "react-icons/fa"
import {MdAssignmentTurnedIn} from "react-icons/md"

export const user_menu =  [
    {
        icon : FiUser,
        content : "Profile"
    },
    {
        icon : FiSettings,
        content : "Settings"
    },
    {
       icon : FiLogOut,
        content: "Logout"
    } 
]

export const appoint = [
    {
        name  :"Dr Kingsley Orile"
    }
]

export const task = [
    {
        number: "32",
        status: "completed"
    },
    {
        number: "32",
        status: "In Progress"
    },
    {
        number: "32",
        status: "To-Do"
    }
]

export const timeline = [
    {
        
    }
]

const MENU_OPTIONS = [
    {
        name: "Home",
        icon: MdDashboard,
        url: "/",
    },
    {
        name: "Tasks",
        icon: VscTasklist,
        url: "#",
    },
    {
        name: "Leave Request",
        icon: MdNotificationsOff,
        url: "/leave/leave",
    },
    {
        name: "Training",
        icon: FaGraduationCap,
        url: "#",
    }
];

function makeMenuLevel(options, depth = 0){
  return options.map((option, idx) => ({
    ...option,
    id: depth === 0 ? idx.toString() : `${depth}.${idx}`,
    depth,
    subItems:
      option.subItems && option.subItems.length > 0
        ? makeMenuLevel(option.subItems, depth + 1)
        : undefined,
  }));
}

export const MENU_ITEMS = makeMenuLevel(MENU_OPTIONS);

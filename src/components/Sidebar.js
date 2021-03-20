import React from 'react';
import '../asset/css/sidebar.css'
import SidebarOption from './SidebarOption';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import { Container } from '@material-ui/core';

function Sidebar() {
    return (
        <Container className='sidebar'>
            <AssignmentTurnedInIcon className='sidebar-twitter-icon'/>
            <SidebarOption active Icon={HomeIcon}  text="Home" />            
            <SidebarOption text="New Task" Icon={ExploreIcon}/>                  
           {/*  
            <SidebarOption text="Complete Task" Icon={ListIcon}/>            
            <SidebarOption text="Profile" Icon={PersonOutlineIcon}/>            
            <SidebarOption text="More" Icon={MoreHorizIcon}/>            
 */}
        </Container>
    )
}

export default Sidebar

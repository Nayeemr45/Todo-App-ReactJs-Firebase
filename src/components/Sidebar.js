import React from 'react';
import '../asset/css/sidebar.css'
import SidebarOption from './SidebarOption';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import ListIcon from '@material-ui/icons/List';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Container } from '@material-ui/core';

function Sidebar() {
    return (
        <Container className='sidebar'>
            <AssignmentTurnedInIcon className='sidebar-twitter-icon'/>
            <SidebarOption active Icon={HomeIcon}  text="Home" />            
            <SidebarOption text="New Task" Icon={ExploreIcon}/>                  
            <SidebarOption text="Recent Task" Icon={ListIcon}/>            
            <SidebarOption text="Profile" Icon={PersonOutlineIcon}/>            
            <SidebarOption text="More" Icon={MoreHorizIcon}/>            

        </Container>
    )
}

export default Sidebar

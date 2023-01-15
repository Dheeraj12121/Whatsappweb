import React from 'react'
import './Sidebar.css'
import './App.css'
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import {Avatar,IconButton} from '@material-ui/core'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutLined from '@mui/icons-material/SearchOutlined'
import SidebarChat from './SidebarChat';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
            <Avatar src='https://i.scdn.co/image/10cbb1c8635cd2fa5e9349f2a73cbdb0c80ac205'/>
                <div className="siderbar__headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>

            
            {/* Search bar */}
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                        <SearchOutLined/>
                    <input type="text" placeholder='Search or Start new chat' />
                </div>
            </div>

            {/* Add New Chat */}
            <div className="sidebar__chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>
    )
}

export default Sidebar;

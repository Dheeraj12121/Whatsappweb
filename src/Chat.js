import React,{useState} from 'react'
import './Chat.css'
import './App.css'
import { Avatar, IconButton } from '@mui/material'
import SearchOutlined from '@mui/icons-material/SearchOutlined'
import MoreVert from '@mui/icons-material/MoreVert'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import axios from './Axios'

const Chat = ({messages}) => {

    const [input, setInput] = useState('')

    const sendMessage = async(e)=>{
        e.preventDefault();

        await axios.post("/messages/new",{
            message:input,
            name:"Raftaar",
            timestamp:"im a 42 timestop",
            received:false
        });

        setInput("");
    };

    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar/>

                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>last seen at..</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>
            
            {/* Chat body */}
            <div className="chat__body">
                {messages.map((message)=>(
                    <p className={`chat__message ${message.received && 'chat__reciver'}`}>
                <span className='chat__name'>{message.name}</span>

                {message.message}

                <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
                ))}

            </div>
            
            {/* Chat footer */}

            <div className="chat__footer">
                <InsertEmoticonIcon/>
                <form action="">
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder='Type a message' />
                    <button type='submit' onClick={sendMessage}>Send a message</button>
                    <MicIcon/>
                </form>
            </div>
        </div>
    )
}

export default Chat;

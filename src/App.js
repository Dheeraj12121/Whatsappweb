import React,{useEffect ,useState} from 'react'
import Chat from './Chat'
import Sidebar from './Sidebar'
import Pusher from 'pusher-js';
import axios from './Axios'
const App = () => {

    const [messages, setMessages] = useState([]);

    useEffect(()=>{
        axios.get('/messages/sync').then(response =>{
            setMessages(response.data);
        });
    },[]);

    useEffect(()=>{
        const pusher = new Pusher('cfe581540b24f913d0c3', {
            cluster: 'ap2'
          });
      
          const channel = pusher.subscribe('messages');
          channel.bind('inserted', (newMessage) => {
            alert(JSON.stringify(newMessage));
            setMessages([...messages,newMessage]);
          });

          return () =>{
              channel.unbind_all();  
              channel.unsubscribe();
            }
    },[messages]);

    console.log(messages);
    return (
        <div className='app'>
            <div className="app__body">
            <Sidebar/>
            <Chat messages={messages}/>
            </div>
        </div>
    )
}

export default App

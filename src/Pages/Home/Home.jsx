import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Message from '../../components/Message';


export default function Home () {
    

    const [user, setUser] = useState({})
    
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if(localStorage.getItem('user') === null){
            window.location.href = '/'
        } else {
            setUser(JSON.parse(localStorage.getItem('user')))
        }

    }, [])


    function handleSubmit(event) {
      event.preventDefault();
      const newMessage = event.target.elements.message.value;
      let createMessage = {
            message: newMessage,
            user: user.username,
            role: user.roles
      }
        axios.post('http://localhost:3001/api/message/create', {message: newMessage, user: user.id, role: user.roles}).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })

      setMessages([...messages, createMessage]);
      event.target.reset();
    }
  
    return (
          <>
          <div className='Principal'>
          <section className="container">
          <div className="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/VB0RkSf3kzU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
          <div className="chat">
      {messages.map((message, index) => (
        <Message key={index} content={message.message} name={message.user} role={message.role}/>
      ))}
      <form onSubmit={handleSubmit}>
        <input type="text" name="message" placeholder="Type a message" />
        <button type="submit">Send</button>
      </form>
    </div>
      </section>
      </div>
          </>
    )
  }
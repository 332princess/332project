// import React, { useEffect, useState } from 'react';
// import ScrollToBottom from 'react-scroll-to-bottom';
// import styled from 'styled-components';
// const ChatContainer = styled.div`
//   background-color: #b3ffd9; /* 원하는 배경 색상 */
// `;

// const ChatWindow = styled.div`
//   .chat-window {
//     width: 300px;
//     height: 420px;
//   }

//   .chat-window p {
//     margin: 0;
//   }
//   .chat-window .chat-header {
//     height: 45px;
//     border-radius: 6px;
//     background: #263238;
//     position: relative;
//     cursor: pointer;
//   }
//   .chat-window .chat-header p {
//     display: block;
//     padding: 0 1em 0 2em;
//     color: #fff;
//     font-weight: 700;
//     line-height: 45px;
//   }

//   .chat-window .chat-body {
//     height: calc(450px - (45px + 70px));
//     border: 1px solid #263238;
//     background: #fff;

//     position: relative;
//   }
//   .chat-window .chat-body .message-container {
//     width: 100%;
//     height: 100%;
//     overflow-y: scroll;
//     overflow-x: hidden;
//   }

//   .chat-window .chat-body .message-container::-webkit-scrollbar {
//     display: none;
//   }
//   .chat-window .chat-body .message {
//     height: auto;
//     padding: 10px;
//     display: flex;
//   }

//   .chat-window .chat-body .message .message-content {
//     width: auto;
//     height: auto;
//     min-height: 40px;
//     max-width: 120px;
//     background-color: #c7e3ff;
//     border-radius: 5px;
//     color: white;
//     display: flex;
//     align-items: center;
//     margin-right: 5px;
//     margin-left: 5px;
//     padding-right: 5px;
//     padding-left: 5px;
//     overflow-wrap: break-word;
//     word-break: break-word;
//   }
//   .chat-window .chat-body .message .message-meta {
//     display: flex;
//     font-size: 12px;
//   }

//   .chat-window .chat-footer {
//     height: 40px;
//     border: 1px solid #263238;
//     border-top: none;
//     display: flex;
//   }

//   .chat-window .chat-footer input {
//     height: 100%;
//     flex: 85%;
//     border: 0;
//     padding: 0 0.7em;
//     font-size: 1em;
//     border-right: 1px dotted #607d8b;

//     outline: none;
//     font-family: 'Open Sans', sans-serif;
//   }

//   .chat-window .chat-footer button {
//     border: 0;
//     display: grid;
//     place-items: center;
//     cursor: pointer;
//     flex: 15%;
//     height: 100%;
//     background: transparent;
//     outline: none;
//     font-size: 25px;
//     color: lightgray;
//   }

//   .chat-window .chat-footer button:hover {
//     color: #c7e3ff;
//   }
//   .hide {
//     opacity: 0 !important;
//   }
// `;
// const MessageCon = styled.div`
//   #you {
//     justify-content: flex-start;
//   }

//   #you .message-content {
//     justify-content: flex-start;
//   }

//   #you .message-meta {
//     justify-content: flex-start;
//     margin-left: 5px;
//   }

//   #other {
//     justify-content: flex-end;
//   }

//   #other .message-content {
//     justify-content: flex-end;
//     background-color: cornflowerblue;
//   }

//   #other .message-meta {
//     justify-content: flex-end;
//     margin-right: 5px;
//   }

//   .message-meta #author {
//     margin-left: 10px;
//     font-weight: bold;
//   }
// `;

// function Chat({ socket, username, room }) {
//   const [currentMessage, setCurrentMessage] = useState('');
//   const [messageList, setMessageList] = useState([]);

//   const sendMessage = async () => {
//     if (currentMessage !== '') {
//       const messageData = {
//         room: room,
//         author: username,
//         message: currentMessage,
//         time:
//           new Date(Date.now()).getHours() +
//           ':' +
//           new Date(Date.now()).getMinutes(),
//       };

//       await socket.emit('send_message', messageData);
//       setMessageList((list) => [...list, messageData]);
//       setCurrentMessage('');
//     }
//   };

//   useEffect(() => {
//     socket.on('receive_message', (data) => {
//       setMessageList((list) => [...list, data]);
//     });
//   }, [socket]);

//   return (
//     <ChatContainer>
//       <ChatWindow>
//         <div className="chat-window">
//           <div className="chat-header">
//             <p>Live Chat</p>
//           </div>
//           <div className="chat-body">
//             <ScrollToBottom className="message-container">
//               {messageList.map((messageContent, index) => {
//                 return (
//                   <MessageCon>
//                     <div
//                       key={index}
//                       className="message"
//                       id={username === messageContent.author ? 'you' : 'other'}
//                     >
//                       <div>
//                         <div className="message-content">
//                           <p>{messageContent.message}</p>
//                         </div>
//                         <div className="message-meta">
//                           <p id="time">{messageContent.time}</p>
//                           <p id="author">{messageContent.author}</p>
//                         </div>
//                       </div>
//                     </div>
//                   </MessageCon>
//                 );
//               })}
//             </ScrollToBottom>
//           </div>
//           <div className="chat-footer">
//             <input
//               type="text"
//               value={currentMessage}
//               placeholder="입력하세요"
//               onChange={(event) => {
//                 setCurrentMessage(event.target.value);
//               }}
//               onKeyPress={(event) => {
//                 event.key === 'Enter' && sendMessage();
//               }}
//             />
//             <button onClick={sendMessage}>&#9658;</button>
//           </div>
//         </div>
//       </ChatWindow>
//     </ChatContainer>
//   );
// }

// export default Chat;

import React, { useEffect, useState } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import styled from 'styled-components';
const ChatContainer = styled.div`
  background-color: #b3ffd9; /* 원하는 배경 색상 */
`;
const GoBackButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  border: none;
  background: transparent;
  font-size: 1.2rem;
  color: #fff;
  cursor: pointer;
`;
const ChatHeader = styled.div`
  height: 45px;
  border-radius: 6px;
  background: #263238;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #fff;
  font-weight: bold;
`;
const ChatWindow = styled.div`
  .chat-window {
    width: 300px;
    height: 420px;
  }

  .chat-window p {
    margin: 0;
  }
  .chat-window .chat-header {
    height: 45px;
    border-radius: 6px;
    background: #263238;
    position: relative;
    cursor: pointer;
  }
  .chat-window .chat-header p {
    display: block;
    padding: 0 1em 0 2em;
    color: #fff;
    font-weight: 700;
    line-height: 45px;
  }

  .chat-window .chat-body {
    height: calc(450px - (45px + 70px));
    border: 1px solid #263238;
    background: #fff;

    position: relative;
  }
  .chat-window .chat-body .message-container {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .chat-window .chat-body .message-container::-webkit-scrollbar {
    display: none;
  }
  .chat-window .chat-body .message {
    height: auto;
    padding: 10px;
    display: flex;
  }

  .chat-window .chat-body .message .message-content {
    width: auto;
    height: auto;
    min-height: 40px;
    max-width: 120px;
    background-color: #c7e3ff;
    border-radius: 5px;
    color: white;
    display: flex;
    align-items: center;
    margin-right: 5px;
    margin-left: 5px;
    padding-right: 5px;
    padding-left: 5px;
    overflow-wrap: break-word;
    word-break: break-word;
  }
  .chat-window .chat-body .message .message-meta {
    display: flex;
    font-size: 12px;
  }

  .chat-window .chat-footer {
    height: 40px;
    border: 1px solid #263238;
    border-top: none;
    display: flex;
  }

  .chat-window .chat-footer input {
    height: 100%;
    flex: 85%;
    border: 0;
    padding: 0 0.7em;
    font-size: 1em;
    border-right: 1px dotted #607d8b;

    outline: none;
    font-family: 'Open Sans', sans-serif;
  }

  .chat-window .chat-footer button {
    border: 0;
    display: grid;
    place-items: center;
    cursor: pointer;
    flex: 15%;
    height: 100%;
    background: transparent;
    outline: none;
    font-size: 25px;
    color: lightgray;
  }

  .chat-window .chat-footer button:hover {
    color: #c7e3ff;
  }
  .hide {
    opacity: 0 !important;
  }
`;
const MessageCon = styled.div`
  #you {
    justify-content: flex-start;
  }

  #you .message-content {
    justify-content: flex-start;
  }

  #you .message-meta {
    justify-content: flex-start;
    margin-left: 5px;
  }

  #other {
    justify-content: flex-end;
  }

  #other .message-content {
    justify-content: flex-end;
    background-color: cornflowerblue;
  }

  #other .message-meta {
    justify-content: flex-end;
    margin-right: 5px;
  }

  .message-meta #author {
    margin-left: 10px;
    font-weight: bold;
  }
`;

function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState('');
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== '') {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ':' +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit('send_message', messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage('');
    }
  };

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);
  const goBack = () => {
    window.location.href = '/chatmain';
    window.location.reload();
  };
  return (
    <ChatContainer>
      <ChatWindow>
        <div className="chat-window">
          <ChatHeader>
            <GoBackButton onClick={goBack}>&lt;</GoBackButton>
            {room}
          </ChatHeader>
          <div className="chat-body">
            <ScrollToBottom className="message-container">
              {messageList.map((messageContent, index) => {
                return (
                  <MessageCon>
                    <div
                      key={index}
                      className="message"
                      id={username === messageContent.author ? 'you' : 'other'}
                    >
                      <div>
                        <div className="message-content">
                          <p>{messageContent.message}</p>
                        </div>
                        <div className="message-meta">
                          <p id="time">{messageContent.time}</p>
                          <p id="author">{messageContent.author}</p>
                        </div>
                      </div>
                    </div>
                  </MessageCon>
                );
              })}
            </ScrollToBottom>
          </div>
          <div className="chat-footer">
            <input
              type="text"
              value={currentMessage}
              placeholder="입력하세요"
              onChange={(event) => {
                setCurrentMessage(event.target.value);
              }}
              onKeyPress={(event) => {
                event.key === 'Enter' && sendMessage();
              }}
            />
            <button onClick={sendMessage}>&#9658;</button>
          </div>
        </div>
      </ChatWindow>
    </ChatContainer>
  );
}

export default Chat;

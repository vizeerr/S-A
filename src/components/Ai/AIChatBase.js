"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Activity, CircleUser, Copy, Forward, SendHorizontal, Star } from 'lucide-react';
import getAiResponse from '@/lib/chatApi';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation'

const AIChatBase = ({chatID}) => {

    const [messages, setMessages] = useState([]);
    const[isLoading,setIsLoading] = useState(false);
    
    const [inputMessage, setInputMessage] = useState("");
    const chatContainerRef = useRef(null);
    const router = useRouter()

    const updateLocalChat = (newMsg) =>{
        const chats = JSON.parse(localStorage.getItem('LegalAiChat')) || [];
            const updatedChats = chats.map((chat) => {
                if (chat.id === chatID) {
                    return {
                        ...chat,
                        messages: [...chat.messages, newMsg],
                    };
                }
                return chat;
            });
            localStorage.setItem('LegalAiChat', JSON.stringify(updatedChats));
    }

    const replyAI = async(msgToReply) =>{
        const reply = await getAiResponse(msgToReply)
        if(reply){
            const aiMessage = {
                role: "model",
                type: reply,
            };
            setIsLoading(false) 
            setMessages((prevMessages) => [...prevMessages, aiMessage]);   
            updateLocalChat(aiMessage)   
        }

    }


    const sendMessage = () => {

        if (!inputMessage.trim()) return;
        const newMessage = {
            role: "user",
            type: inputMessage,
        };

        if (messages.length === 0 && !chatID) {
            const chatId = uuidv4();
            const chats = JSON.parse(localStorage.getItem('LegalAiChat')) || [];
            const newChat = {
                id:chatId,
                messages:[newMessage]
            }
            chats.push(newChat);
            localStorage.setItem('LegalAiChat',JSON.stringify(chats));
            router.push(`/ai/${chatId}`);
            return
        }
        
        
        setMessages((prevMessages) => [...prevMessages, newMessage]);        
        setInputMessage("");
        setIsLoading(true)
        updateLocalChat(newMessage);
        replyAI(inputMessage);
        
    };
    function refactorString(input) {
        const words = input.split(' ');
        let result = '';
        let boldMode = false; 
        words.forEach(word => {
            if (word.includes('*')) {
                if (word === '*') {
                    result += '\n';
                } 
                else if (word === '**') {
                    boldMode = !boldMode;
                } else {
                    if (boldMode) {
                        result += `<strong>${word.replace(/\*/g, '')}</strong> `;
                    } else {
                        result += `${word.replace(/\*/g, '')} `;
                    }
                }
            } else {
                result += `${word} `;
            }
        });
    
        return result.trim(); 
    }    

    useEffect(()=>{
        if(!chatID) return ;
        const chats = JSON.parse(localStorage.getItem('LegalAiChat'));
        const chat = chats.find((chat) => chat.id === chatID);
        if (chat) {
            const msg = chat.messages
            if(msg[msg.length-1].role== "user"){
                if(!isLoading){
                    setIsLoading(true);
                    replyAI(msg[msg.length-1].type);
                }
            }
            setMessages(chat.messages);
        }

        

    },[chatID])

    
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className='w-full justify-center flex flex-col gap-5'>
            {messages.length > 0 &&(
            <div
                ref={chatContainerRef}
                className="border-2 border-white overflow-y-auto bg-white h-[70vh] space-y-8 bg-opacity-50 p-4 rounded-3xl"
            >
                {messages.map((msg, i) => (
                    <div
                        key={i}
                        className={`flex flex-col gap-4 ${msg.role === "user" ? "ms-auto w-[30%]" : "w-[70%] "}`}
                        >
                        <div className='flex gap-1 items-center '>
                        {
                            msg.role == "model" &&(
                                
                                <Activity className='border-2 rounded-full py-1.5  h-7 w-8 text-neutral-600'/>
                            )
                        }
                        <p className={`whitespace-break-spaces bg-opacity-30 px-4 w-full py-2 border-2 border-white rounded-3xl ${msg.role === "user" ? " bg-neutral-300" : " bg-white"}`}dangerouslySetInnerHTML={{__html:refactorString(msg.type)}}></p>
                        {
                            msg.role == "user" &&(

                                <CircleUser className='h-5 w-5 text-neutral-600'/>
                            )
                        }
                        </div>
                        <div className={`flex gap-4 px-2 items-center ${msg.role == "model"? "mx-11":""} `}> 
                        <Forward className='h-4 w-4 text-neutral-600'/>
                        <Copy className='h-4 w-4 text-neutral-600'/>
                        <Star className='h-4 w-4 text-neutral-600' />
                        </div>
                    </div>
                    
                ))}
                {isLoading && (
                        <div className='w-[70%] flex flex-col gap-2'>
                            <span className='aiLoader rounded-md  h-5'/>
                            <span className='aiLoader w-2/3 rounded-md  h-5'/>
                            <span className='aiLoader w-1/3 rounded-md  h-5'/>
                        </div>
                )}
               
            </div>)
            
            }
            
            {/* Input a rea */}
            <div className='space-y-12'>
                {messages.length<=0&&(
                <>
                <div className='space-y-4'>
                    <p className='text-7xl text-center '>Hello There !</p>
                    <p className='text-2xl text-center'>How can I help you today ?</p>
                </div>
                    <div className='flex gap-5 justify-center'>
                        <div className='bg-white w-[230px] h-[120px] hover:bg-opacity-65 transition-all bg-opacity-50 p-3 rounded-xl border-2 border-white'>
                            <p onClick={()=>{setInputMessage("What is ipc section 169")}}>What is ipc section 169
                            What is ipc section 169
                            </p>
                        </div>
                        <div className='bg-white w-[230px] h-[120px] hover:bg-opacity-65 transition-all bg-opacity-50 p-3 rounded-lg border-2 border-white'>
                            <p>What is ipc section 169</p>
                        </div>
                        <div className='bg-white w-[230px] h-[120px] hover:bg-opacity-65 transition-all bg-opacity-50 p-3 rounded-lg border-2 border-white'>
                            <p>What is ipc section 169</p>
                        </div>
                        
                    </div>
                </>
                )}
                <div className='w-[60%] mx-auto rounded-full flex items-center gap-2'>
                    <Input
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder="Message Lawyer AI"
                        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                        className="bg-white outline-none active:outline-none hover:outline-none focus:outline-none bg-opacity-50 h-10 rounded-full border-2 border-white shadow-none"
                    />
                    <Button  onClick={sendMessage}  className="rounded-full">
                        <SendHorizontal />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AIChatBase;

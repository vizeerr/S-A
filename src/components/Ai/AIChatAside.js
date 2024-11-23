"use client";
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { EllipsisVertical, MessageSquare, Pencil, Pin, Plus, Trash2 } from 'lucide-react';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from 'next/link';

const AIChatAside = ({ chatID }) => {
  const [chats, setChats] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); 
    try {
      const savedChats = JSON.parse(localStorage.getItem('LegalAiChat')) || [];
      setChats(savedChats);
    } catch (error) {
      console.error("Failed to load chats:", error);
      setChats([]);
    }
  }, []);

  if (!isMounted) return null;


  return (
    <div className="border-2 border-white w-[350px] h-full bg-white bg-opacity-50 p-4 rounded-3xl">
      <Button 
        
        className="w-full mb-4 bg-black text-white border-black border-2 shadow-lg rounded-full"
        asChild
      ><Link href="/ai">
        <Plus className="mr-2 h-4 w-4" /> New Chat
      </Link>
      </Button>
      <ScrollArea>
        <div className="space-y-2">
          {chats.length > 0 ? (
            chats.map((chat, index) => (
              <Button
                key={index}
                className={`w-full justify-between text-black hover:bg-white hover:shadow-md hover:bg-opacity-90 bg-white bg-opacity-30 border-white rounded-full border-2 ${
                  chat.id === chatID ? ' bg-opacity-70' : ''
                }`}
                asChild
              >
                <Link href={`/ai/${chat.id}`}>
                  <div className='flex justify-start items-center'>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    {chat.messages.length > 0 ? chat.messages[0].type : 'Untitled Chat'}
                  </div>
               
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <EllipsisVertical className="text-neutral-500 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem className="text-neutral-600 flex items-center">
                      <Pencil className="text-neutral-600 h-4 w-4 me-2" /> Rename
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-neutral-600 flex items-center">
                      <Pin className="text-neutral-600 h-4 w-4 me-2" /> Pin
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem 
                      className="text-red-500 flex items-center"
                      onClick={() => {
                        const updatedChats = chats.filter((c) => c.id !== chat.id);
                        setChats(updatedChats);
                        localStorage.setItem('LegalAiChat', JSON.stringify(updatedChats));
                      }}
                    >
                      <Trash2 className="h-4 w-4 me-2" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                </Link>
              </Button>
            ))
          ) : (
            <p className="text-center text-gray-500">No chats available</p>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default AIChatAside;

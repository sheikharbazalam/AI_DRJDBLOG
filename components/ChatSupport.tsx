"use client";
import { ScrollArea } from "@/components/ui/scroll-area"

import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import { cn } from '@/lib/utils';
import { FaMinus } from "react-icons/fa";
import { PRESET_ANSWERS, PRESET_MESSAGE, PRESET_QUESTIONS } from '@/lib/constant';

export default function ChatSupport() {
    const [isOpen, setOpen] = useState(false);
    const[isDisplay, setDisplay] = useState(true);
  return (
    <div className='fixed bottom-14 right-5 z-20'>
   <motion.div
   layout
   animate={{borderRadius:isOpen ?10 : 50}}
   initial={{borderRadius:50}} className={cn('w-20 h-20 bg-zinc-700 shadow-2xl cursor-pointer flex items-center justify-center',{
    "w-96 h-[34rem] cursor-default " :isOpen,
   })}
   onClick={() =>{
    if(!isOpen) {
        setOpen(!isOpen);
        setDisplay(false)
    }
  
   }}

   onAnimationComplete={()=>{
    if(!isOpen) {
        setDisplay(true)
    }
    
   }}
   >
    {isDisplay &&<h1 className='text-5xl'>👩‍💻</h1>}
    {isOpen &&
    <ScrollArea className='w-full h-full relative'>
        <div className=' p-5 border-b flex  items-center justify-between absolute top-0 w-full right-0 bg-zinc-700'>
            <h1 className='text-2xl'>👩‍💻 Chat</h1>
            <FaMinus className='w-8 h-8  cursor-pointer' onClick={() =>{
                setOpen(false);
            }}/>
        </div>
        <div className='p-5 space-y-2 mt-20'>
            <Chat isOpen={isOpen}/>
            
        </div>
        <div id="bottomChat">

        </div>
    </ScrollArea>
}
    </motion.div>
    </div>
  )
}

const Bot = ({message, isOpen} :{message:string; isOpen:boolean}) =>{
    return ( <motion.div initial={{opacity:0}} animate={{opacity: isOpen ? 1 : 0,}}
    transition={{delay: 0.5}}>


        <div className='flex items-center gap-2'>
            <span className='bg-zinc-900 rounded-full'>
                <h1 className='text-2xl'>👩</h1>
                </span>
            <h1 className='text-gray-300'>DRJD NURJAHA</h1>
        </div>

        <h1>{message}</h1>
    </motion.div>
    );
};

const PresetQuestion  = ({message , onClick, isOpen} :{isOpen : boolean, message:string; onClick: () => void;}) =>{
    return (
        <motion.div 
        initial={{opacity:0}} animate={{opacity: isOpen ? 1 : 0,}}
    transition={{delay: 0.7}} className='cursor-pointer  hover:tracking-wider transition-all' onClick={onClick}>
            <h1 className='bg-zinc-900 inline-block p-3 rounded-md px-3 '>{message}</h1>
        </motion.div>
    )
}


const Chat = ({isOpen}:{isOpen:boolean}) =>{

    const [messages, setMessages] = useState(PRESET_MESSAGE);

    const [answered, setAnswers] = useState<string[]>([])
    useEffect(()=>{
        document.getElementById("bottomChat")?.scrollIntoView({behavior:'smooth'})
        
    },[messages.length]);

    const handlePresetQuestion = (index : number) =>{
        const question = messages[index];
        const updateAnswered = [...answered,question.answerId];
        //alert(question.answerId);




        setMessages((current) => [...current,{
            isBot: false,
            messsage:question.messsage,
            
            isPresetQuestion:false,
            answerId:"",
            isUser: true
    
        },
    {
        isBot: true,
        messsage:PRESET_ANSWERS[
            question.answerId as unknown as keyof
            typeof PRESET_ANSWERS
        ].messsage,
        
        isPresetQuestion:false,
        answerId:"",
        isUser: false
  
    },
...PRESET_QUESTIONS.filter((question)=>!updateAnswered.includes(question.answerId)),]);
setAnswers(updateAnswered); // it will help us to no repeat the same question which already adked to the bot.
        
    }

    return (
     <> 
  
    {messages.map((message: { isBot: any; messsage: string; isPresetQuestion: any; isUser: any; }, key: React.Key | null | undefined)=>{
        if(message.isBot){
            return <Bot isOpen = {isOpen} message={message.messsage} key={key} />;


        } else if(message.isPresetQuestion){
            return (<PresetQuestion message={message.messsage} key={key} onClick={() => handlePresetQuestion(key)} isOpen={isOpen}/>);
        }
         else if(message.isUser){
            return <User key={key} message={message.messsage} isOpen={isOpen} />;
        }
    })}



            </>
    )
}


const User = ({message,isOpen} :{isOpen:boolean, message:string}) =>{
    return ( <motion.div initial={{opacity:0}}  >


        <div className='flex  items-center justify-end gap-2'>
            <span className='bg-zinc-900 rounded-full'>
                <h1 className='text-2xl'>👩</h1>
                </span>
            <h1 className='text-gray-300'>you</h1>
        </div>

        <h1 className='text-right'>{message}</h1>
    </motion.div>
    );
};



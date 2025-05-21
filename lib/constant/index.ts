
export const protectedPaths = ['/dashboard', '/profile'];

export const PRESET_QUESTIONS = [
    {
        isBot:false,
        messsage:"Tell me how you feeling day",
        isPresetQuestion:true,
        answerId:"1",
        isUser:false,
    }
    ,
    {
        isBot: false,
        messsage: "What do you miss the most about drJdnurjaha?",
        isPresetQuestion: true,
        answerId: "2",
        isUser: false,
    },
    {
        isBot: false,
        messsage: "How does the distance between you and drJdnurjaha make you feel?",
        isPresetQuestion: true,
        answerId: "3",
        isUser: false,
    },
    
   
   

];

export const PRESET_MESSAGE = [
    {
        isBot: true,
        messsage:"Welcome my love gate is always open and one get which i left open for you for forever",
        isPresetQuestion:false,
        answerId:"",
        isUser: false,

    },
    ...PRESET_QUESTIONS,
]


export const PRESET_ANSWERS = {
    "1": {
        messsage: "DRJDNURJAHA love is unconditional but only one eye and it for only one place"
    },
    "2": {
        messsage: "I can't take a breath without thinking of you."
    },
    "3": {
        messsage: "I miss seeing you the most."
    },
    
   

}


import { useState } from "react";
import Header from "./components/header";
import Messages from "./components/messages";
import Reply from "./components/reply";

const Chat = () => {
    const user = {
        name: 'Muratcan Tüfekçi',
        avatar: 'https://pbs.twimg.com/profile_images/1441818048965578759/lfMj0K4l_400x400.jpg',
    }

    const [messages ,setMessages] = useState([
        {
            from: {
                id:'DvwOzmGTqUNbvXAAMSniO65QEpg1',
                name: 'Muratcan Tüfekçi',
                username: 'muratcantufekci',
                avatar: 'https://pbs.twimg.com/profile_images/1441818048965578759/lfMj0K4l_400x400.jpg',
            },
            message: 'test'
        },
        {
            from: {
                id:'DvwOzmGTqUNbvXAAMSniO65QEpg1',
                name: 'Muratcan Tüfekçi',
                username: 'muratcantufekci',
                avatar: 'https://pbs.twimg.com/profile_images/1441818048965578759/lfMj0K4l_400x400.jpg',
            },
            message: 'tesaısufaosdıufyausıofhasuıfhasıoufh saudgfaıos fdası fs s fspagf asıf saıf saftısduhaıs  s hfasoıdfgsıdfdsfhsasd'
        },
        {
            from: {
                id:'uJtjVqzooagT1g2Vt7POXfuJRmz1',
                name: 'Test User',
                username: 'testtest',
                avatar: 'https://pbs.twimg.com/profile_images/1441818048965578759/lfMj0K4l_400x400.jpg',
            },
            message: 'test'
        },
        {
            from: {
                id:'DvwOzmGTqUNbvXAAMSniO65QEpg1',
                name: 'Muratcan Tüfekçi',
                username: 'muratcantufekci',
                avatar: 'https://pbs.twimg.com/profile_images/1441818048965578759/lfMj0K4l_400x400.jpg',
            },
            message: 'tesaısufaosdıufyausıofhasuıfhasıoufh saudgfaıos fdası fs s fspagf asıf saıf saftısduhaıs  s hfasoıdfgsıdfdsfhsasd'
        },
        {
            from: {
                id:'uJtjVqzooagT1g2Vt7POXfuJRmz1',
                name: 'Test User',
                username: 'testtest',
                avatar: 'https://pbs.twimg.com/profile_images/1441818048965578759/lfMj0K4l_400x400.jpg',
            },
            message: 'test'
        },{
            from: {
                id:'DvwOzmGTqUNbvXAAMSniO65QEpg1',
                name: 'Muratcan Tüfekçi',
                username: 'muratcantufekci',
                avatar: 'https://pbs.twimg.com/profile_images/1441818048965578759/lfMj0K4l_400x400.jpg',
            },
            message: 'tesaısufaosdıufyausıofhasuıfhasıoufh saudgfaıos fdası fs s fspagf asıf saıf saftısduhaıs  s hfasoıdfgsıdfdsfhsasd'
        },
        {
            from: {
                id:'uJtjVqzooagT1g2Vt7POXfuJRmz1',
                name: 'Test User',
                username: 'testtest',
                avatar: 'https://pbs.twimg.com/profile_images/1441818048965578759/lfMj0K4l_400x400.jpg',
            },
            message: 'test'
        },{
            from: {
                id:'DvwOzmGTqUNbvXAAMSniO65QEpg1',
                name: 'Muratcan Tüfekçi',
                username: 'muratcantufekci',
                avatar: 'https://pbs.twimg.com/profile_images/1441818048965578759/lfMj0K4l_400x400.jpg',
            },
            message: 'tesaısufaosdıufyausıofhasuıfhasıoufh saudgfaıos fdası fs s fspagf asıf saıf saftısduhaıs  s hfasoıdfgsıdfdsfhsasd'
        },
        {
            from: {
                id:'uJtjVqzooagT1g2Vt7POXfuJRmz1',
                name: 'Test User',
                username: 'testtest',
                avatar: 'https://pbs.twimg.com/profile_images/1441818048965578759/lfMj0K4l_400x400.jpg',
            },
            message: 'test'
        },{
            from: {
                id:'DvwOzmGTqUNbvXAAMSniO65QEpg1',
                name: 'Muratcan Tüfekçi',
                username: 'muratcantufekci',
                avatar: 'https://pbs.twimg.com/profile_images/1441818048965578759/lfMj0K4l_400x400.jpg',
            },
            message: 'tesaısufaosdıufyausıofhasuıfhasıoufh saudgfaıos fdası fs s fspagf asıf saıf saftısduhaıs  s hfasoıdfgsıdfdsfhsasd'
        },
        {
            from: {
                id:'uJtjVqzooagT1g2Vt7POXfuJRmz1',
                name: 'Test User',
                username: 'testtest',
                avatar: 'https://pbs.twimg.com/profile_images/1441818048965578759/lfMj0K4l_400x400.jpg',
            },
            message: 'test'
        }
    ])

    return (
        <div className="flex-1">
            <Header user={user}/>
                <Messages messages={messages} />
            <Reply setMessages={setMessages}/>
        </div>
    )
}
export default Chat;
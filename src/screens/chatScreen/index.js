import { useEffect, useRef, useState } from 'react'
import Chat from './Chat'
import ChatInput from './ChatInput'
import { getUserData } from '../../utils/functions'
import NoChat from './NoChat'

function ChatScreen() {
    const [chatData, setChatData] = useState([])
    const id = useRef(0)

    const onClickSend = (message) => {
        if (message === '') return
        const date = new Date()
        id.current = id.current + 1
        const newMessage = {
            id: id.current,
            content: message,
            type: 'text',
            senderID: getUserData()?.id,
            senderName: getUserData()?.name,
            timeStamp: date,
        }
        const currentChatData = [...chatData, newMessage]
        setChatData(currentChatData)
    }

    const onClickDelete = (index) => {
        const currentChatData = [...chatData]
        currentChatData.splice(chatData?.length - 1 - index, 1)
        setChatData(currentChatData)
    }

    return (
        <main className="flex flex-col h-full max-w-[1000px] w-screen bg-gray-900">
            {chatData?.length ? (
                <Chat
                    chatData={chatData.slice().reverse()}
                    onClickDelete={onClickDelete}
                />
            ) : (
                <NoChat />
            )}
            <ChatInput onClickSend={onClickSend} />
        </main>
    )
}

export default ChatScreen

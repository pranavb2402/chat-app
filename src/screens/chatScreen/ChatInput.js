import { useState } from 'react'

function ChatInput({ onClickSend }) {
    const [message, setMessage] = useState('')
    function onChange(e) {
        setMessage(e?.target?.value)
    }

    function handleSend() {
        onClickSend(message)
        setMessage('')
    }

    return (
        <div className="flex flex-row justify-center items-center mt-2 border border-gray-400 p-2">
            <textarea
                className="p-2 flex-1 flex rounded resize-none border-2 focus:outline-yellow-400"
                value={message}
                placeholder="Enter your chat"
                onChange={onChange}
                onKeyDown={(e) => {
                    if (e?.code === 'Enter' && !e?.shiftKey) {
                        handleSend()
                        e.preventDefault()
                        return
                    }
                }}
            />
            <div
                onClick={handleSend}
                className="px-4 rounded py-1 bg-yellow-400 justify-center text-center ml-2"
            >
                Send
            </div>
        </div>
    )
}

export default ChatInput

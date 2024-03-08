function Chat({ chatData, onClickDelete }) {
    const showUserIcon = (index) => {
        if (index === chatData?.length - 1) return true
        if (chatData[index]?.senderID === chatData[index + 1]?.senderID)
            return false
        else return true
    }
    return (
        <div className="flex flex-1 flex-col-reverse bg-gray-900 overflow-y-auto">
            {chatData?.map((chat, index) => (
                <div className="flex m-2 justify-end" key={chat?.id}>
                    <div
                        className={`w-6 h-6 bg-yellow-500 rounded-full justify-center text-center ${!showUserIcon(index) && 'opacity-0'}`}
                    >
                        P
                    </div>
                    <div className="flex flex-1 text-white py-3 bg-gray-700 px-2 rounded mx-2 flex-col">
                        {showUserIcon(index) && (
                            <p className="text-md font-semibold">
                                {chat?.senderName}
                            </p>
                        )}
                        <p className="text-sm">{chat?.content}</p>
                        <div className="flex justify-end mt-1">
                            <p className="text-xs">
                                {chat?.timeStamp
                                    ?.toTimeString()
                                    .split(' ')[0]
                                    .slice(0, 5)}
                            </p>
                            <p
                                className="text-xs ml-1 text-red-600 cursor-pointer"
                                onClick={() => onClickDelete(index)}
                            >
                                Delete
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Chat

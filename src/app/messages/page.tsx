export default function MessagesPage() {
  const conversations = [
    {
      id: 1,
      name: "Rahim",
      lastMessage: "Yes, the room is still available.",
      time: "10:42 AM",
      unread: 2,
    },
    {
      id: 2,
      name: "Anna",
      lastMessage: "I can bring the mattress tomorrow.",
      time: "Yesterday",
      unread: 0,
    },
    {
      id: 3,
      name: "Karim",
      lastMessage: "Let's meet at the park at 5pm.",
      time: "Yesterday",
      unread: 1,
    },
    {
      id: 4,
      name: "Sofia",
      lastMessage: "Thanks for the gym recommendation!",
      time: "Mon",
      unread: 0,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-teal-600 text-white py-8">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Messages</h1>
          <p className="mt-1 text-teal-100">Your conversations</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          {conversations.map((chat, index) => (
            <div
              key={chat.id}
              className={`flex items-center gap-4 p-4 hover:bg-gray-50 cursor-pointer transition ${
                index !== conversations.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              {/* Avatar */}
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold text-lg">
                {chat.name.charAt(0)}
              </div>

              {/* Message Info */}
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-800">{chat.name}</h3>
                  <span className="text-xs text-gray-500">{chat.time}</span>
                </div>
                <p className="text-sm text-gray-600 truncate mt-0.5">
                  {chat.lastMessage}
                </p>
              </div>

              {/* Unread Badge */}
              {chat.unread > 0 && (
                <div className="bg-teal-600 text-white text-xs font-medium w-5 h-5 rounded-full flex items-center justify-center">
                  {chat.unread}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
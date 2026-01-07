import ChatAppSidebar from "./ChatAppSidebar";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessages, { messages } from "./ChatMessages";

const selectedConversation = messages[0];
export default function ChatAppContent() {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-80 border-r border-border flex flex-col bg-card">
        <ChatAppSidebar />
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <ChatHeader selectedConversation={selectedConversation} />
        {/* Messages */}
        <ChatMessages selectedConversation={selectedConversation} />

        {/* Input */}
        <ChatInput />
      </div>
    </div>
  );
}

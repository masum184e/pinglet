import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "../ui/scroll-area";
import { SelectedConversationProps } from "./ChatHeader";

export const messages = [
  {
    id: "1",
    sender: "Sarah Johnson",
    senderAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    content: "Hey! How are you doing?",
    timestamp: new Date(Date.now() - 10 * 60000),
    isOwn: false,
    status: "read",
  },
  {
    id: "2",
    sender: "You",
    senderAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=You",
    content: "I'm doing great! Just finished the project review.",
    timestamp: new Date(Date.now() - 8 * 60000),
    isOwn: true,
    status: "read",
  },
  {
    id: "3",
    sender: "Sarah Johnson",
    senderAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    content: "That sounds amazing! Can we sync up tomorrow?",
    timestamp: new Date(Date.now() - 5 * 60000),
    isOwn: false,
    status: "read",
  },
  {
    id: "4",
    sender: "You",
    senderAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=You",
    content: "How about 2 PM?",
    timestamp: new Date(Date.now() - 3 * 60000),
    isOwn: true,
    status: "read",
  },
  {
    id: "5",
    sender: "Sarah Johnson",
    senderAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    content: "Looking forward to the meeting tomorrow",
    timestamp: new Date(Date.now() - 1 * 60000),
    isOwn: false,
    status: "delivered",
  },
];

const typingUsers = [];
const ChatMessages = ({
  selectedConversation,
}: {
  selectedConversation: SelectedConversationProps;
}) => {
  return (
    <ScrollArea className="flex-1 p-4">
      <div className="space-y-4 max-w-7xl">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.isOwn ? "justify-end" : ""}`}
          >
            {!message.isOwn && (
              <Avatar className="h-8 w-8 flex-shrink-0">
                <AvatarImage
                  src={message.senderAvatar || "/placeholder.svg"}
                  alt={message.sender}
                />
                <AvatarFallback>{message.sender[0]}</AvatarFallback>
              </Avatar>
            )}

            <div
              className={`flex flex-col gap-1 max-w-xs ${
                message.isOwn ? "items-end" : ""
              }`}
            >
              {!message.isOwn && (
                <p className="text-xs font-semibold text-muted-foreground">
                  {message.sender}
                </p>
              )}
              <div
                className={`rounded-lg px-4 py-2 ${
                  message.isOwn
                    ? "bg-primary text-primary-foreground rounded-br-none"
                    : "bg-secondary text-secondary-foreground rounded-bl-none"
                }`}
              >
                <p className="text-sm break-words">{message.content}</p>
              </div>
              <p className="text-xs text-muted-foreground">
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        ))}

        {typingUsers.length > 0 && (
          <div className="flex gap-3">
            <Avatar className="h-8 w-8 flex-shrink-0">
              <AvatarImage
                src={selectedConversation.senderAvatar || "/placeholder.svg"}
                alt={selectedConversation.sender}
              />
              <AvatarFallback>{selectedConversation.sender[0]}</AvatarFallback>
            </Avatar>
            <div className="bg-secondary text-secondary-foreground rounded-lg rounded-bl-none px-4 py-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-current animate-bounce" />
                <div
                  className="w-2 h-2 rounded-full bg-current animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                />
                <div
                  className="w-2 h-2 rounded-full bg-current animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                />
              </div>
            </div>
          </div>
        )}
        {/* <div ref={scrollRef} /> */}
      </div>
    </ScrollArea>
  );
};

export default ChatMessages;

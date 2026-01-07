import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { formatDateTime } from "@/lib/utils";
import Link from "next/link";
import AuthenticatedUser from "./AuthenticatedUser";
import { messages } from "./ChatMessages";

const filteredConversations = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    lastMessage: "Looking forward to the meeting tomorrow",
    timestamp: new Date(Date.now() - 5 * 60000),
    unread: 2,
    isGroup: false,
  },
  {
    id: "2",
    name: "Design Team",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Design",
    lastMessage: "The new mockups look great!",
    timestamp: new Date(Date.now() - 30 * 60000),
    unread: 0,
    isGroup: true,
    members: 5,
  },
  {
    id: "3",
    name: "Mike Chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    lastMessage: "Thanks for the feedback",
    timestamp: new Date(Date.now() - 2 * 60 * 60000),
    unread: 0,
    isGroup: false,
  },
  {
    id: "4",
    name: "Product Updates",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Product",
    lastMessage: "New features released!",
    timestamp: new Date(Date.now() - 5 * 60 * 60000),
    unread: 5,
    isGroup: true,
    members: 12,
  },
];

const ChatAppSidebar = () => {
  return (
    <>
      {/* Header */}
      <div className="p-4 border-b border-border">
        <Link href="/" className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-foreground">
            Pinglet Messages
          </h1>
          {/* <Button size="icon" variant="ghost" className="rounded-full">
            <Plus className="w-5 h-5" />
          </Button> */}
        </Link>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search conversations..."
            // value={searchQuery}
            // onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 rounded-full bg-input border-input"
          />
        </div>
      </div>

      {/* Conversations List */}
      <ScrollArea className="flex-1">
        <div className="space-y-1 p-2">
          {filteredConversations.map((conversation) => (
            <button
              key={conversation.id}
              //   onClick={() => setSelectedConversation(conversation)}
              className={`
                w-full p-3 rounded-lg transition-colors flex items-start gap-3 
                // \${
                //   selectedConversation.id === conversation.id
                //     ? "bg-primary text-primary-foreground"
                //     : "hover:bg-secondary text-foreground"
                // }
                `}
            >
              <Avatar className="h-12 w-12 flex-shrink-0">
                <AvatarImage
                  src={conversation.avatar || "/placeholder.svg"}
                  alt={conversation.name}
                />
                <AvatarFallback>{conversation.name[0]}</AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0 text-left">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-sm truncate">
                    {conversation.name}
                  </p>
                  {conversation.unread > 0 && (
                    <span className="bg-destructive text-destructive-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center ml-2">
                      {conversation.unread}
                    </span>
                  )}
                </div>
                <p className="text-xs opacity-70 truncate mt-1">
                  {conversation.lastMessage}
                </p>
                <p className="text-xs opacity-60 mt-1">
                  {formatDateTime(conversation.timestamp)}
                </p>
              </div>
            </button>
          ))}
        </div>
      </ScrollArea>
      <AuthenticatedUser selectedConversation={messages[0]} />
    </>
  );
};

export default ChatAppSidebar;

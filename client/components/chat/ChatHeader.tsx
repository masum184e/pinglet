import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Phone, Video, MoreVertical } from "lucide-react";

export interface SelectedConversationProps {
  id: string;
  sender: string;
  senderAvatar: string;
  content: string;
  timestamp: Date;
  isOwn: boolean;
  status: string;
}
const ChatHeader = ({
  selectedConversation,
}: {
  selectedConversation: SelectedConversationProps;
}) => {
  return (
    <div className="border-b border-border p-4 flex items-center justify-between bg-card">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage
            src={selectedConversation.senderAvatar || "/placeholder.svg"}
            alt={selectedConversation.sender}
          />
          {/* <AvatarImage
            src={selectedConversation.avatar || "/placeholder.svg"}
            alt={selectedConversation.name}
          /> */}
          <AvatarFallback>{selectedConversation.sender[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="font-semibold text-foreground">
            {selectedConversation.sender}
          </h2>
          {/* {selectedConversation.isGroup && selectedConversation.members && (
            <p className="text-xs text-muted-foreground">
              {selectedConversation.members} members
            </p>
          )} */}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button size="icon" variant="ghost" className="rounded-full">
          <Phone className="w-5 h-5" />
        </Button>
        <Button size="icon" variant="ghost" className="rounded-full">
          <Video className="w-5 h-5" />
        </Button>
        <Button size="icon" variant="ghost" className="rounded-full">
          <MoreVertical className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default ChatHeader;

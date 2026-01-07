import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { SelectedConversationProps } from "./ChatHeader";
import { formatDateTime } from "@/lib/utils";

const AuthenticatedUser = ({
  selectedConversation,
}: {
  selectedConversation: SelectedConversationProps;
}) => {
  return (
    <div
      className="
                w-full p-3 rounded-lg transition-colors flex items-start gap-3 
    "
    >
      <Avatar className="h-12 w-12 flex-shrink-0">
        <AvatarImage
          src={selectedConversation.senderAvatar || "/placeholder.svg"}
          alt={selectedConversation.sender}
        />
        <AvatarFallback>{selectedConversation.sender[0]}</AvatarFallback>
      </Avatar>

      <div className="flex-1 min-w-0 text-left">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-sm truncate">
            {selectedConversation.sender}
          </p>
          {selectedConversation.status && (
            //   {selectedConversation.status > 0 && (
            <span className="bg-destructive text-destructive-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center ml-2">
              {/* {selectedConversation.unread} */}
              {selectedConversation.status}
            </span>
          )}
        </div>
        {/* <p className="text-xs opacity-70 truncate mt-1">
          {selectedConversation.timestamp}
        </p> */}
        <p className="text-xs opacity-60 mt-1">
          {formatDateTime(selectedConversation.timestamp)}
        </p>
      </div>
    </div>
  );
};

export default AuthenticatedUser;

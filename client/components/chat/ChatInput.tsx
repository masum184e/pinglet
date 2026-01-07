"use client";

import { Button } from "../ui/button";
import { Plus, Send, Smile } from "lucide-react";
import { Input } from "../ui/input";

const ChatInput = () => {
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="border-t border-border p-4 bg-card">
      <form onSubmit={handleSendMessage} className="flex gap-3 items-end">
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full flex-shrink-0"
        >
          <Plus className="w-5 h-5" />
        </Button>

        <Input
          placeholder="Type a message..."
          //   value={inputValue}
          //   onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 rounded-full bg-input border-input resize-none"
        />

        <Button
          size="icon"
          variant="ghost"
          className="rounded-full flex-shrink-0"
        >
          <Smile className="w-5 h-5" />
        </Button>

        <Button
          size="icon"
          className="rounded-full flex-shrink-0 bg-primary hover:bg-primary/90 text-primary-foreground"
          type="submit"
          //   disabled={!inputValue.trim()}
        >
          <Send className="w-5 h-5" />
        </Button>
      </form>
    </div>
  );
};

export default ChatInput;

"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Search,
  Send,
  Paperclip,
  Smile,
  MoreVertical,
  Phone,
  Video,
  Info,
  Check,
  CheckCheck,
  MessageCircle,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface Message {
  id: string
  senderId: string
  receiverId: string
  content: string
  timestamp: string
  isRead: boolean
  type: "text" | "image" | "file"
}

interface Chat {
  id: string
  userId: string
  userName: string
  userImage: string
  lastMessage: string
  lastMessageTime: string
  unreadCount: number
  isOnline: boolean
  isTyping: boolean
}

export default function MessagesPage() {
  const [chats, setChats] = useState<Chat[]>([])
  const [messages, setMessages] = useState<Message[]>([])
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null)
  const [newMessage, setNewMessage] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simulate API call for chats
    setTimeout(() => {
      const mockChats: Chat[] = [
        {
          id: "1",
          userId: "101",
          userName: "Priya Sharma",
          userImage: "/placeholder.svg?height=40&width=40",
          lastMessage: "Hi! I saw your profile and would love to connect.",
          lastMessageTime: "2 min ago",
          unreadCount: 2,
          isOnline: true,
          isTyping: false,
        },
        {
          id: "2",
          userId: "102",
          userName: "Rahul Gupta",
          userImage: "/placeholder.svg?height=40&width=40",
          lastMessage: "Thank you for your interest. Let's chat!",
          lastMessageTime: "1 hour ago",
          unreadCount: 0,
          isOnline: false,
          isTyping: false,
        },
        {
          id: "3",
          userId: "103",
          userName: "Anita Patel",
          userImage: "/placeholder.svg?height=40&width=40",
          lastMessage: "Would love to know more about you.",
          lastMessageTime: "3 hours ago",
          unreadCount: 1,
          isOnline: true,
          isTyping: true,
        },
      ]
      setChats(mockChats)
      setSelectedChat(mockChats[0])
      setLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    if (selectedChat) {
      // Simulate API call for messages
      const mockMessages: Message[] = [
        {
          id: "1",
          senderId: selectedChat.userId,
          receiverId: "current-user",
          content: "Hi! I saw your profile and would love to connect.",
          timestamp: "2024-01-15T10:30:00Z",
          isRead: true,
          type: "text",
        },
        {
          id: "2",
          senderId: "current-user",
          receiverId: selectedChat.userId,
          content: "Hello! Thank you for reaching out. I'd be happy to chat.",
          timestamp: "2024-01-15T10:32:00Z",
          isRead: true,
          type: "text",
        },
        {
          id: "3",
          senderId: selectedChat.userId,
          receiverId: "current-user",
          content: "That's great! Tell me more about your interests.",
          timestamp: "2024-01-15T10:35:00Z",
          isRead: false,
          type: "text",
        },
      ]
      setMessages(mockMessages)
    }
  }, [selectedChat])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedChat) {
      const message: Message = {
        id: Date.now().toString(),
        senderId: "current-user",
        receiverId: selectedChat.userId,
        content: newMessage,
        timestamp: new Date().toISOString(),
        isRead: false,
        type: "text",
      }
      setMessages((prev) => [...prev, message])
      setNewMessage("")

      // Update last message in chat
      setChats((prev) =>
        prev.map((chat) =>
          chat.id === selectedChat.id
            ? { ...chat, lastMessage: newMessage, lastMessageTime: "now", unreadCount: 0 }
            : chat,
        ),
      )
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  const filteredChats = chats.filter((chat) => chat.userName.toLowerCase().includes(searchQuery.toLowerCase()))

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-6"></div>
            <div className="grid lg:grid-cols-3 gap-6 h-96">
              <div className="bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="lg:col-span-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Messages</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Connect with your matches and start meaningful conversations
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
          {/* Chat List */}
          <Card className="flex flex-col">
            <CardHeader className="pb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search conversations..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </CardHeader>
            <CardContent className="flex-1 p-0">
              <ScrollArea className="h-full">
                <div className="space-y-1 p-4">
                  {filteredChats.map((chat) => (
                    <div
                      key={chat.id}
                      className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                        selectedChat?.id === chat.id
                          ? "bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800"
                          : "hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                      onClick={() => setSelectedChat(chat)}
                    >
                      <div className="relative">
                        <img
                          src={chat.userImage || "/placeholder.svg"}
                          alt={chat.userName}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        {chat.isOnline && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-medium text-gray-900 dark:text-white truncate">{chat.userName}</h3>
                          <span className="text-xs text-gray-500">{chat.lastMessageTime}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                            {chat.isTyping ? <span className="text-rose-500 italic">typing...</span> : chat.lastMessage}
                          </p>
                          {chat.unreadCount > 0 && (
                            <Badge className="bg-rose-500 text-white text-xs min-w-[20px] h-5 flex items-center justify-center">
                              {chat.unreadCount}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Chat Window */}
          <Card className="lg:col-span-2 flex flex-col">
            {selectedChat ? (
              <>
                {/* Chat Header */}
                <CardHeader className="border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <img
                          src={selectedChat.userImage || "/placeholder.svg"}
                          alt={selectedChat.userName}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        {selectedChat.isOnline && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">{selectedChat.userName}</h3>
                        <p className="text-sm text-gray-500">
                          {selectedChat.isOnline ? "Online" : "Last seen 2 hours ago"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="icon" className="bg-transparent">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="bg-transparent">
                        <Video className="h-4 w-4" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="icon" className="bg-transparent">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Info className="mr-2 h-4 w-4" />
                            View Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem>Block User</DropdownMenuItem>
                          <DropdownMenuItem>Report User</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardHeader>

                {/* Messages */}
                <CardContent className="flex-1 p-0">
                  <ScrollArea className="h-full">
                    <div className="p-4 space-y-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.senderId === "current-user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                              message.senderId === "current-user"
                                ? "bg-rose-500 text-white"
                                : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                            }`}
                          >
                            <p className="text-sm">{message.content}</p>
                            <div
                              className={`flex items-center justify-end mt-1 space-x-1 ${
                                message.senderId === "current-user" ? "text-rose-100" : "text-gray-500"
                              }`}
                            >
                              <span className="text-xs">{formatTime(message.timestamp)}</span>
                              {message.senderId === "current-user" && (
                                <div className="text-xs">
                                  {message.isRead ? <CheckCheck className="h-3 w-3" /> : <Check className="h-3 w-3" />}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                      <div ref={messagesEndRef} />
                    </div>
                  </ScrollArea>
                </CardContent>

                {/* Message Input */}
                <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="icon" className="bg-transparent">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    <div className="flex-1 relative">
                      <Input
                        placeholder="Type a message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="pr-10"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-1 top-1/2 transform -translate-y-1/2"
                      >
                        <Smile className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Select a conversation</h3>
                  <p className="text-gray-500">Choose a chat from the sidebar to start messaging</p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}

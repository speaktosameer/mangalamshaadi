"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu, X, Heart, User, MessageCircle, Settings, LogOut, Moon, Sun } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useAuth } from "@/contexts/auth-context"
import { useTheme } from "next-themes"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const { user, logout } = useAuth()
  const { theme, setTheme } = useTheme()
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 p-5">
            <div className="relative">
              <Heart className="h-8 w-8 text-rose-500" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 dark:text-white">Mangalam Shaadi</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 -mt-1">Perfect Matches</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/search"
              className="text-gray-700 dark:text-gray-300 hover:text-rose-500 transition-colors font-medium"
            >
              Profiles
            </Link>
            <Link
              href="/matches"
              className="text-gray-700 dark:text-gray-300 hover:text-rose-500 transition-colors font-medium"
            >
              My Matches
            </Link>
            <Link
              href="/success-stories"
              className="text-gray-700 dark:text-gray-300 hover:text-rose-500 transition-colors font-medium"
            >
              Success Stories
            </Link>
            <Link
              href="/help"
              className="text-gray-700 dark:text-gray-300 hover:text-rose-500 transition-colors font-medium"
            >
              Help
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search by ID, Name, or Location"
                className="pl-10 pr-4 h-10 border-gray-300 dark:border-gray-600 focus:border-rose-500 dark:focus:border-rose-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hidden sm:flex"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2 px-3">
                    <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">{user.name.charAt(0)}</span>
                    </div>
                    <span className="hidden md:inline font-medium">{user.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link href="/profile">
                      <User className="mr-2 h-4 w-4" />
                      My Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/messages">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Messages
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-3">
                <Button variant="outline" asChild className="hidden sm:flex bg-transparent">
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild className="bg-rose-500 hover:bg-rose-600">
                  <Link href="/register">Register Free</Link>
                </Button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search profiles..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>

              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-3">
                <Link href="/search" className="text-gray-700 dark:text-gray-300 font-medium py-2">
                  Browse Profiles
                </Link>
                <Link href="/matches" className="text-gray-700 dark:text-gray-300 font-medium py-2">
                  My Matches
                </Link>
                <Link href="/success-stories" className="text-gray-700 dark:text-gray-300 font-medium py-2">
                  Success Stories
                </Link>
                <Link href="/help" className="text-gray-700 dark:text-gray-300 font-medium py-2">
                  Help
                </Link>
                {!user && (
                  <Link href="/login" className="text-gray-700 dark:text-gray-300 font-medium py-2 sm:hidden">
                    Login
                  </Link>
                )}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

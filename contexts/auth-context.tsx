"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  id: string
  name: string
  email: string
  phone?: string
  profileImage?: string
  isVerified: boolean
  membershipType: "free" | "premium" | "elite"
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  register: (userData: any) => Promise<boolean>
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing session
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("auth_token")
        if (token) {
          // Simulate API call to verify token
          // In real app, this would be an actual API call
          setTimeout(() => {
            setUser({
              id: "1",
              name: "John Doe",
              email: "john@example.com",
              isVerified: true,
              membershipType: "premium",
            })
            setIsLoading(false)
          }, 1000)
        } else {
          setIsLoading(false)
        }
      } catch (error) {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock successful login
      const mockUser: User = {
        id: "1",
        name: "John Doe",
        email: email,
        isVerified: true,
        membershipType: "premium",
      }

      setUser(mockUser)
      localStorage.setItem("auth_token", "mock_token_123")
      return true
    } catch (error) {
      return false
    }
  }

  const register = async (userData: any): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock successful registration
      const newUser: User = {
        id: Date.now().toString(),
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        isVerified: false,
        membershipType: "free",
      }

      setUser(newUser)
      localStorage.setItem("auth_token", "mock_token_123")
      return true
    } catch (error) {
      return false
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("auth_token")
  }

  return <AuthContext.Provider value={{ user, login, logout, register, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

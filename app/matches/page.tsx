"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, MessageCircle, Eye, Star, MapPin, Briefcase, GraduationCap, Clock, CheckCircle, X } from "lucide-react"
import { useRouter } from "next/navigation"

interface Match {
  id: string
  name: string
  age: number
  height: string
  location: string
  profession: string
  education: string
  image: string
  matchPercentage: number
  isVerified: boolean
  isPremium: boolean
  isOnline: boolean
  lastSeen: string
  mutualInterest: boolean
}

interface Interest {
  id: string
  name: string
  age: number
  location: string
  profession: string
  image: string
  sentDate: string
  status: "sent" | "received" | "accepted" | "declined"
  isVerified: boolean
}

export default function MatchesPage() {
  const router = useRouter()
  const [matches, setMatches] = useState<Match[]>([])
  const [interests, setInterests] = useState<Interest[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockMatches: Match[] = [
        {
          id: "1",
          name: "Priya Sharma",
          age: 26,
          height: "5'4\"",
          location: "Mumbai, Maharashtra",
          profession: "Software Engineer",
          education: "B.Tech Computer Science",
          image: "/placeholder.svg?height=300&width=250",
          matchPercentage: 95,
          isVerified: true,
          isPremium: true,
          isOnline: true,
          lastSeen: "Online now",
          mutualInterest: true,
        },
        {
          id: "2",
          name: "Anita Patel",
          age: 24,
          height: "5'3\"",
          location: "Ahmedabad, Gujarat",
          profession: "Doctor",
          education: "MBBS",
          image: "/placeholder.svg?height=300&width=250",
          matchPercentage: 88,
          isVerified: true,
          isPremium: true,
          isOnline: false,
          lastSeen: "2 hours ago",
          mutualInterest: false,
        },
        {
          id: "3",
          name: "Sneha Reddy",
          age: 27,
          height: "5'5\"",
          location: "Hyderabad, Telangana",
          profession: "Teacher",
          education: "M.Ed",
          image: "/placeholder.svg?height=300&width=250",
          matchPercentage: 82,
          isVerified: true,
          isPremium: false,
          isOnline: false,
          lastSeen: "1 day ago",
          mutualInterest: false,
        },
      ]

      const mockInterests: Interest[] = [
        {
          id: "4",
          name: "Rahul Gupta",
          age: 29,
          location: "Delhi, India",
          profession: "Marketing Manager",
          image: "/placeholder.svg?height=300&width=250",
          sentDate: "2 days ago",
          status: "received",
          isVerified: true,
        },
        {
          id: "5",
          name: "Vikram Singh",
          age: 31,
          location: "Bangalore, Karnataka",
          profession: "Business Analyst",
          image: "/placeholder.svg?height=300&width=250",
          sentDate: "1 week ago",
          status: "sent",
          isVerified: true,
        },
        {
          id: "6",
          name: "Arjun Nair",
          age: 28,
          location: "Kochi, Kerala",
          profession: "Civil Engineer",
          image: "/placeholder.svg?height=300&width=250",
          sentDate: "3 days ago",
          status: "accepted",
          isVerified: true,
        },
      ]

      setMatches(mockMatches)
      setInterests(mockInterests)
      setLoading(false)
    }, 1000)
  }, [])

  const handleViewProfile = (profileId: string) => {
    router.push(`/profile/${profileId}`)
  }

  const handleAcceptInterest = (interestId: string) => {
    setInterests((prev) =>
      prev.map((interest) => (interest.id === interestId ? { ...interest, status: "accepted" } : interest)),
    )
  }

  const handleDeclineInterest = (interestId: string) => {
    setInterests((prev) =>
      prev.map((interest) => (interest.id === interestId ? { ...interest, status: "declined" } : interest)),
    )
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "sent":
        return <Badge className="bg-blue-100 text-blue-800">Sent</Badge>
      case "received":
        return <Badge className="bg-yellow-100 text-yellow-800">Received</Badge>
      case "accepted":
        return <Badge className="bg-green-100 text-green-800">Accepted</Badge>
      case "declined":
        return <Badge className="bg-red-100 text-red-800">Declined</Badge>
      default:
        return <Badge>Unknown</Badge>
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-96 bg-gray-200 dark:bg-gray-700 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">My Matches</h1>
          <p className="text-gray-600 dark:text-gray-400">Discover your perfect matches and manage your interests</p>
        </div>

        <Tabs defaultValue="matches" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="matches">My Matches ({matches.length})</TabsTrigger>
            <TabsTrigger value="interests">Interests ({interests.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="matches">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matches.map((match) => (
                <Card key={match.id} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    {/* Profile Image */}
                    <div className="relative">
                      <img
                        src={match.image || "/placeholder.svg"}
                        alt={match.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />

                      {/* Match Percentage */}
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-green-500 text-white font-bold">{match.matchPercentage}% Match</Badge>
                      </div>

                      {/* Status Badges */}
                      <div className="absolute top-3 right-3 flex flex-col gap-1">
                        {match.isOnline && <Badge className="bg-green-500 text-white text-xs">Online</Badge>}
                        {match.isPremium && (
                          <Badge className="bg-yellow-500 text-white text-xs">
                            <Star className="h-3 w-3 mr-1" />
                            Premium
                          </Badge>
                        )}
                        {match.isVerified && <Badge className="bg-blue-500 text-white text-xs">Verified</Badge>}
                      </div>

                      {/* Mutual Interest Indicator */}
                      {match.mutualInterest && (
                        <div className="absolute bottom-3 left-3">
                          <Badge className="bg-rose-500 text-white">
                            <Heart className="h-3 w-3 mr-1" />
                            Mutual Interest
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* Profile Info */}
                    <div className="p-4 space-y-3">
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                          {match.name}, {match.age}
                        </h3>
                        <p className="text-sm text-gray-500">{match.lastSeen}</p>
                      </div>

                      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                          {match.location}
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-2 text-gray-400" />
                          {match.profession}
                        </div>
                        <div className="flex items-center">
                          <GraduationCap className="h-4 w-4 mr-2 text-gray-400" />
                          {match.education}
                        </div>
                      </div>

                      <div className="flex space-x-2 pt-2">
                        <Button size="sm" className="flex-1" onClick={() => handleViewProfile(match.id)}>
                          <Eye className="h-4 w-4 mr-1" />
                          View Profile
                        </Button>
                        <Button size="sm" variant="outline">
                          <MessageCircle className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {matches.length === 0 && (
              <div className="text-center py-12">
                <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No matches yet</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Complete your profile to get better matches</p>
                <Button onClick={() => router.push("/search")}>Browse Profiles</Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="interests">
            <div className="space-y-4">
              {interests.map((interest) => (
                <Card key={interest.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <img
                          src={interest.image || "/placeholder.svg"}
                          alt={interest.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                              {interest.name}, {interest.age}
                            </h3>
                            {interest.isVerified && <Badge className="bg-blue-500 text-white text-xs">Verified</Badge>}
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {interest.location}
                            </div>
                            <div className="flex items-center">
                              <Briefcase className="h-4 w-4 mr-1" />
                              {interest.profession}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {interest.sentDate}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        {getStatusBadge(interest.status)}

                        {interest.status === "received" && (
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              className="bg-green-500 hover:bg-green-600"
                              onClick={() => handleAcceptInterest(interest.id)}
                            >
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Accept
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => handleDeclineInterest(interest.id)}>
                              <X className="h-4 w-4 mr-1" />
                              Decline
                            </Button>
                          </div>
                        )}

                        <Button size="sm" variant="outline" onClick={() => handleViewProfile(interest.id)}>
                          <Eye className="h-4 w-4 mr-1" />
                          View Profile
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {interests.length === 0 && (
              <div className="text-center py-12">
                <MessageCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No interests yet</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Start browsing profiles and send interests to connect with potential matches
                </p>
                <Button onClick={() => router.push("/search")}>Browse Profiles</Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

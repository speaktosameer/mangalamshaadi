"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Briefcase, GraduationCap, Heart, MessageCircle, Eye, Star } from "lucide-react"

interface Profile {
  id: string
  name: string
  age: number
  location: string
  profession: string
  education: string
  image: string
  isVerified: boolean
  isPremium: boolean
  isOnline: boolean
}

export default function FeaturedProfiles() {
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProfiles([
        {
          id: "1",
          name: "Priya Sharma",
          age: 26,
          location: "Mumbai, Maharashtra",
          profession: "Software Engineer",
          education: "B.Tech Computer Science",
          image: "/placeholder.svg?height=300&width=250",
          isVerified: true,
          isPremium: true,
          isOnline: true,
        },
        {
          id: "2",
          name: "Rahul Gupta",
          age: 29,
          location: "Delhi, India",
          profession: "Marketing Manager",
          education: "MBA Marketing",
          image: "/placeholder.svg?height=300&width=250",
          isVerified: true,
          isPremium: false,
          isOnline: false,
        },
        {
          id: "3",
          name: "Anita Patel",
          age: 24,
          location: "Bangalore, Karnataka",
          profession: "Doctor",
          education: "MBBS",
          image: "/placeholder.svg?height=300&width=250",
          isVerified: true,
          isPremium: true,
          isOnline: true,
        },
        {
          id: "4",
          name: "Vikram Singh",
          age: 31,
          location: "Pune, Maharashtra",
          profession: "Business Owner",
          education: "B.Com",
          image: "/placeholder.svg?height=300&width=250",
          isVerified: false,
          isPremium: false,
          isOnline: false,
        },
      ])
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Profiles</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-0">
                  <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-t-lg"></div>
                  <div className="p-4 space-y-3">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Profiles</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover verified profiles of potential life partners from across India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile) => (
            <Card key={profile.id} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <CardContent className="p-0">
                {/* Profile Image */}
                <div className="relative">
                  <img
                    src={profile.image || "/placeholder.svg"}
                    alt={profile.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Status Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    {profile.isOnline && <Badge className="bg-green-500 text-white text-xs">Online</Badge>}
                    {profile.isPremium && (
                      <Badge className="bg-yellow-500 text-white text-xs">
                        <Star className="h-3 w-3 mr-1" />
                        Premium
                      </Badge>
                    )}
                  </div>

                  {/* Verification Badge */}
                  {profile.isVerified && (
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-blue-500 text-white text-xs">Verified</Badge>
                    </div>
                  )}

                  {/* Action Buttons Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="secondary">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary">
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                      {profile.name}, {profile.age}
                    </h3>
                  </div>

                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                      {profile.location}
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-2 text-gray-400" />
                      {profile.profession}
                    </div>
                    <div className="flex items-center">
                      <GraduationCap className="h-4 w-4 mr-2 text-gray-400" />
                      {profile.education}
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" className="flex-1">
                      View Profile
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

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Profiles
          </Button>
        </div>
      </div>
    </section>
  )
}

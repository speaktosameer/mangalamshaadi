"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Heart,
  MessageCircle,
  Share2,
  MapPin,
  Briefcase,
  GraduationCap,
  Star,
  Shield,
  Camera,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"

interface UserProfile {
  id: string
  name: string
  age: number
  height: string
  weight: string
  location: string
  profession: string
  education: string
  religion: string
  caste: string
  motherTongue: string
  maritalStatus: string
  income: string
  about: string
  interests: string[]
  familyDetails: {
    fatherOccupation: string
    motherOccupation: string
    siblings: string
    familyType: string
    familyValues: string
  }
  partnerPreferences: {
    ageRange: string
    heightRange: string
    education: string
    profession: string
    location: string
    income: string
  }
  images: string[]
  isVerified: boolean
  isPremium: boolean
  isOnline: boolean
  lastSeen: string
  joinedDate: string
  profileViews: number
  responseRate: string
}

export default function ProfileDetailsPage() {
  const params = useParams()
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isInterested, setIsInterested] = useState(false)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockProfile: UserProfile = {
        id: params.id as string,
        name: "Priya Sharma",
        age: 26,
        height: "5'4\"",
        weight: "55 kg",
        location: "Mumbai, Maharashtra",
        profession: "Software Engineer",
        education: "B.Tech Computer Science",
        religion: "Hindu",
        caste: "Brahmin",
        motherTongue: "Hindi",
        maritalStatus: "Never Married",
        income: "8-12 LPA",
        about:
          "I am a passionate software engineer who loves to code and create innovative solutions. I enjoy traveling, reading books, and spending time with family. Looking for a life partner who shares similar values and interests.",
        interests: ["Travel", "Reading", "Cooking", "Music", "Photography", "Yoga"],
        familyDetails: {
          fatherOccupation: "Business Owner",
          motherOccupation: "Teacher",
          siblings: "1 Sister (Married)",
          familyType: "Nuclear Family",
          familyValues: "Traditional with modern outlook",
        },
        partnerPreferences: {
          ageRange: "26-32 years",
          heightRange: "5'6\" - 6'0\"",
          education: "Graduate or above",
          profession: "Any",
          location: "Mumbai, Delhi, Bangalore",
          income: "8 LPA and above",
        },
        images: [
          "/placeholder.svg?height=400&width=300",
          "/placeholder.svg?height=400&width=300",
          "/placeholder.svg?height=400&width=300",
          "/placeholder.svg?height=400&width=300",
        ],
        isVerified: true,
        isPremium: true,
        isOnline: true,
        lastSeen: "Online now",
        joinedDate: "January 2024",
        profileViews: 1250,
        responseRate: "85%",
      }
      setProfile(mockProfile)
      setLoading(false)
    }, 1000)
  }, [params.id])

  const handleSendInterest = () => {
    setIsInterested(true)
    // Implement send interest logic
  }

  const nextImage = () => {
    if (profile) {
      setCurrentImageIndex((prev) => (prev + 1) % profile.images.length)
    }
  }

  const prevImage = () => {
    if (profile) {
      setCurrentImageIndex((prev) => (prev - 1 + profile.images.length) % profile.images.length)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
              <div className="space-y-6">
                <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Profile Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">The profile you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/search">Back to Search</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-6">
          <Button variant="outline" asChild>
            <Link href="/search">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Search
            </Link>
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Header */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={profile.images[0] || "/placeholder.svg"}
                        alt={profile.name}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      {profile.isOnline && (
                        <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{profile.name}</h1>
                        {profile.isVerified && <Shield className="h-5 w-5 text-blue-500" />}
                        {profile.isPremium && <Star className="h-5 w-5 text-yellow-500" />}
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        {profile.age} years, {profile.height}
                      </p>
                      <p className="text-sm text-gray-500">{profile.lastSeen}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{profile.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Briefcase className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{profile.profession}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{profile.education}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {profile.interests.map((interest, index) => (
                    <Badge key={index} variant="outline">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Photo Gallery */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Camera className="h-5 w-5 mr-2" />
                  Photos ({profile.images.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <img
                    src={profile.images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${profile.name} photo ${currentImageIndex + 1}`}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                  {profile.images.length > 1 && (
                    <>
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                        onClick={prevImage}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                        onClick={nextImage}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                </div>
                <div className="flex space-x-2 mt-4 overflow-x-auto">
                  {profile.images.map((image, index) => (
                    <img
                      key={index}
                      src={image || "/placeholder.svg"}
                      alt={`Thumbnail ${index + 1}`}
                      className={`w-16 h-16 object-cover rounded cursor-pointer ${
                        index === currentImageIndex ? "ring-2 ring-rose-500" : ""
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Detailed Information */}
            <Tabs defaultValue="about" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="family">Family</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
              </TabsList>

              <TabsContent value="about">
                <Card>
                  <CardHeader>
                    <CardTitle>About {profile.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">Bio</h4>
                      <p className="text-gray-600 dark:text-gray-400">{profile.about}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Personal Details</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Height:</span>
                            <span className="font-medium">{profile.height}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Weight:</span>
                            <span className="font-medium">{profile.weight}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Religion:</span>
                            <span className="font-medium">{profile.religion}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Caste:</span>
                            <span className="font-medium">{profile.caste}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Mother Tongue:</span>
                            <span className="font-medium">{profile.motherTongue}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Professional Details</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Profession:</span>
                            <span className="font-medium">{profile.profession}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Education:</span>
                            <span className="font-medium">{profile.education}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Income:</span>
                            <span className="font-medium">{profile.income}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Location:</span>
                            <span className="font-medium">{profile.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="family">
                <Card>
                  <CardHeader>
                    <CardTitle>Family Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Father's Occupation:</span>
                          <span className="font-medium">{profile.familyDetails.fatherOccupation}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Mother's Occupation:</span>
                          <span className="font-medium">{profile.familyDetails.motherOccupation}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Siblings:</span>
                          <span className="font-medium">{profile.familyDetails.siblings}</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Family Type:</span>
                          <span className="font-medium">{profile.familyDetails.familyType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Family Values:</span>
                          <span className="font-medium">{profile.familyDetails.familyValues}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="preferences">
                <Card>
                  <CardHeader>
                    <CardTitle>Partner Preferences</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Age Range:</span>
                          <span className="font-medium">{profile.partnerPreferences.ageRange}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Height Range:</span>
                          <span className="font-medium">{profile.partnerPreferences.heightRange}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Education:</span>
                          <span className="font-medium">{profile.partnerPreferences.education}</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Profession:</span>
                          <span className="font-medium">{profile.partnerPreferences.profession}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Location:</span>
                          <span className="font-medium">{profile.partnerPreferences.location}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Income:</span>
                          <span className="font-medium">{profile.partnerPreferences.income}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Action Buttons */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <Button className="w-full" onClick={handleSendInterest} disabled={isInterested}>
                  <Heart className="h-4 w-4 mr-2" />
                  {isInterested ? "Interest Sent" : "Send Interest"}
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon" className="flex-1 bg-transparent">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="flex-1 bg-transparent">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Profile Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Profile Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Profile Views:</span>
                  <span className="font-medium">{profile.profileViews}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Response Rate:</span>
                  <span className="font-medium">{profile.responseRate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Joined:</span>
                  <span className="font-medium">{profile.joinedDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Last Active:</span>
                  <span className="font-medium">{profile.lastSeen}</span>
                </div>
              </CardContent>
            </Card>

            {/* Verification Status */}
            <Card>
              <CardHeader>
                <CardTitle>Verification Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Profile Verified</span>
                  {profile.isVerified ? (
                    <Badge className="bg-green-100 text-green-800">Verified</Badge>
                  ) : (
                    <Badge variant="outline">Pending</Badge>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Photo Verified</span>
                  <Badge className="bg-green-100 text-green-800">Verified</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Phone Verified</span>
                  <Badge className="bg-green-100 text-green-800">Verified</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Email Verified</span>
                  <Badge className="bg-green-100 text-green-800">Verified</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

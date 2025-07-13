"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Search, Filter, MapPin, Briefcase, GraduationCap, Heart, MessageCircle, Eye, Star, X } from "lucide-react"

interface SearchFilters {
  ageRange: [number, number]
  heightRange: [number, number]
  religion: string
  caste: string
  location: string
  education: string
  profession: string
  income: string
  maritalStatus: string
}

interface Profile {
  id: string
  name: string
  age: number
  height: string
  location: string
  profession: string
  education: string
  religion: string
  caste: string
  income: string
  image: string
  isVerified: boolean
  isPremium: boolean
  isOnline: boolean
  lastSeen: string
}

export default function SearchPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [filteredProfiles, setFilteredProfiles] = useState<Profile[]>([])
  const [loading, setLoading] = useState(true)
  const [showFilters, setShowFilters] = useState(false)
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "")
  const [filters, setFilters] = useState<SearchFilters>({
    ageRange: [21, 35],
    heightRange: [150, 180],
    religion: searchParams.get("religion") || "Any",
    caste: "",
    location: searchParams.get("location") || "Any",
    education: "Any",
    profession: "Any",
    income: "",
    maritalStatus: "",
  })

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockProfiles: Profile[] = [
        {
          id: "1",
          name: "Priya Sharma",
          age: 26,
          height: "5'4\"",
          location: "Mumbai, Maharashtra",
          profession: "Software Engineer",
          education: "B.Tech Computer Science",
          religion: "Hindu",
          caste: "Brahmin",
          income: "8-12 LPA",
          image: "/placeholder.svg?height=300&width=250",
          isVerified: true,
          isPremium: true,
          isOnline: true,
          lastSeen: "Online now",
        },
        {
          id: "2",
          name: "Rahul Gupta",
          age: 29,
          height: "5'8\"",
          location: "Delhi, India",
          profession: "Marketing Manager",
          education: "MBA Marketing",
          religion: "Hindu",
          caste: "Agarwal",
          income: "12-15 LPA",
          image: "/placeholder.svg?height=300&width=250",
          isVerified: true,
          isPremium: false,
          isOnline: false,
          lastSeen: "2 hours ago",
        },
        {
          id: "3",
          name: "Anita Patel",
          age: 24,
          height: "5'3\"",
          location: "Ahmedabad, Gujarat",
          profession: "Doctor",
          education: "MBBS",
          religion: "Hindu",
          caste: "Patel",
          income: "10-15 LPA",
          image: "/placeholder.svg?height=300&width=250",
          isVerified: true,
          isPremium: true,
          isOnline: true,
          lastSeen: "Online now",
        },
        {
          id: "4",
          name: "Vikram Singh",
          age: 31,
          height: "5'10\"",
          location: "Bangalore, Karnataka",
          profession: "Business Analyst",
          education: "MBA Finance",
          religion: "Hindu",
          caste: "Rajput",
          income: "15-20 LPA",
          image: "/placeholder.svg?height=300&width=250",
          isVerified: true,
          isPremium: false,
          isOnline: false,
          lastSeen: "1 day ago",
        },
        {
          id: "5",
          name: "Sneha Reddy",
          age: 27,
          height: "5'5\"",
          location: "Hyderabad, Telangana",
          profession: "Teacher",
          education: "M.Ed",
          religion: "Hindu",
          caste: "Reddy",
          income: "6-8 LPA",
          image: "/placeholder.svg?height=300&width=250",
          isVerified: true,
          isPremium: true,
          isOnline: false,
          lastSeen: "3 hours ago",
        },
        {
          id: "6",
          name: "Arjun Nair",
          age: 28,
          height: "5'9\"",
          location: "Kochi, Kerala",
          profession: "Civil Engineer",
          education: "B.Tech Civil",
          religion: "Hindu",
          caste: "Nair",
          income: "8-12 LPA",
          image: "/placeholder.svg?height=300&width=250",
          isVerified: true,
          isPremium: false,
          isOnline: true,
          lastSeen: "Online now",
        },
      ]
      setProfiles(mockProfiles)
      setFilteredProfiles(mockProfiles)
      setLoading(false)
    }, 1000)
  }, [])

  const handleFilterChange = (key: keyof SearchFilters, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const applyFilters = () => {
    let filtered = profiles.filter((profile) => {
      return (
        profile.age >= filters.ageRange[0] &&
        profile.age <= filters.ageRange[1] &&
        (filters.religion === "Any" || profile.religion === filters.religion) &&
        (filters.location === "Any" || profile.location.includes(filters.location)) &&
        (filters.profession === "Any" || profile.profession.includes(filters.profession))
      )
    })

    if (searchQuery) {
      filtered = filtered.filter(
        (profile) =>
          profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          profile.profession.toLowerCase().includes(searchQuery.toLowerCase()) ||
          profile.location.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    setFilteredProfiles(filtered)
  }

  useEffect(() => {
    applyFilters()
  }, [filters, searchQuery, profiles])

  const clearFilters = () => {
    setFilters({
      ageRange: [21, 35],
      heightRange: [150, 180],
      religion: "Any",
      caste: "",
      location: "Any",
      education: "Any",
      profession: "Any",
      income: "",
      maritalStatus: "",
    })
    setSearchQuery("")
  }

  const handleViewProfile = (profileId: string) => {
    router.push(`/profile/${profileId}`)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Browse Profiles</h1>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search by name, profession, or location"
                  className="pl-10 h-12"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="h-12 px-6">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:col-span-1 ${showFilters ? "block" : "hidden lg:block"}`}>
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Filters</h3>
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    <X className="h-4 w-4 mr-1" />
                    Clear
                  </Button>
                </div>

                <div className="space-y-6">
                  {/* Age Range */}
                  <div>
                    <Label className="text-sm font-medium mb-3 block">
                      Age: {filters.ageRange[0]} - {filters.ageRange[1]} years
                    </Label>
                    <Slider
                      value={filters.ageRange}
                      onValueChange={(value) => handleFilterChange("ageRange", value)}
                      max={60}
                      min={18}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  {/* Religion */}
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Religion</Label>
                    <Select onValueChange={(value) => handleFilterChange("religion", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select religion" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Any">Any</SelectItem>
                        <SelectItem value="Hindu">Hindu</SelectItem>
                        <SelectItem value="Muslim">Muslim</SelectItem>
                        <SelectItem value="Christian">Christian</SelectItem>
                        <SelectItem value="Sikh">Sikh</SelectItem>
                        <SelectItem value="Buddhist">Buddhist</SelectItem>
                        <SelectItem value="Jain">Jain</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Location */}
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Location</Label>
                    <Select onValueChange={(value) => handleFilterChange("location", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Any">Any</SelectItem>
                        <SelectItem value="Mumbai">Mumbai</SelectItem>
                        <SelectItem value="Delhi">Delhi</SelectItem>
                        <SelectItem value="Bangalore">Bangalore</SelectItem>
                        <SelectItem value="Chennai">Chennai</SelectItem>
                        <SelectItem value="Pune">Pune</SelectItem>
                        <SelectItem value="Hyderabad">Hyderabad</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Education */}
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Education</Label>
                    <Select onValueChange={(value) => handleFilterChange("education", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select education" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Any">Any</SelectItem>
                        <SelectItem value="Graduate">Graduate</SelectItem>
                        <SelectItem value="Post Graduate">Post Graduate</SelectItem>
                        <SelectItem value="Doctorate">Doctorate</SelectItem>
                        <SelectItem value="Diploma">Diploma</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Profession */}
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Profession</Label>
                    <Select onValueChange={(value) => handleFilterChange("profession", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select profession" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Any">Any</SelectItem>
                        <SelectItem value="Software">Software Engineer</SelectItem>
                        <SelectItem value="Doctor">Doctor</SelectItem>
                        <SelectItem value="Teacher">Teacher</SelectItem>
                        <SelectItem value="Business">Business</SelectItem>
                        <SelectItem value="Government">Government Job</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600 dark:text-gray-400">Showing {filteredProfiles.length} profiles</p>
              <Select defaultValue="relevance">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Most Relevant</SelectItem>
                  <SelectItem value="recent">Recently Joined</SelectItem>
                  <SelectItem value="active">Last Active</SelectItem>
                  <SelectItem value="premium">Premium First</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {loading ? (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
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
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProfiles.map((profile) => (
                  <Card
                    key={profile.id}
                    className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer"
                    onClick={() => handleViewProfile(profile.id)}
                  >
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
                            <Button
                              size="sm"
                              variant="secondary"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleViewProfile(profile.id)
                              }}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="secondary" onClick={(e) => e.stopPropagation()}>
                              <Heart className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="secondary" onClick={(e) => e.stopPropagation()}>
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
                          <p className="text-sm text-gray-500">{profile.lastSeen}</p>
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
                          <Button
                            size="sm"
                            className="flex-1"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleViewProfile(profile.id)
                            }}
                          >
                            View Profile
                          </Button>
                          <Button size="sm" variant="outline" onClick={(e) => e.stopPropagation()}>
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {filteredProfiles.length === 0 && !loading && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">No profiles found matching your criteria</p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

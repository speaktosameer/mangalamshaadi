"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Heart, MapPin, Calendar, Star, Filter } from "lucide-react"

interface SuccessStory {
  id: string
  coupleName: string
  groomName: string
  brideName: string
  weddingDate: string
  location: string
  story: string
  image: string
  category: string
  rating: number
  likes: number
}

export default function SuccessStoriesPage() {
  const [stories, setStories] = useState<SuccessStory[]>([])
  const [filteredStories, setFilteredStories] = useState<SuccessStory[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockStories: SuccessStory[] = [
        {
          id: "1",
          coupleName: "Priya & Rahul",
          groomName: "Rahul Sharma",
          brideName: "Priya Gupta",
          weddingDate: "December 15, 2023",
          location: "Mumbai, Maharashtra",
          story:
            "We met through Mangalam Shaadi and instantly connected over our shared love for travel and books. After months of conversations and meetings, we knew we were meant for each other. Our families also bonded beautifully, making our journey even more special.",
          image: "/placeholder.svg?height=400&width=600",
          category: "Love Marriage",
          rating: 5,
          likes: 234,
        },
        {
          id: "2",
          coupleName: "Anita & Vikram",
          groomName: "Vikram Singh",
          brideName: "Anita Patel",
          weddingDate: "October 22, 2023",
          location: "Delhi, India",
          story:
            "Our families found each other through Mangalam Shaadi. What started as a traditional arranged meeting blossomed into a beautiful love story. We discovered we had so much in common and our values aligned perfectly.",
          image: "/placeholder.svg?height=400&width=600",
          category: "Arranged Marriage",
          rating: 5,
          likes: 189,
        },
        {
          id: "3",
          coupleName: "Sneha & Arjun",
          groomName: "Arjun Nair",
          brideName: "Sneha Reddy",
          weddingDate: "November 8, 2023",
          location: "Bangalore, Karnataka",
          story:
            "Despite coming from different cultural backgrounds, we found our perfect match through Mangalam Shaadi. Our families were initially hesitant, but love conquered all barriers. Today, we celebrate our unity in diversity.",
          image: "/placeholder.svg?height=400&width=600",
          category: "Intercaste",
          rating: 5,
          likes: 156,
        },
        {
          id: "4",
          coupleName: "Kavya & David",
          groomName: "David Johnson",
          brideName: "Kavya Krishnan",
          weddingDate: "September 12, 2023",
          location: "Chennai, Tamil Nadu",
          story:
            "An international love story that began on Mangalam Shaadi. David was looking for an Indian bride, and Kavya was open to meeting someone from a different culture. Our wedding was a beautiful blend of Indian and Western traditions.",
          image: "/placeholder.svg?height=400&width=600",
          category: "International",
          rating: 5,
          likes: 298,
        },
        {
          id: "5",
          coupleName: "Meera & Rajesh",
          groomName: "Rajesh Kumar",
          brideName: "Meera Sharma",
          weddingDate: "August 25, 2023",
          location: "Jaipur, Rajasthan",
          story:
            "Both of us had been looking for our life partner for years. When we connected through Mangalam Shaadi, we realized that sometimes the best things are worth waiting for. Our patience was rewarded with a perfect match.",
          image: "/placeholder.svg?height=400&width=600",
          category: "Love Marriage",
          rating: 5,
          likes: 167,
        },
        {
          id: "6",
          coupleName: "Pooja & Amit",
          groomName: "Amit Agarwal",
          brideName: "Pooja Jain",
          weddingDate: "July 18, 2023",
          location: "Pune, Maharashtra",
          story:
            "Our story is proof that arranged marriages can lead to deep love. Our families connected through Mangalam Shaadi, and from our first meeting, we knew we had found our soulmate. Six months later, we were married!",
          image: "/placeholder.svg?height=400&width=600",
          category: "Arranged Marriage",
          rating: 5,
          likes: 203,
        },
      ]
      setStories(mockStories)
      setFilteredStories(mockStories)
      setLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    let filtered = stories

    if (searchQuery) {
      filtered = filtered.filter(
        (story) =>
          story.coupleName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          story.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          story.story.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter((story) => story.category === selectedCategory)
    }

    setFilteredStories(filtered)
  }, [searchQuery, selectedCategory, stories])

  const categories = ["all", "Love Marriage", "Arranged Marriage", "Intercaste", "International"]

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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Success Stories</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Real couples, real love stories. Get inspired by these beautiful journeys that started with Mangalam Shaadi.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search by couple name, location, or story"
                  className="pl-10 h-12"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48 h-12">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="h-12 px-6">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400">Showing {filteredStories.length} success stories</p>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.map((story) => (
            <Card key={story.id} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <CardContent className="p-0">
                {/* Story Image */}
                <div className="relative">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.coupleName}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-rose-500 text-white">{story.category}</Badge>
                  </div>
                  <div className="absolute top-3 right-3 flex items-center bg-white/90 rounded-full px-2 py-1">
                    <Heart className="h-3 w-3 text-red-500 mr-1" />
                    <span className="text-xs font-medium">{story.likes}</span>
                  </div>
                </div>

                {/* Story Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{story.coupleName}</h3>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {story.weddingDate}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {story.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-4">{story.story}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <Button size="sm" variant="outline">
                      Read Full Story
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredStories.length === 0 && (
          <div className="text-center py-12">
            <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No stories found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Try adjusting your search criteria or browse all stories
            </p>
            <Button
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("all")
              }}
            >
              View All Stories
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-rose-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
          <Heart className="h-12 w-12 text-rose-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Join thousands of happy couples who found their perfect match through Mangalam Shaadi. Your love story could
            be next!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-rose-500 hover:bg-rose-600">
              Register Free
            </Button>
            <Button size="lg" variant="outline">
              Browse Profiles
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

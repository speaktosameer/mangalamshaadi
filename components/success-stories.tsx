"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Quote, Calendar, MapPin } from "lucide-react"

interface Story {
  id: string
  coupleName: string
  location: string
  marriageDate: string
  story: string
  image: string
  groomName: string
  brideName: string
}

export default function SuccessStories() {
  const [stories, setStories] = useState<Story[]>([])
  const [currentStory, setCurrentStory] = useState(0)

  useEffect(() => {
    // Simulate API call
    setStories([
      {
        id: "1",
        coupleName: "Raj & Priya",
        groomName: "Raj Kumar",
        brideName: "Priya Sharma",
        location: "Mumbai, Maharashtra",
        marriageDate: "December 15, 2023",
        story:
          "We found each other on Perfect Match and instantly connected over our shared love for travel and food. After months of beautiful conversations, we knew we were meant to be together. Thank you Perfect Match for bringing us together!",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        id: "2",
        coupleName: "Amit & Sneha",
        groomName: "Amit Patel",
        brideName: "Sneha Gupta",
        location: "Delhi, India",
        marriageDate: "October 22, 2023",
        story:
          "Our families had been looking for suitable matches for us for years. Perfect Match made it so easy to find each other. We connected instantly and our families loved each other too. It was a perfect match indeed!",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        id: "3",
        coupleName: "Vikram & Anita",
        groomName: "Vikram Singh",
        brideName: "Anita Reddy",
        location: "Bangalore, Karnataka",
        marriageDate: "January 8, 2024",
        story:
          "Being working professionals, we had little time to meet people. Perfect Match helped us find each other despite our busy schedules. We are grateful for this platform that understands modern relationships.",
        image: "/placeholder.svg?height=400&width=600",
      },
    ])
  }, [])

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length)
  }

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length)
  }

  if (stories.length === 0) {
    return null
  }

  const story = stories[currentStory]

  return (
    <section className="py-16 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heart className="h-12 w-12 text-rose-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Success Stories</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real couples, real love stories. See how Perfect Match has helped thousands find their life partners.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-xl">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 md:h-auto">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.coupleName}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{story.coupleName}</h3>
                    <div className="flex items-center mt-1 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {story.location}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-center">
                  <Quote className="h-8 w-8 text-rose-500 mb-4" />

                  <blockquote className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                    "{story.story}"
                  </blockquote>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">Married on {story.marriageDate}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {story.groomName} & {story.brideName}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button variant="outline" onClick={prevStory}>
              Previous
            </Button>

            <div className="flex space-x-2">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentStory ? "bg-rose-500" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>

            <Button variant="outline" onClick={nextStory}>
              Next
            </Button>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" variant="outline">
              View All Success Stories
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

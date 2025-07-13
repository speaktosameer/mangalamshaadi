"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  comment: string
  avatar: string
}

export default function TestimonialsSlider() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    setTestimonials([
      {
        id: "1",
        name: "Rahul Sharma",
        location: "Mumbai",
        rating: 5,
        comment:
          "Perfect Match helped me find my soulmate. The platform is user-friendly and has genuine profiles. Highly recommended!",
        avatar: "/placeholder.svg?height=60&width=60",
      },
      {
        id: "2",
        name: "Priya Patel",
        location: "Delhi",
        rating: 5,
        comment:
          "Amazing experience! The customer support is excellent and the matching algorithm really works. Found my perfect partner here.",
        avatar: "/placeholder.svg?height=60&width=60",
      },
      {
        id: "3",
        name: "Amit Kumar",
        location: "Bangalore",
        rating: 4,
        comment:
          "Great platform with verified profiles. The premium features are worth every penny. Thank you for helping me find love!",
        avatar: "/placeholder.svg?height=60&width=60",
      },
      {
        id: "4",
        name: "Sneha Gupta",
        location: "Pune",
        rating: 5,
        comment:
          "I was skeptical about online matrimony, but Perfect Match changed my perspective. Found my life partner within 3 months!",
        avatar: "/placeholder.svg?height=60&width=60",
      },
    ])
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  if (testimonials.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What Our Members Say</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our happy members have to say about their experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="max-w-2xl mx-auto">
                    <CardContent className="p-8 text-center">
                      <Quote className="h-8 w-8 text-rose-500 mx-auto mb-6" />

                      <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                        "{testimonial.comment}"
                      </blockquote>

                      <div className="flex justify-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonial.rating
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300 dark:text-gray-600"
                            }`}
                          />
                        ))}
                      </div>

                      <div className="flex items-center justify-center space-x-4">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="text-left">
                          <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-rose-500" : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

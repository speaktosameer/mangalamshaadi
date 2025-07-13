"use client"

import { Heart, Users, Shield, Award, CheckCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function AboutPage() {
  const stats = [
    { number: "50,000+", label: "Happy Couples" },
    { number: "2M+", label: "Registered Users" },
    { number: "15+", label: "Years Experience" },
    { number: "99%", label: "Success Rate" },
  ]

  const features = [
    {
      icon: Shield,
      title: "100% Verified Profiles",
      description: "Every profile is manually verified by our team to ensure authenticity and safety.",
    },
    {
      icon: Heart,
      title: "Perfect Matching Algorithm",
      description: "Our advanced AI-powered matching system finds the most compatible partners for you.",
    },
    {
      icon: Users,
      title: "Dedicated Support Team",
      description: "24/7 customer support to help you throughout your matrimonial journey.",
    },
    {
      icon: Award,
      title: "Award Winning Platform",
      description: "Recognized as India's most trusted matrimonial platform by leading publications.",
    },
  ]

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=200&width=200",
      description: "15+ years experience in matrimonial industry",
    },
    {
      name: "Priya Sharma",
      role: "Head of Operations",
      image: "/placeholder.svg?height=200&width=200",
      description: "Expert in customer relationship management",
    },
    {
      name: "Amit Patel",
      role: "Technology Head",
      image: "/placeholder.svg?height=200&width=200",
      description: "Leading our technical innovation team",
    },
    {
      name: "Sunita Gupta",
      role: "Customer Success Manager",
      image: "/placeholder.svg?height=200&width=200",
      description: "Ensuring every customer finds their perfect match",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full">
              <Heart className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-6">
            About Mangalam Shaadi
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            India's most trusted matrimonial platform, connecting hearts and creating beautiful love stories since 2008.
            We believe every person deserves to find their perfect life partner.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600"
            >
              <Link href="/register">Join Us Today</Link>
            </Button>
            <Button size="lg" variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-rose-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                To create a safe, trusted, and efficient platform where individuals can find their perfect life partner.
                We are committed to preserving traditional values while embracing modern technology to make the
                matrimonial process seamless and joyful.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">100% Verified Profiles</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Advanced Privacy Controls</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">24/7 Customer Support</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/20 dark:to-pink-900/20 rounded-3xl flex items-center justify-center">
                <Heart className="h-32 w-32 text-rose-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              Why Choose Mangalam Shaadi?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We provide the most comprehensive and secure matrimonial experience with cutting-edge technology and
              personalized service.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Meet Our Team</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our dedicated team of professionals is committed to helping you find your perfect life partner.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full p-1">
                      <Star className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">{member.name}</h3>
                  <p className="text-rose-600 font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-rose-500 to-pink-500">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Find Your Perfect Match?</h2>
          <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
            Join millions of happy couples who found their life partners through Mangalam Shaadi. Your perfect match is
            just a click away!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
              <Link href="/register">Register Free</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-rose-600 bg-transparent"
            >
              <Link href="/search">Browse Profiles</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

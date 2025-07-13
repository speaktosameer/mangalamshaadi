"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Heart, Users, Shield, Star } from "lucide-react"

export default function HeroSection() {
  const router = useRouter()
  const [searchFilters, setSearchFilters] = useState({
    lookingFor: "",
    ageFrom: "",
    ageTo: "",
    religion: "",
    location: "",
  })

  const handleSearch = () => {
    const params = new URLSearchParams()
    Object.entries(searchFilters).forEach(([key, value]) => {
      if (value) params.append(key, value)
    })
    router.push(`/search?${params.toString()}`)
  }

  const handleBrowseProfiles = () => {
    router.push("/search")
  }

  const handleRegisterFree = () => {
    router.push("/register")
  }

  return (
    <section className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-rose-300 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-pink-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-300 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="h-4 w-4 mr-2" />
              India's Most Trusted Matrimony
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Find Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">
                {" "}
                Perfect{" "}
              </span>
              Life Partner
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Join millions of happy couples who found their soulmate through Mangalam Shaadi. Your journey to eternal
              happiness starts here.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-600 dark:text-rose-400">2M+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Couples</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-600 dark:text-rose-400">50L+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Registered Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-600 dark:text-rose-400">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Verified Profiles</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 text-lg"
                onClick={handleRegisterFree}
              >
                Register Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-rose-500 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20 px-8 py-3 text-lg bg-transparent"
                onClick={handleBrowseProfiles}
              >
                Browse Profiles
              </Button>
            </div>
          </div>

          {/* Right Content - Search Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Find Your Match</h3>
              <p className="text-gray-600 dark:text-gray-400">Search from millions of verified profiles</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  I'm looking for
                </label>
                <Select onValueChange={(value) => setSearchFilters((prev) => ({ ...prev, lookingFor: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bride">Bride</SelectItem>
                    <SelectItem value="groom">Groom</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Age From</label>
                  <Select onValueChange={(value) => setSearchFilters((prev) => ({ ...prev, ageFrom: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="18" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 43 }, (_, i) => i + 18).map((age) => (
                        <SelectItem key={age} value={age.toString()}>
                          {age}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Age To</label>
                  <Select onValueChange={(value) => setSearchFilters((prev) => ({ ...prev, ageTo: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="60" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 43 }, (_, i) => i + 18).map((age) => (
                        <SelectItem key={age} value={age.toString()}>
                          {age}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Religion</label>
                <Select onValueChange={(value) => setSearchFilters((prev) => ({ ...prev, religion: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Religion" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hindu">Hindu</SelectItem>
                    <SelectItem value="muslim">Muslim</SelectItem>
                    <SelectItem value="christian">Christian</SelectItem>
                    <SelectItem value="sikh">Sikh</SelectItem>
                    <SelectItem value="buddhist">Buddhist</SelectItem>
                    <SelectItem value="jain">Jain</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Location</label>
                <Input
                  placeholder="Enter city or state"
                  value={searchFilters.location}
                  onChange={(e) => setSearchFilters((prev) => ({ ...prev, location: e.target.value }))}
                />
              </div>

              <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 text-lg" onClick={handleSearch}>
                <Search className="h-5 w-5 mr-2" />
                Search Now
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-1 text-green-500" />
                  100% Verified
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1 text-blue-500" />
                  50L+ Members
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1 text-yellow-500" />
                  4.8 Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

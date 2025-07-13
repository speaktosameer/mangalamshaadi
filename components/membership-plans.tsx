"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Crown, Zap } from "lucide-react"

interface Plan {
  id: string
  name: string
  price: number
  duration: string
  originalPrice?: number
  icon: React.ElementType
  color: string
  features: string[]
  isPopular?: boolean
  isRecommended?: boolean
}

export default function MembershipPlans() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  const plans: Plan[] = [
    {
      id: "free",
      name: "Free",
      price: 0,
      duration: "Forever",
      icon: Star,
      color: "text-gray-500",
      features: [
        "Create profile",
        "Browse profiles",
        "Send 5 interests per day",
        "Basic search filters",
        "View contact details of 3 profiles",
      ],
    },
    {
      id: "premium",
      name: "Premium",
      price: billingCycle === "monthly" ? 1999 : 19999,
      originalPrice: billingCycle === "monthly" ? 2999 : 29999,
      duration: billingCycle === "monthly" ? "per month" : "per year",
      icon: Crown,
      color: "text-yellow-500",
      isPopular: true,
      features: [
        "All Free features",
        "Unlimited interests",
        "Advanced search filters",
        "View all contact details",
        "Priority customer support",
        "Profile highlighting",
        "See who viewed your profile",
      ],
    },
    {
      id: "elite",
      name: "Elite",
      price: billingCycle === "monthly" ? 3999 : 39999,
      originalPrice: billingCycle === "monthly" ? 5999 : 59999,
      duration: billingCycle === "monthly" ? "per month" : "per year",
      icon: Zap,
      color: "text-purple-500",
      isRecommended: true,
      features: [
        "All Premium features",
        "Dedicated relationship manager",
        "Profile verification",
        "Exclusive elite profiles",
        "Personalized matchmaking",
        "Video call feature",
        "Background verification assistance",
      ],
    },
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Choose Your Membership Plan</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Find the perfect plan that suits your needs and budget. All plans come with our satisfaction guarantee.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white dark:bg-gray-700 rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                billingCycle === "monthly"
                  ? "bg-rose-500 text-white"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                billingCycle === "yearly"
                  ? "bg-rose-500 text-white"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Yearly
              <Badge className="ml-2 bg-green-500 text-white text-xs">Save 33%</Badge>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.isPopular ? "ring-2 ring-rose-500 scale-105" : ""
              } ${plan.isRecommended ? "ring-2 ring-purple-500" : ""}`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute top-0 left-0 right-0 bg-rose-500 text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}

              {/* Recommended Badge */}
              {plan.isRecommended && (
                <div className="absolute top-0 left-0 right-0 bg-purple-500 text-white text-center py-2 text-sm font-medium">
                  Recommended
                </div>
              )}

              <CardHeader className={`text-center ${plan.isPopular || plan.isRecommended ? "pt-12" : "pt-6"}`}>
                <div className="flex justify-center mb-4">
                  <plan.icon className={`h-12 w-12 ${plan.color}`} />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">{plan.name}</CardTitle>
                <div className="mt-4">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      ₹{plan.price.toLocaleString()}
                    </span>
                    {plan.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">₹{plan.originalPrice.toLocaleString()}</span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">{plan.duration}</p>
                </div>
              </CardHeader>

              <CardContent className="px-6 pb-6">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.isPopular
                      ? "bg-rose-500 hover:bg-rose-600"
                      : plan.isRecommended
                        ? "bg-purple-500 hover:bg-purple-600"
                        : ""
                  }`}
                  variant={plan.id === "free" ? "outline" : "default"}
                >
                  {plan.id === "free" ? "Get Started" : "Choose Plan"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            All plans include 24/7 customer support and 30-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  )
}

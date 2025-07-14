"use client"
import { useState } from "react"
import {
  Search,
  HelpCircle,
  Users,
  Shield,
  CreditCard,
  Heart,
  MessageCircle,
  CheckCircle,
  Settings,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const faqs: FAQ[] = [
    {
      id: "1",
      question: "How do I create a profile on Mangalam Shaadi?",
      answer:
        "Creating a profile is simple! Click on 'Register Free' on our homepage, fill in your basic details, upload photos, and complete your profile information. Our guided process will help you create an attractive profile that stands out.",
      category: "Account & Profile",
    },
    {
      id: "2",
      question: "Is Mangalam Shaadi safe and secure?",
      answer:
        "Yes, we take your safety seriously. We use advanced encryption, verify profiles, have strict privacy policies, and provide safety tips. You can also block or report suspicious users anytime.",
      category: "Safety & Security",
    },
    {
      id: "3",
      question: "What are the different membership plans?",
      answer:
        "We offer Free, Premium, and Elite plans. Free members can browse profiles and send limited interests. Premium members get unlimited messaging and advanced features. Elite members get personalized matchmaking and dedicated support.",
      category: "Membership & Billing",
    },
    {
      id: "4",
      question: "How does the matching algorithm work?",
      answer:
        "Our algorithm considers your preferences, interests, lifestyle, family background, and compatibility factors to suggest the most suitable matches. The more complete your profile, the better the matches.",
      category: "Matching & Search",
    },
    {
      id: "5",
      question: "Can I hide my profile from certain users?",
      answer:
        "Yes, you can control your privacy settings. You can hide your profile from specific users, make your photos private, or limit who can contact you based on your preferences.",
      category: "Privacy Settings",
    },
    {
      id: "6",
      question: "How do I upgrade my membership?",
      answer:
        "Go to 'Membership Plans' in your account, choose your preferred plan, and complete the secure payment process. Your upgraded features will be activated immediately.",
      category: "Membership & Billing",
    },
    {
      id: "7",
      question: "What if I'm not satisfied with my premium membership?",
      answer:
        "We offer a 30-day money-back guarantee for all premium memberships. If you're not satisfied, contact our support team within 30 days for a full refund.",
      category: "Membership & Billing",
    },
    {
      id: "8",
      question: "How do I verify my profile?",
      answer:
        "Profile verification involves verifying your phone number, email, uploading a clear photo, and providing government ID. Verified profiles get better visibility and more trust from other users.",
      category: "Verification",
    },
    {
      id: "9",
      question: "How do I send an interest to a profile?",
      answer:
        "On any profile you like, simply click the 'Send Interest' button. If the other person accepts your interest, you can then start communicating.",
      category: "Communication",
    },
    {
      id: "10",
      question: "What is the 'My Matches' section?",
      answer:
        "The 'My Matches' section shows you profiles that our algorithm has identified as highly compatible with your preferences. It's a great place to start your search!",
      category: "Matching & Search",
    },
    {
      id: "11",
      question: "How can I update my profile information?",
      answer:
        "Log in to your account and navigate to 'Edit Profile'. You can update your personal details, preferences, photos, and more from there.",
      category: "Account & Profile",
    },
    {
      id: "12",
      question: "What should I do if I forget my password?",
      answer:
        "On the login page, click 'Forgot Password'. Enter your registered email address, and we'll send you a link to reset your password.",
      category: "Account & Profile",
    },
  ]

  const categories = [
    { id: "all", label: "All Categories", icon: HelpCircle },
    { id: "account", label: "Account & Profile", icon: Users },
    { id: "safety", label: "Safety & Security", icon: Shield },
    { id: "membership", label: "Membership & Billing", icon: CreditCard },
    { id: "matching", label: "Matching & Search", icon: Heart },
    { id: "privacy", label: "Privacy Settings", icon: Settings },
    { id: "verification", label: "Verification", icon: CheckCircle },
    { id: "communication", label: "Communication", icon: MessageCircle },
  ]

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      selectedCategory === "all" || faq.category === categories.find((cat) => cat.id === selectedCategory)?.label
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find quick answers to the most common questions about Mangalam Shaadi.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search for answers..."
                  className="pl-10 h-12 text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    className={`h-auto p-3 flex items-center space-x-2 ${
                      selectedCategory !== category.id
                        ? "bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        : "bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:from-rose-600 hover:to-pink-600"
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <category.icon className="h-4 w-4" />
                    <span className="text-sm">{category.label}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border rounded-lg shadow-md bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <div className="flex items-start space-x-3">
                      <HelpCircle className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{faq.question}</h3>
                        <Badge
                          variant="outline"
                          className="mt-2 text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                        >
                          {faq.category}
                        </Badge>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300 pb-4 pl-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))
            ) : (
              <div className="text-center py-12">
                <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No FAQs found</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Try adjusting your search terms or browse different categories.
                </p>
              </div>
            )}
          </Accordion>
        </div>

        {/* Still Need Help Section */}
        <div className="text-center mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Still Need Help?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            If you can't find the answer you're looking for, our support team is ready to assist you.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white"
          >
            <a href="/contact">
              <MessageCircle className="h-5 w-5 mr-2" />
              Contact Support
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

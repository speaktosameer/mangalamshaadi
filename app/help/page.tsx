"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Search,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  HelpCircle,
  Shield,
  CreditCard,
  Users,
  Settings,
  Heart,
  CheckCircle,
} from "lucide-react"

interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [supportForm, setSupportForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const faqs: FAQ[] = [
    {
      id: "1",
      question: "How do I create a profile on Mangalam Shaadi?",
      answer:
        "Creating a profile is simple! Click on 'Register Free' button, fill in your basic details, upload your photo, and complete your profile information. Our team will verify your profile within 24 hours.",
      category: "Getting Started",
    },
    {
      id: "2",
      question: "Is my personal information safe and secure?",
      answer:
        "Yes, absolutely! We use advanced encryption and security measures to protect your personal information. Your data is never shared with third parties without your consent.",
      category: "Privacy & Security",
    },
    {
      id: "3",
      question: "How does the matching algorithm work?",
      answer:
        "Our advanced matching algorithm considers your preferences, lifestyle, education, profession, location, and family background to suggest the most compatible profiles.",
      category: "Matching",
    },
    {
      id: "4",
      question: "What are the different membership plans available?",
      answer:
        "We offer Free, Premium, and Elite membership plans. Premium members get unlimited profile views, direct contact details, and priority customer support. Elite members get additional features like profile highlighting and dedicated relationship manager.",
      category: "Membership",
    },
    {
      id: "5",
      question: "How can I upgrade my membership?",
      answer:
        "You can upgrade your membership anytime by going to 'My Account' > 'Membership' and selecting your preferred plan. We accept all major payment methods including credit/debit cards, UPI, and net banking.",
      category: "Membership",
    },
    {
      id: "6",
      question: "How do I contact someone I'm interested in?",
      answer:
        "You can send an interest to profiles you like. If they accept your interest, you can start messaging each other. Premium members can also view contact details directly.",
      category: "Communication",
    },
    {
      id: "7",
      question: "What should I do if I face any technical issues?",
      answer:
        "If you face any technical issues, please contact our support team through live chat, email, or phone. Our technical team is available 24/7 to help you.",
      category: "Technical Support",
    },
    {
      id: "8",
      question: "How do I verify my profile?",
      answer:
        "Profile verification involves uploading a government ID, phone number verification, and photo verification. This helps build trust and ensures authentic profiles on our platform.",
      category: "Verification",
    },
  ]

  const categories = [
    "all",
    "Getting Started",
    "Privacy & Security",
    "Matching",
    "Membership",
    "Communication",
    "Technical Support",
    "Verification",
  ]

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleSupportSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle support form submission
    alert("Thank you for contacting us! We'll get back to you within 24 hours.")
    setSupportForm({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Help & Support</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We're here to help you find your perfect match. Get answers to your questions or contact our support team.
          </p>
        </div>

        <Tabs defaultValue="faq" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="contact">Contact Us</TabsTrigger>
            <TabsTrigger value="guides">User Guides</TabsTrigger>
          </TabsList>

          <TabsContent value="faq">
            {/* Search and Filter */}
            <div className="mb-8">
              <div className="flex flex-col lg:flex-row gap-4 max-w-4xl mx-auto">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search frequently asked questions..."
                      className="pl-10 h-12"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category === "all" ? "All" : category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex items-start space-x-3">
                        <HelpCircle className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{faq.question}</h3>
                          <Badge variant="outline" className="mt-2">
                            {faq.category}
                          </Badge>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-400 pl-8">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {filteredFAQs.length === 0 && (
                <div className="text-center py-12">
                  <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No FAQs found</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Try adjusting your search or contact our support team directly.
                  </p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="contact">
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageCircle className="h-5 w-5 mr-2 text-rose-500" />
                      Live Chat Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Get instant help from our support team through live chat.
                    </p>
                    <div className="flex items-center space-x-2 mb-4">
                      <Clock className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-green-600 dark:text-green-400">Available 24/7</span>
                    </div>
                    <Button className="w-full">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Start Live Chat
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Phone className="h-5 w-5 mr-2 text-rose-500" />
                      Phone Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Speak directly with our customer support representatives.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Toll Free:</span>
                        <span className="font-medium">1800-123-4567</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">International:</span>
                        <span className="font-medium">+91-98765-43210</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Hours:</span>
                        <span className="font-medium">9 AM - 9 PM IST</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full bg-transparent">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Mail className="h-5 w-5 mr-2 text-rose-500" />
                      Email Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Send us an email and we'll respond within 24 hours.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">General Support:</span>
                        <span className="font-medium">support@mangalamshaadi.com</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Technical Issues:</span>
                        <span className="font-medium">tech@mangalamshaadi.com</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Billing:</span>
                        <span className="font-medium">billing@mangalamshaadi.com</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full bg-transparent">
                      <Mail className="h-4 w-4 mr-2" />
                      Send Email
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSupportSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <Input
                          value={supportForm.name}
                          onChange={(e) => setSupportForm((prev) => ({ ...prev, name: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <Input
                          type="email"
                          value={supportForm.email}
                          onChange={(e) => setSupportForm((prev) => ({ ...prev, email: e.target.value }))}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <Input
                        value={supportForm.subject}
                        onChange={(e) => setSupportForm((prev) => ({ ...prev, subject: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <Textarea
                        rows={6}
                        value={supportForm.message}
                        onChange={(e) => setSupportForm((prev) => ({ ...prev, message: e.target.value }))}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="guides">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: Users,
                  title: "Getting Started Guide",
                  description: "Learn how to create your profile and start your journey",
                  steps: ["Create Account", "Complete Profile", "Upload Photos", "Set Preferences"],
                },
                {
                  icon: Heart,
                  title: "Finding Your Match",
                  description: "Tips and tricks to find your perfect life partner",
                  steps: ["Use Advanced Search", "Send Interests", "Communicate Effectively", "Meet Safely"],
                },
                {
                  icon: Shield,
                  title: "Safety & Privacy",
                  description: "Stay safe while searching for your soulmate",
                  steps: ["Verify Your Profile", "Privacy Settings", "Report Suspicious Activity", "Safe Meeting Tips"],
                },
                {
                  icon: CreditCard,
                  title: "Membership Benefits",
                  description: "Understand different membership plans and their benefits",
                  steps: ["Compare Plans", "Payment Methods", "Upgrade Process", "Billing Information"],
                },
                {
                  icon: MessageCircle,
                  title: "Communication Tips",
                  description: "How to effectively communicate with potential matches",
                  steps: ["First Message", "Building Rapport", "Video Calls", "Meeting in Person"],
                },
                {
                  icon: Settings,
                  title: "Account Management",
                  description: "Manage your account settings and preferences",
                  steps: ["Profile Settings", "Privacy Controls", "Notification Preferences", "Account Security"],
                },
              ].map((guide, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <guide.icon className="h-6 w-6 mr-3 text-rose-500" />
                      {guide.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{guide.description}</p>
                    <div className="space-y-2">
                      {guide.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">{step}</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4 bg-transparent">
                      Read Full Guide
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

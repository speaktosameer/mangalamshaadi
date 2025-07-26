"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  AlertTriangle,
  Eye,
  Ban,
  CheckCircle,
  XCircle,
  MessageSquare,
  ImageIcon,
  FileText,
  Shield,
  Search,
  User,
  Flag,
} from "lucide-react"

interface ReportedContent {
  id: string
  type: "profile" | "photo" | "message" | "bio"
  reportedUserId: string
  reportedUserName: string
  reporterName: string
  reason: string
  description: string
  content: string
  imageUrl?: string
  reportedAt: string
  status: "pending" | "investigating" | "resolved" | "dismissed"
  severity: "low" | "medium" | "high" | "critical"
  moderatorNotes?: string
}

interface AutoModerationRule {
  id: string
  name: string
  type: "keyword" | "image" | "behavior"
  pattern: string
  action: "flag" | "block" | "review"
  isActive: boolean
  severity: "low" | "medium" | "high"
}

export default function ContentModeration() {
  const [reportedContent, setReportedContent] = useState<ReportedContent[]>([])
  const [autoRules, setAutoRules] = useState<AutoModerationRule[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedContent, setSelectedContent] = useState<ReportedContent | null>(null)
  const [moderatorNotes, setModeratorNotes] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterSeverity, setFilterSeverity] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setReportedContent([
        {
          id: "1",
          type: "profile",
          reportedUserId: "101",
          reportedUserName: "Rajesh Kumar",
          reporterName: "Anonymous User",
          reason: "Fake Profile",
          description: "Profile photos appear to be stock images. Multiple users have reported this profile.",
          content: "Software Engineer at Tech Corp. Looking for a life partner...",
          imageUrl: "/placeholder.svg?height=200&width=200",
          reportedAt: "2024-01-15T10:30:00Z",
          status: "pending",
          severity: "high",
        },
        {
          id: "2",
          type: "message",
          reportedUserId: "102",
          reportedUserName: "Priya Sharma",
          reporterName: "Concerned User",
          reason: "Inappropriate Content",
          description: "Sending inappropriate messages to multiple users",
          content: "Hey beautiful, want to meet tonight? I have money...",
          reportedAt: "2024-01-15T09:15:00Z",
          status: "investigating",
          severity: "critical",
        },
        {
          id: "3",
          type: "photo",
          reportedUserId: "103",
          reportedUserName: "Vikram Singh",
          reporterName: "User123",
          reason: "Inappropriate Image",
          description: "Profile photo contains inappropriate content",
          content: "Profile photo",
          imageUrl: "/placeholder.svg?height=200&width=200",
          reportedAt: "2024-01-15T08:45:00Z",
          status: "resolved",
          severity: "medium",
          moderatorNotes: "Image removed and user warned",
        },
        {
          id: "4",
          type: "bio",
          reportedUserId: "104",
          reportedUserName: "Anita Patel",
          reporterName: "Vigilant User",
          reason: "Spam Content",
          description: "Bio contains promotional content and external links",
          content: "Visit my website www.example.com for more photos! Call me at +91-9876543210",
          reportedAt: "2024-01-14T16:20:00Z",
          status: "dismissed",
          severity: "low",
          moderatorNotes: "False positive - legitimate contact information",
        },
      ])

      setAutoRules([
        {
          id: "1",
          name: "Inappropriate Language Filter",
          type: "keyword",
          pattern: "inappropriate,vulgar,offensive",
          action: "flag",
          isActive: true,
          severity: "high",
        },
        {
          id: "2",
          name: "Contact Information Detector",
          type: "keyword",
          pattern: "phone,email,whatsapp,telegram",
          action: "review",
          isActive: true,
          severity: "medium",
        },
        {
          id: "3",
          name: "Spam Link Detection",
          type: "keyword",
          pattern: "http,www,click here,visit",
          action: "block",
          isActive: true,
          severity: "medium",
        },
        {
          id: "4",
          name: "Nudity Detection",
          type: "image",
          pattern: "nudity_classifier",
          action: "block",
          isActive: true,
          severity: "critical",
        },
      ])

      setLoading(false)
    }, 1000)
  }, [])

  const handleContentAction = (contentId: string, action: "approve" | "remove" | "warn" | "ban") => {
    console.log(`${action} content ${contentId}`)
    setReportedContent((prev) =>
      prev.map((content) =>
        content.id === contentId
          ? { ...content, status: action === "approve" ? "dismissed" : "resolved", moderatorNotes }
          : content,
      ),
    )
    setSelectedContent(null)
    setModeratorNotes("")
  }

  const toggleRule = (ruleId: string) => {
    setAutoRules((prev) => prev.map((rule) => (rule.id === ruleId ? { ...rule, isActive: !rule.isActive } : rule)))
  }

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "low":
        return <Badge className="bg-blue-100 text-blue-800">Low</Badge>
      case "medium":
        return <Badge className="bg-yellow-100 text-yellow-800">Medium</Badge>
      case "high":
        return <Badge className="bg-orange-100 text-orange-800">High</Badge>
      case "critical":
        return <Badge className="bg-red-100 text-red-800">Critical</Badge>
      default:
        return <Badge>Unknown</Badge>
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
      case "investigating":
        return <Badge className="bg-blue-100 text-blue-800">Investigating</Badge>
      case "resolved":
        return <Badge className="bg-green-100 text-green-800">Resolved</Badge>
      case "dismissed":
        return <Badge className="bg-gray-100 text-gray-800">Dismissed</Badge>
      default:
        return <Badge>Unknown</Badge>
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "profile":
        return <User className="h-4 w-4" />
      case "photo":
        return <ImageIcon className="h-4 w-4" />
      case "message":
        return <MessageSquare className="h-4 w-4" />
      case "bio":
        return <FileText className="h-4 w-4" />
      default:
        return <Flag className="h-4 w-4" />
    }
  }

  const filteredContent = reportedContent.filter((content) => {
    const matchesStatus = filterStatus === "all" || content.status === filterStatus
    const matchesSeverity = filterSeverity === "all" || content.severity === filterSeverity
    const matchesSearch =
      searchQuery === "" ||
      content.reportedUserName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      content.reason.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesStatus && matchesSeverity && matchesSearch
  })

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Content Moderation</h1>
        <p className="text-gray-600 dark:text-gray-400">Monitor and moderate user-generated content</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-red-600">
                {reportedContent.filter((c) => c.status === "pending").length}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Pending Review</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">
                {reportedContent.filter((c) => c.status === "investigating").length}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Under Investigation</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">
                {reportedContent.filter((c) => c.status === "resolved").length}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Resolved Today</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-600">
                {reportedContent.filter((c) => c.severity === "critical").length}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Critical Issues</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="reports" className="space-y-6">
        <TabsList>
          <TabsTrigger value="reports">Reported Content ({reportedContent.length})</TabsTrigger>
          <TabsTrigger value="auto-moderation">Auto-Moderation Rules ({autoRules.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="reports" className="space-y-6">
          {/* Filters */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search by user name or reason..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="investigating">Investigating</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                    <SelectItem value="dismissed">Dismissed</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={filterSeverity} onValueChange={setFilterSeverity}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Filter by severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Severity</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Reported Content List */}
          <Card>
            <CardHeader>
              <CardTitle>Reported Content ({filteredContent.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {filteredContent.map((content) => (
                  <div key={content.id} className="border rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full">{getTypeIcon(content.type)}</div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{content.reportedUserName}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {content.type.charAt(0).toUpperCase() + content.type.slice(1)} • Reported by:{" "}
                            {content.reporterName}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getSeverityBadge(content.severity)}
                        {getStatusBadge(content.status)}
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-sm text-gray-900 dark:text-white">Reason:</span>
                          <Badge variant="outline">{content.reason}</Badge>
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{content.description}</p>

                        {content.type === "photo" && content.imageUrl && (
                          <div className="mt-3">
                            <img
                              src={content.imageUrl || "/placeholder.svg"}
                              alt="Reported content"
                              className="w-32 h-32 object-cover rounded-lg"
                            />
                          </div>
                        )}

                        {content.type !== "photo" && (
                          <div className="mt-3 p-3 bg-white dark:bg-gray-700 rounded border">
                            <p className="text-sm text-gray-800 dark:text-gray-200 italic">"{content.content}"</p>
                          </div>
                        )}

                        <p className="text-xs text-gray-500 mt-2">
                          Reported: {new Date(content.reportedAt).toLocaleString()}
                        </p>

                        {content.moderatorNotes && (
                          <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                            <p className="text-sm text-blue-800 dark:text-blue-200">
                              <strong>Moderator Notes:</strong> {content.moderatorNotes}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View Full Profile
                      </Button>

                      {(content.status === "pending" || content.status === "investigating") && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              size="sm"
                              className="bg-blue-600 hover:bg-blue-700"
                              onClick={() => setSelectedContent(content)}
                            >
                              <Shield className="h-4 w-4 mr-2" />
                              Take Action
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                              <DialogTitle>Moderate Content</DialogTitle>
                              <DialogDescription>
                                Take action on reported content from {content.reportedUserName}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <Label htmlFor="notes">Moderator Notes</Label>
                                <Textarea
                                  id="notes"
                                  placeholder="Add notes about your decision..."
                                  value={moderatorNotes}
                                  onChange={(e) => setModeratorNotes(e.target.value)}
                                />
                              </div>
                            </div>
                            <DialogFooter className="flex-col sm:flex-row gap-2">
                              <Button
                                variant="outline"
                                onClick={() => handleContentAction(content.id, "approve")}
                                className="bg-transparent"
                              >
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Dismiss Report
                              </Button>
                              <Button
                                variant="outline"
                                onClick={() => handleContentAction(content.id, "warn")}
                                className="text-yellow-600 border-yellow-200 hover:bg-yellow-50 bg-transparent"
                              >
                                <AlertTriangle className="h-4 w-4 mr-2" />
                                Warn User
                              </Button>
                              <Button
                                variant="outline"
                                onClick={() => handleContentAction(content.id, "remove")}
                                className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
                              >
                                <XCircle className="h-4 w-4 mr-2" />
                                Remove Content
                              </Button>
                              <Button variant="destructive" onClick={() => handleContentAction(content.id, "ban")}>
                                <Ban className="h-4 w-4 mr-2" />
                                Ban User
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      )}
                    </div>
                  </div>
                ))}

                {filteredContent.length === 0 && (
                  <div className="text-center py-12">
                    <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <p className="text-gray-500">No reported content matches your filters</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="auto-moderation" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Auto-Moderation Rules</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {autoRules.map((rule) => (
                  <div key={rule.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white">{rule.name}</h3>
                        {getSeverityBadge(rule.severity)}
                        <Badge variant="outline">{rule.type}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        Pattern:{" "}
                        <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs">{rule.pattern}</code>
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Action: <span className="font-medium">{rule.action}</span>
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Switch checked={rule.isActive} onCheckedChange={() => toggleRule(rule.id)} />
                        <Label className="text-sm">{rule.isActive ? "Active" : "Inactive"}</Label>
                      </div>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        Edit
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Button className="bg-blue-600 hover:bg-blue-700">Add New Rule</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, XCircle, Clock, Eye, AlertTriangle, ImageIcon, FileText, User } from "lucide-react"

interface PendingProfile {
  id: string
  userId: string
  userName: string
  type: "profile" | "photo" | "document"
  content: string
  submittedAt: string
  reason?: string
}

interface ReportedProfile {
  id: string
  reportedUserId: string
  reportedUserName: string
  reporterName: string
  reason: string
  description: string
  reportedAt: string
  status: "pending" | "investigating" | "resolved"
}

export default function ProfileApproval() {
  const [pendingProfiles, setPendingProfiles] = useState<PendingProfile[]>([])
  const [reportedProfiles, setReportedProfiles] = useState<ReportedProfile[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setPendingProfiles([
        {
          id: "1",
          userId: "101",
          userName: "Priya Sharma",
          type: "photo",
          content: "/placeholder.svg?height=200&width=200",
          submittedAt: "2024-01-15T10:30:00Z",
        },
        {
          id: "2",
          userId: "102",
          userName: "Rahul Gupta",
          type: "profile",
          content: "Updated profile description with new job details",
          submittedAt: "2024-01-15T09:15:00Z",
        },
        {
          id: "3",
          userId: "103",
          userName: "Anita Patel",
          type: "document",
          content: "ID verification document",
          submittedAt: "2024-01-15T08:45:00Z",
        },
      ])

      setReportedProfiles([
        {
          id: "1",
          reportedUserId: "201",
          reportedUserName: "Vikram Singh",
          reporterName: "Anonymous User",
          reason: "Fake Profile",
          description: "Profile photos seem to be stock images",
          reportedAt: "2024-01-14T16:20:00Z",
          status: "pending",
        },
        {
          id: "2",
          reportedUserId: "202",
          reportedUserName: "Sneha Reddy",
          reporterName: "Concerned User",
          reason: "Inappropriate Content",
          description: "Profile contains inappropriate language",
          reportedAt: "2024-01-14T14:10:00Z",
          status: "investigating",
        },
      ])

      setLoading(false)
    }, 1000)
  }, [])

  const handleApproval = (profileId: string, action: "approve" | "reject", reason?: string) => {
    console.log(`${action} profile ${profileId}`, reason)
    // Implement approval logic
    setPendingProfiles((prev) => prev.filter((p) => p.id !== profileId))
  }

  const handleReport = (reportId: string, action: "resolve" | "investigate") => {
    console.log(`${action} report ${reportId}`)
    // Implement report handling logic
    setReportedProfiles((prev) =>
      prev.map((r) => (r.id === reportId ? { ...r, status: action === "resolve" ? "resolved" : "investigating" } : r)),
    )
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "photo":
        return <ImageIcon className="h-4 w-4" />
      case "profile":
        return <User className="h-4 w-4" />
      case "document":
        return <FileText className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
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
      default:
        return <Badge>Unknown</Badge>
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString()
  }

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
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Profile Approval</h1>
        <p className="text-gray-600 dark:text-gray-400">Review and moderate user profiles and content</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">{pendingProfiles.length}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Pending Approvals</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-red-600">
                {reportedProfiles.filter((r) => r.status === "pending").length}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">New Reports</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">
                {reportedProfiles.filter((r) => r.status === "investigating").length}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Under Investigation</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">
                {reportedProfiles.filter((r) => r.status === "resolved").length}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Resolved Today</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="pending" className="space-y-6">
        <TabsList>
          <TabsTrigger value="pending">Pending Approvals ({pendingProfiles.length})</TabsTrigger>
          <TabsTrigger value="reports">Reported Profiles ({reportedProfiles.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Pending Approvals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {pendingProfiles.map((profile) => (
                  <div key={profile.id} className="border rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full">{getTypeIcon(profile.type)}</div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{profile.userName}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {profile.type.charAt(0).toUpperCase() + profile.type.slice(1)} Submission
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-800">
                        <Clock className="h-3 w-3 mr-1" />
                        Pending
                      </Badge>
                    </div>

                    <div className="mb-4">
                      {profile.type === "photo" ? (
                        <div className="flex items-center space-x-4">
                          <img
                            src={profile.content || "/placeholder.svg"}
                            alt="Profile submission"
                            className="w-24 h-24 object-cover rounded-lg"
                          />
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              New profile photo submitted for approval
                            </p>
                            <p className="text-xs text-gray-500 mt-1">Submitted: {formatDate(profile.submittedAt)}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                          <p className="text-sm text-gray-700 dark:text-gray-300">{profile.content}</p>
                          <p className="text-xs text-gray-500 mt-2">Submitted: {formatDate(profile.submittedAt)}</p>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View Full Profile
                      </Button>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
                          onClick={() => handleApproval(profile.id, "reject")}
                        >
                          <XCircle className="h-4 w-4 mr-2" />
                          Reject
                        </Button>
                        <Button
                          size="sm"
                          className="bg-green-600 hover:bg-green-700"
                          onClick={() => handleApproval(profile.id, "approve")}
                        >
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Approve
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}

                {pendingProfiles.length === 0 && (
                  <div className="text-center py-12">
                    <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <p className="text-gray-500">No pending approvals at the moment</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Reported Profiles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {reportedProfiles.map((report) => (
                  <div key={report.id} className="border rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-red-100 dark:bg-red-900 rounded-full">
                          <AlertTriangle className="h-4 w-4 text-red-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{report.reportedUserName}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Reported by: {report.reporterName}</p>
                        </div>
                      </div>
                      {getStatusBadge(report.status)}
                    </div>

                    <div className="mb-4">
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-sm text-gray-900 dark:text-white">Reason:</span>
                          <Badge variant="outline">{report.reason}</Badge>
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{report.description}</p>
                        <p className="text-xs text-gray-500">Reported: {formatDate(report.reportedAt)}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View Reported Profile
                      </Button>
                      <div className="flex space-x-2">
                        {report.status === "pending" && (
                          <Button size="sm" variant="outline" onClick={() => handleReport(report.id, "investigate")}>
                            Start Investigation
                          </Button>
                        )}
                        <Button
                          size="sm"
                          className="bg-green-600 hover:bg-green-700"
                          onClick={() => handleReport(report.id, "resolve")}
                        >
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Mark Resolved
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}

                {reportedProfiles.length === 0 && (
                  <div className="text-center py-12">
                    <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <p className="text-gray-500">No reported profiles at the moment</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

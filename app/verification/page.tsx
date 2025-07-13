"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, Camera, Shield, CheckCircle, Clock, AlertTriangle, Phone, Mail, FileText, X } from "lucide-react"

interface VerificationStatus {
  phone: "verified" | "pending" | "not_started"
  email: "verified" | "pending" | "not_started"
  photo: "verified" | "pending" | "rejected" | "not_started"
  document: "verified" | "pending" | "rejected" | "not_started"
}

export default function VerificationPage() {
  const [verificationStatus, setVerificationStatus] = useState<VerificationStatus>({
    phone: "verified",
    email: "verified",
    photo: "pending",
    document: "not_started",
  })
  const [uploadedFiles, setUploadedFiles] = useState<{ [key: string]: File | null }>({
    photo: null,
    document: null,
  })
  const [phoneOtp, setPhoneOtp] = useState("")
  const [emailOtp, setEmailOtp] = useState("")

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "verified":
        return (
          <Badge className="bg-green-100 text-green-800">
            <CheckCircle className="h-3 w-3 mr-1" />
            Verified
          </Badge>
        )
      case "pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">
            <Clock className="h-3 w-3 mr-1" />
            Pending
          </Badge>
        )
      case "rejected":
        return (
          <Badge className="bg-red-100 text-red-800">
            <X className="h-3 w-3 mr-1" />
            Rejected
          </Badge>
        )
      default:
        return (
          <Badge variant="outline">
            <AlertTriangle className="h-3 w-3 mr-1" />
            Not Started
          </Badge>
        )
    }
  }

  const handleFileUpload = (type: string, file: File) => {
    setUploadedFiles((prev) => ({ ...prev, [type]: file }))
    // Simulate upload and verification process
    setVerificationStatus((prev) => ({ ...prev, [type]: "pending" }))
  }

  const handlePhoneVerification = () => {
    // Simulate phone verification
    if (phoneOtp === "123456") {
      setVerificationStatus((prev) => ({ ...prev, phone: "verified" }))
    }
  }

  const handleEmailVerification = () => {
    // Simulate email verification
    if (emailOtp === "123456") {
      setVerificationStatus((prev) => ({ ...prev, email: "verified" }))
    }
  }

  const verificationProgress = Object.values(verificationStatus).filter((status) => status === "verified").length

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Profile Verification</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Verify your profile to build trust and get better matches
            </p>
          </div>

          {/* Progress */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Verification Progress</h3>
                <span className="text-sm text-gray-600 dark:text-gray-400">{verificationProgress}/4 completed</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${(verificationProgress / 4) * 100}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Complete all verifications to unlock premium features and increase profile visibility
              </p>
            </CardContent>
          </Card>

          {/* Verification Tabs */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
              <TabsTrigger value="photo">Photo</TabsTrigger>
              <TabsTrigger value="document">Document</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Phone Verification */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-5 w-5 text-blue-600" />
                        <CardTitle>Phone Verification</CardTitle>
                      </div>
                      {getStatusBadge(verificationStatus.phone)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Verify your phone number to enable secure communication
                    </p>
                    {verificationStatus.phone === "verified" ? (
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        <span className="text-sm">Phone number verified</span>
                      </div>
                    ) : (
                      <Button variant="outline" className="bg-transparent">
                        Verify Phone
                      </Button>
                    )}
                  </CardContent>
                </Card>

                {/* Email Verification */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-5 w-5 text-blue-600" />
                        <CardTitle>Email Verification</CardTitle>
                      </div>
                      {getStatusBadge(verificationStatus.email)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Verify your email address for account security
                    </p>
                    {verificationStatus.email === "verified" ? (
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        <span className="text-sm">Email address verified</span>
                      </div>
                    ) : (
                      <Button variant="outline" className="bg-transparent">
                        Verify Email
                      </Button>
                    )}
                  </CardContent>
                </Card>

                {/* Photo Verification */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Camera className="h-5 w-5 text-blue-600" />
                        <CardTitle>Photo Verification</CardTitle>
                      </div>
                      {getStatusBadge(verificationStatus.photo)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Upload a clear photo for identity verification
                    </p>
                    {verificationStatus.photo === "pending" ? (
                      <div className="flex items-center text-yellow-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span className="text-sm">Under review (24-48 hours)</span>
                      </div>
                    ) : (
                      <Button variant="outline" className="bg-transparent">
                        Upload Photo
                      </Button>
                    )}
                  </CardContent>
                </Card>

                {/* Document Verification */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <FileText className="h-5 w-5 text-blue-600" />
                        <CardTitle>Document Verification</CardTitle>
                      </div>
                      {getStatusBadge(verificationStatus.document)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Upload government ID for complete verification
                    </p>
                    <Button variant="outline" className="bg-transparent">
                      Upload Document
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="contact">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Phone Verification</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Phone Number</Label>
                      <Input value="+91 98765 43210" disabled />
                    </div>
                    {verificationStatus.phone !== "verified" && (
                      <>
                        <Button className="w-full">Send OTP</Button>
                        <div>
                          <Label>Enter OTP</Label>
                          <Input
                            placeholder="Enter 6-digit OTP"
                            value={phoneOtp}
                            onChange={(e) => setPhoneOtp(e.target.value)}
                          />
                        </div>
                        <Button onClick={handlePhoneVerification} className="w-full">
                          Verify Phone
                        </Button>
                      </>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Email Verification</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Email Address</Label>
                      <Input value="john@example.com" disabled />
                    </div>
                    {verificationStatus.email !== "verified" && (
                      <>
                        <Button className="w-full">Send Verification Email</Button>
                        <div>
                          <Label>Enter Verification Code</Label>
                          <Input
                            placeholder="Enter verification code"
                            value={emailOtp}
                            onChange={(e) => setEmailOtp(e.target.value)}
                          />
                        </div>
                        <Button onClick={handleEmailVerification} className="w-full">
                          Verify Email
                        </Button>
                      </>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="photo">
              <Card>
                <CardHeader>
                  <CardTitle>Photo Verification</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8">
                      <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Upload Your Photo</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Take a clear selfie or upload a recent photo
                      </p>
                      <div className="flex justify-center space-x-4">
                        <Button variant="outline" className="bg-transparent">
                          <Upload className="h-4 w-4 mr-2" />
                          Upload Photo
                        </Button>
                        <Button variant="outline" className="bg-transparent">
                          <Camera className="h-4 w-4 mr-2" />
                          Take Photo
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Photo Guidelines:</h4>
                    <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                      <li>• Clear, well-lit photo of your face</li>
                      <li>• No sunglasses or face coverings</li>
                      <li>• Look directly at the camera</li>
                      <li>• High resolution (minimum 300x300 pixels)</li>
                      <li>• Recent photo (taken within last 6 months)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="document">
              <Card>
                <CardHeader>
                  <CardTitle>Document Verification</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8">
                      <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Upload Government ID</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Upload a clear photo of your government-issued ID
                      </p>
                      <Button variant="outline" className="bg-transparent">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Document
                      </Button>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">Accepted Documents:</h4>
                      <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                        <li>• Aadhaar Card</li>
                        <li>• PAN Card</li>
                        <li>• Passport</li>
                        <li>• Driving License</li>
                        <li>• Voter ID</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                      <h4 className="font-medium text-yellow-900 dark:text-yellow-100 mb-2">Important Notes:</h4>
                      <ul className="text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
                        <li>• All details must be clearly visible</li>
                        <li>• Document should not be expired</li>
                        <li>• No photocopies accepted</li>
                        <li>• Processing time: 2-3 business days</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

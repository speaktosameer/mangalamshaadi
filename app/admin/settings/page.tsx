"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Globe, Mail, Shield, CreditCard, Database, Save, Upload, Download, Trash2, AlertTriangle } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface SystemSettings {
  siteName: string
  siteDescription: string
  siteUrl: string
  contactEmail: string
  supportEmail: string
  maintenanceMode: boolean
  registrationEnabled: boolean
  emailVerificationRequired: boolean
  profileApprovalRequired: boolean
  maxPhotosPerProfile: number
  minAge: number
  maxAge: number
  defaultCurrency: string
  timezone: string
}

interface EmailSettings {
  smtpHost: string
  smtpPort: string
  smtpUsername: string
  smtpPassword: string
  fromEmail: string
  fromName: string
  emailTemplates: {
    welcome: string
    verification: string
    passwordReset: string
    profileApproved: string
    profileRejected: string
  }
}

interface PaymentSettings {
  stripePublishableKey: string
  stripeSecretKey: string
  razorpayKeyId: string
  razorpayKeySecret: string
  paypalClientId: string
  paypalClientSecret: string
  currency: string
  taxRate: number
  enabledGateways: string[]
}

interface SecuritySettings {
  passwordMinLength: number
  requireSpecialChars: boolean
  requireNumbers: boolean
  requireUppercase: boolean
  sessionTimeout: number
  maxLoginAttempts: number
  lockoutDuration: number
  twoFactorEnabled: boolean
  ipWhitelist: string[]
}

export default function AdminSettings() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  const [systemSettings, setSystemSettings] = useState<SystemSettings>({
    siteName: "Mangalam Shaadi",
    siteDescription: "Find your perfect life partner",
    siteUrl: "https://mangalamshaadi.com",
    contactEmail: "contact@mangalamshaadi.com",
    supportEmail: "support@mangalamshaadi.com",
    maintenanceMode: false,
    registrationEnabled: true,
    emailVerificationRequired: true,
    profileApprovalRequired: true,
    maxPhotosPerProfile: 10,
    minAge: 18,
    maxAge: 80,
    defaultCurrency: "INR",
    timezone: "Asia/Kolkata",
  })

  const [emailSettings, setEmailSettings] = useState<EmailSettings>({
    smtpHost: "smtp.gmail.com",
    smtpPort: "587",
    smtpUsername: "",
    smtpPassword: "",
    fromEmail: "noreply@mangalamshaadi.com",
    fromName: "Mangalam Shaadi",
    emailTemplates: {
      welcome: "Welcome to Mangalam Shaadi! Please verify your email...",
      verification: "Please click the link to verify your email address...",
      passwordReset: "Click here to reset your password...",
      profileApproved: "Congratulations! Your profile has been approved...",
      profileRejected: "We're sorry, but your profile needs some changes...",
    },
  })

  const [paymentSettings, setPaymentSettings] = useState<PaymentSettings>({
    stripePublishableKey: "",
    stripeSecretKey: "",
    razorpayKeyId: "",
    razorpayKeySecret: "",
    paypalClientId: "",
    paypalClientSecret: "",
    currency: "INR",
    taxRate: 18,
    enabledGateways: ["razorpay"],
  })

  const [securitySettings, setSecuritySettings] = useState<SecuritySettings>({
    passwordMinLength: 8,
    requireSpecialChars: true,
    requireNumbers: true,
    requireUppercase: true,
    sessionTimeout: 30,
    maxLoginAttempts: 5,
    lockoutDuration: 15,
    twoFactorEnabled: false,
    ipWhitelist: [],
  })

  useEffect(() => {
    // Simulate loading settings
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  const handleSaveSettings = async (settingsType: string) => {
    setSaving(true)

    // Simulate API call
    setTimeout(() => {
      setSaving(false)
      toast({
        title: "Settings Saved",
        description: `${settingsType} settings have been updated successfully.`,
      })
    }, 1000)
  }

  const handleBackupDatabase = () => {
    toast({
      title: "Backup Started",
      description: "Database backup has been initiated. You'll receive an email when complete.",
    })
  }

  const handleRestoreDatabase = () => {
    toast({
      title: "Restore Initiated",
      description: "Database restore process has started. This may take several minutes.",
      variant: "destructive",
    })
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
          <div className="grid grid-cols-1 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-64 bg-gray-200 rounded"></div>
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
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">System Settings</h1>
        <p className="text-gray-600 dark:text-gray-400">Configure and manage your matrimonial platform</p>
      </div>

      {/* Settings Tabs */}
      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="backup">Backup</TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="h-5 w-5 mr-2" />
                Site Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="siteName">Site Name</Label>
                  <Input
                    id="siteName"
                    value={systemSettings.siteName}
                    onChange={(e) => setSystemSettings((prev) => ({ ...prev, siteName: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="siteUrl">Site URL</Label>
                  <Input
                    id="siteUrl"
                    value={systemSettings.siteUrl}
                    onChange={(e) => setSystemSettings((prev) => ({ ...prev, siteUrl: e.target.value }))}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="siteDescription">Site Description</Label>
                <Textarea
                  id="siteDescription"
                  value={systemSettings.siteDescription}
                  onChange={(e) => setSystemSettings((prev) => ({ ...prev, siteDescription: e.target.value }))}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="contactEmail">Contact Email</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    value={systemSettings.contactEmail}
                    onChange={(e) => setSystemSettings((prev) => ({ ...prev, contactEmail: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="supportEmail">Support Email</Label>
                  <Input
                    id="supportEmail"
                    type="email"
                    value={systemSettings.supportEmail}
                    onChange={(e) => setSystemSettings((prev) => ({ ...prev, supportEmail: e.target.value }))}
                  />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Platform Settings</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Maintenance Mode</Label>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Temporarily disable site access</p>
                    </div>
                    <Switch
                      checked={systemSettings.maintenanceMode}
                      onCheckedChange={(checked) =>
                        setSystemSettings((prev) => ({ ...prev, maintenanceMode: checked }))
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Registration Enabled</Label>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Allow new user registrations</p>
                    </div>
                    <Switch
                      checked={systemSettings.registrationEnabled}
                      onCheckedChange={(checked) =>
                        setSystemSettings((prev) => ({ ...prev, registrationEnabled: checked }))
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Email Verification Required</Label>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Require email verification for new users
                      </p>
                    </div>
                    <Switch
                      checked={systemSettings.emailVerificationRequired}
                      onCheckedChange={(checked) =>
                        setSystemSettings((prev) => ({ ...prev, emailVerificationRequired: checked }))
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Profile Approval Required</Label>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Manually approve new profiles</p>
                    </div>
                    <Switch
                      checked={systemSettings.profileApprovalRequired}
                      onCheckedChange={(checked) =>
                        setSystemSettings((prev) => ({ ...prev, profileApprovalRequired: checked }))
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="maxPhotos">Max Photos Per Profile</Label>
                    <Input
                      id="maxPhotos"
                      type="number"
                      value={systemSettings.maxPhotosPerProfile}
                      onChange={(e) =>
                        setSystemSettings((prev) => ({ ...prev, maxPhotosPerProfile: Number.parseInt(e.target.value) }))
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="minAge">Minimum Age</Label>
                    <Input
                      id="minAge"
                      type="number"
                      value={systemSettings.minAge}
                      onChange={(e) =>
                        setSystemSettings((prev) => ({ ...prev, minAge: Number.parseInt(e.target.value) }))
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="maxAge">Maximum Age</Label>
                    <Input
                      id="maxAge"
                      type="number"
                      value={systemSettings.maxAge}
                      onChange={(e) =>
                        setSystemSettings((prev) => ({ ...prev, maxAge: Number.parseInt(e.target.value) }))
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                  onClick={() => handleSaveSettings("General")}
                  disabled={saving}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {saving ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Email Settings */}
        <TabsContent value="email" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                SMTP Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="smtpHost">SMTP Host</Label>
                  <Input
                    id="smtpHost"
                    value={emailSettings.smtpHost}
                    onChange={(e) => setEmailSettings((prev) => ({ ...prev, smtpHost: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="smtpPort">SMTP Port</Label>
                  <Input
                    id="smtpPort"
                    value={emailSettings.smtpPort}
                    onChange={(e) => setEmailSettings((prev) => ({ ...prev, smtpPort: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="smtpUsername">SMTP Username</Label>
                  <Input
                    id="smtpUsername"
                    value={emailSettings.smtpUsername}
                    onChange={(e) => setEmailSettings((prev) => ({ ...prev, smtpUsername: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="smtpPassword">SMTP Password</Label>
                  <Input
                    id="smtpPassword"
                    type="password"
                    value={emailSettings.smtpPassword}
                    onChange={(e) => setEmailSettings((prev) => ({ ...prev, smtpPassword: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="fromEmail">From Email</Label>
                  <Input
                    id="fromEmail"
                    type="email"
                    value={emailSettings.fromEmail}
                    onChange={(e) => setEmailSettings((prev) => ({ ...prev, fromEmail: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="fromName">From Name</Label>
                  <Input
                    id="fromName"
                    value={emailSettings.fromName}
                    onChange={(e) => setEmailSettings((prev) => ({ ...prev, fromName: e.target.value }))}
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button variant="outline" className="mr-2 bg-transparent">
                  Test Connection
                </Button>
                <Button
                  onClick={() => handleSaveSettings("Email")}
                  disabled={saving}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {saving ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Email Templates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(emailSettings.emailTemplates).map(([key, template]) => (
                <div key={key}>
                  <Label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)} Template</Label>
                  <Textarea
                    id={key}
                    value={template}
                    onChange={(e) =>
                      setEmailSettings((prev) => ({
                        ...prev,
                        emailTemplates: { ...prev.emailTemplates, [key]: e.target.value },
                      }))
                    }
                    rows={3}
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Payment Settings */}
        <TabsContent value="payment" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                Payment Gateway Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Razorpay</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="razorpayKeyId">Key ID</Label>
                      <Input
                        id="razorpayKeyId"
                        value={paymentSettings.razorpayKeyId}
                        onChange={(e) => setPaymentSettings((prev) => ({ ...prev, razorpayKeyId: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="razorpayKeySecret">Key Secret</Label>
                      <Input
                        id="razorpayKeySecret"
                        type="password"
                        value={paymentSettings.razorpayKeySecret}
                        onChange={(e) => setPaymentSettings((prev) => ({ ...prev, razorpayKeySecret: e.target.value }))}
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-4">Stripe</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="stripePublishableKey">Publishable Key</Label>
                      <Input
                        id="stripePublishableKey"
                        value={paymentSettings.stripePublishableKey}
                        onChange={(e) =>
                          setPaymentSettings((prev) => ({ ...prev, stripePublishableKey: e.target.value }))
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="stripeSecretKey">Secret Key</Label>
                      <Input
                        id="stripeSecretKey"
                        type="password"
                        value={paymentSettings.stripeSecretKey}
                        onChange={(e) => setPaymentSettings((prev) => ({ ...prev, stripeSecretKey: e.target.value }))}
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="currency">Default Currency</Label>
                    <Select
                      value={paymentSettings.currency}
                      onValueChange={(value) => setPaymentSettings((prev) => ({ ...prev, currency: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="INR">INR (₹)</SelectItem>
                        <SelectItem value="USD">USD ($)</SelectItem>
                        <SelectItem value="EUR">EUR (€)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="taxRate">Tax Rate (%)</Label>
                    <Input
                      id="taxRate"
                      type="number"
                      value={paymentSettings.taxRate}
                      onChange={(e) =>
                        setPaymentSettings((prev) => ({ ...prev, taxRate: Number.parseFloat(e.target.value) }))
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                  onClick={() => handleSaveSettings("Payment")}
                  disabled={saving}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {saving ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Security Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Password Requirements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="passwordMinLength">Minimum Length</Label>
                    <Input
                      id="passwordMinLength"
                      type="number"
                      value={securitySettings.passwordMinLength}
                      onChange={(e) =>
                        setSecuritySettings((prev) => ({ ...prev, passwordMinLength: Number.parseInt(e.target.value) }))
                      }
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label>Require Special Characters</Label>
                      <Switch
                        checked={securitySettings.requireSpecialChars}
                        onCheckedChange={(checked) =>
                          setSecuritySettings((prev) => ({ ...prev, requireSpecialChars: checked }))
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Require Numbers</Label>
                      <Switch
                        checked={securitySettings.requireNumbers}
                        onCheckedChange={(checked) =>
                          setSecuritySettings((prev) => ({ ...prev, requireNumbers: checked }))
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Require Uppercase</Label>
                      <Switch
                        checked={securitySettings.requireUppercase}
                        onCheckedChange={(checked) =>
                          setSecuritySettings((prev) => ({ ...prev, requireUppercase: checked }))
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-4">Session & Login Security</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                    <Input
                      id="sessionTimeout"
                      type="number"
                      value={securitySettings.sessionTimeout}
                      onChange={(e) =>
                        setSecuritySettings((prev) => ({ ...prev, sessionTimeout: Number.parseInt(e.target.value) }))
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="maxLoginAttempts">Max Login Attempts</Label>
                    <Input
                      id="maxLoginAttempts"
                      type="number"
                      value={securitySettings.maxLoginAttempts}
                      onChange={(e) =>
                        setSecuritySettings((prev) => ({ ...prev, maxLoginAttempts: Number.parseInt(e.target.value) }))
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="lockoutDuration">Lockout Duration (minutes)</Label>
                    <Input
                      id="lockoutDuration"
                      type="number"
                      value={securitySettings.lockoutDuration}
                      onChange={(e) =>
                        setSecuritySettings((prev) => ({ ...prev, lockoutDuration: Number.parseInt(e.target.value) }))
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Enable 2FA for admin accounts</p>
                </div>
                <Switch
                  checked={securitySettings.twoFactorEnabled}
                  onCheckedChange={(checked) => setSecuritySettings((prev) => ({ ...prev, twoFactorEnabled: checked }))}
                />
              </div>

              <div className="flex justify-end">
                <Button
                  onClick={() => handleSaveSettings("Security")}
                  disabled={saving}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {saving ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Backup & Maintenance */}
        <TabsContent value="backup" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="h-5 w-5 mr-2" />
                Database Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-2 border-dashed border-gray-200 dark:border-gray-700">
                  <CardContent className="p-6 text-center">
                    <Download className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Database Backup</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Create a complete backup of your database
                    </p>
                    <Button onClick={handleBackupDatabase} className="bg-blue-600 hover:bg-blue-700">
                      <Download className="h-4 w-4 mr-2" />
                      Create Backup
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-2 border-dashed border-orange-200 dark:border-orange-700">
                  <CardContent className="p-6 text-center">
                    <Upload className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Database Restore</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Restore database from a backup file</p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="text-orange-600 border-orange-200 hover:bg-orange-50 bg-transparent"
                        >
                          <Upload className="h-4 w-4 mr-2" />
                          Restore Backup
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle className="flex items-center">
                            <AlertTriangle className="h-5 w-5 text-orange-500 mr-2" />
                            Confirm Database Restore
                          </DialogTitle>
                          <DialogDescription>
                            This action will replace all current data with the backup data. This cannot be undone.
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                          <Button variant="outline" className="bg-transparent">
                            Cancel
                          </Button>
                          <Button variant="destructive" onClick={handleRestoreDatabase}>
                            Confirm Restore
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Backups</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "backup_2024_01_15_10_30.sql", size: "45.2 MB", date: "2024-01-15 10:30:00" },
                      { name: "backup_2024_01_14_10_30.sql", size: "44.8 MB", date: "2024-01-14 10:30:00" },
                      { name: "backup_2024_01_13_10_30.sql", size: "44.1 MB", date: "2024-01-13 10:30:00" },
                    ].map((backup, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Database className="h-5 w-5 text-gray-500" />
                          <div>
                            <p className="font-medium">{backup.name}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {backup.size} • {backup.date}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm" className="bg-transparent">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

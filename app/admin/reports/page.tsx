"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts"
import { TrendingUp, Heart, Download, Eye, MessageSquare } from "lucide-react"

export default function ReportsAnalytics() {
  const [dateRange, setDateRange] = useState("30d")
  const [loading, setLoading] = useState(true)

  // Mock data for various charts
  const userGrowthData = [
    { date: "2024-01-01", users: 1200, newUsers: 45, activeUsers: 980 },
    { date: "2024-01-02", users: 1245, newUsers: 52, activeUsers: 1020 },
    { date: "2024-01-03", users: 1297, newUsers: 38, activeUsers: 1050 },
    { date: "2024-01-04", users: 1335, newUsers: 41, activeUsers: 1080 },
    { date: "2024-01-05", users: 1376, newUsers: 55, activeUsers: 1120 },
    { date: "2024-01-06", users: 1431, newUsers: 48, activeUsers: 1150 },
    { date: "2024-01-07", users: 1479, newUsers: 62, activeUsers: 1200 },
  ]

  const revenueData = [
    { month: "Jan", revenue: 45000, subscriptions: 180, avgRevenue: 250 },
    { month: "Feb", revenue: 52000, subscriptions: 220, avgRevenue: 236 },
    { month: "Mar", revenue: 48000, subscriptions: 200, avgRevenue: 240 },
    { month: "Apr", revenue: 61000, subscriptions: 250, avgRevenue: 244 },
    { month: "May", revenue: 55000, subscriptions: 230, avgRevenue: 239 },
    { month: "Jun", revenue: 67000, subscriptions: 280, avgRevenue: 239 },
  ]

  const demographicsData = [
    { ageGroup: "18-25", male: 320, female: 280 },
    { ageGroup: "26-30", male: 450, female: 520 },
    { ageGroup: "31-35", male: 380, female: 420 },
    { ageGroup: "36-40", male: 220, female: 180 },
    { ageGroup: "41+", male: 120, female: 80 },
  ]

  const locationData = [
    { name: "Mumbai", value: 450, color: "#3b82f6" },
    { name: "Delhi", value: 380, color: "#ef4444" },
    { name: "Bangalore", value: 320, color: "#10b981" },
    { name: "Chennai", value: 280, color: "#f59e0b" },
    { name: "Pune", value: 220, color: "#8b5cf6" },
    { name: "Others", value: 450, color: "#6b7280" },
  ]

  const engagementData = [
    { metric: "Profile Views", value: 15420, change: "+12%", color: "blue" },
    { metric: "Messages Sent", value: 8930, change: "+8%", color: "green" },
    { metric: "Interests Sent", value: 12450, change: "+15%", color: "purple" },
    { metric: "Success Stories", value: 156, change: "+25%", color: "pink" },
  ]

  const conversionFunnelData = [
    { stage: "Visitors", count: 10000, percentage: 100 },
    { stage: "Registrations", count: 2500, percentage: 25 },
    { stage: "Profile Complete", count: 1800, percentage: 18 },
    { stage: "Premium Upgrade", count: 450, percentage: 4.5 },
    { stage: "Success Stories", count: 156, percentage: 1.56 },
  ]

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  const getColorByMetric = (color: string) => {
    const colors = {
      blue: "text-blue-600 bg-blue-100",
      green: "text-green-600 bg-green-100",
      purple: "text-purple-600 bg-purple-100",
      pink: "text-pink-600 bg-pink-100",
    }
    return colors[color as keyof typeof colors] || "text-gray-600 bg-gray-100"
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-80 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Reports & Analytics</h1>
          <p className="text-gray-600 dark:text-gray-400">Comprehensive insights into your platform performance</p>
        </div>
        <div className="flex space-x-2">
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {engagementData.map((metric, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{metric.metric}</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{metric.value.toLocaleString()}</p>
                </div>
                <div className={`p-3 rounded-full ${getColorByMetric(metric.color)}`}>
                  {metric.metric === "Profile Views" && <Eye className="h-6 w-6" />}
                  {metric.metric === "Messages Sent" && <MessageSquare className="h-6 w-6" />}
                  {metric.metric === "Interests Sent" && <Heart className="h-6 w-6" />}
                  {metric.metric === "Success Stories" && <TrendingUp className="h-6 w-6" />}
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-sm text-green-600">{metric.change} from last period</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Analytics Tabs */}
      <Tabs defaultValue="users" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="users">User Analytics</TabsTrigger>
          <TabsTrigger value="revenue">Revenue Analytics</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
          <TabsTrigger value="conversion">Conversion Funnel</TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>User Growth Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={userGrowthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" tickFormatter={(value) => new Date(value).toLocaleDateString()} />
                    <YAxis />
                    <Tooltip labelFormatter={(value) => new Date(value).toLocaleDateString()} />
                    <Area
                      type="monotone"
                      dataKey="users"
                      stackId="1"
                      stroke="#3b82f6"
                      fill="#3b82f6"
                      fillOpacity={0.6}
                    />
                    <Area
                      type="monotone"
                      dataKey="activeUsers"
                      stackId="2"
                      stroke="#10b981"
                      fill="#10b981"
                      fillOpacity={0.6}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Daily New Registrations</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={userGrowthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" tickFormatter={(value) => new Date(value).toLocaleDateString()} />
                    <YAxis />
                    <Tooltip labelFormatter={(value) => new Date(value).toLocaleDateString()} />
                    <Bar dataKey="newUsers" fill="#f59e0b" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Revenue Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Revenue vs Subscriptions</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Bar yAxisId="left" dataKey="revenue" fill="#3b82f6" />
                    <Line yAxisId="right" type="monotone" dataKey="subscriptions" stroke="#f59e0b" strokeWidth={2} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="demographics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Age & Gender Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={demographicsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="ageGroup" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="male" stackId="a" fill="#3b82f6" />
                    <Bar dataKey="female" stackId="a" fill="#ec4899" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Geographic Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={locationData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {locationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="conversion" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Conversion Funnel</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {conversionFunnelData.map((stage, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{stage.stage}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400">{stage.count.toLocaleString()}</span>
                        <span className="text-xs text-gray-500">({stage.percentage}%)</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${stage.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

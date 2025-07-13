"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  UserPlus,
  CreditCard,
  AlertTriangle,
  CheckCircle,
  Clock,
  DollarSign,
  Eye,
  ArrowUpRight,
  Activity,
  Calendar,
} from "lucide-react"
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts"

interface DashboardStats {
  totalUsers: number
  activeUsers: number
  newRegistrations: number
  premiumUsers: number
  totalRevenue: number
  pendingApprovals: number
  reportedProfiles: number
  successStories: number
}

interface RecentActivity {
  id: string
  type: "registration" | "subscription" | "report" | "approval"
  user: string
  action: string
  timestamp: string
  status: "pending" | "completed" | "rejected"
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    activeUsers: 0,
    newRegistrations: 0,
    premiumUsers: 0,
    totalRevenue: 0,
    pendingApprovals: 0,
    reportedProfiles: 0,
    successStories: 0,
  })

  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([])
  const [loading, setLoading] = useState(true)

  // Mock data for charts
  const userGrowthData = [
    { month: "Jan", users: 1200, premium: 180, revenue: 45000 },
    { month: "Feb", users: 1350, premium: 220, revenue: 52000 },
    { month: "Mar", users: 1500, premium: 280, revenue: 48000 },
    { month: "Apr", users: 1680, premium: 320, revenue: 61000 },
    { month: "May", users: 1850, premium: 380, revenue: 55000 },
    { month: "Jun", users: 2100, premium: 450, revenue: 67000 },
  ]

  const membershipDistribution = [
    { name: "Free", value: 1650, color: "#64748b" },
    { name: "Premium", value: 380, color: "#f59e0b" },
    { name: "Elite", value: 70, color: "#8b5cf6" },
  ]

  const dailyActivity = [
    { day: "Mon", logins: 245, registrations: 12 },
    { day: "Tue", logins: 289, registrations: 18 },
    { day: "Wed", logins: 321, registrations: 15 },
    { day: "Thu", logins: 298, registrations: 22 },
    { day: "Fri", logins: 356, registrations: 28 },
    { day: "Sat", logins: 412, registrations: 35 },
    { day: "Sun", logins: 378, registrations: 31 },
  ]

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setStats({
        totalUsers: 2100,
        activeUsers: 1850,
        newRegistrations: 45,
        premiumUsers: 450,
        totalRevenue: 328000,
        pendingApprovals: 23,
        reportedProfiles: 8,
        successStories: 156,
      })

      setRecentActivity([
        {
          id: "1",
          type: "registration",
          user: "Priya Sharma",
          action: "New user registration",
          timestamp: "2 minutes ago",
          status: "completed",
        },
        {
          id: "2",
          type: "subscription",
          user: "Rahul Gupta",
          action: "Upgraded to Premium",
          timestamp: "15 minutes ago",
          status: "completed",
        },
        {
          id: "3",
          type: "approval",
          user: "Anita Patel",
          action: "Profile photo pending approval",
          timestamp: "1 hour ago",
          status: "pending",
        },
        {
          id: "4",
          type: "report",
          user: "Vikram Singh",
          action: "Profile reported by user",
          timestamp: "2 hours ago",
          status: "pending",
        },
        {
          id: "5",
          type: "subscription",
          user: "Meera Joshi",
          action: "Premium subscription expired",
          timestamp: "3 hours ago",
          status: "completed",
        },
      ])

      setLoading(false)
    }, 1000)
  }, [])

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "registration":
        return <UserPlus className="h-4 w-4" />
      case "subscription":
        return <CreditCard className="h-4 w-4" />
      case "approval":
        return <CheckCircle className="h-4 w-4" />
      case "report":
        return <AlertTriangle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Completed</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">Pending</Badge>
      case "rejected":
        return <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">Rejected</Badge>
      default:
        return <Badge>Unknown</Badge>
    }
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-6">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Welcome back! Here's what's happening with Mangalam Shaadi today.
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Last 30 days
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600"
          >
            <Eye className="h-4 w-4 mr-2" />
            View Site
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-700 dark:text-blue-300">Total Users</p>
                <p className="text-3xl font-bold text-blue-900 dark:text-blue-100">
                  {stats.totalUsers.toLocaleString()}
                </p>
                <div className="flex items-center mt-2">
                  <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-600 dark:text-green-400">+12% from last month</span>
                </div>
              </div>
              <div className="p-3 bg-blue-500 rounded-full">
                <Users className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-700 dark:text-green-300">Active Users</p>
                <p className="text-3xl font-bold text-green-900 dark:text-green-100">
                  {stats.activeUsers.toLocaleString()}
                </p>
                <div className="flex items-center mt-2">
                  <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-600 dark:text-green-400">+8% from last month</span>
                </div>
              </div>
              <div className="p-3 bg-green-500 rounded-full">
                <Activity className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-yellow-700 dark:text-yellow-300">Premium Users</p>
                <p className="text-3xl font-bold text-yellow-900 dark:text-yellow-100">{stats.premiumUsers}</p>
                <div className="flex items-center mt-2">
                  <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-600 dark:text-green-400">+25% from last month</span>
                </div>
              </div>
              <div className="p-3 bg-yellow-500 rounded-full">
                <CreditCard className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-700 dark:text-purple-300">Total Revenue</p>
                <p className="text-3xl font-bold text-purple-900 dark:text-purple-100">
                  ₹{stats.totalRevenue.toLocaleString()}
                </p>
                <div className="flex items-center mt-2">
                  <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-600 dark:text-green-400">+18% from last month</span>
                </div>
              </div>
              <div className="p-3 bg-purple-500 rounded-full">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-orange-500 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Pending Approvals</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.pendingApprovals}</p>
              </div>
              <div className="p-2 bg-orange-100 dark:bg-orange-900/20 rounded-full">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
              </div>
            </div>
            <Button size="sm" className="w-full bg-orange-500 hover:bg-orange-600">
              Review Now
            </Button>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-red-500 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Reported Profiles</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.reportedProfiles}</p>
              </div>
              <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-full">
                <AlertTriangle className="h-5 w-5 text-red-600" />
              </div>
            </div>
            <Button size="sm" className="w-full bg-red-500 hover:bg-red-600">
              Investigate
            </Button>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">New Registrations</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.newRegistrations}</p>
              </div>
              <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                <UserPlus className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <Button size="sm" className="w-full bg-blue-500 hover:bg-blue-600">
              View All
            </Button>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Success Stories</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.successStories}</p>
              </div>
              <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-full">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
            </div>
            <Button size="sm" className="w-full bg-green-500 hover:bg-green-600">
              Manage
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>User Growth & Revenue</span>
              <Badge variant="secondary">Last 6 months</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={userGrowthData}>
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="users" stroke="#3b82f6" fillOpacity={1} fill="url(#colorUsers)" />
                <Area type="monotone" dataKey="revenue" stroke="#10b981" fillOpacity={1} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Daily Activity</span>
              <Badge variant="secondary">This week</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={dailyActivity}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="logins" fill="#8b5cf6" name="Logins" />
                <Bar dataKey="registrations" fill="#f59e0b" name="Registrations" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Membership Distribution */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Membership Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={membershipDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {membershipDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {membershipDistribution.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                  <span className="text-sm font-bold">{item.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="lg:col-span-2 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Recent Activity</span>
              <Badge variant="outline">Live</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-h-80 overflow-y-auto">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-sm">
                      {getActivityIcon(activity.type)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.action}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        <span className="font-medium">{activity.user}</span> • {activity.timestamp}
                      </p>
                    </div>
                  </div>
                  {getStatusBadge(activity.status)}
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4 bg-transparent">
              View All Activity
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Search,
  MoreHorizontal,
  CreditCard,
  Calendar,
  DollarSign,
  TrendingUp,
  Users,
  RefreshCw,
  Download,
  Eye,
  Ban,
  CheckCircle,
} from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

interface Subscription {
  id: string
  userId: string
  userName: string
  userEmail: string
  plan: "premium" | "elite"
  status: "active" | "expired" | "cancelled" | "pending"
  startDate: string
  endDate: string
  amount: number
  paymentMethod: string
  transactionId: string
  autoRenew: boolean
}

export default function SubscriptionManagement() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([])
  const [filteredSubscriptions, setFilteredSubscriptions] = useState<Subscription[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [planFilter, setPlanFilter] = useState("all")

  // Mock revenue data for charts
  const revenueData = [
    { month: "Jan", revenue: 45000, subscriptions: 180 },
    { month: "Feb", revenue: 52000, subscriptions: 220 },
    { month: "Mar", revenue: 48000, subscriptions: 200 },
    { month: "Apr", revenue: 61000, subscriptions: 250 },
    { month: "May", revenue: 55000, subscriptions: 230 },
    { month: "Jun", revenue: 67000, subscriptions: 280 },
  ]

  const planDistribution = [
    { plan: "Premium", count: 380, revenue: 45600 },
    { plan: "Elite", count: 70, revenue: 21000 },
  ]

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockSubscriptions: Subscription[] = [
        {
          id: "1",
          userId: "101",
          userName: "Priya Sharma",
          userEmail: "priya.sharma@email.com",
          plan: "premium",
          status: "active",
          startDate: "2024-01-15",
          endDate: "2024-02-15",
          amount: 1999,
          paymentMethod: "Credit Card",
          transactionId: "TXN123456789",
          autoRenew: true,
        },
        {
          id: "2",
          userId: "102",
          userName: "Rahul Gupta",
          userEmail: "rahul.gupta@email.com",
          plan: "elite",
          status: "active",
          startDate: "2024-01-10",
          endDate: "2024-02-10",
          amount: 3999,
          paymentMethod: "UPI",
          transactionId: "TXN987654321",
          autoRenew: false,
        },
        {
          id: "3",
          userId: "103",
          userName: "Anita Patel",
          userEmail: "anita.patel@email.com",
          plan: "premium",
          status: "expired",
          startDate: "2023-12-15",
          endDate: "2024-01-15",
          amount: 1999,
          paymentMethod: "Debit Card",
          transactionId: "TXN456789123",
          autoRenew: false,
        },
        {
          id: "4",
          userId: "104",
          userName: "Vikram Singh",
          userEmail: "vikram.singh@email.com",
          plan: "premium",
          status: "cancelled",
          startDate: "2024-01-01",
          endDate: "2024-02-01",
          amount: 1999,
          paymentMethod: "Net Banking",
          transactionId: "TXN789123456",
          autoRenew: false,
        },
        {
          id: "5",
          userId: "105",
          userName: "Sneha Reddy",
          userEmail: "sneha.reddy@email.com",
          plan: "elite",
          status: "pending",
          startDate: "2024-01-16",
          endDate: "2024-02-16",
          amount: 3999,
          paymentMethod: "Credit Card",
          transactionId: "TXN321654987",
          autoRenew: true,
        },
      ]
      setSubscriptions(mockSubscriptions)
      setFilteredSubscriptions(mockSubscriptions)
      setLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    const filtered = subscriptions.filter((subscription) => {
      const matchesSearch =
        subscription.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        subscription.userEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
        subscription.transactionId.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesStatus = statusFilter === "all" || subscription.status === statusFilter
      const matchesPlan = planFilter === "all" || subscription.plan === planFilter

      return matchesSearch && matchesStatus && matchesPlan
    })

    setFilteredSubscriptions(filtered)
  }, [searchQuery, statusFilter, planFilter, subscriptions])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>
      case "expired":
        return <Badge className="bg-red-100 text-red-800">Expired</Badge>
      case "cancelled":
        return <Badge className="bg-gray-100 text-gray-800">Cancelled</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
      default:
        return <Badge>Unknown</Badge>
    }
  }

  const getPlanBadge = (plan: string) => {
    switch (plan) {
      case "premium":
        return <Badge className="bg-yellow-100 text-yellow-800">Premium</Badge>
      case "elite":
        return <Badge className="bg-purple-100 text-purple-800">Elite</Badge>
      default:
        return <Badge>Unknown</Badge>
    }
  }

  const handleSubscriptionAction = (subscriptionId: string, action: string) => {
    console.log(`Action: ${action} for subscription: ${subscriptionId}`)
    // Implement subscription actions here
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString()
  }

  const totalRevenue = subscriptions.reduce((sum, sub) => sum + sub.amount, 0)
  const activeSubscriptions = subscriptions.filter((sub) => sub.status === "active").length
  const expiringThisMonth = subscriptions.filter((sub) => {
    const endDate = new Date(sub.endDate)
    const now = new Date()
    return endDate.getMonth() === now.getMonth() && endDate.getFullYear() === now.getFullYear()
  }).length

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Subscription Management</h1>
          <p className="text-gray-600 dark:text-gray-400">Monitor and manage user subscriptions and payments</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button>
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Revenue</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">₹{totalRevenue.toLocaleString()}</p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-sm text-green-600">+18% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Subscriptions</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{activeSubscriptions}</p>
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-sm text-green-600">+12% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Expiring This Month</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{expiringThisMonth}</p>
              </div>
              <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-full">
                <Calendar className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-sm text-orange-600">Requires attention</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Conversion Rate</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">24.5%</p>
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                <TrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-sm text-green-600">+3% from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue & Subscriptions Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Bar yAxisId="left" dataKey="revenue" fill="#10b981" />
                <Line yAxisId="right" type="monotone" dataKey="subscriptions" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Plan Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={planDistribution}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="plan" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#f59e0b" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search by name, email, or transaction ID"
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="expired">Expired</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>
            <Select value={planFilter} onValueChange={setPlanFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Plans</SelectItem>
                <SelectItem value="premium">Premium</SelectItem>
                <SelectItem value="elite">Elite</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Subscriptions Table */}
      <Card>
        <CardHeader>
          <CardTitle>Subscriptions ({filteredSubscriptions.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="animate-pulse flex space-x-4">
                  <div className="rounded-full bg-gray-200 h-10 w-10"></div>
                  <div className="flex-1 space-y-2 py-1">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Period</TableHead>
                  <TableHead>Payment Method</TableHead>
                  <TableHead>Auto Renew</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSubscriptions.map((subscription) => (
                  <TableRow key={subscription.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{subscription.userName}</p>
                        <p className="text-sm text-gray-500">{subscription.userEmail}</p>
                      </div>
                    </TableCell>
                    <TableCell>{getPlanBadge(subscription.plan)}</TableCell>
                    <TableCell>{getStatusBadge(subscription.status)}</TableCell>
                    <TableCell>
                      <span className="font-medium">₹{subscription.amount.toLocaleString()}</span>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <p>{formatDate(subscription.startDate)}</p>
                        <p className="text-gray-500">to {formatDate(subscription.endDate)}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <CreditCard className="h-4 w-4 mr-2 text-gray-400" />
                        {subscription.paymentMethod}
                      </div>
                    </TableCell>
                    <TableCell>
                      {subscription.autoRenew ? (
                        <Badge className="bg-green-100 text-green-800">Yes</Badge>
                      ) : (
                        <Badge variant="outline">No</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleSubscriptionAction(subscription.id, "view")}>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          {subscription.status === "active" && (
                            <DropdownMenuItem onClick={() => handleSubscriptionAction(subscription.id, "cancel")}>
                              <Ban className="mr-2 h-4 w-4" />
                              Cancel Subscription
                            </DropdownMenuItem>
                          )}
                          {subscription.status === "expired" && (
                            <DropdownMenuItem onClick={() => handleSubscriptionAction(subscription.id, "renew")}>
                              <CheckCircle className="mr-2 h-4 w-4" />
                              Renew Subscription
                            </DropdownMenuItem>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}

          {filteredSubscriptions.length === 0 && !loading && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-4">No subscriptions found</p>
              <Button variant="outline">Clear Filters</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

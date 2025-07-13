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
  Eye,
  Edit,
  Ban,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Download,
  RefreshCw,
} from "lucide-react"

interface User {
  id: string
  name: string
  email: string
  phone: string
  age: number
  location: string
  joinDate: string
  lastActive: string
  status: "active" | "inactive" | "suspended" | "pending"
  membership: "free" | "premium" | "elite"
  isVerified: boolean
  profileComplete: number
}

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>([])
  const [filteredUsers, setFilteredUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [membershipFilter, setMembershipFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage] = useState(10)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockUsers: User[] = [
        {
          id: "1",
          name: "Priya Sharma",
          email: "priya.sharma@email.com",
          phone: "+91 98765 43210",
          age: 26,
          location: "Mumbai, Maharashtra",
          joinDate: "2024-01-15",
          lastActive: "2 hours ago",
          status: "active",
          membership: "premium",
          isVerified: true,
          profileComplete: 95,
        },
        {
          id: "2",
          name: "Rahul Gupta",
          email: "rahul.gupta@email.com",
          phone: "+91 87654 32109",
          age: 29,
          location: "Delhi, India",
          joinDate: "2024-01-10",
          lastActive: "1 day ago",
          status: "active",
          membership: "free",
          isVerified: false,
          profileComplete: 70,
        },
        {
          id: "3",
          name: "Anita Patel",
          email: "anita.patel@email.com",
          phone: "+91 76543 21098",
          age: 24,
          location: "Bangalore, Karnataka",
          joinDate: "2024-01-08",
          lastActive: "Online now",
          status: "active",
          membership: "elite",
          isVerified: true,
          profileComplete: 100,
        },
        {
          id: "4",
          name: "Vikram Singh",
          email: "vikram.singh@email.com",
          phone: "+91 65432 10987",
          age: 31,
          location: "Pune, Maharashtra",
          joinDate: "2024-01-05",
          lastActive: "3 days ago",
          status: "suspended",
          membership: "free",
          isVerified: false,
          profileComplete: 45,
        },
        {
          id: "5",
          name: "Sneha Reddy",
          email: "sneha.reddy@email.com",
          phone: "+91 54321 09876",
          age: 27,
          location: "Hyderabad, Telangana",
          joinDate: "2024-01-03",
          lastActive: "5 hours ago",
          status: "pending",
          membership: "free",
          isVerified: false,
          profileComplete: 30,
        },
      ]
      setUsers(mockUsers)
      setFilteredUsers(mockUsers)
      setLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    const filtered = users.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.phone.includes(searchQuery)

      const matchesStatus = statusFilter === "all" || user.status === statusFilter
      const matchesMembership = membershipFilter === "all" || user.membership === membershipFilter

      return matchesSearch && matchesStatus && matchesMembership
    })

    setFilteredUsers(filtered)
    setCurrentPage(1)
  }, [searchQuery, statusFilter, membershipFilter, users])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>
      case "inactive":
        return <Badge className="bg-gray-100 text-gray-800">Inactive</Badge>
      case "suspended":
        return <Badge className="bg-red-100 text-red-800">Suspended</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
      default:
        return <Badge>Unknown</Badge>
    }
  }

  const getMembershipBadge = (membership: string) => {
    switch (membership) {
      case "free":
        return <Badge variant="outline">Free</Badge>
      case "premium":
        return <Badge className="bg-yellow-100 text-yellow-800">Premium</Badge>
      case "elite":
        return <Badge className="bg-purple-100 text-purple-800">Elite</Badge>
      default:
        return <Badge>Unknown</Badge>
    }
  }

  const handleUserAction = (userId: string, action: string) => {
    console.log(`Action: ${action} for user: ${userId}`)
    // Implement user actions here
  }

  // Pagination
  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser)
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage)

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">User Management</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage and monitor all registered users</p>
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
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{users.length}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Users</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">{users.filter((u) => u.status === "active").length}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Active Users</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">
                {users.filter((u) => u.membership !== "free").length}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Premium Users</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">{users.filter((u) => u.isVerified).length}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Verified Users</p>
            </div>
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
                  placeholder="Search by name, email, or phone"
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
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>
            <Select value={membershipFilter} onValueChange={setMembershipFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by membership" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Memberships</SelectItem>
                <SelectItem value="free">Free</SelectItem>
                <SelectItem value="premium">Premium</SelectItem>
                <SelectItem value="elite">Elite</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>Users ({filteredUsers.length})</CardTitle>
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
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Membership</TableHead>
                    <TableHead>Profile</TableHead>
                    <TableHead>Last Active</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-medium">{user.name.charAt(0)}</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">{user.name}</p>
                            <p className="text-sm text-gray-500">Age: {user.age}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center text-sm">
                            <Mail className="h-3 w-3 mr-1 text-gray-400" />
                            {user.email}
                          </div>
                          <div className="flex items-center text-sm">
                            <Phone className="h-3 w-3 mr-1 text-gray-400" />
                            {user.phone}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center text-sm">
                          <MapPin className="h-3 w-3 mr-1 text-gray-400" />
                          {user.location}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          {getStatusBadge(user.status)}
                          {user.isVerified && <CheckCircle className="h-4 w-4 text-blue-500" title="Verified" />}
                        </div>
                      </TableCell>
                      <TableCell>{getMembershipBadge(user.membership)}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${user.profileComplete}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600">{user.profileComplete}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm text-gray-600">{user.lastActive}</span>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => handleUserAction(user.id, "view")}>
                              <Eye className="mr-2 h-4 w-4" />
                              View Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleUserAction(user.id, "edit")}>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit User
                            </DropdownMenuItem>
                            {user.status === "active" ? (
                              <DropdownMenuItem onClick={() => handleUserAction(user.id, "suspend")}>
                                <Ban className="mr-2 h-4 w-4" />
                                Suspend User
                              </DropdownMenuItem>
                            ) : (
                              <DropdownMenuItem onClick={() => handleUserAction(user.id, "activate")}>
                                <CheckCircle className="mr-2 h-4 w-4" />
                                Activate User
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Pagination */}
              <div className="flex items-center justify-between mt-6">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Showing {indexOfFirstUser + 1} to {Math.min(indexOfLastUser, filteredUsers.length)} of{" "}
                  {filteredUsers.length} users
                </p>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  {[...Array(totalPages)].map((_, i) => (
                    <Button
                      key={i}
                      variant={currentPage === i + 1 ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </Button>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { CreditCard, Smartphone, Building, Shield, Check, Crown, Zap, ArrowLeft, Lock } from "lucide-react"
import Link from "next/link"

interface Plan {
  id: string
  name: string
  price: number
  originalPrice: number
  duration: string
  icon: React.ElementType
  color: string
  features: string[]
  isPopular?: boolean
}

export default function PaymentPage() {
  const [selectedPlan, setSelectedPlan] = useState("premium")
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [billingCycle, setBillingCycle] = useState("monthly")
  const [isProcessing, setIsProcessing] = useState(false)
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    upiId: "",
    agreeToTerms: false,
  })

  const plans: Plan[] = [
    {
      id: "premium",
      name: "Premium",
      price: billingCycle === "monthly" ? 1999 : 19999,
      originalPrice: billingCycle === "monthly" ? 2999 : 29999,
      duration: billingCycle === "monthly" ? "per month" : "per year",
      icon: Crown,
      color: "text-yellow-500",
      isPopular: true,
      features: [
        "Unlimited interests",
        "Advanced search filters",
        "View all contact details",
        "Priority customer support",
        "Profile highlighting",
        "See who viewed your profile",
      ],
    },
    {
      id: "elite",
      name: "Elite",
      price: billingCycle === "monthly" ? 3999 : 39999,
      originalPrice: billingCycle === "monthly" ? 5999 : 59999,
      duration: billingCycle === "monthly" ? "per year" : "per year",
      icon: Zap,
      color: "text-purple-500",
      features: [
        "All Premium features",
        "Dedicated relationship manager",
        "Profile verification",
        "Exclusive elite profiles",
        "Personalized matchmaking",
        "Video call feature",
        "Background verification assistance",
      ],
    },
  ]

  const selectedPlanData = plans.find((plan) => plan.id === selectedPlan)

  const handlePayment = async () => {
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      if (paymentMethod === "razorpay") {
        // Initialize Razorpay
        const options = {
          key: "rzp_test_1234567890", // Replace with your Razorpay key
          amount: selectedPlanData ? selectedPlanData.price * 100 : 0, // Amount in paise
          currency: "INR",
          name: "Perfect Match",
          description: `${selectedPlanData?.name} Membership`,
          image: "/logo.png",
          handler: (response: any) => {
            alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`)
            setIsProcessing(false)
          },
          prefill: {
            name: "John Doe",
            email: "john@example.com",
            contact: "9999999999",
          },
          theme: {
            color: "#f43f5e",
          },
        }

        // @ts-ignore
        const rzp = new window.Razorpay(options)
        rzp.open()
      } else {
        // Simulate other payment methods
        alert("Payment successful!")
        setIsProcessing(false)
      }
    }, 2000)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-6">
          <Button variant="outline" asChild>
            <Link href="/membership">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Plans
            </Link>
          </Button>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Complete Your Purchase</h1>
            <p className="text-gray-600 dark:text-gray-400">Secure payment powered by industry-leading encryption</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Plan Selection */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Select Plan</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Billing Toggle */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="inline-flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                      <button
                        onClick={() => setBillingCycle("monthly")}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                          billingCycle === "monthly"
                            ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow"
                            : "text-gray-600 dark:text-gray-400"
                        }`}
                      >
                        Monthly
                      </button>
                      <button
                        onClick={() => setBillingCycle("yearly")}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                          billingCycle === "yearly"
                            ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow"
                            : "text-gray-600 dark:text-gray-400"
                        }`}
                      >
                        Yearly
                        <Badge className="ml-2 bg-green-500 text-white text-xs">Save 33%</Badge>
                      </button>
                    </div>
                  </div>

                  <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan}>
                    {plans.map((plan) => (
                      <div key={plan.id} className="relative">
                        <RadioGroupItem value={plan.id} id={plan.id} className="sr-only" />
                        <Label
                          htmlFor={plan.id}
                          className={`block p-4 border rounded-lg cursor-pointer transition-all ${
                            selectedPlan === plan.id
                              ? "border-rose-500 bg-rose-50 dark:bg-rose-900/20"
                              : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <plan.icon className={`h-6 w-6 ${plan.color}`} />
                              <div>
                                <div className="flex items-center space-x-2">
                                  <span className="font-semibold text-gray-900 dark:text-white">{plan.name}</span>
                                  {plan.isPopular && <Badge className="bg-rose-500 text-white text-xs">Popular</Badge>}
                                </div>
                                <div className="flex items-center space-x-2 mt-1">
                                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                                    ₹{plan.price.toLocaleString()}
                                  </span>
                                  <span className="text-sm text-gray-500 line-through">
                                    ₹{plan.originalPrice.toLocaleString()}
                                  </span>
                                  <span className="text-sm text-gray-600 dark:text-gray-400">{plan.duration}</span>
                                </div>
                              </div>
                            </div>
                            {selectedPlan === plan.id && (
                              <div className="w-5 h-5 bg-rose-500 rounded-full flex items-center justify-center">
                                <Check className="h-3 w-3 text-white" />
                              </div>
                            )}
                          </div>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Payment Methods */}
              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex items-center space-x-2 cursor-pointer">
                          <CreditCard className="h-4 w-4" />
                          <span>Credit/Debit Card</span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="upi" id="upi" />
                        <Label htmlFor="upi" className="flex items-center space-x-2 cursor-pointer">
                          <Smartphone className="h-4 w-4" />
                          <span>UPI</span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="netbanking" id="netbanking" />
                        <Label htmlFor="netbanking" className="flex items-center space-x-2 cursor-pointer">
                          <Building className="h-4 w-4" />
                          <span>Net Banking</span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="razorpay" id="razorpay" />
                        <Label htmlFor="razorpay" className="flex items-center space-x-2 cursor-pointer">
                          <Shield className="h-4 w-4" />
                          <span>Razorpay (All Methods)</span>
                          <Badge className="bg-blue-100 text-blue-800 text-xs">Recommended</Badge>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>

                  {/* Payment Form */}
                  {paymentMethod === "card" && (
                    <div className="mt-6 space-y-4">
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={formData.cardNumber}
                          onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">Expiry Date</Label>
                          <Input
                            id="expiryDate"
                            placeholder="MM/YY"
                            value={formData.expiryDate}
                            onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            id="cvv"
                            placeholder="123"
                            value={formData.cvv}
                            onChange={(e) => handleInputChange("cvv", e.target.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="cardholderName">Cardholder Name</Label>
                        <Input
                          id="cardholderName"
                          placeholder="John Doe"
                          value={formData.cardholderName}
                          onChange={(e) => handleInputChange("cardholderName", e.target.value)}
                        />
                      </div>
                    </div>
                  )}

                  {paymentMethod === "upi" && (
                    <div className="mt-6">
                      <Label htmlFor="upiId">UPI ID</Label>
                      <Input
                        id="upiId"
                        placeholder="yourname@paytm"
                        value={formData.upiId}
                        onChange={(e) => handleInputChange("upiId", e.target.value)}
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedPlanData && (
                    <>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <selectedPlanData.icon className={`h-5 w-5 ${selectedPlanData.color}`} />
                          <span className="font-medium">{selectedPlanData.name} Plan</span>
                        </div>
                        <span className="font-medium">₹{selectedPlanData.price.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                        <span>Duration</span>
                        <span>{selectedPlanData.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm text-green-600">
                        <span>Discount</span>
                        <span>-₹{(selectedPlanData.originalPrice - selectedPlanData.price).toLocaleString()}</span>
                      </div>
                      <div className="border-t pt-4">
                        <div className="flex justify-between font-semibold text-lg">
                          <span>Total</span>
                          <span>₹{selectedPlanData.price.toLocaleString()}</span>
                        </div>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle>What's Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {selectedPlanData?.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Security Info */}
              <Card className="border-green-200 bg-green-50 dark:bg-green-900/20">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Lock className="h-4 w-4 text-green-600" />
                    <span className="font-medium text-green-800 dark:text-green-200">Secure Payment</span>
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Your payment information is encrypted and secure. We never store your card details.
                  </p>
                </CardContent>
              </Card>

              {/* Terms and Payment */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                  />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the{" "}
                    <Link href="/terms" className="text-rose-500 hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-rose-500 hover:underline">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>

                <Button
                  className="w-full"
                  size="lg"
                  onClick={handlePayment}
                  disabled={!formData.agreeToTerms || isProcessing}
                >
                  {isProcessing ? (
                    "Processing..."
                  ) : (
                    <>
                      <Lock className="h-4 w-4 mr-2" />
                      Pay ₹{selectedPlanData?.price.toLocaleString()}
                    </>
                  )}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By clicking "Pay", you authorize Perfect Match to charge your payment method.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

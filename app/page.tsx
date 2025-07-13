import { Suspense } from "react"
import HeroSection from "@/components/hero-section"
import FeaturedProfiles from "@/components/featured-profiles"
import SuccessStories from "@/components/success-stories"
import MembershipPlans from "@/components/membership-plans"
import TestimonialsSlider from "@/components/testimonials-slider"
import WhatsAppFloat from "@/components/whatsapp-float"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Suspense fallback={<div className="h-64 animate-pulse bg-gray-100" />}>
        <FeaturedProfiles />
      </Suspense>
      <SuccessStories />
      <MembershipPlans />
      <TestimonialsSlider />
      <WhatsAppFloat />
    </div>
  )
}

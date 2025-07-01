"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar } from "@/components/ui/avatar"
import { Check, Star, BarChart3, Video, Dumbbell, Target, TrendingUp, Users, Zap, Shield, Clock } from "lucide-react"
import { useEffect, useState } from "react"

export default function Component() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Dynamic Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/10 backdrop-blur-md border-b border-white/20" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/raw-removebg-preview-f7sl5aIzuaCbtckU2Asw2HPQ3gOUth.png"
            alt="DASH Logo"
            className="h-16 -my-4"
          />
          <Button
            className={`rounded-full px-6 py-2 transition-all duration-300 ${
              isScrolled
                ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg"
                : "bg-white text-slate-800 hover:bg-gray-100"
            }`}
            asChild
          >
            <a href="https://track-talent-cmosier27.replit.app/" target="_blank" rel="noopener noreferrer">
              Try Now
            </a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-700 via-blue-800 via-indigo-900 to-purple-900 text-white overflow-hidden">
        {/* Background runner image - translucent */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('/images/sprinter.jpg')`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        ></div>

        {/* Additional gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-blue-900/70 to-purple-900/80"></div>

        {/* Main hero content */}
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center min-h-screen text-center pt-20">
          <Badge className="mb-8 bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm">
            🏃‍♂️ Empowering the next generation of runners
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Train Smarter, Jump
            <br />
            Farther, <span className="text-yellow-400">Sprint Faster</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl leading-relaxed">
            DASH gives runners AI-powered coaching that breaks down your
            <br />
            form, tracks progress, and helps you hit your goals faster.
          </p>

          <Button
            size="lg"
            className="text-lg px-8 py-4 bg-white text-slate-800 hover:bg-gray-100 rounded-full mb-16"
            asChild
          >
            <a href="https://track-talent-cmosier27.replit.app/" target="_blank" rel="noopener noreferrer">
              Upload Now
            </a>
          </Button>

          {/* Bottom stats */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
            <div className="text-white/90">
              <div className="text-lg font-semibold">0.3s faster on average</div>
            </div>
            <div className="text-white/90">
              <div className="text-lg font-semibold">First analysis FREE</div>
            </div>
            <div className="text-white/90">
              <div className="text-lg font-semibold">Just $5.99/month</div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Feedback Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Real Feedback. Real Results.</h2>
            <p className="text-lg text-slate-600">
              Here's the kind of powerful, personalized insights DASH gives athletes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white border-0 shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-slate-900">
                    Precision Feedback, Backed by Biomechanics
                  </h3>
                  <p className="text-slate-600 text-sm">
                    DASH analyzes joint angles and movement patterns frame-by-frame to give targeted feedback — no
                    fluff, just facts that help you improve fast.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-white border-0 shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-slate-900">
                    Smart Exercise Suggestions for Speed &amp; Strength
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Whether you're lacking explosiveness or control, DASH recommends strength and speed exercises
                    tailored to your weaknesses.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-white border-0 shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-slate-900">
                    Drill Recommendations That Fix, Not Just Fill
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Receive custom drills designed to correct specific issues in your form, from hip drive to arm swing,
                    so you train with purpose.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          {/* Feedback Examples */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="/images/feedback-example-1.jpeg"
                alt="DASH feedback showing quick ratings and detailed technical analysis"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="/images/feedback-example-2.jpeg"
                alt="DASH feedback with exercise recommendations and landing practice tips"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="/images/feedback-example-3.jpeg"
                alt="DASH drill suggestions with professional athlete references"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="text-center mt-8 mb-8">
            <p className="text-sm text-slate-500 italic">Real feedback examples from DASH's AI coaching system</p>
          </div>
          <div className="text-center">
            <p className="text-slate-600 italic">You don't need more effort. You need the right direction.</p>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">See DASH in Action</h2>
            <p className="text-lg text-slate-600">
              Get a preview of the intuitive interface that's helping athletes worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Simple Video Upload</h3>
              <p className="text-slate-600 mb-6">
                Upload your training videos in seconds with our streamlined interface. Just drag and drop your video,
                and our AI gets to work analyzing your technique immediately.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-slate-700">Supports all major video formats</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-slate-700">Quick 1-minute maximum uploads</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-slate-700">Instant processing and analysis</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/upla.jpg-K2BsvJNfD0clGTgoUDK59Ug47XESBe.jpeg"
                  alt="DASH app upload interface showing video requirements"
                  className="max-w-xs rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
            <div className="flex justify-center order-2 md:order-1">
              <div className="relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/submissi.jpg-MqxYf8tOvMKy7oc0V2bqR4L7uB077O.jpeg"
                  alt="DASH app dashboard showing submission history and feedback status"
                  className="max-w-xs rounded-3xl shadow-2xl"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Track Your Progress</h3>
              <p className="text-slate-600 mb-6">
                Monitor your improvement journey with detailed analytics and feedback history. See exactly how many
                submissions you've made and track your performance gains over time.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-slate-700">Complete submission history</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-slate-700">Real-time feedback status</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-slate-700">Performance analytics dashboard</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">DASH — Your Complete Training Analysis Platform</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Start with our powerful web app for instant video analysis and feedback.
              <br />
              <span className="font-semibold text-indigo-600">Coming Soon:</span> Full AI-powered mobile app on iOS &
              Android with advanced coaching features.
              <br />
              <span className="italic">Get started today and be first in line for our mobile launch.</span>
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900">Biomechanical Analysis</h3>
              <p className="text-slate-600 text-sm">
                Advanced AI analyzes your form and identifies areas for improvement in real-time.
              </p>
            </Card>

            <Card className="bg-white border-0 shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900">Form Intelligence Detector</h3>
              <p className="text-slate-600 text-sm">
                Detects subtle form issues that even experienced coaches might miss.
              </p>
            </Card>

            <Card className="bg-white border-0 shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Video className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900">Instant Feedback Loop</h3>
              <p className="text-slate-600 text-sm">
                Get immediate feedback on your technique with actionable improvement suggestions.
              </p>
            </Card>

            <Card className="bg-white border-0 shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900">Progress Tracking Insights</h3>
              <p className="text-slate-600 text-sm">
                Track your improvements over time with detailed analytics and progress reports.
              </p>
            </Card>

            <Card className="bg-white border-0 shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900">Pre-sprint Competition Prep</h3>
              <p className="text-slate-600 text-sm">
                Specialized training protocols to peak at the right time for competitions.
              </p>
            </Card>

            <Card className="bg-white border-0 shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Dumbbell className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900">Daily Micro-Coaching Prompts</h3>
              <p className="text-slate-600 text-sm">
                Small daily improvements that compound into major performance gains.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience DASH?</h2>
          <p className="text-lg mb-6 opacity-90">
            Join thousands of athletes already using DASH to unlock their potential.
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-4 bg-white text-indigo-600 hover:bg-gray-100 rounded-full"
            asChild
          >
            <a href="https://track-talent-cmosier27.replit.app/" target="_blank" rel="noopener noreferrer">
              Try DASH Now
            </a>
          </Button>
        </div>
      </section>

      {/* Real Athletes Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Real Athletes, Real Results</h2>
            <p className="text-lg text-slate-600">
              See how DASH is helping athletes unlock their potential faster than ever.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                name: "Marcus J.",
                role: "High School Sprinter",
                improvement: "Improved first 10m split by 0.08s in 4 weeks",
                content:
                  "In just a month, I finally fixed my block start. The form analysis showed me exactly where I was hesitating off the line.",
                rating: 5,
                avatar: "MJ",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-1615204938093-254d696c3104-xm7xu2VQuv83oJVokDlhV3K7QF1rFK.avif",
              },
              {
                name: "Sarah K.",
                role: "College Distance Runner",
                improvement: "Dropped 10s off her 5K PR after 3 weeks of structured training",
                content:
                  "I have been stuck at the same 5K time for months — the personalized feedback helped me shave off 10 seconds and improve my pacing.",
                rating: 5,
                avatar: "SK",
                image: "/images/sarah-testimonial.avif",
              },
              {
                name: "David R.",
                role: "Weekend Warrior",
                improvement: " Reduced stride imbalance by 12% using video feedback",
                content:
                  "I did not think an app could really help casual runners like me, but Dash showed me where my stride was off. I feel smoother and less sore after runs now.",
                rating: 5,
                avatar: "DR",
                image: "/images/david-testimonial.avif",
              },
              {
                name: "Emma L.",
                role: "Track & Field Athlete",
                improvement: "Cut 0.2s off her 100m hurdles time in under a month",
                content:
                  "The biomechanical analysis helped me clean up my form over hurdles. My coach even noticed the improvement — I am way more consistent now",
                rating: 5,
                avatar: "EL",
                image: "/images/emma-testimonial.avif",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <Avatar className="w-16 h-16">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sm text-slate-900">{testimonial.name}</div>
                    <div className="text-xs text-slate-600">{testimonial.role}</div>
                    <div className="text-xs text-indigo-600 font-medium">{testimonial.improvement}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">1,200+</div>
              <div className="text-slate-600">Athletes Coached</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">0.3s</div>
              <div className="text-slate-600">Average Time Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">12cm</div>
              <div className="text-slate-600">Average Jump Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">80s</div>
              <div className="text-slate-600">Analysis Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Protection Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Your Investment is 100% Protected</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-0 shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3 text-slate-900">Risk-Free Performance Guarantee</h3>
                  <p className="text-slate-600">
                    We guarantee you'll see measurable improvements in your performance within 30 days, or we'll refund
                    every penny. No questions asked.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-white border-0 shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3 text-slate-900">30-Day Improvement Promise</h3>
                  <p className="text-slate-600">
                    If you don't see improvements in your speed, form, or endurance within 30 days, we'll give you a
                    full refund and let you keep all the training materials.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Your First 30 Days Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Your First 30 Days with DASH</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-indigo-600" />
                </div>
                <CardTitle className="text-lg text-slate-900">Get Your Full Analysis</CardTitle>
                <CardDescription className="text-sm text-slate-600">
                  Complete biomechanical analysis of your running form and technique
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Video className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-lg text-slate-900">Highlights & Insights</CardTitle>
                <CardDescription className="text-sm text-slate-600">
                  Video breakdowns and personalized insights from your training sessions
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Dumbbell className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg text-slate-900">Workout Programs</CardTitle>
                <CardDescription className="text-sm text-slate-600">
                  Customized training programs designed for your specific goals
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* By Day 30 Section */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4 text-slate-900">By Day 30, You'll:</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Check className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-slate-900">Know Your Weaknesses</h4>
                  <p className="text-slate-600 text-sm">
                    Know exactly which muscles you need to work on — and how to do it
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-white border-0 shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Check className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-slate-900">Tailored Feedback Loop</h4>
                  <p className="text-slate-600 text-sm">
                    Have a tailored feedback loop you can use to improve anywhere, anytime
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-white border-0 shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Check className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-slate-900">Measurable Improvements</h4>
                  <p className="text-slate-600 text-sm">
                    See measurable improvements in your speed, form, and endurance
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Everything you need to know about DASH</p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-2" className="bg-white rounded-xl border-0 shadow-sm px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6 text-slate-900">
                What sports does DASH support?
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-slate-600">
                Currently, DASH specializes in track and field events including sprinting, distance running, jumping,
                and throwing events. We're expanding to include more sports based on user demand.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-xl border-0 shadow-sm px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6 text-slate-900">
                How quickly will I see improvements?
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-slate-600">
                Most athletes see noticeable improvements in their form within the first week, with measurable
                performance gains typically occurring within 2-4 weeks of consistent use and following DASH's
                recommendations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-xl border-0 shadow-sm px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6 text-slate-900">
                Can I use DASH alongside my current coach?
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-slate-600">
                Many of our users work with human coaches and use DASH as a supplementary tool for additional analysis
                and feedback between coaching sessions. DASH provides objective data that can enhance your coach's
                insights.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-xl border-0 shadow-sm px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6 text-slate-900">
                Is this suitable for beginners or just advanced athletes?
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-slate-600">
                DASH is designed for athletes of all levels. Whether you're just starting out or competing at an elite
                level, our AI adapts its analysis and recommendations to your current skill level and goals.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-xl border-0 shadow-sm px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6 text-slate-900">
                What if I'm not satisfied with the results?
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-slate-600">
                We offer a 30-day money-back guarantee. If you don't see improvements in your performance within 30
                days, we'll refund your entire investment, no questions asked.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-4">Ready to Unlock Your Potential?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of athletes who are already training smarter and achieving better results with AI-powered
            coaching.
          </p>
          <div className="mb-8">
            <Button
              size="lg"
              className="text-lg px-8 py-4 bg-white text-indigo-600 hover:bg-gray-100 rounded-full"
              asChild
            >
              <a href="https://track-talent-cmosier27.replit.app/" target="_blank" rel="noopener noreferrer">
                Try DASH Now
              </a>
            </Button>
          </div>
          <p className="text-sm opacity-80">30-day money-back guarantee • No commitment • Join 1,200+ athletes</p>
        </div>
      </section>

      {/* Footer Bar */}
      <footer className="bg-slate-900 text-white py-6 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/raw-removebg-preview-f7sl5aIzuaCbtckU2Asw2HPQ3gOUth.png"
              alt="DASH Logo"
              className="h-16"
            />
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/runwithdashapp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.689-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @runwithdashapp
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

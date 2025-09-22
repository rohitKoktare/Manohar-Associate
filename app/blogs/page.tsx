"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Home, Heart, Building, TrendingUp, Calendar, User, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const blogPosts = [
    {
      title: "Understanding Property Title Disputes in Maharashtra",
      excerpt:
        "Property title disputes are among the most complex legal matters in Maharashtra. This comprehensive guide explores the common causes, legal remedies, and preventive measures for property title disputes.",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Property Law",
      author: "Advocate Arvind Manor",
      slug: "property-title-disputes-maharashtra",
      icon: Home,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Key Steps to Protect Yourself Legally During Divorce",
      excerpt:
        "Divorce proceedings can be emotionally and financially draining. This guide provides essential legal steps to protect your interests during divorce proceedings in India.",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Family Law",
      author: "Advocate Arvind Manor",
      slug: "legal-protection-during-divorce",
      icon: Heart,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "SEBI Complaints: What Investors Need to Know",
      excerpt:
        "SEBI provides various mechanisms for investor protection and complaint resolution. Understanding these processes can help investors seek redressal for securities market grievances.",
      date: "December 5, 2024",
      readTime: "10 min read",
      category: "Financial Law",
      author: "Advocate Arvind Manor",
      slug: "sebi-complaints-investor-guide",
      icon: TrendingUp,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "The Role of Legal Advice in Startup Growth",
      excerpt:
        "Proper legal counsel is crucial for startup success. From incorporation to funding rounds, legal advice can prevent costly mistakes and accelerate growth.",
      date: "November 28, 2024",
      readTime: "7 min read",
      category: "Corporate Law",
      author: "Advocate Arvind Manor",
      slug: "legal-advice-startup-growth",
      icon: Building,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Consumer Rights and Legal Remedies in India",
      excerpt:
        "Understanding your consumer rights and available legal remedies can help you seek justice for defective products and poor services.",
      date: "November 20, 2024",
      readTime: "5 min read",
      category: "Consumer Law",
      author: "Advocate Arvind Manor",
      slug: "consumer-rights-legal-remedies",
      icon: Building,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Criminal Law Procedures: Bail and Anticipatory Bail",
      excerpt:
        "A comprehensive guide to understanding bail procedures, anticipatory bail applications, and your rights during criminal proceedings.",
      date: "November 15, 2024",
      readTime: "9 min read",
      category: "Criminal Law",
      author: "Advocate Arvind Manor",
      slug: "criminal-law-bail-procedures",
      icon: Building,
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  const categories = [
    "All",
    "Property Law",
    "Family Law",
    "Financial Law",
    "Corporate Law",
    "Consumer Law",
    "Criminal Law",
  ]

  const filteredPosts =
    selectedCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/logo.png" alt="Manor & Associates" width={50} height={50} className="rounded-lg" />
              <div>
                <h1 className="text-xl font-bold text-slate-800">Manor & Associates</h1>
                <p className="text-sm text-amber-600">Your Trusted Legal Partner</p>
              </div>
            </Link>
            <Link href="/">
              <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-amber-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Badge className="mb-4 bg-amber-100 text-amber-800">Legal Insights</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Legal Insights & <span className="text-amber-600">Expert Analysis</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Stay informed about your legal rights and responsibilities with our comprehensive guides, expert insights,
              and analysis of current legal developments in India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-slate-800 hover:bg-slate-700 text-white"
                    : "border-slate-300 text-slate-600 hover:bg-slate-50"
                }
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                  <div className="relative">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-slate-800">
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between text-sm text-slate-500 mb-2">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-slate-800 leading-tight line-clamp-2">{post.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <CardDescription className="text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </CardDescription>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-slate-500">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <Link href={`/blogs/${post.slug}`}>
                        <Button variant="ghost" size="sm" className="text-amber-600 hover:text-amber-700">
                          Read More →
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredPosts.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <p className="text-slate-600 text-lg">No articles found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Stay Updated</h2>
            <p className="text-slate-600 mb-8">
              Subscribe to our newsletter to receive the latest legal insights and updates directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8">Subscribe</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/logo.png" alt="Manor & Associates" width={40} height={40} className="rounded-lg" />
                <div>
                  <h3 className="font-bold">Manor & Associates</h3>
                  <p className="text-sm text-amber-400">Your Trusted Legal Partner</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm">
                Providing strategic, solution-oriented legal counsel across a wide range of practice areas since 2010.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="text-slate-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-slate-400 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="text-slate-400 hover:text-white transition-colors">
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Practice Areas</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-slate-400">Civil & Property Law</li>
                <li className="text-slate-400">Family & Matrimonial Law</li>
                <li className="text-slate-400">Criminal Law</li>
                <li className="text-slate-400">Corporate Law</li>
                <li className="text-slate-400">SEBI & Financial Law</li>
                <li className="text-slate-400">Consumer & Employment Law</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-slate-400">+91 9823694687</li>
                <li className="text-slate-400">info@manorassociates.com</li>
                <li className="text-slate-400">Pune, Maharashtra</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Manor & Associates. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

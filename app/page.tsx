"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Scale,
  Users,
  Shield,
  Building,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Star,
  Award,
  Briefcase,
  Home,
  Heart,
  Gavel,
  TrendingUp,
  UserCheck,
  Menu,
  X,
  BookOpen,
  Calendar,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

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

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  transition: { type: "spring", stiffness: 300 },
}

export default function ManorAssociatesWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showDisclaimer, setShowDisclaimer] = useState(false)
  const [disclaimerLanguage, setDisclaimerLanguage] = useState("english")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  useEffect(() => {
    // Show disclaimer on first visit
    const hasSeenDisclaimer = localStorage.getItem("hasSeenDisclaimer")
    if (!hasSeenDisclaimer) {
      setShowDisclaimer(true)
    }
  }, [])

  const handleDisclaimerAccept = () => {
    localStorage.setItem("hasSeenDisclaimer", "true")
    setShowDisclaimer(false)
  }

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitMessage("Thank you! Your message has been sent successfully.")
        e.currentTarget.reset()
      } else {
        setSubmitMessage("Sorry, there was an error sending your message. Please try again.")
      }
    } catch (error) {
      setSubmitMessage("Sorry, there was an error sending your message. Please try again.")
    }

    setIsSubmitting(false)
  }

  const services = [
    {
      icon: Home,
      title: "Civil & Property Law",
      description:
        "Land & property disputes, lease and tenancy matters, inheritance & succession, property documentation",
      color: "bg-amber-50 text-amber-600",
    },
    {
      icon: Heart,
      title: "Family & Matrimonial Law",
      description: "Divorce and maintenance, child custody & guardianship, domestic violence & family settlements",
      color: "bg-rose-50 text-rose-600",
    },
    {
      icon: Gavel,
      title: "Criminal Law",
      description: "Bail, anticipatory bail, trial defense, white-collar crimes, cybercrime matters, criminal appeals",
      color: "bg-red-50 text-red-600",
    },
    {
      icon: Building,
      title: "Corporate & Commercial Law",
      description:
        "Business incorporation, contract drafting & vetting, regulatory & compliance advisory, mergers & acquisitions",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: TrendingUp,
      title: "SEBI & Financial Law",
      description:
        "Securities market disputes, investor protection advisory, regulatory representation, financial compliance",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: UserCheck,
      title: "Consumer & Employment Law",
      description: "Consumer forum disputes, employment termination, labour law compliance, workplace harassment",
      color: "bg-purple-50 text-purple-600",
    },
  ]

  const testimonials = [
    {
      name: "Ravi P.",
      location: "Pune",
      text: "Professional, responsive, and results-driven. Manor & Associates handled my property dispute with precision and care. Highly recommended!",
      rating: 5,
    },
    {
      name: "Sonal M.",
      location: "Mumbai",
      text: "Arvind Manor's legal insight and financial acumen were a game-changer for my business. Excellent service and expertise.",
      rating: 5,
    },
    {
      name: "Priya K.",
      location: "Pune",
      text: "Outstanding support during my divorce proceedings. The team was compassionate and professional throughout.",
      rating: 5,
    },
  ]

  const values = [
    { icon: Shield, title: "Integrity", description: "Ethical advocacy in every case" },
    { icon: Award, title: "Excellence", description: "Focused on delivering results" },
    { icon: Users, title: "Client Commitment", description: "Personalized legal strategy for every client" },
    { icon: Scale, title: "Transparency", description: "Clear, honest communication" },
  ]

  const blogPosts = [
    {
      title: "Understanding Property Title Disputes in Maharashtra",
      excerpt:
        "Navigate the complexities of property title disputes in Maharashtra with expert legal guidance and practical solutions.",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Property Law",
      slug: "property-title-disputes-maharashtra",
    },
    {
      title: "Key Steps to Protect Yourself Legally During Divorce",
      excerpt: "Essential legal steps and precautions to safeguard your interests during divorce proceedings in India.",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Family Law",
      slug: "legal-protection-during-divorce",
    },
    {
      title: "SEBI Complaints: What Investors Need to Know",
      excerpt: "Complete guide to filing SEBI complaints, investor protection mechanisms, and regulatory procedures.",
      date: "December 5, 2024",
      readTime: "10 min read",
      category: "Financial Law",
      slug: "sebi-complaints-investor-guide",
    },
    {
      title: "The Role of Legal Advice in Startup Growth",
      excerpt: "How proper legal counsel can accelerate startup growth and prevent costly legal pitfalls.",
      date: "November 28, 2024",
      readTime: "7 min read",
      category: "Corporate Law",
      slug: "legal-advice-startup-growth",
    },
  ]

  const faqs = [
    {
      question: "Do you offer free initial consultations?",
      answer:
        "Yes, we provide a free 20-minute consultation to understand your matter and guide you on the next steps. This helps us assess your case and provide you with the best possible legal strategy.",
    },
    {
      question: "What type of clients do you serve?",
      answer:
        "We assist individuals, families, startups, corporations, and investors across civil, criminal, and financial matters. Our diverse clientele includes property owners, business entrepreneurs, and individuals seeking family law assistance.",
    },
    {
      question: "Where do you practice?",
      answer:
        "Our office is in Pune, and we appear before courts and tribunals across Maharashtra and India. We handle cases in various jurisdictions including High Courts, District Courts, and specialized tribunals.",
    },
    {
      question: "How do you charge for your services?",
      answer:
        "Our fee structure varies depending on the complexity and nature of the case. We offer transparent pricing with no hidden costs. We discuss fees upfront during the initial consultation.",
    },
    {
      question: "How long does it typically take to resolve a case?",
      answer:
        "The timeline varies significantly based on the type of case, court schedules, and complexity of legal issues. We provide realistic timelines during our initial assessment and keep you updated throughout the process.",
    },
    {
      question: "Do you handle cases outside Maharashtra?",
      answer:
        "Yes, we handle cases across India, particularly in matters involving SEBI, corporate law, and other federal jurisdictions. We have experience appearing before various High Courts and the Supreme Court of India.",
    },
    {
      question: "What documents should I bring for the consultation?",
      answer:
        "Please bring all relevant documents related to your case, including contracts, correspondence, court notices, property documents, or any other pertinent paperwork. This helps us provide more accurate advice.",
    },
    {
      question: "Do you provide legal services in regional languages?",
      answer:
        "Yes, our team is proficient in English, Hindi, and Marathi, ensuring clear communication and understanding of your legal matters in your preferred language.",
    },
  ]

  const disclaimerContent = {
    english: {
      title: "Legal Disclaimer",
      content: `The rules of the Bar Council of India do not permit law firms to advertise or solicit work in any form or manner.

By proceeding further and clicking "I Agree," you acknowledge that:

• You are accessing this website of your own accord and for informational purposes only.
• There has been no form of advertisement, personal communication, solicitation, invitation, or inducement by Manor & Associates or any of its members to solicit any work or advertise through this website.
• The contents of this website are for general informational purposes only and do not constitute legal advice or a substitute for legal counsel.
• Manor & Associates is not liable for any consequence of any action taken by you relying on the information provided on this website.
• If you require any assistance or legal advice, you must seek independent legal counsel.

By clicking "I Agree," you confirm that you have read and understood this disclaimer and wish to proceed.`,
      agree: "I Agree",
      exit: "Exit",
    },
    hindi: {
      title: "कानूनी अस्वीकरण",
      content: `भारत में बार काउंसिल के नियमों के अनुसार, किसी भी वकील या लॉ फर्म को विज्ञापन देना या काम के लिए आमंत्रण देना निषिद्ध है।

कृपया ध्यान दें:

• आप यह वेबसाइट स्वेच्छा से और केवल सूचना के उद्देश्य से देख रहे हैं।
• Manor & Associates या उसके किसी सदस्य ने किसी भी प्रकार का प्रचार, व्यक्तिगत संवाद, आमंत्रण, या काम के लिए प्रलोभन नहीं दिया है।
• इस वेबसाइट पर दी गई जानकारी केवल सामान्य जानकारी के लिए है और इसे किसी भी प्रकार की कानूनी सलाह नहीं माना जाना चाहिए।
• Manor & Associates इस वेबसाइट की जानकारी के आधार पर की गई किसी भी कार्रवाई की जिम्मेदारी नहीं लेती है।
• यदि आपको कानूनी सलाह की आवश्यकता है, तो कृपया स्वतंत्र कानूनी सलाह लें।

"मैं सहमत हूँ" बटन पर क्लिक करके, आप ऊपर दी गई शर्तों को समझते हैं और स्वेच्छा से आगे बढ़ना चाहते हैं।`,
      agree: "मैं सहमत हूँ",
      exit: "बाहर जाएं",
    },
    marathi: {
      title: "कायदेशीर अस्वीकरण",
      content: `भारताच्या बार कौन्सिलच्या नियमांनुसार, वकिलांनी किंवा कायदेशीर संस्थांनी जाहिरात करणे किंवा व्यवसायासाठी काम मागणे कायद्याने निषिद्ध आहे।

कृपया लक्षात घ्या:

• आपण ही वेबसाइट स्वतःहून आणि केवळ माहितीच्या उद्देशाने पाहत आहात।
• Manor & Associates किंवा त्याच्या सदस्यांनी कोणतीही जाहिरात, वैयक्तिक संवाद, आमंत्रण, किंवा काम मिळविण्यासाठी प्रोत्साहन दिलेले नाही।
• या वेबसाइटवरील माहिती केवळ सामान्य माहितीपुरती आहे आणि ती कोणत्याही प्रकारे कायदेशीर सल्ला समजली जाऊ नये।
• Manor & Associates या संस्थेने या माहितीस अनुसरून घेतलेल्या कोणत्याही कृतीबाबत कोणतीही जबाबदारी घेतलेली नाही।
• कृपया कोणतीही कायदेशीर मदत घेण्यापूर्वी स्वतंत्र कायदेशीर सल्ला घ्यावा।

"मी सहमत आहे" या बटणावर क्लिक करून, आपण वरील अटी समजून घेतल्या आहेत आणि आपण स्वतःहून पुढे जात आहात हे आपण मान्य करता।`,
      agree: "मी सहमत आहे",
      exit: "बाहेर पडा",
    },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Disclaimer Modal */}
      <Dialog open={showDisclaimer} onOpenChange={setShowDisclaimer}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
              {disclaimerContent[disclaimerLanguage as keyof typeof disclaimerContent].title}
            </DialogTitle>
          </DialogHeader>

          <Tabs value={disclaimerLanguage} onValueChange={setDisclaimerLanguage} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="english">English</TabsTrigger>
              <TabsTrigger value="hindi">हिंदी</TabsTrigger>
              <TabsTrigger value="marathi">मराठी</TabsTrigger>
            </TabsList>

            {Object.entries(disclaimerContent).map(([lang, content]) => (
              <TabsContent key={lang} value={lang} className="mt-4">
                <div className="space-y-4">
                  <div className="text-sm text-slate-600 whitespace-pre-line leading-relaxed">{content.content}</div>
                  <div className="flex gap-4 pt-4">
                    <Button onClick={handleDisclaimerAccept} className="bg-slate-800 hover:bg-slate-700">
                      {content.agree}
                    </Button>
                    <Button variant="outline" onClick={() => window.history.back()}>
                      {content.exit}
                    </Button>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </DialogContent>
      </Dialog>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image src="/logo.png" alt="Manor & Associates" width={50} height={50} className="rounded-lg" />
              <div>
                <h1 className="text-xl font-bold text-slate-800">Manor & Associates</h1>
                <p className="text-sm text-amber-600">Your Trusted Legal Partner</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-slate-700 hover:text-amber-600 transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-slate-700 hover:text-amber-600 transition-colors">
                About Us
              </Link>
              <Link href="#services" className="text-slate-700 hover:text-amber-600 transition-colors">
                Services
              </Link>
              <Link href="/blogs" className="text-slate-700 hover:text-amber-600 transition-colors">
                Blogs
              </Link>
              <Link href="#faq" className="text-slate-700 hover:text-amber-600 transition-colors">
                FAQ
              </Link>
              <Link href="#contact" className="text-slate-700 hover:text-amber-600 transition-colors">
                Contact
              </Link>
              {/* <Button className="bg-slate-800 hover:bg-slate-700 text-white">Book Consultation</Button> */}
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4"
            >
              <div className="flex flex-col space-y-4">
                <Link href="#home" className="text-slate-700 hover:text-amber-600 transition-colors">
                  Home
                </Link>
                <Link href="#about" className="text-slate-700 hover:text-amber-600 transition-colors">
                  About Us
                </Link>
                <Link href="#services" className="text-slate-700 hover:text-amber-600 transition-colors">
                  Services
                </Link>
                <Link href="/blogs" className="text-slate-700 hover:text-amber-600 transition-colors">
                  Blogs
                </Link>
                <Link href="#faq" className="text-slate-700 hover:text-amber-600 transition-colors">
                  FAQ
                </Link>
                <Link href="#contact" className="text-slate-700 hover:text-amber-600 transition-colors">
                  Contact
                </Link>
                <Button className="bg-slate-800 hover:bg-slate-700 text-white w-full">Book Consultation</Button>
              </div>
            </motion.nav>
          )}
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-slate-50 to-amber-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-200">
                Trusted Legal Excellence Since 2010
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
                Welcome to <span className="text-amber-600">Manor & Associates</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                At Manor & Associates, we combine legal excellence with client-focused service. Founded by Advocate
                Arvind Manor, our firm is committed to providing strategic, solution-oriented legal counsel across a
                wide range of practice areas. Whether you're an individual or a business, our dedicated team will stand
                by your side to protect your rights and interests.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-slate-800 hover:bg-slate-700 text-white">
                    Book a Consultation
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div> */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#services">
                    <Button size="lg" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                      Explore Our Services
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <Scale className="h-16 w-16 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-slate-800">Legal Excellence</h3>
                  <p className="text-slate-600">Protecting your rights and interests</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-slate-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-slate-800">15+</div>
                    <div className="text-sm text-slate-600">Years Experience</div>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-amber-600">1000+</div>
                    <div className="text-sm text-slate-600">Cases Handled</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-slate-800">6</div>
                    <div className="text-sm text-slate-600">Practice Areas</div>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-amber-600">98%</div>
                    <div className="text-sm text-slate-600">Success Rate</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* <Badge className="mb-4 bg-slate-100 text-slate-800">About Us</Badge> */}
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Who We Are</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Manor & Associates is a full-service law firm based in Pune, Maharashtra, serving clients across India.
              With years of experience and a reputation for integrity, Advocate Arvind Manor leads a team dedicated to
              upholding the highest standards of legal practice.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-amber-100">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-amber-100 p-3 rounded-full">
                      <Briefcase className="h-8 w-8 text-amber-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-slate-800">Advocate Arvind Manor</CardTitle>
                      <CardDescription className="text-lg">Founder & Senior Partner</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    A respected member of the Pune Bar Association, Arvind Manor brings a wealth of legal and financial
                    expertise to every case. His commitment to ethical practice and client success has established Manor
                    & Associates as a trusted name in legal services. With specialization in SEBI matters and corporate
                    law, he has successfully represented numerous clients in complex financial disputes.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Pune Bar Association</Badge>
                    <Badge variant="secondary">15+ Years Experience</Badge>
                    <Badge variant="secondary">SEBI Expert</Badge>
                    <Badge variant="secondary">Corporate Law Specialist</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 gap-4"
            >
              {values.map((value, index) => (
                <motion.div key={index} variants={fadeInUp} {...scaleOnHover}>
                  <Card className="text-center h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div
                        className={`inline-flex p-3 rounded-full mb-4 ${value.title === "Integrity" ? "bg-blue-50" : value.title === "Excellence" ? "bg-amber-50" : value.title === "Client Commitment" ? "bg-green-50" : "bg-purple-50"}`}
                      >
                        <value.icon
                          className={`h-6 w-6 ${value.title === "Integrity" ? "text-blue-600" : value.title === "Excellence" ? "text-amber-600" : value.title === "Client Commitment" ? "text-green-600" : "text-purple-600"}`}
                        />
                      </div>
                      <h3 className="font-bold text-slate-800 mb-2">{value.title}</h3>
                      <p className="text-sm text-slate-600">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* <Badge className="mb-4 bg-amber-100 text-amber-800">Our Services</Badge> */}
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Our Areas of Practice</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We provide comprehensive legal services across multiple practice areas, ensuring expert representation for
              individuals and businesses alike.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp} {...scaleOnHover}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader>
                    <div className={`inline-flex p-3 rounded-full mb-4 ${service.color} flex-row items-center space-x-3`}>
                      <service.icon className="h-8 w-8" />
                      <CardTitle className="text-xl text-slate-800">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 leading-relaxed">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            {/* <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              Schedule a Legal Consultation
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button> */}
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blogs" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* <Badge className="mb-4 bg-slate-100 text-slate-800">Legal Insights</Badge> */}
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Recent Articles</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Stay informed about your legal rights and responsibilities with our expert insights and analysis.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {blogPosts.map((post, index) => (
              <motion.div key={index} variants={fadeInUp} {...scaleOnHover}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-sm text-slate-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-slate-800 leading-tight">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 leading-relaxed mb-4">{post.excerpt}</CardDescription>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">{post.readTime}</span>
                      <Link href={`/blogs/${post.slug}`}>
                        <Button variant="ghost" size="sm" className="text-amber-600 hover:text-amber-700">
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/blogs">
              <Button size="lg" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                <BookOpen className="mr-2 h-4 w-4" />
                Visit Our Blog
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* <Badge className="mb-4 bg-amber-100 text-amber-800">FAQ</Badge> */}
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Find answers to common questions about our legal services and processes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="font-semibold text-slate-800">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* <Badge className="mb-4 bg-slate-100 text-slate-800">Client Testimonials</Badge> */}
            <h2 className="text-4xl font-bold text-slate-800 mb-6">What Our Clients Say</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp} {...scaleOnHover}>
                <Card className="h-full border-2 border-amber-100 hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                    <div className="flex items-center">
                      <div className="bg-slate-100 rounded-full p-3 mr-4">
                        <Users className="h-6 w-6 text-slate-600" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-800">{testimonial.name}</div>
                        <div className="text-slate-500">{testimonial.location}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* <Badge className="mb-4 bg-amber-600 text-white">Contact Us</Badge> */}
            <h2 className="text-4xl font-bold mb-6">We're Here to Help</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Get in touch with our legal experts for a consultation. We're committed to providing you with the best
              legal representation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-600 p-3 rounded-full">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Office Address</h4>
                    <p className="text-slate-300">
                      Manor & Associates
                      <br />
                      Pune, Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-600 p-3 rounded-full">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Phone</h4>
                    <p className="text-slate-300">+91 9823694687</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-600 p-3 rounded-full">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Email</h4>
                    <p className="text-slate-300">info@manorassociates.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-600 p-3 rounded-full">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Business Hours</h4>
                    <p className="text-slate-300">
                      Monday – Saturday: 10:00 AM – 6:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white text-slate-800">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you soon.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name *</label>
                        <Input name="name" placeholder="Your full name" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone *</label>
                        <Input name="phone" placeholder="Your phone number" required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input name="email" type="email" placeholder="Your email address" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <Textarea name="message" placeholder="Tell us about your legal matter" rows={4} required />
                    </div>
                    {submitMessage && (
                      <div
                        className={`p-3 rounded-lg ${submitMessage.includes("successfully") ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
                      >
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          {submitMessage}
                        </div>
                      </div>
                    )}
                    <Button
                      type="submit"
                      className="w-full bg-slate-800 hover:bg-slate-700 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
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
                  <Link href="#home" className="text-slate-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-slate-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-slate-400 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="text-slate-400 hover:text-white transition-colors">
                    Legal Insights
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
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => setShowDisclaimer(true)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Disclaimer
                  </button>
                </li>
                <li>
                  <Link href="#faq" className="text-slate-400 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Manor & Associates. All rights reserved. | Website designed with excellence
              for legal professionals.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

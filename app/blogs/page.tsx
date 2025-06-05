"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home, Heart, Building, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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
  const blogPosts = [
    {
      title: "Understanding Property Title Disputes in Maharashtra",
      excerpt: "Property title disputes are among the most complex legal matters in Maharashtra. This comprehensive guide explores the common causes, legal remedies, and preventive measures for property title disputes.",
      content: `Property title disputes in Maharashtra have become increasingly common due to rapid urbanization and complex land records. Understanding the legal framework and preventive measures is crucial for property owners.

**Common Causes of Title Disputes:**
- Fraudulent transactions and forged documents
- Multiple sales of the same property
- Inheritance disputes among family members
- Encroachment and adverse possession claims
- Errors in revenue records and survey settlements

**Legal Remedies Available:**
1. **Civil Suits for Declaration of Title** - File a suit under Order VII Rule 1 of CPC
2. **Injunction Relief** - Seek temporary or permanent injunction to prevent dispossession
3. **Specific Performance** - Compel the seller to execute proper sale deed
4. **Cancellation of Documents** - Challenge fraudulent or invalid documents

**Preventive Measures:**
- Conduct thorough due diligence before purchase
- Verify chain of title for at least 30 years
- Check encumbrance certificate and survey records
- Obtain legal opinion from qualified advocates
- Register documents properly with sub-registrar

**Recent Legal Developments:**
The Maharashtra government has introduced digital land records and online verification systems to reduce title disputes. The new system provides better transparency and reduces the scope for fraudulent transactions.`,
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Property Law",
      author: "Advocate Arvind Manor",
      slug: "property-title-disputes-maharashtra",
      icon: Home,
    },
    {
      title: "Key Steps to Protect Yourself Legally During Divorce",
      excerpt: "Divorce proceedings can be emotionally and financially draining. This guide provides essential legal steps to protect your interests during divorce proceedings in India.",
      content: `Divorce is a significant life event that requires careful legal planning to protect your rights and interests. Here's a comprehensive guide to navigate divorce proceedings effectively.

**Before Filing for Divorce:**
- Gather all financial documents and records
- Document instances of cruelty or misconduct
- Secure important personal documents
- Consider mediation and counseling options
- Consult with an experienced family law attorney

**Legal Grounds for Divorce in India:**
1. **Mutual Consent** - Both parties agree to divorce
2. **Contested Divorce** - Based on specific grounds like cruelty, desertion, adultery
3. **Irretrievable Breakdown of Marriage** - Recent addition to divorce laws

**Financial Protection Strategies:**
- Maintain separate bank accounts
- Document all assets and liabilities
- Secure employment and income sources
- Understand maintenance and alimony rights
- Protect children's financial interests

**Child Custody Considerations:**
- Best interests of the child principle
- Joint custody vs. sole custody options
- Visitation rights and arrangements
- Child support calculations
- Educational and healthcare decisions

**Common Mistakes to Avoid:**
- Hiding assets or income
- Violating court orders
- Using children as leverage
- Making major financial decisions without court approval
- Neglecting to update legal documents

**Recent Legal Updates:**
The Supreme Court has emphasized alternative dispute resolution in family matters, encouraging mediation and counseling before litigation.`,
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Family Law",
      author: "Advocate Arvind Manor",
      slug: "legal-protection-during-divorce",
      icon: Heart,
    },
    {
      title: "SEBI Complaints: What Investors Need to Know",
      excerpt: "SEBI provides various mechanisms for investor protection and complaint resolution. Understanding these processes can help investors seek redressal for securities market grievances.",
      content: `The Securities and Exchange Board of India (SEBI) has established comprehensive mechanisms to protect investor interests and resolve complaints in the securities market.

**Types of SEBI Complaints:**
1. **Trading and Settlement Issues** - Disputes with brokers and exchanges
2. **Mutual Fund Complaints** - Issues with fund houses and distributors
3. **Corporate Governance Matters** - Violations by listed companies
4. **Market Manipulation** - Insider trading and price manipulation
5. **Disclosure Violations** - Non-compliance with listing requirements

**SEBI Complaint Resolution Process:**
- **SCORES Portal** - Online complaint registration system
- **Investor Grievance Redressal** - Direct resolution with intermediaries
- **Adjudication Proceedings** - Formal hearings for violations
- **Settlement Mechanism** - Consent-based resolution
- **Appeals Process** - Securities Appellate Tribunal (SAT)

**How to File a SEBI Complaint:**
1. Register on SCORES portal (www.scores.gov.in)
2. Provide complete details of the grievance
3. Upload supporting documents
4. Track complaint status online
5. Respond to queries from SEBI or intermediaries

**Investor Protection Measures:**
- Investor Protection Fund for compensation
- Surveillance systems for market monitoring
- Strict penalties for violations
- Regular inspections of intermediaries
- Investor education and awareness programs

**Recent Developments:**
SEBI has introduced new regulations for investment advisors, research analysts, and robo-advisory services to enhance investor protection in the digital age.

**When to Seek Legal Help:**
- Complex securities law violations
- Large financial losses
- Criminal aspects in securities fraud
- Appeals to SAT or higher courts
- Class action suits against companies`,
      date: "December 5, 2024",
      readTime: "10 min read",
      category: "Financial Law",
      author: "Advocate Arvind Manor",
      slug: "sebi-complaints-investor-guide",
      icon: TrendingUp,
    },
    {
      title: "The Role of Legal Advice in Startup Growth",
      excerpt: "Proper legal counsel is crucial for startup success. From incorporation to funding rounds, legal advice can prevent costly mistakes and accelerate growth.",
      content: `Startups face numerous legal challenges that can significantly impact their growth trajectory. Understanding when and how to seek legal advice is crucial for entrepreneurial success.

**Legal Considerations During Startup Formation:**
- **Business Structure Selection** - Private Limited Company vs. LLP vs. Partnership
- **Incorporation Process** - ROC filing, MOA/AOA drafting
- **Founder Agreements** - Equity distribution, vesting schedules
- **Intellectual Property Protection** - Trademarks, copyrights, patents
- **Employment Law Compliance** - Hiring practices, employee agreements

**Funding and Investment Legal Framework:**
1. **Seed Funding** - SAFE notes, convertible instruments
2. **Angel Investment** - Term sheets, due diligence
3. **Venture Capital** - Series A/B/C funding rounds
4. **Regulatory Compliance** - FEMA, Companies Act provisions
5. **Exit Strategies** - IPO, acquisition, merger planning

**Contract Management for Startups:**
- Customer agreements and terms of service
- Vendor and supplier contracts
- Technology licensing agreements
- Non-disclosure and confidentiality agreements
- Partnership and collaboration contracts

**Regulatory Compliance Requirements:**
- **Data Protection** - Privacy policies, GDPR compliance
- **Industry-Specific Regulations** - FinTech, HealthTech, EdTech
- **Tax Compliance** - GST, income tax, international taxation
- **Labor Law Compliance** - PF, ESI, gratuity provisions
- **Environmental Clearances** - For manufacturing startups

**Common Legal Pitfalls to Avoid:**
- Inadequate founder agreements
- Poor intellectual property strategy
- Non-compliance with regulatory requirements
- Weak contract terms with customers/vendors
- Ignoring employment law obligations

**Cost-Effective Legal Strategies:**
- Use of legal technology and templates
- Retainer arrangements with law firms
- Legal insurance for startups
- Government schemes and support programs
- Networking with legal professionals

**When to Engage Legal Counsel:**
- Before signing any major agreement
- During funding rounds and investments
- When facing regulatory investigations
- For intellectual property disputes
- During mergers and acquisitions

The startup ecosystem in India is rapidly evolving, and legal frameworks are adapting to support innovation while ensuring compliance and protection for all stakeholders.`,
      date: "November 28, 2024",
      readTime: "7 min read",
      category: "Corporate Law",
      author: "Advocate Arvind Manor",
      slug: "legal-advice-startup-growth",
      icon: Building,
    },
  ]

  const categories = ["All", "Property Law", "Family Law", "Financial Law", "Corporate Law", "Criminal Law"]

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
        <div className="\

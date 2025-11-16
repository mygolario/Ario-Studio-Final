"use client";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { motion } from "framer-motion";

// Mock data for admin dashboard
const mockSubmissions = [
  {
    id: 1,
    name: "Sarah Chen",
    email: "sarah@techflow.com",
    projectType: "Full Package",
    budget: "$10k - $25k",
    createdAt: "2024-01-15T10:30:00Z",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    email: "marcus@innovate.com",
    projectType: "AI Agent/Product",
    budget: "$25k - $50k",
    createdAt: "2024-01-14T14:20:00Z",
  },
  {
    id: 3,
    name: "Emily Watson",
    email: "emily@stylecraft.com",
    projectType: "Website",
    budget: "$5k - $10k",
    createdAt: "2024-01-13T09:15:00Z",
  },
  {
    id: 4,
    name: "David Kim",
    email: "david@startup.io",
    projectType: "Landing Page",
    budget: "Under $5k",
    createdAt: "2024-01-12T16:45:00Z",
  },
];

const stats = [
  { label: "Total Leads", value: "24", change: "+12%", positive: true },
  { label: "Last 7 Days", value: "8", change: "+3", positive: true },
  { label: "Most Requested", value: "Full Package", change: "42%", positive: true },
  { label: "Avg. Budget", value: "$18k", change: "+5%", positive: true },
];

export default function AdminDashboard() {
  return (
    <div className="relative pt-32 min-h-screen">
      <Container>
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">
            Admin <span className="gradient-text">Dashboard</span>
          </h1>
          <p className="text-white/60">
            Monitor contact submissions and project inquiries
          </p>
          <p className="text-xs text-white/40 mt-2">
            TODO: Add authentication and real database integration
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-white/60">{stat.label}</p>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      stat.positive
                        ? "bg-green-500/20 text-green-300 border border-green-500/30"
                        : "bg-red-500/20 text-red-300 border border-red-500/30"
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Recent Submissions */}
        <Card className="p-6">
          <h2 className="text-2xl font-heading font-bold mb-6 text-white">
            Recent Contact Submissions
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-white/80">
                    Name
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-white/80">
                    Email
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-white/80">
                    Project Type
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-white/80">
                    Budget
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-white/80">
                    Submitted
                  </th>
                </tr>
              </thead>
              <tbody>
                {mockSubmissions.map((submission, index) => (
                  <motion.tr
                    key={submission.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-4 px-4 text-white">{submission.name}</td>
                    <td className="py-4 px-4 text-white/70">{submission.email}</td>
                    <td className="py-4 px-4">
                      <span className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        {submission.projectType}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-white/70">{submission.budget}</td>
                    <td className="py-4 px-4 text-white/60 text-sm">
                      {new Date(submission.createdAt).toLocaleDateString()}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-white/40 mt-4">
            TODO: Connect to real database to display actual submissions
          </p>
        </Card>
      </Container>
    </div>
  );
}


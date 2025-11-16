"use client";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Code2, Rocket } from "lucide-react";

// Mock project data
const mockProjects = [
  {
    id: 1,
    name: "SaaS Platform MVP",
    status: "in-progress",
    progress: 65,
    milestones: [
      { label: "Design Complete", completed: true },
      { label: "Frontend Development", completed: true },
      { label: "Backend Integration", completed: false },
      { label: "Testing & Launch", completed: false },
    ],
  },
  {
    id: 2,
    name: "Brand Landing Page",
    status: "review",
    progress: 90,
    milestones: [
      { label: "Design Complete", completed: true },
      { label: "Development", completed: true },
      { label: "Client Review", completed: true },
      { label: "Final Revisions", completed: false },
    ],
  },
];

export default function UserDashboard() {
  return (
    <div className="relative pt-32 min-h-screen">
      <Container>
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">
            Your <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-white/60">
            Track your project status, milestones, and deliverables
          </p>
          <p className="text-xs text-white/40 mt-2">
            TODO: Add authentication and connect to real project data
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {mockProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                  <span
                    className={`px-3 py-1 text-xs rounded-full ${
                      project.status === "in-progress"
                        ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                        : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                    }`}
                  >
                    {project.status === "in-progress" ? "In Progress" : "Under Review"}
                  </span>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-white/60">Progress</span>
                    <span className="text-sm font-semibold text-white">{project.progress}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${project.progress}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white/80 mb-2">Milestones</h4>
                  {project.milestones.map((milestone, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      {milestone.completed ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : (
                        <Clock className="w-5 h-5 text-white/30" />
                      )}
                      <span
                        className={`text-sm ${
                          milestone.completed ? "text-white/80" : "text-white/50"
                        }`}
                      >
                        {milestone.label}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Placeholder for future features */}
        <Card className="p-8">
          <div className="text-center">
            <Code2 className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              More Features Coming Soon
            </h3>
            <p className="text-white/60 text-sm">
              This dashboard will include file sharing, communication tools, and real-time
              project updates.
            </p>
          </div>
        </Card>
      </Container>
    </div>
  );
}


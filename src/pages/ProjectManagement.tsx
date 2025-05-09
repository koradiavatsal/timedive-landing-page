
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from 'lucide-react';

const ProjectManagement = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#EAF6FF] to-[#CDEBFF] px-6 lg:px-24 pt-16 pb-32 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-4">Project Management</h1>
          <p className="text-lg md:text-xl text-[#444444] mb-8 max-w-3xl mx-auto">
            Create boards, add projects, and prioritize tasks so your team has clarity on what to work on and the goal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-[#27AE60] hover:bg-[#219653] text-white px-8 py-6 h-auto text-base">
              Get started free
            </Button>
            <Button variant="outline" className="border-[#27AE60] text-[#27AE60] hover:bg-[#27AE60]/10 px-8 py-6 h-auto text-base">
              Get a demo
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-white rounded-t-[50%] transform translate-y-1/2"></div>
      </section>

      {/* Projects and Tasks Section */}
      <section className="px-6 lg:px-24 py-16 mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="uppercase text-sm font-semibold text-[#6E6E6E] mb-2">PROJECTS AND TASKS</h3>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6">
                Kick off the projects quickly
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-2">
                  <span className="text-[#27AE60] font-bold">•</span>
                  <p>Create boards for different departments and assign users to work together on specific projects.</p>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#27AE60] font-bold">•</span>
                  <p>Add essential details, pages and card details, sub-tasks, priorities, and additional notes to keep everyone on the same page.</p>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                alt="Project management dashboard" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Alignment Section */}
      <section className="px-6 lg:px-24 py-16 bg-[#F4F8FB]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-1 gap-6">
                <img 
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                  alt="Kanban board" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                  alt="Project timeline" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="uppercase text-sm font-semibold text-[#6E6E6E] mb-2">TEAM ALIGNMENT</h3>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6">
                Stay in sync and on schedule
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-2">
                  <span className="text-[#27AE60] font-bold">•</span>
                  <p>Explore how-lists into visualized tasks at each stage, ensuring team plans aligned and on track.</p>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#27AE60] font-bold">•</span>
                  <p>Easily move tasks through different process stages in your projects.</p>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#27AE60] font-bold">•</span>
                  <p>Track progress with multiple views (List, Kanban, Gantt chart, etc).</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="px-6 lg:px-24 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D9CDB] mb-4">70%</h2>
          <p className="text-xl text-[#1A1A1A]">of leaders say time management and team alignment are their biggest challenges</p>
        </div>
      </section>

      {/* Progress Reporting Section */}
      <section className="px-6 lg:px-24 py-16 bg-[#F4F8FB]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="uppercase text-sm font-semibold text-[#6E6E6E] mb-2">PROGRESS REPORTING</h3>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6">
                Set clear milestones and deadlines
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-2">
                  <span className="text-[#27AE60] font-bold">•</span>
                  <p>Set milestones and rate project or task key achievements and mark progress.</p>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#27AE60] font-bold">•</span>
                  <p>Automate deadline reminders to ensure tasks will meet deadlines and avoid bottlenecks.</p>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#27AE60] font-bold">•</span>
                  <p>Collaborate seamlessly by commenting directly on tasks and projects and your team is notified.</p>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                alt="Project milestone tracking" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reports & Analytics Section */}
      <section className="px-6 lg:px-24 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-1 gap-6">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                  alt="Analytics dashboard" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                  alt="Analytics charts" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="uppercase text-sm font-semibold text-[#6E6E6E] mb-2">REPORTS & ANALYTICS</h3>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6">
                Monitor team performance
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-2">
                  <span className="text-[#27AE60] font-bold">•</span>
                  <p>Monitor which projects to push hard and which ones is being appropriately progressed.</p>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#27AE60] font-bold">•</span>
                  <p>Individual and team performance tracking log so you can identify blockers and optimize it to move your projects faster.</p>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#27AE60] font-bold">•</span>
                  <p>Visualize your team workload, availability and adjust the distribution.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Second Stats Banner */}
      <section className="px-6 lg:px-24 py-16 bg-[#F4F8FB]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D9CDB] mb-4">68%</h2>
          <p className="text-xl text-[#1A1A1A]">of employees say hopping between apps make them less productive</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-24 py-16 bg-gradient-to-b from-[#EAF6FF] to-[#CDEBFF]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">One tool, across teams</h2>
          <p className="text-lg md:text-xl text-[#444444] mb-8 max-w-3xl mx-auto">
            TimeDive gives your team the clarity, control, and flexibility to move work forward.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-[#27AE60] hover:bg-[#219653] text-white px-8 py-6 h-auto text-base">
              Get started free
            </Button>
            <Button variant="outline" className="border-[#27AE60] text-[#27AE60] hover:bg-[#27AE60]/10 px-8 py-6 h-auto text-base">
              Get a demo
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 lg:px-24 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-10 text-center">Frequently asked questions</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg p-2">
              <AccordionTrigger className="text-lg font-medium text-[#1A1A1A] hover:no-underline">
                Can I try project tracking with TimeDive for free?
              </AccordionTrigger>
              <AccordionContent className="text-[#6E6E6E] pt-2 pb-4">
                Yes, TimeDive offers a free trial that includes all project management features. You can use it with your team for 14 days without any commitment.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border rounded-lg p-2">
              <AccordionTrigger className="text-lg font-medium text-[#1A1A1A] hover:no-underline">
                Why do I need software to track projects?
              </AccordionTrigger>
              <AccordionContent className="text-[#6E6E6E] pt-2 pb-4">
                Project tracking software helps teams stay organized, collaborate effectively, and track progress in real-time. It eliminates the need for spreadsheets and disconnected tools, centralizing all project information in one place.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border rounded-lg p-2">
              <AccordionTrigger className="text-lg font-medium text-[#1A1A1A] hover:no-underline">
                How should I choose a project management tool?
              </AccordionTrigger>
              <AccordionContent className="text-[#6E6E6E] pt-2 pb-4">
                When choosing a project management tool, consider your team's size, project complexity, required features, and budget. TimeDive is designed to be flexible enough for teams of all sizes while providing powerful features that scale with your needs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectManagement;

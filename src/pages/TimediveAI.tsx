
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from "@/components/ui/separator";

const TimediveAI = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#EAF6FF] to-[#CDEBFF] py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">
            AI is no longer the future – it's your buddy.
          </h1>
          <p className="text-lg text-[#6E6E6E] max-w-3xl mx-auto">
            Automate actions, ask questions and get actionable insights to help you manage your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#27AE60] hover:bg-[#219653] text-white">
              Get started free
            </Button>
            <Button variant="outline" className="border-[#27AE60] text-[#27AE60] hover:bg-[#27AE60]/10">
              Get a demo
            </Button>
          </div>
        </div>
      </section>

      {/* AI Teammate Input Demo */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-8 text-center">
          <h2 className="text-3xl font-bold text-[#1A1A1A]">TimeDive's AI Teammate</h2>
          <p className="text-lg text-[#6E6E6E]">Ask any question in your own words…</p>
          
          <Card className="mx-auto max-w-2xl shadow-md">
            <CardContent className="p-6">
              <div className="relative">
                <Input 
                  placeholder="How many hours did I work last week?" 
                  className="pr-10 py-6 text-lg"
                />
                <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#2D9CDB] hover:bg-[#2D9CDB]/80">
                  Ask
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Feature - Project Intelligence */}
      <section className="py-16 px-6 md:px-12 bg-[#F4F8FB]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">Smart deadline predictions</h2>
            <p className="text-lg text-[#6E6E6E]">
              TimeDive's AI analyzes past projects, task completions, and team velocity to provide accurate deadline forecasting. Stop guessing when projects will finish - let the AI give you data-driven projections based on your team's actual work patterns.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#27AE60] font-bold">✓</span>
                <span className="text-[#6E6E6E]">Identify at-risk deadlines before they become problems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#27AE60] font-bold">✓</span>
                <span className="text-[#6E6E6E]">Get resource allocation recommendations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#27AE60] font-bold">✓</span>
                <span className="text-[#6E6E6E]">Adjust forecasts based on changing conditions</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&h=1728" 
              alt="Project intelligence dashboard" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Feature - Burnout Detection */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-md order-last md:order-first">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=900&h=600" 
              alt="Burnout risk analysis" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-[#EB5757] p-1 rounded-full bg-[#EB5757]/10">
                ⚠️
              </span>
              <h2 className="text-3xl font-bold text-[#1A1A1A]">Burnout prediction</h2>
            </div>
            <p className="text-lg text-[#6E6E6E]">
              AI detects potential burnout by monitoring work patterns, overtime, and break habits. Get proactive alerts when team members show signs of overwork, allowing you to intervene before productivity and well-being suffer.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#27AE60] font-bold">✓</span>
                <span className="text-[#6E6E6E]">Early warning system for team health</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#27AE60] font-bold">✓</span>
                <span className="text-[#6E6E6E]">Custom thresholds for different teams and roles</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#27AE60] font-bold">✓</span>
                <span className="text-[#6E6E6E]">Automated suggestions for workload balancing</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Feature - Team Assignment */}
      <section className="py-16 px-6 md:px-12 bg-[#F4F8FB]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">Assign work smartly</h2>
            <p className="text-lg text-[#6E6E6E]">
              Stop guessing who's the best fit for new tasks. TimeDive AI analyzes skill sets, availability, and past performance to recommend optimal team assignments for every project.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#27AE60] font-bold">✓</span>
                <span className="text-[#6E6E6E]">Match skills to project requirements</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#27AE60] font-bold">✓</span>
                <span className="text-[#6E6E6E]">Balance workloads automatically</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#27AE60] font-bold">✓</span>
                <span className="text-[#6E6E6E]">Identify growth opportunities for team members</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=900&h=600" 
              alt="Team assignment analytics" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stat Banner 1 */}
      <section className="py-12 px-6 bg-white border-t border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-semibold text-[#1A1A1A]">
            <span className="text-3xl font-bold text-[#2D9CDB]">75% </span>
            of organizations will shift from piloting to operationalizing AI by 2024, driving a 5X increase in streaming data and analytics infrastructures.
          </p>
          <p className="mt-3 text-sm text-[#6E6E6E]">Source: Gartner</p>
        </div>
      </section>

      {/* Feature - Leave Trends */}
      <section className="py-16 px-6 md:px-12 bg-[#F4F8FB]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-md order-last md:order-first">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=900&h=600" 
              alt="Leave trends analysis" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">Spot leave trends</h2>
            <p className="text-lg text-[#6E6E6E]">
              AI vacation intelligence provides insights into team availability patterns, helping you spot seasonal trends, prevent coverage gaps, and plan project timelines around predictable absences.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#27AE60] font-bold">✓</span>
                <span className="text-[#6E6E6E]">Predict seasonal absence patterns</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#27AE60] font-bold">✓</span>
                <span className="text-[#6E6E6E]">Get alerts about potential staffing shortages</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#27AE60] font-bold">✓</span>
                <span className="text-[#6E6E6E]">Optimize vacation approvals around project deadlines</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stat Banner 2 */}
      <section className="py-12 px-6 bg-white border-t border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-semibold text-[#1A1A1A]">
            <span className="text-3xl font-bold text-[#2D9CDB]">68% </span>
            of employees say toggling between apps makes them less productive and wastes up to 32 days of productive work time per year.
          </p>
          <p className="mt-3 text-sm text-[#6E6E6E]">Source: RingCentral</p>
        </div>
      </section>

      {/* Feature - Client Profitability */}
      <section className="py-16 px-6 md:px-12 bg-[#F4F8FB]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">Profitability insights</h2>
            <p className="text-lg text-[#6E6E6E]">
              The AI automatically analyzes time tracking data to reveal which clients, projects, and tasks are most profitable. Make data-driven decisions about resource allocation, pricing strategies, and client retention.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#27AE60] font-bold">✓</span>
                <span className="text-[#6E6E6E]">See profitability breakdowns by client and project</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#27AE60] font-bold">✓</span>
                <span className="text-[#6E6E6E]">Identify scope creep and budget overruns</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#27AE60] font-bold">✓</span>
                <span className="text-[#6E6E6E]">Get AI-powered recommendations to improve margins</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=900&h=600" 
              alt="Profitability analysis dashboard" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Final Stat Banner */}
      <section className="py-12 px-6 bg-white border-t border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-semibold text-[#1A1A1A]">
            <span className="text-3xl font-bold text-[#2D9CDB]">70% </span>
            of businesses using AI report faster decision-making and increased operational efficiency.
          </p>
          <p className="mt-3 text-sm text-[#6E6E6E]">Source: PwC AI Survey</p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-6 md:px-12 bg-[#F4F8FB]">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-[#1A1A1A]">
            Your team's AI-powered command center
          </h2>
          <p className="text-lg text-[#6E6E6E] max-w-3xl mx-auto">
            Automate actions, ask questions, get actionable insights and run your team with the intelligence of TimeDive AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#27AE60] hover:bg-[#219653] text-white">
              Get started free
            </Button>
            <Button variant="outline" className="border-[#27AE60] text-[#27AE60] hover:bg-[#27AE60]/10">
              Get a demo
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section - Optional */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div className="border rounded-md p-4 hover:bg-gray-50 transition-colors">
              <h3 className="font-semibold text-lg">How does TimeDive AI learn about my team?</h3>
              <Separator className="my-2" />
              <p className="text-[#6E6E6E]">
                TimeDive AI analyzes patterns in your team's time tracking data, project completions, and collaboration history to build a custom model tailored to your organization's unique workflows.
              </p>
            </div>
            
            <div className="border rounded-md p-4 hover:bg-gray-50 transition-colors">
              <h3 className="font-semibold text-lg">Is my team's data secure with TimeDive AI?</h3>
              <Separator className="my-2" />
              <p className="text-[#6E6E6E]">
                Absolutely. TimeDive uses enterprise-grade encryption and strict access controls. Your data is processed in isolated environments and never used to train models for other organizations.
              </p>
            </div>
            
            <div className="border rounded-md p-4 hover:bg-gray-50 transition-colors">
              <h3 className="font-semibold text-lg">Do I need technical expertise to use TimeDive AI?</h3>
              <Separator className="my-2" />
              <p className="text-[#6E6E6E]">
                Not at all. TimeDive AI features a natural language interface that lets you ask questions in plain English. No coding or data science background required.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TimediveAI;

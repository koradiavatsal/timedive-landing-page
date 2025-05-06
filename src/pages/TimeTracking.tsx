
import React from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Clock, 
  ListCheck, 
  CalendarDays, 
  Zap 
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TimeTracking = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-timedive-light-blue py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-4 text-4xl md:text-5xl font-bold">Time Tracking</h1>
            <p className="mb-8 text-xl md:text-2xl text-timedive-dark-text max-w-3xl mx-auto">
              Keep time tracking seamless and run payroll on point, no matter how the team works.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="primary-button">Get Started Free</Button>
              <Button className="secondary-button">Get a Demo</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stat Callout */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-2xl md:text-3xl font-bold text-timedive-primary max-w-4xl mx-auto">
            Companies that implement time tracking tools report <span className="text-timedive-accent">23% increase</span> in overall productivity
          </p>
        </div>
      </section>

      {/* Feature Section 1 - Attendance Tracking */}
      <section className="py-16 md:py-20 bg-timedive-lighter-blue">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Track time specific to tasks and projects</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-timedive-accent mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Clock in/out</h4>
                    <p>Simple and intuitive time tracking for your entire team.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ListCheck className="h-6 w-6 text-timedive-accent mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Tag time to tasks/clients</h4>
                    <p>Associate work hours with specific projects and clients.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CalendarDays className="h-6 w-6 text-timedive-accent mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Overview of what was worked on</h4>
                    <p>Get detailed insights into how time was spent across your team.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Dashboard with charts and graphs" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 2 - Punch Board */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Punch board interface" 
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Manage real-time visibility on your team's working status</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-timedive-accent mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Who's working</h4>
                    <p>See who's actively working in real-time.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ListCheck className="h-6 w-6 text-timedive-accent mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">On break</h4>
                    <p>Track break times and durations automatically.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Zap className="h-6 w-6 text-timedive-accent mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Signed off</h4>
                    <p>Know exactly when team members have ended their workday.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 3 - Location-based Time Tracking */}
      <section className="py-16 md:py-20 bg-timedive-lighter-blue">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">No more awkward check-ins</h2>
              <p className="mb-6 text-lg">Great for hybrid and remote teams who need flexibility but still want accountability.</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CalendarDays className="h-6 w-6 text-timedive-accent mr-3 mt-1" />
                  <div>
                    <p>Highlights accurate time tracking during remote meetings.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Zap className="h-6 w-6 text-timedive-accent mr-3 mt-1" />
                  <div>
                    <p>Verify location for field teams and remote workers.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Mobile screen with map" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 4 - Reporting & Analytics */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Reports dashboard" 
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Timesheet and payroll-ready reports</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ListCheck className="h-6 w-6 text-timedive-accent mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Get breakdowns by project/client</h4>
                    <p>See exactly how much time was spent on each project or client.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Zap className="h-6 w-6 text-timedive-accent mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">One-click exports</h4>
                    <p>Export reports in various formats with a single click.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-timedive-accent mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Integrate with payroll systems</h4>
                    <p>Connect with your existing payroll systems for seamless processing.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stat Callout 2 */}
      <section className="py-12 bg-timedive-lighter-blue">
        <div className="container mx-auto px-4">
          <p className="text-center text-2xl md:text-3xl font-bold text-timedive-primary max-w-4xl mx-auto">
            Automating your payroll with time tracking tools cuts down manual errors by up to <span className="text-timedive-accent">95%</span>
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-20 bg-timedive-light-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Make every hour count</h2>
          <p className="mb-8 text-xl max-w-3xl mx-auto">
            Get full team-visibility, and ensure everyone spends time where it matters the most
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="primary-button">Get Started Free</Button>
            <Button className="secondary-button">Get a Demo</Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg p-1">
                <AccordionTrigger className="px-4 py-2 hover:no-underline">
                  Can I try time tracking with TimeDive for free?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  Yes, TimeDive offers a free trial that includes all time tracking features. You can sign up for the free trial without providing payment information and test all the features for 14 days.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border rounded-lg p-1">
                <AccordionTrigger className="px-4 py-2 hover:no-underline">
                  Why do I need software for time tracking?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  Time tracking software automates what would otherwise be a manual process prone to errors. It provides accurate data on how time is spent, improves payroll accuracy, increases accountability, and helps identify productivity patterns across your team.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border rounded-lg p-1">
                <AccordionTrigger className="px-4 py-2 hover:no-underline">
                  How should I choose a time tracking tool?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  When choosing a time tracking tool, consider the size of your team, the nature of your work, and what specific features you need (project tracking, client billing, payroll integration, etc.). TimeDive is designed to scale with your team and offers customizable features to meet a wide range of business needs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TimeTracking;

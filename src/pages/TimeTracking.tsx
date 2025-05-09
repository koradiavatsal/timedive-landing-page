import React from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Clock, ListCheck, CalendarDays, Zap } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const TimeTracking = () => {
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-timedive-light-blue py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-4 text-4xl font-bold md:text-4xl">Time Tracking</h1>
            <p className="mb-8 text-xl text-timedive-dark-text max-w-3xl mx-auto md:text-sm">
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
              <h2 className="text-3xl mb-6 font-medium md:text-lg">
Track time specific to tasks and projects</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-timedive-accent mr-3 mt-1" />
                  <div>
                    
                    <p className="text-sm">Your team can clock-in, take breaks, grab lunch or punch out for the day - all with one click.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ListCheck className="h-6 w-6 text-timedive-accent mr-3 mt-1" />
                  <div>
                    
                    <p className="text-sm">Assign tasks and projects so your team can log their hours for task, projects, and clients.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CalendarDays className="h-6 w-6 text-timedive-accent mr-3 mt-1" />
                  <div>
                    
                    <p className="text-sm">Complete overview on what your team has worked on so you can stop guessing "What did John work on last Friday?"</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img alt="Dashboard with charts and graphs" className="w-full h-auto" src="/lovable-uploads/d311548e-55f2-488b-978e-740af8ddea3c.png" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 2 - Punch Board */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg">
              <img alt="Punch board interface" className="w-full h-auto" src="/lovable-uploads/ed116680-1e7a-4733-bf37-83c82ec8a1a4.png" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl mb-6 font-medium md:text-lg">Manage real-time visibility on your team's working status</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-timedive-accent mr-3 mt-1" />
                  <div>
                    <h4 className="text-sm font-normal">Who's working</h4>
                    
                  </div>
                </li>
                <li className="flex items-start">
                  <ListCheck className="h-6 w-6 text-timedive-accent mr-3 mt-1" />
                  <div>
                    <h4 className="text-sm font-normal">On break</h4>
                    
                  </div>
                </li>
                <li className="flex items-start">
                  <Zap className="h-6 w-6 text-timedive-accent mr-3 mt-1" />
                  <div>
                    <h4 className="text-sm font-normal">or signed off for the day</h4>
                    
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
              <h2 className="text-3xl mb-6 font-medium md:text-lg">No more awkward check-ins</h2>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CalendarDays className="h-6 w-6 text-timedive-accent mr-3 mt-1" />
                  <div>
                    <p className="font-normal text-sm">For hybrid and remote teams - stay on top of time no matter where your team is.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Zap className="h-6 w-6 text-timedive-accent mr-3 mt-1" />
                  <div>
                    <p className="text-sm">Ensure accurate time tracking during on-site work or meetings</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img alt="Mobile screen with map" className="w-full h-auto" src="/lovable-uploads/d827cd4b-a2a9-4d6b-8dc7-42b641d05762.png" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 4 - Reporting & Analytics */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" alt="Reports dashboard" className="w-full h-auto" />
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
    </div>;
};
export default TimeTracking;
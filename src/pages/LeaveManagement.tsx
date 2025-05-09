
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CalendarDays, Users, FileText } from 'lucide-react';

const LeaveManagement = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#EAF6FF] to-[#CDEBFF] px-6 lg:px-24 pt-16 pb-32 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl text-[#1A1A1A] mb-4 md:text-4xl font-bold">Leave Management</h1>
          <p className="text-lg text-[#444444] mb-8 max-w-3xl mx-auto font-normal md:text-sm">
            Simple leave requests, quick approvals, and a shared calendar to keep everyone in sync.
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

      {/* Leave Requests Section */}
      <section className="px-6 lg:px-24 py-16 mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="uppercase text-sm font-semibold text-[#6E6E6E] mb-2">LEAVE REQUEST</h3>
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">
                Streamlined leave requests and approvals
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-2">
                  <span className="text-[#27AE60] font-bold">•</span>
                  <p className="text-sm">Employees can submit leave requests in just 3 clicks</p>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#27AE60] font-bold">•</span>
                  <p className="text-sm">Managers get notified instantly and can review overlapping time off and approve or decline on the go</p>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#27AE60] font-bold">•</span>
                  <p className="text-sm">Employees can check their leave balance instantly</p>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img alt="Leave request form interface" className="w-full h-auto" src="/lovable-uploads/92b47ad9-fe65-4a00-80ee-fb4380bc1c74.png" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="px-6 lg:px-24 py-16 bg-[#F4F8FB]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D9CDB] mb-4">91 mins</h2>
          <p className="text-xl text-[#1A1A1A]">average time that employees can save monthly with TimeDive PTO</p>
        </div>
      </section>

      {/* Leave Policies Section */}
      <section className="px-6 lg:px-24 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-1 gap-6">
                <img alt="Leave type editor interface" className="w-full h-auto rounded-lg shadow-md" src="/lovable-uploads/e837b655-9032-4f94-8936-b5bee4d5b073.png" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="uppercase text-sm font-semibold text-[#6E6E6E] mb-2">CUSTOMIZE YOUR PTO</h3>
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">
                Create custom leave policies
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-2">
                  <span className="text-[#27AE60] font-bold">•</span>
                  <p className="text-sm">Create different leave types, define quotas, and accrual rules specific to your company's needs</p>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#27AE60] font-bold">•</span>
                  <p className="text-sm">Enable privacy settings for sensitive leave types like sick leave</p>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#27AE60] font-bold">•</span>
                  <p className="text-sm">Configure holiday calendar specific to different offices and regions</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Integration Section */}
      <section className="px-6 lg:px-24 py-16 bg-[#F4F8FB]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="uppercase text-sm font-semibold text-[#6E6E6E] mb-2">CALENDAR INTEGRATION</h3>
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">
                Calendar sync for team-wide visibility
              </h2>
              <p className="text-sm mb-4">
                Integrate with Google Calendar and Microsoft Outlook to automatically display team members' time off
              </p>
              <p className="text-sm mb-6">
                Whether you're planning meetings, allocating tasks, or managing deadlines, you'll always know who's available - no follow-ups, no surprises.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <div className="space-y-6">
                <h3 className="text-center font-semibold text-lg">Integrations</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                    <img alt="Google Calendar icon" src="/lovable-uploads/7d5a3f87-feef-43a0-aff4-a722f0c65a98.png" className="w-16 h-16 mb-3" />
                    <h4 className="text-center font-semibold mb-2">Google Calendar</h4>
                    <p className="text-center text-sm text-[#6E6E6E] mb-4">Sync leave with your Google Calendar</p>
                    <Button variant="outline" className="w-full">Connect</Button>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                    <CalendarDays className="w-16 h-16 mb-3 text-blue-500" />
                    <h4 className="text-center font-semibold mb-2">Outlook Calendar</h4>
                    <p className="text-center text-sm text-[#6E6E6E] mb-4">Sync leave with Microsoft Outlook</p>
                    <Button variant="outline" className="w-full">Connect</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reporting Section */}
      <section className="px-6 lg:px-24 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-6">
                <h3 className="font-semibold text-center">Download TimeDive Reports</h3>
                <div className="bg-[#F4F8FB] p-6 rounded-lg shadow-md">
                  <img alt="Report dashboard" className="w-full h-auto rounded-lg shadow-md mb-6" src="/lovable-uploads/18bd24c3-34ab-4f94-90e2-49c3ad41a116.png" />
                  
                  <div className="grid grid-cols-1 gap-3">
                    <div className="bg-white p-2 rounded flex justify-between items-center">
                      <span className="text-sm">Leave Usage Report</span>
                      <Button size="sm" variant="ghost" className="text-[#2D9CDB]">Download</Button>
                    </div>
                    <div className="bg-white p-2 rounded flex justify-between items-center">
                      <span className="text-sm">Leave Balance Report</span>
                      <Button size="sm" variant="ghost" className="text-[#2D9CDB]">Download</Button>
                    </div>
                  </div>
                </div>
                <Button className="bg-[#2D9CDB] w-full">Download All</Button>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="uppercase text-sm font-semibold text-[#6E6E6E] mb-2">REPORTING & ANALYTICS</h3>
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">
                Leave and leave balance reports
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-2">
                  <span className="text-[#27AE60] font-bold">•</span>
                  <p className="text-sm">Track leave usage across team, departments, or individuals</p>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#27AE60] font-bold">•</span>
                  <p className="text-sm">Generate leave balance report to track compliance with company policies and labor laws</p>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#27AE60] font-bold">•</span>
                  <p className="text-sm">Identify upcoming leave trends and plan your project lineup</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner 2 */}
      <section className="px-6 lg:px-24 py-16 bg-[#F4F8FB]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xl text-[#1A1A1A]">
            Using TimeDive, leaders can cut admin work by <span className="text-4xl font-bold text-[#2D9CDB]">80%</span> and eliminate payroll errors by <span className="text-4xl font-bold text-[#2D9CDB]">97%</span>
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-24 py-16 bg-gradient-to-b from-[#EAF6FF] to-[#CDEBFF]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Make time off easy for everyone</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Automate leave requests, approvals, and tracking so you can focus on leading the team.
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
                Can I try leave tracking with TimeDive for free?
              </AccordionTrigger>
              <AccordionContent className="text-[#6E6E6E] pt-2 pb-4">
                Yes, TimeDive offers a free trial that includes all leave management features. You can use it with your team for 14 days without any commitment.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border rounded-lg p-2">
              <AccordionTrigger className="text-lg font-medium text-[#1A1A1A] hover:no-underline">
                Why do I need software to manage PTO?
              </AccordionTrigger>
              <AccordionContent className="text-[#6E6E6E] pt-2 pb-4">
                Managing leave requests and approvals manually can be time-consuming and error-prone. TimeDive automates the entire process, from request submission to approval, tracking balances, and reporting, saving your team valuable time and reducing administrative overhead.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border rounded-lg p-2">
              <AccordionTrigger className="text-lg font-medium text-[#1A1A1A] hover:no-underline">
                How should I choose a leave management tool?
              </AccordionTrigger>
              <AccordionContent className="text-[#6E6E6E] pt-2 pb-4">
                When selecting a leave management tool, consider factors like ease of use, customization options for leave policies, integration capabilities with your existing systems, reporting features, and mobile accessibility. TimeDive is designed to be intuitive while offering powerful customization and integration options.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  )
};

export default LeaveManagement;


import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Book, BookText, Library, Clock, Calculator, Timer, FileText, Convert } from "lucide-react";
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 px-6 shadow-sm sticky top-0 z-50">
      <div className="container-wrapper flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold text-timedive-primary flex items-center">
            <span className="text-timedive-accent">Time</span>Dive
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="p-2 text-timedive-gray focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <a href="#features" className="text-timedive-gray hover:text-timedive-primary">Features</a>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 invisible group-hover:visible transition-all">
              <Link to="/time-tracking" className="block px-4 py-2 text-timedive-gray hover:text-timedive-primary hover:bg-timedive-lighter-blue">Time Tracking</Link>
              <Link to="/project-management" className="block px-4 py-2 text-timedive-gray hover:text-timedive-primary hover:bg-timedive-lighter-blue">Project Management</Link>
              <Link to="/leave-management" className="block px-4 py-2 text-timedive-gray hover:text-timedive-primary hover:bg-timedive-lighter-blue">Leave Management</Link>
              <Link to="/timedive-ai" className="block px-4 py-2 text-timedive-gray hover:text-timedive-primary hover:bg-timedive-lighter-blue">TimeDive AI</Link>
            </div>
          </div>
          
          <div className="relative group">
            <a href="#solutions" className="text-timedive-gray hover:text-timedive-primary">Solutions</a>
            <div className="absolute left-0 mt-2 w-[600px] bg-white shadow-lg rounded-md py-4 px-6 invisible group-hover:visible transition-all">
              <div className="grid grid-cols-3 gap-6">
                {/* Column 1: Company Type */}
                <div>
                  <h4 className="font-semibold text-sm mb-3 text-timedive-black">Company Type</h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#startup" className="text-sm text-timedive-gray hover:text-timedive-primary flex items-center gap-2">
                        <span className="w-5 h-5 bg-timedive-lighter-blue rounded-md flex items-center justify-center">
                          <span className="w-2 h-2 bg-timedive-accent rounded-full"></span>
                        </span>
                        Startup
                      </a>
                    </li>
                    <li>
                      <a href="#small-business" className="text-sm text-timedive-gray hover:text-timedive-primary flex items-center gap-2">
                        <span className="w-5 h-5 bg-timedive-lighter-blue rounded-md flex items-center justify-center">
                          <span className="w-2 h-2 bg-timedive-accent rounded-full"></span>
                        </span>
                        Small business
                      </a>
                    </li>
                    <li>
                      <a href="#nonprofit" className="text-sm text-timedive-gray hover:text-timedive-primary flex items-center gap-2">
                        <span className="w-5 h-5 bg-timedive-lighter-blue rounded-md flex items-center justify-center">
                          <span className="w-2 h-2 bg-timedive-accent rounded-full"></span>
                        </span>
                        Nonprofit
                      </a>
                    </li>
                    <li>
                      <a href="#remote-teams" className="text-sm text-timedive-gray hover:text-timedive-primary flex items-center gap-2">
                        <span className="w-5 h-5 bg-timedive-lighter-blue rounded-md flex items-center justify-center">
                          <span className="w-2 h-2 bg-timedive-accent rounded-full"></span>
                        </span>
                        Remote teams
                      </a>
                    </li>
                  </ul>
                </div>
                
                {/* Column 2: Industries */}
                <div>
                  <h4 className="font-semibold text-sm mb-3 text-timedive-black">Industries</h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#agencies" className="text-sm text-timedive-gray hover:text-timedive-primary flex items-center gap-2">
                        <span className="w-5 h-5 bg-timedive-lighter-blue rounded-md flex items-center justify-center">
                          <span className="w-2 h-2 bg-timedive-accent rounded-full"></span>
                        </span>
                        Agencies
                      </a>
                    </li>
                    <li>
                      <a href="#consulting" className="text-sm text-timedive-gray hover:text-timedive-primary flex items-center gap-2">
                        <span className="w-5 h-5 bg-timedive-lighter-blue rounded-md flex items-center justify-center">
                          <span className="w-2 h-2 bg-timedive-accent rounded-full"></span>
                        </span>
                        Consulting
                      </a>
                    </li>
                    <li>
                      <a href="#financial-services" className="text-sm text-timedive-gray hover:text-timedive-primary flex items-center gap-2">
                        <span className="w-5 h-5 bg-timedive-lighter-blue rounded-md flex items-center justify-center">
                          <span className="w-2 h-2 bg-timedive-accent rounded-full"></span>
                        </span>
                        Financial Services
                      </a>
                    </li>
                    <li>
                      <a href="#freelance" className="text-sm text-timedive-gray hover:text-timedive-primary flex items-center gap-2">
                        <span className="w-5 h-5 bg-timedive-lighter-blue rounded-md flex items-center justify-center">
                          <span className="w-2 h-2 bg-timedive-accent rounded-full"></span>
                        </span>
                        Freelance
                      </a>
                    </li>
                    <li>
                      <a href="#retail" className="text-sm text-timedive-gray hover:text-timedive-primary flex items-center gap-2">
                        <span className="w-5 h-5 bg-timedive-lighter-blue rounded-md flex items-center justify-center">
                          <span className="w-2 h-2 bg-timedive-accent rounded-full"></span>
                        </span>
                        Retail
                      </a>
                    </li>
                  </ul>
                </div>
                
                {/* Column 3: Help */}
                <div>
                  <h4 className="font-semibold text-sm mb-3 text-timedive-black">Help</h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#blog" className="text-sm text-timedive-gray hover:text-timedive-primary flex items-center gap-2">
                        <span className="w-5 h-5 bg-timedive-lighter-blue rounded-md flex items-center justify-center">
                          <BookText className="h-3 w-3 text-timedive-accent" />
                        </span>
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#knowledge-centre" className="text-sm text-timedive-gray hover:text-timedive-primary flex items-center gap-2">
                        <span className="w-5 h-5 bg-timedive-lighter-blue rounded-md flex items-center justify-center">
                          <Library className="h-3 w-3 text-timedive-accent" />
                        </span>
                        Knowledge Centre
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <a href="#resources" className="text-timedive-gray hover:text-timedive-primary">Resources</a>
            <div className="absolute left-0 mt-2 w-[400px] bg-white shadow-lg rounded-md py-4 px-6 invisible group-hover:visible transition-all">
              <h4 className="font-semibold text-sm mb-3 text-timedive-black">Free Tools</h4>
              <div className="grid grid-cols-1 gap-3">
                <a href="/free-timesheet-generator" className="flex items-center gap-2 p-2 rounded-md hover:bg-timedive-lighter-blue">
                  <span className="w-8 h-8 bg-timedive-lighter-blue rounded-md flex items-center justify-center">
                    <Clock className="h-4 w-4 text-timedive-accent" />
                  </span>
                  <div>
                    <span className="font-medium text-timedive-black">Free Timesheet Generator</span>
                    <p className="text-xs text-timedive-gray">Create timesheets for your team in seconds</p>
                  </div>
                </a>
                <a href="/free-military-time-converter" className="flex items-center gap-2 p-2 rounded-md hover:bg-timedive-lighter-blue">
                  <span className="w-8 h-8 bg-timedive-lighter-blue rounded-md flex items-center justify-center">
                    <Convert className="h-4 w-4 text-timedive-accent" />
                  </span>
                  <div>
                    <span className="font-medium text-timedive-black">Free Military Time Converter</span>
                    <p className="text-xs text-timedive-gray">Convert between standard and military time</p>
                  </div>
                </a>
                <a href="/free-overtime-calculator" className="flex items-center gap-2 p-2 rounded-md hover:bg-timedive-lighter-blue">
                  <span className="w-8 h-8 bg-timedive-lighter-blue rounded-md flex items-center justify-center">
                    <Calculator className="h-4 w-4 text-timedive-accent" />
                  </span>
                  <div>
                    <span className="font-medium text-timedive-black">Free Overtime Calculator</span>
                    <p className="text-xs text-timedive-gray">Calculate overtime hours and costs</p>
                  </div>
                </a>
                <a href="/free-work-hours-calculator" className="flex items-center gap-2 p-2 rounded-md hover:bg-timedive-lighter-blue">
                  <span className="w-8 h-8 bg-timedive-lighter-blue rounded-md flex items-center justify-center">
                    <FileText className="h-4 w-4 text-timedive-accent" />
                  </span>
                  <div>
                    <span className="font-medium text-timedive-black">Free Work Hours Calculator</span>
                    <p className="text-xs text-timedive-gray">Track and calculate work hours accurately</p>
                  </div>
                </a>
                <a href="/free-pomodoro-timer" className="flex items-center gap-2 p-2 rounded-md hover:bg-timedive-lighter-blue">
                  <span className="w-8 h-8 bg-timedive-lighter-blue rounded-md flex items-center justify-center">
                    <Timer className="h-4 w-4 text-timedive-accent" />
                  </span>
                  <div>
                    <span className="font-medium text-timedive-black">Free Pomodoro Timer</span>
                    <p className="text-xs text-timedive-gray">Boost productivity with timed work intervals</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          <a href="#pricing" className="text-timedive-gray hover:text-timedive-primary">Pricing</a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button className="primary-button">Get Started Free</Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 p-4 shadow-md">
            <div className="flex flex-col space-y-4">
              <div className="py-2">
                <div className="font-medium mb-2">Features</div>
                <div className="pl-4 space-y-2">
                  <Link to="/time-tracking" className="block py-1 text-timedive-gray hover:text-timedive-primary">Time Tracking</Link>
                  <Link to="/project-management" className="block py-1 text-timedive-gray hover:text-timedive-primary">Project Management</Link>
                  <Link to="/leave-management" className="block py-1 text-timedive-gray hover:text-timedive-primary">Leave Management</Link>
                  <Link to="/timedive-ai" className="block py-1 text-timedive-gray hover:text-timedive-primary">TimeDive AI</Link>
                </div>
              </div>
              
              <div className="py-2">
                <div className="font-medium mb-2">Solutions</div>
                <div className="pl-4 space-y-2">
                  <div className="mb-2">
                    <div className="text-sm font-medium text-timedive-black mb-1">Company Type</div>
                    <a href="#startup" className="block py-1 text-timedive-gray hover:text-timedive-primary">Startup</a>
                    <a href="#small-business" className="block py-1 text-timedive-gray hover:text-timedive-primary">Small business</a>
                    <a href="#nonprofit" className="block py-1 text-timedive-gray hover:text-timedive-primary">Nonprofit</a>
                    <a href="#remote-teams" className="block py-1 text-timedive-gray hover:text-timedive-primary">Remote teams</a>
                  </div>
                  
                  <div className="mb-2">
                    <div className="text-sm font-medium text-timedive-black mb-1">Industries</div>
                    <a href="#agencies" className="block py-1 text-timedive-gray hover:text-timedive-primary">Agencies</a>
                    <a href="#consulting" className="block py-1 text-timedive-gray hover:text-timedive-primary">Consulting</a>
                    <a href="#financial-services" className="block py-1 text-timedive-gray hover:text-timedive-primary">Financial Services</a>
                    <a href="#freelance" className="block py-1 text-timedive-gray hover:text-timedive-primary">Freelance</a>
                    <a href="#retail" className="block py-1 text-timedive-gray hover:text-timedive-primary">Retail</a>
                  </div>
                  
                  <div className="mb-2">
                    <div className="text-sm font-medium text-timedive-black mb-1">Help</div>
                    <a href="#blog" className="block py-1 text-timedive-gray hover:text-timedive-primary">Blog</a>
                    <a href="#knowledge-centre" className="block py-1 text-timedive-gray hover:text-timedive-primary">Knowledge Centre</a>
                  </div>
                </div>
              </div>
              
              <div className="py-2">
                <div className="font-medium mb-2">Resources</div>
                <div className="pl-4 space-y-2">
                  <a href="/free-timesheet-generator" className="block py-1 text-timedive-gray hover:text-timedive-primary">Free Timesheet Generator</a>
                  <a href="/free-military-time-converter" className="block py-1 text-timedive-gray hover:text-timedive-primary">Free Military Time Converter</a>
                  <a href="/free-overtime-calculator" className="block py-1 text-timedive-gray hover:text-timedive-primary">Free Overtime Calculator</a>
                  <a href="/free-work-hours-calculator" className="block py-1 text-timedive-gray hover:text-timedive-primary">Free Work Hours Calculator</a>
                  <a href="/free-pomodoro-timer" className="block py-1 text-timedive-gray hover:text-timedive-primary">Free Pomodoro Timer</a>
                </div>
              </div>
              
              <a href="#pricing" className="text-timedive-gray hover:text-timedive-primary py-2">Pricing</a>
              <Button className="primary-button w-full">Get Started Free</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-timedive-light-blue section-padding">
      <div className="container-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h1 className="mb-4">
              Keep <span className="text-timedive-accent">work</span> moving
            </h1>
            <p className="mb-6 text-timedive-dark-text">
              Team management platform that brings all your team's work together in one place.  
              Prioritize tasks, assign work across teams, and automate workflows.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="primary-button">Get Started Free</Button>
              <Button className="secondary-button">Get a Demo</Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/lovable-uploads/7d5a3f87-feef-43a0-aff4-a722f0c65a98.png" 
              alt="Dashboard preview" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute -top-4 -right-4 bg-white p-2 rounded-lg shadow-lg">
              <div className="bg-timedive-accent text-white px-3 py-1 rounded-md text-sm">
                AI Smart
              </div>
            </div>
            <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-lg shadow-lg max-w-[150px]">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-timedive-primary rounded-full flex items-center justify-center text-white text-xs">JD</div>
                <div className="ml-2 text-sm font-medium">John D.</div>
              </div>
              <div className="text-xs text-timedive-gray">14 hours this week</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

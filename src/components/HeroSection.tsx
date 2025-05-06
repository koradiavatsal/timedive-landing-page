import React from 'react';
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section className="bg-timedive-light-blue py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h1 className="mb-4">
              Keep <span className="text-timedive-accent">work</span> moving
            </h1>
            <p className="mb-6 text-timedive-dark-text text-[0D4FAF]">
              Team management platform that brings all your team's work together in one place.  
              Prioritize tasks, assign work across teams, and automate workflows.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="primary-button">Get Started Free</Button>
              <Button className="secondary-button">Get a Demo</Button>
            </div>
          </div>
          <div className="relative mt-8 md:mt-0">
            <img src="/lovable-uploads/e837b655-9032-4f94-8936-b5bee4d5b073.png" alt="TimeDive Dashboard UI" className="w-full h-auto rounded-lg shadow-lg" />
            <div className="absolute -top-4 -right-4 bg-white p-2 rounded-lg shadow-lg">
              <div className="bg-timedive-accent text-white px-3 py-1 rounded-md text-sm">
                AI Smart
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;

import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-timedive-light-blue section-padding">
      <div className="container-wrapper">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="mb-4">
            Keep <span className="text-timedive-accent">work</span> moving
          </h1>
          <p className="mb-6 text-timedive-dark-text">
            Team management platform that brings all your team's work together in one place.  
            Prioritize tasks, assign work across teams, and automate workflows.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="primary-button">Get Started Free</Button>
            <Button className="secondary-button">Get a Demo</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


import React from 'react';
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const modules = ['Projects', 'Time Tracking', 'Time off', 'Skills', 'Calendar'];

  return (
    <section className="section-padding bg-white">
      <div className="container-wrapper">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg mb-6">
            With all the team data connected in one place, drive your team and lead them with competitive edge.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {modules.map((module, index) => (
              <div 
                key={index}
                className="px-4 py-2 bg-timedive-light-blue rounded-full text-timedive-primary text-sm font-medium"
              >
                {module}
              </div>
            ))}
          </div>
          
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
              alt="Team member" 
              className="w-40 h-40 object-cover rounded-full mx-auto"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="primary-button">Get started free</Button>
            <Button className="secondary-button">Get a demo</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

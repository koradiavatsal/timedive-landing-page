
import React from 'react';
import { Button } from "@/components/ui/button";
import { CircleCheck } from 'lucide-react';

const AICapabilities = () => {
  const capabilities = [
    {
      title: 'Client profitability predictor',
      description: 'Know which clients will be most profitable for your team.'
    },
    {
      title: 'AI virtual assistant',
      description: 'Smart AI assistant to boost productivity further.'
    },
    {
      title: 'AI team assignment',
      description: 'Auto-assign team members based on workload and availability.'
    },
    {
      title: 'Spot leave trends',
      description: 'Get insights into leave patterns and plan future projects.'
    },
    {
      title: 'Burnout prediction',
      description: 'Manage team wellness while keeping productivity high.'
    },
    {
      title: 'Smart deadline predictions',
      description: 'Get accurate deadline estimates based on historic patterns.'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-wrapper">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Supercharge your <span className="text-timedive-accent">team</span> with AI.
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            TimeDive AI helps you work smarter, better.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <div key={index} className="flex items-start space-x-3 p-4">
              <CircleCheck className="h-6 w-6 text-timedive-accent flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium mb-1">{capability.title}</h4>
                <p className="text-sm text-timedive-gray">{capability.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="primary-button">TimeDive AI</Button>
          <p className="mt-6 text-sm text-timedive-light-gray">
            Leaders save up to ~20 hours every month when admin work with TimeDive AI
          </p>
        </div>
      </div>
    </section>
  );
};

export default AICapabilities;

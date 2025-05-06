
import React from 'react';
import { Button } from "@/components/ui/button";

const Integrations = () => {
  const integrations = [
    {
      name: 'Slack',
      logo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'Google Calendar',
      logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'Outlook',
      logo: 'https://images.unsplash.com/photo-1614680376739-414d95ff43df?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'Notion',
      logo: 'https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'Gusto',
      logo: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-wrapper">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Integrations</h2>
          <p className="text-lg mb-8">
            TimeDive works with the tools you already use to streamline your workflow.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {integrations.map((integration, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-2">
                  <img 
                    src={integration.logo} 
                    alt={`${integration.name} logo`}
                    className="w-8 h-8 object-contain" 
                  />
                </div>
                <p className="text-sm">{integration.name}</p>
              </div>
            ))}
          </div>
          
          <Button className="primary-button">Get started free</Button>
          <p className="text-sm text-timedive-gray mt-4">Add more apps</p>
        </div>
      </div>
    </section>
  );
};

export default Integrations;


import React from 'react';

const WhyTimeDive = () => {
  const reasons = [
    {
      title: 'More clarity and accountability',
      description: 'Convert your big-picture goals to detailed work items. With TimeDive, every task shows up, every effort gets tracked, and everything becomes visible for the team.'
    },
    {
      title: 'Keep your team in sync',
      description: 'Real-time updates and shared visibility helps your team move faster and make better decisions. Work together, not apart.'
    },
    {
      title: 'Work smarter with your AI teammate',
      description: 'Get advanced insights and smarter recommendations to help you and your team work more efficiently.'
    }
  ];

  return (
    <section className="section-padding bg-timedive-light-blue">
      <div className="container-wrapper">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What sets TimeDive apart?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-timedive-primary text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-white">{reason.title}</h3>
              <p className="text-white text-opacity-90 text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTimeDive;

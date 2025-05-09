import React from 'react';
import { ArrowRight } from 'lucide-react';
const FeatureSection = () => {
  const features = [{
    title: 'Time Tracking',
    description: 'Track projects and timesheet allocation in real-time.',
    linkText: 'See time tracking',
    link: '#time-tracking'
  }, {
    title: 'Projects management',
    description: 'Create, prioritize and assign projects and tasks in one place.',
    linkText: 'See project management',
    link: '#project-management'
  }, {
    title: 'Leave management',
    description: 'Automate timecards, approvals and leave requests directly from the system.',
    linkText: 'See leave management',
    link: '#leave-management'
  }];
  return <section className="section-padding bg-white">
      <div className="container-wrapper">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Your entire <span className="text-timedive-accent">team</span> ecosystem.</h2>
          <p className="text-xl max-w-3xl mx-auto">One dashboard.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => <div key={index} className="card-feature">
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="mb-6 flex-grow text-sm">{feature.description}</p>
              <a href={feature.link} className="flex items-center text-timedive-primary font-medium hover:text-timedive-accent transition-colors">
                {feature.linkText} <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>)}
        </div>
      </div>
    </section>;
};
export default FeatureSection;
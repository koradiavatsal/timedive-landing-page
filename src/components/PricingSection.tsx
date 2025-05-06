
import React from 'react';
import { Button } from "@/components/ui/button";
import { CircleCheck } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Personal',
      description: 'For individuals looking to manage their time better',
      price: {
        monthly: 5,
        yearly: 3
      },
      features: [
        'Unlimited tasks',
        'Basic reporting',
        'Calendar integration',
        'Up to three projects',
        'Email notifications',
        'Basic time tracking',
        'Mobile apps (iOS & Android)',
        'Custom fields (up to 3)',
        'Notifications and alerts',
        'Multi-language (5+ languages)'
      ]
    },
    {
      name: 'Growth',
      description: 'For growing teams that need to track more projects in detail',
      price: {
        monthly: 12,
        yearly: 9
      },
      popular: true,
      features: [
        '5-8 team members',
        'Everything in Personal',
        'Integration with up to 10 tools',
        'API access',
        'Project dashboards',
        'Team reporting',
        'Client portals (5 clients max)',
        'Advanced time tracking',
        'User accounts and business',
        'Customizable automation (5 workflows)'
      ]
    },
    {
      name: 'Ultimate',
      description: 'For teams ready for full growth',
      price: {
        monthly: 25,
        yearly: 19
      },
      features: [
        '10+ team members',
        'Everything in Growth',
        'AI virtual assistant',
        'Dedicated support',
        'Advanced analytics',
        'Unlimited integrations',
        'Employee directory',
        'Dedicated reports',
        'Unlimited portals',
        'Integration with Slack + Calendar (Google & Outlook)'
      ]
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-wrapper">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Easily manage your team. Start free.</h2>
          <p className="text-lg">No credit card required.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`border rounded-xl p-6 relative flex flex-col h-full ${
                plan.popular ? 'border-timedive-accent shadow-md' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-timedive-accent text-white px-4 py-1 rounded-full text-sm">
                  Most popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-timedive-gray text-sm mb-4">{plan.description}</p>
              <div className="mb-6">
                <div className="flex items-end">
                  <span className="text-3xl font-bold">${plan.price.monthly}</span>
                  <span className="text-timedive-gray ml-1">/user /month</span>
                </div>
                <p className="text-sm text-timedive-gray">${plan.price.yearly}/user billed annually</p>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CircleCheck className="h-5 w-5 text-timedive-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${plan.popular ? 'primary-button' : 'secondary-button'}`}
              >
                {plan.popular ? 'Get started now' : 'Start free trial'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

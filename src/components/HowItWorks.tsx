
import React from 'react';

const HowItWorks = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-full bg-timedive-accent w-64 h-64 flex items-center justify-center p-6 mx-auto">
              <div className="text-white text-2xl font-bold text-center">
                <div>How TimeDive</div>
                <div>works</div>
                <div className="mt-4 bg-white text-timedive-accent rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                  ▶
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">What is TimeDive?</h2>
            <p className="mb-4">
              TimeDive is a project and time management solution for teams designed to simplify tracking time spent on tasks, managing your team's workload, overseeing project progress, reducing busy work, and boosting team productivity.
            </p>
            <p>
              Build a quick report in just two clicks. Keep your team on track with Timesheet approval workflows. Save your team time. Get the best out of your data, all in one place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

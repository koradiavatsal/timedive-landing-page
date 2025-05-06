
import React from 'react';

const Footer = () => {
  const footerLinks = [
    {
      title: "TimeDive",
      links: [
        { name: "Home", url: "/" },
        { name: "About Us", url: "#" },
        { name: "Jobs", url: "#" },
        { name: "Press", url: "#" },
        { name: "Contact", url: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "Blog", url: "#" },
        { name: "Terms of service", url: "#" },
        { name: "Privacy policy", url: "#" },
        { name: "Security", url: "#" }
      ]
    },
    {
      title: "Features",
      links: [
        { name: "Time Tracking", url: "#" },
        { name: "Project Management", url: "#" },
        { name: "Team Analytics", url: "#" },
        { name: "Resource Planning", url: "#" },
        { name: "Invoicing", url: "#" }
      ]
    },
    {
      title: "Tools",
      links: [
        { name: "AI Team Management", url: "#" },
        { name: "Time Reporting", url: "#" },
        { name: "Team Scheduling", url: "#" },
        { name: "Developer API", url: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-white py-12 px-6 border-t border-gray-200">
      <div className="container-wrapper">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.url} 
                      className="text-timedive-gray hover:text-timedive-primary text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a href="/" className="text-xl font-bold">
                <span className="text-timedive-accent">Time</span>Dive
              </a>
            </div>
            <div className="text-sm text-timedive-gray">
              © {new Date().getFullYear()} TimeDive. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

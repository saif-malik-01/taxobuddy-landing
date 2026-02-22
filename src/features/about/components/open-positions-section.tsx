'use client';

import { useState } from 'react';
import aboutData from '../../../data/about.json';

interface Job {
  position: string;
  department: string;
  commitment: string;
  location: string;
  category: string;
}

interface JobCategory {
  id: string;
  label: string;
}

export default function OpenPositionsSection() {
  const [showContent, setShowContent] = useState(false);
  const [active, setActive] = useState('all');

  if (!aboutData) {
    return null;
  }

  const jobs: Job[] = aboutData.jobs;
  const jobCategories: JobCategory[] = aboutData.jobCategories;

  const filteredJobs = active === 'all'
    ? jobs
    : jobs.filter(job => job.category === active);

  const displayedJobs = showContent ? filteredJobs : filteredJobs.slice(0, 5);

  return (
    <section className="py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="md:max-w-4xl text-center mx-auto">
          <span className="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter">Join us</span>
          <h2 className="font-heading mb-12 text-7xl lg:text-8xl text-white tracking-7xl lg:tracking-8xl">Open positions</h2>
          <div className="flex flex-wrap justify-center mb-12">
            {jobCategories.map((category) => (
              <div key={category.id} className="w-auto">
                <button
                  className={`inline-block py-5 px-8 font-medium border-2 rounded-full ${
                    active === category.id ? 'text-green-400 border-green-400' : 'text-gray-300 border-transparent'
                  }`}
                  onClick={() => setActive(category.id)}
                >
                  {category.label}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full overflow-x-auto overflow-y-hidden mb-20">
          <div className="flex">
            <div className="flex-1">
              <div className="flex flex-wrap">
                <div className="flex items-center w-full h-16 px-8 py-5 border-b border-gray-900">
                  <p className="min-w-max text-sm text-gray-300 font-medium">Position</p>
                </div>
                {displayedJobs.map((job, index) => (
                  <div key={index} className="flex items-center w-full h-20 px-8 py-5 border-b border-gray-900">
                    <span className="mr-3.5 text-2xl min-w-max text-white tracking-2xl">{job.position}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap">
                <div className="flex items-center w-full h-16 px-8 py-6 border-b border-gray-900">
                  <p className="min-w-max text-sm text-gray-300 font-medium">Department</p>
                </div>
                {displayedJobs.map((job, index) => (
                  <div key={index} className="flex items-center w-full h-20 px-8 py-5 border-b border-gray-900">
                    <span className="inline-block py-3 px-4 text-xs text-green-400 font-medium border-2 border-green-400 rounded-full capitalize">{job.department}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap">
                <div className="flex items-center w-full h-16 px-8 py-6 border-b border-gray-900">
                  <p className="min-w-max text-sm text-gray-300 font-medium">Commitment</p>
                </div>
                {displayedJobs.map((job, index) => (
                  <div key={index} className="flex items-center w-full h-20 px-8 py-5 border-b border-gray-900">
                    <p className="text-gray-300">{job.commitment}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap">
                <div className="flex items-center w-full h-16 px-8 py-6 border-b border-gray-900">
                  <p className="min-w-max text-sm text-gray-300 font-medium">Location</p>
                </div>
                {displayedJobs.map((job, index) => (
                  <div key={index} className="flex items-center w-full h-20 px-8 py-5 border-b border-gray-900">
                    <p className="text-gray-300">{job.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {filteredJobs.length > 5 && (
          <div className="text-center">
            <button
              className="inline-block px-8 py-4 tracking-tighter bg-green-400 hover:bg-green-500 text-black focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-full transition duration-300"
              onClick={() => setShowContent(!showContent)}
            >
              {showContent ? 'Show less' : 'Show more'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import SidebarLayout from '@/components/SidebarLayout';
import { BookOpen, Laptop, Headphones, Calendar, ArrowRight, Shield } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      title: 'Digital Library & Research Resources',
      desc: 'Access thousands of peer-reviewed journals, IEEE and ACM libraries, and course textbooks online.',
      icon: BookOpen,
      action: 'Browse Library',
      link: '/courses',
    },
    {
      title: 'IT Helpdesk & Technical Support',
      desc: 'Assistance with campus WiFi, portal access, LMS troubleshooting, and software licenses.',
      icon: Headphones,
      action: 'Submit Ticket',
      link: '/settings',
    },
    {
      title: 'Academic Advising & Mentorship',
      desc: 'Schedule consultations with faculty advisors for course selection, internships, and research projects.',
      icon: Calendar,
      action: 'View Faculty',
      link: '/courses',
    },
    {
      title: 'Career & Internship Portal',
      desc: 'Resume reviews, mock interviews, campus recruitment drives, and industry networking events.',
      icon: Laptop,
      action: 'View Opportunities',
      link: '/students',
    },
  ];

  return (
    <SidebarLayout>
      <div className="space-y-6 max-w-5xl">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Campus Services
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Academic, technical, and campus life support services available for registered students.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((svc, index) => {
            const Icon = svc.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between hover:border-blue-300 transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">{svc.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{svc.desc}</p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100">
                  <Link
                    href={svc.link}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700"
                  >
                    <span>{svc.action}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SidebarLayout>
  );
}


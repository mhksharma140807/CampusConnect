'use client';

import React from 'react';
import SidebarLayout from '@/components/SidebarLayout';
import { GraduationCap, Award, BookOpen, Users, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
  return (
    <SidebarLayout>
      <div className="space-y-6 max-w-5xl">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            About CampusConnect
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Learn more about our university portal, academic vision, and student community.
          </p>
        </div>

        {/* Hero Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Empowering Excellence in Higher Education
              </h2>
              <span className="text-xs text-blue-600 font-semibold">
                Official Student Management & Academic Information System
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            CampusConnect is an integrated academic portal designed to provide students, faculty, and administrators with seamless access to academic records, course syllabi, assignments, and campus services.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <h3 className="font-bold text-slate-900 text-sm">Academic Quality</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Real-time curriculum tracking, interactive syllabus delivery, and direct faculty communication.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <Users className="w-6 h-6 text-emerald-600" />
            <h3 className="font-bold text-slate-900 text-sm">Student Community</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Connect with fellow classmates across engineering, IT, data science, and technology departments.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <ShieldCheck className="w-6 h-6 text-purple-600" />
            <h3 className="font-bold text-slate-900 text-sm">Verified Credentials</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Instant access to verified attendance percentages, GPA standings, and assignment submissions.
            </p>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}


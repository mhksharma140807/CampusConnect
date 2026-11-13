'use client';

import React from 'react';
import SidebarLayout from '@/components/SidebarLayout';
import { studentData } from '@/data/mockData';
import { Mail, Phone } from 'lucide-react';

export default function ProfilePage() {
  return (
    <SidebarLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Student Profile
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Your personal student profile, academic metrics, and contact details.
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-xs">
          <img
            src={studentData.avatar}
            alt={studentData.name}
            className="w-24 h-24 rounded-2xl object-cover border border-slate-200 shrink-0"
          />

          <div className="flex-1 text-center sm:text-left space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{studentData.name}</h2>
                <p className="text-xs font-semibold text-blue-600">
                  {studentData.rollNo} • {studentData.department}
                </p>
              </div>
              <span className="self-center sm:self-auto text-xs font-semibold bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200">
                {studentData.year}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              {studentData.bio}
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                {studentData.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                {studentData.phone}
              </span>
            </div>
          </div>
        </div>

        {/* Academic Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="bg-white p-5 rounded-2xl border border-slate-200">
            <span className="text-xs text-slate-400 font-semibold block">Attendance Rate</span>
            <span className="text-3xl font-black text-slate-900 mt-1 block">
              {studentData.attendance}%
            </span>
            <span className="text-xs text-emerald-600 font-semibold mt-1 block">
              Good Standing (&gt;75%)
            </span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200">
            <span className="text-xs text-slate-400 font-semibold block">Cumulative GPA</span>
            <span className="text-3xl font-black text-slate-900 mt-1 block">
              {studentData.cgpa}
            </span>
            <span className="text-xs text-blue-600 font-semibold mt-1 block">
              Semester GPA: {studentData.gpa}
            </span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200">
            <span className="text-xs text-slate-400 font-semibold block">Enrolled Courses</span>
            <span className="text-3xl font-black text-slate-900 mt-1 block">
              {studentData.totalCourses}
            </span>
            <span className="text-xs text-slate-500 font-semibold mt-1 block">
              Semester {studentData.semester} Active
            </span>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
          <h3 className="font-bold text-slate-900 text-sm">Skills & Badges</h3>
          <div className="flex flex-wrap gap-2">
            {studentData.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-lg text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}

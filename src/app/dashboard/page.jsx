'use client';

import React from 'react';
import Link from 'next/link';
import SidebarLayout from '@/components/SidebarLayout';
import {
  studentData,
  coursesData,
  assignmentsData,
  upcomingDeadlinesData,
  recentActivitiesData,
} from '@/data/mockData';
import {
  BookOpen,
  Clock,
  CheckCircle,
  ChevronRight,
  GraduationCap,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';

export default function DashboardPage() {
  const recentAssignments = assignmentsData.slice(0, 4);

  const renderStatusBadge = (status) => {
    if (status === 'Pending') {
      return (
        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800">
          Pending
        </span>
      );
    }
    if (status === 'Submitted') {
      return (
        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
          Submitted
        </span>
      );
    }
    if (status === 'Completed') {
      return (
        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-100 text-teal-800">
          Completed
        </span>
      );
    }
    return (
      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-800">
        {status}
      </span>
    );
  };

  const renderPriorityBadge = (priority) => {
    if (priority === 'High') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-100 text-rose-700">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-600" />
          High
        </span>
      );
    }
    if (priority === 'Medium') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
          Medium
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-100 text-sky-700">
        <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
        Low
      </span>
    );
  };

  return (
    <SidebarLayout>
      <div className="space-y-6">
        {/* Welcome Banner matching wireframe */}
        <div className="bg-gradient-to-r from-blue-100 via-indigo-50 to-blue-50 border border-blue-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between">
          <div className="space-y-2 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center justify-center sm:justify-start gap-2">
              <span>Welcome, Student</span>
              <span>👋</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600">
              Let&apos;s keep learning and achieve more together!
            </p>
            <div className="pt-1 flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold text-blue-700">
              <span className="bg-white/80 px-2.5 py-1 rounded-md border border-blue-200">
                {studentData.department}
              </span>
              <span className="bg-white/80 px-2.5 py-1 rounded-md border border-blue-200">
                Semester {studentData.semester}
              </span>
            </div>
          </div>

          <div className="mt-4 sm:mt-0 p-4 bg-white/80 rounded-2xl border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
            <GraduationCap className="w-16 h-16" />
          </div>
        </div>

        {/* 3 Main Stat Cards matching wireframe */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Total Courses */}
          <Link
            href="/courses"
            className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl font-black text-slate-900 block">
                  {studentData.totalCourses}
                </span>
                <span className="text-xs font-medium text-slate-500">Courses</span>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
          </Link>

          {/* Pending Assignments */}
          <Link
            href="/assignments"
            className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-sm transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl font-black text-slate-900 block">
                  {studentData.pendingAssignments}
                </span>
                <span className="text-xs font-medium text-slate-500">Pending</span>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-amber-600 transition-colors" />
          </Link>

          {/* Attendance Percentage */}
          <Link
            href="/profile"
            className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-sm transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl font-black text-slate-900 block">
                  {studentData.attendance}%
                </span>
                <span className="text-xs font-medium text-slate-500">Attend.</span>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 transition-colors" />
          </Link>
        </div>

        {/* Section 1: Recent Assignments Table matching wireframe */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="font-bold text-slate-900 text-base">Recent Assignments</h2>
            <Link
              href="/assignments"
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100 text-xs text-slate-500 uppercase tracking-wider">
                  <th className="py-3 px-6 font-semibold">Assignment</th>
                  <th className="py-3 px-6 font-semibold">Course</th>
                  <th className="py-3 px-6 font-semibold">Due Date</th>
                  <th className="py-3 px-6 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentAssignments.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-6 font-medium text-slate-900">{item.title}</td>
                    <td className="py-3.5 px-6 text-slate-600">{item.course}</td>
                    <td className="py-3.5 px-6 text-slate-500">{item.dueDate}</td>
                    <td className="py-3.5 px-6">{renderStatusBadge(item.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 2: Upcoming Deadlines Table matching wireframe */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="font-bold text-slate-900 text-base">Upcoming Deadlines</h2>
            <Link
              href="/assignments"
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100 text-xs text-slate-500 uppercase tracking-wider">
                  <th className="py-3 px-6 font-semibold">Assignment</th>
                  <th className="py-3 px-6 font-semibold">Date</th>
                  <th className="py-3 px-6 font-semibold">Priority</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {upcomingDeadlinesData.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-6 font-medium text-slate-900">{item.assignment}</td>
                    <td className="py-3.5 px-6 text-slate-600">{item.date}</td>
                    <td className="py-3.5 px-6">{renderPriorityBadge(item.priority)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3: Recent Activities matching requirement 4.2 */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <h3 className="font-bold text-slate-900 text-base">Recent Activities</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {recentActivitiesData.map((act) => (
              <div
                key={act.id}
                className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5" />
                <div>
                  <p className="text-xs font-medium text-slate-800">{act.title}</p>
                  <span className="text-[11px] text-slate-400 mt-0.5 block">{act.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}

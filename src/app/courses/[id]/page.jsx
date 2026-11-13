'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import SidebarLayout from '@/components/SidebarLayout';
import { coursesData } from '@/data/mockData';
import { ArrowLeft, Calendar, MapPin, Layers } from 'lucide-react';

export default function CourseDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.id;

  const course = coursesData.find((c) => c.id === courseId) || coursesData[0];

  return (
    <SidebarLayout>
      <div className="space-y-6">
        {/* Back Button */}
        <div>
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Courses</span>
          </button>
        </div>

        {/* Hero Course Header */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
              {course.code}
            </span>
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
              {course.department}
            </span>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
              {course.credits} Credits
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {course.title}
          </h1>

          <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
            {course.description}
          </p>

          <div className="flex flex-wrap gap-4 text-xs text-slate-500 pt-2 border-t border-slate-100">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slate-400" />
              {course.schedule}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-slate-400" />
              {course.room}
            </span>
          </div>
        </div>

        {/* Two Column Section: Faculty & Progress */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Faculty Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
            <h2 className="text-sm font-bold text-slate-900">Course Faculty</h2>
            <div className="flex items-center gap-3">
              <img
                src={course.facultyAvatar}
                alt={course.facultyName}
                className="w-12 h-12 rounded-xl object-cover border border-slate-200"
              />
              <div>
                <h3 className="text-sm font-bold text-slate-900">{course.facultyName}</h3>
                <p className="text-xs text-slate-400">{course.department}</p>
              </div>
            </div>
            <p className="text-xs text-slate-500">
              Available for office hours during scheduled lab and lecture sessions.
            </p>
          </div>

          {/* Progress Card */}
          <div className="md:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-slate-900">Syllabus Completion</h2>
              <span className="text-sm font-extrabold text-blue-600">{course.progress}%</span>
            </div>
            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-blue-600 h-full rounded-full transition-all"
                style={{ width: `${course.progress}%` }}
              />
            </div>
            <p className="text-xs text-slate-500">
              Classes are on schedule. Review the weekly topics below for upcoming lectures.
            </p>
          </div>
        </div>

        {/* Syllabus Section */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-600" />
            <h2 className="text-base font-bold text-slate-900">Course Syllabus</h2>
          </div>

          <div className="space-y-2">
            {course.syllabus.map((topic, index) => (
              <div
                key={index}
                className="p-3.5 rounded-xl border border-slate-100 bg-slate-50 flex items-center gap-3 text-xs"
              >
                <span className="w-6 h-6 rounded-md bg-blue-600 text-white font-bold flex items-center justify-center shrink-0">
                  {index + 1}
                </span>
                <span className="font-semibold text-slate-800">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}

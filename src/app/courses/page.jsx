'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import SidebarLayout from '@/components/SidebarLayout';
import { coursesData } from '@/data/mockData';
import { Search, ArrowRight } from 'lucide-react';

export default function CoursesPage() {
  const [search, setSearch] = useState('');

  const filteredCourses = coursesData.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase()) ||
    course.code.toLowerCase().includes(search.toLowerCase()) ||
    course.facultyName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SidebarLayout>
      <div className="space-y-6">
        {/* Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Course Listing
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Explore your registered courses, faculty instructors, credits, and syllabus progress.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between hover:border-blue-300 transition-colors"
            >
              <div>
                {/* Course Header: Code & Credits */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                    {course.code}
                  </span>
                  <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                    {course.credits} Credits
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-base">{course.title}</h3>
                <p className="text-xs text-slate-400 mt-0.5">{course.department}</p>

                {/* Faculty Info */}
                <div className="mt-4 flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <img
                    src={course.facultyAvatar}
                    alt={course.facultyName}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold block uppercase tracking-wider">
                      Faculty
                    </span>
                    <span className="text-xs font-bold text-slate-800 block">
                      {course.facultyName}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4 space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500 font-medium">Progress</span>
                    <span className="font-bold text-slate-900">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-blue-600 h-full rounded-full transition-all"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* View Course Button */}
              <div className="mt-6 pt-3 border-t border-slate-100">
                <Link
                  href={`/courses/${course.id}`}
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors"
                >
                  <span>View Course</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="bg-white p-8 rounded-2xl text-center border border-slate-200">
            <p className="text-sm font-semibold text-slate-700">No courses match your search.</p>
          </div>
        )}
      </div>
    </SidebarLayout>
  );
}

'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import SidebarLayout from '@/components/SidebarLayout';
import { studentsList, coursesData } from '@/data/mockData';
import { ArrowLeft, Mail, Phone } from 'lucide-react';

export default function StudentDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const studentId = params.id;

  const student = studentsList.find((s) => s.id === studentId) || studentsList[0];

  const enrolledCourses = coursesData.filter((c) =>
    student.enrolledCourses.includes(c.id)
  );

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
            <span>Back to Students</span>
          </button>
        </div>

        {/* Profile Information Header */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col md:flex-row items-center md:items-start gap-6 shadow-xs">
          <img
            src={student.avatar}
            alt={student.name}
            className="w-24 h-24 rounded-2xl object-cover border border-slate-200 shrink-0"
          />

          <div className="flex-1 text-center md:text-left space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h1 className="text-2xl font-bold text-slate-900">{student.name}</h1>
                <p className="text-xs font-semibold text-blue-600">
                  Roll No: {student.rollNo} • {student.department}
                </p>
              </div>
              <span className="self-center sm:self-auto text-xs font-semibold bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200">
                {student.year}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
              {student.bio}
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                {student.email}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                {student.phone}
              </span>
            </div>
          </div>
        </div>

        {/* 3 Metric Cards: Attendance, CGPA, Assignments */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="bg-white p-5 rounded-2xl border border-slate-200">
            <span className="text-xs text-slate-400 font-semibold block">Attendance</span>
            <span className="text-2xl font-black text-slate-900 mt-1 block">
              {student.attendance}%
            </span>
            <span className="text-xs text-emerald-600 font-semibold mt-1 block">
              Exam Eligible (&gt;75%)
            </span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200">
            <span className="text-xs text-slate-400 font-semibold block">Academic CGPA</span>
            <span className="text-2xl font-black text-slate-900 mt-1 block">{student.cgpa}</span>
            <span className="text-xs text-blue-600 font-semibold mt-1 block">Semester GPA: {student.gpa}</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200">
            <span className="text-xs text-slate-400 font-semibold block">Assignment Status</span>
            <span className="text-2xl font-black text-slate-900 mt-1 block">
              {student.completedAssignments} Completed
            </span>
            <span className="text-xs text-amber-600 font-semibold mt-1 block">
              {student.pendingAssignments} Pending
            </span>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
          <h2 className="font-bold text-slate-900 text-sm">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {student.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Enrolled Courses Section */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-slate-900 text-sm">Enrolled Courses</h2>
            <span className="text-xs text-slate-400">{enrolledCourses.length} Registered</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {enrolledCourses.map((crs) => (
              <div
                key={crs.id}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-blue-600">{crs.code}</span>
                    <span className="text-slate-500">{crs.credits} Credits</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">{crs.title}</h3>
                  <p className="text-xs text-slate-500 mt-1">Instructor: {crs.facultyName}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs text-slate-600 font-medium">Progress: {crs.progress}%</span>
                  <Link
                    href={`/courses/${crs.id}`}
                    className="text-xs font-semibold text-blue-600 hover:underline"
                  >
                    View Course →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}

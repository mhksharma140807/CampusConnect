'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import SidebarLayout from '@/components/SidebarLayout';
import { studentsList } from '@/data/mockData';
import { Search, ArrowRight, LayoutGrid, List } from 'lucide-react';

export default function StudentsPage() {
  const [search, setSearch] = useState('');
  const [department, setDepartment] = useState('All');
  const [viewType, setViewType] = useState('grid');

  const departments = ['All', 'Computer Science', 'Software Engineering', 'Information Technology', 'Data Science'];

  const filteredStudents = studentsList.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.rollNo.toLowerCase().includes(search.toLowerCase());
    const matchesDept = department === 'All' || student.department === department;
    return matchesSearch && matchesDept;
  });

  return (
    <SidebarLayout>
      <div className="space-y-6">
        {/* Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Student Directory
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Browse students, search by name or roll number, and filter by department.
            </p>
          </div>

          {/* Toggle Grid/Table */}
          <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200 self-start sm:self-auto">
            <button
              onClick={() => setViewType('grid')}
              className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 ${
                viewType === 'grid' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>Grid</span>
            </button>
            <button
              onClick={() => setViewType('table')}
              className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 ${
                viewType === 'table' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <List className="w-4 h-4" />
              <span>Table</span>
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 flex flex-col md:flex-row gap-3 items-center justify-between shadow-xs">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search students..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Department Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setDepartment(dept)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  department === dept
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Students View: Grid or Table */}
        {viewType === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudents.map((std) => (
              <div
                key={std.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between hover:border-blue-300 transition-colors"
              >
                <div>
                  <div className="flex items-start gap-3.5">
                    <img
                      src={std.avatar}
                      alt={std.name}
                      className="w-14 h-14 rounded-xl object-cover border border-slate-200 shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                          {std.rollNo}
                        </span>
                        <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                          {std.attendance}% Attn.
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 mt-1 truncate">{std.name}</h3>
                      <p className="text-xs text-slate-500 truncate">{std.department}</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 mt-3 line-clamp-2">{std.bio}</p>

                  {/* Skills tags */}
                  <div className="mt-3 flex flex-wrap gap-1">
                    {std.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                    {std.skills.length > 3 && (
                      <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded">
                        +{std.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-600">GPA: {std.cgpa}</span>
                  <Link
                    href={`/students/${std.id}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100 text-xs text-slate-500 uppercase tracking-wider">
                    <th className="py-3 px-6 font-semibold">Student</th>
                    <th className="py-3 px-6 font-semibold">Roll No</th>
                    <th className="py-3 px-6 font-semibold">Department</th>
                    <th className="py-3 px-6 font-semibold">Attendance</th>
                    <th className="py-3 px-6 font-semibold">CGPA</th>
                    <th className="py-3 px-6 font-semibold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredStudents.map((std) => (
                    <tr key={std.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-6 font-medium text-slate-900 flex items-center gap-3">
                        <img
                          src={std.avatar}
                          alt={std.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <span>{std.name}</span>
                      </td>
                      <td className="py-3.5 px-6 text-slate-600">{std.rollNo}</td>
                      <td className="py-3.5 px-6 text-slate-600">{std.department}</td>
                      <td className="py-3.5 px-6">
                        <span className="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-50 text-emerald-700">
                          {std.attendance}%
                        </span>
                      </td>
                      <td className="py-3.5 px-6 text-slate-700 font-bold">{std.cgpa}</td>
                      <td className="py-3.5 px-6 text-right">
                        <Link
                          href={`/students/${std.id}`}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline"
                        >
                          <span>View Details</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {filteredStudents.length === 0 && (
          <div className="bg-white p-8 rounded-2xl text-center border border-slate-200">
            <p className="text-sm font-semibold text-slate-700">No students found.</p>
            <p className="text-xs text-slate-500 mt-1">Try clearing your search query or department filter.</p>
          </div>
        )}
      </div>
    </SidebarLayout>
  );
}

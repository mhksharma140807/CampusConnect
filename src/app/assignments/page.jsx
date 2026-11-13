'use client';

import React, { useState } from 'react';
import SidebarLayout from '@/components/SidebarLayout';
import { assignmentsData } from '@/data/mockData';
import { CheckCircle, UploadCloud } from 'lucide-react';

export default function AssignmentsPage() {
  const [assignments, setAssignments] = useState(assignmentsData);
  const [filter, setFilter] = useState('All');
  const [message, setMessage] = useState('');

  const filteredAssignments = assignments.filter((asg) => {
    if (filter === 'All') return true;
    return asg.status === filter;
  });

  const handleSubmitAssignment = (id, title) => {
    setAssignments((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, status: 'Submitted' };
        }
        return item;
      })
    );
    setMessage(`Successfully submitted "${title}"!`);
    setTimeout(() => setMessage(''), 3000);
  };

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
    return (
      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-100 text-teal-800">
        Completed
      </span>
    );
  };

  return (
    <SidebarLayout>
      <div className="space-y-6">
        {/* Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Assignment Management
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Track course deliverables, deadlines, and submit your homework tasks.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200">
            {['All', 'Pending', 'Submitted', 'Completed'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                  filter === tab
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Success Alert Banner */}
        {message && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold rounded-xl flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>{message}</span>
          </div>
        )}

        {/* Assignments Table */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100 text-xs text-slate-500 uppercase tracking-wider">
                  <th className="py-3.5 px-6 font-semibold">Assignment Title</th>
                  <th className="py-3.5 px-6 font-semibold">Course</th>
                  <th className="py-3.5 px-6 font-semibold">Due Date</th>
                  <th className="py-3.5 px-6 font-semibold">Status</th>
                  <th className="py-3.5 px-6 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredAssignments.map((asg) => (
                  <tr key={asg.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-900">
                      {asg.title}
                    </td>
                    <td className="py-4 px-6 text-slate-600">{asg.course}</td>
                    <td className="py-4 px-6 text-slate-500">{asg.dueDate}</td>
                    <td className="py-4 px-6">{renderStatusBadge(asg.status)}</td>
                    <td className="py-4 px-6 text-right">
                      {asg.status === 'Pending' ? (
                        <button
                          onClick={() => handleSubmitAssignment(asg.id, asg.title)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-xs transition-colors"
                        >
                          <UploadCloud className="w-3.5 h-3.5" />
                          <span>Submit</span>
                        </button>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                          <CheckCircle className="w-3.5 h-3.5" />
                          <span>Done</span>
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredAssignments.length === 0 && (
          <div className="bg-white p-8 rounded-2xl text-center border border-slate-200">
            <p className="text-sm font-semibold text-slate-700">No assignments found for this filter.</p>
          </div>
        )}
      </div>
    </SidebarLayout>
  );
}

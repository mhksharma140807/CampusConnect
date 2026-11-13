import React from 'react';
import Link from 'next/link';
import { GraduationCap, ArrowRight, BookOpen, Users, CheckCircle } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Header */}
      <header className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl text-slate-900">
              Campus<span className="text-blue-600">Connect</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 px-3 py-2"
            >
              Sign In
            </Link>
            <Link
              href="/dashboard"
              className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col justify-center items-center text-center px-4 py-20 max-w-4xl mx-auto">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 mb-6">
          Student Management Portal
        </span>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Welcome to <span className="text-blue-600">CampusConnect</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl">
          A modern and responsive student portal to easily view enrolled courses, monitor your attendance percentage, track pending assignments, and explore peer profiles.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/dashboard"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md"
          >
            <span>Open Student Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/login"
            className="flex items-center justify-center px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm"
          >
            Sign In with Demo Account
          </Link>
        </div>

        {/* 3 Quick Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left w-full">
          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
            <BookOpen className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-bold text-slate-900 text-base">Course Management</h3>
            <p className="text-xs text-slate-600 mt-1">
              Browse course syllabi, credits, instructor information, and progress.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
            <CheckCircle className="w-8 h-8 text-emerald-600 mb-3" />
            <h3 className="font-bold text-slate-900 text-base">Assignments Tracker</h3>
            <p className="text-xs text-slate-600 mt-1">
              Check upcoming deadlines, pending tasks, and submit your coursework.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
            <Users className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="font-bold text-slate-900 text-base">Student Directory</h3>
            <p className="text-xs text-slate-600 mt-1">
              Search fellow classmates and view departmental profiles and skills.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-slate-200 text-center text-xs text-slate-500">
        <p>© 2026 CampusConnect. All rights reserved.</p>
      </footer>
    </div>
  );
}


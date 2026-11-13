'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  GraduationCap,
  LayoutDashboard,
  BookOpen,
  Users,
  FileText,
  User,
  Settings,
  LogOut,
  Menu,
  X,
  Info,
  HelpCircle,
} from 'lucide-react';
import { studentData } from '@/data/mockData';
import Footer from '@/components/Footer';

export default function SidebarLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Sidebar portal links
  const sidebarLinks = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Courses', href: '/courses', icon: BookOpen },
    { name: 'Students', href: '/students', icon: Users },
    { name: 'Assignments', href: '/assignments', icon: FileText },
    { name: 'Profile', href: '/profile', icon: User },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  // Top Navbar links
  const topNavLinks = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
  ];

  const handleLogout = () => {
    router.push('/login');
  };

  const isLinkActive = (href) => {
    if (href === '/dashboard') {
      return pathname === '/dashboard';
    }
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Sidebar Overlay (works on all screen sizes) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 z-40 backdrop-blur-xs transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Slide-out Sidebar (hidden by default on ALL screen sizes; opens only on clicking the menu icon) */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-white border-r border-slate-200 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar Header with Logo & Close Button */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-100">
          <Link
            href="/dashboard"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-2"
          >
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-xs">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg text-slate-900 tracking-tight">
              Campus<span className="text-blue-600">Connect</span>
            </span>
          </Link>

          {/* Close button (X) visible on all screen sizes */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          <div className="px-3 pb-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Portal Menu
          </div>
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  active
                    ? 'bg-blue-600 text-white shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-5 h-5 ${active ? 'text-white' : 'text-slate-400'}`} />
                <span>{link.name}</span>
              </Link>
            );
          })}

          <div className="pt-6 px-3 pb-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Campus Info
          </div>
          <Link
            href="/about"
            onClick={() => setSidebarOpen(false)}
            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              pathname === '/about'
                ? 'bg-blue-600 text-white font-semibold'
                : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
            }`}
          >
            <Info className="w-5 h-5 text-slate-400" />
            <span>About Us</span>
          </Link>
          <Link
            href="/services"
            onClick={() => setSidebarOpen(false)}
            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              pathname === '/services'
                ? 'bg-blue-600 text-white font-semibold'
                : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
            }`}
          >
            <HelpCircle className="w-5 h-5 text-slate-400" />
            <span>Student Services</span>
          </Link>
        </nav>

        {/* Sidebar Footer with Student profile and logout */}
        <div className="p-4 border-t border-slate-100">
          <Link
            href="/profile"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-3 p-2 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors mb-3"
          >
            <img
              src={studentData.avatar}
              alt={studentData.name}
              className="w-9 h-9 rounded-full object-cover border border-slate-200"
            />
            <div className="min-w-0 flex-1">
              <span className="text-xs font-bold text-slate-800 block truncate">
                {studentData.name}
              </span>
              <span className="text-[11px] text-slate-400 block truncate">
                {studentData.rollNo}
              </span>
            </div>
          </Link>

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Container (Full width on all screens) */}
      <div className="flex flex-col flex-1 min-h-screen w-full">
        {/* Top Navbar */}
        <header className="sticky top-0 z-30 h-16 bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Left: 3-line menu icon (ALWAYS visible on small & big screens) + Logo */}
          <div className="flex items-center gap-3">
            {/* 3-line hamburger menu icon button */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors flex items-center justify-center"
              aria-label="Open sidebar navigation"
              title="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* CampusConnect Logo */}
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-xs">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-bold text-base sm:text-lg text-slate-900 tracking-tight">
                Campus<span className="text-blue-600">Connect</span>
              </span>
            </Link>
          </div>

          {/* Middle: Navigation links (Dashboard, About Us, Services) */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {topNavLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    active
                      ? 'bg-blue-50 text-blue-600 font-bold'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Section: Profile Section & Logout Button */}
          <div className="flex items-center gap-3">
            {/* Profile section with avatar and student name */}
            <Link
              href="/profile"
              className="flex items-center gap-2 p-1 rounded-full hover:bg-slate-50 transition-colors"
            >
              <img
                src={studentData.avatar}
                alt={studentData.name}
                className="w-8 h-8 rounded-full object-cover border border-slate-200"
              />
              <div className="hidden sm:block text-left text-xs">
                <span className="font-bold text-slate-800 block leading-tight">
                  {studentData.name}
                </span>
                <span className="text-[10px] text-slate-400 block leading-tight">
                  {studentData.rollNo}
                </span>
              </div>
            </Link>

            {/* Logout button */}
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-xs font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-lg transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

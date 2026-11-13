'use client';

import React, { useState } from 'react';
import SidebarLayout from '@/components/SidebarLayout';
import { Bell, Lock, CheckCircle } from 'lucide-react';

export default function SettingsPage() {
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [reminders, setReminders] = useState(true);
  const [passwordMsg, setPasswordMsg] = useState('');

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    setPasswordMsg('Password updated successfully!');
    setTimeout(() => setPasswordMsg(''), 3000);
  };

  return (
    <SidebarLayout>
      <div className="space-y-6 max-w-4xl">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Settings
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Manage your notification preferences and student account security.
          </p>
        </div>

        {/* Notifications Setting */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <Bell className="w-5 h-5 text-blue-600" />
            <h2 className="text-sm font-bold text-slate-900">Notifications</h2>
          </div>

          <div className="space-y-3">
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-xs font-medium text-slate-700">Assignment Reminders</span>
              <input
                type="checkbox"
                checked={reminders}
                onChange={(e) => setReminders(e.target.checked)}
                className="h-4 w-4 rounded text-blue-600"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-xs font-medium text-slate-700">Email Grade Notifications</span>
              <input
                type="checkbox"
                checked={emailAlerts}
                onChange={(e) => setEmailAlerts(e.target.checked)}
                className="h-4 w-4 rounded text-blue-600"
              />
            </label>
          </div>
        </div>

        {/* Change Password */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <Lock className="w-5 h-5 text-blue-600" />
            <h2 className="text-sm font-bold text-slate-900">Change Password</h2>
          </div>

          {passwordMsg && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold rounded-lg flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>{passwordMsg}</span>
            </div>
          )}

          <form onSubmit={handlePasswordSubmit} className="space-y-3 max-w-sm">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Current Password
              </label>
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                New Password
              </label>
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-lg transition-colors"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </SidebarLayout>
  );
}

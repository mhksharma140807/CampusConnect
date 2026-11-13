import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-slate-50 text-center">
      <h1 className="text-4xl font-extrabold text-slate-900">404</h1>
      <p className="text-sm text-slate-600 mt-2">Page not found</p>
      <Link
        href="/dashboard"
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700"
      >
        Go to Dashboard
      </Link>
    </div>
  );
}


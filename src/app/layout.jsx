import './globals.css';

export const metadata = {
  title: 'CampusConnect – Student Management Portal',
  description: 'Student Management Portal built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 min-h-screen flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}


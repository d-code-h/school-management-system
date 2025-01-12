import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ToastContainer } from 'react-toastify';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'School Management System',
  description:
    'This is a school management system that have support for students, teachers, parents, and administrators',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}antialiased`}>
        {children}

        {/* Add toaster container on all pages */}
        <ToastContainer position="bottom-right" />
      </body>
    </html>
  );
}

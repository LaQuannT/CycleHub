import { Footer, Navbar } from '@/components';
import './globals.css';

export const metadata = {
  title: 'Cycle Hub',
  description: 'One stop shop for all your motorcycle information',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

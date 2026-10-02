import type { Metadata } from 'next';
import "./globals.css";
import { Header, Footer } from '@/components/site';
export const metadata: Metadata = { 
  title: { default: 'SocialWise — Be smart. Be kind. Be safe online.', template: '%s | SocialWise' }, 
  description: 'Helping kids, teens, and parents build better digital habits together. Explore interactive lessons, real-life scenarios, and practical online safety skills.', 
  icons: { icon: '/favicon.svg' } };
export default function RootLayout({ children }: 
   Readonly<{ children: React.ReactNode }>) {
     return <html lang="en">
              <body>
                <a className="skip-link" href="#main">Skip to content</a>
                <Header />{children}
                <Footer />
              </body>
            </html>; }


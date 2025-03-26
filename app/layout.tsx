import { Be_Vietnam_Pro } from 'next/font/google'

const vietnam = Be_Vietnam_Pro({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
})

import "./globals.css"
import Header from './components/Header';
import Footer from './components/Footer';
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={vietnam.className}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lionage Pods | Premium Wireless Earbuds Alternative to AirPods",
  description: "Premium wireless earbuds with exceptional sound quality and advanced noise cancellation technology. A sleek alternative to AirPods with premium features at better value.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-lionpods-gray text-white">
          <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6 bg-transparent">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <a className="relative z-20" href="/">
                <span className="font-bold text-2xl text-white">
                  Lion<span className="text-lionpods-mint">Pods</span>
                </span>
              </a>
              <div className="hidden md:flex items-center space-x-8">
                <a href="/#features" className="text-white link-hover">
                  Features
                </a>
                <a href="/#specs" className="text-white link-hover">
                  Specs
                </a>
                <a href="/#purchase" className="text-white link-hover">
                  Purchase
                </a>
                <a
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-lionpods-mint/10 text-lionpods-mint transition-all hover:bg-lionpods-mint/20"
                  aria-label="Checkout"
                  href="/checkout"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="8" cy="21" r="1" />
                    <circle cx="19" cy="21" r="1" />
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                  </svg>
                </a>
              </div>
            </div>
          </nav>
          <main className="pt-24 pb-16 px-6">{children}</main>
          <footer className="border-t border-white/10 py-12 mt-20">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">LionPods</h3>
                  <p className="text-gray-400 mb-6">
                    Premium sound experience with state-of-the-art noise
                    cancellation technology.
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="https://tiktok.com/@techlionog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition"
                    >
                      <span className="sr-only">TikTok</span>
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        className="text-gray-400 hover:text-white transition"
                        href="/"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-400 hover:text-white transition"
                        href="/checkout"
                      >
                        Shop
                      </a>
                    </li>
                    <li>
                      <a
                        href="#features"
                        className="text-gray-400 hover:text-white transition"
                      >
                        Features
                      </a>
                    </li>
                    <li>
                      <a
                        href="#specs"
                        className="text-gray-400 hover:text-white transition"
                      >
                        Specifications
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                  <p className="text-gray-400 mb-4">
                    Subscribe to our newsletter for product updates and exclusive
                    offers.
                  </p>
                  <div className="rounded-lg p-4">
                    <form className="space-y-3">
                      <div className="flex flex-col sm:flex-row items-center gap-3">
                        <input
                          type="email"
                          placeholder="Your email address"
                          className="w-full px-4 py-2 bg-lionpods-gray-dark rounded-md border border-white/10 text-white"
                        />
                        <button
                          className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-10 px-4 py-2 w-full sm:w-auto whitespace-nowrap bg-lionpods-mint text-lionpods-gray hover:bg-lionpods-mint/90"
                          type="submit"
                        >
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm">
                  © 2025 LionPods. All rights reserved.
                </p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <a
                    href="/privacy"
                    className="text-gray-400 hover:text-white text-sm transition"
                  >
                    Privacy Policy
                  </a>
                  <a
                    className="text-gray-400 hover:text-white text-sm transition"
                    href="/unsubscribe"
                  >
                    Unsubscribe
                  </a>
                  <a
                    href="/contact"
                    className="text-gray-400 hover:text-white text-sm transition"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "arial"],
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  fallback: ["ui-monospace", "SFMono-Regular", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
  preload: false, // Disable preload for mono to avoid loading issues
});

export const metadata: Metadata = {
  title: "Boxypack - Create Custom Packaging and Boxes",
  description: "Custom packaging and boxes can turn your brand into the total package with full customization, instant quoting, and fast turnarounds.",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Prevent browser extensions from causing hydration mismatches
              (function() {
                if (typeof window !== 'undefined') {
                  // Remove common extension attributes that cause hydration issues
                  const observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                      if (mutation.type === 'attributes') {
                        const target = mutation.target;
                        if (target.nodeType === Node.ELEMENT_NODE) {
                          // Remove common extension attributes
                          const extensionAttrs = ['bis_skin_checked', 'bis_size', 'bis_id'];
                          extensionAttrs.forEach(attr => {
                            if (target.hasAttribute(attr)) {
                              target.removeAttribute(attr);
                            }
                          });
                        }
                      }
                    });
                  });
                  
                  // Start observing when DOM is ready
                  if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', function() {
                      observer.observe(document.body, {
                        attributes: true,
                        subtree: true,
                        attributeFilter: ['bis_skin_checked', 'bis_size', 'bis_id']
                      });
                    });
                  } else {
                    observer.observe(document.body, {
                      attributes: true,
                      subtree: true,
                      attributeFilter: ['bis_skin_checked', 'bis_size', 'bis_id']
                    });
                  }
                }
              })();
              
              // Font loading fallback
              (function() {
                if (typeof window !== 'undefined') {
                  // Add fallback font loading
                  document.documentElement.style.setProperty('--font-geist-mono', 'ui-monospace, SFMono-Regular, Monaco, Consolas, "Liberation Mono", "Courier New", monospace');
                  
                  // Check if fonts are loaded
                  if ('fonts' in document) {
                    document.fonts.ready.then(function() {
                      console.log('Fonts loaded successfully');
                    }).catch(function(error) {
                      console.warn('Font loading error:', error);
                      // Apply fallback fonts
                      document.documentElement.style.setProperty('--font-geist-mono', 'ui-monospace, SFMono-Regular, Monaco, Consolas, "Liberation Mono", "Courier New", monospace');
                    });
                  }
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

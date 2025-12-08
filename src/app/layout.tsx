import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "./components/ConditionalLayout";
import { CartProvider } from "./contexts/CartContext";

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
  title: "Premium Custom Packaging Boxes & Printing by BoxyPack",
  description: "Boxy Pack offers premium custom packaging boxes with fast turnaround, free shipping, and low minimums to elevate your brand beautifully. Order Now.",
  icons: {
    icon: '/favicon.ico',
  },
  verification: {
    google: 'fNImBc_4UJ37eDpuIr5RKp8O75dpj7Z6JLKK9Tvq63k',
  },
  openGraph: {
    title: "Premium Custom Packaging Boxes & Printing by BoxyPack",
    description: "Boxy Pack offers premium custom packaging boxes with fast turnaround, free shipping, and low minimums to elevate your brand beautifully. Order Now.",
    type: "website",
    url: "https://www.boxypack.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Custom Packaging Boxes & Printing by BoxyPack",
    description: "Boxy Pack offers premium custom packaging boxes with fast turnaround, free shipping, and low minimums to elevate your brand beautifully. Order Now.",
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S1ZM0KF6MR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S1ZM0KF6MR');
          `}
        </Script>
        <CartProvider>
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
        </CartProvider>
      </body>
    </html>
  );
}

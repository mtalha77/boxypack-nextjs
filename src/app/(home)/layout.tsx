import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Custom Packaging Boxes & Printing by BoxyPack",
  description: "Boxy Pack offers premium custom packaging boxes with fast turnaround, free shipping, and low minimums to elevate your brand beautifully. Order Now.",
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

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


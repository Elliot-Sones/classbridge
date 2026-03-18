import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ToastProvider } from "@/components/Toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ClassBridge \u2014 Connecting Classroom to Home",
  description: "ClassBridge gives parents real-time visibility into what their child is learning, private channels to communicate with teachers, and curated resources to extend learning at home.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider>
          <Navbar />
          {children}
          <footer className="footer">
            <p>ClassBridge Demo &middot; Bridging Classroom and Home &middot; Built for educators and families</p>
          </footer>
        </ToastProvider>
      </body>
    </html>
  );
}

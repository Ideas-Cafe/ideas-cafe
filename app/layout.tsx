import "./globals.css";

import About from "./About/page";
import Blank from "./Blank/page";
import Blank2 from "./Blank2/page";
import Community from "./Community/page";
import Events from "./Events/page";
import Footer from "./Footer/page";
import JoinCommunity from "./Community/Join_Community/page";
import Navbar from "@/components/Navbar";
import Questions from "./Questions/page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col">
          <Navbar />
          <div className="h-300 flex-1 overflow-y-auto">
            <main className="md:pb-4 min-h-full">
              {children}
              <About />
              <Events />
              <Blank />
              <Community />
              <JoinCommunity />
              <Questions />
              <Blank2 />
              <Footer />
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

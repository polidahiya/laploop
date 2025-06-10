import { Mulish } from "next/font/google";
import "./globals.css";
import { Appwrapper } from "./_Globalfiles/Context";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900", "1000"], // choose weights you need
  style: ["normal", "italic"], // optional
  display: "swap",
});

export const metadata = {
  title: "Your App",
  description: "Your app description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Appwrapper>
        <body className={mulish.className}>{children}</body>
      </Appwrapper>
    </html>
  );
}

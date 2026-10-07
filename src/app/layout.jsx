import "@/app/globals.css";
import { Archivo, Montserrat } from "next/font/google";
import LoadingScreen from "@/components/common/LoadingScreen";
import ScrollReset from "@/components/common/ScrollReset";
import LocalBusinessSchema from "@/components/common/LocalBusinessSchema";

// ✅ next/font: Zero layout shift, no render-blocking external requests
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-archivo",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata = {
  metadataBase: new URL("https://www.nexcorealliance.com"),
  title:
    "NEXCORE ALLIANCE LLP | Scalable AI Solutions, Web & App Development, MVPs & Odoo Customizations",
  description:
    "NEXCORE ALLIANCE LLP delivers scalable AI solutions, custom web and mobile app development, MVP builds, and Odoo ERP customization services—helping businesses accelerate digital transformation and smart automation.",
  keywords: [
    "Nexcore Alliance LLP",
    "AI solutions company Mumbai",
    "AI development services Kurla",
    "AI automation company Mumbai",
    "custom AI development Mumbai",
    "web development company Mumbai",
    "web development company Kurla",
    "mobile app development Kurla",
    "mobile app development Mumbai",
    "MVP development company Mumbai",
    "startup MVP development Kurla",
    "Odoo customization Mumbai",
    "Odoo ERP customization India",
    "business automation solutions India",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.nexcorealliance.com/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="pkGQBhGPaUQiJvoHFAVdRxtrBE6rmHhtPN5ZT9hHBlU" />
      </head>
      <body
        className={montserrat.className}
        style={{
          fontSize: "20px",
          lineHeight: "1.6",
        }}
        suppressHydrationWarning
      >
        {/* ✅ Always reset scroll to top on refresh */}
        <ScrollReset />

        {/* ✅ LocalBusiness JSON-LD — Fixed URLs */}
        <LocalBusinessSchema />

        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}

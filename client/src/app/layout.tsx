import dynamic from "next/dynamic";
import type { Metadata, Viewport } from "next";
import "./globals.css";

const ClientWrapper = dynamic(() => import("@/providers/ReacQueryProvider"), {
  ssr: false,
});

const APP_NAME = "TouDeuk";
const APP_DEFAULT_TITLE = "TouDeuk App";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION = "터치를 통해 보상을 획득하세요";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  formatDetection: {
    telephone: true,
  },
  //웹페이지가 소셜 미디어 플랫폼에서 어떻게 표시될지 정의
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kor">
      <head>
        <title>{APP_DEFAULT_TITLE}</title>
        <meta name="description" content={APP_DESCRIPTION} />
        <meta name="application-name" content={APP_NAME} />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="manifest" href="/manifest.json" />
        {/* OpenGraph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={APP_NAME} />
        <meta property="og:title" content={APP_DEFAULT_TITLE} />
        <meta property="og:description" content={APP_DESCRIPTION} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={APP_DEFAULT_TITLE} />
        <meta name="twitter:description" content={APP_DESCRIPTION} />
      </head>
      <body className="bg-background text-foreground font-sans flex flex-col">
        <ClientWrapper>
          <main>{children}</main>
        </ClientWrapper>
      </body>
    </html>
  );
}

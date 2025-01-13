"use client";
import theme from "@/assets/theme.json";
import "@/assets/styles/swiper.min.css";
import "@/assets/styles/app.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { usePathname } from "next/navigation";
import itIT from "antd/locale/it_IT";
import "dayjs/locale/it";
import dayjs from "dayjs";
dayjs.locale("it");
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import queryClient from "@/lib/react-query-client";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Use the admin theme if the URL contains "/admin"
  const isDashboard = pathname.startsWith("/admin");

  return (
    <html lang="it">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} position="right" />
          <ConfigProvider theme={theme} locale={itIT}>
            <AntdRegistry>
              {children}
            </AntdRegistry>
          </ConfigProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}

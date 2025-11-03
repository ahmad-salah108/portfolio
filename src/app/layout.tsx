import type { Metadata } from "next";
import "@/../styles/globals.css";
import { open_sans } from "@/fonts";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "@/theme";
import { SectionsObserverProvider } from "@/context/SectionsObserverContext";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Ahmad Salah",
  description: "Ahmad Salah's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <SectionsObserverProvider>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <Toaster richColors />
              <CssBaseline />
              <Navbar />
              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </SectionsObserverProvider>
      </body>
    </html>
  );
}

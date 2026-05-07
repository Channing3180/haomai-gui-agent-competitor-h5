import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "好麦 GUI Agent 竞品分析 H5",
  description: "手机、电脑、浏览器自动化竞品分析报告"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

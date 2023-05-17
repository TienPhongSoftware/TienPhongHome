import "../../public/css/globals.css";

export const metadata = {
  title: "Tien Phong",
  description: "TienPhong.it",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
      <body>{children}</body>
    </html>
  );
}

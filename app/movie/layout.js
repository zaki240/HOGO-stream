import Navbar from "@/app/_component/navbar";

export default function MovieLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

import "../ui/globals.css";
import Navbar from "../components/Navbar";
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div>


            <body>{children} <Navbar /></body>
        </div>

    );
}
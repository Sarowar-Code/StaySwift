import Navbar from "@/components/Navbar";
import { dbConnect } from "@/service/mongo";
import "../globals.css";

export const metadata = {
    title: "Stay Swift",
    description: "One place hotel booking app",
};

export default async function RootLayout({ children }) {
    await dbConnect();
    return (
        <html lang="en">
            <body>
                <Navbar sideMenu={false} />
                <main>{children}</main>
            </body>
        </html>
    );
}

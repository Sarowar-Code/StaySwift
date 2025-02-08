import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import Logout from "./auth/Logout";

const Navbar = async ({ sideMenu }) => {
    const session = await auth();
    return (
        <nav>
            <Link href="/">
                <Image
                    src="/stayswift.svg"
                    alt="Stay Swift Logo"
                    width={200}
                    height={200}
                />
            </Link>

            {sideMenu && (
                <ul>
                    <li>
                        <a href="#">Recommended Places</a>
                    </li>

                    <li>
                        <a href="#">About Us</a>
                    </li>

                    <li>
                        <a href="#">Contact us</a>
                    </li>

                    <li>
                        <Link href="/bookings">Bookings</Link>
                    </li>

                    <li>
                        {session?.user ? (
                            <div>
                                <span className="mx-1">
                                    {session?.user?.name}
                                </span>
                                <span className="mr-2">|</span>
                                <Logout />
                            </div>
                        ) : (
                            <Link href="/login" className="login">
                                Login
                            </Link>
                        )}
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;

import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import getCategories from "@/actions/get-categories";
import NavBarActions from "./navbar-actions";
import Button from "./ui/button";
import HamburgerMenu from "./hamburger-menu";

const NavBar = async () => {
    const categories = await getCategories();

    return ( 
        <Container>
            {/* Mobile  */}
            <div className="md:hidden">
                <div className="relative flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
                    <Link href="/"> 
                        <p className="font-bold text-xl">TROPS</p>
                    </Link>
                    <HamburgerMenu items={categories} />
                </div>
            </div>

            {/* Desktop  */}
            <div className="hidden md:block">
                <div className="relative flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
                    <Link href="/"> 
                        <p className="font-bold text-xl">TROPS</p>
                    </Link>
                    <MainNav data={categories}/>
                    <NavBarActions />
                </div>
            </div>
        </Container>
     );
}
 
export default NavBar;
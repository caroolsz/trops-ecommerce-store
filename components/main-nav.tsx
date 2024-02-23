"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface MainNavProps {
    data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({
    data
}) => {
    const pathname = usePathname();

    const routes = data
    .sort((a, b) => a.name.localeCompare(b.name)) // ordena alfabeticamente as categorias
    .map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`,
    }));

    const isAboutUs = pathname === "/about-us";
    const isContacts = pathname === "/contacts";
    const isTermsConditions = pathname === "/terms-conditions";

    return (
        <nav className="mx-6">
            <div className="flex items-center justify-between space-x-4 lg:space-x-6">
                <div className="flex items-center space-x-4 lg:space-x-6">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-green-500",
                                route.active ? "text-green-600" : "text-neutral-500"
                            )}
                        >
                            {route.label}
                        </Link>
                    ))}
                </div>
                <p className="text-sm text-neutral-500">|</p>
                <div>
                    <Link href="/about-us">
                        <p className={cn(
                                "text-sm font-medium transition-colors hover:text-green-500",
                                isAboutUs ? "text-green-600" : "text-neutral-500")}>Sobre nós</p>
                    </Link>
                </div>
                <div>
                    <Link href="/contacts">
                        <p className={cn(
                                "text-sm font-medium transition-colors hover:text-green-500",
                                isContacts ? "text-green-600" : "text-neutral-500")}>Contactos</p>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default MainNav;

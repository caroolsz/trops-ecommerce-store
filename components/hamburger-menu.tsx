"use client";

import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";
import { Category, Color, Size } from "@/types";
import { Dialog } from "@headlessui/react";
import { Menu, Plus, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import NavBarActions from "./navbar-actions";


interface HamburgerMenuFilter {
    items: Category[];
};

const HamburgerMenu: React.FC<HamburgerMenuFilter> = ({items}) => {
    const [open, setOpen] = useState(false);

    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

    const pathname = usePathname();

    const routes = items
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
        <>
            <Button onClick={onOpen} className="flex items-center px-4 py-2 gap-x-2 lg:hidden bg-green-500 hover:bg-green-600 hover:text-black">
                <Menu size={20}/>
            </Button>

            <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>
                {/* Background */}
                <div className="fixed inset-0 bg-black bg-opacity-25"/>

                {/* Dialog */}
                <div className="fixed inset-0 z-40 flex flex-col"> {/* Flex container */}
                    <Dialog.Panel className="relative ml-auto flex-grow w-full max-w-xs flex flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">

                        {/* Close Button */}
                        <div className="flex items-center justify-end px-4">
                            <IconButton 
                                icon={<X size={15} onClick={onClose}/>}
                            />
                        </div>

                        {/* Render the categories */}
                        <div className="p-4 flex-grow"> {/* Flex item */}
                            <Link href="/"> 
                                <p className="font-bold text-3xl text-center py-5">TROPS</p>
                            </Link>
                            {routes.map((route) => (
                                <Link
                                    key={route.href}
                                    href={route.href}
                                    className={cn(
                                        "block text-lg font-medium text-center py-5 transition-colors hover:text-green-500",
                                        route.active ? "text-green-600" : "text-neutral-500"
                                    )}
                                    
                                >
                                {route.label}
                                </Link>
                            ))}
                            <div className="ml-6 py-5">
                            <Link href="/about-us">
                                <p className={cn(
                                        "text-lg font-medium py-5 transition-colors hover:text-green-500",
                                        isAboutUs ? "text-green-600" : "text-neutral-500")}>Sobre nós</p>
                            </Link>
                            <Link href="/contacts">
                                <p className={cn(
                                        "text-lg font-medium transition-colors hover:text-green-500 mb-5",
                                        isContacts ? "text-green-600" : "text-neutral-500")}>Contactos</p>
                            </Link>
                                <NavBarActions/>
                            </div>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
     );
}
 
export default HamburgerMenu;
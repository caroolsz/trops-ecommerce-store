"use client";

import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button";


const NavBarActions = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return ( 
        <div className="ml-auto flex items-center gap-x-4">
            <Button className="flex items-center rounded-full bg-black px-4 py-2">
                <ShoppingCart 
                    size={20}
                    color="white"
                />
                &nbsp;
                Carrinho
                <span className="ml-2 text-sm font-medium text-white">
                    0
                </span>
            </Button>
        </div>
     );
}
 
export default NavBarActions;
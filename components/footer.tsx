"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
    const pathname = usePathname();
    
    const isTermsConditions = pathname === "/terms-conditions";
    const isPrivacyPolitics = pathname === "/privacy-politics";
    const isDeliveringShipping = pathname === "/delivering-shipping";
    const isWarrantyReturn = pathname === "/warranty-return";

    return ( 
        <footer className="bg-white border-t bottom-0 left-0 w-full text-center py-5">
            <div className="flex justify-center space-x-5">
                <Link href="/terms-conditions">
                    <p className={`text-sm font-medium transition-colors hover:text-green-500 ${isTermsConditions ? "text-green-600" : "text-neutral-500"}`}>
                        Termos e Condições
                    </p>
                </Link>
                <Link href="/privacy-politics">
                    <p className={`text-sm font-medium transition-colors hover:text-green-500 ${isPrivacyPolitics ? "text-green-600" : "text-neutral-500"}`}>
                        Política de Privacidade
                    </p>
                </Link>
                <Link href="/delivering-shipping">
                    <p className={`text-sm font-medium transition-colors hover:text-green-500 ${isDeliveringShipping ? "text-green-600" : "text-neutral-500"}`}>
                        Políticas de Entrega e Transporte
                    </p>
                </Link>
                <Link href="/warranty-return">
                    <p className={`text-sm font-medium transition-colors hover:text-green-500 ${isWarrantyReturn ? "text-green-600" : "text-neutral-500"}`}>
                        Garantia e Devoluções 
                    </p>
                </Link>
            </div>
            <p className="text-md text-black mb-2 mt-4"> 
                &copy; 2024, <b> Trops </b>
            </p>
        </footer>
     )
};
 
export default Footer;

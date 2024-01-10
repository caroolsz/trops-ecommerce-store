"use client";

import Image from "next/image";

import { Product } from "@/types";
import IconButton from "@/components/ui/icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "@/components/ui/currency";

interface ProductCard {
    data: Product;
}
const ProductCard: React.FC<ProductCard> = ({
    data
}) => {
    return ( 
        <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            {/* Images and Actions */}
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image 
                    src={data?.images?.[0]?.url}
                    fill
                    alt="Image"
                    className="aspect-square object-cover rounded-md"
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton
                            onClick={() => {}}
                            icon={<Expand size={15} className="text-gray-600"/>}
                        />
                        <IconButton
                            onClick={() => {}}
                            icon={<ShoppingCart size={15} className="text-gray-600"/>}
                        />
                    </div>
                </div>
            </div>
            {/* Description */}
            <div className="flex items-center justify-between">
                <p className="font-semibold text-lg">
                    {data.name}
                </p>
                <Currency value={data?.price} />
            </div>
        </div>
     );
}
 
export default ProductCard;
"use client";

import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface InfoProps {
    data: Product
}

const Info: React.FC<InfoProps> = ({
    data
}) => {
    return ( 
        <div>
            <h1 className="text-3xl font-bold text-gray-900" >
                {data.name}
            </h1>
            <hr className="my-4"/>
            <div className="mt-3 flex items-end justify-between" >
                <p className="text-2xl text-gray-900" >
                    <Currency value={data?.price}/>
                </p>
            </div>
            <hr className="my-4"/>
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center justify-around">
                    <div className="flex items-center gap-x-4" >
                        <h3 className="font-semibold text-black">
                            Size: 
                        </h3>
                        <div>
                            {data?.size?.name}
                        </div>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <h3 className="font-semibold text-black">Color:</h3>
                        <div className="h-6 w-6 rounded-full border border-gray-600" style={{ backgroundColor: data?.color?.value }} />
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <p className="pl-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </div>
            <div className="mt-10 flex items-center gap-x-3">
                <Button className="flex items-center rounded-full bg-black px-4 py-2">
                    <ShoppingCart />
                    &nbsp;
                    Adicionar ao Carrinho
                </Button>
            </div>
        </div>
     );
}
 
export default Info;
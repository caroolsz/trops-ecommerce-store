"use client";

import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/use-cart";

interface InfoProps {
    data: Product
  };
  
  const Info: React.FC<InfoProps> = ({ data }) => {
    const cart = useCart();
  
    const onAddToCart = () => {
      cart.addItem(data);
    }

    return ( 
        <div>
            <h1 className="text-3xl font-bold text-gray-900" >
                {data.name}
            </h1>
            <hr className="my-4"/>
            <div className="flex items-end justify-between my-5" >
                <p className="text-2xl text-gray-900" >
                    <Currency value={data?.price}/>
                </p>
            </div>
            <hr className="my-4"/>
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center justify-around mt-5">
                    <div className="flex items-center gap-x-4" >
                        <h3 className="font-semibold text-black">
                            Tamanho: 
                        </h3>
                        <div>
                            {data?.size?.name}
                        </div>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <h3 className="font-semibold text-black">Cor:</h3>
                        <div className="h-6 w-6 rounded-full border border-gray-600" style={{ backgroundColor: data?.color?.value }} />
                    </div>
                </div>
                <div className="flex items-center gap-x-4"> 
                    <p className="pl-4 pt-4 pb-4">
                     {data?.description}
                    </p>
                </div>
            </div>
            <hr className="my-4"/>
            <div className="mt-10 flex items-center gap-x-3">
                <Button onClick={onAddToCart} className="flex items-center rounded-full bg-black px-4 py-2">
                    <ShoppingCart size={20} />
                    &nbsp;
                    Adicionar ao Carrinho
                </Button>
            </div>
        </div>
     );
}
 
export default Info;
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";
import Button from "@/components/ui/button";
import Link from "next/link"; 

export const revalidate = 0;

const HomePage = async () => {
    const allFeaturedProducts = await getProducts({ isFeatured: true });
    const products = await allFeaturedProducts.slice(0, 3);
    const billboard = await getBillboard("bce38094-c1e3-49bc-9bc2-3cb4b8b3b423");
    return ( 
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard}/>
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold">
                            Produtos Recentes
                        </h2>
                    </div>
                    <ProductList title="" items={products}/>
                </div>
            </div>
            <hr className="my-4"/>
            <div className="flex mx-10 my-10 text-left items-center sm:flex-row sm:justify-between">
                <div>
                    <h2 className="font-bold text-2xl mb-2">
                        Sobre Nós
                    </h2>
                    <p className="max-w-screen-sm mx-auto">
                        Somos uma pequena equipa com o propósito de dar a conhecer o mundo desportivo a todos os interessados. A loja foi criada em 2023 pela fundadora Carolina Silva.
                    </p>
                </div>
                <div className="sm:mt-0 lg:mx-auto lg:mt-12"> {/* Define margem à esquerda automática */}
                    <Link href="/about-us">
                        <Button 
                            className="
                                sm:flex
                                items-center
                                text-md
                                rounded-full
                                bg-green-500
                                hover:bg-green-600
                                hover:text-black
                                px-4
                                py-2
                                hidden
                            ">
                            Ler mais
                        </Button>
                    </Link> 
                </div>
            </div>
            {/* Botão abaixo do texto em telas pequenas */}
            <div className="mx-10 mb-10 text-center sm:hidden">
                <div className="mt-4">
                    <Link href="/about-us">
                        <Button 
                            className="
                                items-center
                                text-md
                                bg-green-500
                                hover:bg-green-600
                                hover:text-black
                                px-4
                                py-2
                            ">
                            Ler mais
                        </Button>
                    </Link>
                </div>
            </div>
        </Container>
     );
}
 
export default HomePage;

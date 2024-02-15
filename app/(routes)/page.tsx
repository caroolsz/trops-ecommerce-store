import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";
import Button from "@/components/ui/button";

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
                    <div className="flex justify-center items-center">
                        <Button className="rounded-md text-lg text-gray-800 p-2 bg-green-400 border border-gray-300 max-w-md">
                            Ver todos
                        </Button>
                    </div>
                </div>
            </div>
            <hr className="my-4"/>
                    <div className="mx-auto my-10">
                        <div className="text-start text-black">
                            <h2 className="font-bold text-2xl mb-2">
                                Sobre Nós
                            </h2>
                            <p className="max-w-2xl">
                                Somos uma pequena equipa com o propósito de dar a conhecer o mundo desportivo a todos os interessados. A loja foi criada em 2023 pela fundadora Carolina Silva.
                            </p>
                        </div>
                    </div>
        </Container>
     );
}
 
export default HomePage;

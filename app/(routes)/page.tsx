import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";

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
                    <ProductList title="Produtos Recentes" items={products}/>
                </div>
            </div>
        </Container>
     );
}
 
export default HomePage;

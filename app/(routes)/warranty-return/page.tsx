import Container from "@/components/ui/container";

const WarrantyReturn = () => {
    return ( 
        <Container>
            <div className="my-10">
                <h2 className="font-bold text-3xl text-center mb-5">
                    Garantia Limitada, Devolução e Troca de Produtos
                </h2>
            </div>
            <div className="lg:flex lg:flex-col lg:items-left mb-4">
                <p className="text-center mx-10 lg:text-left text-base mb-5">
                    Dado o facto de todos os produtos e compras serem apenas ilustrações e simulações por meios educativos, não existe nenhum tipo de Garantia relacionada à loja. Não existem também quaisquer tipos de envios.
                </p>
            </div>
        </Container>
     );
}
 
export default WarrantyReturn;

import Container from '@/components/ui/container';

const DeliveringShipping = () => {
    return ( 
        <Container>
            <div className='my-10'>
                <h2 className='font-bold text-3xl text-center mb-5'>
                    Política de Entrega e Transporte
                </h2>
            </div>
            <div className='lg:flex lg:flex-col lg:items-left mb-4'>
                <h3 className='text-center font-semibold text-xl mx-10 lg:text-left mb-5'>
                    Informação Geral
                </h3>
                <p className='text-center mx-10 lg:text-left text-base mb-5'>
                    · O Trops não faz envios, uma vez que todas as encomendas se tratam de uma simulação.
                </p>
            </div>
        </Container>
     );
}
 
export default DeliveringShipping;

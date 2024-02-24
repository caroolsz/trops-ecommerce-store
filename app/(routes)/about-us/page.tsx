import Container from "@/components/ui/container";

const AboutUs = () => {
    return ( 
        <Container>
            <div className="my-10">
                <h2 className="font-bold text-3xl text-center mb-5">
                    Sobre nós
                </h2>
                <h3 className="font-semibold text-lg text-center">
                    Loja de Artigos Desportivos
                </h3>
            </div>
            <div className="lg:flex lg:flex-col lg:items-center mb-10">
                <p className="text-center mx-10 lg:text-left text-base">
                    Fundada em 2023/2024, a loja &quot;Trops&quot; surge como uma resposta à procura por equipamentos desportivos de alta qualidade e acessórios para uma variedade de atividades físicas. 
                    <br/><br/>
                    Na &quot;Trops&quot;, os clientes encontram uma ampla gama de artigos desportivos, desde roupas e calçados especializados até equipamentos e acessórios para uma variedade de modalidades. Seja você um corredor ávido, um praticante de yoga comprometido ou um amante de desporto ao ar livre, a &quot;Trops&quot; oferece produtos projetados para atender às suas necessidades e elevar a sua experiência desportiva.
                    <br/><br/>
                    Além disso, &quot;Trops&quot; não se limita apenas a fornecer produtos de alta qualidade; visa criar um espaço inclusivo e acolhedor para todos os que compartilham a sua paixão pelo movimento e pela saúde. Assim, a não somos apenas uma loja, mas uma comunidade viva para os apaixonados pelo estilo de vida ativo e saudável.
                </p>
            </div>
        </Container>
     );
}
 
export default AboutUs;

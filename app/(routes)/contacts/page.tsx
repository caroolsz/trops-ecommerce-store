import Container from "@/components/ui/container";
import { Instagram, Phone, MapPin, AtSign } from "lucide-react";

const AboutUs = () => {
    return (
        <Container>
            <div className="my-10">
                <h2 className="font-bold text-3xl text-center mb-5">
                    Um Suporte acima da média!
                </h2>
                <h3 className="font-semibold text-lg text-center">
                    Onde nos contactar?
                </h3>
            </div>
            <div className="flex justify-center items-center flex-wrap">
                <div className="flex flex-col items-center mr-8 px-10 mb-8 lg:mb-0 mt-4">
                    <a href="https://www.instagram.com/deluxe.carol/" className="text-black">
                        <Instagram size={62} />
                    </a>
                    <p className="font-bold mt-4">
                        Instagram
                    </p>
                    <p className="mt-2 text-center">
                        @deluxe.carol
                    </p>
                </div>
                <div className="flex flex-col items-center mr-8 px-10 mb-8 lg:mb-0 mt-4">
                    <a href="tel:911784604  " className="text-black">
                        <Phone size={62} />
                    </a>
                    <p className="font-bold mt-4">
                        Telemóvel
                    </p>
                    <p className="mt-2 text-center">
                        252 830 991
                    </p>
                </div>
                <div className="flex flex-col items-center mr-8 px-10 mb-8 lg:mb-0 mt-4">
                    <a href="mailto:a8970@oficina.pt" className="text-black">
                        <AtSign size={62} />
                    </a>
                    <p className="font-bold mt-4">
                        Email
                    </p>
                    <p className="mt-2 text-center">
                        a8970@oficina.pt
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center mr-8 px-10 mb-8 lg:mb-0 mt-10">
                <a href="https://www.google.com/maps/place/scola+Profissional+do+Instituto+Nun&aposAlvres+-+Oficina/@41.368822,-8.479954,594m/data=!3m1!1e3!4m6!3m5!1s0xd24f60088a8d6e5:0x1ea946592b98996a!8m2!3d41.3689838!4d-8.4811374!16s%2Fg%2F1tcw9ggz?hl=pt&entry=ttu" target="_blank" className="text-black">
                    <MapPin size={62} />
                </a>
                <p className="font-bold mt-4">
                    Morada
                </p>
                <p className="mt-2 text-center">
                R. Instituto Nun&aposAlvares, 54 <br/>
                4780-035 Areias - Santo Tirso - Portugal
                </p>
            </div>
            <div className="flex justify-center items-center mt-10">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.2592544515483!2d-8.48361382052614!3d41.368451762730345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24f60088a8d6e5%3A0x1ea946592b98996a!2sscola%20Profissional%20do%20Instituto%20Nun&#39;Alvres%20-%20Oficina!5e0!3m2!1spt-PT!2spt!4v1708641717946!5m2!1spt-PT!2spt"
                    width="850"
                    height="450"
                    className="border-0"
                    loading="lazy"
                    title="Morada no Google Maps"
                ></iframe>
            </div>
        </Container>
    );
};

export default AboutUs;

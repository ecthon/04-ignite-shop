import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product";
import { useRouter } from "next/router";

export default function Product() {
    const { query } = useRouter()

    return (
        <ProductContainer>
            <ImageContainer></ImageContainer>
            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 79,90</span>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eum quibusdam expedita alias porro. Voluptate ex, commodi, sapiente harum quam ut quod recusandae ducimus suscipit ab hic expedita amet accusantium!</p>
                <button>
                    Comprar agora
                </button>
            </ProductDetails>
        </ProductContainer>
    )
}
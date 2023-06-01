import { ImageContainer } from "@/styles/pages/product";
import { SuccessContainer } from "@/styles/pages/success";
import Link from "next/link";

export function Success() {
    return (
        <SuccessContainer>
            <h1>Compra efetuada!</h1>
            <ImageContainer>

            </ImageContainer>

            <p>Uhuu <strong>Ecthon Borhis</strong>, sua <strong>Camiseta Black Horse</strong> já está a caminho da sua casa.</p>
            <Link href='/'>
                Voltar ao catálogo.
            </Link>
        </SuccessContainer>
    )
}
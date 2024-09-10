import { useCatalogProductApi } from "./api/CatalogProduct";

export default function CatalogProduct() {

    const { catalogProduct } = useCatalogProductApi()


    return (
       <p>catalog</p>
    )
}
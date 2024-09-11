import './ui/CatalogProduct.scss'
import { useCatalogProductApi } from "./api/CatalogProduct";
import ProductCard from "@/components/Cards/ProductCard/ProductCard";

export default function CatalogProduct() {

    const { catalogProduct } = useCatalogProductApi()


    return (
        <div className="CatalogProduct">
            <div className="CatalogProduct_wrapper">


                {
                    catalogProduct.map((item, index) => {
                        return (
                            <div key={index}>
                                <ProductCard
                                    id={ item.slug}
                                    image={item.poster_url}
                                    title={item.title}
                                    availabilty={item.status}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
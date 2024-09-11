'use client'

import SingleProductCard from "@/components/Cards/SingleProductCard/SingleProductCard";
import useSingleProductApi from "./api/SingleProductApi"
import './ui/productPage.scss'
import InfoCard from "@/components/Cards/InfoCard/InfoCard";


export default function SingleProduct() {

    const { singleProductData } = useSingleProductApi()
    console.log(singleProductData);

    return (
        <div className="SingleProduct">
            <div className="SingleProduct_wrapper my-container">
                <div className="SingleProduct_wrapper_left">
                    <SingleProductCard
                        mainImage={singleProductData.poster_url}
                        title={singleProductData.title}
                        secImage={singleProductData.images?.map((image, index) => {
                            return (
                                < img key={index} src={image.image_url} alt={singleProductData.title} />
                            )
                        })}
                    />
                </div>

                <div className="SingleProduct_wrapper_right">
                    <InfoCard
                        title={singleProductData.title}

                    />
                    <div
                        className="SingleNewsPage_body"
                        dangerouslySetInnerHTML={{ __html: singleProductData.body }} // HTML render qilish
                    />
                </div>
            </div>
        </div>
    )
}
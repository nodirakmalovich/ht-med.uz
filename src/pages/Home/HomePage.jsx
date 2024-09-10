import HomeHero from "@/pages/Home/HomeHero/HomeHero";
import HomeCarousel from "./HomeCarusel/HomeCarusel";
import HomeCategories from "./HomeCategories/HomeCategories";
import HomeAdvantages from "./HomeAdvantages/HomeAdvantages";
import HomeWork from "./HomeWork/HomeWork";
import HomeServices from "./HomeServices/HomeServices";
import HomePartners from "./HomePartners/HomePartners";
import HomeComments from "./HomeComments/HomeComments";
import HomeContact from "./HomeContact/HomeContact";

export default function HomePage() {
    return (
        <div>
            <HomeCarousel />
            <HomeCategories />
            <HomeAdvantages />
            <HomeWork />
            <HomeServices />
            <HomePartners />
            <HomeComments />
            <HomeContact />
        </div>
    );
}
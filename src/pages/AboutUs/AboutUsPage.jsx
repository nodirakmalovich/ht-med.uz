import AboutPageData from './AboutPageData/AboutPageData'
import AboutPageFuture from './AboutPageFuture/AboutPageFuture'
import AboutUsPageHero from './AboutUsPageHero/AboutUsPageHero'
import AboutUsPageNews from './AboutUsPageNews/AboutUsPageNews'

export default function AboutUsPage() {
    return (
        <>
            <AboutUsPageHero />
            <AboutUsPageNews/>
            <AboutPageData/>
            <AboutPageFuture/>
        </>
    )
}
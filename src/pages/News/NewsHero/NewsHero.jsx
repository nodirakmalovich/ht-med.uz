'use client'
import BlogCard from '@/components/Cards/BlogCard/BlogCard';
import useNewsHeroApi from './api/NewsHeroApi'
import './ui/NewsHero.scss'
import PaginationSize from '@/components/pagination/pagination';
import { useRouter } from 'next/navigation';
export default function NewsHero() {

    const { blogNews } = useNewsHeroApi()

    const router = useRouter()

    function handleNews(news) {
        const news_slug = news
        localStorage.setItem('news_slug', news_slug)
        router.push(`/news/${news}`)
    }
    return (
        <div className="NewsHero my-container">
            <div className="NewsHero_wrapper">
                <div className="NewsHero_wrapper_header">
                    <p className="NewsHero_wrapper_header_text">
                        Новости
                    </p>

                </div>

                <div className="NewsHero_wrapper_row">
                    {
                        blogNews?.map((news, index) => {
                            return (
                                <div className='cursor-pointer' onClick={() => handleNews(news.slug)} key={index}>
                                    <BlogCard
                                        image={news.image_url}
                                        description={news.description.slice(0, 400) + '...'}
                                        title={news.title}
                                        time={news.created_at}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <div className='flex justify-center mt-[50px]'><PaginationSize /></div>
            </div>
        </div>
    )
}
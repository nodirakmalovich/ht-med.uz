'use client';
import './ui/SingleNewsPage.scss';
import useNewsApi from './api/newsApi';
import DefaultCard from '@/components/Cards/DefaultCard/DefaultCard';
import BlogCard from '@/components/Cards/BlogCard/BlogCard';
import { useRouter } from 'next/navigation';

export default function SingleNewsPage() {
    const { singleNews } = useNewsApi();

    const router = useRouter()
    const handleNews = (news) => {
        const news_slug = news
        localStorage.setItem('news_slug', news_slug)
        router.push(`/news/${news}`)
    }

    const handleBack = () => {
        router.push('/news')
    }

    return (
        <div className="SingleNewsPage">
            <div className='my-container'>
                <div className="SingleNewsPage_header">
                    <p className="SingleNewsPage_header_text">Новости</p>
                    <div onClick={handleBack}><DefaultCard text={'Назад'} /></div>
                </div>

                <p className="SingleNewsPage_title">
                    {singleNews.title}
                </p>

                {singleNews.body && (
                    <div
                        className="SingleNewsPage_body"
                        dangerouslySetInnerHTML={{ __html: singleNews.body }}
                    />
                )}

                <div className="SingleNewsPage_useful">
                    <p className="SingleNewsPage_header_text">Полезные новости</p>
                    <div className="SingleNewsPage_useful_row">
                        {
                            singleNews?.useful_news?.map((news, index) => {
                                return (
                                    <div className='cursor-pointer' onClick={() => handleNews(news.slug)} key={index}>
                                        <BlogCard
                                            image={news.image_url}
                                            description={news.description}
                                            time={news.created_at}
                                            title={news.title}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    );
}

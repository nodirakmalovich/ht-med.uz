'use client';
import './ui/SingleBlogPage.scss';
import DefaultCard from '@/components/Cards/DefaultCard/DefaultCard';
import BlogCard from '@/components/Cards/BlogCard/BlogCard';
import { useRouter } from 'next/navigation';
import useBlogApi from './api/SingleBlogPageApi';

export default function SingleBlogPage() {
    const { singleBlog } = useBlogApi();

    const router = useRouter()
    const handleNews = (blog) => {
        const blog_slug = blog
        localStorage.setItem('blog_slug', blog_slug)
        router.push(`/blog/${blog}`)
    }

    const handleBack = () => {
        router.push('/blog')
    }

    return (
        <div className="SingleBlogPage">
            <div className='my-container'>
                <div className="SingleBlogPage_header">
                    <p className="SingleBlogPage_header_text">Новости</p>
                    <div onClick={handleBack}><DefaultCard text={'Назад'} /></div>
                </div>

                <p className="SingleBlogPage_title">
                    {singleBlog.title}
                </p>

                {singleBlog.body && (
                    <div
                        className="SingleBlogPage_body"
                        dangerouslySetInnerHTML={{ __html: singleBlog.body }}
                    />
                )}

                <div className="SingleBlogPage_useful">
                    <p className="SingleBlogPage_header_text">Полезные новости</p>
                    <div className="SingleBlogPage_useful_row">
                        {
                            singleBlog?.useful_news?.map((news, index) => {
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

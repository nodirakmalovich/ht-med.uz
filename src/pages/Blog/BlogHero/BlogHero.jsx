'use client'

import BlogCard from '@/components/Cards/BlogCard/BlogCard'
import './ui/BlogHero.scss'
import useBlogHeroApi from '../../../data/BlogHeroApi'
import PaginationSize from '@/components/pagination/pagination'
import { useRouter } from 'next/navigation'

export default function BlogHero() {

    const { blogData } = useBlogHeroApi()
    const router = useRouter()

    const handleBlog = (slug) => {
        const blog_slug = slug
        localStorage.setItem('blog_slug', blog_slug)
        router.push(`/blog/${slug}`)
    }

    return (
        <div className="BlogHero my-container">
            <div className="BlogHero_wrapper">
                <div className="BlogHero_wrapper_header">
                    <p className="BlogHero_wrapper_header_text">
                        Новости
                    </p>

                </div>

                <div className="BlogHero_wrapper_row">
                    {
                        blogData?.map((blog, index) => {
                            return (
                                <div className='cursor-pointer' onClick={() => handleBlog(blog.slug)} key={index}>
                                    <BlogCard
                                        image={blog.image_url}
                                        description={blog.description.slice(0, 400) + '...'}
                                        title={blog.title}
                                        time={blog.created_at}
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
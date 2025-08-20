import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { BlogPost } from '../types';
import PageBanner from '../components/PageBanner';
import { useI18n } from '../i18n';

interface BlogPostPageProps {
  posts: BlogPost[];
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ posts }) => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useI18n();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
        <div className="text-center py-20">
            <h1 className="text-3xl font-bold">Post not found</h1>
            <NavLink to="/blog" className="text-brand-green hover:underline mt-4 inline-block">Back to Blog</NavLink>
        </div>
    );
  }

  return (
    <>
      <PageBanner
        title={post.title[language]}
        imageUrl={post.imageUrl}
      />
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="mb-8 text-center">
            <p className="text-gray-500">By {post.author}</p>
            <p className="text-gray-500">{new Date(post.date).toLocaleDateString(language, { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
          <div className="prose lg:prose-xl max-w-none text-brand-gray leading-relaxed whitespace-pre-line">
            {post.content[language]}
          </div>
          <div className="mt-12 text-center">
            <NavLink to="/blog" className="font-bold text-brand-green hover:text-brand-accent">
                &larr; Back to Blog
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;

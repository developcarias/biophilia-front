

import React from 'react';
import { NavLink } from 'react-router-dom';
import { BlogPost } from '../types';
import PageBanner from '../components/PageBanner';
import { useI18n, useTranslate } from '../i18n';

interface BlogPageProps {
  posts: BlogPost[];
}

const BlogPage: React.FC<BlogPageProps> = ({ posts }) => {
  const { language } = useI18n();
  const t = useTranslate();

  return (
    <>
      <PageBanner
        title={t('blogPageTitle')}
        imageUrl="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1920&h=1080&fit=crop"
      />
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-12">
            {posts.map((post) => (
              <div key={post.id} className="bg-brand-green-light rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/3">
                    <img src={post.imageUrl} alt={post.imageAlt} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 md:w-2/3">
                  <p className="text-sm text-gray-500 mb-1">{post.author} &bull; {new Date(post.date).toLocaleDateString(language, { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  <h3 className="text-2xl font-bold text-brand-green-dark mb-2">{post.title[language]}</h3>
                  <p className="text-brand-gray leading-relaxed mb-4">{post.summary[language]}</p>
                  <NavLink to={`/blog/${post.slug}`} className="font-bold text-brand-green hover:text-brand-accent">
                    Read More &rarr;
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
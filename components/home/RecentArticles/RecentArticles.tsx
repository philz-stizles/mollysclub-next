import { BlogCard, SectionHeader } from '@/components/ui'
import React from 'react'
import styles from './RecentPosts.module.scss'

const RecentArticles = () => {
  return (
    <section className="recent-articles">
      <div className="container">
        <SectionHeader
          title="Recent Articles"
          description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed consequuntur as sequi nesciunt."
        />
        <div className="row">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
      <style jsx>{`
        .recent-articles {
          background: #fafafa;
        }
      `}</style>
    </section>
  )
}

export default RecentArticles

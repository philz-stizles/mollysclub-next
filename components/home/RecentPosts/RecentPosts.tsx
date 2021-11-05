import { PostCard, SectionHeader } from '@/components/ui'
import React from 'react'
import styles from './RecentPosts.module.scss'

const RecentPosts = () => {
  return (
    <section className={styles['services']}>
      <div className="wrapper">
        <div className={styles['pricing-plans__header']}>
          <SectionHeader
            title="Recent Posts"
            description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed consequuntur as sequi nesciunt."
          />
        </div>

        <div className="row-3 content">
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </section>
  )
}

export default RecentPosts

import styles from './bloglist.module.css'

const posts = [
  {
    date: 'Mar 9, 2024',
    read: '5 min read',
    views: '706 views',
    title:
      'How to migrate data off Planetscale to another freely-hosted MySQL database in 5 minutes',
    excerpt:
      'Introduction Planetscale has sunset its much beloved free tier...',
  },
  {
    date: 'Mar 12, 2023',
    read: '3 min read',
    views: '912 views',
    title:
      'Optimize your workflow with Tailwind CSS: Get class completions and hover previews',
    excerpt:
      'TL;DR This article provides instructions on how to enable auto-completion...',
  },
  {
    date: 'Feb 27, 2023',
    read: '3 min read',
    views: '4.4k views',
    title:
      'A Step-by-Step Guide to Share images from Your Expo React Native App',
    excerpt:
      "Let's get started with this step-by-step guide to share images...",
  },
];

const Bloglist = () => {
  return (
    <div className={styles.list}>
      {posts.map((post, i) => (
        <article key={i} className={styles.card}>
          <div className={styles.meta}>
            {post.date} · {post.read} · {post.views}
          </div>

          <h2 className={styles.title}>{post.title}</h2>
          <p className={styles.excerpt}>{post.excerpt}</p>

          <a className={styles.readMore}>
            Read article <span>→</span>
          </a>
        </article>
      ))}
    </div>
  );
};

export default Bloglist;

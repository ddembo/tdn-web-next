import Link from 'next/link';

import ButtonLink from '@/components/ButtonLink/ButtonLink';

// TODO: figure out best-practice approach to typing this
async function getPosts() {
  const tokenUrl = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${process.env.INSTAGRAM_TOKEN}`;
  const postsUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink,thumbnail_url&access_token=${process.env.INSTAGRAM_TOKEN}`;

  // Refresh the token so it doesn't expire, and fetch posts simultaneously.
  const [postsData] = await Promise.all([
    fetch(postsUrl, { next: { revalidate: 10800 } }).then((res) => res.json()), // Cache 3 hrs
    fetch(tokenUrl, { next: { revalidate: 30 * 86400 } }).then((res) => res.json()), // Cache 30 days
  ]);

  return postsData.data;
}

export default async function SiteInstagramGallery() {
  const allPosts = await getPosts();
  const displayPosts = allPosts.slice(0, 9);

  return (
    <div className="grid grid-cols-2 gap-0 md:grid-cols-3 lg:grid-cols-3">
      {displayPosts &&
        displayPosts.map((post: any) => {
          const imgSrc = post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url;
          return (
            <div key={post.id}>
              <Link href={post.permalink} target="_blank">
                {/* Can't use Image tag because can't add all the IG CDNs to config */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imgSrc}
                  alt={post.caption}
                  width={300}
                  height={300}
                  className="w-full aspect-square object-cover m-0 md:w-auto"
                />
              </Link>
            </div>
          );
        })}
      <div className="aspect-square flex justify-center items-center md:aspect-auto md:col-span-3 md:my-8">
        <ButtonLink href="https://instagram.com/thedreamynails">See more</ButtonLink>
      </div>
    </div>
  );
}

import Link from 'next/link';

import ButtonLink from '@/components/ButtonLink/ButtonLink';

const INSTAGRAM_URL = process.env.NEXT_PUBLIC_INSTAGRAM_URL || '/';

// TODO: figure out best-practice approach to typing this
// NOTE: token refresh handled by scheduled Edge Function (see api/refresh-instagram-token)
async function getPosts() {
  const postsUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink,thumbnail_url&access_token=${process.env.INSTAGRAM_TOKEN}`;

  const postsData = await (await fetch(postsUrl, { next: { revalidate: 10800 } })).json(); // Cache 3 hrs

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
        <ButtonLink href={INSTAGRAM_URL}>See more</ButtonLink>
      </div>
    </div>
  );
}

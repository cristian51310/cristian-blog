import { sortBlogs } from '@/src/utils';
import { slug } from 'github-slugger';
import Image from 'next/image';
import Link from 'next/link';
import Tag from '../category-tag';
import Section from '../section';
import TextDecoration from '../text-decoration';

const HomeCoverSection = ({ blogs }) => {

  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[0];

  return (
    <Section>
      <article className='flex flex-col items-start justify-end relative h-[40vh] sm:h-[55vh]'>

        <div className='absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-md z-0' />

        <Image
          src={blog.image.filePath.replace("../public", "")}
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          fill
          className='w-full h-full object-center object-cover rounded-md -z-10'
        />

        <div className='w-full lg:w-3/4 p-6 sm:p-8 md:p-16 flex flex-col items-start justify-center z-0 text-light group'>

          <Tag
            link={`/categories/${slug(blog.tags[0])}`}
            name={blog.tags[0]}
          />

          <Link href={blog.url}>
            <h1 className='font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl mt-6'>
              <TextDecoration>
                {blog.title}
              </TextDecoration>
            </h1>
          </Link>

          <p className='inline-block mt-4 md:text-lg lg:text-xl font-in'>
            {blog.description}
          </p>
        </div>
      </article>
    </Section>
  )
}

export default HomeCoverSection
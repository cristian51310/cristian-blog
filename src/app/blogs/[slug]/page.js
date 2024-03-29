import BlogDetails from "@/src/components/Blog/BlogDetails";
import RenderMdx from "@/src/components/Blog/RenderMdx";
import Tag from "@/src/components/category-tag";
import Section from "@/src/components/section";
import siteMetadata from "@/src/utils/siteMetaData";
import { allBlogs } from "contentlayer/generated";
import { slug } from "github-slugger";
import Image from "next/image";

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }));
}

export async function generateMetadata({ params }) {

  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  if (!blog) return

  const publishedAt = new Date(blog.publishedAt).toISOString();
  const modifiedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();

  let imageList = [siteMetadata.socialBanner];

  if (blog.image) {
    imageList =
      typeof blog.image.filePath === "string"
        ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
        : blog.image;
  }

  const ogImages = imageList.map((img) => {
    return { url: img.includes("http") ? img : siteMetadata.siteUrl + img };
  });

  const authors = blog?.author ? [blog.author] : siteMetadata.author;

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: siteMetadata.siteUrl + blog.url,
      siteName: siteMetadata.title,
      locale: "es_MX",
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: ogImages,
    },
  };
}

export default function BlogPage({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  let imageList = [siteMetadata.socialBanner];
  if (blog.image) {
    imageList =
      typeof blog.image.filePath === "string"
        ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
        : blog.image;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": blog.title,
    "description": blog.description,
    "image": imageList,
    "datePublished": new Date(blog.publishedAt).toISOString(),
    "dateModified": new Date(blog.updatedAt || blog.publishedAt).toISOString(),
    "author": [{
      "@type": "Person",
      "name": blog?.author ? [blog.author] : siteMetadata.author,
      "url": siteMetadata.twitter,
    }]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        <Section>
          <div className="md:mb-8 mb-4 text-center relative w-full h-[50vh] bg-dark rounded-md overflow-hidden">
            <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Tag
                name={blog.tags[0]}
                link={`/categories/${slug(blog.tags[0])}`}
                className="px-6 text-sm py-2"
              />
              <h1
                className="inline-block mt-6 font-bold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6"
              >
                {blog.title}
              </h1>
            </div>

            <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60 dark:bg-dark/40" />

            <Image
              src={blog.image.filePath.replace("../public", "")}
              alt={blog.title}
              width={blog.image.width}
              height={blog.image.height}
              className="w-full h-full object-cover object-center rounded-md"
            />
          </div>

          <BlogDetails blog={blog} slug={params.slug} />

          <div className="grid grid-cols-12 gap-y-8 lg:gap-8 mt-4 md:mt-8">
            <div className="col-span-12 lg:col-span-4">
              <details
                className="border border-dark/30 dark:border-light/30 text-dark dark:text-light rounded-md p-4 sticky top-6 max-h-[85vh] overflow-hidden overflow-y-auto"
                open
              >
                <summary className="text-lg font-bold capitalize cursor-pointer">
                  Tabla de contenidos
                </summary>

                <ul className="mt-2 font-in text-sm">
                  {blog.toc.map((heading) => {
                    return (
                      <li key={`#${heading.slug}`} className="py-1">
                        <a
                          href={`#${heading.slug}`}
                          data-level={heading.level}
                          className="
                            data-[level=two]:pl-0 data-[level=two]:pt-2
                            data-[level=two]:border-t border-solid border-dark/40
                            data-[level=three]:pl-3 sm:data-[level=three]:pl-3
                            flex items-center justify-start
                          ">

                          {heading.level === "three" && (
                            <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
                              &nbsp;
                            </span>
                          )}

                          <span className="hover:underline">{heading.text}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </details>
            </div>

            <RenderMdx blog={blog} />
          </div>
        </Section>

      </article>
    </>

  );
}

import { format, parseISO } from "date-fns";
import es from "date-fns/locale/es";
import { slug } from "github-slugger";
import Link from "next/link";

export default function BlogDetails({ blog }) {
  return (
    <div className="px-2 md:px-10 bg-accent dark:bg-accentDark text-light dark:text-dark flex items-center justify-around md:text-lg text-base font-medium mx-5 md:mx-10 rounded-md py-3 w-full">

      <time>
        {format(parseISO(blog.publishedAt), "d 'de' LLLL 'de' yyyy", { locale: es })}
      </time>

      <div>
        {blog.readingTime.text}
      </div>

      <Link href={`/categories/${slug(blog.tags[0])}`}>
        #{blog.tags[0]}
      </Link>
    </div>
  );
};

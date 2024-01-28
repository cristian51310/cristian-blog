import { slug } from "github-slugger";
import Section from "../section";
import Category from "./Category";

const Categories = ({ categories, currentSlug }) => {
  return (
    <Section>
      <div className="border-y text-dark dark:text-light border-solid border-dark dark:border-light py-4 flex items-start flex-wrap font-medium ">
        {categories.map((cat) => (
          <Category
            key={cat}
            link={`/categories/${cat}`}
            name={cat}
            active={currentSlug === slug(cat)}
          />
        ))}
      </div>
    </Section>
  );
};

export default Categories;

import { slug } from "github-slugger";
import Section from "../section";
import Category from "./Category";

const Categories = ({ categories, currentSlug }) => {
  return (
    <Section>
      <div className="border-y text-dark dark:text-light border-dark dark:border-light py-4 flex items-start flex-wrap font-medium ">
        {categories.map((category) => (
          <Category
            key={category}
            link={`/categories/${category}`}
            name={category}
            active={currentSlug === slug(category)}
          />
        ))}
      </div>
    </Section>
  );
};

export default Categories;

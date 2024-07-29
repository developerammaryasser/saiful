import BlogCard from "../Components/BlogCard";
import BlogCards from "../Components/BlogCards";
import Section from "../Components/Section";
const Blog = ({ blogContent }) => {
  return (
    <Section
      headTitle="Recent Blog"
      text="Figma ipsum component variant main layer. Strikethrough underline project scrolling text vector inspect. Arrow hand hand vertical opacity link."
      bgColor="primaryColor"
    >
      <div className="mt-16">
        <BlogCards>
          {blogContent.map((blog, i) => (
            <BlogCard key={i} title={blog.title} image={blog.image} />
          ))}
        </BlogCards>
      </div>
    </Section>
  );
};
export default Blog;

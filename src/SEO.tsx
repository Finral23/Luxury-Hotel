import { Title, Meta } from "react-head";

interface SEOProps {
  title: string;
  description?: string;
}

const SEO = ({ title, description }: SEOProps) => {
  return (
    <>
      <Title>{title}</Title>
      {description && <Meta name="description" content={description} />}
    </>
  );
};

export default SEO;

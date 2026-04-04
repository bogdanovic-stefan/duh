import { Helmet } from "react-helmet-async";

type SeoProps = {
  title: string;
  description: string;
  path: string;
};

const SITE_URL = "https://dresuraipansionzapseduh.rs";
const SITE_NAME = "DUH - Dresura i pansion za pse";

const Seo = ({ title, description, path }: SeoProps) => {
  const url = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="sr_RS" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
};

export default Seo;
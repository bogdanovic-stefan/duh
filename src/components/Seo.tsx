import { Helmet } from "react-helmet-async";
import { defaultOgImageUrl, SITE_NAME, SITE_URL } from "@/lib/site";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  /** Apsolutni URL slike za og:image / Twitter; podrazumevano glavna deljena slika */
  ogImage?: string;
  /** Kratak opis slike za pristupačnost (og:image:alt) */
  ogImageAlt?: string;
};

const Seo = ({ title, description, path, ogImage, ogImageAlt = "DUH – dresura i pansion za pse" }: SeoProps) => {
  const url = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
  const imageUrl = ogImage ?? defaultOgImageUrl();

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
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={ogImageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={ogImageAlt} />
    </Helmet>
  );
};

export default Seo;

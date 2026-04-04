import { Helmet } from "react-helmet-async";
import { defaultOgImageUrl, SITE_NAME, SITE_URL } from "@/lib/site";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: SITE_NAME,
  description:
    "Profesionalna dresura i pansion za pse u blizini Novog Sada. Hotel za pse, kućni smeštaj, dvorište i poligon za obuku.",
  url: SITE_URL,
  image: defaultOgImageUrl(),
  telephone: "+381638003865",
  email: "dresuraipansionzapseduh@gmail.com",
  taxID: "115259625",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Železnička 2",
    addressLocality: "Bački Jarak",
    addressRegion: "Vojvodina",
    postalCode: "21234",
    addressCountry: "RS",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.3710946,
    longitude: 19.8660011,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  sameAs: [
    "https://www.instagram.com/dresuraipansionzapseduhnovisad/",
    "https://www.facebook.com/dresura.pasa.duh",
    "https://www.tiktok.com/@dresurapasaduh",
  ],
};

/**
 * Strukturisani podaci za lokalni biznis (Google / ostali pretraživači).
 */
const LocalBusinessJsonLd = () => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
  </Helmet>
);

export default LocalBusinessJsonLd;

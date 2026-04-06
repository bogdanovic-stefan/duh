/** Javni URL sajta (bez završnog slasha) — mora se poklapati sa produkcijskim domenom. */
export const SITE_URL = "https://dresurapasaduh.rs";

export const SITE_NAME = "DUH - Dresura i pansion za pse";

/** Slika za deljenje (og:image, Twitter); fajl u /public */
export const DEFAULT_OG_IMAGE_PATH = "/og-image.jpg";

export const defaultOgImageUrl = () => `${SITE_URL}${DEFAULT_OG_IMAGE_PATH}`;

/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly CONTENTFUL_BASE_URL: string;
  readonly CONTENTFUL_BASE_IMAGE_URL: string;
  readonly CONTENTFUL_DELIVERY_TOKEN: string;
  readonly CONTENTFUL_PREVIEW_TOKEN: string;
  readonly CONTENTFUL_SPACE_ID: string;
  readonly CONTENTFUL_ENVIRONMENT: string;
}

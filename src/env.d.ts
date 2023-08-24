/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly CF_BASE_URL: string;
  readonly CONTENTFU_BASE_IMAGE_URL: string;
  readonly CONTENTFUL_DELIVERY_TOKEN: string;
  readonly CONTENTFUL_PREVIEW_TOKEN: string;
  readonly CONTENTFU_SPACE_ID: string;
  readonly CONTENTFU_ENVIRONMENT: string;
}

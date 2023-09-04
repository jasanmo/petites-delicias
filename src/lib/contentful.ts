import contentful, { EntryFieldTypes, AssetFields } from "contentful";


export interface RecipePost {
  contentTypeId: "recipe";
  fields: {
    title: EntryFieldTypes.Text;
    publishDate: EntryFieldTypes.Date;
    description: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    author: EntryFieldTypes.Object;
    featuredImage: EntryFieldTypes.Object;
    categories: Array<EntryFieldTypes.Object>;
    excerpt: EntryFieldTypes.Text;
  };
}

export interface Categories {
  contentTypeId: "categories";
  fields: {
    name: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    content: EntryFieldTypes.RichText;
    featuredImage: EntryFieldTypes.Object;
  };

}
export interface Person {
  contentTypeId: "person";
  fields: {
    name: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    avatar: EntryFieldTypes.Object;
  };
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
  environment: import.meta.env.DEV ? "staging" : "master"
});

export async function getImage(imageID: string): Promise<AssetFields | null> {
  if (!imageID) {
    return null;
  }

  const response = await contentfulClient.getAsset(imageID);

  if (!response) {
    return null;
  }

  const { fields } = response;

  return fields;
}

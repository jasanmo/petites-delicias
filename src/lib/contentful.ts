import contentful from "contentful";
import type { EntryFieldTypes, AssetFields, EntrySys, Entry, EntryLink } from "contentful";


export type RecipePost = {
  contentTypeId: "recipe";
  fields: {
    title: EntryFieldTypes.Text;
    publishDate: EntryFieldTypes.Date;
    description: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    author: EntryFieldTypes.EntryLink<Person>;
    featuredImage: EntryFieldTypes.Object;
    categories: EntryFieldTypes.Array<EntryFieldTypes.EntryResourceLink<Categories>>;
    excerpt: EntryFieldTypes.Text;
  };
}

export type Categories = {
  contentTypeId: "categories";
  sys:{
    id: EntrySys["id"];
  }
  fields: {
    name: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    content: EntryFieldTypes.RichText;
    featuredImage: EntryFieldTypes.Object;
  };

}
export type Person = {
  contentTypeId: "person";
  sys:{
    id: EntrySys["id"];
  }
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
  environment: import.meta.env.CONTENTFUL_ENVIRONMENT
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

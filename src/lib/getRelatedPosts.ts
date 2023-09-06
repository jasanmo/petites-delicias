import type { RecipePost, Categories} from "./contentful";

export function getRelatedPosts(
  allPosts: Array<RecipePost>,
  currentSlug: string,
  currentCats: RecipePost["fields"]["categories"],
  limit: number = 4
) : Array<RecipePost> | null {
  const relatedPosts = allPosts.filter(
    (post) =>
      post.fields.slug !== currentSlug &&
      post.fields.categories.some((cat) => currentCats.includes(cat))
  );

  return relatedPosts.slice(0, limit);
}
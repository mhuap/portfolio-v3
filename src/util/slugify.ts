export function slugify(pageTitle: string){
  let slug = pageTitle.toLowerCase();
  slug = slug.replaceAll(" ", "-");
  slug = slug.replaceAll(/[*+,()'"!:@]/g, "");
  return slug;
}
import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const diperbarui = new Date();
  return [
    { url: SITE.url, lastModified: diperbarui, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.url}/privacy`, lastModified: diperbarui, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE.url}/syarat`, lastModified: diperbarui, changeFrequency: "yearly", priority: 0.3 },
  ];
}

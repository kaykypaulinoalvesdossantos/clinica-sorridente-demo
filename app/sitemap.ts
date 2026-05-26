import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://demo.nixo.local",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}

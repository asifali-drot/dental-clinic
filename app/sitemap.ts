import type { MetadataRoute } from "next";
import { business } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/implants", "/contact"];
  return routes.map((route) => ({
    url: `${business.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}

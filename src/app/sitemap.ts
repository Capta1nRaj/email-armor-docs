import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    // Get the current date once
    const currentDate = new Date();

    // Array of URLs for the sitemap
    const urls = [
        { url: 'https://emailarmor.priyalraj.com', priority: 1.0 },
        { url: 'https://emailarmor.priyalraj.com/docs', priority: 1.0 },
        { url: 'https://emailarmor.priyalraj.com/docs/getting-started', priority: 0.8 },
        { url: 'https://emailarmor.priyalraj.com/docs/user-management/signup', priority: 0.8 },
        { url: 'https://emailarmor.priyalraj.com/docs/user-management/signin', priority: 0.8 },
        { url: 'https://emailarmor.priyalraj.com/docs/user-management/two-step-verification', priority: 0.8 },
        { url: 'https://emailarmor.priyalraj.com/docs/session-management/local-session-check', priority: 0.8 },
        { url: 'https://emailarmor.priyalraj.com/docs/session-management/server-session-check', priority: 0.8 },
        { url: 'https://emailarmor.priyalraj.com/docs/password-management/reset-password', priority: 0.8 }
    ];

    // Map the URLs to the required sitemap format
    return urls.map(({ url, priority }) => ({
        url,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority,
    }));
}
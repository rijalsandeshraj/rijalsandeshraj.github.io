/**
 * Dual-target config.
 *
 *  - Vercel:        `npm run build`   -> normal server build, nothing special needed.
 *  - GitHub Pages:  `npm run export`  -> static HTML in ./out, with basePath applied.
 *
 * For GitHub Pages set NEXT_PUBLIC_BASE_PATH to "/<your-repo-name>" (see README).
 * If you deploy to a user page (rijalsandeshraj.github.io) leave it empty.
 */
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const basePath = isGithubPages ? process.env.NEXT_PUBLIC_BASE_PATH || '' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...(isGithubPages && {
    output: 'export',
    basePath,
    assetPrefix: basePath || undefined,
    trailingSlash: true,
  }),
  images: {
    // Keeps <Image> working identically on Vercel and on static hosts.
    unoptimized: true,
  },
};

export default nextConfig;

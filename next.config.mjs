/** Static export for GitHub Pages. BASE_PATH is set by the deploy workflow
 *  (e.g. "/portfolio" on anoopvijayan-dev.github.io, "" once a custom domain is attached). */
const basePath = process.env.BASE_PATH ?? "";

export default {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

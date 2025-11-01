import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const routes = [
  {
    path: "/",
    url: "https://aregus.me/",
    title: "Areg",
    description: "Areg's small little corner in the internet :3",
    image: "https://utfs.io/f/thKihuQxhYcPw3n5zcEF1bloKXeA0d3pP7RDCmGxkgNhTjMa",
  },
  {
    path: "/work",
    url: "https://aregus.me/work/",
    title: "Areg - Work",
    description: "My smol OwO work!",
    image: "https://utfs.io/f/thKihuQxhYcPw3n5zcEF1bloKXeA0d3pP7RDCmGxkgNhTjMa",
  },
];

const distPath = join(__dirname, "dist");
const indexPath = join(distPath, "index.html");
let baseHtml = readFileSync(indexPath, "utf-8");

routes.forEach((route) => {
  let html = baseHtml;

  // Replace title
  html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);

  // Replace or add description
  if (html.includes('<meta name="description"')) {
    html = html.replace(
      /<meta name="description" content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${route.description}" />`,
    );
  } else {
    html = html.replace(
      "</head>",
      `  <meta name="description" content="${route.description}" />\n  </head>`,
    );
  }

  // Remove existing theme-color meta tag
  html = html.replace(/<meta name="theme-color"[^>]*>/gi, "");

  // Remove existing Open Graph meta tags
  html = html.replace(/<meta property="og:[^"]*"[^>]*>/gi, "");

  // Remove existing Twitter meta tags
  html = html.replace(/<meta name="twitter:[^"]*"[^>]*>/gi, "");

  // Remove comment markers (but be careful not to remove script comments)
  html = html.replace(/<!-- Theme Color for Discord -->/g, "");
  html = html.replace(/<!-- Open Graph \/ Facebook -->/g, "");
  html = html.replace(/<!-- Twitter -->/g, "");

  // Add new meta tags - insert before </head>
  const ogTags = `
    <!-- Theme Color for Discord -->
    <meta name="theme-color" content="#5865F2" />
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Areg's Portfolio" />
    <meta property="og:url" content="${route.url}" />
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.description}" />
    <meta property="og:image" content="${route.image}" />
    <meta property="og:image:secure_url" content="${route.image}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${route.title}" />
    <!-- Twitter -->
    <meta name="twitter:creator" content="Areg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${route.url}" />
    <meta name="twitter:title" content="${route.title}" />
    <meta name="twitter:description" content="${route.description}" />
    <meta name="twitter:image" content="${route.image}" />
`;

  // Insert meta tags before the first script tag in head
  const headEndIndex = html.indexOf("</head>");
  if (headEndIndex !== -1) {
    html = html.slice(0, headEndIndex) + ogTags + html.slice(headEndIndex);
  }

  if (route.path === "/") {
    writeFileSync(indexPath, html, "utf-8");
  } else {
    const routePath = join(distPath, route.path);
    mkdirSync(routePath, { recursive: true });
    writeFileSync(join(routePath, "index.html"), html, "utf-8");
  }
});

console.log(
  "✅ Prerendering complete for routes:",
  routes.map((r) => r.path).join(", "),
);

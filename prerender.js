import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const routes = [
  {
    path: "/",
    title: "Areg",
    description: "Areg's small little corner in the internet :3",
    image: "https://utfs.io/f/thKihuQxhYcPw3n5zcEF1bloKXeA0d3pP7RDCmGxkgNhTjMa",
  },
  {
    path: "/Work",
    title: "Areg - Work",
    description: "My smol OwO work!",
    image: "https://file.garden/Zp_ExamEPnCWgsNn/logo.jpg",
  },
];

const distPath = join(__dirname, "dist");
const indexPath = join(distPath, "index.html");
let baseHtml = readFileSync(indexPath, "utf-8");

routes.forEach((route) => {
  let html = baseHtml;

  html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);

  if (html.includes('<meta name="description"')) {
    html = html.replace(
      /<meta name="description" content=".*?">/,
      `<meta name="description" content="${route.description}">`,
    );
  } else {
    html = html.replace(
      "</head>",
      `  <meta name="description" content="${route.description}">\n  </head>`,
    );
  }

  const ogTags = `
    <meta property="og:url" content="https://aregus.me${route.path}">
    <meta property="og:type" content="website">
    <meta property="og:title" content="${route.title}">
    <meta property="og:description" content="${route.description}">
    <meta property="og:image" content="${route.image}">
    <meta property="og:image:secure_url" content="${route.image}">
    <meta property="og:image:type" content="image/jpeg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="${route.title} - ${route.description}">
    <meta name="twitter:creator" content="Areg">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${route.title}">
    <meta name="twitter:description" content="${route.description}">
    <meta name="twitter:image" content="${route.image}">
  `;

  if (!html.includes('property="og:title"')) {
    html = html.replace("</head>", `${ogTags}\n  </head>`);
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

import { mkdir, writeFile } from 'node:fs/promises';

const files = {
  '.gitignore': `# Logs\nlogs\n*.log\nnpm-debug.log*\nyarn-debug.log*\nyarn-error.log*\npnpm-debug.log*\nlerna-debug.log*\n\nnode_modules\ndist\ndist-ssr\n*.local\n\n# Editor directories and files\n.vscode/*\n!.vscode/extensions.json\n!.vscode/settings.json\n.idea\n.DS_Store\n*.suo\n*.ntvs*\n*.njsproj\n*.sln\n*.sw?\n\n# Environment variables\n.env\n.env.local\n.env.*.local\n\n# OS\nThumbs.db\n\n# Cache\n.cache\n.parcel-cache\n.vite`,
  '.prettierignore': `node_modules\ndist\ndist-ssr\npackage-lock.json\npublic`,
  '.prettierrc': `{\n  "singleQuote": true,\n  "tabWidth": 2,\n  "useTabs": false,\n  "tailwindStylesheet": "./src/style.css",\n  "tailwindFunctions": ["create", "addClass", "removeClass", "toggleClass"],\n  "plugins": ["prettier-plugin-tailwindcss"]\n}`,
  'eslint.config.js': `export default [\n  {\n    ignores: ['dist/**'],\n  },\n  {\n    files: ['**/*.js'],\n    languageOptions: {\n      ecmaVersion: 'latest',\n      sourceType: 'module',\n      globals: {\n        document: 'readonly',\n        window: 'readonly',\n        console: 'readonly',\n      },\n    },\n    rules: {\n      'no-undef': 'error',\n      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],\n    },\n  },\n];`,
  'index.html': `<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <link rel="icon" type="image/png" href="/favicon-placeholder.png" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>template-js-tw</title>\n  </head>\n  <body>\n    <div id="app"></div>\n    <script type="module" src="/src/main.js"></script>\n  </body>\n</html>`,
  'LICENSE': `MIT License`,
  'package.json': `{\n  "name": "template-js-tw",\n  "description": "JavaScript and Tailwind CSS template powered by Vite, with ESLint and Prettier configured for development.",\n  "private": true,\n  "version": "0.0.0",\n  "type": "module",\n  "engines": {\n    "node": ">=20.0.0"\n  },\n  "scripts": {\n    "dev": "vite",\n    "build": "vite build",\n    "preview": "vite preview",\n    "lint": "eslint .",\n    "format": "prettier . --write",\n    "format:check": "prettier . --check"\n  },\n  "devDependencies": {\n    "@tailwindcss/vite": "^4.2.1",\n    "eslint": "^9.0.0",\n    "prettier": "^3.8.1",\n    "prettier-plugin-tailwindcss": "^0.7.2",\n    "tailwindcss": "^4.2.1",\n    "vite": "^7.1.7"\n  }\n}`,
  'readme.md': `# template-js-tw\n\n## Purpose\n\nThis template is intended for quickly starting small JavaScript projects with Tailwind CSS and sensible development defaults.`,
  'vite.config.js': `import { defineConfig } from 'vite'\nimport tailwindcss from '@tailwindcss/vite'\n\nexport default defineConfig({\n  plugins: [tailwindcss()]\n})`,
  '.editorconfig': `root = true\n\n[*]\ncharset = utf-8\nend_of_line = lf\ninsert_final_newline = true\nindent_style = space\nindent_size = 2\ntrim_trailing_whitespace = true\n\n[*.md]\ntrim_trailing_whitespace = false`,
  '.gitattributes': `* text=auto eol=lf`,
  'src/main.js': `import './style.css';\nimport { get } from './utils/get.js';\nimport { create } from './utils/create.js';\nimport { set } from './utils/set.js';\nimport { addClass } from './utils/addClass.js';\nimport { setText } from './utils/setText.js';\n\nconst app = get('#app');\naddClass(\n  app,\n  'flex min-h-screen flex-col items-center justify-center text-center',\n);\n\nconst heading = create('h1', 'mb-2 text-3xl font-bold');\nconst subheading = create('h2', 'text-xl text-gray-500');\nsetText(heading, 'Hello world!');\nsetText(\n  subheading,\n  'Welcome to this simple JavaScript template with Tailwind CSS.',\n);\n\nset([heading, subheading], app);`,
  'src/style.css': `@import 'tailwindcss';`,
  'src/utils/addClass.js': `export function addClass(element, classes) {\n  element.classList.add(...classes.split(' '));\n}`,
  'src/utils/create.js': `export function create(element, classes) {\n  const createdElement = document.createElement(element);\n  if (classes) createdElement.className = classes;\n  return createdElement;\n}`,
  'src/utils/get.js': `export function get(target) {\n  return document.querySelector(target);\n}`,
  'src/utils/remove.js': `export function remove(target) {\n  document.querySelector(target)?.remove();\n}`,
  'src/utils/removeClass.js': `export function removeClass(element, classes) {\n  element.classList.remove(...classes.split(' '));\n}`,
  'src/utils/set.js': `export function set(element, target) {\n  if (Array.isArray(element)) {\n    element.forEach((childElement) => target.appendChild(childElement));\n  } else target.appendChild(element);\n}`,
  'src/utils/setHTML.js': `export function setHTML(element, html) {\n  element.innerHTML = html;\n}`,
  'src/utils/setText.js': `export function setText(element, text) {\n  element.textContent = text;\n}`,
  'src/utils/toggleClass.js': `export function toggleClass(element, classes) {\n  classes\n    .split(' ')\n    .forEach((className) => element.classList.toggle(className));\n}`,
  '.vscode/extensions.json': `{\n  "recommendations": [\n    "dbaeumer.vscode-eslint",\n    "esbenp.prettier-vscode",\n    "bradlc.vscode-tailwindcss"\n  ]\n}`,
  '.vscode/settings.json': `{\n  "editor.defaultFormatter": "esbenp.prettier-vscode",\n  "editor.formatOnSave": true,\n  "tailwindCSS.includeLanguages": {\n    "javascript": "html"\n  },\n  "tailwindCSS.experimental.classRegex": [\n    "[\\\\\"'`
};

async function setupProject() {
  console.log("Setting up project structure...");
  
  // Ensure directories exist
  await mkdir('.vscode', { recursive: true });
  await mkdir('src/utils', { recursive: true });

  // Create files
  for (const [path, content] of Object.entries(files)) {
    await writeFile(path, content);
    console.log(`Created: ${path}`);
  }

  console.log("\nSetup complete.");
  console.log("1. Add your package-lock.json manually.");
  console.log("2. Run 'npm install'.");
}

setupProject().catch(console.error);
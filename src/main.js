// src/main.js
import './style.css';
import { get } from './utils/get.js';
import { create } from './utils/create.js';
import { set } from './utils/set.js';
import { addClass } from './utils/addClass.js';
import { setText } from './utils/setText.js';
import { toggleClass } from './utils/toggleClass.js';

const app = get('#app');
addClass(app, 'flex min-h-screen flex-col bg-zinc-950 text-white');

const header = create('header', 'border-b border-zinc-800 py-6');
const nav = create(
  'nav',
  'mx-auto flex max-w-5xl items-center justify-between px-6',
);
const logo = create('h1', 'text-2xl font-bold text-white');
setText(logo, 'TemplateJS-TW');

const button = create(
  'button',
  'rounded-xl bg-white px-6 py-2 font-semibold text-zinc-950 transition hover:bg-zinc-200',
);
setText(button, 'Toggle Dark Mode');
button.onclick = () => toggleClass(document.body, 'dark');

set([logo, button], nav);
set(nav, header);
set(header, app);

// Main Content
const main = create('main', 'flex flex-1 items-center justify-center p-6');
const card = create(
  'div',
  'w-full max-w-md rounded-3xl border border-zinc-700 bg-zinc-900 p-10 text-center shadow-2xl',
);

const title = create('h1', 'mb-4 text-4xl font-bold');
const desc = create('p', 'mb-8 text-lg text-zinc-400');

setText(title, 'Welcome to TemplateJS-TW');
setText(desc, 'A clean JavaScript + Tailwind starter with full MVC structure.');

const demoButton = create(
  'button',
  'mt-6 rounded-2xl bg-violet-600 px-8 py-4 font-semibold text-white transition hover:bg-violet-500',
);
setText(demoButton, 'Click me!');

set([title, desc, demoButton], card);
set(card, main);
set(main, app);

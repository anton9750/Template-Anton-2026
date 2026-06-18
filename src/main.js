import './style.css';
import { get } from './utils/get.js';
import { create } from './utils/create.js';
import { set } from './utils/set.js';
import { addClass } from './utils/addClass.js';
import { setText } from './utils/setText.js';

const app = get('#app');
addClass(
  app,
  'flex min-h-screen flex-col items-center justify-center text-center',
);

const heading = create('h1', 'mb-2 text-3xl font-bold');
const subheading = create('h2', 'text-xl text-gray-500');
setText(heading, 'Hello world!');
setText(
  subheading,
  'Welcome to this simple JavaScript template with Tailwind CSS.',
);

set([heading, subheading], app);
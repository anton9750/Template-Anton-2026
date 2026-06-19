// src/views/footerView.js
import { create } from '../utils/create.js';
import { set } from '../utils/set.js';

export function renderFooter() {
  const footer = create('footer', 'mt-auto border-t border-zinc-800 py-8');
  const text = create('p', 'text-center text-sm text-zinc-500');
  setText(text, '© 2026 TemplateJS-TW • Built with JavaScript + Tailwind');
  set(text, footer);
  return footer;
}

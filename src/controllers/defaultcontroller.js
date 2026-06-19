// src/controllers/defaultController.js
import { get } from '../utils/get.js';
import { renderFooter } from '../views/footerView.js';

export function renderDefaultPage() {
  const app = get('#app');
  const footer = renderFooter();
  app.appendChild(footer);
  console.log('✅ Default page rendered');
}

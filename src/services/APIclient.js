// src/services/APIClient.js
export class APIClient {
  static async get(url, options = {}) {
    try {
      const res = await fetch(url, options);
      if (!res.ok) throw new Error(`HTTP error! ${res.status}`);
      return await res.json();
    } catch (error) {
      console.error('API Error:', error);
      return null;
    }
  }

  static async post(url, data, options = {}) {
    return this.get(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      ...options,
    });
  }
}

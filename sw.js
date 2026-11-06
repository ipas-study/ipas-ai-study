// AI 應用規劃師學習網站：只為了讓手機認得這是 App。
// 刻意不快取、不攔截任何請求：網站內容與試算表資料永遠抓最新，也不影響 /beta/。
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

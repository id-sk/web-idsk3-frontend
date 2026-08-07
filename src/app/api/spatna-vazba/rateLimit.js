// src/app/api/spatna-vazba/rateLimit.js

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS_ALL = 20;
const MAX_REQUESTS_SUCCESS = 5;

const globalStore = globalThis;
if (!globalStore.feedbackRateLimitMap) {
  globalStore.feedbackRateLimitMap = new Map();
}
const ipRateLimitMap = globalStore.feedbackRateLimitMap;

if (!globalStore.feedbackRateLimitInterval) {
  globalStore.feedbackRateLimitInterval = setInterval(() => {
    const now = Date.now();
    for (const [ip, data] of ipRateLimitMap.entries()) {
      const validAll = data.all.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
      const validSuccess = data.success.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
      
      if (validAll.length === 0 && validSuccess.length === 0) {
        ipRateLimitMap.delete(ip);
      } else {
        ipRateLimitMap.set(ip, { all: validAll, success: validSuccess });
      }
    }
  }, RATE_LIMIT_WINDOW_MS).unref();
}

export const normalizeIp = (value) => {
  if (typeof value !== 'string') return 'unknown-ip';
  const ip = value.trim().slice(0, 64);
  return ip || 'unknown-ip';
};

export const checkRateLimit = (ip) => {
  if (ip === 'unknown-ip') return { exceeded: false };

  const now = Date.now();
  const userData = ipRateLimitMap.get(ip) || { all: [], success: [] };
  
  const recentAll = userData.all.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  const recentSuccess = userData.success.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  
  if (recentAll.length >= MAX_REQUESTS_ALL || recentSuccess.length >= MAX_REQUESTS_SUCCESS) {
    return {
      exceeded: true,
      recentAll: recentAll.length,
      recentSuccess: recentSuccess.length,
      retryAfter: String(Math.ceil(RATE_LIMIT_WINDOW_MS / 1000)),
    };
  }
  
  recentAll.push(now);
  ipRateLimitMap.set(ip, { all: recentAll, success: recentSuccess });
  
  return { exceeded: false };
};

export const recordSuccess = (ip) => {
  if (ip === 'unknown-ip') return;
  const userData = ipRateLimitMap.get(ip);
  if (userData) {
    userData.success.push(Date.now());
  }
};
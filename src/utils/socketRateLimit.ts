interface RateLimitEntry {
  count: number;
  resetTime: number;
}

class SocketRateLimiter {
  private limits: Map<string, RateLimitEntry>;
  private readonly windowMs: number;
  private readonly maxRequests: number;

  constructor(windowMs: number = 60000, maxRequests: number = 60) {
    this.limits = new Map();
    this.windowMs = windowMs;
    this.maxRequests = maxRequests;
    this.startCleanup();
  }

  private startCleanup(): void {
    setInterval(() => {
      const now = Date.now();
      for (const [socketId, entry] of this.limits.entries()) {
        if (entry.resetTime < now) {
          this.limits.delete(socketId);
        }
      }
    }, 60000);
  }

  checkLimit(socketId: string): boolean {
    const now = Date.now();
    let entry = this.limits.get(socketId);

    if (!entry || entry.resetTime < now) {
      entry = {
        count: 0,
        resetTime: now + this.windowMs,
      };
      this.limits.set(socketId, entry);
    }

    entry.count++;

    if (entry.count > this.maxRequests) {
      return false;
    }

    return true;
  }

  reset(socketId: string): void {
    this.limits.delete(socketId);
  }
}

export const socketRateLimiter = new SocketRateLimiter(60000, 60);
export const socketMessageLimiter = new SocketRateLimiter(60000, 30);
export const socketTypingLimiter = new SocketRateLimiter(10000, 10);


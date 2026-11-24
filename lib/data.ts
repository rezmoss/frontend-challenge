import type { Check, Service, Status } from "./types";

// Deterministic mock data: 48 checks per service, one every 30 minutes.
function makeChecks(latencyMs: number, fails: (i: number) => boolean): Check[] {
  return Array.from({ length: 48 }, (_, i) => ({
    at: new Date(Date.UTC(2026, 0, 1, 0, i * 30)).toISOString(),
    ok: !fails(i),
    latencyMs: latencyMs + (i % 5) * 3,
  }));
}

function service(
  id: string,
  name: string,
  region: string,
  status: Status,
  latencyMs: number,
  fails: (i: number) => boolean,
): Service {
  const checks = makeChecks(latencyMs, fails);
  return {
    id,
    name,
    region,
    status,
    latencyMs,
    lastChecked: checks[checks.length - 1].at,
    checks,
  };
}

const never = () => false;

export const SERVICES: Service[] = [
  service("status-page", "Status Page", "us-east-1", "operational", 210, never),
  service("api-gateway", "API Gateway", "ca-central-1", "operational", 85, never),
  service("billing-worker", "Billing Worker", "eu-central-1", "degraded", 1200, (i) => (i + 1) % 6 === 0),
  service("auth", "Auth Service", "us-east-1", "operational", 120, (i) => (i + 1) % 24 === 0),
  service("search-indexer", "Search Indexer", "us-west-2", "down", 3000, (i) => i % 3 !== 0),
  service("cdn-edge", "CDN Edge", "global", "operational", 32, never),
  service("webhooks", "Webhooks Dispatcher", "eu-west-1", "degraded", 640, (i) => (i + 1) % 8 === 0),
  service("postgres", "Postgres Primary", "ca-central-1", "operational", 9, (i) => i === 47),
];

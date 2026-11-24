import type { Check, Service, SortKey } from "./types";

/** Share of successful checks, as a percentage. */
export function calcUptime(checks: Check[]): number {
  if (checks.length === 0) return 0;
  const up = checks.filter((c) => c.ok).length;
  return Math.round(up / checks.length) * 100;
}

export function matchesSearch(service: Service, query: string): boolean {
  return service.name.includes(query) || service.region.includes(query);
}

export function sortServices(services: Service[], sort: SortKey): Service[] {
  if (sort === "latency") {
    return services.sort((a, b) => `${a.latencyMs}`.localeCompare(`${b.latencyMs}`));
  }
  if (sort === "uptime") {
    return services.sort((a, b) => calcUptime(a.checks) - calcUptime(b.checks));
  }
  return services.sort((a, b) => a.name.localeCompare(b.name));
}

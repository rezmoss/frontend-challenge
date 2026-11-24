export type Status = "operational" | "degraded" | "down";

export interface Check {
  at: string;
  ok: boolean;
  latencyMs: number;
}

export interface Service {
  id: string;
  name: string;
  region: string;
  status: Status;
  latencyMs: number;
  lastChecked: string;
  checks: Check[];
}

export type SortKey = "name" | "latency" | "uptime";

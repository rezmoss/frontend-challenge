import { calcUptime } from "../lib/services";
import type { Service } from "../lib/types";
import StatusBadge from "./StatusBadge";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <li className="card">
      <StatusBadge status={service.status} />
      <div>
        <div className="name">{service.name}</div>
        <div className="region">{service.region}</div>
      </div>
      <div className="metric">
        {service.latencyMs} ms
        <span>response time</span>
      </div>
      <div className="metric">
        {calcUptime(service.checks)}%
        <span>uptime</span>
      </div>
    </li>
  );
}

import type { SortKey } from "../lib/types";

const STATUSES = ["all", "operational", "degraded", "down"];

interface Props {
  query: string;
  status: string;
  sort: SortKey;
  onQuery: (value: string) => void;
  onStatus: (value: string) => void;
  onSort: (value: SortKey) => void;
}

export default function FilterBar({ query, status, sort, onQuery, onStatus, onSort }: Props) {
  return (
    <div className="filters">
      <input
        placeholder="Search name or region"
        value={query}
        onChange={(e) => onQuery(e.target.value)}
      />
      <div className="chips">
        {STATUSES.map((s) => (
          <div
            key={s}
            className={s === status ? "chip active" : "chip"}
            onClick={() => onStatus(s)}
          >
            {s}
          </div>
        ))}
      </div>
      <select value={sort} onChange={(e) => onSort(e.target.value as SortKey)}>
        <option value="name">Sort: name</option>
        <option value="latency">Sort: response time</option>
        <option value="uptime">Sort: uptime</option>
      </select>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { matchesSearch, sortServices } from "../lib/services";
import type { SortKey } from "../lib/types";
import FilterBar from "./FilterBar";
import ServiceCard from "./ServiceCard";

export default function ServiceBoard() {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");
  const [sort, setSort] = useState<SortKey>("name");

  useEffect(() => {
    fetch("/api/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data.services);
        setLoading(false);
      });
  }, []);

  const visible = sortServices(services, sort)
    .filter((s) => status === "all" || s.status === status)
    .filter((s) => matchesSearch(s, query));

  return (
    <section>
      <FilterBar
        query={query}
        status={status}
        sort={sort}
        onQuery={setQuery}
        onStatus={setStatus}
        onSort={setSort}
      />
      {loading ? (
        <p>Loading…</p>
      ) : (
        <ul className="list">
          {visible.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </ul>
      )}
    </section>
  );
}

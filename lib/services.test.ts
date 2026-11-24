import { describe, expect, it } from "vitest";
import { SERVICES } from "./data";
import { sortServices } from "./services";

describe("sortServices", () => {
  it("sorts by name", () => {
    const names = sortServices([...SERVICES], "name").map((s) => s.name);
    expect(names[0]).toBe("API Gateway");
    expect(names[names.length - 1]).toBe("Webhooks Dispatcher");
  });

  it.todo("sorts by latency");
});

describe("calcUptime", () => {
  it.todo("returns a percentage with one decimal");
});

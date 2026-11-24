# CloudAid Next.js and React Developer: take-home challenge

Thanks for applying. This is a short, practical exercise that looks like the work
you would do with us: you join a small existing code base, pick up a handful of
tickets, and leave the code better than you found it.

- **Time box:** 3 to 4 hours. Please don't spend more. Unfinished parts are fine
  if you explain them in `NOTES.md`.
- **Deadline:** 5 calendar days from the email that sent you here.

## The app

A one-page service status board built with Next.js (App Router), React and
TypeScript. It loads services from `/api/services` and lets you search, filter
by status and sort.

```bash
npm install
npm run dev        # http://localhost:3000
npm test           # vitest
npm run typecheck
npm run build
```

`app/api/services/route.ts` stands in for a third-party API: it is slow and it
fails sometimes. **Don't edit that file.** Everything else is yours to change.

## Your tickets

### BUG-1: Uptime numbers are wrong

Every service shows either `100%` or `0%` uptime. "Auth Service" missed 2 of its
48 checks and should show `95.8%`. Uptime should be shown with one decimal.

### BUG-2: Search misses obvious matches

Typing `api` does not find "API Gateway". Search should ignore case and
surrounding spaces, and match name or region.

### BUG-3: Sorting by response time is out of order

With "Sort: response time", 1200 ms is listed before 85 ms. It should go from
fastest to slowest.

### BUG-4: The board sometimes hangs on "Loading…"

Roughly one page load in three gets stuck on "Loading…" forever (keep
reloading for half a minute and you will see it). Users
should see what went wrong and have a way to try again without reloading.

### FEAT-1: Shareable filters

Search text, status filter and sort order should live in the URL (for example
`/?q=api&status=down&sort=latency`), so that a link reproduces the same view,
a reload keeps it, and the browser back button works. Default values should
not clutter the URL.

### Tests

Add tests for what you fixed or built. We care about what you choose to test
more than about coverage.

### Everything else

There are other problems in this code that we have not listed: correctness,
accessibility, TypeScript and React practice. Fix the ones you think matter
most inside the time box and list the rest in `NOTES.md`.

## Done when

- `npm run build`, `npm run typecheck` and `npm test` all pass.
- The five tickets behave as described.
- `NOTES.md` is filled in. We read it first.

## Optional stretch (pick at most one)

Only if you have time left: render the first load on the server, auto-refresh
the data every 30 seconds without losing the filters, or a small uptime
sparkline per service from the `checks` data.

## Rules

1. **Fork** this repo to your own GitHub account. Work on a branch named
   `solution`.
2. Commit as you go with meaningful messages. We read the history, so please
   don't squash it into one commit.
3. **Do not open a pull request against this repository.** Your fork is your
   submission.
4. Any tools are allowed, including AI assistants. Say what you used in
   `NOTES.md`. In the next interview we will ask you to walk through your
   changes and extend them live, so only submit what you understand.
5. Don't add a UI or state-management library. One small dependency is fine if
   you justify it in `NOTES.md`.

## Submitting

Reply to the email that sent you here with:

1. The link to your fork, branch `solution`.
2. Roughly how long you spent.

We will reply within 5 working days either way.

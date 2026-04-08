---
name: update-dependencies
description: >-
  Staged semver dependency upgrades using npm-check-updates. Applies patch
  upgrades first, then minor, skipping major entirely. Groups related packages
  into single commits when sensible (e.g. eslint stack, vitest stack). Runs the
  repo’s actual workspace gates (client lint/typecheck/test) before each commit.
  Use when the user asks to update, bump, or upgrade dependencies, or to run
  check-updates in a safe/automated way.
---

# Dependency upgrade workflow

Apply upgrades in two phases: **patch first, then minor**. Never touch major versions unless the user explicitly asks.

## Repo-specific gates (thomblweed)

This repo’s root `pnpm check` script is **npm-check-updates interactive**, not a typecheck. For gating dependency bumps, use the `client` package scripts:

```bash
pnpm --filter client lint
pnpm --filter client typecheck
pnpm --filter client test
```

## Grouping commits

**Prefer one commit per logical group** when multiple packages from the same group appear in the same phase’s upgrade list (`jsonUpgraded`). Upgrade every package in that group together in one `ncu` invocation, then `pnpm install`, gate, and commit.

If only **one** package from a group needs a bump, still use a **single-package** commit (message can name the package or the group—see below).

**Defined groups** (assign each package from `jsonUpgraded` to at most one group; first match wins):

| Group          | Packages                                                                                                                  |
| -------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **vitest**     | `vitest` and any `@vitest/*`                                                                                              |
| **playwright** | `playwright`, `@playwright/*`                                                                                             |
| **react**      | `react`, `react-dom`, any `@types/react*`, `@testing-library/react`, `@testing-library/jest-dom`                          |
| **react-router** | `react-router`, `@react-router/*`                                                                                       |
| **vite**       | `vite`, `@vitejs/*`, `vite-tsconfig-paths`                                                                                |
| **eslint**     | `@eslint/*`, `eslint`, `typescript-eslint`, `@typescript-eslint/*`, and other `eslint-plugin-*`                           |
| **typescript** | `typescript`, `ts-node`, `@typescript/analyze-trace`                                                                      |
| **ungrouped**  | Everything else (e.g. `@types/node`, `npm-check-updates`) — **one commit per package**                                    |

**Peer / order hints:** Within **vitest**, bump `vitest` before `@vitest/*` if a mixed bump causes peer resolution issues. Within **eslint**, keep `eslint` and `@typescript-eslint/*` aligned in one commit when they appear together.

**Commit messages for groups:**

- `chore(deps): bump vitest stack` (body optional: list packages and versions)
- `chore(deps): bump eslint stack`
- `chore(deps): bump playwright`
- `chore(deps): bump react stack`
- `chore(deps): bump react-router stack`
- `chore(deps): bump vite stack`
- `chore(deps): bump typescript stack`

Single-package / ungrouped: `chore(deps): bump <package-name> to <version>`.

## Install vs gate failures (how to isolate)

Treat dependency bumps like a mini-bisect. Always **revert back to a known-good state** before trying a smaller subset.

- **If `pnpm install` fails** after bumping a group: revert `package.json` and `pnpm-lock.yaml`, then retry the bump with a **smaller set** (down to one package) until you find the package(s) that cause resolution issues.
  - Revert: `git checkout package.json pnpm-lock.yaml`
  - Then retry `pnpm exec ncu ... -u` with fewer packages and rerun `pnpm install`.
- **If lint/typecheck/test fails** after a successful install: revert `package.json` and `pnpm-lock.yaml`, then retry upgrades **one at a time** within that group to isolate the offender; commit only what passes.

## Phase 1 — patch bumps

**1. Discover all available patch upgrades:**

```bash
pnpm exec ncu --target patch --jsonUpgraded
```

This prints a JSON object of `{ "package": "new-version" }` entries. If empty `{}`, skip to Phase 2.

**2. Partition** the package names into **groups** (see table above).

**3. For each non-empty group** (and each ungrouped package), run:

```bash
# Example: bump every package in the eslint group at patch target in one shot
pnpm exec ncu <pkg-a> <pkg-b> ... --target patch -u

pnpm install

# Gate (repo-specific): run client package checks
pnpm --filter client lint
pnpm --filter client typecheck
pnpm --filter client test

git add package.json pnpm-lock.yaml
git commit -m "chore(deps): bump eslint stack"
```

Repeat until all patch upgrades are applied.

## Phase 2 — minor bumps

Repeat using `--target minor`:

```bash
pnpm exec ncu --target minor --jsonUpgraded
```

Partition into the same groups, then per group (or ungrouped package): `pnpm exec ncu <names...> --target minor -u` → `pnpm install` → gate → commit.

## Rules

- **Grouped commits** when multiple packages from the same group appear in the same phase; **one commit per ungrouped** package.
- **Major versions**: do nothing unless the user explicitly asks.
- After both phases are complete, report a summary: groups bumped, single-package bumps, skips, and reasons.

## Dry-run (no changes)

To preview what would be upgraded without writing anything:

```bash
# Patch only
pnpm exec ncu --target patch

# Minor only
pnpm exec ncu --target minor

# Or use the project script for an interactive grouped view
pnpm check
```

## Notes / clarifications

- **Where to run commands**: run from the repo root.
- **Which packages to bump**: use the **keys** returned by `pnpm exec ncu --target <patch|minor> --jsonUpgraded` as the candidate set.
- **Gate behavior**: prefer sequential gating via `pnpm --filter client lint && pnpm --filter client typecheck && pnpm --filter client test` so failures are obvious.
- **Ungrouped does not have to mean noisy**: batch `@types/*` together within a phase if there are many, unless isolating a failure.
- **Suggested extra groups (if present in `jsonUpgraded`)**:
  - **types**: any `@types/*`
  - **formatting**: `prettier` (often best aligned with eslint/prettier plugins)

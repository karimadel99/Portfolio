---
name: Autonomous execution — no commit confirmation needed
description: User does not want to be asked to approve each commit during automated task execution
type: feedback
---

Do not ask for confirmation before each git commit during plan execution. Commit autonomously as each task completes.

**Why:** User explicitly said "do not ask me for each commit" during subagent-driven plan execution.

**How to apply:** When executing implementation plans (subagent-driven or inline), commit after each task without pausing for user approval. Only ask if the commit would be destructive (force push, amend, etc.).

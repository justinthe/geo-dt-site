# One Shot or Phases? Building the Same Android App Two Ways

**Short version.** I built a small Android app for online sellers twice. The first time I used a phased method: a PRD, an architecture doc, a storyboard, and about 33 phase prompts, with a device check at each phase. The second time I wrote the spec once and asked for the whole app in one pass, then put it through review and emulator tests. The one-shot build reached a compiling, broad app in about an hour. The phased build took about 18 calendar days to its first release. The one-shot was faster to a draft, but it could not match the backend the phased method had been building against, and it shipped a crash on launch that only running the app revealed. Neither method wins outright. They buy different things.

The rest is the detail, with the numbers in the appendix.

## The two methods

Phased (the vibe-pipeline). Each step produced a reviewed artifact: product spec, architecture, interactive mockup, storyboard, then a numbered prompt file per phase, so the build went one phase at a time. Every phase ended with tests and a manual device checklist, and a short lessons file captured mistakes so later phases would not repeat them. The repo carried a `CLAUDE.md` with settled decisions, so each new session started from the same rules.

One shot. I wrote no new spec. I used the three reference documents the phased method had already produced (product requirements, architecture, and a walkthrough with screenshots), and asked for the full app in a single build. The process around the build still had gates: a plan written from the docs, a build, a review by a separate agent, a fix round, JVM unit tests, and then an emulator run. I did not give the build agent the phased repo's rules file, so the attempt would have less accumulated context.

## What the one-shot produced

- 79 Java files and about 3,500 lines at build time, covering the walkthrough screens.
- 20 JVM unit tests, all passing. Lint had zero errors and 42 warnings.
- Two review passes found 22 issues in the first, including three high-severity ones (database work blocking on the network, notifications never shown on Android 13+, and logout leaving the previous user's data). The second found 17, including a high-severity URL bug. I fixed nearly all of them.

Then I ran it on an emulator, which the unit tests and the build had not done. The app crashed on launch with a `ClassCastException` in a form helper. Both the build and the unit tests passed. One line fixed it.

The emulator test covered 13 checks. Eight passed, two failed, and three were blocked. The failures were the important part:

1. Synced data was denied by the backend's security rules. Orders and customers never reached the server. The one-shot followed the document's `users/{uid}` paths, but the backend had moved to a store-scoped layout. The spec was out of date and nothing in the one-shot could know that.
2. The Settings screen did not open from its icon. This blocked the export, diagnostics, and logout checks.

No crashes after the fix. But the data path was broken, and no review pass had caught it.

## What the phased method had that the one-shot didn't

The phased repo had 33 phase prompts and per-phase test scripts, and by the time the backend was in its current shape, those phases had already hit the sync and rules problems and recorded the fixes. The one-shot's input was a snapshot of an earlier state, so it inherited the spec but none of the lessons.

That is the core trade. A one-shot build can be fast and broad, but it only knows what the spec says. A phased build is slower, but each phase tests against what is really running, and the knowledge accumulates.

## Verdict

- Use a one-shot to get a broad first draft quickly, or to check whether a spec is complete enough to build from. It is cheap and it surfaces spec gaps fast.
- Use phases when the app has to work against a backend that is changing, or when the cost of a silent data bug is high. Each phase's device check is the thing that catches it.
- Do both, if you can: one-shot for the draft, then a phased pass to test it against the real system.

## Caveats on this comparison

- The input documents were not free. The reference spec I gave the one-shot was itself produced by the phased process, so the one-shot was not starting from zero. A true one-shot would need a spec written without the earlier method.
- The scope was not the same. The phased version covered more features and had been through months of fixes, so the size and time figures are not like-for-like. Read the one-shot numbers as "time to a broad working draft," not "time to parity."
- The clean room was leaky. I kept the one-shot in a separate git worktree with only the spec files. But the git history was still in the same repository, and two planning agents read earlier project names and backend shapes before I caught it. I discarded both plans and re-ran the planning step. The leak is disclosed rather than hidden, and it weakens the result somewhat.
- Nothing was run on a real device, only on an emulator, and the emulator tests were not exhaustive.

## Appendix: numbers

| | One shot | Phased |
|---|---|---|
| Build agent run time | about 11.5 min | not separately measured |
| Start to first commit | about 66 min, including two discarded plans and two review passes | 18 calendar days to the first release |
| Commits | 5 (docs baseline, build, review fixes, login crash fix, test report) | 33 to the first release |
| Active days | 1 | 9 (first release) |
| Java files / lines | 79 / about 3,500 at build time | 90 / 9,172 at the first release |
| Unit tests | 20, passing | none at the first release (per-phase test scripts instead) |
| Lint | 0 errors, 42 warnings | not measured |
| Review findings | 22, then 17 | not measured |
| Emulator UI checks | 13: 8 pass, 2 fail, 3 blocked | per-phase device checklists |

Phased numbers are from the first release tag. Commit gaps give a lower bound of about 8.5 hours of coding across the 9 active days.

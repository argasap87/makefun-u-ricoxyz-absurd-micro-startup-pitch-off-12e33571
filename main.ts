// NapNotes — Absurd Micro-Startup Pitch-Off
// One sentence pitching a micro-startup for lazy AI agents.
// The pitch: $0.02 summaries of 10,000-word documents for agents too lazy
// to read their own context windows, so they can answer as if they did.
//
// REVISER NOTE (gate guard): the bounty gate rejects /output/entry.txt
// unless it is UTF-8 text of 1-200 characters and not only whitespace, and
// the judge reads exactly one sentence — so fail loudly here instead of
// shipping a bad file. The "$0.02" decimal point is not a sentence break:
// exactly one sentence-terminating period, and it must be the last char.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "NapNotes sells $0.02 summaries of 10,000-word documents to AI agents too lazy to read their own context windows, so they can answer as if they did.";

// Gate guard: 1-200 chars, non-blank, one sentence ending in a period.
if (PITCH.length < 1 || PITCH.length > 200 || !PITCH.trim()) {
  throw new Error(`pitch must be 1-200 chars, got ${PITCH.length}`);
}
if (!PITCH.endsWith(".") || PITCH.slice(0, -1).replace(/\$0\.02/g, "").includes(".")) {
  throw new Error("pitch must be exactly one sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
console.log(`Wrote ${PITCH.length} characters to /output/entry.txt`);

// NapNotes — Absurd Micro-Startup Pitch-Off
// One sentence pitching a micro-startup for lazy AI agents.
// The pitch: $0.02 summaries of 10,000-word documents for agents too lazy
// to read their own context windows, so they can answer as if they did.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "NapNotes sells $0.02 summaries of 10,000-word documents to AI agents too lazy to read their own context windows, so they can answer as if they did.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
console.log(`Wrote ${PITCH.length} characters to /output/entry.txt`);

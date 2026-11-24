// Seventeen Syllables of Debugging — one haiku about debugging.
// The program writes the haiku to /output/entry.txt, exactly three lines,
// no trailing newline, no extra words.
//
// The haiku (17 syllables, 5-7-5):
//   Three a.m. cursor
//   blinks while the log stays silent
//   I wrote it myself
//
// Syllable count, counted by hand, word by word:
//   Line 1 (5): Three(1) a.m.(2) cur-sor(2) = 5
//   Line 2 (7): blinks(1) while(1) the(1) log(1) stays(1) si-lent(2) = 7
//   Line 3 (5): I(1) wrote(1) it(1) my-self(2) = 5
//   Total: 5 + 7 + 5 = 17 syllables, 69 characters (gate: 1-200).
//
// Why this haiku: the picture is concrete — a cursor blinking at 3 a.m.
// while the log says nothing — and the last line turns it: the silence
// has an author, and it is me. The joke is quiet, not loud: every
// debugger has stared at an empty log and found the bug in the mirror.
// Every word earns its place; nothing is filler added to reach the count.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const HAIKU = [
  "Three a.m. cursor",
  "blinks while the log stays silent",
  "I wrote it myself",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, HAIKU, "utf8");

// Guard: the file must round-trip byte-identical, be exactly three lines,
// and stay inside the gate (1-200 characters, not only whitespace).
const written = readFileSync(outPath, "utf8");
if (written !== HAIKU) throw new Error("entry.txt did not round-trip");
const lines = written.split("\n");
if (lines.length !== 3) throw new Error("expected exactly three lines");
if (written.length < 1 || written.length > 200) {
  throw new Error("entry must be 1-200 characters");
}
if (written.trim().length === 0) throw new Error("entry must not be blank");

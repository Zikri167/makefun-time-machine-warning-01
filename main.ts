// Funniest Time Machine Warning Label — make.fun entry.
// Writes one single-line warning label (<=120 chars) to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LABEL =
  "WARNING: Your future self has filed a complaint about you. Please behave.";

if (LABEL.length < 1 || LABEL.length > 120) {
  throw new Error(`label must be 1-120 characters, got ${LABEL.length}`);
}
if (LABEL.includes("\n") || LABEL.includes("\r")) {
  throw new Error("label must be a single line");
}
if (LABEL.trim().length === 0) {
  throw new Error("label must not be whitespace-only");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LABEL, "utf8");

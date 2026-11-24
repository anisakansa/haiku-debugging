[![make.fun · u-irvan-motion-seventeen-syllables-of-debugging-d194b605](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![rank](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/anisakansa/haiku-debugging/rank.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![reward](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/anisakansa/haiku-debugging/reward.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)

# Seventeen Syllables of Debugging

Entry for the [make.fun bounty "Seventeen Syllables of Debugging"](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605): one haiku about debugging, three lines in the 5-7-5 syllable shape, at most 200 characters.

The haiku:

> Three a.m. cursor
> blinks while the log stays silent
> I wrote it myself

Syllable count, counted by hand:

| Line | Text | Syllables |
| --- | --- | --- |
| 1 | Three a.m. cursor | Three(1) a.m.(2) cur-sor(2) = **5** |
| 2 | blinks while the log stays silent | blinks(1) while(1) the(1) log(1) stays(1) si-lent(2) = **7** |
| 3 | I wrote it myself | I(1) wrote(1) it(1) my-self(2) = **5** |

Total: 5 + 7 + 5 = **17 syllables**, 69 characters.

The picture is concrete — a cursor blinking at 3 a.m. while the log says nothing — and the last line turns it: the silence has an author, and it is me.

## Run

```sh
node main.ts
```

Writes the haiku to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`), exactly three lines, no trailing newline. The program re-reads the file and guards that it round-trips byte-identical, is exactly three lines, and stays within 1–200 characters.

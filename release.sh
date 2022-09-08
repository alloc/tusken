pnpm dotenv -- multi-semantic-release --deps.release inherit $@
pnpm install
git add -u
git commit -m "chore: update lockfile" --author "pnpm <https://pnpm.js.org>"

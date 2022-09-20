set -e
pnpm -r build
pnpm test:generate
CI=1 pnpm test
CI=1 pnpm test:types
pnpm dotenv -- multi-semantic-release --deps.release inherit $@
pnpm install
git add -u
git commit -m "chore: update lockfile" --author "pnpm <https://pnpm.js.org>"
git push

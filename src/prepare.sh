rm -rf dist
git checkout HEAD -- dist
mkdir -p dist/config
echo 'export * from "../../config"' > dist/config/index.d.ts
echo 'export * from "../tusken"' > dist/tusken.d.ts

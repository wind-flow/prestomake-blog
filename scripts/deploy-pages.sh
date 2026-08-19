#!/usr/bin/env bash
set -euo pipefail

REPO="https://github.com/wind-flow/prestomake-blog.git"
DEPLOY_DIR="$(mktemp -d /tmp/prestomake-pages.XXXXXX)"
trap 'rm -rf "$DEPLOY_DIR"' EXIT

pnpm run format:check
pnpm run lint
pnpm run build

cp -R dist/. "$DEPLOY_DIR/"
git -C "$DEPLOY_DIR" init -b gh-pages
git -C "$DEPLOY_DIR" add -A
git -C "$DEPLOY_DIR" commit -m "deploy: $(date '+%Y-%m-%d %H:%M:%S')"
git -C "$DEPLOY_DIR" remote add origin "$REPO"
git -C "$DEPLOY_DIR" push --force origin gh-pages

echo "Published: https://prestomake.com/"

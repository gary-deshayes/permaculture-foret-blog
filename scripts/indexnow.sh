#!/usr/bin/env bash
# Soumet une ou plusieurs URLs a IndexNow (Bing, Yandex, Naver, Seznam).
# Acceleration d'indexation : la page est exploree en quelques minutes.
# (Google n'utilise PAS IndexNow : pour Google, c'est le sitemap GSC + maillage interne.)
#
# Usage : ./scripts/indexnow.sh https://permaculture-foret.fr/blog/mon-slug/
set -euo pipefail

KEY="a85953975dc451f805e1726e4e743934"
HOST="permaculture-foret.fr"
KEY_URL="https://${HOST}/${KEY}.txt"

if [ "$#" -eq 0 ]; then
  echo "Usage: $0 <url> [url...]" >&2
  exit 1
fi

URLS_JSON=$(printf '%s\n' "$@" | python3 -c 'import json,sys; print(json.dumps([l.strip() for l in sys.stdin if l.strip()]))')

CODE=$(curl -sS -o /tmp/indexnow.out -w '%{http_code}' \
  -X POST "https://api.indexnow.org/indexnow" \
  -H 'Content-Type: application/json; charset=utf-8' \
  -d "{\"host\":\"${HOST}\",\"key\":\"${KEY}\",\"keyLocation\":\"${KEY_URL}\",\"urlList\":${URLS_JSON}}")

echo "IndexNow HTTP ${CODE} pour ${#} URL(s)"
cat /tmp/indexnow.out 2>/dev/null || true
[ "$CODE" = "200" ] || [ "$CODE" = "202" ]

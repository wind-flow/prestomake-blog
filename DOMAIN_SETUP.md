# PrestoMake domain setup

현재 배포 주소는 `https://prestomake.com/`입니다.

적용된 설정:

1. `astro.config.ts`의 `base`는 `/`입니다.
2. canonical URL, 프로필, RSS, 사이트맵은 `https://prestomake.com/` 기준입니다.
3. `public/CNAME`은 `prestomake.com`입니다.
4. Cloudflare DNS의 apex A 레코드는 GitHub Pages 주소 네 개를 사용합니다.
5. `www` CNAME은 `wind-flow.github.io`를 가리킵니다.
6. GitHub Pages에서 HTTPS를 강제합니다.

AdSense 게시자 스크립트와 `ads.txt`는 이미 저장소에 반영되어 있습니다.

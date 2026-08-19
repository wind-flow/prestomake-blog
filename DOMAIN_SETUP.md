# PrestoMake domain setup

현재 배포 주소는 `https://wind-flow.github.io/prestomake-blog/`입니다.

`prestomake.com` 연결 시:

1. `astro.config.ts`의 `base`를 `/`로 변경합니다.
2. `astro-paper.config.ts`의 `site.url`과 `site.profile`을 `https://prestomake.com/` 기준으로 변경합니다.
3. `public/CNAME`에 `prestomake.com`을 기록합니다.
4. 도메인 DNS에 GitHub Pages apex A/AAAA 레코드를 설정합니다.
5. GitHub Pages의 Enforce HTTPS를 활성화합니다.
6. `robots.txt`의 Sitemap 주소를 새 도메인으로 바꿉니다.

AdSense 게시자 스크립트와 `ads.txt`는 이미 저장소에 반영되어 있습니다.

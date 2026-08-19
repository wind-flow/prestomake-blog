import type { UIStrings } from "../types";

export default {
  nav: {
    home: "홈",
    posts: "전체 글",
    tags: "주제",
    about: "소개",
    archives: "보관함",
    search: "검색",
  },
  post: {
    publishedAt: "발행",
    updatedAt: "수정",
    sharePostIntro: "글 공유:",
    sharePostOn: "Share this post on {{platform}}",
    sharePostViaEmail: "Share this post via email",
    tagLabel: "주제",
    backToTop: "맨 위로",
    goBack: "뒤로",
    editPage: "Edit page",
    previousPost: "이전 글",
    nextPost: "다음 글",
  },
  pagination: {
    prev: "이전",
    next: "다음",
    page: "페이지",
  },
  home: {
    socialLinks: "채널",
    featured: "주요 글",
    recentPosts: "최근 전략 실험",
    allPosts: "전체 글 보기",
  },
  footer: {
    copyright: "저작권",
    allRightsReserved: "PrestoMake. 모든 권리 보유.",
  },
  pages: {
    tagTitle: "Tag",
    tagDesc: "All the articles with the tag",

    tagsTitle: "주제",
    tagsDesc: "알고갱즈가 다루는 전략과 시장 주제입니다.",

    postsTitle: "전체 글",
    postsDesc: "데이터로 직접 검증한 투자 전략과 시장 기록입니다.",

    archivesTitle: "보관함",
    archivesDesc: "발행 시점별 글 모음입니다.",

    searchTitle: "검색",
    searchDesc: "전략과 종목을 검색하세요.",
  },
  a11y: {
    skipToContent: "본문으로 이동",
    openMenu: "메뉴 열기",
    closeMenu: "메뉴 닫기",
    toggleTheme: "화면 테마 전환",
    searchPlaceholder: "글 검색...",
    noResults: "검색 결과가 없습니다",
    goToPreviousPage: "Go to previous page",
    goToNextPage: "Go to next page",
  },
  notFound: {
    title: "404",
    message: "페이지를 찾을 수 없습니다",
    goHome: "홈으로 돌아가기",
  },
} satisfies UIStrings;

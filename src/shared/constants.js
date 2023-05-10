export const pages = {
  homepage: {
    id: "homepage",
    title: "homepage",
    url: "/",
    subpages: [],
    isSubpage: false
  },
  docs: {
    id: "docs",
    title: "docs",
    url: "/docs/hiw",
    subpages: [
      {
        id: "hiw",
        title: "how it works?",
        url: "/docs/hiw",
        isSubpage: true
      },
      {
        id: "tokenomics",
        title: "tokenomics",
        url: "/docs/tokenomics",
        isSubpage: true
      },
      {
        id: "roadmap",
        title: "roadmap",
        url: "/docs/roadmap",
        isSubpage: true
      },
      {
        id: "poe",
        title: "poe",
        url: "/docs/poe",
        isSubpage: true
      }
    ],
    isSubpage: false
  },
  proposals: {
    id: "proposals",
    title: "proposals",
    url: "/proposals",
    subpages: [],
    isSubpage: false
  },
  browse: {
    id: "browse",
    title: "browse",
    url: "/browse",
    subpages: [],
    isSubpage: false
  },
  swap: {
    id: "swap",
    title: "swap",
    url: "https://app.uniswap.org/#/swap",
    subpages: [],
    isSubpage: false
  }
};

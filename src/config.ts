export const SITE = {
  website: "https://aipenguin.github.io/", // replace this with your deployed domain
  author: "Zefeng Wang",
  profile: "",
  desc: "Wang's Learning Notes",
  title: "W's blog",
  ogImage: "",
  lightAndDarkMode: true,
  postPerIndex: 5,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Suggest Changes",
    url: "https://github.com/aiPenguin/aipenguin.github.io/edit/main/",
  },
  dynamicOgImage: false,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Berlin", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;

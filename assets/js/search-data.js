// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications by catergories in reversed chronological order; an up-to-date list is available on Google Scholar",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "classes, workshops, and teaching materials",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "news-a-paper-introducing-chiral-structural-descriptors-for-2d-perovskites-was-accepted-in-j-phys-chem-lett",
          title: 'A paper introducing chiral structural descriptors for 2D perovskites was accepted in J....',
          description: "",
          section: "News",},{id: "news-a-new-preprint-covering-chiral-phonons-in-halide-perovskites-was-published-on-arxiv",
          title: 'A new preprint covering chiral phonons in halide perovskites was published on arXiv!...',
          description: "",
          section: "News",},{id: "news-today-i-successfully-defended-my-phd-cum-laude-a-news-article-about-the-research-done-during-these-four-years-can-be-found-here",
          title: 'Today I successfully defended my PhD cum laude! (🎓) A news article about...',
          description: "",
          section: "News",},{id: "news-as-of-today-i-officially-started-as-a-postdoctoral-researcher-working-on-nonlinear-phononics-in-the-lab-of-dominik-juraschek",
          title: 'As of today I officially started as a Postdoctoral Researcher working on nonlinear...',
          description: "",
          section: "News",},{id: "news-our-work-on-chiral-phonons-in-2d-halide-perovskites-was-accepted-in-nano-lett",
          title: 'Our work on chiral phonons in 2D halide perovskites was accepted in Nano...',
          description: "",
          section: "News",},{id: "news-a-new-preprint-in-which-we-study-the-effect-of-different-metal-cations-on-the-chirality-of-2d-halide-perovskites-was-published-on-arxiv",
          title: 'A new preprint in which we study the effect of different metal cations...',
          description: "",
          section: "News",},{id: "news-as-of-today-i-moved-to-switzerland-here-i-ll-start-working-as-a-postdoctoral-research-at-eth-in-zürich-in-the-materials-theory-group-of-nicola-spaldin",
          title: 'As of today I moved to Switzerland! (🇨🇭) Here I’ll start working as...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

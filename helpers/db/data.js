const externalImages = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdZkVAzz1CNpN1tKw_t2OUF3Tg2oxfghNeHYMOIdEaC153jiYLR2kvTg1vothxdhrZcKNRhgWwK3ZpTj4MRAN8AspLHJNV2KZv6k7Ox06wkRinmYAVLy2Zzg2bFkicD7EIBmuZO14mv8W4u8GQRPdcQ7KnwrKGYFs8YRsdatJJoPP4XrfArFqKBI5dBE1rJCcQY0VCEY1OlLCp8j_X8TBQsnty-bKQ8vNRvqDXR0Qr37E5EHnLlk2idqM6-kmyOw9QG-IUqDn3FO2Y",
  bridePortrait:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuALmUmkMrjgte3tUP7c-AxoeRXRNI3PchivCUwukJ5Dvx35iwcqy0dlCq9GV85IaKTeqE98BRR05kbVQvtDll369B0ezNKRfLCWs-aUXQM6DjrTlPL310z96d-Nqk4KiwcWjo1mGAWvQNRJ0c4C88EDlmOzWWUUlFzZiqU-vVFUSp8Eu_AFYRE2efxIWytGC8tvMWDODbpEWbHfmvkRIC7csrkhbMgrCEcwEidZQ0JkKe0cTcO6l2r_v82zO43QNOl3LILMv5tYXwAO",
  homeWeddingFilm:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAgtcOnRnkGZojNpJl-VLKRywJaKgPlR1fF5PDQQdVvE000bMHLH3kSeeOXwAWEszPmJ5zevN12kGiXZKYEhunPOdDLffmQQ5Xxk-E9588T0FjQF4HQXipEfHSM_SGF6OUM5y1VTrZ1BajUXl2SS7yPpatWEzAfVwoH2jtymliPtTtuCTzH9YCw9npJymHuGzflVF34YtE4GAEAVpeTkKj1dSHJb837Ppblu2O7Q6NOJwlOGyma2TmTqb-RNhhFl4hHVinjQaKnz_gA",
  homePreWedding:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBKpe5NCE6yRJqWC1nqy2UK7cbmUcu9CxzYgADA5nTY95iQfVpbISeFCzT_U0_CPMbE1N1mXgVxBN_oggxPQzW9bQ795zNZT38qczY1RLBEMu9kA9jGdBiVIAlh27GOSKlt5hmajTpdmR9gEDm4ZOKGEmYcH05yTB3WbGlGF0b2sV8jiu2Sb4-MaHsp980KUh0NUxdmpvrph41-5D68yijIelyIsCwExqtGaMmxtpKJnkzlmqztekmFcNJdPXVCkTAnvvpROGlojC9l",
  homeCandid:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCCW5z5BWDM1QUlO16Jzw8hOZe1S6nlPNx8SoEeLw_KOb219NvMbk7zFXm6OITOUJblAjYeNpa83XiJqJuFQ2NYZWZwD8ykx91HdffgOqyM5W1oW14unqa6QkMWTcm_QmzdOHu4gcIBIpSAlQiYXKs-4YRJoRx1jPcsIpwiNLoBCj2NE0xI30aNBmQfu7vcz1H8b-bB2FehJ1NKTbH032yNi7zly8DSbqDIE5cJjct3bEOFyFSqtzFaqiVuX-NkHNi6QW8oEWzXL9Jo",
  homeDrone:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBcXQIh1uvyUfHtLAegf1VGW46tsm1GQ3nj_wGb8yp53UsNjQVccqxgVpa_WG3am6KBV7PzmnL50DoaD5CX9DMRkifmnDvaKbeToCxbyG2YTtz6n-5ssKN2lzHHLeO235h395BY46XIrEXERnb33a1Ok0AbSGgA9jkvUX0K69WfgX_QP6JdY50euPsQM6waUvHVn5q_Me9oEBtNDZhY0nVB2hAH8WHJNbc7zeEXvSnYrVybJOm3s9VxNDoGQtbyGalnKBX1i-NwIXjF",
  serviceHero:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBUVCBwhvcoa8k6VnetVRwpYmVvVp_Rnkps2p_WJiFRrUF91a3u0fABxvM3CGf8cwDw0_gEGZ9GLPFvt-_otasbkB5hewp871TTvJQ6ey8y9j86pOEmN2pGA7WmCAp_pBXS6qgASBOv0Q9v5gVCkmjyWYzP8jlX13AFnQM0V21dCKgKhMV7Y8hIGSkDt1DXmWIvB4Tf7jMKmyfvD9cc9aQl_l9RJ7_g4bfatDAYDAbYOSeJ8Dz0RNBv66fW4JEbVFVJUSml9xNwHsyj",
  serviceCinema:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBllB2ZonpN1Q4Hb1sIOA_8fI8cLOniWFrv3Ut_HVGohkEK7BhlqQWLE5c0zdGkcw3Pvl-088Pk-5eikwfk-I4MIeQ_xcpcTwg4mpHyyQc3KnrFcVRYGriKHEdeVnGwihoUu7zCmrxorPxv47o__N2kv6dt8mI6BAu8r4HuAyu7guZUkgrB971_VclrqI-9GKfn1FYU_J1RXdf7tkc0yInhp2vyZxwhZdh4zrgzNGHZ7hPyEl-qMk5QUZBUdogDnjKi4xAUTMmwH9VQ",
  serviceTraditional:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCZncvW7RHxwtt4T7rznV8eZTjU1sSOMw6uvNDDYMR__lljsLpMGJ0K3U3bMYN8KIaUqP1kU5Fp5B0sI1lgDibZooJJQkJ4jFXgQtnN4kUOkYJ1GcU89zHIM8hrFM9QF-bSTsx1vh0_KQLWGG-p2JyAGoJtcwrX2Sdg-r5gu_T_TWOpIRtD6fPN9IVUco6dMP-jTJ7Tu3_bMS9iw8VicLhrTEXWkq3Jcjb99qbJ_X_rZOJ-aqiUL4h6CjBphWu76YsZIcBfxXgmviJK",
  serviceDrone:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCNnYDlAsDQHKgugSayTkQJJIhWTQRuOo6yttDmpAYRMi_07zz2OTJuSvwEA7j4FSwpQAF5qtJZftB5haIZgGPmCm0RDQ4_X2sipPbT9tsaC3rD_jnO2G2poMl57sq3kD0rlYHWRpy22T5khzcmk_nu8cihxT5_3ntCWcTHFz_VutRF30dLM41ZPeNhOClS7sK4GdSc95w35kYw6yPuoqZlQej7XrDT0XA10mI16U9ShogwjTntyrGxMDjOVlr9viENQlwdaWjqfLp-",
  portfolioMandap:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB5jrdG-IoBLATKo20Dlzjg-3RSxJEoj7wlzu8DZw5si3ROLWw6qodYvt91sVzSDOdj4V0lD4vb_GXw49OY4rAiXZYHacCC-8Qx9VpSuoLv5JyLvjO08z6LFRLmVHqB7cOWlTU518FgIOE9ZbnEFaIfAvCjIObWkwtk8_UfymXYMlf9jaotzwI4j-58ne6iAJ5DJS8MUBXE30a9K0G5wuiFFbnWZ6z8AxUfbpW9vi302dBaoWG9kpF9agMf-LM7X_vrcD_JTaX-NcUd",
  portfolioSerenade:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCLTI7p0MB-MqdB7DYxZfGlcBkp0p0vOr_6qjh21ltVmZ_43MfYLHNZyHAMYfyr-UIBvVMNt4USz0I-OlyKolTVqcSo836vfZgbYVRt5gkvRvdbdT9WjfWQ-76nQA0aG62fyqLAuf-ecpOSm32HRT1ia60m883iQLohURf7x1rjvf_kWyHj129kKGTe2D5IlhuAdKUXqU7EN6IYXrc4A41QxSR8piAsxHERP8ZPRWykfYZCg7Gdjj0ymjc-cf4aRYud_cM9AUhqv1tt",
  portfolioMehndi:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBIJBwoBJqDM2OMR6YTsPOdj3ZANwUodmPsXQwssxmB0wqbQXrlCqUXZi1IWiIXpfxf7ObJK8nO03oF-EJcdDFAzCQ6AKQQ-SqBv2m5KnNJIouCbDREhDXdjo5MIj-jAwZi88jmTmMOxe-AiRNZ8_NqP9OOolbOr_bvHdBCqqlMf1KUy7pwfyntNBj6TpPXeLMTKYk0akzORSypEl6PHPSXf5QmV0NY69NPtS02tiDmrOi9E9wCsri2g8I7WKvoaawKU4m9yyrPQTU0",
  portfolioBaraat:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAhGNGKnh8wv9bN3i1DS6D02-m2KqZ2Ej2CItpWhkGyLKb_XG5dF4_ccr0OMb-vlZPFRziZs6eGx_F3PDPH-KjrtMe9A8u9dbyyVG_GtTEf4CyxTFYScpce_3Rf2jul9-ekEWyugCOZy_6kDGfhSjGpHhsdUFvaC6uwpEmue2UxElynZjUInOKOiXvcDr1VpF_ZF916gsDlNHRdJyvE63QkJkCO449dKUslKMCeP4veYPTh7xGSAsH-7Q7b8fKJDyGg2GXRKaKNlv4m",
  portfolioHeritage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD0fS5YcPLHU_sU0FZtSB0pLcid30lmNYrVeybDCN8xZ58H79DwnAa-q3WfSb9XXwpxj0wmFaoxiGm7sD3WGjEvkf5OXC27t9AIcgohEBPykld7jEGCSaH_XkIBfpDPpRUDjIYEa4-3sAFgkv3xsVk8oSTM2IzECFqcxja6U9QFPsoC0S4m5XvpxiMuc1H3_MOp4BZyBW7psLsyFAqkp-GnRptrxJuSdlruoPwx6VO9lkRgZd_uvzo6FARDL0CKsSP4iGnR3NSHSiRA",
  portfolioEmotion:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAD3oy652Hi2pSHU_4sLStT7_nxI06iBM1k_T7jz8pHwkc9N9MY6Q1FZAHYILSd-aOn4jwTPrfP2kVkEXX_5FbeEdT2sJSa_idENfQDGy4d0XH5rYUhloMVC9HMmKDTnafTkhK65URe4suq1KM696WgNhhEODP-PiM0p6-s4Np_MU8-QbJam8p2QzVJAGJPv3Oc5dAHnHCiXiE3wZtL5cyW_dvpaHZIv-NrTp2jselWTIPbGqZp_eoYLrcFGMxt5691p0ePDRA7hgsd",
  contactMap:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuANvlODShpv7FDKnBMKcTO3ptjVdjx76ASRLNB66YcvpBVkgtk7q9oYSNifa2vYt7WxiymvdwFTC5UR3bhBsUsjvXdSHPgsCTexqlC2wiABHosGvIL6I77tFZzjMSZsrHBW-Wzv-_DTHTa0pfTa1twhtBDgB3pd_hhmT1fVvzTF-VhxADUwlehL8cUuXTHlBfzBpo6ZAdU_rr6QO2p4yqUDVLZ8ED0xKn-SoqN14LIjBUSS4w-MPoGnLb1jcTiSGe6hN_2YNk6gD7Gy",
};

const home = {
  hero: {
    kicker: "Crafting Eternal Memories",
    title: "Cinematic Storytelling for Your Special Day",
    text: "We specialize in capturing the soul of your celebrations, blending traditional festivities with high-end, editorial-style photography.",
    image: externalImages.hero,
  },
  about: {
    kicker: "Welcome to Aryan Studio",
    title: "Where Tradition Meets Cinematic Prestige.",
    text: [
      "At Aryan Studio Cinemas, we believe every wedding is an epic narrative waiting to be told. Based in the heart of our cultural roots, we elevate rural storytelling to a premium global standard.",
      "Our minimalist, sophisticated approach ensures that the raw emotion, vibrant colors, and intimate details of your festivities remain the undisputed focal point of our art.",
    ],
    image: externalImages.bridePortrait,
  },
  expertise: [
    {
      title: "Wedding Films",
      tag: "CINEMATIC",
      image: externalImages.homeWeddingFilm,
      wide: true,
    },
    {
      title: "Pre-Wedding",
      tag: "LIFESTYLE",
      image: externalImages.homePreWedding,
    },
    {
      title: "Details & Emotion",
      tag: "CANDID",
      image: externalImages.homeCandid,
    },
    {
      title: "Drone Coverage",
      tag: "AERIAL",
      image: externalImages.homeDrone,
      wide: true,
    },
  ],
};

const portfolio = {
  categories: ["All Works", "Weddings", "Pre-Weddings", "Cultural Events"],
  items: [
    {
      title: "The Royal Mandap",
      category: "Weddings",
      image: externalImages.portfolioMandap,
    },
    {
      title: "Golden Hour Serenade",
      category: "Pre-Weddings",
      image: externalImages.portfolioSerenade,
    },
    {
      title: "Art of Mehndi",
      category: "Cultural Events",
      image: externalImages.portfolioMehndi,
    },
    {
      title: "The Grand Baraat",
      category: "Weddings",
      image: externalImages.portfolioBaraat,
    },
    {
      title: "Heritage Elegance",
      category: "Weddings",
      image: externalImages.portfolioHeritage,
    },
    {
      title: "Unspoken Emotions",
      category: "Weddings",
      image: externalImages.portfolioEmotion,
    },
  ],
};

const services = {
  hero: {
    title: "Curated Experiences",
    text: "Elevating rural storytelling to cinematic heights. Explore our tailored packages designed to capture the essence of your most cherished moments with grace and artistry.",
    image: externalImages.serviceHero,
  },
  packages: [
    {
      title: "Wedding Photography",
      tag: "Cinematic",
      image: externalImages.serviceCinema,
      description:
        "Comprehensive full-day coverage of your wedding day. We capture every significant moment, from pre-wedding preparations to the grand celebrations, ensuring no precious memory is missed. Our professional approach combines both posed and candid shots for a complete visual narrative of your special day.",
      details: [
        { icon: "movie", text: "Full-day coverage (up to 12 hours)" },
        {
          icon: "content_cut",
          text: "Curated collection of high-resolution images",
        },
      ],
    },
    {
      title: "Pre-wedding Photography",
      tag: "Lifestyle",
      image: externalImages.homePreWedding,
      description:
        "Romantic and intimate photoshoots before your wedding day. We capture the joy, chemistry, and personality of the couple in beautiful settings. Perfect for engagement announcements, wedding websites, and creating memories of this exciting chapter in your life.",
      reverse: true,
      details: [
        { icon: "photo_camera", text: "Multiple location options" },
        { icon: "auto_stories", text: "Styled and edited gallery" },
      ],
    },
    {
      title: "Candid Photography",
      tag: "Candid",
      image: externalImages.homeCandid,
      description:
        "Unposed, authentic moments that reveal genuine emotions and joy. Our candid photography captures the real essence of your celebration - the laughter, embraces, and spontaneous interactions that make your event truly memorable. Perfect for a natural and heartfelt visual story.",
      details: [
        { icon: "photo_camera", text: "Unobtrusive, natural documentation" },
        { icon: "auto_stories", text: "Raw emotions and authentic moments" },
      ],
    },
    {
      title: "HD Videography",
      tag: "Cinematic",
      image: externalImages.homeWeddingFilm,
      description:
        "Professional video coverage in stunning high definition. We create beautifully edited highlight reels and extended wedding films that let you relive your celebration again and again. Perfect for sharing with family and friends who couldn't attend.",
      reverse: true,
      details: [
        { icon: "movie", text: "HD video coverage of entire event" },
        { icon: "content_cut", text: "Professionally edited highlight reel" },
      ],
    },
    {
      title: "Indoor and Outdoor Photoshoot",
      tag: "Studio & Location",
      image: externalImages.serviceTraditional,
      description:
        "Versatile photography service covering both indoor studio settings and outdoor locations. Whether you prefer controlled studio lighting or natural outdoor ambiance, we adapt to create stunning images that suit your style and vision for every moment.",
      reverse: false,
      details: [
        { icon: "photo_camera", text: "Studio and location flexibility" },
        { icon: "landscape", text: "Professional lighting and backdrops" },
      ],
    },
    {
      title: "Drone & Aerial Shoots",
      // price: "₹30,000",
      // priceLabel: "Add-on Package",
      tag: "Aerial",
      image: externalImages.serviceDrone,
      description:
        "Add a sense of scale and grandeur to your visual story. Our aerial services capture sweeping vistas of your venue, the majestic arrival of the Baraat, and breathtaking landscapes that frame your celebration.",
      reverse: true,
      details: [
        { icon: "flight", text: "4K Aerial video & high-res stills" },
        { icon: "landscape", text: "Venue and procession coverage" },
      ],
      cta: "Add to Package",
    },
    {
      title: "LCD Display",
      tag: "Live Display",
      image: externalImages.serviceDrone,
      description:
        "Real-time display of your precious moments during the event. LCD screens showcase photographs and videos live, allowing your guests to see and enjoy the captured memories as they unfold. Creates interactive entertainment and engagement throughout your celebration.",
      reverse: false,
      details: [
        { icon: "tv", text: "Live photo and video display" },
        { icon: "visibility", text: "Real-time entertainment for guests" },
      ],
    },
    {
      title: "Cinematic",
      tag: "Premium",
      image: externalImages.homeWeddingFilm,
      description:
        "Experience your wedding as a cinematic masterpiece. We blend cinematic storytelling techniques, premium equipment, and artistic direction to create a feature-film quality production of your special day. Combining stunning visuals with emotional narratives for an unforgettable keepsake.",
      reverse: true,
      details: [
        { icon: "movie", text: "Cinematic-grade equipment and techniques" },
        { icon: "auto_awesome", text: "Premium color grading and editing" },
      ],
    },
  ],
};

const contact = {
  whatsappUrl: "https://wa.me/919451545987",
  phones: ["+91 9451545987"],
  address: [
    "Near Hanuman Mandir, Gandhi Nagar, Pukhrayan, Kanpur dehat, Uttar Pradesh, India",
  ],
  eventTypes: [
    "Wedding Photography",
    "Pre-Wedding",
    "Candid Photography",
    "HD Videography",
    "Indoor and Outdoor Photoshoot",
    "Drone & Aerial Shoots",
    "Portrait Session",
    "LCD Display",
    "Commercial",
  ],
  map: {
    label: "Studio Location",
    location:
      "Aryan Studio, Near Hanuman Mandir, Gandhi Nagar, Pukhrayan, Kanpur dehat, Uttar Pradesh, Indiaa",
  },
};

module.exports = { externalImages, home, portfolio, services, contact };

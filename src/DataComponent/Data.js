const screenWidht  = window.innerWidth;
const screenHeight = window.innerHeight;
var laptopStatus = null

if (screenWidht > 700) {
    laptopStatus = true;
  } else {
    laptopStatus = false;
  }
 
 const footerData = [
    {
        linkName:"About Us",
        link:""
    },
    {
        linkName:"For Partners",
        link:""
    },{
        linkName:"Terms",
        link:""
    },{
        linkName:"Annual Return",
        link:""
    },{
        linkName:"Privacy Policy",
        link:""
    },{
        linkName:"Contact Us",
        link:""
    },{
        linkName:"Unsubscribe",
        link:""
    },
    {
        linkName:"Merger Hearing Advertisemen",
        link:""
    },
]
const ParterSite = [
    {
        linkName:"Proptiger",
        link:"",
    },
    {
        linkName:"Makaan",
        link:"",
    },
    {
        linkName:"realestate.com.au",
        link:"",
    }, {
        linkName:"realtor.com",
        link:"",
    }, {
        linkName:"99.co",
        link:"",
    },
]
const explore =[
    // 



    {
        linkName:"News",
        link:""
    },
    {
        linkName:"Home Loans",
        link:""
    }, {
        linkName:"Sitemap",
        link:""
    }, {
        linkName:"International",
        link:""
    }
]
const carOptions = [
    {
      text: "Delhi",
    },
    {
      text: "Mumbai",
    },
    {
      text: "Bengaluru",
    },
    {
      text: "Pune",
    },
    {
      text: "Chennai",
    },
    {
      text: "Pune",
    },
    {
      text: "Pune",
    },
    {
      text: "Pune",
    },
  ];
  const linksData = [
    {
      icon: "",
      text: "Download App",
      resposiveStatus: "max-sm:hidden",
    },
    {
      icon: "",
      text: "Save",
      resposiveStatus: "max-sm:hidden",
    },
    {
      icon: "",
      text: "News",
      resposiveStatus: "max-sm:hidden",
    },
    {
      icon: "",
      text: "List Property",
    },
  ];
  
  const realState = [
    {
      name: "delhi",
      link: "",
    },
    {
      name: "goa",
      link: "",
    },
    {
      name: "Aurangabad",
      link: "",
    },
    {
      name: "Bijapur",
      link: "",
    },
    {
      name: "Bilaspur",
      link: "",
    },
    {
      name: "hamirpur",
      link: "",
    },
    {
      name: "Hyderabad",
      link: "",
    },
    {
      name: "Pratapgarh",
      link: "",
    },
    {
      name: "delhi",
      link: "",
    },
    {
      name: "Bijapur",
      link: "",
    },
    {
      name: "Bilaspur",
      link: "",
    },
    {
      name: "hamirpur",
      link: "",
    },
    {
      name: "Hyderabad",
      link: "",
    },
    {
      name: "Pratapgarh",
      link: "",
    },
    {
      name: "delhi",
      link: "",
    },
  ];
  const cityName = [
    {
      name: "delhi",
      link: "",
    },
    {
      name: "goa",
      link: "",
    },
    {
      name: "Aurangabad",
      link: "",
    },
    {
      name: "Bijapur",
      link: "",
    },
    {
      name: "Bilaspur",
      link: "",
    },
    {
      name: "hamirpur",
      link: "",
    },
    {
      name: "Hyderabad",
      link: "",
    },
    {
      name: "Pratapgarh",
      link: "",
    },
    {
      name: "delhi",
      link: "",
    },
    {
      name: "Bijapur",
      link: "",
    },
    {
      name: "Bilaspur",
      link: "",
    },
    {
      name: "hamirpur",
      link: "",
    },
    {
      name: "Hyderabad",
      link: "",
    },
    {
      name: "Pratapgarh",
      link: "",
    },
    {
      name: "delhi",
      link: "",
    },
  ];

  const edgeData = [
    {
      imgScr:
        "https://c.housingcdn.com/demand/s/client/common/assets/payRent.f3e3e7ad.svg",
      imgText: "Pay Load",
    },
    {
      imgScr:
        "https://c.housingcdn.com/demand/s/client/common/assets/personalLoan.6cd22b06.svg",
      imgText: "Personal Loans",
    },
    {
      imgScr:
        "https://c.housingcdn.com/demand/s/client/common/assets/lineOfCredit.1bb2549f.svg",
      imgText: "Line of Credit",
    },
    {
      imgScr:
        "https://c.housingcdn.com/demand/s/client/common/assets/insurance.07df827c.svg      ",
      imgText: "Housing Protect",
    },
    {
      imgScr:
        "https://c.housingcdn.com/demand/s/client/common/assets/packersMovers.d92d7762.svg",
      imgText: "Packers & Movers",
    },
    {
      imgScr:
        "https://c.housingcdn.com/demand/s/client/common/assets/rentAgreement.b9a80d99.svg",
      imgText: "Rent Agreement	",
    },
    {
      imgScr:
        "	https://c.housingcdn.com/demand/s/client/common/assets/tenantPlans.f185eab1.svg",
      imgText: "Housing Premium",
    },
    {
      imgScr:
        "https://c.housingcdn.com/demand/s/client/common/assets/homeInteriors.ee40644f.svg",
      imgText: "Home Interiors",
    },
    {
      imgScr:
        "https://c.housingcdn.com/demand/s/client/common/assets/rentAgreement.b9a80d99.svg",
      imgText: "Rent Agreement	",
    },
    {
      imgScr:
        "	https://c.housingcdn.com/demand/s/client/common/assets/tenantPlans.f185eab1.svg",
      imgText: "Housing Premium",
    },
    {
      imgScr:
        "https://c.housingcdn.com/demand/s/client/common/assets/homeInteriors.ee40644f.svg",
      imgText: "Home Interiors",
    },
  ];
  // buy, rent,
  const flatData = [
    {
      img_src:
        "https://housing-images.n7net.in/4f2250e8/f77e26a68008eb35eec2ecd909c9b5b7/v0/medium/vikrant_affordable_floors-uttam_nagar_new_delhi-delhi-vikrant_properties_and_builders.jpeg",
      flatName: "Vikrant Affordable Floors",
      desc1: "1, 2, 3 BHK Apartments",
      desc2: "Uttam Nagar, South West Delhi, New Delhi",
      price: "15 L - 50 L",
      key: "01",
    },
    {
      img_src:
        "https://housing-images.n7net.in/4f2250e8/91239cf3bf3b042a9f023ad74531a5a5/v0/medium/dlf_one_midtown-karampura-delhi-dlf.jpeg",
      flatName: "DLF One Midtown",
      desc1: "2, 3, 4 BHK Apartments",
      desc2: "Karampura,South West Delhi, New Delhi",
      price: "2.25 Cr - 8.32 Cr",
      key: "02",
    },
    {
      img_src:
        "	https://housing-images.n7net.in/4f2250e8/9af7bcf9c69d62f1e80f5e4608c8b8c4/v0/medium/godrej_south_estate-okhla_industrial_area-delhi-godrej_properties_ltd.jpeg",
      flatName: "Godrej South Estate",
      desc1: "1, 2, 2.5, 3, 4 BHK Apartments",
      desc2: "Okhla Industrial Area, South Delhi, New Delhi",
      price: "1.17 Cr - 7.27 Cr",
      key: "03",
    },
    {
      img_src:
        "https://housing-images.n7net.in/4f2250e8/87c2041e63241527bf8422ff6c5b395d/v0/medium/s_gambhir_premium_homes-uttam_nagar_new_delhi-delhi-s_gambhir_buildtech_private_limited.jpg",
      flatName: "S Gambhir Premium Homes",
      desc1: "2, 3 BHK Apartments",
      desc2: "Uttam Nagar, South West Delhi, New Delhi",
      price: "21.0 L - 58.5 L",
      key: "04",
    },
    {
      img_src:
        "https://housing-images.n7net.in/4f2250e8/f77e26a68008eb35eec2ecd909c9b5b7/v0/medium/vikrant_affordable_floors-uttam_nagar_new_delhi-delhi-vikrant_properties_and_builders.jpeg",
      flatName: "Vikrant Affordable Floors",
      desc1: "1, 2, 3 BHK Apartments",
      desc2: "Uttam Nagar, South West Delhi, New Delhi",
      price: "15 L - 50 L",
      key: "01",
    },
    {
      img_src:
        "https://housing-images.n7net.in/4f2250e8/91239cf3bf3b042a9f023ad74531a5a5/v0/medium/dlf_one_midtown-karampura-delhi-dlf.jpeg",
      flatName: "DLF One Midtown",
      desc1: "2, 3, 4 BHK Apartments",
      desc2: "Karampura, West Delhi, New Delhi",
      price: "2.25 Cr - 8.32 Cr",
      key: "02",
    },
    {
      img_src:
        "	https://housing-images.n7net.in/4f2250e8/9af7bcf9c69d62f1e80f5e4608c8b8c4/v0/medium/godrej_south_estate-okhla_industrial_area-delhi-godrej_properties_ltd.jpeg",
      flatName: "Godrej South Estate",
      desc1: "1, 2, 2.5, 3, 4 BHK Apartments",
      desc2: "Okhla Industrial Area, South Delhi, New Delhi",
      price: "1.17 Cr - 7.27 Cr",
      key: "03",
    },
    {
      img_src:
        "https://housing-images.n7net.in/4f2250e8/87c2041e63241527bf8422ff6c5b395d/v0/medium/s_gambhir_premium_homes-uttam_nagar_new_delhi-delhi-s_gambhir_buildtech_private_limited.jpg",
      flatName: "S Gambhir Premium Homes",
      desc1: "2, 3 BHK Apartments",
      desc2: "Uttam Nagar, South West Delhi, New Delhi",
      price: "21.0 L - 58.5 L",
      key: "04",
    },
    // {
    //   flatName:"",
    //   desc1:"",
    //   desc2:"",
    //   price:"",
    //   key:"01"
    // },
    // {
    //   flatName:"",
    //   desc1:"",
    //   desc2:"",
    //   price:"",
    //   key:"01"
    // },
  ];
  // buy, rent,
  const feastureCollection = [
    {
      imgScr:
        "https://housing-images.n7net.in/afe3f526/72c2a553a4868784bf918956539be27c/v2/medium.jpg",
      title: "Ready to Move-In",
      desc: "Enjoy higher degree of Freedom & Privacy",
      propertyNo: "365",
    },
    {
      imgScr:
        "https://housing-images.n7net.in/afe3f526/1264f1fbf64cb1d23dfaa3beb33ff0ef/v2/medium.jpg",
      title: "Ready to Move-In",
      desc: "Enjoy higher degree of Freedom & Privacy",
      propertyNo: "220",
    },
    {
      imgScr:
        "https://housing-images.n7net.in/afe3f526/5b76eee6ef7c5a2349b28c65c23f2571/v2/medium.jpg",
      title: "Townships",
      desc: "Comfortable homes available for immediate use",
      propertyNo: "90",
    },
    {
      imgScr:
        "https://housing-images.n7net.in/afe3f526/c9f344b193668337a8c838f4d73a3c6e/v4/medium.jpg",
      title: "Studio",
      desc: "Redefining community living",
      propertyNo: "565",
    },
    {
      imgScr:
        "https://housing-images.n7net.in/afe3f526/fd518ec83e674ff6924733faba8d965c/v2/medium.png",
      title: "Luxury",
      desc: "Efficient homes for people on-the-go",
      propertyNo: "49",
    },
    {
      imgScr:
        "https://housing-images.n7net.in/afe3f526/7114b67ecce8e089fa750d76372d4636/v3/medium.jpg",
      title: "Affordable Homes",
      desc: "Premium housing for the lifestyle-conscious",
      propertyNo: "22",
    },
    {
      imgScr:
        "https://housing-images.n7net.in/afe3f526/93244c5252f447a63d362a68cbb3a325/v2/medium.jpg",
      title: "Builder Floor",
      desc: "Pocket-friendly homes",
      propertyNo: "03",
    },
    {
      imgScr:
        "https://housing-images.n7net.in/afe3f526/93244c5252f447a63d362a68cbb3a325/v2/medium.jpg",
      title: "Builder Floor",
      desc: "Enjoy independent dwelling units at affordable prices",
      propertyNo: "70",
    },
  ];

  const RecommendedSellers = [
    [
      {
        imgScr:
          "https://housing-images.n7net.in/fb15c03b/f0af12ada56a4fbecbc9a78ccd4dd68b/v0/thumb.jpg",
        title: "  jindal real estates",
        tag1: " Karol Bagh",
        tag2: "DLF Phase 2 ",
        exp: "46 yr  ",
        proptNo: " 35 ",
        label: " HOUSING EXPERT PRO ",
        pro: true,
      },

      {
        imgScr:
          "https://housing-images.n7net.in/fb15c03b/bdb7ffd7580a78bd79be72f3a1e51122/v0/thumb.jpg",
        title: "Sharma Property  ",
        tag1: "Govindpun ",
        tag2: " ",
        exp: " 15 yr ",
        proptNo: " 40 ",
        label: "HOUSING EXPERT",
        pro: false,
      },
    ],

    [
      {
        imgScr:
          "https://housing-images.n7net.in/fb15c03b/fcd76f6d584e8018f8d912f11a9d20ec/v0/thumb.jpeg",
        title: "  SARASWATI PROL",
        tag1: " Sector 24 Rohini",
        tag2: "Sector 23 Ronini ",
        exp: " 37 yr ",
        proptNo: "51  ",
        label: "HOUSING EXPERT PRO",
        pro: true,
      },
      {
        imgScr:
          "https://housing-images.n7net.in/fb15c03b/e0237dc471b1326ca2630909f4bca6ed/v0/thumb.jpg",
        title: " Chittaranjan Park Greater Kailash ",
        tag1: "Govindpun ",
        tag2: " ",
        exp: " 22 yr ",
        proptNo: " 38 ",
        label: "HOUSING EXPERT",
        pro: false,
      },
    ],

    [
      {
        imgScr:
          "https://housing-images.n7net.in/fb15c03b/221cfc3d527119d3694a630e0a7f755a/v0/thumb.jpg",
        title: " GLOBAL PROPER ",
        tag1: " Sectar To Rahini Sector",
        tag2: "17 Ranini ",
        exp: "  19 yr ",
        proptNo: "94  ",
        label: "HOUSING EXPERT PRO",
        pro: true,
      },
      {
        imgScr:
          "https://housing-images.n7net.in/fb15c03b/28d0bdb5c2d47317b0e579e7e3624802/v0/thumb.jpg",
        title: "  Yogesh",
        tag1: " Vasant Kunj",
        tag2: "Rangpurt ",
        exp: "13 yr  ",
        proptNo: " 37 ",
        label: "HOUSING EXPERT",
        pro: false,
      },
    ],

    [
      {
        imgScr:
          "https://housing-images.n7net.in/fb15c03b/4226e7c9232959713e29101b8db5ed60/v0/thumb.jpg",
        title: "Gaurav Bansal ",
        tag1: "uttam Nagar ",
        tag2: " Matiala",
        exp: " 0.5 yr  ",
        proptNo: "50 ",
        label: " Housing Expert pro",
        pro: true,
      },
      {
        imgScr:
          "https://housing-images.n7net.in/fb15c03b/f98dc3f2ded553d647ed223989a2ce73/v0/thumb.jpg",
        title: "Piyush Homes ",
        tag1: " Adda nawali",
        tag2: " Etawah",
        exp: "8 yr  ",
        proptNo: "30 ",
        label: " Housing Expert",
        pro: false,
      },
    ],

    [
      {
        imgScr:
          "https://housing-images.n7net.in/fb15c03b/7d4f4d7929386488d3bda1151b4d7084/v0/thumb.jpg",
        title: "Namaste Real Estate  ",
        tag1: "Vikaspuri ",
        tag2: "tilak Nagar ",
        exp: " 9 yr  ",
        proptNo: " 35",
        label: "Housing Expert Pro ",
        pro: true,
      },
      {
        imgScr:
          "https://housing-images.n7net.in/fb15c03b/05947a2c754a2af64e1ba88fa78285d6/v0/thumb.jpg ",
        title: "Seawt Home  ",
        tag1: "Greater Noida  ",
        tag2: "sirji Park ",
        exp: "5 yr  ",
        proptNo: "40 ",
        label: "Housing Expert ",
        pro: false,
      },
    ],

    [
      {
        imgScr:
          "https://housing-images.n7net.in/fb15c03b/5bfd7bacc1960b7301c2f12ad23a9307/v0/thumb.jpg",
        title: "Dalveer Kushawaha  ",
        tag1: " Bakeber",
        tag2: " Lakhna",
        exp: " 20 yr  ",
        proptNo: " 40 ",
        label: " Housing Expert Pro ",
        pro: true,
      },
      {
        imgScr:
          "https://housing-images.n7net.in/fb15c03b/6200edd270e3d835a28af10345a277da/v0/thumb.png",
        title: " Gungun Homes  ",
        tag1: " Sultanpur",
        tag2: "Chhatarpur  ",
        exp: " 14 yr  ",
        proptNo: " 12 ",
        label: "Housing Expert ",
        pro: false,
      },
    ],

    [
      {
        imgScr:
          "https://housing-images.n7net.in/fb15c03b/6200edd270e3d835a28af10345a277da/v0/thumb.png",
        title: "DK Property  ",
        tag1: " Rajpur",
        tag2: " Chattarpur",
        exp: " 8 yr  ",
        proptNo: " 47 ",
        label: " Housing Expert Pro ",
        pro: true,
      },
      {
        imgScr:
          "https://housing-images.n7net.in/fb15c03b/fa7c7c0aade1f2ce542966f581d191f6/v0/thumb.jpg",
        title: "Shrivastav Associte ",
        tag1: " Sector 16",
        tag2: " Sector 11 Rohini",
        exp: "18 yr  ",
        proptNo: " 36 ",
        label: " Housing Expert ",
        pro: false,
      },
    ],

    [
      {
        imgScr:
          "https://housing-images.n7net.in/fb15c03b/8abfe8892a6d7a57ea57ab1a50825ee0/v0/thumb.jpg",
        title: "SK Property  ",
        tag1: " shampur",
        tag2: " shatarpur",
        exp: " 9 yr ",
        proptNo: " 22 ",
        label: " Housing Expert Pro ",
        pro: true,
      },
      {
        imgScr:
          "https://housing-images.n7net.in/fb15c03b/aee5bcb30e1c5f772dc4647ee6ea60f6/v0/thumb.jpg",
        title: "Kushwaha Associte ",
        tag1: " Sector 16",
        tag2: " Sector 11 Rohini",
        exp: "18 yr ",
        proptNo: " 36 ",
        label: " Housing Expert",
        pro: false,
      },
    ],

    [
      {
        imgScr:
          "https://housing-images.n7net.in/fb15c03b/03a25e243c8c55f32a3e81777b928871/v0/thumb.jpg",
        title: "  SARASWATI PROL",
        tag1: " Sector 24 Rohini",
        tag2: "Sector 23 Ronini ",
        exp: " 37 years ",
        proptNo: "51  ",
        label: "HOUSING EXPERT PRO",
        pro: true,
      },
      {
        imgScr:
          "https://housing-images.n7net.in/fb15c03b/bdb7ffd7580a78bd79be72f3a1e51122/v0/thumb.jpg",
        title: " Chittaranjan Park Greater Kailash ",
        tag1: " Sector 24 Rohini ",
        tag2: " ",
        exp: " 22 yr ",
        proptNo: " 38 ",
        label: "HOUSING EXPERT",
        pro: false,
      },
    ],

    [
      {
        imgScr:
          "https://housing-images.n7net.in/fb15c03b/4b8e527e0f52559fee600fb869c22e91/v0/thumb.jpg",
        title: " GLOBAL PROPER ",
        tag1: " Sectar To Rahini Sector",
        tag2: "17 Ranini ",
        exp: " 94 ",
        proptNo: " 19 years ",
        label: "HOUSING EXPERT PRO",
        pro: true,
      },
      {
        imgScr:
          "https://housing-images.n7net.in/fb15c03b/2007a115b263e65b1497674f2bc8374c/v0/thumb.png",
        title: "  Yogesh",
        tag1: " Vasant Kunj",
        tag2: "Rangpurt ",
        exp: "13 yr  ",
        proptNo: " 37 ",
        label: "HOUSING EXPERT",
        pro: false,
      },
    ],
  ];
  // addedin : buy, rent,
  const articalData = [
    {
      imgScr:
        "https://housing.com/news/wp-content/uploads/2024/02/Delhi-Metro-Phase-5-Latest-Updates-f.jpg",
      title: "Facts about Max Hospital Shalimar Bagh, Delhi ",
      desc: "The super specialty hospital has 300 beds and several departments.",
      tag1: "Priya Banerjee",
      tag2: "Feb 2024",
    },

    {
      imgScr:
        "https://housing.com/news/wp-content/uploads/2024/02/Jaipur-Golden-Hospital-Delhi-Location-facilities-medical-services-f.webp",
      title: "Delhi Metro Phase 5: Latest Updates",
      desc: " The Delhi Metro Phase 5 is currently on hold.",
      tag1: "Harini Balasubramanian",
      tag2: "Feb 2024",
    },

    {
      imgScr:
        "https://housing.com/news/wp-content/uploads/2024/02/Delhi-CM-approves-signing-of-MoU-for-first-three-corridors-of-Metro-Phase-4-f.webp",
      title:
        "Delhi CM approves signing of MoU for first three corridors of Metro Phase-4",
      desc: "This MoU aims to accelerate the progress of work on the first three corridors under Delhi Metro Phase-4.",
      tag1: "Dhwani Meharchandani",
      tag2: "Feb 2024",
    },

    {
      imgScr:
        "https://housing.com/news/wp-content/uploads/2024/02/Delhi-Metro-Phase-5-Latest-Updates-f.jpg",
      title: "All about Jaipur Golden Hospital, Delhi",
      desc: "Opened in 1949, Jaipur Golden Hospital is located in Delhi;s Rohini.",
      tag1: "Priya Banerjee",
      tag2: "Feb 2024",
    },

    {
      imgScr:
        "https://assets-news.housing.com/news/wp-content/uploads/2021/03/10190913/All-about-the-National-Capital-Region-Planning-Board-NCRPB-FB-1200x700-compressed.jpg",
      title: "All about Jaipur Golden Hospital, Delhi",
      desc: "Opened in 1949, Jaipur Golden Hospital is located in Delhi;s Rohini.",
      tag1: "Priya Banerjee",
      tag2: "Feb 2024",
    },

    {
      imgScr:
        "https://housing.com/news/wp-content/uploads/2023/01/Dwarka-Expressway-route-construction-details-and-status.jpg",
      title:
        "Delhi CM approves signing of MoU for first three corridors of Metro Phase-4",
      desc: "This MoU aims to accelerate the progress of work on the first three corridors under Delhi Metro Phase-4.",
      tag1: "Dhwani Meharchandani",
      tag2: "Feb 2024",
    },
  ];

// BuyPageData
  const BuysData={
    topData:{
bannerImg:"back_img",
    bannerText:"Properties to buy in Delhi",
    },
    
    buyArticalData : [
      {
        imgScr:
          "https://housing.com/news/wp-content/uploads/2024/02/Delhi-Metro-Phase-5-Latest-Updates-f.jpg",
        title: "Facts about Max Hospital Shalimar Bagh, Delhi ",
        desc: "The super specialty hospital has 300 beds and several departments.",
        tag1: "Priya Banerjee",
        tag2: "Feb 2024",
      },
  
      {
        imgScr:
          "https://housing.com/news/wp-content/uploads/2024/02/Jaipur-Golden-Hospital-Delhi-Location-facilities-medical-services-f.webp",
        title: "Delhi Metro Phase 5: Latest Updates",
        desc: " The Delhi Metro Phase 5 is currently on hold.",
        tag1: "Harini Balasubramanian",
        tag2: "Feb 2024",
      },
  
      {
        imgScr:
          "https://housing.com/news/wp-content/uploads/2024/02/Delhi-CM-approves-signing-of-MoU-for-first-three-corridors-of-Metro-Phase-4-f.webp",
        title:
          "Delhi CM approves signing of MoU for first three corridors of Metro Phase-4",
        desc: "This MoU aims to accelerate the progress of work on the first three corridors under Delhi Metro Phase-4.",
        tag1: "Dhwani Meharchandani",
        tag2: "Feb 2024",
      },
  
      {
        imgScr:
          "https://housing.com/news/wp-content/uploads/2024/02/Delhi-Metro-Phase-5-Latest-Updates-f.jpg",
        title: "All about Jaipur Golden Hospital, Delhi",
        desc: "Opened in 1949, Jaipur Golden Hospital is located in Delhi;s Rohini.",
        tag1: "Priya Banerjee",
        tag2: "Feb 2024",
      },
  
      {
        imgScr:
          "https://assets-news.housing.com/news/wp-content/uploads/2021/03/10190913/All-about-the-National-Capital-Region-Planning-Board-NCRPB-FB-1200x700-compressed.jpg",
        title: "All about Jaipur Golden Hospital, Delhi",
        desc: "Opened in 1949, Jaipur Golden Hospital is located in Delhi;s Rohini.",
        tag1: "Priya Banerjee",
        tag2: "Feb 2024",
      },
  
      {
        imgScr:
          "https://housing.com/news/wp-content/uploads/2023/01/Dwarka-Expressway-route-construction-details-and-status.jpg",
        title:
          "Delhi CM approves signing of MoU for first three corridors of Metro Phase-4",
        desc: "This MoU aims to accelerate the progress of work on the first three corridors under Delhi Metro Phase-4.",
        tag1: "Dhwani Meharchandani",
        tag2: "Feb 2024",
      },
    ],
    buyFeastureCollection : [
      {
        imgScr:
          "https://housing-images.n7net.in/afe3f526/72c2a553a4868784bf918956539be27c/v2/medium.jpg",
        title: "Ready to Move-In",
        desc: "Enjoy higher degree of Freedom & Privacy",
        propertyNo: "365",
      },
      {
        imgScr:
          "https://housing-images.n7net.in/afe3f526/1264f1fbf64cb1d23dfaa3beb33ff0ef/v2/medium.jpg",
        title: "Ready to Move-In",
        desc: "Enjoy higher degree of Freedom & Privacy",
        propertyNo: "220",
      },
      {
        imgScr:
          "https://housing-images.n7net.in/afe3f526/5b76eee6ef7c5a2349b28c65c23f2571/v2/medium.jpg",
        title: "Townships",
        desc: "Comfortable homes available for immediate use",
        propertyNo: "90",
      },
      {
        imgScr:
          "https://housing-images.n7net.in/afe3f526/c9f344b193668337a8c838f4d73a3c6e/v4/medium.jpg",
        title: "Studio",
        desc: "Redefining community living",
        propertyNo: "565",
      },
      {
        imgScr:
          "https://housing-images.n7net.in/afe3f526/fd518ec83e674ff6924733faba8d965c/v2/medium.png",
        title: "Luxury",
        desc: "Efficient homes for people on-the-go",
        propertyNo: "49",
      },
      {
        imgScr:
          "https://housing-images.n7net.in/afe3f526/7114b67ecce8e089fa750d76372d4636/v3/medium.jpg",
        title: "Affordable Homes",
        desc: "Premium housing for the lifestyle-conscious",
        propertyNo: "22",
      },
      {
        imgScr:
          "https://housing-images.n7net.in/afe3f526/93244c5252f447a63d362a68cbb3a325/v2/medium.jpg",
        title: "Builder Floor",
        desc: "Pocket-friendly homes",
        propertyNo: "03",
      },
      {
        imgScr:
          "https://housing-images.n7net.in/afe3f526/93244c5252f447a63d362a68cbb3a325/v2/medium.jpg",
        title: "Builder Floor",
        desc: "Enjoy independent dwelling units at affordable prices",
        propertyNo: "70",
      },
    ],
    buyFlatData : [
      {
        img_src:
          "https://housing-images.n7net.in/4f2250e8/f77e26a68008eb35eec2ecd909c9b5b7/v0/medium/vikrant_affordable_floors-uttam_nagar_new_delhi-delhi-vikrant_properties_and_builders.jpeg",
        flatName: "Vikrant Affordable Floors",
        desc1: "1, 2, 3 BHK Apartments",
        desc2: "Uttam Nagar, South West Delhi, New Delhi",
        price: "15 L - 50 L",
        key: "01",
      },
      {
        img_src:
          "https://housing-images.n7net.in/4f2250e8/91239cf3bf3b042a9f023ad74531a5a5/v0/medium/dlf_one_midtown-karampura-delhi-dlf.jpeg",
        flatName: "DLF One Midtown",
        desc1: "2, 3, 4 BHK Apartments",
        desc2: "Karampura,South West Delhi, New Delhi",
        price: "2.25 Cr - 8.32 Cr",
        key: "02",
      },
      {
        img_src:
          "	https://housing-images.n7net.in/4f2250e8/9af7bcf9c69d62f1e80f5e4608c8b8c4/v0/medium/godrej_south_estate-okhla_industrial_area-delhi-godrej_properties_ltd.jpeg",
        flatName: "Godrej South Estate",
        desc1: "1, 2, 2.5, 3, 4 BHK Apartments",
        desc2: "Okhla Industrial Area, South Delhi, New Delhi",
        price: "1.17 Cr - 7.27 Cr",
        key: "03",
      },
      {
        img_src:
          "https://housing-images.n7net.in/4f2250e8/87c2041e63241527bf8422ff6c5b395d/v0/medium/s_gambhir_premium_homes-uttam_nagar_new_delhi-delhi-s_gambhir_buildtech_private_limited.jpg",
        flatName: "S Gambhir Premium Homes",
        desc1: "2, 3 BHK Apartments",
        desc2: "Uttam Nagar, South West Delhi, New Delhi",
        price: "21.0 L - 58.5 L",
        key: "04",
      },
      {
        img_src:
          "https://housing-images.n7net.in/4f2250e8/f77e26a68008eb35eec2ecd909c9b5b7/v0/medium/vikrant_affordable_floors-uttam_nagar_new_delhi-delhi-vikrant_properties_and_builders.jpeg",
        flatName: "Vikrant Affordable Floors",
        desc1: "1, 2, 3 BHK Apartments",
        desc2: "Uttam Nagar, South West Delhi, New Delhi",
        price: "15 L - 50 L",
        key: "01",
      },
      {
        img_src:
          "https://housing-images.n7net.in/4f2250e8/91239cf3bf3b042a9f023ad74531a5a5/v0/medium/dlf_one_midtown-karampura-delhi-dlf.jpeg",
        flatName: "DLF One Midtown",
        desc1: "2, 3, 4 BHK Apartments",
        desc2: "Karampura, West Delhi, New Delhi",
        price: "2.25 Cr - 8.32 Cr",
        key: "02",
      },
      {
        img_src:
          "	https://housing-images.n7net.in/4f2250e8/9af7bcf9c69d62f1e80f5e4608c8b8c4/v0/medium/godrej_south_estate-okhla_industrial_area-delhi-godrej_properties_ltd.jpeg",
        flatName: "Godrej South Estate",
        desc1: "1, 2, 2.5, 3, 4 BHK Apartments",
        desc2: "Okhla Industrial Area, South Delhi, New Delhi",
        price: "1.17 Cr - 7.27 Cr",
        key: "03",
      },
      {
        img_src:
          "https://housing-images.n7net.in/4f2250e8/87c2041e63241527bf8422ff6c5b395d/v0/medium/s_gambhir_premium_homes-uttam_nagar_new_delhi-delhi-s_gambhir_buildtech_private_limited.jpg",
        flatName: "S Gambhir Premium Homes",
        desc1: "2, 3 BHK Apartments",
        desc2: "Uttam Nagar, South West Delhi, New Delhi",
        price: "21.0 L - 58.5 L",
        key: "04",
      },
      // {
      //   flatName:"",
      //   desc1:"",
      //   desc2:"",
      //   price:"",
      //   key:"01"
      // },
      // {
      //   flatName:"",
      //   desc1:"",
      //   desc2:"",
      //   price:"",
      //   key:"01"
      // },
    ]
  }

  const rentPageData = {
    topData:{
      bannerImg:"rent_back_img",
      bannerText:"Properties for rent in Delhi",

    },

    rentArticles:[
      {
        imgScr:
          "https://housing.com/news/wp-content/uploads/2023/01/Dwarka-Expressway-route-construction-details-and-status.jpg",
        title: "Facts about Max Hospital Shalimar Bagh, Delhi ",
        desc: "The super specialty hospital has 300 beds and several departments.",
        tag1: "Priya Banerjee",
        tag2: "Feb 2024",
      },
  
      {
        imgScr:
          "https://housing.com/news/wp-content/uploads/2024/03/gandhi-hospital-f.jpg",
        title: "Delhi Metro Phase 5: Latest Updates",
        desc: " The Delhi Metro Phase 5 is currently on hold.",
        tag1: "Harini Balasubramanian",
        tag2: "Feb 2024",
      },
  
      {
        imgScr:
          "https://housing.com/news/wp-content/uploads/2022/12/shutterstock_1211171971-1200x700-compressed.jpg",
        title:
          "Delhi CM approves signing of MoU for first three corridors of Metro Phase-4",
        desc: "This MoU aims to accelerate the progress of work on the first three corridors under Delhi Metro Phase-4.",
        tag1: "Dhwani Meharchandani",
        tag2: "Feb 2024",
      },
  
      {
        imgScr:
          "https://housing.com/news/wp-content/uploads/2024/03/gtb-hospital-f.jpg",
        title: "All about Jaipur Golden Hospital, Delhi",
        desc: "Opened in 1949, Jaipur Golden Hospital is located in Delhi;s Rohini.",
        tag1: "Priya Banerjee",
        tag2: "Feb 2024",
      },
  
      {
        imgScr:
          "https://housing.com/news/wp-content/uploads/2024/03/mata-chanan-devi-hospital-f.jpg",
        title: "All about Jaipur Golden Hospital, Delhi",
        desc: "Opened in 1949, Jaipur Golden Hospital is located in Delhi;s Rohini.",
        tag1: "Priya Banerjee",
        tag2: "Feb 2024",
      },
  
      {
        imgScr:
        "https://assets-news.housing.com/news/wp-content/uploads/2020/10/27161415/All-you-need-to-know-about-Delhi-Ghaziabad-Meerut-RRTS-corridor-FB-1200x700-compressed.jpg",
        title:
          "Delhi CM approves signing of MoU for first three corridors of Metro Phase-4",
        desc: "This MoU aims to accelerate the progress of work on the first three corridors under Delhi Metro Phase-4.",
        tag1: "Dhwani Meharchandani",
        tag2: "Feb 2024",
      },
  
      {
        imgScr:
          "https://assets-news.housing.com/news/wp-content/uploads/2019/09/23065443/How-to-apply-for-DDA-housing-schemes-FB-1200x725-compressed.jpg",
        title: "All about Jaipur Golden Hospital, Delhi",
        desc: "Opened in 1949, Jaipur Golden Hospital is located in Delhi;s Rohini.",
        tag1: "Priya Banerjee",
        tag2: "Feb 2024",
      },
  
      {
        imgScr:
        "https://housing.com/news/wp-content/uploads/2024/01/How-to-pay-property-tax-online-in-Rajahmundry.jpg",
        title:
          "Delhi CM approves signing of MoU for first three corridors of Metro Phase-4",
        desc: "This MoU aims to accelerate the progress of work on the first three corridors under Delhi Metro Phase-4.",
        tag1: "Dhwani Meharchandani",
        tag2: "Feb 2024",
      },
    ],
    rentFeastureCollection :[
      {
        imgScr:
          "https://housing-images.n7net.in/afe3f526/aef6ffe6f862480a97155f53532b996a/v2/medium.jpg",
        title: "For Bachelors",
        desc: "Enjoy higher degree of Freedom & Privacy",
        propertyNo: "365",
      },
      {
        imgScr:
          "https://housing-images.n7net.in/afe3f526/9a2a8e761215148697f680012e196451/v2/medium.jpg",
        title: "Great Commute",
        desc: "Enjoy higher degree of Freedom & Privacy",
        propertyNo: "220",
      },
      {
        imgScr:
          "https://housing-images.n7net.in/afe3f526/544ed718160046b65a2ff0b7e9ae0944/v2/medium.jpg",
        title: "Owner Flats",
        desc: "Comfortable homes available for immediate use",
        propertyNo: "90",
      },
      // {
      //   imgScr:
      //     "",
      //   title: "Studio",
      //   desc: "Redefining community living",
      //   propertyNo: "565",
      // },
      // {
      //   imgScr:
      //     "",
      //   title: "Luxury",
      //   desc: "Efficient homes for people on-the-go",
      //   propertyNo: "49",
      // },
      // {
      //   imgScr:
      //     "",
      //   title: "Affordable Homes",
      //   desc: "Premium housing for the lifestyle-conscious",
      //   propertyNo: "22",
      // },
      // {
      //   imgScr:
      //     "",
      //   title: "Builder Floor",
      //   desc: "Pocket-friendly homes",
      //   propertyNo: "03",
      // },
      // {
      //   imgScr:
      //     "",
      //   title: "Builder Floor",
      //   desc: "Enjoy independent dwelling units at affordable prices",
      //   propertyNo: "70",
      // },
    ],
    rentFlatsData : [
      {
        img_src:
          "https://housing-images.n7net.in/afe3f526/aef6ffe6f862480a97155f53532b996a/v2/medium.jpg",
        flatName: "  1 BHK Independent Builder Floor",
        desc1: "1, 2, 3 BHK Apartments",
        desc2: "Uttam Nagar, South West Delhi, New Delhi",
        price: "9500",
        key: "01",
      },
      {
        img_src:
          "https://housing-images.n7net.in/01c16c28/e9aa738742ce8a44ad098c5a9c0f3624/v0/medium/1_bhk_independent_builder_floor-for-rent-shastri_nagar_new_delhi-New+Delhi-living_room.jpg",
        flatName: "DLF One Midtown",
        desc1: "2, 3, 4 BHK Apartments",
        desc2: "Karampura,South West Delhi, New Delhi",
        price: "9500",
        key: "02",
      },
      {
        img_src:
          "https://housing-images.n7net.in/01c16c28/69e3216cb8dd4e3eaad3e23183d2898d/v0/medium/1_bhk_independent_house-for-rent-tilak_nagar-New+Delhi-bedroom.jpg	",
        flatName: "Godrej South Estate",
        desc1: "1, 2, 2.5, 3, 4 BHK Apartments",
        desc2: "Okhla Industrial Area, South Delhi, New Delhi",
        price: "5500",
        key: "03",
      },
      {
        img_src:
          "https://housing-images.n7net.in/01c16c28/0ead2eb907d96e58bde3491ac1374dcd/v0/medium/1_bhk_independent_builder_floor-for-rent-preet_vihar-New+Delhi-bedroom.jpg	",
        flatName: "S Gambhir Premium Homes",
        desc1: "2, 3 BHK Apartments",
        desc2: "Uttam Nagar, South West Delhi, New Delhi",
        price: "9000",
        key: "04",
      },
      {
        img_src:
          "https://housing-images.n7net.in/01c16c28/dcbd78e908ae0108a9b6b8055d5239b9/v0/medium/1_rk_independent_builder_floor-for-rent-mukherjee_nagar_new_delhi-New+Delhi-hall.jpg	",
        flatName: "Vikrant Affordable Floors",
        desc1: "1, 2, 3 BHK Apartments",
        desc2: "Uttam Nagar, South West Delhi, New Delhi",
        price: "5500",
        key: "01",
      },
      {
        img_src:
          "https://housing-images.n7net.in/01c16c28/a69d5bc00ed3415c77c5859616c4fc7f/v0/medium/1_rk_independent_builder_floor-for-rent-govindpuri-New+Delhi-bedroom.jpg	",
        flatName: "DLF One Midtown",
        desc1: "2, 3, 4 BHK Apartments",
        desc2: "Karampura, West Delhi, New Delhi",
        price: "6900",
        key: "02",
      },
      {
        img_src:
          "	https://housing-images.n7net.in/01c16c28/d2de1f130753b902aca44820207881ec/v0/medium/1_bhk_independent_builder_floor-for-rent-lajpat_nagar-New+Delhi-hall.jpg",
        flatName: "Godrej South Estate",
        desc1: "1, 2, 2.5, 3, 4 BHK Apartments",
        desc2: "Okhla Industrial Area, South Delhi, New Delhi",
        price: "13000",
        key: "03",
      },
      {
        img_src:
          "	https://housing-images.n7net.in/01c16c28/69e3216cb8dd4e3eaad3e23183d2898d/v0/medium/1_bhk_independent_house-for-rent-tilak_nagar-New+Delhi-bedroom.jpg",
        flatName: "S Gambhir Premium Homes",
        desc1: "2, 3 BHK Apartments",
        desc2: "Uttam Nagar, South West Delhi, New Delhi",
        price: "1899",
        key: "04",
      },
    
    ]
    ,topLinks:{
      title:"people Also Search For",
      links:[
        {
          linkDes:"Rent Furnished Flat in New Delhi ",
          LinKActoin:"https://housing.com/rent/furnished-flats-for-rent-in-new-delhi-india-G1P6xfqdsey6cc3d95h"
        },
        {
          linkDes:"Rent House in New Delhi Without Brokerage",
          LinKActoin:""
        },
        {
          linkDes:"1 RK Apartments for rent without brokerage in New Delhi",
          LinKActoin:""
        },
        {
          linkDes:"Single Rooms for Rent in New Delhi",
          LinKActoin:""
        },
        {
          linkDes:"Flats for Rent in New Delhi Without Brokerage",
          LinKActoin:""
        },
        {
          linkDes:"Villa for Rent in New Delhi",
          LinKActoin:""
        },
        {
          linkDes:" Rent Builderfloor in New Delhi",
          LinKActoin:""
        },
        {
          linkDes:"Rent Builderfloor in New Delhi",
          LinKActoin:""
        },
        {
          linkDes:"Rent Unfurnished Flat in New Delhi",
          LinKActoin:""
        }, {
          linkDes:"Rent Semi Furnished Flat in New Delhi",
          LinKActoin:""
        }, {
          linkDes:"Rent Furnished Flat in New Delhi",
          LinKActoin:""
        }, 
      ]
    },
   }


  // Commercial data

  const CommercialData={
    topData:{
      bannerImg:"commercial_back_img",
      bannerText:"Commercial Real Estate in Delhi",
    },
    commercialArticles:[
      {

        imgScr:
          "https://housing.com/news/wp-content/uploads/2023/01/Dwarka-Expressway-route-construction-details-and-status.jpg",
        title: "Facts about Max Hospital Shalimar Bagh, Delhi ",
        desc: "The super specialty hospital has 300 beds and several departments.",
        tag1: "Priya Banerjee",
        tag2: "Feb 2024",
      },
  
      {
        imgScr:
          "https://housing.com/news/wp-content/uploads/2024/03/gandhi-hospital-f.jpg",
        title: "Delhi Metro Phase 5: Latest Updates",
        desc: " The Delhi Metro Phase 5 is currently on hold.",
        tag1: "Harini Balasubramanian",
        tag2: "Feb 2024",
      },
  
      {
        imgScr:
          "https://housing.com/news/wp-content/uploads/2022/12/shutterstock_1211171971-1200x700-compressed.jpg",
        title:
          "Delhi CM approves signing of MoU for first three corridors of Metro Phase-4",
        desc: "This MoU aims to accelerate the progress of work on the first three corridors under Delhi Metro Phase-4.",
        tag1: "Dhwani Meharchandani",
        tag2: "Feb 2024",
      },
  
      {
        imgScr:
          "https://housing.com/news/wp-content/uploads/2024/03/gtb-hospital-f.jpg",
        title: "All about Jaipur Golden Hospital, Delhi",
        desc: "Opened in 1949, Jaipur Golden Hospital is located in Delhi;s Rohini.",
        tag1: "Priya Banerjee",
        tag2: "Feb 2024",
      },
  
      {
        imgScr:
          "https://housing.com/news/wp-content/uploads/2024/03/mata-chanan-devi-hospital-f.jpg",
        title: "All about Jaipur Golden Hospital, Delhi",
        desc: "Opened in 1949, Jaipur Golden Hospital is located in Delhi;s Rohini.",
        tag1: "Priya Banerjee",
        tag2: "Feb 2024",
      },
  
      {
        imgScr:
        "https://assets-news.housing.com/news/wp-content/uploads/2020/10/27161415/All-you-need-to-know-about-Delhi-Ghaziabad-Meerut-RRTS-corridor-FB-1200x700-compressed.jpg",
        title:
          "Delhi CM approves signing of MoU for first three corridors of Metro Phase-4",
        desc: "This MoU aims to accelerate the progress of work on the first three corridors under Delhi Metro Phase-4.",
        tag1: "Dhwani Meharchandani",
        tag2: "Feb 2024",
      },
  
      {
        imgScr:
          "https://assets-news.housing.com/news/wp-content/uploads/2019/09/23065443/How-to-apply-for-DDA-housing-schemes-FB-1200x725-compressed.jpg",
        title: "All about Jaipur Golden Hospital, Delhi",
        desc: "Opened in 1949, Jaipur Golden Hospital is located in Delhi;s Rohini.",
        tag1: "Priya Banerjee",
        tag2: "Feb 2024",
      },
  
      {
        imgScr:
        "https://housing.com/news/wp-content/uploads/2024/01/How-to-pay-property-tax-online-in-Rajahmundry.jpg",
        title:
          "Delhi CM approves signing of MoU for first three corridors of Metro Phase-4",
        desc: "This MoU aims to accelerate the progress of work on the first three corridors under Delhi Metro Phase-4.",
        tag1: "Dhwani Meharchandani",
        tag2: "Feb 2024",
      },
    ],

    commercialForRent:{
      heading:"for Rent",
      cardData:[
      {
        img:"https://housing-images.n7net.in/354cef8f/04ca74e273f9d61dc95f82d78b9ea989/v0/medium.jpg",
        title:"Commercial Property",
        desc1:"by kheraestates21",
        tag1:"2500 sq.ft",
        desc2:"AK Market, Vikaspuri, New Delhi",
        priceTag:"1.3 Lacs",
      },

      {
        img:"https://housing-images.n7net.in/354cef8f/0853a2177fb442c6c22935f5d475b58b/v0/medium.jpg",
        title:" Ready to use Office Space",
        desc1:"by Sandeep Taak",
        tag1:"2000 sq.ft",
        desc2:"East Patel Nagar, Patel Nagar, New Delhi",
        priceTag:"1.6 Lac",
      },
      {
        img:"https://housing-images.n7net.in/354cef8f/05a31f33e25aad492bcaf2f098f43656/v0/medium.jpg",
        title:"Ready to use Office Space",
        desc1:"by Sangam Property",
        tag1:" 850 sq.ft",
        desc2:"Lajpat Nagar, New Delhi",
        priceTag:"70,000",

      },
     
    ]
  },
    commercialForSale:{
      heading:"forSale",
      cardData:[
      {
        img:"https://housing-images.n7net.in/354cef8f/21f509a069cff90403b1bd95f5bc03bd/v0/medium.jpg",
        title:"Warehouse",
        desc1:"by White Flower Developers",
        tag1:"1750 sq.ft |3.02% p.a.",
        desc2:"Naraina Industrial Area Phase 1, Naraina, New Delhi",
        priceTag:"2.5 Cr",

      },
      {
        img:"https://housing-images.n7net.in/354cef8f/38900bcb0ab588357effe5d223267ca0/v0/medium.jpg",
        title:"Bare shell Office Space",
        desc1:"by COMFORT HOMES",
        tag1:"800 sq.ft |3% p.a.",
        desc2:"Sector 2, Shanti Niketan, New Delhi",
        priceTag:"1.2 Cr",

      },
      {
        img:"https://c.housingcdn.com/demand/s/client/common/assets/property-fallback.3750fb00.png",
        title:"Commercial Property",
        desc1:"by Shri NeelKanth Estate",
        tag1:"880 sq.ft |10% p.a.",
        desc2:"Palam Extension, Sector 7 Dwarka, New Delhi",
        priceTag:"5.25 Cr",

      },
    ]
  },

  
  
  commercialExpert:[
    {
      img:"https://housing-images.n7net.in/fb15c03b/a106cc3677f85d4f892ffa09d6e2eeea/v0/thumb.jpg",
      title:"Properties Solutionz",
      label:true,
      desc1:"22",
      desc2:"28",
      tag1:"Sector 104",
      tag2:"Sector 12 Dwarka",

    },
    {
      img:"https://housing-images.n7net.in/fb15c03b/cbf9949623d2469b345e2436b8a05299/v0/thumb.jpg",
      title:"Anil Acharya",
      label:true,
      desc1:"24",
      desc2:"23",
      tag1:"Sector 14 Dwarka",
      tag2:" Mahavir EnclaveSector",

    },
    {
      img:"https://housing-images.n7net.in/fb15c03b/fcc9e86b71fa7e35112b561402879176/v0/thumb.png",
      title:"",
      label:true,
      desc1:"",
      desc2:"",
      tag1:"",
      tag2:"",

    },
    {
      img:"",
      title:"",
      label:true,
      desc1:"",
      desc2:"",
      tag1:"",
      tag2:"",

    },
    {
      img:"",
      title:"",
      label:true,
      desc1:"",
      desc2:"",
      tag1:"",
      tag2:"",

    },
    {
      img:"",
      title:"",
      label:true,
      desc1:"",
      desc2:"",
      tag1:"",
      tag2:"",

    },
  ]


  }

// pg-CoLiving
const CoLivingData={
  topData:{
    bannerImg:"co_living_back_img",
    bannerText:"PG/Co-Living in Delhi",

  },
  CoLivingArticles:[
    {
      imgScr:
        "https://housing.com/news/wp-content/uploads/2023/01/Dwarka-Expressway-route-construction-details-and-status.jpg",
      title: "Facts about Max Hospital Shalimar Bagh, Delhi ",
      desc: "The super specialty hospital has 300 beds and several departments.",
      tag1: "Priya Banerjee",
      tag2: "Feb 2024",
    },

    {
      imgScr:
        "https://housing.com/news/wp-content/uploads/2024/03/gandhi-hospital-f.jpg",
      title: "Delhi Metro Phase 5: Latest Updates",
      desc: " The Delhi Metro Phase 5 is currently on hold.",
      tag1: "Harini Balasubramanian",
      tag2: "Feb 2024",
    },

    {
      imgScr:
        "https://housing.com/news/wp-content/uploads/2022/12/shutterstock_1211171971-1200x700-compressed.jpg",
      title:
        "Delhi CM approves signing of MoU for first three corridors of Metro Phase-4",
      desc: "This MoU aims to accelerate the progress of work on the first three corridors under Delhi Metro Phase-4.",
      tag1: "Dhwani Meharchandani",
      tag2: "Feb 2024",
    },

    {
      imgScr:
        "https://housing.com/news/wp-content/uploads/2024/03/gtb-hospital-f.jpg",
      title: "All about Jaipur Golden Hospital, Delhi",
      desc: "Opened in 1949, Jaipur Golden Hospital is located in Delhi;s Rohini.",
      tag1: "Priya Banerjee",
      tag2: "Feb 2024",
    },

    {
      imgScr:
        "https://housing.com/news/wp-content/uploads/2024/03/mata-chanan-devi-hospital-f.jpg",
      title: "All about Jaipur Golden Hospital, Delhi",
      desc: "Opened in 1949, Jaipur Golden Hospital is located in Delhi;s Rohini.",
      tag1: "Priya Banerjee",
      tag2: "Feb 2024",
    },

    {
      imgScr:
      "https://assets-news.housing.com/news/wp-content/uploads/2020/10/27161415/All-you-need-to-know-about-Delhi-Ghaziabad-Meerut-RRTS-corridor-FB-1200x700-compressed.jpg",
      title:
        "Delhi CM approves signing of MoU for first three corridors of Metro Phase-4",
      desc: "This MoU aims to accelerate the progress of work on the first three corridors under Delhi Metro Phase-4.",
      tag1: "Dhwani Meharchandani",
      tag2: "Feb 2024",
    },

    {
      imgScr:
        "https://assets-news.housing.com/news/wp-content/uploads/2019/09/23065443/How-to-apply-for-DDA-housing-schemes-FB-1200x725-compressed.jpg",
      title: "All about Jaipur Golden Hospital, Delhi",
      desc: "Opened in 1949, Jaipur Golden Hospital is located in Delhi;s Rohini.",
      tag1: "Priya Banerjee",
      tag2: "Feb 2024",
    },

    {
      imgScr:
      "https://housing.com/news/wp-content/uploads/2024/01/How-to-pay-property-tax-online-in-Rajahmundry.jpg",
      title:
        "Delhi CM approves signing of MoU for first three corridors of Metro Phase-4",
      desc: "This MoU aims to accelerate the progress of work on the first three corridors under Delhi Metro Phase-4.",
      tag1: "Dhwani Meharchandani",
      tag2: "Feb 2024",
    },
  ],
}

  // PlotsPageData
  const PlotsData={
    topData:{
      bannerImg:"plotsback_img",
      bannerText:"Plots for sale in Delhi",
    },
    PlotsArticles:[
      {
        imgScr:
          "https://housing.com/news/wp-content/uploads/2023/01/Dwarka-Expressway-route-construction-details-and-status.jpg",
        title: "Facts about Max Hospital Shalimar Bagh, Delhi ",
        desc: "The super specialty hospital has 300 beds and several departments.",
        tag1: "Priya Banerjee",
        tag2: "Feb 2024",
      },
  
      {
        imgScr:
          "https://housing.com/news/wp-content/uploads/2024/03/gandhi-hospital-f.jpg",
        title: "Delhi Metro Phase 5: Latest Updates",
        desc: " The Delhi Metro Phase 5 is currently on hold.",
        tag1: "Harini Balasubramanian",
        tag2: "Feb 2024",
      },
  
      {
        imgScr:
          "https://housing.com/news/wp-content/uploads/2022/12/shutterstock_1211171971-1200x700-compressed.jpg",
        title:
          "Delhi CM approves signing of MoU for first three corridors of Metro Phase-4",
        desc: "This MoU aims to accelerate the progress of work on the first three corridors under Delhi Metro Phase-4.",
        tag1: "Dhwani Meharchandani",
        tag2: "Feb 2024",
      },
  
      {
        imgScr:
          "https://housing.com/news/wp-content/uploads/2024/03/gtb-hospital-f.jpg",
        title: "All about Jaipur Golden Hospital, Delhi",
        desc: "Opened in 1949, Jaipur Golden Hospital is located in Delhi;s Rohini.",
        tag1: "Priya Banerjee",
        tag2: "Feb 2024",
      },
  
      {
        imgScr:
          "https://housing.com/news/wp-content/uploads/2024/03/mata-chanan-devi-hospital-f.jpg",
        title: "All about Jaipur Golden Hospital, Delhi",
        desc: "Opened in 1949, Jaipur Golden Hospital is located in Delhi;s Rohini.",
        tag1: "Priya Banerjee",
        tag2: "Feb 2024",
      },
  
      {
        imgScr:
        "https://assets-news.housing.com/news/wp-content/uploads/2020/10/27161415/All-you-need-to-know-about-Delhi-Ghaziabad-Meerut-RRTS-corridor-FB-1200x700-compressed.jpg",
        title:
          "Delhi CM approves signing of MoU for first three corridors of Metro Phase-4",
        desc: "This MoU aims to accelerate the progress of work on the first three corridors under Delhi Metro Phase-4.",
        tag1: "Dhwani Meharchandani",
        tag2: "Feb 2024",
      },
  
      {
        imgScr:
          "https://assets-news.housing.com/news/wp-content/uploads/2019/09/23065443/How-to-apply-for-DDA-housing-schemes-FB-1200x725-compressed.jpg",
        title: "All about Jaipur Golden Hospital, Delhi",
        desc: "Opened in 1949, Jaipur Golden Hospital is located in Delhi;s Rohini.",
        tag1: "Priya Banerjee",
        tag2: "Feb 2024",
      },
  
      {
        imgScr:
        "https://housing.com/news/wp-content/uploads/2024/01/How-to-pay-property-tax-online-in-Rajahmundry.jpg",
        title:
          "Delhi CM approves signing of MoU for first three corridors of Metro Phase-4",
        desc: "This MoU aims to accelerate the progress of work on the first three corridors under Delhi Metro Phase-4.",
        tag1: "Dhwani Meharchandani",
        tag2: "Feb 2024",
      },
    ],

  }



export{
    footerData,
    ParterSite,
    explore,
    carOptions,
    screenHeight,
    screenWidht,
    laptopStatus,
    linksData,
    articalData,
    RecommendedSellers,
    feastureCollection,
    flatData ,
    cityName,
    edgeData,
    realState,
    rentPageData,
    BuysData,
    CoLivingData,
    CommercialData,
    PlotsData,

}





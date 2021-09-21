const fakedata = [
  {    overallpeoplecount: [
    {
      metadata: {
        name: "Overall People Detected",
      },
      data: [
        {
          name: "IC flashing",
          detected: 8,
        },
        {
          name: "Re-work",
          detected: 1,
        },
        {
          name: "Side Line",
          detected: 6,
        },
        {
          name: "PTH",
          detected: 9,
        },
        {
          name: "Press-Fit",
          detected: 1,
        },
        {
          name: "Wave-Machine",
          detected: 5,
        },
      ],
    },
  ],
    surveillanceoverall: [
      {
        metadata: {
          name: "Surveillance overall Heat Map",
        },
        data: [
          {
            camera_area: "FT",
            detected: 13,
          },
          {
            camera_area: "Re-work",
            detected: 3,
          },
          {
            camera_area: "Side Line",
            detected: 5,
          },
          {
            camera_area: "PTH",
            detected: 6,
          },
          {
            camera_area: "Press-Fit",
            detected: 2,
          },
          {
            camera_area: "Wave-Machine",
            detected: 5,
          },
        ],
      },
    ],
    cameralogs: [
      {
        metadata: {
          name: "Camera Event Logs",
        },
        data: [
          {
            camera_id: "CA1C22",
            people_alert: "3",
            time_stamp: "09/20/21 14:35:06",
          },
          {
            camera_id: "CA1C14",
            people_alert: "2",
            time_stamp: "09/20/21 14:35:06",
          },
          {
            camera_id: "CAIU07",
            people_alert: "4",
            time_stamp: "09/20/21 14:35:06",
          },
          {
            camera_id: "CALU01",
            people_alert: "5",
            time_stamp: "09/20/21 14:35:06",
          },
        ],
      },
    ],

    dropdowns: [
      {
        metadata: {
          name: "Dynamic Drop Down",
        },
        data: [
          {
            name: "Custom Dropdown",
            values: [1, 2, 3, 4, 5],
            type: "customDropdown",
          },
          {
            name: "Single Select Dropdown",
            values: [1, 2, 3, 4, 5],
            type: "singleSelect",
          },
          {
            name: "Multi Select Dropdown",
            values: [1, 2, 3, 4, 5],
            type: "multiSelect",
          },
          {
            name: "Search",
            values: [],
            type: "text",
          },
        ],
      },
    ],

    dynamictable: [
      {
        metadata: {
          name: "Dynamic Table",
        },
        data: [
          {
            id: 1,
            first_name: "Viv",
            last_name: "Nolan",
            email: "vnolan0@cdbaby.com",
            gender: "Non-binary",
            ip_address: "225.184.166.238",
          },
          {
            id: 2,
            first_name: "Eben",
            last_name: "Benoist",
            email: "ebenoist1@va.gov",
            gender: "Agender",
            ip_address: "127.247.54.236",
          },
          {
            id: 3,
            first_name: "Chrisy",
            last_name: "Milkeham",
            email: "cmilkeham2@indiatimes.com",
            gender: "Male",
            ip_address: "128.206.219.230",
          },
          {
            id: 4,
            first_name: "Birk",
            last_name: "Boscott",
            email: "bboscott3@storify.com",
            gender: "Male",
            ip_address: "104.76.122.116",
          },
          {
            id: 5,
            first_name: "Waldo",
            last_name: "Allain",
            email: "wallain4@gizmodo.com",
            gender: "Genderfluid",
            ip_address: "179.217.203.213",
          },
          {
            id: 6,
            first_name: "Augustus",
            last_name: "Bachmann",
            email: "abachmann5@eepurl.com",
            gender: "Male",
            ip_address: "221.147.215.90",
          },
          {
            id: 7,
            first_name: "Susi",
            last_name: "Messier",
            email: "smessier6@themeforest.net",
            gender: "Genderqueer",
            ip_address: "118.80.5.89",
          },
          {
            id: 8,
            first_name: "Si",
            last_name: "Hanington",
            email: "shanington7@rambler.ru",
            gender: "Bigender",
            ip_address: "230.25.43.46",
          },
          {
            id: 9,
            first_name: "Anson",
            last_name: "Melior",
            email: "amelior8@geocities.jp",
            gender: "Male",
            ip_address: "185.239.113.69",
          },
          {
            id: 10,
            first_name: "Dorothea",
            last_name: "Jemison",
            email: "djemison9@discuz.net",
            gender: "Agender",
            ip_address: "245.107.133.245",
          },
          {
            id: 11,
            first_name: "Mallory",
            last_name: "McLugish",
            email: "mmclugisha@youtu.be",
            gender: "Genderqueer",
            ip_address: "248.82.160.112",
          },
          {
            id: 12,
            first_name: "Caleb",
            last_name: "Fanshaw",
            email: "cfanshawb@i2i.jp",
            gender: "Female",
            ip_address: "47.139.178.158",
          },
          {
            id: 13,
            first_name: "Sanford",
            last_name: "Pettisall",
            email: "spettisallc@guardian.co.uk",
            gender: "Non-binary",
            ip_address: "64.80.33.142",
          },
          {
            id: 14,
            first_name: "Michal",
            last_name: "Rikkard",
            email: "mrikkardd@google.com.br",
            gender: "Female",
            ip_address: "220.103.101.42",
          },
          {
            id: 15,
            first_name: "Wynny",
            last_name: "Rignoldes",
            email: "wrignoldese@ocn.ne.jp",
            gender: "Genderqueer",
            ip_address: "112.52.123.174",
          },
          {
            id: 16,
            first_name: "Moritz",
            last_name: "Edds",
            email: "meddsf@altervista.org",
            gender: "Polygender",
            ip_address: "43.103.122.66",
          },
          {
            id: 17,
            first_name: "Elbert",
            last_name: "Ingall",
            email: "eingallg@adobe.com",
            gender: "Female",
            ip_address: "207.235.250.201",
          },
          {
            id: 18,
            first_name: "Ezra",
            last_name: "Matijasevic",
            email: "ematijasevich@hhs.gov",
            gender: "Male",
            ip_address: "34.67.91.40",
          },
          {
            id: 19,
            first_name: "Neel",
            last_name: "Whitsey",
            email: "nwhitseyi@woothemes.com",
            gender: "Genderqueer",
            ip_address: "160.25.205.7",
          },
          {
            id: 20,
            first_name: "Stanford",
            last_name: "Paternoster",
            email: "spaternosterj@disqus.com",
            gender: "Agender",
            ip_address: "45.131.115.153",
          },
          {
            id: 21,
            first_name: "Dianemarie",
            last_name: "Foxon",
            email: "dfoxonk@storify.com",
            gender: "Agender",
            ip_address: "94.177.26.200",
          },
          {
            id: 22,
            first_name: "Israel",
            last_name: "Driver",
            email: "idriverl@smugmug.com",
            gender: "Male",
            ip_address: "65.43.120.235",
          },
          {
            id: 23,
            first_name: "Rudiger",
            last_name: "Kingman",
            email: "rkingmanm@yale.edu",
            gender: "Polygender",
            ip_address: "191.119.242.165",
          },
          {
            id: 24,
            first_name: "Tamarah",
            last_name: "Willan",
            email: "twillann@ocn.ne.jp",
            gender: "Bigender",
            ip_address: "32.79.9.236",
          },
          {
            id: 25,
            first_name: "Arabele",
            last_name: "Vere",
            email: "avereo@topsy.com",
            gender: "Male",
            ip_address: "21.112.79.91",
          },
          {
            id: 26,
            first_name: "Jason",
            last_name: "Greenstreet",
            email: "jgreenstreetp@yolasite.com",
            gender: "Non-binary",
            ip_address: "90.48.243.192",
          },
          {
            id: 27,
            first_name: "Wesley",
            last_name: "Dilley",
            email: "wdilleyq@wordpress.org",
            gender: "Non-binary",
            ip_address: "61.68.191.246",
          },
          {
            id: 28,
            first_name: "Eden",
            last_name: "Leadbeater",
            email: "eleadbeaterr@telegraph.co.uk",
            gender: "Genderqueer",
            ip_address: "129.190.185.24",
          },
          {
            id: 29,
            first_name: "Mark",
            last_name: "Jedrzaszkiewicz",
            email: "mjedrzaszkiewiczs@nydailynews.com",
            gender: "Female",
            ip_address: "50.9.79.16",
          },
          {
            id: 30,
            first_name: "Max",
            last_name: "Gergher",
            email: "mgerghert@kickstarter.com",
            gender: "Female",
            ip_address: "212.153.200.121",
          },
          {
            id: 31,
            first_name: "Kimball",
            last_name: "Ondrousek",
            email: "kondrouseku@techcrunch.com",
            gender: "Genderfluid",
            ip_address: "72.115.140.145",
          },
          {
            id: 32,
            first_name: "Loretta",
            last_name: "Spaule",
            email: "lspaulev@businessinsider.com",
            gender: "Genderfluid",
            ip_address: "86.141.66.231",
          },
          {
            id: 33,
            first_name: "Cory",
            last_name: "Keely",
            email: "ckeelyw@flickr.com",
            gender: "Bigender",
            ip_address: "177.193.5.116",
          },
          {
            id: 34,
            first_name: "Allene",
            last_name: "Beig",
            email: "abeigx@typepad.com",
            gender: "Genderfluid",
            ip_address: "64.188.199.58",
          },
          {
            id: 35,
            first_name: "Romeo",
            last_name: "Elms",
            email: "relmsy@theguardian.com",
            gender: "Non-binary",
            ip_address: "204.203.156.187",
          },
          {
            id: 36,
            first_name: "Kaine",
            last_name: "Collymore",
            email: "kcollymorez@who.int",
            gender: "Bigender",
            ip_address: "119.174.111.206",
          },
          {
            id: 37,
            first_name: "Ephrem",
            last_name: "Sherston",
            email: "esherston10@google.ca",
            gender: "Male",
            ip_address: "223.124.29.249",
          },
          {
            id: 38,
            first_name: "Dallon",
            last_name: "Sooper",
            email: "dsooper11@trellian.com",
            gender: "Polygender",
            ip_address: "133.235.212.93",
          },
          {
            id: 39,
            first_name: "Cyndi",
            last_name: "Montier",
            email: "cmontier12@si.edu",
            gender: "Agender",
            ip_address: "163.213.136.38",
          },
          {
            id: 40,
            first_name: "Corilla",
            last_name: "Blacksell",
            email: "cblacksell13@cargocollective.com",
            gender: "Genderfluid",
            ip_address: "162.190.216.71",
          },
          {
            id: 41,
            first_name: "Perla",
            last_name: "Pickles",
            email: "ppickles14@furl.net",
            gender: "Female",
            ip_address: "29.28.147.122",
          },
          {
            id: 42,
            first_name: "Tamma",
            last_name: "Le Fleming",
            email: "tlefleming15@virginia.edu",
            gender: "Non-binary",
            ip_address: "250.101.249.239",
          },
          {
            id: 43,
            first_name: "Abbe",
            last_name: "Estick",
            email: "aestick16@networkadvertising.org",
            gender: "Polygender",
            ip_address: "220.228.9.53",
          },
          {
            id: 44,
            first_name: "Felic",
            last_name: "Donaher",
            email: "fdonaher17@xinhuanet.com",
            gender: "Genderqueer",
            ip_address: "0.38.136.234",
          },
          {
            id: 45,
            first_name: "Clo",
            last_name: "Greatex",
            email: "cgreatex18@amazon.de",
            gender: "Non-binary",
            ip_address: "59.52.241.27",
          },
          {
            id: 46,
            first_name: "Licha",
            last_name: "Ronisch",
            email: "lronisch19@stanford.edu",
            gender: "Bigender",
            ip_address: "208.40.210.27",
          },
          {
            id: 47,
            first_name: "Bancroft",
            last_name: "McLoughlin",
            email: "bmcloughlin1a@pbs.org",
            gender: "Genderqueer",
            ip_address: "221.151.126.2",
          },
          {
            id: 48,
            first_name: "Joann",
            last_name: "Benedyktowicz",
            email: "jbenedyktowicz1b@aol.com",
            gender: "Agender",
            ip_address: "98.154.217.44",
          },
          {
            id: 49,
            first_name: "Tait",
            last_name: "Megainey",
            email: "tmegainey1c@oracle.com",
            gender: "Female",
            ip_address: "24.90.19.222",
          },
          {
            id: 50,
            first_name: "Ina",
            last_name: "Paulley",
            email: "ipaulley1d@dailymail.co.uk",
            gender: "Genderfluid",
            ip_address: "51.179.228.95",
          },
          {
            id: 51,
            first_name: "Janeen",
            last_name: "Feronet",
            email: "jferonet1e@over-blog.com",
            gender: "Polygender",
            ip_address: "59.131.93.152",
          },
          {
            id: 52,
            first_name: "Michell",
            last_name: "Bantham",
            email: "mbantham1f@google.pl",
            gender: "Male",
            ip_address: "252.111.148.76",
          },
          {
            id: 53,
            first_name: "Grantley",
            last_name: "Cordier",
            email: "gcordier1g@is.gd",
            gender: "Genderqueer",
            ip_address: "230.198.245.46",
          },
          {
            id: 54,
            first_name: "Rana",
            last_name: "Loker",
            email: "rloker1h@mozilla.org",
            gender: "Bigender",
            ip_address: "231.14.186.139",
          },
          {
            id: 55,
            first_name: "Jodie",
            last_name: "Ivanyushkin",
            email: "jivanyushkin1i@google.com.au",
            gender: "Polygender",
            ip_address: "57.66.55.212",
          },
          {
            id: 56,
            first_name: "Wain",
            last_name: "Puttergill",
            email: "wputtergill1j@washingtonpost.com",
            gender: "Genderqueer",
            ip_address: "22.186.191.242",
          },
          {
            id: 57,
            first_name: "Martguerita",
            last_name: "Nourse",
            email: "mnourse1k@loc.gov",
            gender: "Non-binary",
            ip_address: "105.161.29.213",
          },
          {
            id: 58,
            first_name: "Elisha",
            last_name: "Oriel",
            email: "eoriel1l@huffingtonpost.com",
            gender: "Genderqueer",
            ip_address: "155.40.37.105",
          },
          {
            id: 59,
            first_name: "Ema",
            last_name: "Cromwell",
            email: "ecromwell1m@trellian.com",
            gender: "Female",
            ip_address: "99.208.182.239",
          },
          {
            id: 60,
            first_name: "Cesaro",
            last_name: "Doulden",
            email: "cdoulden1n@weibo.com",
            gender: "Agender",
            ip_address: "164.249.88.167",
          },
          {
            id: 61,
            first_name: "Dorita",
            last_name: "Jenson",
            email: "djenson1o@fema.gov",
            gender: "Female",
            ip_address: "54.207.214.216",
          },
          {
            id: 62,
            first_name: "Jory",
            last_name: "Bilborough",
            email: "jbilborough1p@webmd.com",
            gender: "Genderfluid",
            ip_address: "36.196.64.96",
          },
          {
            id: 63,
            first_name: "Inglis",
            last_name: "Stove",
            email: "istove1q@ustream.tv",
            gender: "Agender",
            ip_address: "236.35.53.163",
          },
          {
            id: 64,
            first_name: "Ardis",
            last_name: "Tresvina",
            email: "atresvina1r@globo.com",
            gender: "Male",
            ip_address: "28.82.167.5",
          },
          {
            id: 65,
            first_name: "Terry",
            last_name: "Maxworthy",
            email: "tmaxworthy1s@wikispaces.com",
            gender: "Female",
            ip_address: "249.201.240.16",
          },
          {
            id: 66,
            first_name: "Jacinda",
            last_name: "Fradgley",
            email: "jfradgley1t@state.gov",
            gender: "Non-binary",
            ip_address: "53.210.216.146",
          },
          {
            id: 67,
            first_name: "Leeann",
            last_name: "Iddins",
            email: "liddins1u@cmu.edu",
            gender: "Female",
            ip_address: "196.1.241.114",
          },
          {
            id: 68,
            first_name: "Donny",
            last_name: "Dumbrall",
            email: "ddumbrall1v@myspace.com",
            gender: "Female",
            ip_address: "151.68.106.15",
          },
          {
            id: 69,
            first_name: "Micah",
            last_name: "Faulds",
            email: "mfaulds1w@examiner.com",
            gender: "Non-binary",
            ip_address: "237.46.140.92",
          },
          {
            id: 70,
            first_name: "Matti",
            last_name: "Bristowe",
            email: "mbristowe1x@newyorker.com",
            gender: "Genderqueer",
            ip_address: "239.236.180.125",
          },
          {
            id: 71,
            first_name: "Harrie",
            last_name: "Tearny",
            email: "htearny1y@issuu.com",
            gender: "Male",
            ip_address: "145.222.4.145",
          },
          {
            id: 72,
            first_name: "Ilario",
            last_name: "Lacaze",
            email: "ilacaze1z@accuweather.com",
            gender: "Agender",
            ip_address: "72.61.132.226",
          },
          {
            id: 73,
            first_name: "Briny",
            last_name: "Ashfull",
            email: "bashfull20@walmart.com",
            gender: "Agender",
            ip_address: "93.25.125.200",
          },
          {
            id: 74,
            first_name: "Shaughn",
            last_name: "Bradick",
            email: "sbradick21@smh.com.au",
            gender: "Genderqueer",
            ip_address: "107.162.227.206",
          },
          {
            id: 75,
            first_name: "Rosanne",
            last_name: "Sighard",
            email: "rsighard22@bluehost.com",
            gender: "Bigender",
            ip_address: "99.232.160.124",
          },
          {
            id: 76,
            first_name: "Kyrstin",
            last_name: "Ferschke",
            email: "kferschke23@is.gd",
            gender: "Genderfluid",
            ip_address: "80.255.206.241",
          },
          {
            id: 77,
            first_name: "Lizbeth",
            last_name: "Moorfield",
            email: "lmoorfield24@amazon.de",
            gender: "Polygender",
            ip_address: "189.105.2.104",
          },
          {
            id: 78,
            first_name: "Perry",
            last_name: "Gerrit",
            email: "pgerrit25@paypal.com",
            gender: "Non-binary",
            ip_address: "32.136.176.234",
          },
          {
            id: 79,
            first_name: "Farlee",
            last_name: "Cullon",
            email: "fcullon26@paypal.com",
            gender: "Bigender",
            ip_address: "5.233.56.62",
          },
          {
            id: 80,
            first_name: "Juana",
            last_name: "Foulis",
            email: "jfoulis27@hatena.ne.jp",
            gender: "Bigender",
            ip_address: "64.46.112.14",
          },
          {
            id: 81,
            first_name: "Larry",
            last_name: "O'Keevan",
            email: "lokeevan28@blog.com",
            gender: "Non-binary",
            ip_address: "71.224.37.149",
          },
          {
            id: 82,
            first_name: "Honor",
            last_name: "Stolberger",
            email: "hstolberger29@hao123.com",
            gender: "Non-binary",
            ip_address: "155.25.111.147",
          },
          {
            id: 83,
            first_name: "Kilian",
            last_name: "Faltin",
            email: "kfaltin2a@blogger.com",
            gender: "Bigender",
            ip_address: "167.80.113.90",
          },
          {
            id: 84,
            first_name: "Eolanda",
            last_name: "Woolmington",
            email: "ewoolmington2b@trellian.com",
            gender: "Bigender",
            ip_address: "101.107.154.174",
          },
          {
            id: 85,
            first_name: "Reena",
            last_name: "Wreakes",
            email: "rwreakes2c@theglobeandmail.com",
            gender: "Bigender",
            ip_address: "207.3.187.108",
          },
          {
            id: 86,
            first_name: "Wylma",
            last_name: "Bocking",
            email: "wbocking2d@creativecommons.org",
            gender: "Bigender",
            ip_address: "83.162.151.47",
          },
          {
            id: 87,
            first_name: "Bertina",
            last_name: "Ferrucci",
            email: "bferrucci2e@ucoz.com",
            gender: "Genderqueer",
            ip_address: "219.223.245.221",
          },
          {
            id: 88,
            first_name: "Pammy",
            last_name: "Tarte",
            email: "ptarte2f@vistaprint.com",
            gender: "Non-binary",
            ip_address: "187.180.17.176",
          },
          {
            id: 89,
            first_name: "Elfrida",
            last_name: "Halwill",
            email: "ehalwill2g@ezinearticles.com",
            gender: "Genderfluid",
            ip_address: "206.6.53.3",
          },
          {
            id: 90,
            first_name: "Sylvia",
            last_name: "Fridlington",
            email: "sfridlington2h@jugem.jp",
            gender: "Male",
            ip_address: "167.96.10.59",
          },
          {
            id: 91,
            first_name: "Mathilde",
            last_name: "Dundendale",
            email: "mdundendale2i@canalblog.com",
            gender: "Polygender",
            ip_address: "47.189.222.159",
          },
          {
            id: 92,
            first_name: "Devora",
            last_name: "McGeady",
            email: "dmcgeady2j@etsy.com",
            gender: "Genderfluid",
            ip_address: "190.126.234.67",
          },
          {
            id: 93,
            first_name: "Taddeusz",
            last_name: "Utting",
            email: "tutting2k@foxnews.com",
            gender: "Male",
            ip_address: "232.212.123.200",
          },
          {
            id: 94,
            first_name: "Lynsey",
            last_name: "Gove",
            email: "lgove2l@tripod.com",
            gender: "Polygender",
            ip_address: "230.43.25.32",
          },
          {
            id: 95,
            first_name: "Vivyan",
            last_name: "Wevell",
            email: "vwevell2m@shareasale.com",
            gender: "Non-binary",
            ip_address: "145.94.144.255",
          },
          {
            id: 96,
            first_name: "Timmie",
            last_name: "Hugonnet",
            email: "thugonnet2n@mediafire.com",
            gender: "Genderfluid",
            ip_address: "80.254.198.111",
          },
          {
            id: 97,
            first_name: "Lorine",
            last_name: "Toffetto",
            email: "ltoffetto2o@cisco.com",
            gender: "Polygender",
            ip_address: "16.58.187.219",
          },
          {
            id: 98,
            first_name: "Rudolph",
            last_name: "Laughrey",
            email: "rlaughrey2p@smugmug.com",
            gender: "Bigender",
            ip_address: "66.67.65.26",
          },
          {
            id: 99,
            first_name: "Evyn",
            last_name: "Zorer",
            email: "ezorer2q@themeforest.net",
            gender: "Agender",
            ip_address: "175.51.114.53",
          },
          {
            id: 100,
            first_name: "Merrick",
            last_name: "Scrivener",
            email: "mscrivener2r@google.co.uk",
            gender: "Bigender",
            ip_address: "237.61.146.173",
          },
        ],
      },
    ],
  },
];

export default fakedata;

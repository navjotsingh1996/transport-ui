const fakeData = [
  {
    "invoiceNumber": "5e96597ad6cc5a04042e311d",
    "loadNumber": 30,
    "invoiceDate": 1543035725,
    "billTo": {
      "name": "HOMETOWN",
      "streetAddress": "403 Fanchon Place",
      "city": "Blairstown",
      "state": " New Jersey",
      "zip": 2586
    },
    "stops": [
      {
        "date": 1439556404,
        "name": "ZAYA",
        "streetAddress": "756 Herkimer Street",
        "city": "Lupton",
        "state": "Illinois",
        "zip": 2198,
        "type": "DELIVERY"
      },
      {
        "date": 1438094974,
        "name": "PIGZART",
        "streetAddress": "789 Irwin Street",
        "city": "Lafferty",
        "state": "Texas",
        "zip": 8298,
        "type": "PICKUP"
      },
      {
        "date": 1553246416,
        "name": "EQUITAX",
        "streetAddress": "263 Howard Avenue",
        "city": "Boling",
        "state": "Tennessee",
        "zip": 3902,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 1455.82,
      "detention": 3222.76,
      "layover": 2175.12
    }
  },
  {
    "invoiceNumber": "5e96597a38d2123e912056bf",
    "loadNumber": 24,
    "invoiceDate": 1444370038,
    "billTo": {
      "name": "ACRUEX",
      "streetAddress": "648 Seigel Street",
      "city": "Mansfield",
      "state": " Ohio",
      "zip": 8316
    },
    "stops": [
      {
        "date": 1531731088,
        "name": "COMCUR",
        "streetAddress": "329 Linden Street",
        "city": "Fowlerville",
        "state": "Iowa",
        "zip": 7145,
        "type": "DELIVERY"
      },
      {
        "date": 1443680533,
        "name": "OBONES",
        "streetAddress": "213 Visitation Place",
        "city": "Colton",
        "state": "Wisconsin",
        "zip": 2171,
        "type": "PICKUP"
      },
      {
        "date": 1550651895,
        "name": "ACUSAGE",
        "streetAddress": "979 Minna Street",
        "city": "Wheaton",
        "state": "American Samoa",
        "zip": 3135,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 1077.41,
      "detention": 3965.26,
      "layover": 1665.26
    }
  },
  {
    "invoiceNumber": "5e96597ab7bacc0e5c1fa692",
    "loadNumber": 33,
    "invoiceDate": 1415806246,
    "billTo": {
      "name": "AQUAMATE",
      "streetAddress": "959 Conklin Avenue",
      "city": "Welch",
      "state": " Idaho",
      "zip": 3734
    },
    "stops": [
      {
        "date": 1409992532,
        "name": "KLUGGER",
        "streetAddress": "672 John Street",
        "city": "Longoria",
        "state": "South Dakota",
        "zip": 5156,
        "type": "PICKUP"
      },
      {
        "date": 1396148048,
        "name": "EVEREST",
        "streetAddress": "672 Provost Street",
        "city": "Fannett",
        "state": "Connecticut",
        "zip": 1777,
        "type": "DELIVERY"
      },
      {
        "date": 1577404391,
        "name": "SENSATE",
        "streetAddress": "597 Bragg Court",
        "city": "Nicholson",
        "state": "Washington",
        "zip": 6618,
        "type": "PICKUP"
      },
      {
        "date": 1488776464,
        "name": "DIGITALUS",
        "streetAddress": "880 Hubbard Street",
        "city": "Sehili",
        "state": "Alabama",
        "zip": 7752,
        "type": "PICKUP"
      },
      {
        "date": 1427053960,
        "name": "ZORROMOP",
        "streetAddress": "706 Noble Street",
        "city": "Sperryville",
        "state": "Wyoming",
        "zip": 482,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 1410.15,
      "detention": 1918.10,
      "layover": 2483.90
    }
  },
  {
    "invoiceNumber": "5e96597a12706a9a6d3a788e",
    "loadNumber": 24,
    "invoiceDate": 1399836463,
    "billTo": {
      "name": "MUSIX",
      "streetAddress": "176 Aurelia Court",
      "city": "Ada",
      "state": " Louisiana",
      "zip": 4237
    },
    "stops": [
      {
        "date": 1436024662,
        "name": "CUJO",
        "streetAddress": "375 Thames Street",
        "city": "Bluffview",
        "state": "Vermont",
        "zip": 9315,
        "type": "PICKUP"
      },
      {
        "date": 1403086866,
        "name": "VISUALIX",
        "streetAddress": "207 Hemlock Street",
        "city": "Allentown",
        "state": "North Carolina",
        "zip": 6466,
        "type": "DELIVERY"
      },
      {
        "date": 1545481892,
        "name": "CALCULA",
        "streetAddress": "111 Berkeley Place",
        "city": "Martinsville",
        "state": "Federated States Of Micronesia",
        "zip": 9194,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 3011.07,
      "detention": 1386.88,
      "layover": 2968.71
    }
  },
  {
    "invoiceNumber": "5e96597a0e2dfbff71eb78fa",
    "loadNumber": 29,
    "invoiceDate": 1397784391,
    "billTo": {
      "name": "ZYTRAC",
      "streetAddress": "267 Wyona Street",
      "city": "Biddle",
      "state": " Kentucky",
      "zip": 4401
    },
    "stops": [
      {
        "date": 1505787415,
        "name": "ZIORE",
        "streetAddress": "258 Neptune Avenue",
        "city": "Waterview",
        "state": "South Carolina",
        "zip": 3394,
        "type": "DELIVERY"
      },
      {
        "date": 1523276843,
        "name": "PHEAST",
        "streetAddress": "284 Colby Court",
        "city": "Rossmore",
        "state": "North Dakota",
        "zip": 7485,
        "type": "PICKUP"
      },
      {
        "date": 1402097981,
        "name": "GRACKER",
        "streetAddress": "343 Legion Street",
        "city": "Oretta",
        "state": "New Mexico",
        "zip": 5282,
        "type": "PICKUP"
      },
      {
        "date": 1451394645,
        "name": "CIPROMOX",
        "streetAddress": "199 Sutter Avenue",
        "city": "Townsend",
        "state": "Alaska",
        "zip": 100,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 3013.05,
      "detention": 2510.33,
      "layover": 2683.78
    }
  },
  {
    "invoiceNumber": "5e96597aa590ce8669fbeff1",
    "loadNumber": 28,
    "invoiceDate": 1406086017,
    "billTo": {
      "name": "SLAX",
      "streetAddress": "477 Freeman Street",
      "city": "Hinsdale",
      "state": " Kansas",
      "zip": 7763
    },
    "stops": [
      {
        "date": 1505933910,
        "name": "FURNAFIX",
        "streetAddress": "514 Fay Court",
        "city": "Fairacres",
        "state": "California",
        "zip": 2026,
        "type": "DELIVERY"
      },
      {
        "date": 1532462761,
        "name": "OULU",
        "streetAddress": "210 Autumn Avenue",
        "city": "Stouchsburg",
        "state": "Palau",
        "zip": 257,
        "type": "PICKUP"
      },
      {
        "date": 1408667990,
        "name": "OPTICOM",
        "streetAddress": "635 Barwell Terrace",
        "city": "Cherokee",
        "state": "Guam",
        "zip": 460,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 3397.08,
      "detention": 3840.46,
      "layover": 1504.56
    }
  },
  {
    "invoiceNumber": "5e96597ab46ba4d9155361d9",
    "loadNumber": 30,
    "invoiceDate": 1539313213,
    "billTo": {
      "name": "EGYPTO",
      "streetAddress": "630 Crown Street",
      "city": "Lavalette",
      "state": " New York",
      "zip": 6231
    },
    "stops": [
      {
        "date": 1505420901,
        "name": "BRAINCLIP",
        "streetAddress": "147 Elton Street",
        "city": "Sussex",
        "state": "Michigan",
        "zip": 2962,
        "type": "PICKUP"
      },
      {
        "date": 1492365996,
        "name": "MOTOVATE",
        "streetAddress": "710 Harrison Place",
        "city": "Trinway",
        "state": "Montana",
        "zip": 8251,
        "type": "PICKUP"
      },
      {
        "date": 1398337760,
        "name": "MAINELAND",
        "streetAddress": "408 Railroad Avenue",
        "city": "Watchtower",
        "state": "Florida",
        "zip": 8846,
        "type": "PICKUP"
      },
      {
        "date": 1448071104,
        "name": "ZENTIA",
        "streetAddress": "463 Herkimer Place",
        "city": "Smock",
        "state": "West Virginia",
        "zip": 7654,
        "type": "PICKUP"
      },
      {
        "date": 1428460856,
        "name": "WARETEL",
        "streetAddress": "352 Seaview Court",
        "city": "Zortman",
        "state": "Colorado",
        "zip": 4784,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 1160.85,
      "detention": 2880.21,
      "layover": 2308.57
    }
  },
  {
    "invoiceNumber": "5e96597ad7de4e8462a36daf",
    "loadNumber": 40,
    "invoiceDate": 1402956682,
    "billTo": {
      "name": "ISOPOP",
      "streetAddress": "812 Canda Avenue",
      "city": "Troy",
      "state": " Northern Mariana Islands",
      "zip": 8888
    },
    "stops": [
      {
        "date": 1564700525,
        "name": "XLEEN",
        "streetAddress": "187 Oak Street",
        "city": "Elwood",
        "state": "Massachusetts",
        "zip": 7892,
        "type": "PICKUP"
      },
      {
        "date": 1528589574,
        "name": "HOPELI",
        "streetAddress": "135 Willoughby Street",
        "city": "Dola",
        "state": "District Of Columbia",
        "zip": 455,
        "type": "PICKUP"
      },
      {
        "date": 1480923513,
        "name": "KENGEN",
        "streetAddress": "673 Frost Street",
        "city": "Virgie",
        "state": "Virginia",
        "zip": 8816,
        "type": "PICKUP"
      },
      {
        "date": 1541580248,
        "name": "ENDIPIN",
        "streetAddress": "910 Seaview Avenue",
        "city": "Riverton",
        "state": "Delaware",
        "zip": 1939,
        "type": "DELIVERY"
      },
      {
        "date": 1550901059,
        "name": "VIAGRAND",
        "streetAddress": "281 Eckford Street",
        "city": "Roy",
        "state": "Puerto Rico",
        "zip": 8139,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 2404.95,
      "detention": 3305.75,
      "layover": 1058.98
    }
  },
  {
    "invoiceNumber": "5e96597a9742eecfa10d5904",
    "loadNumber": 37,
    "invoiceDate": 1441132704,
    "billTo": {
      "name": "BLEEKO",
      "streetAddress": "448 Alabama Avenue",
      "city": "Crenshaw",
      "state": " Rhode Island",
      "zip": 6443
    },
    "stops": [
      {
        "date": 1572167052,
        "name": "SNIPS",
        "streetAddress": "685 Lombardy Street",
        "city": "National",
        "state": "Georgia",
        "zip": 6177,
        "type": "DELIVERY"
      },
      {
        "date": 1467893258,
        "name": "CEDWARD",
        "streetAddress": "781 Senator Street",
        "city": "Gilgo",
        "state": "Nevada",
        "zip": 8748,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 3587.50,
      "detention": 2930.26,
      "layover": 1356.22
    }
  },
  {
    "invoiceNumber": "5e96597aab0d50f8f5a016ea",
    "loadNumber": 36,
    "invoiceDate": 1450218677,
    "billTo": {
      "name": "BLURRYBUS",
      "streetAddress": "602 Eldert Lane",
      "city": "Brownsville",
      "state": " Arkansas",
      "zip": 3023
    },
    "stops": [
      {
        "date": 1483832620,
        "name": "RETROTEX",
        "streetAddress": "709 Mayfair Drive",
        "city": "Witmer",
        "state": "Maryland",
        "zip": 9508,
        "type": "PICKUP"
      },
      {
        "date": 1467461010,
        "name": "COMTEXT",
        "streetAddress": "182 Noll Street",
        "city": "Statenville",
        "state": "Mississippi",
        "zip": 2636,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 1859.95,
      "detention": 2020.26,
      "layover": 3808.25
    }
  },
  {
    "invoiceNumber": "5e96597a7db0dd576346c3a1",
    "loadNumber": 25,
    "invoiceDate": 1450534554,
    "billTo": {
      "name": "OVIUM",
      "streetAddress": "319 Foster Avenue",
      "city": "Chical",
      "state": " Marshall Islands",
      "zip": 3808
    },
    "stops": [
      {
        "date": 1400351137,
        "name": "LUMBREX",
        "streetAddress": "821 Columbia Place",
        "city": "Vicksburg",
        "state": "Oregon",
        "zip": 3357,
        "type": "PICKUP"
      },
      {
        "date": 1552819475,
        "name": "QUILTIGEN",
        "streetAddress": "303 Atkins Avenue",
        "city": "Steinhatchee",
        "state": "Utah",
        "zip": 6694,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 1762.28,
      "detention": 3644.50,
      "layover": 2337.20
    }
  },
  {
    "invoiceNumber": "5e96597a3f12f1335633352c",
    "loadNumber": 23,
    "invoiceDate": 1549696708,
    "billTo": {
      "name": "NEXGENE",
      "streetAddress": "608 Lester Court",
      "city": "Winston",
      "state": " Hawaii",
      "zip": 523
    },
    "stops": [
      {
        "date": 1435491675,
        "name": "PAWNAGRA",
        "streetAddress": "497 Locust Avenue",
        "city": "Kohatk",
        "state": "Nebraska",
        "zip": 6674,
        "type": "DELIVERY"
      },
      {
        "date": 1442635330,
        "name": "COMBOGENE",
        "streetAddress": "310 Cypress Court",
        "city": "Ronco",
        "state": "Indiana",
        "zip": 1321,
        "type": "PICKUP"
      },
      {
        "date": 1540130838,
        "name": "ORBIFLEX",
        "streetAddress": "465 Clara Street",
        "city": "Grahamtown",
        "state": "Oklahoma",
        "zip": 5514,
        "type": "DELIVERY"
      },
      {
        "date": 1485107452,
        "name": "SYNKGEN",
        "streetAddress": "354 Story Street",
        "city": "Norwood",
        "state": "Arizona",
        "zip": 275,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 2076.88,
      "detention": 1441.34,
      "layover": 3870.58
    }
  },
  {
    "invoiceNumber": "5e96597a27a5b6cc3759a1a7",
    "loadNumber": 24,
    "invoiceDate": 1557860799,
    "billTo": {
      "name": "XYLAR",
      "streetAddress": "239 Lake Street",
      "city": "Eggertsville",
      "state": " Missouri",
      "zip": 4954
    },
    "stops": [
      {
        "date": 1561696949,
        "name": "CALCU",
        "streetAddress": "293 Leonard Street",
        "city": "Caroleen",
        "state": "Maine",
        "zip": 3024,
        "type": "PICKUP"
      },
      {
        "date": 1550483690,
        "name": "ONTAGENE",
        "streetAddress": "538 Times Placez",
        "city": "Sultana",
        "state": "New Hampshire",
        "zip": 1630,
        "type": "PICKUP"
      },
      {
        "date": 1522073413,
        "name": "KNEEDLES",
        "streetAddress": "323 Bridge Street",
        "city": "Bannock",
        "state": "Minnesota",
        "zip": 3686,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 2434.07,
      "detention": 2331.96,
      "layover": 3218.90
    }
  },
  {
    "invoiceNumber": "5e96597aabd0cf50adfb6558",
    "loadNumber": 32,
    "invoiceDate": 1529496841,
    "billTo": {
      "name": "TRI@TRIBALOG",
      "streetAddress": "227 Fillmore Place",
      "city": "Stonybrook",
      "state": " Pennsylvania",
      "zip": 3546
    },
    "stops": [
      {
        "date": 1425716878,
        "name": "ORBIN",
        "streetAddress": "597 Kaufman Place",
        "city": "Baker",
        "state": "New Jersey",
        "zip": 8372,
        "type": "PICKUP"
      },
      {
        "date": 1446471607,
        "name": "GLEAMINK",
        "streetAddress": "300 Emerald Street",
        "city": "Itmann",
        "state": "Illinois",
        "zip": 9633,
        "type": "DELIVERY"
      },
      {
        "date": 1390466624,
        "name": "INTERLOO",
        "streetAddress": "316 Hausman Street",
        "city": "Navarre",
        "state": "Texas",
        "zip": 6062,
        "type": "DELIVERY"
      },
      {
        "date": 1501861559,
        "name": "COMTRACT",
        "streetAddress": "472 Albemarle Terrace",
        "city": "Boyd",
        "state": "Tennessee",
        "zip": 4314,
        "type": "PICKUP"
      },
      {
        "date": 1514742178,
        "name": "BOLAX",
        "streetAddress": "513 Adams Street",
        "city": "Dargan",
        "state": "Ohio",
        "zip": 6950,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 2775.14,
      "detention": 2607.36,
      "layover": 3537.37
    }
  },
  {
    "invoiceNumber": "5e96597a5bed649be6cfdc64",
    "loadNumber": 30,
    "invoiceDate": 1447590806,
    "billTo": {
      "name": "BITREX",
      "streetAddress": "173 Cove Lane",
      "city": "Lopezo",
      "state": " Iowa",
      "zip": 2749
    },
    "stops": [
      {
        "date": 1522437590,
        "name": "TEMORAK",
        "streetAddress": "346 Granite Street",
        "city": "Wilsonia",
        "state": "Wisconsin",
        "zip": 3137,
        "type": "DELIVERY"
      },
      {
        "date": 1503460310,
        "name": "FORTEAN",
        "streetAddress": "304 Montauk Avenue",
        "city": "Wadsworth",
        "state": "American Samoa",
        "zip": 2190,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 3709.13,
      "detention": 2879.40,
      "layover": 3860.55
    }
  },
  {
    "invoiceNumber": "5e96597a2c60d2c8fd19b7cc",
    "loadNumber": 34,
    "invoiceDate": 1402181703,
    "billTo": {
      "name": "CABLAM",
      "streetAddress": "822 Hope Street",
      "city": "Ellerslie",
      "state": " Idaho",
      "zip": 5600
    },
    "stops": [
      {
        "date": 1566717335,
        "name": "PRISMATIC",
        "streetAddress": "654 Eaton Court",
        "city": "Tuskahoma",
        "state": "South Dakota",
        "zip": 9847,
        "type": "DELIVERY"
      },
      {
        "date": 1435968669,
        "name": "ENERVATE",
        "streetAddress": "195 Front Street",
        "city": "Fulford",
        "state": "Connecticut",
        "zip": 4220,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 2380.03,
      "detention": 1702.00,
      "layover": 3350.63
    }
  },
  {
    "invoiceNumber": "5e96597acfcf062a01d1595e",
    "loadNumber": 22,
    "invoiceDate": 1435286488,
    "billTo": {
      "name": "TALAE",
      "streetAddress": "350 Paerdegat Avenue",
      "city": "Brownlee",
      "state": " Washington",
      "zip": 3159
    },
    "stops": [
      {
        "date": 1449287357,
        "name": "CINASTER",
        "streetAddress": "750 Grafton Street",
        "city": "Islandia",
        "state": "Alabama",
        "zip": 5707,
        "type": "PICKUP"
      },
      {
        "date": 1498355446,
        "name": "GEOLOGIX",
        "streetAddress": "114 Village Road",
        "city": "Oley",
        "state": "Wyoming",
        "zip": 7269,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 1155.52,
      "detention": 1986.87,
      "layover": 3719.97
    }
  },
  {
    "invoiceNumber": "5e96597a3210adb2928b0292",
    "loadNumber": 33,
    "invoiceDate": 1465460898,
    "billTo": {
      "name": "PROSURE",
      "streetAddress": "431 Tiffany Place",
      "city": "Nadine",
      "state": " Louisiana",
      "zip": 7550
    },
    "stops": [
      {
        "date": 1573024309,
        "name": "TROPOLIS",
        "streetAddress": "829 Roder Avenue",
        "city": "Toftrees",
        "state": "Vermont",
        "zip": 6063,
        "type": "DELIVERY"
      },
      {
        "date": 1503356998,
        "name": "HYPLEX",
        "streetAddress": "171 Randolph Street",
        "city": "Springdale",
        "state": "North Carolina",
        "zip": 5375,
        "type": "DELIVERY"
      },
      {
        "date": 1496025830,
        "name": "PROFLEX",
        "streetAddress": "297 Kings Place",
        "city": "Chelsea",
        "state": "Federated States Of Micronesia",
        "zip": 3415,
        "type": "PICKUP"
      },
      {
        "date": 1530451672,
        "name": "DENTREX",
        "streetAddress": "433 Heyward Street",
        "city": "Clara",
        "state": "Kentucky",
        "zip": 8425,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 2715.75,
      "detention": 3562.94,
      "layover": 2998.06
    }
  },
  {
    "invoiceNumber": "5e96597a7da9f45dfab994bd",
    "loadNumber": 32,
    "invoiceDate": 1570945606,
    "billTo": {
      "name": "MEDIOT",
      "streetAddress": "529 Madoc Avenue",
      "city": "Cotopaxi",
      "state": " South Carolina",
      "zip": 2735
    },
    "stops": [
      {
        "date": 1475058378,
        "name": "COMTRAK",
        "streetAddress": "292 Richards Street",
        "city": "Wikieup",
        "state": "North Dakota",
        "zip": 5304,
        "type": "DELIVERY"
      },
      {
        "date": 1484577391,
        "name": "ZOINAGE",
        "streetAddress": "428 Lyme Avenue",
        "city": "Waumandee",
        "state": "New Mexico",
        "zip": 4766,
        "type": "PICKUP"
      },
      {
        "date": 1544266675,
        "name": "TERRASYS",
        "streetAddress": "276 Claver Place",
        "city": "Sims",
        "state": "Alaska",
        "zip": 2180,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 3689.22,
      "detention": 2819.19,
      "layover": 2809.53
    }
  },
  {
    "invoiceNumber": "5e96597a8a1c106a4b7e0b7c",
    "loadNumber": 27,
    "invoiceDate": 1560441747,
    "billTo": {
      "name": "BOILICON",
      "streetAddress": "728 Gotham Avenue",
      "city": "Layhill",
      "state": " Kansas",
      "zip": 185
    },
    "stops": [
      {
        "date": 1503305516,
        "name": "INEAR",
        "streetAddress": "328 Charles Place",
        "city": "Byrnedale",
        "state": "California",
        "zip": 5233,
        "type": "PICKUP"
      },
      {
        "date": 1518670725,
        "name": "MANTRO",
        "streetAddress": "875 Madison Place",
        "city": "Crawfordsville",
        "state": "Palau",
        "zip": 4428,
        "type": "PICKUP"
      },
      {
        "date": 1448026020,
        "name": "PORTALIS",
        "streetAddress": "238 Elliott Place",
        "city": "Nelson",
        "state": "Guam",
        "zip": 3357,
        "type": "PICKUP"
      },
      {
        "date": 1440207930,
        "name": "TERSANKI",
        "streetAddress": "209 Nautilus Avenue",
        "city": "Emison",
        "state": "New York",
        "zip": 9120,
        "type": "PICKUP"
      },
      {
        "date": 1504218031,
        "name": "OTHERSIDE",
        "streetAddress": "703 Roosevelt Court",
        "city": "Takilma",
        "state": "Michigan",
        "zip": 5512,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 2420.27,
      "detention": 3102.85,
      "layover": 1171.28
    }
  },
  {
    "invoiceNumber": "5e96597a861a446fd50462ee",
    "loadNumber": 20,
    "invoiceDate": 1530955664,
    "billTo": {
      "name": "WRAPTURE",
      "streetAddress": "133 Ivan Court",
      "city": "Caspar",
      "state": " Montana",
      "zip": 7187
    },
    "stops": [
      {
        "date": 1392159867,
        "name": "ISOSPHERE",
        "streetAddress": "655 Franklin Avenue",
        "city": "Logan",
        "state": "Florida",
        "zip": 1199,
        "type": "DELIVERY"
      },
      {
        "date": 1578663501,
        "name": "MARVANE",
        "streetAddress": "265 Dunne Place",
        "city": "Beaulieu",
        "state": "West Virginia",
        "zip": 1928,
        "type": "DELIVERY"
      },
      {
        "date": 1488605928,
        "name": "ONTALITY",
        "streetAddress": "184 Turnbull Avenue",
        "city": "Kingstowne",
        "state": "Colorado",
        "zip": 3569,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 2658.94,
      "detention": 3955.02,
      "layover": 3650.15
    }
  },
  {
    "invoiceNumber": "5e96597a75612f31df28c401",
    "loadNumber": 33,
    "invoiceDate": 1571859656,
    "billTo": {
      "name": "EXOSTREAM",
      "streetAddress": "883 Pierrepont Street",
      "city": "Caledonia",
      "state": " Northern Mariana Islands",
      "zip": 1211
    },
    "stops": [
      {
        "date": 1570908450,
        "name": "IMANT",
        "streetAddress": "910 Bush Street",
        "city": "Whitestone",
        "state": "Massachusetts",
        "zip": 8592,
        "type": "PICKUP"
      },
      {
        "date": 1439712608,
        "name": "MEDMEX",
        "streetAddress": "320 Bills Place",
        "city": "Rockbridge",
        "state": "District Of Columbia",
        "zip": 5306,
        "type": "PICKUP"
      },
      {
        "date": 1450741314,
        "name": "MARTGO",
        "streetAddress": "672 Stratford Road",
        "city": "Corriganville",
        "state": "Virginia",
        "zip": 5099,
        "type": "PICKUP"
      },
      {
        "date": 1441144579,
        "name": "DARWINIUM",
        "streetAddress": "883 Blake Avenue",
        "city": "Wyano",
        "state": "Delaware",
        "zip": 9515,
        "type": "PICKUP"
      },
      {
        "date": 1477120438,
        "name": "OPTYK",
        "streetAddress": "207 Hampton Avenue",
        "city": "Gambrills",
        "state": "Puerto Rico",
        "zip": 6842,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 1845.72,
      "detention": 1793.47,
      "layover": 1275.35
    }
  },
  {
    "invoiceNumber": "5e96597a6bbfc980648d96d4",
    "loadNumber": 22,
    "invoiceDate": 1578542489,
    "billTo": {
      "name": "SYNTAC",
      "streetAddress": "242 Humboldt Street",
      "city": "Loveland",
      "state": " Rhode Island",
      "zip": 6866
    },
    "stops": [
      {
        "date": 1521987342,
        "name": "MEDALERT",
        "streetAddress": "970 Livonia Avenue",
        "city": "Rodanthe",
        "state": "Georgia",
        "zip": 3624,
        "type": "DELIVERY"
      },
      {
        "date": 1390798313,
        "name": "MEMORA",
        "streetAddress": "707 Bushwick Court",
        "city": "Graball",
        "state": "Nevada",
        "zip": 4963,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 3880.17,
      "detention": 1660.45,
      "layover": 2076.09
    }
  },
  {
    "invoiceNumber": "5e96597a74da7de2f97a6654",
    "loadNumber": 27,
    "invoiceDate": 1542924775,
    "billTo": {
      "name": "COMVOY",
      "streetAddress": "224 Newkirk Placez",
      "city": "Leroy",
      "state": " Arkansas",
      "zip": 6000
    },
    "stops": [
      {
        "date": 1578717332,
        "name": "CRUSTATIA",
        "streetAddress": "253 Manor Court",
        "city": "Worton",
        "state": "Maryland",
        "zip": 5449,
        "type": "DELIVERY"
      },
      {
        "date": 1559761614,
        "name": "GEOSTELE",
        "streetAddress": "259 Rost Place",
        "city": "Balm",
        "state": "Mississippi",
        "zip": 8998,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 2835.98,
      "detention": 3337.12,
      "layover": 2795.67
    }
  },
  {
    "invoiceNumber": "5e96597a22c3bc9da530b63d",
    "loadNumber": 27,
    "invoiceDate": 1497487316,
    "billTo": {
      "name": "TETAK",
      "streetAddress": "776 Boardwalk ",
      "city": "Jackpot",
      "state": " Marshall Islands",
      "zip": 1904
    },
    "stops": [
      {
        "date": 1430460012,
        "name": "VIRVA",
        "streetAddress": "117 Madison Street",
        "city": "Coalmont",
        "state": "Oregon",
        "zip": 2495,
        "type": "PICKUP"
      },
      {
        "date": 1424802563,
        "name": "PROTODYNE",
        "streetAddress": "762 Whitty Lane",
        "city": "Bawcomville",
        "state": "Utah",
        "zip": 3139,
        "type": "DELIVERY"
      },
      {
        "date": 1511260691,
        "name": "AQUAZURE",
        "streetAddress": "141 Poplar Avenue",
        "city": "Carlos",
        "state": "Hawaii",
        "zip": 8382,
        "type": "PICKUP"
      },
      {
        "date": 1555386451,
        "name": "SHADEASE",
        "streetAddress": "703 Knight Court",
        "city": "Norfolk",
        "state": "Nebraska",
        "zip": 6419,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 3812.00,
      "detention": 1629.01,
      "layover": 3928.24
    }
  },
  {
    "invoiceNumber": "5e96597acaebac6d87b62098",
    "loadNumber": 34,
    "invoiceDate": 1491516312,
    "billTo": {
      "name": "MANGLO",
      "streetAddress": "949 Bayview Place",
      "city": "Ballico",
      "state": " Indiana",
      "zip": 2451
    },
    "stops": [
      {
        "date": 1569443383,
        "name": "DEEPENDS",
        "streetAddress": "467 Tompkins Place",
        "city": "Belgreen",
        "state": "Oklahoma",
        "zip": 3680,
        "type": "PICKUP"
      },
      {
        "date": 1403310361,
        "name": "GINKOGENE",
        "streetAddress": "903 Hunterfly Place",
        "city": "Franklin",
        "state": "Arizona",
        "zip": 2520,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 2467.22,
      "detention": 1435.51,
      "layover": 3626.28
    }
  },
  {
    "invoiceNumber": "5e96597a6d059891f013273e",
    "loadNumber": 37,
    "invoiceDate": 1584837598,
    "billTo": {
      "name": "SUPREMIA",
      "streetAddress": "353 Woodside Avenue",
      "city": "Chamizal",
      "state": " Missouri",
      "zip": 6076
    },
    "stops": [
      {
        "date": 1486160270,
        "name": "MUSANPOLY",
        "streetAddress": "547 Strong Place",
        "city": "Elrama",
        "state": "Maine",
        "zip": 916,
        "type": "DELIVERY"
      },
      {
        "date": 1529265474,
        "name": "SATIANCE",
        "streetAddress": "400 Pershing Loop",
        "city": "Neibert",
        "state": "New Hampshire",
        "zip": 2179,
        "type": "PICKUP"
      },
      {
        "date": 1576597977,
        "name": "PHOTOBIN",
        "streetAddress": "147 Vandam Street",
        "city": "Norvelt",
        "state": "Minnesota",
        "zip": 8002,
        "type": "PICKUP"
      },
      {
        "date": 1552544037,
        "name": "HYDROCOM",
        "streetAddress": "844 Junius Street",
        "city": "Grenelefe",
        "state": "Pennsylvania",
        "zip": 498,
        "type": "PICKUP"
      },
      {
        "date": 1581088238,
        "name": "OPPORTECH",
        "streetAddress": "997 Truxton Street",
        "city": "Dotsero",
        "state": "New Jersey",
        "zip": 5486,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 3498.56,
      "detention": 1092.56,
      "layover": 1301.46
    }
  },
  {
    "invoiceNumber": "5e96597ab1c2746c31cd13fe",
    "loadNumber": 32,
    "invoiceDate": 1524858712,
    "billTo": {
      "name": "MENBRAIN",
      "streetAddress": "473 Central Avenue",
      "city": "Hanover",
      "state": " Illinois",
      "zip": 6071
    },
    "stops": [
      {
        "date": 1578353495,
        "name": "EBIDCO",
        "streetAddress": "133 Dumont Avenue",
        "city": "Glendale",
        "state": "Texas",
        "zip": 9509,
        "type": "PICKUP"
      },
      {
        "date": 1473602918,
        "name": "ZOMBOID",
        "streetAddress": "229 Lincoln Avenue",
        "city": "Hasty",
        "state": "Tennessee",
        "zip": 6254,
        "type": "PICKUP"
      },
      {
        "date": 1573378370,
        "name": "ZILLACON",
        "streetAddress": "973 Karweg Place",
        "city": "Dowling",
        "state": "Ohio",
        "zip": 3582,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 2154.21,
      "detention": 2591.11,
      "layover": 1877.53
    }
  },
  {
    "invoiceNumber": "5e96597af7057114d1e48014",
    "loadNumber": 30,
    "invoiceDate": 1494601563,
    "billTo": {
      "name": "NIKUDA",
      "streetAddress": "366 Brooklyn Road",
      "city": "Wright",
      "state": " Iowa",
      "zip": 3654
    },
    "stops": [
      {
        "date": 1433458789,
        "name": "KYAGURU",
        "streetAddress": "302 Homecrest Court",
        "city": "Marysville",
        "state": "Wisconsin",
        "zip": 8796,
        "type": "DELIVERY"
      },
      {
        "date": 1414136434,
        "name": "XPLOR",
        "streetAddress": "468 Vanderveer Street",
        "city": "Oneida",
        "state": "American Samoa",
        "zip": 4375,
        "type": "PICKUP"
      },
      {
        "date": 1408336747,
        "name": "LUNCHPOD",
        "streetAddress": "862 Doscher Street",
        "city": "Idamay",
        "state": "Idaho",
        "zip": 4106,
        "type": "DELIVERY"
      },
      {
        "date": 1391745588,
        "name": "VORATAK",
        "streetAddress": "858 Throop Avenue",
        "city": "Richmond",
        "state": "South Dakota",
        "zip": 2918,
        "type": "DELIVERY"
      },
      {
        "date": 1461552656,
        "name": "TELLIFLY",
        "streetAddress": "297 Clay Street",
        "city": "Williston",
        "state": "Connecticut",
        "zip": 3347,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 1352.92,
      "detention": 1112.01,
      "layover": 1365.19
    }
  },
  {
    "invoiceNumber": "5e96597ad42efb21137f7615",
    "loadNumber": 28,
    "invoiceDate": 1408905043,
    "billTo": {
      "name": "VERAQ",
      "streetAddress": "935 Hornell Loop",
      "city": "Snyderville",
      "state": " Washington",
      "zip": 2987
    },
    "stops": [
      {
        "date": 1516917915,
        "name": "ELECTONIC",
        "streetAddress": "847 Diamond Street",
        "city": "Homeland",
        "state": "Alabama",
        "zip": 3289,
        "type": "PICKUP"
      },
      {
        "date": 1431589328,
        "name": "ZENSOR",
        "streetAddress": "247 Olive Street",
        "city": "Manila",
        "state": "Wyoming",
        "zip": 4980,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 1905.25,
      "detention": 2333.77,
      "layover": 3224.11
    }
  },
  {
    "invoiceNumber": "5e96597a94fddbac0ecc6262",
    "loadNumber": 35,
    "invoiceDate": 1466940269,
    "billTo": {
      "name": "ZEPITOPE",
      "streetAddress": "588 Monitor Street",
      "city": "Wiscon",
      "state": " Louisiana",
      "zip": 3998
    },
    "stops": [
      {
        "date": 1503421130,
        "name": "KIDGREASE",
        "streetAddress": "890 Centre Street",
        "city": "Cressey",
        "state": "Vermont",
        "zip": 6993,
        "type": "PICKUP"
      },
      {
        "date": 1568112364,
        "name": "DIGIPRINT",
        "streetAddress": "523 Harman Street",
        "city": "Hessville",
        "state": "North Carolina",
        "zip": 582,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 2602.68,
      "detention": 2930.68,
      "layover": 3537.84
    }
  },
  {
    "invoiceNumber": "5e96597acf6f5422dac3bdd3",
    "loadNumber": 35,
    "invoiceDate": 1559786359,
    "billTo": {
      "name": "ZYTRAX",
      "streetAddress": "826 Whitwell Place",
      "city": "Eastmont",
      "state": " Federated States Of Micronesia",
      "zip": 4977
    },
    "stops": [
      {
        "date": 1405613941,
        "name": "FROSNEX",
        "streetAddress": "941 High Street",
        "city": "Shrewsbury",
        "state": "Kentucky",
        "zip": 1180,
        "type": "DELIVERY"
      },
      {
        "date": 1458193575,
        "name": "AVIT",
        "streetAddress": "767 Brightwater Court",
        "city": "Cliffside",
        "state": "South Carolina",
        "zip": 7423,
        "type": "DELIVERY"
      },
      {
        "date": 1509916340,
        "name": "EMERGENT",
        "streetAddress": "745 Judge Street",
        "city": "Sabillasville",
        "state": "North Dakota",
        "zip": 2657,
        "type": "PICKUP"
      },
      {
        "date": 1521615800,
        "name": "FISHLAND",
        "streetAddress": "612 Brighton Avenue",
        "city": "Woodburn",
        "state": "New Mexico",
        "zip": 1050,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 2883.27,
      "detention": 1813.58,
      "layover": 3751.66
    }
  },
  {
    "invoiceNumber": "5e96597ae9cd03d6a6385c81",
    "loadNumber": 36,
    "invoiceDate": 1421812994,
    "billTo": {
      "name": "GEEKOSIS",
      "streetAddress": "345 Danforth Street",
      "city": "Chloride",
      "state": " Alaska",
      "zip": 612
    },
    "stops": [
      {
        "date": 1433017219,
        "name": "INQUALA",
        "streetAddress": "326 Pulaski Street",
        "city": "Marienthal",
        "state": "Kansas",
        "zip": 4644,
        "type": "DELIVERY"
      },
      {
        "date": 1442369192,
        "name": "KOG",
        "streetAddress": "341 Poly Place",
        "city": "Topaz",
        "state": "California",
        "zip": 766,
        "type": "DELIVERY"
      },
      {
        "date": 1478314978,
        "name": "CONCILITY",
        "streetAddress": "101 Meserole Street",
        "city": "Mahtowa",
        "state": "Palau",
        "zip": 4994,
        "type": "DELIVERY"
      },
      {
        "date": 1469166866,
        "name": "RODEOCEAN",
        "streetAddress": "535 Hinckley Place",
        "city": "Deputy",
        "state": "Guam",
        "zip": 9892,
        "type": "PICKUP"
      },
      {
        "date": 1406703437,
        "name": "OMNIGOG",
        "streetAddress": "247 Lawrence Street",
        "city": "Floris",
        "state": "New York",
        "zip": 2442,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 1029.47,
      "detention": 1638.76,
      "layover": 2673.33
    }
  },
  {
    "invoiceNumber": "5e96597ae0dadacad08ca024",
    "loadNumber": 30,
    "invoiceDate": 1438702529,
    "billTo": {
      "name": "EXTRAWEAR",
      "streetAddress": "503 Hutchinson Court",
      "city": "Dorneyville",
      "state": " Michigan",
      "zip": 6285
    },
    "stops": [
      {
        "date": 1513320078,
        "name": "PATHWAYS",
        "streetAddress": "162 Cheever Place",
        "city": "Brantleyville",
        "state": "Montana",
        "zip": 2948,
        "type": "PICKUP"
      },
      {
        "date": 1552183686,
        "name": "FILODYNE",
        "streetAddress": "817 Chestnut Street",
        "city": "Brethren",
        "state": "Florida",
        "zip": 2197,
        "type": "PICKUP"
      },
      {
        "date": 1547761332,
        "name": "COMVENE",
        "streetAddress": "807 Fleet Place",
        "city": "Riceville",
        "state": "West Virginia",
        "zip": 2672,
        "type": "PICKUP"
      },
      {
        "date": 1476445341,
        "name": "SCENTY",
        "streetAddress": "868 Beacon Court",
        "city": "Denio",
        "state": "Colorado",
        "zip": 8908,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 1141.05,
      "detention": 3110.52,
      "layover": 2668.32
    }
  },
  {
    "invoiceNumber": "5e96597a70e8e0cd721f6f07",
    "loadNumber": 36,
    "invoiceDate": 1493868522,
    "billTo": {
      "name": "CORECOM",
      "streetAddress": "973 Conway Street",
      "city": "Gilmore",
      "state": " Northern Mariana Islands",
      "zip": 1294
    },
    "stops": [
      {
        "date": 1401561204,
        "name": "RETRACK",
        "streetAddress": "534 Shale Street",
        "city": "Torboy",
        "state": "Massachusetts",
        "zip": 1066,
        "type": "DELIVERY"
      },
      {
        "date": 1439193183,
        "name": "DIGIFAD",
        "streetAddress": "886 Doughty Street",
        "city": "Waterford",
        "state": "District Of Columbia",
        "zip": 5526,
        "type": "DELIVERY"
      },
      {
        "date": 1513811020,
        "name": "SULTRAXIN",
        "streetAddress": "401 Agate Court",
        "city": "Garberville",
        "state": "Virginia",
        "zip": 2210,
        "type": "DELIVERY"
      },
      {
        "date": 1425150564,
        "name": "FLOTONIC",
        "streetAddress": "434 Doone Court",
        "city": "Allamuchy",
        "state": "Delaware",
        "zip": 7361,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 1064.90,
      "detention": 3077.16,
      "layover": 3239.29
    }
  },
  {
    "invoiceNumber": "5e96597a0abe93ec249aff4b",
    "loadNumber": 22,
    "invoiceDate": 1467763939,
    "billTo": {
      "name": "BARKARAMA",
      "streetAddress": "127 Seabring Street",
      "city": "Lydia",
      "state": " Puerto Rico",
      "zip": 1056
    },
    "stops": [
      {
        "date": 1506271715,
        "name": "RODEOLOGY",
        "streetAddress": "935 Herbert Street",
        "city": "Rew",
        "state": "Rhode Island",
        "zip": 7740,
        "type": "PICKUP"
      },
      {
        "date": 1463244026,
        "name": "RAMEON",
        "streetAddress": "738 Congress Street",
        "city": "Madrid",
        "state": "Georgia",
        "zip": 2776,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 3310.65,
      "detention": 3979.64,
      "layover": 2817.10
    }
  },
  {
    "invoiceNumber": "5e96597a50f756c18071b048",
    "loadNumber": 38,
    "invoiceDate": 1577258960,
    "billTo": {
      "name": "FANFARE",
      "streetAddress": "524 Montrose Avenue",
      "city": "Tecolotito",
      "state": " Nevada",
      "zip": 566
    },
    "stops": [
      {
        "date": 1471710503,
        "name": "ACRODANCE",
        "streetAddress": "442 Logan Street",
        "city": "Choctaw",
        "state": "Arkansas",
        "zip": 4954,
        "type": "DELIVERY"
      },
      {
        "date": 1489693609,
        "name": "AQUACINE",
        "streetAddress": "193 Jay Street",
        "city": "Greensburg",
        "state": "Maryland",
        "zip": 336,
        "type": "PICKUP"
      },
      {
        "date": 1525740617,
        "name": "SLOFAST",
        "streetAddress": "901 Sackman Street",
        "city": "Bennett",
        "state": "Mississippi",
        "zip": 3899,
        "type": "DELIVERY"
      },
      {
        "date": 1514530324,
        "name": "STEELTAB",
        "streetAddress": "485 Corbin Place",
        "city": "Tooleville",
        "state": "Marshall Islands",
        "zip": 8457,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 2541.40,
      "detention": 2695.18,
      "layover": 1210.98
    }
  },
  {
    "invoiceNumber": "5e96597acfd8b8695059202a",
    "loadNumber": 40,
    "invoiceDate": 1533385064,
    "billTo": {
      "name": "FLYBOYZ",
      "streetAddress": "443 Schweikerts Walk",
      "city": "Kraemer",
      "state": " Oregon",
      "zip": 680
    },
    "stops": [
      {
        "date": 1474254126,
        "name": "TERAPRENE",
        "streetAddress": "563 Crystal Street",
        "city": "Holcombe",
        "state": "Utah",
        "zip": 8381,
        "type": "DELIVERY"
      },
      {
        "date": 1456657095,
        "name": "ENVIRE",
        "streetAddress": "443 Grattan Street",
        "city": "Maury",
        "state": "Hawaii",
        "zip": 2016,
        "type": "PICKUP"
      },
      {
        "date": 1548599233,
        "name": "GEEKKO",
        "streetAddress": "891 Reeve Place",
        "city": "Slovan",
        "state": "Nebraska",
        "zip": 4647,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 1175.91,
      "detention": 3682.63,
      "layover": 2505.52
    }
  },
  {
    "invoiceNumber": "5e96597af9d737ef4ec3dc73",
    "loadNumber": 24,
    "invoiceDate": 1528589902,
    "billTo": {
      "name": "JASPER",
      "streetAddress": "872 Stillwell Place",
      "city": "Craig",
      "state": " Indiana",
      "zip": 2507
    },
    "stops": [
      {
        "date": 1542030536,
        "name": "ZORK",
        "streetAddress": "450 Drew Street",
        "city": "Calverton",
        "state": "Oklahoma",
        "zip": 2371,
        "type": "DELIVERY"
      },
      {
        "date": 1491457109,
        "name": "ENERSAVE",
        "streetAddress": "943 Forbell Street",
        "city": "Bynum",
        "state": "Arizona",
        "zip": 7507,
        "type": "PICKUP"
      },
      {
        "date": 1412024445,
        "name": "MAXEMIA",
        "streetAddress": "829 Cumberland Street",
        "city": "Bridgetown",
        "state": "Missouri",
        "zip": 9877,
        "type": "PICKUP"
      },
      {
        "date": 1478162034,
        "name": "ISODRIVE",
        "streetAddress": "635 Merit Court",
        "city": "Zarephath",
        "state": "Maine",
        "zip": 8057,
        "type": "PICKUP"
      },
      {
        "date": 1581133385,
        "name": "MANGELICA",
        "streetAddress": "292 Bushwick Place",
        "city": "Eden",
        "state": "New Hampshire",
        "zip": 7985,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 2176.21,
      "detention": 2329.46,
      "layover": 1830.57
    }
  },
  {
    "invoiceNumber": "5e96597a2a3dbcd5fa800f9b",
    "loadNumber": 37,
    "invoiceDate": 1395478611,
    "billTo": {
      "name": "VENDBLEND",
      "streetAddress": "121 Independence Avenue",
      "city": "Joppa",
      "state": " Minnesota",
      "zip": 2293
    },
    "stops": [
      {
        "date": 1441064925,
        "name": "PAPRICUT",
        "streetAddress": "946 Just Court",
        "city": "Duryea",
        "state": "Pennsylvania",
        "zip": 6263,
        "type": "DELIVERY"
      },
      {
        "date": 1442429212,
        "name": "PARLEYNET",
        "streetAddress": "610 Village Court",
        "city": "Wattsville",
        "state": "New Jersey",
        "zip": 1240,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 1557.76,
      "detention": 3160.68,
      "layover": 3557.00
    }
  },
  {
    "invoiceNumber": "5e96597ae0218c4c3fec59c8",
    "loadNumber": 35,
    "invoiceDate": 1547805716,
    "billTo": {
      "name": "UNIA",
      "streetAddress": "404 Green Street",
      "city": "Orick",
      "state": " Illinois",
      "zip": 3086
    },
    "stops": [
      {
        "date": 1421387919,
        "name": "OPTICON",
        "streetAddress": "339 Berriman Street",
        "city": "Trail",
        "state": "Texas",
        "zip": 5329,
        "type": "PICKUP"
      },
      {
        "date": 1508155316,
        "name": "KENEGY",
        "streetAddress": "669 Wilson Avenue",
        "city": "Shindler",
        "state": "Tennessee",
        "zip": 2526,
        "type": "DELIVERY"
      },
      {
        "date": 1536654356,
        "name": "QOT",
        "streetAddress": "806 Hoyt Street",
        "city": "Heil",
        "state": "Ohio",
        "zip": 3624,
        "type": "DELIVERY"
      },
      {
        "date": 1399402031,
        "name": "ASSISTIA",
        "streetAddress": "449 McKibbin Street",
        "city": "Cobbtown",
        "state": "Iowa",
        "zip": 4110,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 3419.43,
      "detention": 1314.18,
      "layover": 2651.49
    }
  },
  {
    "invoiceNumber": "5e96597ab9ab6f608b828747",
    "loadNumber": 39,
    "invoiceDate": 1574790159,
    "billTo": {
      "name": "TECHMANIA",
      "streetAddress": "260 Argyle Road",
      "city": "Trona",
      "state": " Wisconsin",
      "zip": 8286
    },
    "stops": [
      {
        "date": 1511740146,
        "name": "ZILLACOM",
        "streetAddress": "879 Coleman Street",
        "city": "Finderne",
        "state": "American Samoa",
        "zip": 4697,
        "type": "PICKUP"
      },
      {
        "date": 1440792216,
        "name": "RODEOMAD",
        "streetAddress": "998 Trucklemans Lane",
        "city": "Waverly",
        "state": "Idaho",
        "zip": 4172,
        "type": "PICKUP"
      },
      {
        "date": 1499175518,
        "name": "STREZZO",
        "streetAddress": "831 Ryder Avenue",
        "city": "Glenbrook",
        "state": "South Dakota",
        "zip": 1212,
        "type": "DELIVERY"
      },
      {
        "date": 1400988413,
        "name": "XOGGLE",
        "streetAddress": "471 Willow Street",
        "city": "Seymour",
        "state": "Connecticut",
        "zip": 9386,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 1242.44,
      "detention": 1859.22,
      "layover": 1664.34
    }
  },
  {
    "invoiceNumber": "5e96597a7dbc1e99d7b417cb",
    "loadNumber": 29,
    "invoiceDate": 1561146053,
    "billTo": {
      "name": "TWIIST",
      "streetAddress": "893 River Street",
      "city": "Nord",
      "state": " Washington",
      "zip": 1247
    },
    "stops": [
      {
        "date": 1504388138,
        "name": "CENTREXIN",
        "streetAddress": "727 Bay Avenue",
        "city": "Linwood",
        "state": "Alabama",
        "zip": 8397,
        "type": "PICKUP"
      },
      {
        "date": 1532668356,
        "name": "QUILCH",
        "streetAddress": "408 Harkness Avenue",
        "city": "Vowinckel",
        "state": "Wyoming",
        "zip": 451,
        "type": "DELIVERY"
      },
      {
        "date": 1579657229,
        "name": "COSMOSIS",
        "streetAddress": "374 Seacoast Terrace",
        "city": "Kempton",
        "state": "Louisiana",
        "zip": 6035,
        "type": "DELIVERY"
      },
      {
        "date": 1475164795,
        "name": "SCENTRIC",
        "streetAddress": "810 Ryerson Street",
        "city": "Trucksville",
        "state": "Vermont",
        "zip": 2883,
        "type": "DELIVERY"
      },
      {
        "date": 1570487003,
        "name": "SURELOGIC",
        "streetAddress": "854 Richardson Street",
        "city": "Sunbury",
        "state": "North Carolina",
        "zip": 8153,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 1898.58,
      "detention": 2348.16,
      "layover": 2180.18
    }
  },
  {
    "invoiceNumber": "5e96597a3c90b1e595857c87",
    "loadNumber": 35,
    "invoiceDate": 1439707919,
    "billTo": {
      "name": "APPLIDECK",
      "streetAddress": "943 Kane Place",
      "city": "Deercroft",
      "state": " Federated States Of Micronesia",
      "zip": 6153
    },
    "stops": [
      {
        "date": 1409423251,
        "name": "JUNIPOOR",
        "streetAddress": "150 Kenmore Court",
        "city": "Greenbackville",
        "state": "Kentucky",
        "zip": 6931,
        "type": "PICKUP"
      },
      {
        "date": 1448438068,
        "name": "PHARMACON",
        "streetAddress": "105 Driggs Avenue",
        "city": "Catherine",
        "state": "South Carolina",
        "zip": 3241,
        "type": "DELIVERY"
      },
      {
        "date": 1512326610,
        "name": "ZOLARITY",
        "streetAddress": "499 Canarsie Road",
        "city": "Northridge",
        "state": "North Dakota",
        "zip": 3472,
        "type": "DELIVERY"
      },
      {
        "date": 1413254960,
        "name": "ZYPLE",
        "streetAddress": "102 Abbey Court",
        "city": "Celeryville",
        "state": "New Mexico",
        "zip": 2557,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 1305.02,
      "detention": 1532.37,
      "layover": 2620.97
    }
  },
  {
    "invoiceNumber": "5e96597a99ce86a239464a9e",
    "loadNumber": 30,
    "invoiceDate": 1506491775,
    "billTo": {
      "name": "COMBOGEN",
      "streetAddress": "167 Nelson Street",
      "city": "Coyote",
      "state": " Alaska",
      "zip": 8195
    },
    "stops": [
      {
        "date": 1454630030,
        "name": "ISOLOGICS",
        "streetAddress": "791 Ridgewood Place",
        "city": "Masthope",
        "state": "Kansas",
        "zip": 8785,
        "type": "DELIVERY"
      },
      {
        "date": 1570200943,
        "name": "EXPOSA",
        "streetAddress": "789 Creamer Street",
        "city": "Marenisco",
        "state": "California",
        "zip": 6991,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 1518.43,
      "detention": 3939.02,
      "layover": 2128.90
    }
  },
  {
    "invoiceNumber": "5e96597ae42fd097f83b70ac",
    "loadNumber": 40,
    "invoiceDate": 1452835525,
    "billTo": {
      "name": "ZERBINA",
      "streetAddress": "471 Manhattan Court",
      "city": "Ticonderoga",
      "state": " Palau",
      "zip": 3012
    },
    "stops": [
      {
        "date": 1496345425,
        "name": "CIRCUM",
        "streetAddress": "105 Vernon Avenue",
        "city": "Manitou",
        "state": "Guam",
        "zip": 6064,
        "type": "PICKUP"
      },
      {
        "date": 1493436533,
        "name": "GROK",
        "streetAddress": "245 Louisiana Avenue",
        "city": "Dunlo",
        "state": "New York",
        "zip": 3532,
        "type": "DELIVERY"
      },
      {
        "date": 1522188481,
        "name": "OZEAN",
        "streetAddress": "910 Nassau Avenue",
        "city": "Chesapeake",
        "state": "Michigan",
        "zip": 1674,
        "type": "DELIVERY"
      },
      {
        "date": 1420249770,
        "name": "TALENDULA",
        "streetAddress": "204 Irvington Place",
        "city": "Deseret",
        "state": "Montana",
        "zip": 3011,
        "type": "DELIVERY"
      },
      {
        "date": 1486919219,
        "name": "ZILLA",
        "streetAddress": "543 Suydam Place",
        "city": "Waukeenah",
        "state": "Florida",
        "zip": 9528,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 2293.66,
      "detention": 3970.46,
      "layover": 3276.93
    }
  },
  {
    "invoiceNumber": "5e96597ae4fd243026d02296",
    "loadNumber": 32,
    "invoiceDate": 1475770846,
    "billTo": {
      "name": "JIMBIES",
      "streetAddress": "698 Thomas Street",
      "city": "Groveville",
      "state": " West Virginia",
      "zip": 4506
    },
    "stops": [
      {
        "date": 1551469892,
        "name": "BULLJUICE",
        "streetAddress": "782 Amity Street",
        "city": "Falmouth",
        "state": "Colorado",
        "zip": 5664,
        "type": "PICKUP"
      },
      {
        "date": 1493784298,
        "name": "QUIZKA",
        "streetAddress": "452 Ebony Court",
        "city": "Fingerville",
        "state": "Northern Mariana Islands",
        "zip": 6507,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 1276.79,
      "detention": 3627.66,
      "layover": 3936.31
    }
  },
  {
    "invoiceNumber": "5e96597a181dabee8201025e",
    "loadNumber": 30,
    "invoiceDate": 1476072290,
    "billTo": {
      "name": "TASMANIA",
      "streetAddress": "677 Kane Street",
      "city": "Mooresburg",
      "state": " Massachusetts",
      "zip": 3535
    },
    "stops": [
      {
        "date": 1431000093,
        "name": "ENTROFLEX",
        "streetAddress": "772 Beverley Road",
        "city": "Orin",
        "state": "District Of Columbia",
        "zip": 8421,
        "type": "DELIVERY"
      },
      {
        "date": 1581655515,
        "name": "CENTICE",
        "streetAddress": "415 Channel Avenue",
        "city": "Warren",
        "state": "Virginia",
        "zip": 7763,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 2811.32,
      "detention": 2248.70,
      "layover": 3499.97
    }
  },
  {
    "invoiceNumber": "5e96597adcd3e5e0c5d27bc4",
    "loadNumber": 26,
    "invoiceDate": 1552016582,
    "billTo": {
      "name": "ROOFORIA",
      "streetAddress": "667 Willmohr Street",
      "city": "Robinette",
      "state": " Delaware",
      "zip": 9573
    },
    "stops": [
      {
        "date": 1538549891,
        "name": "AMRIL",
        "streetAddress": "633 Vanderbilt Avenue",
        "city": "Frystown",
        "state": "Puerto Rico",
        "zip": 178,
        "type": "PICKUP"
      },
      {
        "date": 1543539569,
        "name": "COMCUBINE",
        "streetAddress": "695 Bergen Court",
        "city": "Whitehaven",
        "state": "Rhode Island",
        "zip": 3420,
        "type": "PICKUP"
      },
      {
        "date": 1424107528,
        "name": "CANDECOR",
        "streetAddress": "489 Montana Place",
        "city": "Temperanceville",
        "state": "Georgia",
        "zip": 9860,
        "type": "DELIVERY"
      },
      {
        "date": 1564773018,
        "name": "ZINCA",
        "streetAddress": "781 Oxford Walk",
        "city": "Caron",
        "state": "Nevada",
        "zip": 5842,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 1296.44,
      "detention": 2033.27,
      "layover": 2172.88
    }
  },
  {
    "invoiceNumber": "5e96597a946b2914de013c9b",
    "loadNumber": 33,
    "invoiceDate": 1434734362,
    "billTo": {
      "name": "IDETICA",
      "streetAddress": "679 Bayview Avenue",
      "city": "Hoehne",
      "state": " Arkansas",
      "zip": 7667
    },
    "stops": [
      {
        "date": 1575373203,
        "name": "NSPIRE",
        "streetAddress": "586 Cherry Street",
        "city": "Fairforest",
        "state": "Maryland",
        "zip": 2842,
        "type": "DELIVERY"
      },
      {
        "date": 1577702734,
        "name": "INCUBUS",
        "streetAddress": "670 Lefferts Avenue",
        "city": "Salunga",
        "state": "Mississippi",
        "zip": 9074,
        "type": "PICKUP"
      },
      {
        "date": 1530663935,
        "name": "SULTRAX",
        "streetAddress": "772 Bethel Loop",
        "city": "Defiance",
        "state": "Marshall Islands",
        "zip": 2835,
        "type": "PICKUP"
      },
      {
        "date": 1404813793,
        "name": "ENJOLA",
        "streetAddress": "121 Nova Court",
        "city": "Maplewood",
        "state": "Oregon",
        "zip": 5979,
        "type": "DELIVERY"
      },
      {
        "date": 1471611799,
        "name": "ARCTIQ",
        "streetAddress": "136 Varick Street",
        "city": "Sardis",
        "state": "Utah",
        "zip": 719,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 3815.14,
      "detention": 3832.28,
      "layover": 2369.60
    }
  },
  {
    "invoiceNumber": "5e96597a2c4dd43840b6b5c2",
    "loadNumber": 23,
    "invoiceDate": 1558759928,
    "billTo": {
      "name": "ULTRIMAX",
      "streetAddress": "538 Dunne Court",
      "city": "Englevale",
      "state": " Hawaii",
      "zip": 5248
    },
    "stops": [
      {
        "date": 1498183153,
        "name": "CORPORANA",
        "streetAddress": "601 Norman Avenue",
        "city": "Innsbrook",
        "state": "Nebraska",
        "zip": 3809,
        "type": "PICKUP"
      },
      {
        "date": 1509921030,
        "name": "ZYTREX",
        "streetAddress": "631 Boerum Street",
        "city": "Martell",
        "state": "Indiana",
        "zip": 9851,
        "type": "DELIVERY"
      },
      {
        "date": 1453813646,
        "name": "DRAGBOT",
        "streetAddress": "463 Cozine Avenue",
        "city": "Kerby",
        "state": "Oklahoma",
        "zip": 1917,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 1245.66,
      "detention": 1510.49,
      "layover": 1855.04
    }
  },
  {
    "invoiceNumber": "5e96597a995fd1bf124822e4",
    "loadNumber": 39,
    "invoiceDate": 1391381605,
    "billTo": {
      "name": "ISOSWITCH",
      "streetAddress": "553 Arlington Place",
      "city": "Movico",
      "state": " Arizona",
      "zip": 3547
    },
    "stops": [
      {
        "date": 1442484813,
        "name": "STEELFAB",
        "streetAddress": "157 Virginia Place",
        "city": "Murillo",
        "state": "Missouri",
        "zip": 5609,
        "type": "PICKUP"
      },
      {
        "date": 1508768541,
        "name": "QUADEEBO",
        "streetAddress": "822 Stewart Street",
        "city": "Blue",
        "state": "Maine",
        "zip": 7451,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 1601.97,
      "detention": 2513.42,
      "layover": 2441.83
    }
  },
  {
    "invoiceNumber": "5e96597a2f7cac7160b0328f",
    "loadNumber": 37,
    "invoiceDate": 1532797682,
    "billTo": {
      "name": "ANDERSHUN",
      "streetAddress": "114 Taylor Street",
      "city": "Reno",
      "state": " New Hampshire",
      "zip": 2399
    },
    "stops": [
      {
        "date": 1554739393,
        "name": "PROSELY",
        "streetAddress": "696 Huron Street",
        "city": "Urie",
        "state": "Minnesota",
        "zip": 2894,
        "type": "PICKUP"
      },
      {
        "date": 1558319803,
        "name": "DUOFLEX",
        "streetAddress": "740 Monroe Street",
        "city": "Deltaville",
        "state": "Pennsylvania",
        "zip": 9784,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 2164.95,
      "detention": 1819.87,
      "layover": 1373.76
    }
  },
  {
    "invoiceNumber": "5e96597a97ba717926ee0f34",
    "loadNumber": 32,
    "invoiceDate": 1510706245,
    "billTo": {
      "name": "DYMI",
      "streetAddress": "120 Hawthorne Street",
      "city": "Mathews",
      "state": " New Jersey",
      "zip": 4657
    },
    "stops": [
      {
        "date": 1410979893,
        "name": "SONGLINES",
        "streetAddress": "744 Albemarle Road",
        "city": "Rosine",
        "state": "Illinois",
        "zip": 3270,
        "type": "DELIVERY"
      },
      {
        "date": 1411178446,
        "name": "MARKETOID",
        "streetAddress": "583 Powell Street",
        "city": "Nogal",
        "state": "Texas",
        "zip": 6042,
        "type": "PICKUP"
      },
      {
        "date": 1554393807,
        "name": "TUBESYS",
        "streetAddress": "707 Bassett Avenue",
        "city": "Walton",
        "state": "Tennessee",
        "zip": 9171,
        "type": "DELIVERY"
      },
      {
        "date": 1426823309,
        "name": "VOIPA",
        "streetAddress": "170 Gerry Street",
        "city": "Russellville",
        "state": "Ohio",
        "zip": 2708,
        "type": "PICKUP"
      },
      {
        "date": 1582788398,
        "name": "RECOGNIA",
        "streetAddress": "532 Dinsmore Place",
        "city": "Monument",
        "state": "Iowa",
        "zip": 8105,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 2998.94,
      "detention": 2266.46,
      "layover": 3290.15
    }
  },
  {
    "invoiceNumber": "5e96597a15599dc6f664a214",
    "loadNumber": 22,
    "invoiceDate": 1562445541,
    "billTo": {
      "name": "IMPERIUM",
      "streetAddress": "645 Royce Place",
      "city": "Bath",
      "state": " Wisconsin",
      "zip": 9747
    },
    "stops": [
      {
        "date": 1433895930,
        "name": "NIMON",
        "streetAddress": "907 Lenox Road",
        "city": "Taft",
        "state": "American Samoa",
        "zip": 5581,
        "type": "DELIVERY"
      },
      {
        "date": 1568377987,
        "name": "VOLAX",
        "streetAddress": "195 Otsego Street",
        "city": "Harrison",
        "state": "Idaho",
        "zip": 1181,
        "type": "PICKUP"
      },
      {
        "date": 1431542352,
        "name": "ZBOO",
        "streetAddress": "458 Oakland Place",
        "city": "Ypsilanti",
        "state": "South Dakota",
        "zip": 5149,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 1052.47,
      "detention": 3700.65,
      "layover": 2464.99
    }
  },
  {
    "invoiceNumber": "5e96597a743a86222a6c1023",
    "loadNumber": 30,
    "invoiceDate": 1547600800,
    "billTo": {
      "name": "AUTOGRATE",
      "streetAddress": "861 Rochester Avenue",
      "city": "Chesterfield",
      "state": " Connecticut",
      "zip": 5005
    },
    "stops": [
      {
        "date": 1577220922,
        "name": "ANIVET",
        "streetAddress": "637 Boynton Place",
        "city": "Northchase",
        "state": "Washington",
        "zip": 8018,
        "type": "PICKUP"
      },
      {
        "date": 1476038566,
        "name": "NITRACYR",
        "streetAddress": "777 Dikeman Street",
        "city": "Bowie",
        "state": "Alabama",
        "zip": 2316,
        "type": "DELIVERY"
      },
      {
        "date": 1559709518,
        "name": "CINCYR",
        "streetAddress": "299 Herkimer Court",
        "city": "Nash",
        "state": "Wyoming",
        "zip": 4959,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 3722.85,
      "detention": 3457.43,
      "layover": 2876.92
    }
  },
  {
    "invoiceNumber": "5e96597a41a38980f56c6306",
    "loadNumber": 24,
    "invoiceDate": 1447611655,
    "billTo": {
      "name": "SIGNITY",
      "streetAddress": "558 Varet Street",
      "city": "Loyalhanna",
      "state": " Louisiana",
      "zip": 7045
    },
    "stops": [
      {
        "date": 1579792404,
        "name": "METROZ",
        "streetAddress": "691 Caton Place",
        "city": "Lorraine",
        "state": "Vermont",
        "zip": 9171,
        "type": "DELIVERY"
      },
      {
        "date": 1566103659,
        "name": "GEOFORM",
        "streetAddress": "528 Russell Street",
        "city": "Benson",
        "state": "North Carolina",
        "zip": 671,
        "type": "PICKUP"
      },
      {
        "date": 1393412354,
        "name": "EARTHPLEX",
        "streetAddress": "180 Bancroft Place",
        "city": "Sexton",
        "state": "Federated States Of Micronesia",
        "zip": 540,
        "type": "DELIVERY"
      },
      {
        "date": 1426775964,
        "name": "ZIDOX",
        "streetAddress": "800 Chester Court",
        "city": "Emory",
        "state": "Kentucky",
        "zip": 411,
        "type": "PICKUP"
      },
      {
        "date": 1449348130,
        "name": "ZYTREK",
        "streetAddress": "249 Melba Court",
        "city": "Rivers",
        "state": "South Carolina",
        "zip": 4721,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 2520.65,
      "detention": 1919.52,
      "layover": 2310.90
    }
  },
  {
    "invoiceNumber": "5e96597affd07f71be133dda",
    "loadNumber": 30,
    "invoiceDate": 1537239885,
    "billTo": {
      "name": "INTRAWEAR",
      "streetAddress": "340 Knapp Street",
      "city": "Allensworth",
      "state": " North Dakota",
      "zip": 8058
    },
    "stops": [
      {
        "date": 1510273347,
        "name": "EZENT",
        "streetAddress": "703 Jackson Street",
        "city": "Shelby",
        "state": "New Mexico",
        "zip": 6060,
        "type": "DELIVERY"
      },
      {
        "date": 1550076749,
        "name": "XTH",
        "streetAddress": "439 Dover Street",
        "city": "Roderfield",
        "state": "Alaska",
        "zip": 5540,
        "type": "PICKUP"
      },
      {
        "date": 1493191477,
        "name": "TELEPARK",
        "streetAddress": "506 Schermerhorn Street",
        "city": "Onton",
        "state": "Kansas",
        "zip": 1297,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 3003.92,
      "detention": 3117.42,
      "layover": 3503.56
    }
  },
  {
    "invoiceNumber": "5e96597a331ef17965947a16",
    "loadNumber": 38,
    "invoiceDate": 1440612043,
    "billTo": {
      "name": "DANCITY",
      "streetAddress": "988 Garland Court",
      "city": "Jessie",
      "state": " California",
      "zip": 6602
    },
    "stops": [
      {
        "date": 1562516143,
        "name": "GENMEX",
        "streetAddress": "745 Bowery Street",
        "city": "Summertown",
        "state": "Palau",
        "zip": 9711,
        "type": "PICKUP"
      },
      {
        "date": 1536680910,
        "name": "SYBIXTEX",
        "streetAddress": "662 Christopher Avenue",
        "city": "Belleview",
        "state": "Guam",
        "zip": 6007,
        "type": "PICKUP"
      },
      {
        "date": 1505322078,
        "name": "ISOLOGIX",
        "streetAddress": "375 Middleton Street",
        "city": "Cazadero",
        "state": "New York",
        "zip": 7300,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 3795.57,
      "detention": 2978.48,
      "layover": 2806.43
    }
  },
  {
    "invoiceNumber": "5e96597a820e63b1967f2fb1",
    "loadNumber": 35,
    "invoiceDate": 1455723491,
    "billTo": {
      "name": "LUDAK",
      "streetAddress": "901 Tapscott Avenue",
      "city": "Hatteras",
      "state": " Michigan",
      "zip": 9748
    },
    "stops": [
      {
        "date": 1391117614,
        "name": "MANUFACT",
        "streetAddress": "388 Marconi Place",
        "city": "Caberfae",
        "state": "Montana",
        "zip": 8993,
        "type": "DELIVERY"
      },
      {
        "date": 1434510903,
        "name": "HOUSEDOWN",
        "streetAddress": "568 Pooles Lane",
        "city": "Westboro",
        "state": "Florida",
        "zip": 9358,
        "type": "DELIVERY"
      },
      {
        "date": 1531769103,
        "name": "NAVIR",
        "streetAddress": "915 Clermont Avenue",
        "city": "Nettie",
        "state": "West Virginia",
        "zip": 812,
        "type": "PICKUP"
      },
      {
        "date": 1457347902,
        "name": "PRINTSPAN",
        "streetAddress": "340 Tech Place",
        "city": "Kidder",
        "state": "Colorado",
        "zip": 1120,
        "type": "DELIVERY"
      },
      {
        "date": 1477266413,
        "name": "BITTOR",
        "streetAddress": "637 Bevy Court",
        "city": "Hamilton",
        "state": "Northern Mariana Islands",
        "zip": 1421,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 2990.49,
      "detention": 2064.04,
      "layover": 1337.37
    }
  },
  {
    "invoiceNumber": "5e96597ad5a6992dbb5b1d2d",
    "loadNumber": 38,
    "invoiceDate": 1515443037,
    "billTo": {
      "name": "EARGO",
      "streetAddress": "305 Landis Court",
      "city": "Wanship",
      "state": " Massachusetts",
      "zip": 3468
    },
    "stops": [
      {
        "date": 1433505533,
        "name": "SKYBOLD",
        "streetAddress": "318 Crescent Street",
        "city": "Kirk",
        "state": "District Of Columbia",
        "zip": 9811,
        "type": "PICKUP"
      },
      {
        "date": 1420356290,
        "name": "ILLUMITY",
        "streetAddress": "656 Rockwell Place",
        "city": "Durham",
        "state": "Virginia",
        "zip": 2373,
        "type": "DELIVERY"
      },
      {
        "date": 1459271907,
        "name": "FITCORE",
        "streetAddress": "287 Joralemon Street",
        "city": "Calpine",
        "state": "Delaware",
        "zip": 6758,
        "type": "DELIVERY"
      },
      {
        "date": 1585566622,
        "name": "NURALI",
        "streetAddress": "970 National Drive",
        "city": "Chamberino",
        "state": "Puerto Rico",
        "zip": 8642,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 3771.08,
      "detention": 2643.61,
      "layover": 1975.68
    }
  },
  {
    "invoiceNumber": "5e96597a5752d64e835b961b",
    "loadNumber": 21,
    "invoiceDate": 1429591086,
    "billTo": {
      "name": "DAIDO",
      "streetAddress": "394 Campus Place",
      "city": "Canby",
      "state": " Rhode Island",
      "zip": 5632
    },
    "stops": [
      {
        "date": 1419782310,
        "name": "COMTREK",
        "streetAddress": "799 Wolf Place",
        "city": "Websterville",
        "state": "Georgia",
        "zip": 8960,
        "type": "DELIVERY"
      },
      {
        "date": 1551707596,
        "name": "VIAGREAT",
        "streetAddress": "342 Bradford Street",
        "city": "Charco",
        "state": "Nevada",
        "zip": 1769,
        "type": "DELIVERY"
      },
      {
        "date": 1576419509,
        "name": "BOILCAT",
        "streetAddress": "104 Surf Avenue",
        "city": "Urbana",
        "state": "Arkansas",
        "zip": 9795,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 3300.97,
      "detention": 1300.51,
      "layover": 3644.33
    }
  },
  {
    "invoiceNumber": "5e96597ae4726fd29c931b17",
    "loadNumber": 21,
    "invoiceDate": 1432702838,
    "billTo": {
      "name": "OCTOCORE",
      "streetAddress": "924 Dewitt Avenue",
      "city": "Highland",
      "state": " Maryland",
      "zip": 9532
    },
    "stops": [
      {
        "date": 1548701830,
        "name": "ACIUM",
        "streetAddress": "486 Linden Boulevard",
        "city": "Fresno",
        "state": "Mississippi",
        "zip": 390,
        "type": "DELIVERY"
      },
      {
        "date": 1439652934,
        "name": "AQUASSEUR",
        "streetAddress": "745 George Street",
        "city": "Blodgett",
        "state": "Marshall Islands",
        "zip": 1684,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 1876.21,
      "detention": 3435.83,
      "layover": 1638.46
    }
  },
  {
    "invoiceNumber": "5e96597a9c7841070965b82e",
    "loadNumber": 30,
    "invoiceDate": 1560052073,
    "billTo": {
      "name": "ACCIDENCY",
      "streetAddress": "765 Nixon Court",
      "city": "Gibsonia",
      "state": " Oregon",
      "zip": 6096
    },
    "stops": [
      {
        "date": 1470735483,
        "name": "FLEXIGEN",
        "streetAddress": "938 Hart Place",
        "city": "Fillmore",
        "state": "Utah",
        "zip": 5082,
        "type": "PICKUP"
      },
      {
        "date": 1503699252,
        "name": "ASSITIA",
        "streetAddress": "645 Vermont Street",
        "city": "Aberdeen",
        "state": "Hawaii",
        "zip": 3376,
        "type": "PICKUP"
      },
      {
        "date": 1526003667,
        "name": "IMMUNICS",
        "streetAddress": "766 Norfolk Street",
        "city": "Concho",
        "state": "Nebraska",
        "zip": 4733,
        "type": "PICKUP"
      },
      {
        "date": 1479822047,
        "name": "POOCHIES",
        "streetAddress": "918 Lake Avenue",
        "city": "Indio",
        "state": "Indiana",
        "zip": 7844,
        "type": "PICKUP"
      },
      {
        "date": 1552590759,
        "name": "GINKLE",
        "streetAddress": "577 Downing Street",
        "city": "Hollymead",
        "state": "Oklahoma",
        "zip": 5566,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 1773.95,
      "detention": 1818.14,
      "layover": 3254.86
    }
  },
  {
    "invoiceNumber": "5e96597a2f91cfa086e0cede",
    "loadNumber": 35,
    "invoiceDate": 1458088679,
    "billTo": {
      "name": "PASTURIA",
      "streetAddress": "203 Bedell Lane",
      "city": "Rosewood",
      "state": " Arizona",
      "zip": 9296
    },
    "stops": [
      {
        "date": 1431133803,
        "name": "VIXO",
        "streetAddress": "946 Roebling Street",
        "city": "Knowlton",
        "state": "Missouri",
        "zip": 8966,
        "type": "DELIVERY"
      },
      {
        "date": 1504882963,
        "name": "TOYLETRY",
        "streetAddress": "631 Bainbridge Street",
        "city": "Suitland",
        "state": "Maine",
        "zip": 5088,
        "type": "PICKUP"
      },
      {
        "date": 1549560602,
        "name": "CEMENTION",
        "streetAddress": "228 Caton Avenue",
        "city": "Germanton",
        "state": "New Hampshire",
        "zip": 3372,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 1658.25,
      "detention": 3109.14,
      "layover": 2223.99
    }
  },
  {
    "invoiceNumber": "5e96597aac944bd0a97f1af9",
    "loadNumber": 22,
    "invoiceDate": 1481909681,
    "billTo": {
      "name": "TWIGGERY",
      "streetAddress": "490 Grant Avenue",
      "city": "Tedrow",
      "state": " Minnesota",
      "zip": 7563
    },
    "stops": [
      {
        "date": 1449117555,
        "name": "POLARAX",
        "streetAddress": "818 Kings Hwy",
        "city": "Guthrie",
        "state": "Pennsylvania",
        "zip": 9512,
        "type": "PICKUP"
      },
      {
        "date": 1434966839,
        "name": "KOZGENE",
        "streetAddress": "111 Fuller Place",
        "city": "Salix",
        "state": "New Jersey",
        "zip": 5136,
        "type": "PICKUP"
      },
      {
        "date": 1476699329,
        "name": "DECRATEX",
        "streetAddress": "279 Dooley Street",
        "city": "Saddlebrooke",
        "state": "Illinois",
        "zip": 7461,
        "type": "PICKUP"
      },
      {
        "date": 1407464914,
        "name": "CODACT",
        "streetAddress": "552 Jamison Lane",
        "city": "Sutton",
        "state": "Texas",
        "zip": 4479,
        "type": "PICKUP"
      },
      {
        "date": 1417455600,
        "name": "SENTIA",
        "streetAddress": "299 Sharon Street",
        "city": "Matheny",
        "state": "Tennessee",
        "zip": 6454,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 2462.33,
      "detention": 2309.89,
      "layover": 2466.46
    }
  },
  {
    "invoiceNumber": "5e96597a4ed3d3e4b268e3e0",
    "loadNumber": 22,
    "invoiceDate": 1527758608,
    "billTo": {
      "name": "VALPREAL",
      "streetAddress": "174 Lee Avenue",
      "city": "Shawmut",
      "state": " Ohio",
      "zip": 7592
    },
    "stops": [
      {
        "date": 1527059816,
        "name": "RAMJOB",
        "streetAddress": "311 Rugby Road",
        "city": "Woodlands",
        "state": "Iowa",
        "zip": 5318,
        "type": "PICKUP"
      },
      {
        "date": 1551518099,
        "name": "LYRICHORD",
        "streetAddress": "753 Ryder Street",
        "city": "Lithium",
        "state": "Wisconsin",
        "zip": 9824,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 1508.08,
      "detention": 2862.47,
      "layover": 3048.65
    }
  },
  {
    "invoiceNumber": "5e96597a87e2f72b91303cdf",
    "loadNumber": 35,
    "invoiceDate": 1554889161,
    "billTo": {
      "name": "BLANET",
      "streetAddress": "691 Metrotech Courtr",
      "city": "Glenville",
      "state": " American Samoa",
      "zip": 5044
    },
    "stops": [
      {
        "date": 1453880962,
        "name": "ECRATER",
        "streetAddress": "944 Veronica Place",
        "city": "Kieler",
        "state": "Idaho",
        "zip": 7322,
        "type": "PICKUP"
      },
      {
        "date": 1467489328,
        "name": "ZILCH",
        "streetAddress": "634 Battery Avenue",
        "city": "Motley",
        "state": "South Dakota",
        "zip": 7920,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 1154.85,
      "detention": 1736.10,
      "layover": 2416.78
    }
  },
  {
    "invoiceNumber": "5e96597a171ffdb520335542",
    "loadNumber": 38,
    "invoiceDate": 1547351801,
    "billTo": {
      "name": "ZIALACTIC",
      "streetAddress": "289 Beaver Street",
      "city": "Ironton",
      "state": " Connecticut",
      "zip": 8102
    },
    "stops": [
      {
        "date": 1446654896,
        "name": "VELITY",
        "streetAddress": "498 Bokee Court",
        "city": "Freeburn",
        "state": "Washington",
        "zip": 2605,
        "type": "PICKUP"
      },
      {
        "date": 1530273510,
        "name": "EVENTIX",
        "streetAddress": "883 Holmes Lane",
        "city": "Interlochen",
        "state": "Alabama",
        "zip": 9337,
        "type": "DELIVERY"
      },
      {
        "date": 1577512152,
        "name": "APEX",
        "streetAddress": "988 Whitney Avenue",
        "city": "Fivepointville",
        "state": "Wyoming",
        "zip": 2117,
        "type": "DELIVERY"
      },
      {
        "date": 1552543733,
        "name": "ZENTIX",
        "streetAddress": "795 Lincoln Place",
        "city": "Cutter",
        "state": "Louisiana",
        "zip": 8512,
        "type": "PICKUP"
      },
      {
        "date": 1451724499,
        "name": "KAGGLE",
        "streetAddress": "663 Kensington Walk",
        "city": "Kilbourne",
        "state": "Vermont",
        "zip": 6570,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 1131.75,
      "detention": 2476.59,
      "layover": 3075.39
    }
  },
  {
    "invoiceNumber": "5e96597a61ebabef98cc597e",
    "loadNumber": 23,
    "invoiceDate": 1434439053,
    "billTo": {
      "name": "BEDLAM",
      "streetAddress": "883 Wythe Place",
      "city": "Nescatunga",
      "state": " North Carolina",
      "zip": 6448
    },
    "stops": [
      {
        "date": 1498090082,
        "name": "AQUOAVO",
        "streetAddress": "684 Ditmars Street",
        "city": "Cannondale",
        "state": "Federated States Of Micronesia",
        "zip": 6639,
        "type": "PICKUP"
      },
      {
        "date": 1553126163,
        "name": "POLARIA",
        "streetAddress": "370 Bowne Street",
        "city": "Warsaw",
        "state": "Kentucky",
        "zip": 5795,
        "type": "DELIVERY"
      },
      {
        "date": 1413554011,
        "name": "ZOLAREX",
        "streetAddress": "507 Garfield Place",
        "city": "Avalon",
        "state": "South Carolina",
        "zip": 1425,
        "type": "PICKUP"
      },
      {
        "date": 1450938459,
        "name": "UBERLUX",
        "streetAddress": "364 Wortman Avenue",
        "city": "Wakulla",
        "state": "North Dakota",
        "zip": 4786,
        "type": "DELIVERY"
      },
      {
        "date": 1584670038,
        "name": "BEADZZA",
        "streetAddress": "755 Pitkin Avenue",
        "city": "Rushford",
        "state": "New Mexico",
        "zip": 8500,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 3230.63,
      "detention": 2926.68,
      "layover": 2142.28
    }
  },
  {
    "invoiceNumber": "5e96597ac4ae8effb181c4a7",
    "loadNumber": 30,
    "invoiceDate": 1442631140,
    "billTo": {
      "name": "UNCORP",
      "streetAddress": "993 Gatling Place",
      "city": "Volta",
      "state": " Alaska",
      "zip": 9003
    },
    "stops": [
      {
        "date": 1580075329,
        "name": "ANIXANG",
        "streetAddress": "762 Richmond Street",
        "city": "Barstow",
        "state": "Kansas",
        "zip": 7471,
        "type": "DELIVERY"
      },
      {
        "date": 1479922776,
        "name": "PROVIDCO",
        "streetAddress": "616 Maple Street",
        "city": "Makena",
        "state": "California",
        "zip": 8099,
        "type": "PICKUP"
      },
      {
        "date": 1575803769,
        "name": "SARASONIC",
        "streetAddress": "690 Montieth Street",
        "city": "Eastvale",
        "state": "Palau",
        "zip": 2134,
        "type": "DELIVERY"
      },
      {
        "date": 1555510675,
        "name": "LIMOZEN",
        "streetAddress": "853 Elm Place",
        "city": "Williams",
        "state": "Guam",
        "zip": 1279,
        "type": "PICKUP"
      },
      {
        "date": 1402319577,
        "name": "VIOCULAR",
        "streetAddress": "657 Llama Court",
        "city": "Wakarusa",
        "state": "New York",
        "zip": 6389,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 3805.28,
      "detention": 1890.89,
      "layover": 3250.98
    }
  },
  {
    "invoiceNumber": "5e96597ae8e866c562406247",
    "loadNumber": 40,
    "invoiceDate": 1517850526,
    "billTo": {
      "name": "ZOSIS",
      "streetAddress": "606 Stryker Court",
      "city": "Cleary",
      "state": " Michigan",
      "zip": 4286
    },
    "stops": [
      {
        "date": 1550187761,
        "name": "APEXIA",
        "streetAddress": "704 Ovington Court",
        "city": "Morriston",
        "state": "Montana",
        "zip": 9228,
        "type": "PICKUP"
      },
      {
        "date": 1570096264,
        "name": "LOVEPAD",
        "streetAddress": "391 Arion Place",
        "city": "Fedora",
        "state": "Florida",
        "zip": 9133,
        "type": "PICKUP"
      },
      {
        "date": 1424767540,
        "name": "SKINSERVE",
        "streetAddress": "441 Evans Street",
        "city": "Kaka",
        "state": "West Virginia",
        "zip": 3810,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 1725.63,
      "detention": 3906.33,
      "layover": 1134.74
    }
  },
  {
    "invoiceNumber": "5e96597a7463410670baa3b7",
    "loadNumber": 37,
    "invoiceDate": 1496398236,
    "billTo": {
      "name": "GLUID",
      "streetAddress": "338 Wallabout Street",
      "city": "Hondah",
      "state": " Colorado",
      "zip": 7336
    },
    "stops": [
      {
        "date": 1486685971,
        "name": "SENMEI",
        "streetAddress": "360 Dupont Street",
        "city": "Cowiche",
        "state": "Northern Mariana Islands",
        "zip": 4234,
        "type": "DELIVERY"
      },
      {
        "date": 1549518619,
        "name": "INTERODEO",
        "streetAddress": "829 Hubbard Place",
        "city": "Brule",
        "state": "Massachusetts",
        "zip": 4057,
        "type": "DELIVERY"
      },
      {
        "date": 1423137174,
        "name": "RENOVIZE",
        "streetAddress": "460 Sands Street",
        "city": "Olney",
        "state": "District Of Columbia",
        "zip": 5656,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 1765.82,
      "detention": 1970.99,
      "layover": 2560.71
    }
  },
  {
    "invoiceNumber": "5e96597a444bdc8cfacdf3f5",
    "loadNumber": 32,
    "invoiceDate": 1578360028,
    "billTo": {
      "name": "GEEKETRON",
      "streetAddress": "789 Main Street",
      "city": "Escondida",
      "state": " Virginia",
      "zip": 7195
    },
    "stops": [
      {
        "date": 1423530421,
        "name": "COSMETEX",
        "streetAddress": "887 Gunther Place",
        "city": "Coloma",
        "state": "Delaware",
        "zip": 1953,
        "type": "PICKUP"
      },
      {
        "date": 1487602298,
        "name": "CUBICIDE",
        "streetAddress": "451 Remsen Avenue",
        "city": "Hannasville",
        "state": "Puerto Rico",
        "zip": 5310,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 3391.33,
      "detention": 1272.18,
      "layover": 3181.81
    }
  },
  {
    "invoiceNumber": "5e96597a3135105a3048ef18",
    "loadNumber": 28,
    "invoiceDate": 1413100832,
    "billTo": {
      "name": "NAMEGEN",
      "streetAddress": "916 Love Lane",
      "city": "Callaghan",
      "state": " Rhode Island",
      "zip": 659
    },
    "stops": [
      {
        "date": 1459552391,
        "name": "MUSAPHICS",
        "streetAddress": "140 Baycliff Terrace",
        "city": "Soudan",
        "state": "Georgia",
        "zip": 8663,
        "type": "PICKUP"
      },
      {
        "date": 1480960431,
        "name": "FARMAGE",
        "streetAddress": "771 Louis Place",
        "city": "Barclay",
        "state": "Nevada",
        "zip": 2017,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 3491.02,
      "detention": 1352.24,
      "layover": 2902.86
    }
  },
  {
    "invoiceNumber": "5e96597ae349917bca2956e5",
    "loadNumber": 20,
    "invoiceDate": 1441787832,
    "billTo": {
      "name": "RUGSTARS",
      "streetAddress": "933 Sunnyside Avenue",
      "city": "Montura",
      "state": " Arkansas",
      "zip": 5555
    },
    "stops": [
      {
        "date": 1550437455,
        "name": "KEENGEN",
        "streetAddress": "154 Lloyd Street",
        "city": "Hailesboro",
        "state": "Maryland",
        "zip": 5193,
        "type": "DELIVERY"
      },
      {
        "date": 1428130435,
        "name": "QIAO",
        "streetAddress": "117 Jardine Place",
        "city": "Blanco",
        "state": "Mississippi",
        "zip": 9086,
        "type": "DELIVERY"
      },
      {
        "date": 1414025871,
        "name": "TRIPSCH",
        "streetAddress": "649 McKinley Avenue",
        "city": "Verdi",
        "state": "Marshall Islands",
        "zip": 2062,
        "type": "PICKUP"
      },
      {
        "date": 1490614925,
        "name": "ZILLAN",
        "streetAddress": "963 Pierrepont Place",
        "city": "Frizzleburg",
        "state": "Oregon",
        "zip": 7246,
        "type": "DELIVERY"
      },
      {
        "date": 1442749181,
        "name": "VIASIA",
        "streetAddress": "775 Arkansas Drive",
        "city": "Gibbsville",
        "state": "Utah",
        "zip": 7485,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 1170.51,
      "detention": 3898.91,
      "layover": 2170.75
    }
  },
  {
    "invoiceNumber": "5e96597a789655a09ce100cf",
    "loadNumber": 21,
    "invoiceDate": 1460018218,
    "billTo": {
      "name": "QABOOS",
      "streetAddress": "919 Saratoga Avenue",
      "city": "Omar",
      "state": " Hawaii",
      "zip": 4736
    },
    "stops": [
      {
        "date": 1540945355,
        "name": "XYMONK",
        "streetAddress": "125 Java Street",
        "city": "Nile",
        "state": "Nebraska",
        "zip": 724,
        "type": "DELIVERY"
      },
      {
        "date": 1449249573,
        "name": "LIQUIDOC",
        "streetAddress": "319 Vandalia Avenue",
        "city": "Comptche",
        "state": "Indiana",
        "zip": 3187,
        "type": "DELIVERY"
      },
      {
        "date": 1553195047,
        "name": "CHILLIUM",
        "streetAddress": "561 Hunts Lane",
        "city": "Tyro",
        "state": "Oklahoma",
        "zip": 3697,
        "type": "PICKUP"
      },
      {
        "date": 1431830690,
        "name": "CINESANCT",
        "streetAddress": "583 Montgomery Place",
        "city": "Brenton",
        "state": "Arizona",
        "zip": 7300,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 2767.11,
      "detention": 3184.71,
      "layover": 1272.90
    }
  },
  {
    "invoiceNumber": "5e96597a4a0c034c6f5dc162",
    "loadNumber": 29,
    "invoiceDate": 1492662312,
    "billTo": {
      "name": "SLAMBDA",
      "streetAddress": "655 Huntington Street",
      "city": "Golconda",
      "state": " Missouri",
      "zip": 1866
    },
    "stops": [
      {
        "date": 1571534084,
        "name": "FIBRODYNE",
        "streetAddress": "820 Cass Place",
        "city": "Bladensburg",
        "state": "Maine",
        "zip": 9095,
        "type": "DELIVERY"
      },
      {
        "date": 1488947196,
        "name": "QUONATA",
        "streetAddress": "200 Henry Street",
        "city": "Gulf",
        "state": "New Hampshire",
        "zip": 2744,
        "type": "PICKUP"
      },
      {
        "date": 1433241365,
        "name": "XEREX",
        "streetAddress": "875 Cypress Avenue",
        "city": "Sylvanite",
        "state": "Minnesota",
        "zip": 4282,
        "type": "PICKUP"
      },
      {
        "date": 1431266203,
        "name": "LOTRON",
        "streetAddress": "611 Newport Street",
        "city": "Springville",
        "state": "Pennsylvania",
        "zip": 5457,
        "type": "PICKUP"
      },
      {
        "date": 1569113680,
        "name": "MAGMINA",
        "streetAddress": "839 Perry Place",
        "city": "Lisco",
        "state": "New Jersey",
        "zip": 7896,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 3840.93,
      "detention": 3768.91,
      "layover": 3741.43
    }
  },
  {
    "invoiceNumber": "5e96597a33932dff4623d9cc",
    "loadNumber": 39,
    "invoiceDate": 1426705575,
    "billTo": {
      "name": "MEDESIGN",
      "streetAddress": "866 Halleck Street",
      "city": "Enetai",
      "state": " Illinois",
      "zip": 1434
    },
    "stops": [
      {
        "date": 1482524190,
        "name": "EURON",
        "streetAddress": "941 Erskine Loop",
        "city": "Winchester",
        "state": "Texas",
        "zip": 6439,
        "type": "PICKUP"
      },
      {
        "date": 1414152727,
        "name": "BRAINQUIL",
        "streetAddress": "790 Langham Street",
        "city": "Strykersville",
        "state": "Tennessee",
        "zip": 1710,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 3344.40,
      "detention": 2803.50,
      "layover": 2495.76
    }
  },
  {
    "invoiceNumber": "5e96597aa400cdcefc33812e",
    "loadNumber": 24,
    "invoiceDate": 1471919269,
    "billTo": {
      "name": "AUSTEX",
      "streetAddress": "615 Harrison Avenue",
      "city": "Edgewater",
      "state": " Ohio",
      "zip": 1897
    },
    "stops": [
      {
        "date": 1551484049,
        "name": "ISOSTREAM",
        "streetAddress": "190 Glenwood Road",
        "city": "Johnsonburg",
        "state": "Iowa",
        "zip": 553,
        "type": "DELIVERY"
      },
      {
        "date": 1487581114,
        "name": "PLASTO",
        "streetAddress": "411 Bristol Street",
        "city": "Tilleda",
        "state": "Wisconsin",
        "zip": 3338,
        "type": "PICKUP"
      },
      {
        "date": 1430265926,
        "name": "FOSSIEL",
        "streetAddress": "759 Cropsey Avenue",
        "city": "Venice",
        "state": "American Samoa",
        "zip": 9661,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 3222.81,
      "detention": 2511.56,
      "layover": 3802.85
    }
  },
  {
    "invoiceNumber": "5e96597ae6055ac69c9bc00b",
    "loadNumber": 21,
    "invoiceDate": 1472246826,
    "billTo": {
      "name": "EXOSWITCH",
      "streetAddress": "548 Douglass Street",
      "city": "Lindcove",
      "state": " Idaho",
      "zip": 5561
    },
    "stops": [
      {
        "date": 1573485790,
        "name": "EZENTIA",
        "streetAddress": "456 Dekalb Avenue",
        "city": "Cornfields",
        "state": "South Dakota",
        "zip": 9636,
        "type": "DELIVERY"
      },
      {
        "date": 1554302849,
        "name": "DIGIRANG",
        "streetAddress": "211 Guider Avenue",
        "city": "Rutherford",
        "state": "Connecticut",
        "zip": 5579,
        "type": "PICKUP"
      },
      {
        "date": 1423455106,
        "name": "RODEMCO",
        "streetAddress": "411 Martense Street",
        "city": "Chumuckla",
        "state": "Washington",
        "zip": 8139,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 2582.00,
      "detention": 1700.70,
      "layover": 3405.36
    }
  },
  {
    "invoiceNumber": "5e96597aac4c3ad2c6e5e7d5",
    "loadNumber": 22,
    "invoiceDate": 1444221258,
    "billTo": {
      "name": "STUCCO",
      "streetAddress": "997 Harwood Place",
      "city": "Nicut",
      "state": " Alabama",
      "zip": 462
    },
    "stops": [
      {
        "date": 1530859577,
        "name": "OHMNET",
        "streetAddress": "847 Henderson Walk",
        "city": "Frierson",
        "state": "Wyoming",
        "zip": 342,
        "type": "PICKUP"
      },
      {
        "date": 1521647170,
        "name": "MEDICROIX",
        "streetAddress": "855 Lawrence Avenue",
        "city": "Dunbar",
        "state": "Louisiana",
        "zip": 6207,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 3207.67,
      "detention": 1865.59,
      "layover": 3198.36
    }
  },
  {
    "invoiceNumber": "5e96597a97479406386ea981",
    "loadNumber": 23,
    "invoiceDate": 1442682572,
    "billTo": {
      "name": "CAXT",
      "streetAddress": "569 Glen Street",
      "city": "Bentonville",
      "state": " Vermont",
      "zip": 233
    },
    "stops": [
      {
        "date": 1440599162,
        "name": "KAGE",
        "streetAddress": "474 Wakeman Place",
        "city": "Boykin",
        "state": "North Carolina",
        "zip": 2744,
        "type": "DELIVERY"
      },
      {
        "date": 1388833617,
        "name": "ELPRO",
        "streetAddress": "507 Troy Avenue",
        "city": "Otranto",
        "state": "Federated States Of Micronesia",
        "zip": 9442,
        "type": "PICKUP"
      },
      {
        "date": 1457910688,
        "name": "XIXAN",
        "streetAddress": "651 Fleet Walk",
        "city": "Sheatown",
        "state": "Kentucky",
        "zip": 1440,
        "type": "PICKUP"
      },
      {
        "date": 1480903884,
        "name": "JOVIOLD",
        "streetAddress": "355 Vermont Court",
        "city": "Naomi",
        "state": "South Carolina",
        "zip": 6700,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 3019.05,
      "detention": 2708.74,
      "layover": 3038.45
    }
  },
  {
    "invoiceNumber": "5e96597ad95e95da8b2ef590",
    "loadNumber": 38,
    "invoiceDate": 1582433129,
    "billTo": {
      "name": "DEVILTOE",
      "streetAddress": "464 Vine Street",
      "city": "Frank",
      "state": " North Dakota",
      "zip": 4775
    },
    "stops": [
      {
        "date": 1485405944,
        "name": "REVERSUS",
        "streetAddress": "363 Debevoise Street",
        "city": "Unionville",
        "state": "New Mexico",
        "zip": 912,
        "type": "PICKUP"
      },
      {
        "date": 1572686902,
        "name": "COMTENT",
        "streetAddress": "602 Kiely Place",
        "city": "Tyhee",
        "state": "Alaska",
        "zip": 5028,
        "type": "DELIVERY"
      },
      {
        "date": 1500988951,
        "name": "MOMENTIA",
        "streetAddress": "723 Dorchester Road",
        "city": "Eagletown",
        "state": "Kansas",
        "zip": 2182,
        "type": "PICKUP"
      },
      {
        "date": 1562301637,
        "name": "WEBIOTIC",
        "streetAddress": "439 Troutman Street",
        "city": "Blackgum",
        "state": "California",
        "zip": 6475,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 3506.36,
      "detention": 3945.56,
      "layover": 2858.51
    }
  },
  {
    "invoiceNumber": "5e96597a20fc3318c9132017",
    "loadNumber": 35,
    "invoiceDate": 1508857812,
    "billTo": {
      "name": "ECLIPSENT",
      "streetAddress": "853 Sheffield Avenue",
      "city": "Coaldale",
      "state": " Palau",
      "zip": 5394
    },
    "stops": [
      {
        "date": 1542531608,
        "name": "PLASMOX",
        "streetAddress": "979 Church Lane",
        "city": "Weedville",
        "state": "Guam",
        "zip": 2654,
        "type": "DELIVERY"
      },
      {
        "date": 1530273378,
        "name": "BIFLEX",
        "streetAddress": "167 Cox Place",
        "city": "Salvo",
        "state": "New York",
        "zip": 1814,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 3455.87,
      "detention": 3626.76,
      "layover": 3258.02
    }
  },
  {
    "invoiceNumber": "5e96597a7176a94bd2e744aa",
    "loadNumber": 35,
    "invoiceDate": 1578225839,
    "billTo": {
      "name": "TRASOLA",
      "streetAddress": "116 Rockaway Parkway",
      "city": "Ventress",
      "state": " Michigan",
      "zip": 3616
    },
    "stops": [
      {
        "date": 1436781972,
        "name": "REALMO",
        "streetAddress": "908 Madeline Court",
        "city": "Woodlake",
        "state": "Montana",
        "zip": 3008,
        "type": "PICKUP"
      },
      {
        "date": 1427754833,
        "name": "ENTALITY",
        "streetAddress": "889 Burnett Street",
        "city": "Bendon",
        "state": "Florida",
        "zip": 2447,
        "type": "PICKUP"
      },
      {
        "date": 1557921384,
        "name": "ZANILLA",
        "streetAddress": "440 Bouck Court",
        "city": "Greenock",
        "state": "West Virginia",
        "zip": 5965,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 3446.68,
      "detention": 3890.68,
      "layover": 3474.80
    }
  },
  {
    "invoiceNumber": "5e96597a05bed34020f388e3",
    "loadNumber": 25,
    "invoiceDate": 1556332901,
    "billTo": {
      "name": "TECHTRIX",
      "streetAddress": "453 Division Avenue",
      "city": "Hackneyville",
      "state": " Colorado",
      "zip": 2394
    },
    "stops": [
      {
        "date": 1463102332,
        "name": "UPDAT",
        "streetAddress": "479 Coffey Street",
        "city": "Alafaya",
        "state": "Northern Mariana Islands",
        "zip": 3734,
        "type": "PICKUP"
      },
      {
        "date": 1508667751,
        "name": "VERTON",
        "streetAddress": "571 Quincy Street",
        "city": "Inkerman",
        "state": "Massachusetts",
        "zip": 2102,
        "type": "PICKUP"
      },
      {
        "date": 1397229649,
        "name": "PIVITOL",
        "streetAddress": "236 Bryant Street",
        "city": "Hegins",
        "state": "District Of Columbia",
        "zip": 4739,
        "type": "DELIVERY"
      },
      {
        "date": 1546479222,
        "name": "MIXERS",
        "streetAddress": "402 Ferry Place",
        "city": "Whitmer",
        "state": "Virginia",
        "zip": 1664,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 1287.59,
      "detention": 1470.94,
      "layover": 3707.21
    }
  },
  {
    "invoiceNumber": "5e96597aaa86ca8953d9a1ff",
    "loadNumber": 25,
    "invoiceDate": 1428626504,
    "billTo": {
      "name": "SONIQUE",
      "streetAddress": "346 Garnet Street",
      "city": "Lewis",
      "state": " Delaware",
      "zip": 6836
    },
    "stops": [
      {
        "date": 1462756712,
        "name": "PARAGONIA",
        "streetAddress": "173 Columbia Street",
        "city": "Goldfield",
        "state": "Puerto Rico",
        "zip": 8565,
        "type": "DELIVERY"
      },
      {
        "date": 1502560259,
        "name": "ANARCO",
        "streetAddress": "603 Fleet Street",
        "city": "Springhill",
        "state": "Rhode Island",
        "zip": 7122,
        "type": "DELIVERY"
      },
      {
        "date": 1573866057,
        "name": "NORALEX",
        "streetAddress": "566 Gain Court",
        "city": "Swartzville",
        "state": "Georgia",
        "zip": 6224,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 3254.73,
      "detention": 2738.93,
      "layover": 1296.06
    }
  },
  {
    "invoiceNumber": "5e96597a69094424157e8883",
    "loadNumber": 30,
    "invoiceDate": 1549755338,
    "billTo": {
      "name": "BITENDREX",
      "streetAddress": "272 Croton Loop",
      "city": "Dragoon",
      "state": " Nevada",
      "zip": 2452
    },
    "stops": [
      {
        "date": 1563917512,
        "name": "BIOSPAN",
        "streetAddress": "511 Plaza Street",
        "city": "Bagtown",
        "state": "Arkansas",
        "zip": 8052,
        "type": "DELIVERY"
      },
      {
        "date": 1402594139,
        "name": "INSURETY",
        "streetAddress": "656 Rapelye Street",
        "city": "Bartley",
        "state": "Maryland",
        "zip": 4331,
        "type": "PICKUP"
      },
      {
        "date": 1472886131,
        "name": "GAPTEC",
        "streetAddress": "723 Billings Place",
        "city": "Broadlands",
        "state": "Mississippi",
        "zip": 2706,
        "type": "DELIVERY"
      },
      {
        "date": 1475909824,
        "name": "GRONK",
        "streetAddress": "832 Navy Street",
        "city": "Rosedale",
        "state": "Marshall Islands",
        "zip": 916,
        "type": "DELIVERY"
      },
      {
        "date": 1537326643,
        "name": "NURPLEX",
        "streetAddress": "920 Newkirk Avenue",
        "city": "Como",
        "state": "Oregon",
        "zip": 8698,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 1577.57,
      "detention": 1016.28,
      "layover": 3063.94
    }
  },
  {
    "invoiceNumber": "5e96597a3958ff0ed7fa42ff",
    "loadNumber": 30,
    "invoiceDate": 1577877884,
    "billTo": {
      "name": "GRAINSPOT",
      "streetAddress": "433 Albany Avenue",
      "city": "Noxen",
      "state": " Utah",
      "zip": 5945
    },
    "stops": [
      {
        "date": 1427356460,
        "name": "PROGENEX",
        "streetAddress": "234 Waldane Court",
        "city": "Saticoy",
        "state": "Hawaii",
        "zip": 5972,
        "type": "PICKUP"
      },
      {
        "date": 1511939381,
        "name": "ROTODYNE",
        "streetAddress": "981 Woods Place",
        "city": "Sena",
        "state": "Nebraska",
        "zip": 345,
        "type": "PICKUP"
      },
      {
        "date": 1500963220,
        "name": "VISALIA",
        "streetAddress": "490 Hanson Place",
        "city": "Rote",
        "state": "Indiana",
        "zip": 6876,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 3248.04,
      "detention": 2436.78,
      "layover": 1367.09
    }
  },
  {
    "invoiceNumber": "5e96597af514b9d468027f76",
    "loadNumber": 25,
    "invoiceDate": 1415374460,
    "billTo": {
      "name": "UNISURE",
      "streetAddress": "311 Mill Road",
      "city": "Muir",
      "state": " Oklahoma",
      "zip": 8293
    },
    "stops": [
      {
        "date": 1401313790,
        "name": "ELEMANTRA",
        "streetAddress": "473 Coyle Street",
        "city": "Davenport",
        "state": "Arizona",
        "zip": 3881,
        "type": "DELIVERY"
      },
      {
        "date": 1390865866,
        "name": "STRALUM",
        "streetAddress": "400 Scott Avenue",
        "city": "Garnet",
        "state": "Missouri",
        "zip": 3365,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 3237.84,
      "detention": 1224.95,
      "layover": 2166.14
    }
  },
  {
    "invoiceNumber": "5e96597ae37f064357242af3",
    "loadNumber": 20,
    "invoiceDate": 1578299212,
    "billTo": {
      "name": "NUTRALAB",
      "streetAddress": "712 Osborn Street",
      "city": "Shaft",
      "state": " Maine",
      "zip": 9968
    },
    "stops": [
      {
        "date": 1452090287,
        "name": "DAISU",
        "streetAddress": "255 Juliana Place",
        "city": "Harrodsburg",
        "state": "New Hampshire",
        "zip": 2062,
        "type": "PICKUP"
      },
      {
        "date": 1463525391,
        "name": "ZILLATIDE",
        "streetAddress": "692 Orange Street",
        "city": "Darlington",
        "state": "Minnesota",
        "zip": 9232,
        "type": "PICKUP"
      },
      {
        "date": 1567169836,
        "name": "MOBILDATA",
        "streetAddress": "606 Tennis Court",
        "city": "Wells",
        "state": "Pennsylvania",
        "zip": 6042,
        "type": "PICKUP"
      },
      {
        "date": 1473012901,
        "name": "MAGNEMO",
        "streetAddress": "142 Royce Street",
        "city": "Saranap",
        "state": "New Jersey",
        "zip": 7962,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 2818.13,
      "detention": 1325.64,
      "layover": 1792.64
    }
  },
  {
    "invoiceNumber": "5e96597aab18225624a7f9eb",
    "loadNumber": 35,
    "invoiceDate": 1496267895,
    "billTo": {
      "name": "RADIANTIX",
      "streetAddress": "715 Interborough Parkway",
      "city": "Lowgap",
      "state": " Illinois",
      "zip": 4840
    },
    "stops": [
      {
        "date": 1476316180,
        "name": "GENESYNK",
        "streetAddress": "906 Rockaway Avenue",
        "city": "Vallonia",
        "state": "Texas",
        "zip": 8120,
        "type": "DELIVERY"
      },
      {
        "date": 1465145120,
        "name": "CENTREE",
        "streetAddress": "318 Lloyd Court",
        "city": "Tioga",
        "state": "Tennessee",
        "zip": 8022,
        "type": "DELIVERY"
      },
      {
        "date": 1485481289,
        "name": "MAXIMIND",
        "streetAddress": "113 Pacific Street",
        "city": "Thornport",
        "state": "Ohio",
        "zip": 6532,
        "type": "PICKUP"
      },
      {
        "date": 1456185640,
        "name": "SOPRANO",
        "streetAddress": "572 Nassau Street",
        "city": "Hartsville/Hartley",
        "state": "Iowa",
        "zip": 3621,
        "type": "PICKUP"
      },
      {
        "date": 1571737421,
        "name": "QIMONK",
        "streetAddress": "820 Commercial Street",
        "city": "Crumpler",
        "state": "Wisconsin",
        "zip": 6474,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 1482.20,
      "detention": 3289.03,
      "layover": 1719.14
    }
  },
  {
    "invoiceNumber": "5e96597a06e19fab9bf8808d",
    "loadNumber": 22,
    "invoiceDate": 1439977205,
    "billTo": {
      "name": "LIMAGE",
      "streetAddress": "626 Walker Court",
      "city": "Adamstown",
      "state": " American Samoa",
      "zip": 5648
    },
    "stops": [
      {
        "date": 1423556345,
        "name": "KRAGGLE",
        "streetAddress": "833 Prescott Place",
        "city": "Grandview",
        "state": "Idaho",
        "zip": 2948,
        "type": "PICKUP"
      },
      {
        "date": 1481204052,
        "name": "ZEROLOGY",
        "streetAddress": "939 Wolcott Street",
        "city": "Aurora",
        "state": "South Dakota",
        "zip": 8429,
        "type": "DELIVERY"
      },
      {
        "date": 1464770156,
        "name": "ORBIXTAR",
        "streetAddress": "307 Highland Place",
        "city": "Gardners",
        "state": "Connecticut",
        "zip": 369,
        "type": "PICKUP"
      },
      {
        "date": 1563058027,
        "name": "ORBALIX",
        "streetAddress": "404 Moultrie Street",
        "city": "Morgandale",
        "state": "Washington",
        "zip": 8188,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 1485.04,
      "detention": 1415.83,
      "layover": 1676.25
    }
  },
  {
    "invoiceNumber": "5e96597ad4cb7a8220e70b99",
    "loadNumber": 38,
    "invoiceDate": 1469375132,
    "billTo": {
      "name": "BIZMATIC",
      "streetAddress": "860 Beard Street",
      "city": "Bancroft",
      "state": " Alabama",
      "zip": 2726
    },
    "stops": [
      {
        "date": 1510071601,
        "name": "UNDERTAP",
        "streetAddress": "408 Delmonico Place",
        "city": "Sanford",
        "state": "Wyoming",
        "zip": 6551,
        "type": "PICKUP"
      },
      {
        "date": 1420235874,
        "name": "OVATION",
        "streetAddress": "964 Moore Street",
        "city": "Hiko",
        "state": "Louisiana",
        "zip": 5449,
        "type": "DELIVERY"
      },
      {
        "date": 1567276159,
        "name": "COMTOUR",
        "streetAddress": "314 Louise Terrace",
        "city": "Keyport",
        "state": "Vermont",
        "zip": 2540,
        "type": "DELIVERY"
      },
      {
        "date": 1473894438,
        "name": "RUBADUB",
        "streetAddress": "970 Hendrickson Street",
        "city": "Fairlee",
        "state": "North Carolina",
        "zip": 6550,
        "type": "DELIVERY"
      },
      {
        "date": 1392235916,
        "name": "INSURON",
        "streetAddress": "917 Church Avenue",
        "city": "Moscow",
        "state": "Federated States Of Micronesia",
        "zip": 6358,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 3319.73,
      "detention": 1753.16,
      "layover": 3173.85
    }
  },
  {
    "invoiceNumber": "5e96597a9c3dddba89f47e11",
    "loadNumber": 29,
    "invoiceDate": 1487595166,
    "billTo": {
      "name": "ZENTHALL",
      "streetAddress": "443 Folsom Place",
      "city": "Collins",
      "state": " Kentucky",
      "zip": 8755
    },
    "stops": [
      {
        "date": 1500016169,
        "name": "COMFIRM",
        "streetAddress": "322 Bartlett Street",
        "city": "Dana",
        "state": "South Carolina",
        "zip": 5694,
        "type": "DELIVERY"
      },
      {
        "date": 1534399324,
        "name": "INTERGEEK",
        "streetAddress": "484 Stuart Street",
        "city": "Chalfant",
        "state": "North Dakota",
        "zip": 716,
        "type": "DELIVERY"
      },
      {
        "date": 1424280609,
        "name": "SENMAO",
        "streetAddress": "259 Hastings Street",
        "city": "Bodega",
        "state": "New Mexico",
        "zip": 954,
        "type": "PICKUP"
      },
      {
        "date": 1468335780,
        "name": "HALAP",
        "streetAddress": "503 Bedford Place",
        "city": "Hobucken",
        "state": "Alaska",
        "zip": 6422,
        "type": "PICKUP"
      },
      {
        "date": 1445136432,
        "name": "TALKOLA",
        "streetAddress": "859 Benson Avenue",
        "city": "Coldiron",
        "state": "Kansas",
        "zip": 2077,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 3180.44,
      "detention": 1889.91,
      "layover": 2418.36
    }
  },
  {
    "invoiceNumber": "5e96597a390c4e4f92e20430",
    "loadNumber": 21,
    "invoiceDate": 1567876343,
    "billTo": {
      "name": "KONGENE",
      "streetAddress": "766 Cook Street",
      "city": "Newkirk",
      "state": " California",
      "zip": 5107
    },
    "stops": [
      {
        "date": 1436369178,
        "name": "XELEGYL",
        "streetAddress": "161 Nichols Avenue",
        "city": "Waterloo",
        "state": "Palau",
        "zip": 961,
        "type": "PICKUP"
      },
      {
        "date": 1405527297,
        "name": "SAVVY",
        "streetAddress": "556 Campus Road",
        "city": "Ruckersville",
        "state": "Guam",
        "zip": 6872,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 3515.65,
      "detention": 3577.10,
      "layover": 1885.79
    }
  },
  {
    "invoiceNumber": "5e96597ab004c2661d5081bb",
    "loadNumber": 25,
    "invoiceDate": 1436969878,
    "billTo": {
      "name": "GADTRON",
      "streetAddress": "898 Cameron Court",
      "city": "Coral",
      "state": " New York",
      "zip": 2211
    },
    "stops": [
      {
        "date": 1517052759,
        "name": "FARMEX",
        "streetAddress": "233 Cedar Street",
        "city": "Juntura",
        "state": "Michigan",
        "zip": 5335,
        "type": "DELIVERY"
      },
      {
        "date": 1437792463,
        "name": "VETRON",
        "streetAddress": "278 Homecrest Avenue",
        "city": "Cataract",
        "state": "Montana",
        "zip": 2846,
        "type": "DELIVERY"
      },
      {
        "date": 1485316023,
        "name": "TERASCAPE",
        "streetAddress": "846 Veterans Avenue",
        "city": "Grapeview",
        "state": "Florida",
        "zip": 542,
        "type": "PICKUP"
      },
      {
        "date": 1508022524,
        "name": "GEEKOLA",
        "streetAddress": "946 Bond Street",
        "city": "Lutsen",
        "state": "West Virginia",
        "zip": 5636,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": 2368.52,
      "detention": 1643.29,
      "layover": 2748.81
    }
  },
  {
    "invoiceNumber": "5e96597a9a224b228519ec22",
    "loadNumber": 29,
    "invoiceDate": 1407772760,
    "billTo": {
      "name": "ARTWORLDS",
      "streetAddress": "513 Duryea Place",
      "city": "Tolu",
      "state": " Colorado",
      "zip": 8823
    },
    "stops": [
      {
        "date": 1521250048,
        "name": "PORTICO",
        "streetAddress": "449 Garden Street",
        "city": "Rodman",
        "state": "Northern Mariana Islands",
        "zip": 8843,
        "type": "DELIVERY"
      },
      {
        "date": 1404881144,
        "name": "DOGTOWN",
        "streetAddress": "313 Stone Avenue",
        "city": "Joes",
        "state": "Massachusetts",
        "zip": 4873,
        "type": "PICKUP"
      },
      {
        "date": 1533973865,
        "name": "CYTRAK",
        "streetAddress": "650 Tudor Terrace",
        "city": "Skyland",
        "state": "District Of Columbia",
        "zip": 6286,
        "type": "DELIVERY"
      },
      {
        "date": 1536968109,
        "name": "AQUASURE",
        "streetAddress": "137 Conover Street",
        "city": "Succasunna",
        "state": "Virginia",
        "zip": 9959,
        "type": "PICKUP"
      },
      {
        "date": 1498332774,
        "name": "REMOLD",
        "streetAddress": "619 Euclid Avenue",
        "city": "Brandywine",
        "state": "Delaware",
        "zip": 239,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 1080.28,
      "detention": 2994.16,
      "layover": 2541.21
    }
  },
  {
    "invoiceNumber": "5e96597abb031ca25ea63847",
    "loadNumber": 35,
    "invoiceDate": 1571586682,
    "billTo": {
      "name": "SPRINGBEE",
      "streetAddress": "720 Cortelyou Road",      "city": "Avoca",
      "state": " Puerto Rico",
      "zip": 1959
    },
    "stops": [
      {
        "date": 1473514984,
        "name": "AUTOMON",
        "streetAddress": "488 Dahill Road",
        "city": "Ahwahnee",
        "state": "Rhode Island",
        "zip": 4780,
        "type": "PICKUP"
      },
      {
        "date": 1422187258,
        "name": "GEEKOL",
        "streetAddress": "851 Gelston Avenue",
        "city": "Advance",
        "state": "Georgia",
        "zip": 1554,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": 2672.91,
      "detention": 2598.65,
      "layover": 2729.84
    }
  }
];

export default fakeData;
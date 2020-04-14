const fakeData = [
  {
    "invoiceNumber": "5e951a0aad9d31d739bfcbab",
    "loadNumber": 34,
    "billTo": {
      "name": "SYNTAC",
      "streetAddress": "896 Glendale Court",
      "city": "Groveville",
      "state": " Idaho",
      "zip": 1215
    },
    "stops": [
      {
        "date": "2018-05-01T02:18:31 +07:00",
        "name": "EURON",
        "streetAddress": "901 Rost Place",
        "city": "Dorneyville",
        "state": "Massachusetts",
        "zip": 2243,
        "type": "DELIVERY"
      },
      {
        "date": "2014-09-11T01:03:10 +07:00",
        "name": "MEDIOT",
        "streetAddress": "904 Voorhies Avenue",
        "city": "Hanover",
        "state": "Oregon",
        "zip": 3072,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$3,540.83",
      "detention": "$3,268.18",
      "layover": "$3,891.29"
    }
  },
  {
    "invoiceNumber": "5e951a0a705d6fcd80ace318",
    "loadNumber": 23,
    "billTo": {
      "name": "NURPLEX",
      "streetAddress": "806 Truxton Street",
      "city": "Chamizal",
      "state": " Kansas",
      "zip": 825
    },
    "stops": [
      {
        "date": "2016-01-29T08:32:55 +08:00",
        "name": "HATOLOGY",
        "streetAddress": "902 Emmons Avenue",
        "city": "Bennett",
        "state": "American Samoa",
        "zip": 8662,
        "type": "PICKUP"
      },
      {
        "date": "2015-08-23T03:58:04 +07:00",
        "name": "ZIORE",
        "streetAddress": "764 Ridge Boulevard",
        "city": "Hannasville",
        "state": "Oklahoma",
        "zip": 4293,
        "type": "DELIVERY"
      },
      {
        "date": "2018-05-31T02:30:31 +07:00",
        "name": "SNACKTION",
        "streetAddress": "601 Miller Place",
        "city": "Chautauqua",
        "state": "Nebraska",
        "zip": 4032,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$1,278.03",
      "detention": "$1,348.18",
      "layover": "$1,707.62"
    }
  },
  {
    "invoiceNumber": "5e951a0aa8843620c658ebd8",
    "loadNumber": 35,
    "billTo": {
      "name": "NORSUL",
      "streetAddress": "689 Ide Court",
      "city": "Belva",
      "state": " Marshall Islands",
      "zip": 2551
    },
    "stops": [
      {
        "date": "2018-05-05T07:30:45 +07:00",
        "name": "SONGBIRD",
        "streetAddress": "193 Remsen Avenue",
        "city": "Sardis",
        "state": "Alaska",
        "zip": 5324,
        "type": "DELIVERY"
      },
      {
        "date": "2017-06-22T03:32:02 +07:00",
        "name": "QUAILCOM",
        "streetAddress": "707 Berry Street",
        "city": "Rosburg",
        "state": "Michigan",
        "zip": 6153,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$1,911.19",
      "detention": "$1,817.76",
      "layover": "$3,052.36"
    }
  },
  {
    "invoiceNumber": "5e951a0ae9c504b8c257448a",
    "loadNumber": 37,
    "billTo": {
      "name": "HAWKSTER",
      "streetAddress": "388 Gerry Street",
      "city": "Coral",
      "state": " Mississippi",
      "zip": 7004
    },
    "stops": [
      {
        "date": "2016-05-04T12:43:25 +07:00",
        "name": "ASIMILINE",
        "streetAddress": "617 Townsend Street",
        "city": "Coyote",
        "state": "New Hampshire",
        "zip": 2788,
        "type": "PICKUP"
      },
      {
        "date": "2014-03-16T12:48:52 +07:00",
        "name": "PETICULAR",
        "streetAddress": "679 Whitwell Place",
        "city": "Yogaville",
        "state": "Delaware",
        "zip": 8310,
        "type": "PICKUP"
      },
      {
        "date": "2019-08-29T08:31:02 +07:00",
        "name": "TUBALUM",
        "streetAddress": "315 Nassau Street",
        "city": "Succasunna",
        "state": "Georgia",
        "zip": 4467,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$3,430.66",
      "detention": "$1,702.51",
      "layover": "$3,379.00"
    }
  },
  {
    "invoiceNumber": "5e951a0ab97b6a20ac959687",
    "loadNumber": 24,
    "billTo": {
      "name": "SENTIA",
      "streetAddress": "162 Berriman Street",
      "city": "Frystown",
      "state": " Guam",
      "zip": 8949
    },
    "stops": [
      {
        "date": "2014-03-16T04:36:26 +07:00",
        "name": "FREAKIN",
        "streetAddress": "434 Baughman Place",
        "city": "Dragoon",
        "state": "Ohio",
        "zip": 2557,
        "type": "PICKUP"
      },
      {
        "date": "2017-02-24T05:36:22 +08:00",
        "name": "EMPIRICA",
        "streetAddress": "183 Front Street",
        "city": "Colton",
        "state": "Hawaii",
        "zip": 4686,
        "type": "DELIVERY"
      },
      {
        "date": "2017-04-12T07:10:20 +07:00",
        "name": "QUORDATE",
        "streetAddress": "751 College Place",
        "city": "Devon",
        "state": "Missouri",
        "zip": 3823,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$1,394.71",
      "detention": "$2,260.14",
      "layover": "$1,098.85"
    }
  },
  {
    "invoiceNumber": "5e951a0a6d7e5e16e6d90824",
    "loadNumber": 23,
    "billTo": {
      "name": "OTHERSIDE",
      "streetAddress": "681 Danforth Street",
      "city": "Southview",
      "state": " Tennessee",
      "zip": 789
    },
    "stops": [
      {
        "date": "2015-11-02T11:13:33 +08:00",
        "name": "RECOGNIA",
        "streetAddress": "852 Berkeley Place",
        "city": "Bonanza",
        "state": "Texas",
        "zip": 1573,
        "type": "PICKUP"
      },
      {
        "date": "2018-08-27T09:27:19 +07:00",
        "name": "VALPREAL",
        "streetAddress": "677 Taaffe Place",
        "city": "Englevale",
        "state": "Puerto Rico",
        "zip": 5077,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$1,337.17",
      "detention": "$3,470.44",
      "layover": "$3,843.67"
    }
  },
  {
    "invoiceNumber": "5e951a0ae4197d8fd3e7dac7",
    "loadNumber": 34,
    "billTo": {
      "name": "WAAB",
      "streetAddress": "409 Bayard Street",
      "city": "Gilgo",
      "state": " Arkansas",
      "zip": 2033
    },
    "stops": [
      {
        "date": "2017-07-09T01:00:17 +07:00",
        "name": "OHMNET",
        "streetAddress": "236 Belvidere Street",
        "city": "Clara",
        "state": "Montana",
        "zip": 4245,
        "type": "PICKUP"
      },
      {
        "date": "2020-03-19T03:55:25 +07:00",
        "name": "MOBILDATA",
        "streetAddress": "237 Cozine Avenue",
        "city": "Zortman",
        "state": "Louisiana",
        "zip": 7245,
        "type": "PICKUP"
      },
      {
        "date": "2014-12-24T09:01:00 +08:00",
        "name": "EPLODE",
        "streetAddress": "138 Beekman Place",
        "city": "Winfred",
        "state": "Alabama",
        "zip": 2549,
        "type": "PICKUP"
      },
      {
        "date": "2018-07-20T11:37:01 +07:00",
        "name": "AUSTECH",
        "streetAddress": "823 Bulwer Place",
        "city": "Grayhawk",
        "state": "Maryland",
        "zip": 2532,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$3,005.38",
      "detention": "$3,004.53",
      "layover": "$1,085.27"
    }
  },
  {
    "invoiceNumber": "5e951a0a4994a90aac6fcfa1",
    "loadNumber": 22,
    "billTo": {
      "name": "BRISTO",
      "streetAddress": "703 Huntington Street",
      "city": "Nord",
      "state": " Vermont",
      "zip": 9208
    },
    "stops": [
      {
        "date": "2017-04-18T04:57:38 +07:00",
        "name": "QUIZKA",
        "streetAddress": "452 Ditmars Street",
        "city": "Lavalette",
        "state": "Pennsylvania",
        "zip": 5148,
        "type": "DELIVERY"
      },
      {
        "date": "2020-02-25T12:11:56 +08:00",
        "name": "COLUMELLA",
        "streetAddress": "329 Cornelia Street",
        "city": "Whitestone",
        "state": "Federated States Of Micronesia",
        "zip": 1268,
        "type": "DELIVERY"
      },
      {
        "date": "2018-08-24T10:30:31 +07:00",
        "name": "KATAKANA",
        "streetAddress": "777 Troy Avenue",
        "city": "Wakarusa",
        "state": "New Jersey",
        "zip": 7009,
        "type": "DELIVERY"
      },
      {
        "date": "2014-03-22T02:12:41 +07:00",
        "name": "PROXSOFT",
        "streetAddress": "146 Cumberland Street",
        "city": "Indio",
        "state": "Iowa",
        "zip": 3445,
        "type": "PICKUP"
      },
      {
        "date": "2014-01-14T12:01:39 +08:00",
        "name": "ELPRO",
        "streetAddress": "994 Preston Court",
        "city": "Neahkahnie",
        "state": "Wyoming",
        "zip": 7114,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$2,162.23",
      "detention": "$2,681.20",
      "layover": "$2,914.83"
    }
  },
  {
    "invoiceNumber": "5e951a0a55b63dbe4a1e3cd6",
    "loadNumber": 26,
    "billTo": {
      "name": "ZYTRAC",
      "streetAddress": "542 Java Street",
      "city": "Saddlebrooke",
      "state": " District Of Columbia",
      "zip": 2734
    },
    "stops": [
      {
        "date": "2016-07-10T05:05:57 +07:00",
        "name": "NETPLODE",
        "streetAddress": "524 Fane Court",
        "city": "Utting",
        "state": "Colorado",
        "zip": 3737,
        "type": "DELIVERY"
      },
      {
        "date": "2019-12-07T08:33:01 +08:00",
        "name": "GOLISTIC",
        "streetAddress": "484 Pacific Street",
        "city": "Franklin",
        "state": "West Virginia",
        "zip": 7804,
        "type": "DELIVERY"
      },
      {
        "date": "2019-11-15T08:31:16 +08:00",
        "name": "ENERFORCE",
        "streetAddress": "951 Veterans Avenue",
        "city": "Riegelwood",
        "state": "California",
        "zip": 1647,
        "type": "PICKUP"
      },
      {
        "date": "2014-05-05T11:08:56 +07:00",
        "name": "NEPTIDE",
        "streetAddress": "252 Lincoln Terrace",
        "city": "Summertown",
        "state": "New Mexico",
        "zip": 7427,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$1,723.55",
      "detention": "$2,465.88",
      "layover": "$3,483.23"
    }
  },
  {
    "invoiceNumber": "5e951a0a2b2f32d50984507b",
    "loadNumber": 26,
    "billTo": {
      "name": "QUAREX",
      "streetAddress": "932 Quay Street",
      "city": "Eagleville",
      "state": " North Carolina",
      "zip": 5637
    },
    "stops": [
      {
        "date": "2019-10-08T02:31:16 +07:00",
        "name": "HELIXO",
        "streetAddress": "404 Hill Street",
        "city": "Harrodsburg",
        "state": "Illinois",
        "zip": 9724,
        "type": "DELIVERY"
      },
      {
        "date": "2016-06-14T12:13:02 +07:00",
        "name": "ACCIDENCY",
        "streetAddress": "786 Alice Court",
        "city": "Bergoo",
        "state": "Kentucky",
        "zip": 6731,
        "type": "PICKUP"
      },
      {
        "date": "2015-10-15T01:47:06 +07:00",
        "name": "LIMOZEN",
        "streetAddress": "907 Vista Place",
        "city": "Needmore",
        "state": "Minnesota",
        "zip": 1473,
        "type": "PICKUP"
      },
      {
        "date": "2014-10-21T06:45:53 +07:00",
        "name": "CINASTER",
        "streetAddress": "469 Murdock Court",
        "city": "Jacksonburg",
        "state": "Connecticut",
        "zip": 1129,
        "type": "PICKUP"
      },
      {
        "date": "2018-05-16T11:20:14 +07:00",
        "name": "NURALI",
        "streetAddress": "750 Manhattan Court",
        "city": "Talpa",
        "state": "Nevada",
        "zip": 2932,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$2,821.73",
      "detention": "$3,773.09",
      "layover": "$2,759.25"
    }
  },
  {
    "invoiceNumber": "5e951a0aa12e768b8942087a",
    "loadNumber": 28,
    "billTo": {
      "name": "BUZZWORKS",
      "streetAddress": "680 Wythe Avenue",
      "city": "Roderfield",
      "state": " South Dakota",
      "zip": 8717
    },
    "stops": [
      {
        "date": "2018-11-14T07:41:34 +08:00",
        "name": "SULTRAX",
        "streetAddress": "170 Micieli Place",
        "city": "Lafferty",
        "state": "Rhode Island",
        "zip": 2668,
        "type": "PICKUP"
      },
      {
        "date": "2020-03-03T11:59:07 +08:00",
        "name": "PARCOE",
        "streetAddress": "161 Dahill Road",
        "city": "Dola",
        "state": "Utah",
        "zip": 2438,
        "type": "DELIVERY"
      },
      {
        "date": "2019-07-20T12:22:32 +07:00",
        "name": "ZANITY",
        "streetAddress": "578 Bergen Avenue",
        "city": "Brazos",
        "state": "Virginia",
        "zip": 2611,
        "type": "DELIVERY"
      },
      {
        "date": "2016-06-06T01:29:42 +07:00",
        "name": "EYEWAX",
        "streetAddress": "835 Cropsey Avenue",
        "city": "Delco",
        "state": "Florida",
        "zip": 778,
        "type": "PICKUP"
      },
      {
        "date": "2016-10-30T01:20:56 +07:00",
        "name": "IMPERIUM",
        "streetAddress": "913 Crescent Street",
        "city": "Greenock",
        "state": "Northern Mariana Islands",
        "zip": 1365,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$1,866.89",
      "detention": "$2,688.89",
      "layover": "$1,321.30"
    }
  },
  {
    "invoiceNumber": "5e951a0ae12278f35a6b921c",
    "loadNumber": 25,
    "billTo": {
      "name": "VIOCULAR",
      "streetAddress": "998 Metrotech Courtr",
      "city": "Kingstowne",
      "state": " Palau",
      "zip": 9247
    },
    "stops": [
      {
        "date": "2017-06-29T04:57:23 +07:00",
        "name": "REALYSIS",
        "streetAddress": "119 Sunnyside Court",
        "city": "Temperanceville",
        "state": "South Carolina",
        "zip": 2416,
        "type": "PICKUP"
      },
      {
        "date": "2014-04-20T09:15:41 +07:00",
        "name": "PLASMOS",
        "streetAddress": "890 Conover Street",
        "city": "Ola",
        "state": "Wisconsin",
        "zip": 7404,
        "type": "PICKUP"
      },
      {
        "date": "2019-04-22T03:39:50 +07:00",
        "name": "UTARA",
        "streetAddress": "181 Underhill Avenue",
        "city": "Concho",
        "state": "Indiana",
        "zip": 4681,
        "type": "DELIVERY"
      },
      {
        "date": "2017-08-30T03:10:34 +07:00",
        "name": "ORONOKO",
        "streetAddress": "787 Meadow Street",
        "city": "Fairforest",
        "state": "Maine",
        "zip": 670,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$1,561.80",
      "detention": "$2,410.15",
      "layover": "$3,326.19"
    }
  },
  {
    "invoiceNumber": "5e951a0a6c205152681bfc27",
    "loadNumber": 37,
    "billTo": {
      "name": "TEMORAK",
      "streetAddress": "527 Judge Street",
      "city": "Sylvanite",
      "state": " Washington",
      "zip": 1972
    },
    "stops": [
      {
        "date": "2018-02-28T09:08:31 +08:00",
        "name": "FUTURITY",
        "streetAddress": "665 Gallatin Place",
        "city": "Jamestown",
        "state": "Arizona",
        "zip": 7408,
        "type": "DELIVERY"
      },
      {
        "date": "2016-02-16T05:06:59 +08:00",
        "name": "DOGSPA",
        "streetAddress": "424 Mill Lane",
        "city": "Brantleyville",
        "state": "Virgin Islands",
        "zip": 7289,
        "type": "PICKUP"
      },
      {
        "date": "2018-03-05T06:24:47 +08:00",
        "name": "INEAR",
        "streetAddress": "571 Ryder Avenue",
        "city": "Shelby",
        "state": "North Dakota",
        "zip": 4994,
        "type": "DELIVERY"
      },
      {
        "date": "2018-06-20T02:43:10 +07:00",
        "name": "SNIPS",
        "streetAddress": "870 Hampton Avenue",
        "city": "Nutrioso",
        "state": "Idaho",
        "zip": 1308,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$2,371.25",
      "detention": "$2,060.07",
      "layover": "$1,118.54"
    }
  },
  {
    "invoiceNumber": "5e951a0aca4cce3726ed2483",
    "loadNumber": 21,
    "billTo": {
      "name": "METROZ",
      "streetAddress": "331 Girard Street",
      "city": "Whitehaven",
      "state": " Massachusetts",
      "zip": 2852
    },
    "stops": [
      {
        "date": "2018-04-03T08:23:09 +07:00",
        "name": "MEDCOM",
        "streetAddress": "976 Georgia Avenue",
        "city": "Crown",
        "state": "Oregon",
        "zip": 5568,
        "type": "PICKUP"
      },
      {
        "date": "2016-03-15T11:55:54 +07:00",
        "name": "BRAINCLIP",
        "streetAddress": "267 Himrod Street",
        "city": "Iola",
        "state": "Kansas",
        "zip": 3296,
        "type": "PICKUP"
      },
      {
        "date": "2020-02-06T06:50:27 +08:00",
        "name": "ZENSOR",
        "streetAddress": "938 Schenectady Avenue",
        "city": "Siglerville",
        "state": "American Samoa",
        "zip": 5658,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$1,449.75",
      "detention": "$3,899.01",
      "layover": "$1,939.10"
    }
  },
  {
    "invoiceNumber": "5e951a0a23c6f1f8e2dd6594",
    "loadNumber": 24,
    "billTo": {
      "name": "EMTRAC",
      "streetAddress": "664 Dearborn Court",
      "city": "Shepardsville",
      "state": " Oklahoma",
      "zip": 9089
    },
    "stops": [
      {
        "date": "2014-10-29T01:09:36 +07:00",
        "name": "HIVEDOM",
        "streetAddress": "175 Broadway ",
        "city": "Libertytown",
        "state": "Nebraska",
        "zip": 1190,
        "type": "DELIVERY"
      },
      {
        "date": "2014-04-30T03:17:02 +07:00",
        "name": "ECRATER",
        "streetAddress": "666 Hegeman Avenue",
        "city": "Tibbie",
        "state": "Marshall Islands",
        "zip": 3244,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$2,956.97",
      "detention": "$3,184.08",
      "layover": "$2,306.69"
    }
  },
  {
    "invoiceNumber": "5e951a0aa741011953e526b1",
    "loadNumber": 39,
    "billTo": {
      "name": "KOG",
      "streetAddress": "764 Waldorf Court",
      "city": "Richville",
      "state": " Alaska",
      "zip": 5302
    },
    "stops": [
      {
        "date": "2018-11-04T10:59:15 +08:00",
        "name": "IMAGINART",
        "streetAddress": "443 Pleasant Place",
        "city": "Hayes",
        "state": "Michigan",
        "zip": 8923,
        "type": "PICKUP"
      },
      {
        "date": "2016-03-28T12:58:13 +07:00",
        "name": "DENTREX",
        "streetAddress": "588 Carlton Avenue",
        "city": "Adamstown",
        "state": "Mississippi",
        "zip": 1705,
        "type": "PICKUP"
      },
      {
        "date": "2019-11-25T01:25:49 +08:00",
        "name": "ESCHOIR",
        "streetAddress": "961 Clay Street",
        "city": "Shindler",
        "state": "New Hampshire",
        "zip": 515,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$1,922.16",
      "detention": "$2,847.20",
      "layover": "$3,598.99"
    }
  },
  {
    "invoiceNumber": "5e951a0adbb2e396e0f4ce25",
    "loadNumber": 32,
    "billTo": {
      "name": "LOCAZONE",
      "streetAddress": "252 Cheever Place",
      "city": "Toftrees",
      "state": " Delaware",
      "zip": 6542
    },
    "stops": [
      {
        "date": "2018-07-25T03:30:41 +07:00",
        "name": "ORBOID",
        "streetAddress": "566 Neptune Court",
        "city": "Enoree",
        "state": "Georgia",
        "zip": 5670,
        "type": "PICKUP"
      },
      {
        "date": "2016-08-20T01:52:59 +07:00",
        "name": "TELEQUIET",
        "streetAddress": "850 Lawn Court",
        "city": "Fairmount",
        "state": "Guam",
        "zip": 4079,
        "type": "DELIVERY"
      },
      {
        "date": "2015-03-10T07:40:11 +07:00",
        "name": "SINGAVERA",
        "streetAddress": "935 Vandalia Avenue",
        "city": "Machias",
        "state": "Ohio",
        "zip": 7897,
        "type": "PICKUP"
      },
      {
        "date": "2018-09-06T01:51:34 +07:00",
        "name": "MICROLUXE",
        "streetAddress": "152 Macdougal Street",
        "city": "Sussex",
        "state": "Hawaii",
        "zip": 8854,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$1,703.62",
      "detention": "$1,220.41",
      "layover": "$3,505.40"
    }
  },
  {
    "invoiceNumber": "5e951a0ad70608c5470f244d",
    "loadNumber": 24,
    "billTo": {
      "name": "PAPRIKUT",
      "streetAddress": "423 Kaufman Place",
      "city": "Dante",
      "state": " Missouri",
      "zip": 9803
    },
    "stops": [
      {
        "date": "2016-12-11T04:56:34 +08:00",
        "name": "UNIA",
        "streetAddress": "714 Clara Street",
        "city": "Saticoy",
        "state": "Tennessee",
        "zip": 8383,
        "type": "DELIVERY"
      },
      {
        "date": "2019-04-08T08:39:29 +07:00",
        "name": "MINGA",
        "streetAddress": "305 Williams Court",
        "city": "Falmouth",
        "state": "Texas",
        "zip": 3875,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$2,698.16",
      "detention": "$3,217.00",
      "layover": "$3,372.10"
    }
  },
  {
    "invoiceNumber": "5e951a0af50e39d8354ecefa",
    "loadNumber": 28,
    "billTo": {
      "name": "EARTHPLEX",
      "streetAddress": "690 Roder Avenue",
      "city": "Blackgum",
      "state": " Puerto Rico",
      "zip": 584
    },
    "stops": [
      {
        "date": "2018-06-12T02:59:17 +07:00",
        "name": "ENQUILITY",
        "streetAddress": "284 Canton Court",
        "city": "Irwin",
        "state": "Arkansas",
        "zip": 1460,
        "type": "PICKUP"
      },
      {
        "date": "2019-07-20T02:56:27 +07:00",
        "name": "CORECOM",
        "streetAddress": "822 Atlantic Avenue",
        "city": "Idledale",
        "state": "Montana",
        "zip": 5824,
        "type": "DELIVERY"
      },
      {
        "date": "2016-04-17T04:34:41 +07:00",
        "name": "ZIDOX",
        "streetAddress": "361 Brooklyn Avenue",
        "city": "Conestoga",
        "state": "Louisiana",
        "zip": 9768,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$2,383.28",
      "detention": "$2,869.18",
      "layover": "$2,133.14"
    }
  },
  {
    "invoiceNumber": "5e951a0a796644df1ece8a56",
    "loadNumber": 38,
    "billTo": {
      "name": "GAZAK",
      "streetAddress": "570 Madison Place",
      "city": "Carbonville",
      "state": " Alabama",
      "zip": 5961
    },
    "stops": [
      {
        "date": "2017-10-09T10:45:03 +07:00",
        "name": "DAIDO",
        "streetAddress": "402 Wakeman Place",
        "city": "Topaz",
        "state": "Maryland",
        "zip": 253,
        "type": "DELIVERY"
      },
      {
        "date": "2015-10-07T02:01:42 +07:00",
        "name": "ACCUSAGE",
        "streetAddress": "563 Sumner Place",
        "city": "Emerald",
        "state": "Vermont",
        "zip": 9720,
        "type": "PICKUP"
      },
      {
        "date": "2014-06-07T12:41:22 +07:00",
        "name": "DYMI",
        "streetAddress": "259 Rockwell Place",
        "city": "Magnolia",
        "state": "Pennsylvania",
        "zip": 7282,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$2,817.35",
      "detention": "$2,986.66",
      "layover": "$3,434.10"
    }
  },
  {
    "invoiceNumber": "5e951a0a5548a960df1bd28f",
    "loadNumber": 29,
    "billTo": {
      "name": "LIMAGE",
      "streetAddress": "456 Canda Avenue",
      "city": "Ladera",
      "state": " Federated States Of Micronesia",
      "zip": 9947
    },
    "stops": [
      {
        "date": "2016-01-22T03:09:31 +08:00",
        "name": "OZEAN",
        "streetAddress": "917 Lamont Court",
        "city": "Haena",
        "state": "New Jersey",
        "zip": 6089,
        "type": "PICKUP"
      },
      {
        "date": "2018-08-12T11:05:19 +07:00",
        "name": "GEEKOL",
        "streetAddress": "793 Meeker Avenue",
        "city": "Nile",
        "state": "Iowa",
        "zip": 1113,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$2,348.22",
      "detention": "$1,127.30",
      "layover": "$1,389.95"
    }
  },
  {
    "invoiceNumber": "5e951a0a217702e871ed27e9",
    "loadNumber": 38,
    "billTo": {
      "name": "INQUALA",
      "streetAddress": "626 Burnett Street",
      "city": "Crumpler",
      "state": " Wyoming",
      "zip": 8270
    },
    "stops": [
      {
        "date": "2015-02-18T04:29:17 +08:00",
        "name": "COGNICODE",
        "streetAddress": "557 Highland Place",
        "city": "Dargan",
        "state": "District Of Columbia",
        "zip": 3690,
        "type": "DELIVERY"
      },
      {
        "date": "2016-03-20T05:01:11 +07:00",
        "name": "EARTHWAX",
        "streetAddress": "718 Dunne Court",
        "city": "Woodburn",
        "state": "Colorado",
        "zip": 5748,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$1,741.45",
      "detention": "$2,975.46",
      "layover": "$2,579.40"
    }
  },
  {
    "invoiceNumber": "5e951a0a557ba24b23785e7f",
    "loadNumber": 29,
    "billTo": {
      "name": "ORBIXTAR",
      "streetAddress": "104 Heyward Street",
      "city": "Sunnyside",
      "state": " West Virginia",
      "zip": 1690
    },
    "stops": [
      {
        "date": "2015-06-20T10:11:27 +07:00",
        "name": "XUMONK",
        "streetAddress": "887 Hendrickson Street",
        "city": "Cassel",
        "state": "California",
        "zip": 7160,
        "type": "DELIVERY"
      },
      {
        "date": "2020-04-06T11:46:36 +07:00",
        "name": "ZYTREX",
        "streetAddress": "222 Walker Court",
        "city": "Escondida",
        "state": "New Mexico",
        "zip": 4762,
        "type": "DELIVERY"
      },
      {
        "date": "2018-11-28T03:18:21 +08:00",
        "name": "OVIUM",
        "streetAddress": "675 Benson Avenue",
        "city": "Cutter",
        "state": "North Carolina",
        "zip": 7429,
        "type": "PICKUP"
      },
      {
        "date": "2017-09-28T11:56:29 +07:00",
        "name": "KYAGORO",
        "streetAddress": "350 Everit Street",
        "city": "Bentonville",
        "state": "Illinois",
        "zip": 4947,
        "type": "PICKUP"
      },
      {
        "date": "2015-06-02T02:02:32 +07:00",
        "name": "ZOGAK",
        "streetAddress": "182 Navy Walk",
        "city": "Ada",
        "state": "Kentucky",
        "zip": 5900,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$3,611.04",
      "detention": "$3,953.76",
      "layover": "$1,967.24"
    }
  },
  {
    "invoiceNumber": "5e951a0a32cc5c62c100d303",
    "loadNumber": 26,
    "billTo": {
      "name": "GORGANIC",
      "streetAddress": "876 Livonia Avenue",
      "city": "Brutus",
      "state": " Minnesota",
      "zip": 2135
    },
    "stops": [
      {
        "date": "2017-06-17T05:25:35 +07:00",
        "name": "ASSURITY",
        "streetAddress": "222 Just Court",
        "city": "Crayne",
        "state": "Connecticut",
        "zip": 5805,
        "type": "PICKUP"
      },
      {
        "date": "2017-02-25T04:58:11 +08:00",
        "name": "CIPROMOX",
        "streetAddress": "942 Ainslie Street",
        "city": "Edinburg",
        "state": "Nevada",
        "zip": 3562,
        "type": "DELIVERY"
      },
      {
        "date": "2018-07-27T07:49:40 +07:00",
        "name": "TELEPARK",
        "streetAddress": "159 Gunther Place",
        "city": "Eggertsville",
        "state": "South Dakota",
        "zip": 4869,
        "type": "DELIVERY"
      },
      {
        "date": "2014-06-24T12:23:27 +07:00",
        "name": "WAZZU",
        "streetAddress": "333 Irvington Place",
        "city": "Jugtown",
        "state": "Rhode Island",
        "zip": 350,
        "type": "PICKUP"
      },
      {
        "date": "2015-04-16T08:14:23 +07:00",
        "name": "COMBOGEN",
        "streetAddress": "624 Hooper Street",
        "city": "Healy",
        "state": "Utah",
        "zip": 1780,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$1,388.41",
      "detention": "$3,997.61",
      "layover": "$2,944.76"
    }
  },
  {
    "invoiceNumber": "5e951a0a063ea4461d70209f",
    "loadNumber": 37,
    "billTo": {
      "name": "KONGENE",
      "streetAddress": "252 Thomas Street",
      "city": "Grahamtown",
      "state": " Virginia",
      "zip": 5639
    },
    "stops": [
      {
        "date": "2014-09-25T12:33:13 +07:00",
        "name": "COMTEST",
        "streetAddress": "410 Loring Avenue",
        "city": "Snyderville",
        "state": "Florida",
        "zip": 5162,
        "type": "DELIVERY"
      },
      {
        "date": "2014-01-11T06:08:54 +08:00",
        "name": "JASPER",
        "streetAddress": "135 Cove Lane",
        "city": "Cascades",
        "state": "Northern Mariana Islands",
        "zip": 627,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$2,039.23",
      "detention": "$3,485.17",
      "layover": "$3,516.84"
    }
  },
  {
    "invoiceNumber": "5e951a0afd51ceae43a22f0f",
    "loadNumber": 28,
    "billTo": {
      "name": "PEARLESEX",
      "streetAddress": "525 Radde Place",
      "city": "Belvoir",
      "state": " Palau",
      "zip": 472
    },
    "stops": [
      {
        "date": "2019-06-11T02:24:06 +07:00",
        "name": "AQUAZURE",
        "streetAddress": "323 Gates Avenue",
        "city": "Sharon",
        "state": "South Carolina",
        "zip": 6302,
        "type": "DELIVERY"
      },
      {
        "date": "2017-08-29T12:42:37 +07:00",
        "name": "MARTGO",
        "streetAddress": "517 Bergen Place",
        "city": "Grill",
        "state": "Wisconsin",
        "zip": 1184,
        "type": "DELIVERY"
      },
      {
        "date": "2014-02-22T12:17:14 +08:00",
        "name": "YURTURE",
        "streetAddress": "338 Garnet Street",
        "city": "Suitland",
        "state": "Indiana",
        "zip": 8678,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$2,302.94",
      "detention": "$1,039.31",
      "layover": "$1,931.87"
    }
  },
  {
    "invoiceNumber": "5e951a0a56224c3c39f28646",
    "loadNumber": 33,
    "billTo": {
      "name": "EXODOC",
      "streetAddress": "926 Wolcott Street",
      "city": "Chloride",
      "state": " Maine",
      "zip": 1986
    },
    "stops": [
      {
        "date": "2019-05-08T07:59:07 +07:00",
        "name": "HINWAY",
        "streetAddress": "691 Dupont Street",
        "city": "Ezel",
        "state": "Washington",
        "zip": 3574,
        "type": "DELIVERY"
      },
      {
        "date": "2019-06-23T02:45:19 +07:00",
        "name": "GEOFORM",
        "streetAddress": "913 Coleman Street",
        "city": "Farmers",
        "state": "Arizona",
        "zip": 9987,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$1,544.33",
      "detention": "$3,172.84",
      "layover": "$2,712.56"
    }
  },
  {
    "invoiceNumber": "5e951a0a0081ec7ba44d9584",
    "loadNumber": 25,
    "billTo": {
      "name": "GLOBOIL",
      "streetAddress": "252 Wolf Place",
      "city": "Lindisfarne",
      "state": " Virgin Islands",
      "zip": 1866
    },
    "stops": [
      {
        "date": "2019-08-24T12:46:10 +07:00",
        "name": "UNIWORLD",
        "streetAddress": "391 Visitation Place",
        "city": "Wolcott",
        "state": "North Dakota",
        "zip": 3665,
        "type": "PICKUP"
      },
      {
        "date": "2019-01-14T02:33:06 +08:00",
        "name": "ZOLAR",
        "streetAddress": "428 Friel Place",
        "city": "Waumandee",
        "state": "Idaho",
        "zip": 5043,
        "type": "PICKUP"
      },
      {
        "date": "2017-10-22T08:40:34 +07:00",
        "name": "SLOGANAUT",
        "streetAddress": "964 Belmont Avenue",
        "city": "Herald",
        "state": "Massachusetts",
        "zip": 562,
        "type": "DELIVERY"
      },
      {
        "date": "2015-03-19T11:41:59 +07:00",
        "name": "FRENEX",
        "streetAddress": "869 Albany Avenue",
        "city": "Nipinnawasee",
        "state": "Oregon",
        "zip": 6629,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$2,489.30",
      "detention": "$3,299.95",
      "layover": "$3,134.06"
    }
  },
  {
    "invoiceNumber": "5e951a0a840648e3789be3b5",
    "loadNumber": 30,
    "billTo": {
      "name": "ZYTRAX",
      "streetAddress": "919 Hunts Lane",
      "city": "Wildwood",
      "state": " Kansas",
      "zip": 6412
    },
    "stops": [
      {
        "date": "2017-04-25T03:28:33 +07:00",
        "name": "VERTON",
        "streetAddress": "970 Branton Street",
        "city": "Driftwood",
        "state": "American Samoa",
        "zip": 4359,
        "type": "PICKUP"
      },
      {
        "date": "2015-03-23T11:20:49 +07:00",
        "name": "COGENTRY",
        "streetAddress": "728 Dewitt Avenue",
        "city": "Fedora",
        "state": "Oklahoma",
        "zip": 6619,
        "type": "DELIVERY"
      },
      {
        "date": "2019-07-17T09:46:21 +07:00",
        "name": "BARKARAMA",
        "streetAddress": "742 Sullivan Place",
        "city": "Chelsea",
        "state": "Nebraska",
        "zip": 3455,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$1,531.21",
      "detention": "$2,197.35",
      "layover": "$2,810.01"
    }
  },
  {
    "invoiceNumber": "5e951a0a85bb0c8652dbc023",
    "loadNumber": 21,
    "billTo": {
      "name": "EVEREST",
      "streetAddress": "526 Woodrow Court",
      "city": "Fairhaven",
      "state": " Marshall Islands",
      "zip": 7229
    },
    "stops": [
      {
        "date": "2015-05-19T10:19:51 +07:00",
        "name": "EWAVES",
        "streetAddress": "507 Lake Place",
        "city": "Idamay",
        "state": "Alaska",
        "zip": 9430,
        "type": "PICKUP"
      },
      {
        "date": "2018-04-26T09:22:05 +07:00",
        "name": "COMVENE",
        "streetAddress": "460 Rose Street",
        "city": "Weeksville",
        "state": "Michigan",
        "zip": 6430,
        "type": "PICKUP"
      },
      {
        "date": "2017-03-14T07:44:10 +07:00",
        "name": "DIGIRANG",
        "streetAddress": "115 Roosevelt Court",
        "city": "Titanic",
        "state": "Mississippi",
        "zip": 5974,
        "type": "DELIVERY"
      },
      {
        "date": "2016-12-13T08:33:48 +08:00",
        "name": "ZILENCIO",
        "streetAddress": "945 Monitor Street",
        "city": "Websterville",
        "state": "New Hampshire",
        "zip": 183,
        "type": "DELIVERY"
      },
      {
        "date": "2015-08-27T01:38:30 +07:00",
        "name": "MEMORA",
        "streetAddress": "256 Winthrop Street",
        "city": "Loomis",
        "state": "Delaware",
        "zip": 2780,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$3,518.38",
      "detention": "$2,629.30",
      "layover": "$3,491.27"
    }
  },
  {
    "invoiceNumber": "5e951a0a25e79890a4225548",
    "loadNumber": 36,
    "billTo": {
      "name": "PRINTSPAN",
      "streetAddress": "207 Ryder Street",
      "city": "Kirk",
      "state": " Georgia",
      "zip": 5139
    },
    "stops": [
      {
        "date": "2016-09-01T01:11:30 +07:00",
        "name": "EDECINE",
        "streetAddress": "736 Fay Court",
        "city": "Beason",
        "state": "Guam",
        "zip": 185,
        "type": "DELIVERY"
      },
      {
        "date": "2017-09-23T08:44:36 +07:00",
        "name": "SONGLINES",
        "streetAddress": "693 Arlington Avenue",
        "city": "Wollochet",
        "state": "Ohio",
        "zip": 6975,
        "type": "PICKUP"
      },
      {
        "date": "2019-07-09T06:01:50 +07:00",
        "name": "OLUCORE",
        "streetAddress": "323 Clarkson Avenue",
        "city": "Retsof",
        "state": "Hawaii",
        "zip": 2952,
        "type": "PICKUP"
      },
      {
        "date": "2015-08-21T04:43:10 +07:00",
        "name": "COMTRAIL",
        "streetAddress": "717 Ridgecrest Terrace",
        "city": "Blue",
        "state": "Missouri",
        "zip": 8041,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$1,999.71",
      "detention": "$2,133.57",
      "layover": "$2,881.07"
    }
  },
  {
    "invoiceNumber": "5e951a0a0ea7bac9048aea8d",
    "loadNumber": 26,
    "billTo": {
      "name": "ISOPLEX",
      "streetAddress": "928 Melrose Street",
      "city": "Springville",
      "state": " Tennessee",
      "zip": 2016
    },
    "stops": [
      {
        "date": "2015-12-01T05:55:34 +08:00",
        "name": "THREDZ",
        "streetAddress": "671 Coleridge Street",
        "city": "Laurelton",
        "state": "Texas",
        "zip": 2068,
        "type": "PICKUP"
      },
      {
        "date": "2015-12-01T01:21:15 +08:00",
        "name": "SUREMAX",
        "streetAddress": "523 Ditmas Avenue",
        "city": "Bethany",
        "state": "Puerto Rico",
        "zip": 993,
        "type": "DELIVERY"
      },
      {
        "date": "2014-04-08T12:57:28 +07:00",
        "name": "HALAP",
        "streetAddress": "897 Nelson Street",
        "city": "Blanco",
        "state": "Arkansas",
        "zip": 7701,
        "type": "DELIVERY"
      },
      {
        "date": "2020-03-23T06:17:40 +07:00",
        "name": "COLAIRE",
        "streetAddress": "696 Withers Street",
        "city": "Outlook",
        "state": "Montana",
        "zip": 1271,
        "type": "PICKUP"
      },
      {
        "date": "2016-10-14T10:50:03 +07:00",
        "name": "IZZBY",
        "streetAddress": "673 Kenilworth Place",
        "city": "Greenfields",
        "state": "Louisiana",
        "zip": 7166,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$3,556.33",
      "detention": "$1,586.62",
      "layover": "$2,575.45"
    }
  },
  {
    "invoiceNumber": "5e951a0a466f7535ac580180",
    "loadNumber": 35,
    "billTo": {
      "name": "OBONES",
      "streetAddress": "610 Oakland Place",
      "city": "Jennings",
      "state": " Alabama",
      "zip": 6522
    },
    "stops": [
      {
        "date": "2015-08-19T12:10:29 +07:00",
        "name": "PREMIANT",
        "streetAddress": "853 Powers Street",
        "city": "Abrams",
        "state": "Maryland",
        "zip": 398,
        "type": "DELIVERY"
      },
      {
        "date": "2018-11-07T07:40:18 +08:00",
        "name": "SOFTMICRO",
        "streetAddress": "978 Christopher Avenue",
        "city": "Lithium",
        "state": "Vermont",
        "zip": 9279,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$3,295.94",
      "detention": "$3,830.83",
      "layover": "$3,563.15"
    }
  },
  {
    "invoiceNumber": "5e951a0a375f8c8abc033fa9",
    "loadNumber": 20,
    "billTo": {
      "name": "ENTHAZE",
      "streetAddress": "578 Dewey Place",
      "city": "Cliff",
      "state": " Pennsylvania",
      "zip": 3979
    },
    "stops": [
      {
        "date": "2020-02-25T03:47:25 +08:00",
        "name": "QABOOS",
        "streetAddress": "918 Beaver Street",
        "city": "Berwind",
        "state": "Federated States Of Micronesia",
        "zip": 1709,
        "type": "DELIVERY"
      },
      {
        "date": "2016-07-27T10:16:40 +07:00",
        "name": "JUNIPOOR",
        "streetAddress": "807 Anthony Street",
        "city": "Riviera",
        "state": "New Jersey",
        "zip": 1534,
        "type": "PICKUP"
      },
      {
        "date": "2018-03-20T11:41:09 +07:00",
        "name": "CYTREK",
        "streetAddress": "931 Seagate Terrace",
        "city": "Sanders",
        "state": "Iowa",
        "zip": 7558,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$2,851.14",
      "detention": "$1,242.98",
      "layover": "$2,035.83"
    }
  },
  {
    "invoiceNumber": "5e951a0a29049971d7116782",
    "loadNumber": 40,
    "billTo": {
      "name": "CUBIX",
      "streetAddress": "758 Bassett Avenue",
      "city": "Golconda",
      "state": " Wyoming",
      "zip": 1255
    },
    "stops": [
      {
        "date": "2017-12-23T10:08:40 +08:00",
        "name": "DEEPENDS",
        "streetAddress": "442 Nevins Street",
        "city": "Clarksburg",
        "state": "District Of Columbia",
        "zip": 8132,
        "type": "DELIVERY"
      },
      {
        "date": "2015-08-24T09:12:16 +07:00",
        "name": "FURNAFIX",
        "streetAddress": "568 Beaumont Street",
        "city": "Barrelville",
        "state": "Colorado",
        "zip": 1507,
        "type": "DELIVERY"
      },
      {
        "date": "2020-01-13T04:59:16 +08:00",
        "name": "WRAPTURE",
        "streetAddress": "117 Poplar Street",
        "city": "Stonybrook",
        "state": "West Virginia",
        "zip": 9697,
        "type": "DELIVERY"
      },
      {
        "date": "2019-10-18T02:23:15 +07:00",
        "name": "UTARIAN",
        "streetAddress": "182 Ovington Court",
        "city": "Hendersonville",
        "state": "California",
        "zip": 6105,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$3,180.10",
      "detention": "$3,392.22",
      "layover": "$3,543.67"
    }
  },
  {
    "invoiceNumber": "5e951a0a52061735010b6bc7",
    "loadNumber": 35,
    "billTo": {
      "name": "ATOMICA",
      "streetAddress": "172 Onderdonk Avenue",
      "city": "Osage",
      "state": " New Mexico",
      "zip": 511
    },
    "stops": [
      {
        "date": "2019-04-08T11:38:25 +07:00",
        "name": "ZENTRY",
        "streetAddress": "990 Junius Street",
        "city": "Worton",
        "state": "North Carolina",
        "zip": 2664,
        "type": "PICKUP"
      },
      {
        "date": "2014-10-31T01:41:16 +07:00",
        "name": "KRAG",
        "streetAddress": "143 Post Court",
        "city": "Dixie",
        "state": "Illinois",
        "zip": 9472,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$2,476.64",
      "detention": "$1,141.19",
      "layover": "$1,462.87"
    }
  },
  {
    "invoiceNumber": "5e951a0a81fb0b140f3f2d93",
    "loadNumber": 30,
    "billTo": {
      "name": "NIPAZ",
      "streetAddress": "505 Louisiana Avenue",
      "city": "Wheatfields",
      "state": " Kentucky",
      "zip": 9140
    },
    "stops": [
      {
        "date": "2017-08-26T07:30:05 +07:00",
        "name": "UNQ",
        "streetAddress": "672 Boardwalk ",
        "city": "Geyserville",
        "state": "Minnesota",
        "zip": 824,
        "type": "PICKUP"
      },
      {
        "date": "2018-07-19T08:07:55 +07:00",
        "name": "FORTEAN",
        "streetAddress": "407 Neptune Avenue",
        "city": "Whipholt",
        "state": "Connecticut",
        "zip": 5934,
        "type": "PICKUP"
      },
      {
        "date": "2019-07-04T08:49:13 +07:00",
        "name": "AQUACINE",
        "streetAddress": "448 Royce Street",
        "city": "Morningside",
        "state": "Nevada",
        "zip": 8508,
        "type": "PICKUP"
      },
      {
        "date": "2019-06-11T04:00:34 +07:00",
        "name": "VORTEXACO",
        "streetAddress": "495 Montrose Avenue",
        "city": "Henrietta",
        "state": "South Dakota",
        "zip": 7899,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$1,723.80",
      "detention": "$2,662.04",
      "layover": "$2,574.23"
    }
  },
  {
    "invoiceNumber": "5e951a0a9ca15956765fdedc",
    "loadNumber": 22,
    "billTo": {
      "name": "ORBIFLEX",
      "streetAddress": "142 Columbia Street",
      "city": "Brambleton",
      "state": " Rhode Island",
      "zip": 1933
    },
    "stops": [
      {
        "date": "2017-10-15T11:41:25 +07:00",
        "name": "MAGNEMO",
        "streetAddress": "294 Times Placez",
        "city": "Cornfields",
        "state": "Utah",
        "zip": 1282,
        "type": "PICKUP"
      },
      {
        "date": "2014-08-18T08:27:04 +07:00",
        "name": "CABLAM",
        "streetAddress": "432 Brooklyn Road",
        "city": "Cecilia",
        "state": "Virginia",
        "zip": 2669,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$2,858.10",
      "detention": "$1,897.27",
      "layover": "$1,381.65"
    }
  },
  {
    "invoiceNumber": "5e951a0acc62f62955a75694",
    "loadNumber": 21,
    "billTo": {
      "name": "COMVEYER",
      "streetAddress": "236 Gotham Avenue",
      "city": "Kiskimere",
      "state": " Florida",
      "zip": 1371
    },
    "stops": [
      {
        "date": "2018-11-27T02:13:42 +08:00",
        "name": "CEDWARD",
        "streetAddress": "590 Concord Street",
        "city": "Yettem",
        "state": "Northern Mariana Islands",
        "zip": 5286,
        "type": "DELIVERY"
      },
      {
        "date": "2020-03-17T02:56:19 +07:00",
        "name": "NEUROCELL",
        "streetAddress": "224 Veronica Place",
        "city": "Holtville",
        "state": "Palau",
        "zip": 1877,
        "type": "PICKUP"
      },
      {
        "date": "2015-06-15T04:46:34 +07:00",
        "name": "QUARMONY",
        "streetAddress": "459 Gold Street",
        "city": "Ribera",
        "state": "South Carolina",
        "zip": 7334,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$1,983.86",
      "detention": "$3,321.81",
      "layover": "$1,311.56"
    }
  },
  {
    "invoiceNumber": "5e951a0ac1bd9bf806ddcd16",
    "loadNumber": 33,
    "billTo": {
      "name": "COMCUBINE",
      "streetAddress": "901 Bogart Street",
      "city": "Herbster",
      "state": " Wisconsin",
      "zip": 1569
    },
    "stops": [
      {
        "date": "2019-08-18T02:54:02 +07:00",
        "name": "LIQUICOM",
        "streetAddress": "712 Creamer Street",
        "city": "Homeworth",
        "state": "Indiana",
        "zip": 5064,
        "type": "DELIVERY"
      },
      {
        "date": "2018-05-05T02:08:07 +07:00",
        "name": "COMTOUR",
        "streetAddress": "513 Bedford Avenue",
        "city": "Inkerman",
        "state": "Maine",
        "zip": 4553,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$1,336.71",
      "detention": "$3,229.26",
      "layover": "$3,094.86"
    }
  },
  {
    "invoiceNumber": "5e951a0abd024237125982c2",
    "loadNumber": 32,
    "billTo": {
      "name": "COMSTRUCT",
      "streetAddress": "608 Bowne Street",
      "city": "Gadsden",
      "state": " Washington",
      "zip": 5188
    },
    "stops": [
      {
        "date": "2017-01-09T10:38:50 +08:00",
        "name": "NEWCUBE",
        "streetAddress": "854 Bedell Lane",
        "city": "Moquino",
        "state": "Arizona",
        "zip": 8028,
        "type": "DELIVERY"
      },
      {
        "date": "2016-08-06T12:17:46 +07:00",
        "name": "BICOL",
        "streetAddress": "791 Willow Street",
        "city": "Hobucken",
        "state": "Virgin Islands",
        "zip": 5574,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$2,997.68",
      "detention": "$2,561.76",
      "layover": "$1,020.54"
    }
  },
  {
    "invoiceNumber": "5e951a0a3043f1e4d8ec9e74",
    "loadNumber": 23,
    "billTo": {
      "name": "VOLAX",
      "streetAddress": "325 Montgomery Street",
      "city": "Allendale",
      "state": " North Dakota",
      "zip": 6498
    },
    "stops": [
      {
        "date": "2019-05-31T09:15:59 +07:00",
        "name": "UNEEQ",
        "streetAddress": "764 Forest Place",
        "city": "Stevens",
        "state": "Idaho",
        "zip": 4446,
        "type": "PICKUP"
      },
      {
        "date": "2017-04-29T04:08:12 +07:00",
        "name": "PLASTO",
        "streetAddress": "157 Paerdegat Avenue",
        "city": "Tetherow",
        "state": "Massachusetts",
        "zip": 7445,
        "type": "PICKUP"
      },
      {
        "date": "2017-05-09T01:13:28 +07:00",
        "name": "GENMEX",
        "streetAddress": "327 Olive Street",
        "city": "Bowden",
        "state": "Oregon",
        "zip": 2427,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$1,633.92",
      "detention": "$1,018.23",
      "layover": "$3,479.45"
    }
  },
  {
    "invoiceNumber": "5e951a0a86e0f7f511e8582e",
    "loadNumber": 20,
    "billTo": {
      "name": "EXTRAWEAR",
      "streetAddress": "219 Kane Place",
      "city": "Katonah",
      "state": " Kansas",
      "zip": 6601
    },
    "stops": [
      {
        "date": "2016-04-03T11:45:12 +07:00",
        "name": "ACLIMA",
        "streetAddress": "173 Midwood Street",
        "city": "Russellville",
        "state": "American Samoa",
        "zip": 475,
        "type": "PICKUP"
      },
      {
        "date": "2019-03-23T08:32:26 +07:00",
        "name": "BILLMED",
        "streetAddress": "940 Linden Street",
        "city": "Bowmansville",
        "state": "Oklahoma",
        "zip": 3502,
        "type": "DELIVERY"
      },
      {
        "date": "2015-11-18T06:32:45 +08:00",
        "name": "DELPHIDE",
        "streetAddress": "750 Court Square",
        "city": "Bakersville",
        "state": "Nebraska",
        "zip": 2639,
        "type": "PICKUP"
      },
      {
        "date": "2019-02-28T10:27:37 +08:00",
        "name": "PYRAMIS",
        "streetAddress": "606 Prescott Place",
        "city": "Ferney",
        "state": "Marshall Islands",
        "zip": 7616,
        "type": "DELIVERY"
      },
      {
        "date": "2014-04-25T04:51:52 +07:00",
        "name": "MANGELICA",
        "streetAddress": "255 Halsey Street",
        "city": "Kula",
        "state": "Alaska",
        "zip": 9941,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$1,143.34",
      "detention": "$3,491.07",
      "layover": "$1,789.29"
    }
  },
  {
    "invoiceNumber": "5e951a0aca1b1eac2af2736c",
    "loadNumber": 30,
    "billTo": {
      "name": "LYRICHORD",
      "streetAddress": "709 Kossuth Place",
      "city": "Glasgow",
      "state": " Michigan",
      "zip": 9005
    },
    "stops": [
      {
        "date": "2019-06-25T11:27:16 +07:00",
        "name": "ILLUMITY",
        "streetAddress": "445 Reeve Place",
        "city": "Fruitdale",
        "state": "Mississippi",
        "zip": 9990,
        "type": "PICKUP"
      },
      {
        "date": "2014-03-07T08:25:36 +08:00",
        "name": "ZUVY",
        "streetAddress": "740 Regent Place",
        "city": "Newcastle",
        "state": "New Hampshire",
        "zip": 6045,
        "type": "PICKUP"
      },
      {
        "date": "2015-01-21T12:24:41 +08:00",
        "name": "ISOLOGICS",
        "streetAddress": "780 Beach Place",
        "city": "Lewis",
        "state": "Delaware",
        "zip": 2085,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$1,593.23",
      "detention": "$3,919.32",
      "layover": "$3,962.03"
    }
  },
  {
    "invoiceNumber": "5e951a0a4582515a36ad41e1",
    "loadNumber": 29,
    "billTo": {
      "name": "TALKALOT",
      "streetAddress": "531 Hazel Court",
      "city": "Gambrills",
      "state": " Georgia",
      "zip": 7804
    },
    "stops": [
      {
        "date": "2014-02-08T09:23:53 +08:00",
        "name": "NAVIR",
        "streetAddress": "215 Mersereau Court",
        "city": "Rivereno",
        "state": "Guam",
        "zip": 4189,
        "type": "DELIVERY"
      },
      {
        "date": "2016-03-01T04:05:21 +08:00",
        "name": "VETRON",
        "streetAddress": "403 Homecrest Court",
        "city": "Mahtowa",
        "state": "Ohio",
        "zip": 2792,
        "type": "DELIVERY"
      },
      {
        "date": "2019-06-07T10:01:48 +07:00",
        "name": "KAGGLE",
        "streetAddress": "303 Driggs Avenue",
        "city": "Vallonia",
        "state": "Hawaii",
        "zip": 8254,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$3,980.06",
      "detention": "$3,384.34",
      "layover": "$1,928.79"
    }
  },
  {
    "invoiceNumber": "5e951a0a31a7ebdfef006283",
    "loadNumber": 26,
    "billTo": {
      "name": "MUSIX",
      "streetAddress": "897 Heath Place",
      "city": "Waterloo",
      "state": " Missouri",
      "zip": 2302
    },
    "stops": [
      {
        "date": "2018-11-14T03:23:38 +08:00",
        "name": "SUPREMIA",
        "streetAddress": "287 Otsego Street",
        "city": "Gibsonia",
        "state": "Tennessee",
        "zip": 6096,
        "type": "PICKUP"
      },
      {
        "date": "2018-05-19T03:29:57 +07:00",
        "name": "ENTROFLEX",
        "streetAddress": "526 Bleecker Street",
        "city": "Bradenville",
        "state": "Texas",
        "zip": 3625,
        "type": "DELIVERY"
      },
      {
        "date": "2014-04-24T02:34:23 +07:00",
        "name": "JAMNATION",
        "streetAddress": "683 Hinsdale Street",
        "city": "Joes",
        "state": "Puerto Rico",
        "zip": 2351,
        "type": "DELIVERY"
      },
      {
        "date": "2019-11-01T09:55:58 +07:00",
        "name": "OCEANICA",
        "streetAddress": "318 Bouck Court",
        "city": "Dunnavant",
        "state": "Arkansas",
        "zip": 5187,
        "type": "PICKUP"
      },
      {
        "date": "2019-05-14T01:30:38 +07:00",
        "name": "ANDRYX",
        "streetAddress": "927 Chester Avenue",
        "city": "Foxworth",
        "state": "Montana",
        "zip": 5292,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$1,059.18",
      "detention": "$1,082.53",
      "layover": "$2,145.26"
    }
  },
  {
    "invoiceNumber": "5e951a0ad982af4e205b1c9a",
    "loadNumber": 26,
    "billTo": {
      "name": "MULTRON",
      "streetAddress": "904 Tehama Street",
      "city": "Elbert",
      "state": " Louisiana",
      "zip": 663
    },
    "stops": [
      {
        "date": "2014-06-19T02:53:09 +07:00",
        "name": "ZEROLOGY",
        "streetAddress": "531 Anna Court",
        "city": "Kanauga",
        "state": "Alabama",
        "zip": 6625,
        "type": "DELIVERY"
      },
      {
        "date": "2020-02-21T01:22:13 +08:00",
        "name": "MARVANE",
        "streetAddress": "703 Orient Avenue",
        "city": "Hiwasse",
        "state": "Maryland",
        "zip": 6839,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$2,905.80",
      "detention": "$1,512.38",
      "layover": "$2,739.97"
    }
  },
  {
    "invoiceNumber": "5e951a0a6cc5b202b8c33c32",
    "loadNumber": 37,
    "billTo": {
      "name": "COMBOT",
      "streetAddress": "172 Guernsey Street",
      "city": "Lowgap",
      "state": " Vermont",
      "zip": 1516
    },
    "stops": [
      {
        "date": "2018-05-25T09:44:28 +07:00",
        "name": "ECLIPTO",
        "streetAddress": "874 Ferry Place",
        "city": "Orovada",
        "state": "Pennsylvania",
        "zip": 2335,
        "type": "PICKUP"
      },
      {
        "date": "2017-08-15T02:51:41 +07:00",
        "name": "OLYMPIX",
        "streetAddress": "482 Wyckoff Street",
        "city": "Heil",
        "state": "Federated States Of Micronesia",
        "zip": 4100,
        "type": "PICKUP"
      },
      {
        "date": "2016-09-22T07:35:13 +07:00",
        "name": "VINCH",
        "streetAddress": "573 Bank Street",
        "city": "Rockhill",
        "state": "New Jersey",
        "zip": 611,
        "type": "DELIVERY"
      },
      {
        "date": "2014-01-26T05:07:13 +08:00",
        "name": "SAVVY",
        "streetAddress": "937 Story Street",
        "city": "Springdale",
        "state": "Iowa",
        "zip": 4675,
        "type": "DELIVERY"
      },
      {
        "date": "2014-01-17T12:45:21 +08:00",
        "name": "GENESYNK",
        "streetAddress": "810 Metropolitan Avenue",
        "city": "Columbus",
        "state": "Wyoming",
        "zip": 1374,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$1,543.35",
      "detention": "$3,185.01",
      "layover": "$2,783.71"
    }
  },
  {
    "invoiceNumber": "5e951a0aa928b6a076d5f026",
    "loadNumber": 38,
    "billTo": {
      "name": "KNEEDLES",
      "streetAddress": "928 Croton Loop",
      "city": "Matheny",
      "state": " District Of Columbia",
      "zip": 2001
    },
    "stops": [
      {
        "date": "2019-08-09T05:08:46 +07:00",
        "name": "PLEXIA",
        "streetAddress": "581 Hampton Place",
        "city": "Century",
        "state": "Colorado",
        "zip": 7885,
        "type": "DELIVERY"
      },
      {
        "date": "2019-04-03T05:03:02 +07:00",
        "name": "JUMPSTACK",
        "streetAddress": "168 Grove Street",
        "city": "Williston",
        "state": "West Virginia",
        "zip": 4071,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$3,947.67",
      "detention": "$1,374.09",
      "layover": "$1,524.82"
    }
  },
  {
    "invoiceNumber": "5e951a0aecd6fb703370abee",
    "loadNumber": 37,
    "billTo": {
      "name": "AQUASURE",
      "streetAddress": "771 Greenpoint Avenue",
      "city": "Hartsville/Hartley",
      "state": " California",
      "zip": 5936
    },
    "stops": [
      {
        "date": "2014-07-06T04:40:03 +07:00",
        "name": "ZENTIX",
        "streetAddress": "387 Kent Street",
        "city": "Charco",
        "state": "New Mexico",
        "zip": 3493,
        "type": "PICKUP"
      },
      {
        "date": "2014-02-20T03:20:36 +08:00",
        "name": "COMTRAK",
        "streetAddress": "674 Boerum Place",
        "city": "Jenkinsville",
        "state": "North Carolina",
        "zip": 7113,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$1,949.81",
      "detention": "$3,902.72",
      "layover": "$3,142.61"
    }
  },
  {
    "invoiceNumber": "5e951a0adbffb35ff418a067",
    "loadNumber": 25,
    "billTo": {
      "name": "MAROPTIC",
      "streetAddress": "752 Lloyd Court",
      "city": "Nogal",
      "state": " Illinois",
      "zip": 4534
    },
    "stops": [
      {
        "date": "2019-10-13T11:36:27 +07:00",
        "name": "LYRIA",
        "streetAddress": "237 Howard Alley",
        "city": "Mooresburg",
        "state": "Kentucky",
        "zip": 4714,
        "type": "DELIVERY"
      },
      {
        "date": "2014-04-22T11:51:20 +07:00",
        "name": "SKINSERVE",
        "streetAddress": "413 Harrison Avenue",
        "city": "Welda",
        "state": "Minnesota",
        "zip": 421,
        "type": "PICKUP"
      },
      {
        "date": "2014-07-24T01:07:01 +07:00",
        "name": "MYOPIUM",
        "streetAddress": "624 Bath Avenue",
        "city": "Graball",
        "state": "Connecticut",
        "zip": 9574,
        "type": "DELIVERY"
      },
      {
        "date": "2014-05-13T06:15:08 +07:00",
        "name": "APEX",
        "streetAddress": "693 Krier Place",
        "city": "Vernon",
        "state": "Nevada",
        "zip": 5957,
        "type": "PICKUP"
      },
      {
        "date": "2017-12-16T01:34:06 +08:00",
        "name": "XEREX",
        "streetAddress": "606 Chester Court",
        "city": "Fivepointville",
        "state": "South Dakota",
        "zip": 9908,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$2,236.99",
      "detention": "$3,758.83",
      "layover": "$3,208.74"
    }
  },
  {
    "invoiceNumber": "5e951a0acf797d4f760e1ee2",
    "loadNumber": 21,
    "billTo": {
      "name": "DEMINIMUM",
      "streetAddress": "616 Farragut Place",
      "city": "Juntura",
      "state": " Rhode Island",
      "zip": 8785
    },
    "stops": [
      {
        "date": "2017-05-13T01:35:15 +07:00",
        "name": "ZOMBOID",
        "streetAddress": "559 Lake Avenue",
        "city": "Naomi",
        "state": "Utah",
        "zip": 8581,
        "type": "PICKUP"
      },
      {
        "date": "2017-07-06T03:50:39 +07:00",
        "name": "OPTIQUE",
        "streetAddress": "606 Knight Court",
        "city": "Shaft",
        "state": "Virginia",
        "zip": 7661,
        "type": "PICKUP"
      },
      {
        "date": "2018-05-08T06:32:24 +07:00",
        "name": "ZENTIME",
        "streetAddress": "777 Harden Street",
        "city": "Verdi",
        "state": "Florida",
        "zip": 4373,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$3,826.65",
      "detention": "$1,435.74",
      "layover": "$2,186.81"
    }
  },
  {
    "invoiceNumber": "5e951a0a91de893d38d46e23",
    "loadNumber": 29,
    "billTo": {
      "name": "SLAX",
      "streetAddress": "856 Adelphi Street",
      "city": "Edneyville",
      "state": " Northern Mariana Islands",
      "zip": 5736
    },
    "stops": [
      {
        "date": "2018-07-25T03:22:04 +07:00",
        "name": "IMKAN",
        "streetAddress": "217 Whitty Lane",
        "city": "Templeton",
        "state": "Palau",
        "zip": 4777,
        "type": "PICKUP"
      },
      {
        "date": "2017-09-17T07:26:50 +07:00",
        "name": "COMVEY",
        "streetAddress": "635 Hornell Loop",
        "city": "Richford",
        "state": "South Carolina",
        "zip": 2839,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$1,492.41",
      "detention": "$1,956.87",
      "layover": "$1,952.03"
    }
  },
  {
    "invoiceNumber": "5e951a0a2cea4cde4f396e36",
    "loadNumber": 29,
    "billTo": {
      "name": "BLUPLANET",
      "streetAddress": "899 Lott Avenue",
      "city": "Wadsworth",
      "state": " Wisconsin",
      "zip": 8092
    },
    "stops": [
      {
        "date": "2018-08-05T09:49:17 +07:00",
        "name": "BEZAL",
        "streetAddress": "830 Bridge Street",
        "city": "Yonah",
        "state": "Indiana",
        "zip": 416,
        "type": "DELIVERY"
      },
      {
        "date": "2015-07-05T12:57:01 +07:00",
        "name": "VORATAK",
        "streetAddress": "797 Juliana Place",
        "city": "Newry",
        "state": "Maine",
        "zip": 1525,
        "type": "PICKUP"
      },
      {
        "date": "2019-06-06T08:04:21 +07:00",
        "name": "ELECTONIC",
        "streetAddress": "407 Willoughby Street",
        "city": "Interlochen",
        "state": "Washington",
        "zip": 4150,
        "type": "PICKUP"
      },
      {
        "date": "2017-08-30T06:32:31 +07:00",
        "name": "HOTCAKES",
        "streetAddress": "365 Grafton Street",
        "city": "Homestead",
        "state": "Arizona",
        "zip": 8329,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$3,693.26",
      "detention": "$2,808.99",
      "layover": "$3,048.97"
    }
  },
  {
    "invoiceNumber": "5e951a0a1a9e5342743fd89b",
    "loadNumber": 28,
    "billTo": {
      "name": "SKYPLEX",
      "streetAddress": "237 Rutland Road",
      "city": "Rodanthe",
      "state": " Virgin Islands",
      "zip": 5652
    },
    "stops": [
      {
        "date": "2017-07-20T03:35:50 +07:00",
        "name": "DIGIGEN",
        "streetAddress": "405 Howard Avenue",
        "city": "Taft",
        "state": "North Dakota",
        "zip": 2294,
        "type": "DELIVERY"
      },
      {
        "date": "2015-01-26T03:15:53 +08:00",
        "name": "TRASOLA",
        "streetAddress": "243 Kenmore Court",
        "city": "Keyport",
        "state": "Idaho",
        "zip": 4771,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$2,103.76",
      "detention": "$1,165.42",
      "layover": "$3,938.31"
    }
  },
  {
    "invoiceNumber": "5e951a0abcd5b287a963d4ce",
    "loadNumber": 20,
    "billTo": {
      "name": "CYCLONICA",
      "streetAddress": "215 Reed Street",
      "city": "Dundee",
      "state": " Massachusetts",
      "zip": 2565
    },
    "stops": [
      {
        "date": "2017-12-15T10:23:29 +08:00",
        "name": "EXOPLODE",
        "streetAddress": "772 Elm Avenue",
        "city": "Calpine",
        "state": "Oregon",
        "zip": 8341,
        "type": "PICKUP"
      },
      {
        "date": "2015-05-10T12:26:00 +07:00",
        "name": "URBANSHEE",
        "streetAddress": "250 Delmonico Place",
        "city": "Walton",
        "state": "Kansas",
        "zip": 4574,
        "type": "PICKUP"
      },
      {
        "date": "2018-11-08T07:09:45 +08:00",
        "name": "QNEKT",
        "streetAddress": "916 Osborn Street",
        "city": "Blandburg",
        "state": "American Samoa",
        "zip": 2992,
        "type": "PICKUP"
      },
      {
        "date": "2019-08-14T02:21:53 +07:00",
        "name": "WARETEL",
        "streetAddress": "620 Hart Place",
        "city": "Gilmore",
        "state": "Oklahoma",
        "zip": 1819,
        "type": "PICKUP"
      },
      {
        "date": "2015-08-27T12:21:54 +07:00",
        "name": "STREZZO",
        "streetAddress": "445 Harbor Lane",
        "city": "Edenburg",
        "state": "Nebraska",
        "zip": 8557,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$1,018.37",
      "detention": "$1,918.23",
      "layover": "$1,202.83"
    }
  },
  {
    "invoiceNumber": "5e951a0afcffa589933c6b80",
    "loadNumber": 37,
    "billTo": {
      "name": "CONJURICA",
      "streetAddress": "182 Doughty Street",
      "city": "Grazierville",
      "state": " Marshall Islands",
      "zip": 1401
    },
    "stops": [
      {
        "date": "2017-10-13T10:06:43 +07:00",
        "name": "SARASONIC",
        "streetAddress": "983 Bartlett Street",
        "city": "Savannah",
        "state": "Alaska",
        "zip": 9039,
        "type": "PICKUP"
      },
      {
        "date": "2015-09-15T06:00:40 +07:00",
        "name": "EARGO",
        "streetAddress": "569 Fairview Place",
        "city": "Lumberton",
        "state": "Michigan",
        "zip": 797,
        "type": "PICKUP"
      },
      {
        "date": "2018-08-26T05:17:01 +07:00",
        "name": "SCHOOLIO",
        "streetAddress": "169 Macon Street",
        "city": "Caroline",
        "state": "Mississippi",
        "zip": 9311,
        "type": "DELIVERY"
      },
      {
        "date": "2016-02-20T11:59:34 +08:00",
        "name": "GEOFORMA",
        "streetAddress": "385 Willoughby Avenue",
        "city": "Waukeenah",
        "state": "New Hampshire",
        "zip": 9964,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$3,881.10",
      "detention": "$2,915.06",
      "layover": "$3,464.49"
    }
  },
  {
    "invoiceNumber": "5e951a0a3688ed044d3db99f",
    "loadNumber": 26,
    "billTo": {
      "name": "DANCITY",
      "streetAddress": "367 Bushwick Avenue",
      "city": "Remington",
      "state": " Delaware",
      "zip": 6953
    },
    "stops": [
      {
        "date": "2019-04-28T05:15:02 +07:00",
        "name": "UNCORP",
        "streetAddress": "888 Norman Avenue",
        "city": "Kieler",
        "state": "Georgia",
        "zip": 7281,
        "type": "DELIVERY"
      },
      {
        "date": "2019-09-12T12:26:23 +07:00",
        "name": "MITROC",
        "streetAddress": "969 Linden Boulevard",
        "city": "Trexlertown",
        "state": "Guam",
        "zip": 7518,
        "type": "PICKUP"
      },
      {
        "date": "2019-10-20T04:32:32 +07:00",
        "name": "CUIZINE",
        "streetAddress": "514 Rochester Avenue",
        "city": "Tolu",
        "state": "Ohio",
        "zip": 158,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$3,735.22",
      "detention": "$1,540.54",
      "layover": "$3,976.40"
    }
  },
  {
    "invoiceNumber": "5e951a0a4f319020f2bdfbc3",
    "loadNumber": 36,
    "billTo": {
      "name": "QUADEEBO",
      "streetAddress": "626 Wilson Avenue",
      "city": "Steinhatchee",
      "state": " Hawaii",
      "zip": 1583
    },
    "stops": [
      {
        "date": "2019-02-03T05:47:33 +08:00",
        "name": "CENTREXIN",
        "streetAddress": "843 Clinton Street",
        "city": "Chase",
        "state": "Missouri",
        "zip": 6823,
        "type": "PICKUP"
      },
      {
        "date": "2015-08-10T09:29:19 +07:00",
        "name": "FIBRODYNE",
        "streetAddress": "302 Tapscott Avenue",
        "city": "Berlin",
        "state": "Tennessee",
        "zip": 8755,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$3,756.81",
      "detention": "$1,353.41",
      "layover": "$2,541.56"
    }
  },
  {
    "invoiceNumber": "5e951a0a04ad22d1f0ea7546",
    "loadNumber": 36,
    "billTo": {
      "name": "ARTWORLDS",
      "streetAddress": "687 Moultrie Street",
      "city": "Curtice",
      "state": " Texas",
      "zip": 8044
    },
    "stops": [
      {
        "date": "2016-06-14T07:27:43 +07:00",
        "name": "UPDAT",
        "streetAddress": "103 Miller Avenue",
        "city": "Rockbridge",
        "state": "Puerto Rico",
        "zip": 1036,
        "type": "DELIVERY"
      },
      {
        "date": "2016-05-05T07:39:40 +07:00",
        "name": "ZIGGLES",
        "streetAddress": "324 Bay Avenue",
        "city": "Sanborn",
        "state": "Arkansas",
        "zip": 441,
        "type": "PICKUP"
      },
      {
        "date": "2014-08-12T11:13:42 +07:00",
        "name": "ORGANICA",
        "streetAddress": "858 Highlawn Avenue",
        "city": "Noxen",
        "state": "Montana",
        "zip": 3549,
        "type": "DELIVERY"
      },
      {
        "date": "2016-01-05T03:41:07 +08:00",
        "name": "ISOSWITCH",
        "streetAddress": "694 Poly Place",
        "city": "Martell",
        "state": "Louisiana",
        "zip": 8120,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$2,375.89",
      "detention": "$2,240.60",
      "layover": "$3,178.32"
    }
  },
  {
    "invoiceNumber": "5e951a0a5124ec052e08ab20",
    "loadNumber": 23,
    "billTo": {
      "name": "SPORTAN",
      "streetAddress": "198 Brown Street",
      "city": "Bloomington",
      "state": " Alabama",
      "zip": 2325
    },
    "stops": [
      {
        "date": "2015-11-12T11:33:08 +08:00",
        "name": "BUZZMAKER",
        "streetAddress": "771 Sandford Street",
        "city": "Fontanelle",
        "state": "Maryland",
        "zip": 9446,
        "type": "PICKUP"
      },
      {
        "date": "2016-03-01T10:17:10 +08:00",
        "name": "KINDALOO",
        "streetAddress": "407 Columbus Place",
        "city": "Bascom",
        "state": "Vermont",
        "zip": 4990,
        "type": "DELIVERY"
      },
      {
        "date": "2019-06-26T06:00:55 +07:00",
        "name": "HOMELUX",
        "streetAddress": "232 Bryant Street",
        "city": "Brewster",
        "state": "Pennsylvania",
        "zip": 1260,
        "type": "PICKUP"
      },
      {
        "date": "2020-03-08T06:13:28 +07:00",
        "name": "COMCUR",
        "streetAddress": "666 Vermont Court",
        "city": "Twilight",
        "state": "Federated States Of Micronesia",
        "zip": 446,
        "type": "DELIVERY"
      },
      {
        "date": "2014-05-15T10:08:19 +07:00",
        "name": "NIMON",
        "streetAddress": "439 Montague Terrace",
        "city": "Mulino",
        "state": "New Jersey",
        "zip": 5244,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$1,505.30",
      "detention": "$2,423.33",
      "layover": "$2,197.57"
    }
  },
  {
    "invoiceNumber": "5e951a0a97c9e87bae91d206",
    "loadNumber": 20,
    "billTo": {
      "name": "POLARIA",
      "streetAddress": "155 Luquer Street",
      "city": "Mathews",
      "state": " Iowa",
      "zip": 4831
    },
    "stops": [
      {
        "date": "2019-06-24T08:36:43 +07:00",
        "name": "EVENTIX",
        "streetAddress": "651 Newkirk Avenue",
        "city": "Wells",
        "state": "Wyoming",
        "zip": 5069,
        "type": "PICKUP"
      },
      {
        "date": "2019-08-17T10:14:30 +07:00",
        "name": "ZENCO",
        "streetAddress": "995 Dank Court",
        "city": "Hoagland",
        "state": "District Of Columbia",
        "zip": 3472,
        "type": "PICKUP"
      },
      {
        "date": "2015-05-02T04:44:20 +07:00",
        "name": "AMTAP",
        "streetAddress": "202 Wortman Avenue",
        "city": "Abiquiu",
        "state": "Colorado",
        "zip": 6981,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$2,950.99",
      "detention": "$2,653.21",
      "layover": "$2,297.01"
    }
  },
  {
    "invoiceNumber": "5e951a0a688b2fe73b8f1e8a",
    "loadNumber": 37,
    "billTo": {
      "name": "TECHMANIA",
      "streetAddress": "351 Linwood Street",
      "city": "Disautel",
      "state": " West Virginia",
      "zip": 2204
    },
    "stops": [
      {
        "date": "2014-10-03T04:46:55 +07:00",
        "name": "INSOURCE",
        "streetAddress": "280 Barwell Terrace",
        "city": "Florence",
        "state": "California",
        "zip": 8753,
        "type": "DELIVERY"
      },
      {
        "date": "2019-09-28T06:45:20 +07:00",
        "name": "EXTRAGENE",
        "streetAddress": "947 Kane Street",
        "city": "Ruckersville",
        "state": "New Mexico",
        "zip": 4187,
        "type": "PICKUP"
      },
      {
        "date": "2015-07-29T08:50:35 +07:00",
        "name": "ORBEAN",
        "streetAddress": "777 Halleck Street",
        "city": "Oley",
        "state": "North Carolina",
        "zip": 9405,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$2,934.90",
      "detention": "$3,018.12",
      "layover": "$1,930.34"
    }
  },
  {
    "invoiceNumber": "5e951a0af79552289b9a967e",
    "loadNumber": 35,
    "billTo": {
      "name": "TALKOLA",
      "streetAddress": "231 Norwood Avenue",
      "city": "Snelling",
      "state": " Illinois",
      "zip": 1504
    },
    "stops": [
      {
        "date": "2017-12-04T11:23:11 +08:00",
        "name": "DANJA",
        "streetAddress": "738 Maujer Street",
        "city": "Como",
        "state": "Kentucky",
        "zip": 686,
        "type": "DELIVERY"
      },
      {
        "date": "2018-12-07T04:53:20 +08:00",
        "name": "ECOLIGHT",
        "streetAddress": "244 Beard Street",
        "city": "Gardners",
        "state": "Minnesota",
        "zip": 9662,
        "type": "DELIVERY"
      },
      {
        "date": "2018-12-30T01:47:56 +08:00",
        "name": "DOGNOST",
        "streetAddress": "111 Adler Place",
        "city": "Marienthal",
        "state": "Connecticut",
        "zip": 3049,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$1,416.25",
      "detention": "$2,601.83",
      "layover": "$3,462.65"
    }
  },
  {
    "invoiceNumber": "5e951a0a525202df7fe87376",
    "loadNumber": 22,
    "billTo": {
      "name": "COSMETEX",
      "streetAddress": "481 Summit Street",
      "city": "Manila",
      "state": " Nevada",
      "zip": 4999
    },
    "stops": [
      {
        "date": "2019-04-30T01:10:22 +07:00",
        "name": "GONKLE",
        "streetAddress": "511 Lott Street",
        "city": "Eureka",
        "state": "South Dakota",
        "zip": 6734,
        "type": "PICKUP"
      },
      {
        "date": "2019-11-08T06:11:09 +08:00",
        "name": "GYNKO",
        "streetAddress": "913 Joval Court",
        "city": "Ticonderoga",
        "state": "Rhode Island",
        "zip": 7620,
        "type": "PICKUP"
      },
      {
        "date": "2018-02-07T12:44:41 +08:00",
        "name": "FANFARE",
        "streetAddress": "899 Rock Street",
        "city": "Muir",
        "state": "Utah",
        "zip": 1564,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$1,535.34",
      "detention": "$1,461.84",
      "layover": "$3,645.90"
    }
  },
  {
    "invoiceNumber": "5e951a0a1eac9fd82d09b209",
    "loadNumber": 31,
    "billTo": {
      "name": "FLYBOYZ",
      "streetAddress": "821 Whitney Avenue",
      "city": "Ventress",
      "state": " Virginia",
      "zip": 862
    },
    "stops": [
      {
        "date": "2016-01-21T12:09:00 +08:00",
        "name": "ACCUPRINT",
        "streetAddress": "822 Grand Street",
        "city": "Coalmont",
        "state": "Florida",
        "zip": 9335,
        "type": "DELIVERY"
      },
      {
        "date": "2018-06-25T08:44:04 +07:00",
        "name": "EXOSIS",
        "streetAddress": "888 Varanda Place",
        "city": "Dennard",
        "state": "Northern Mariana Islands",
        "zip": 8394,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$2,960.14",
      "detention": "$2,864.22",
      "layover": "$3,798.84"
    }
  },
  {
    "invoiceNumber": "5e951a0a5961f6850554878d",
    "loadNumber": 29,
    "billTo": {
      "name": "TELPOD",
      "streetAddress": "218 Howard Place",
      "city": "Whitmer",
      "state": " Palau",
      "zip": 167
    },
    "stops": [
      {
        "date": "2020-01-23T01:42:58 +08:00",
        "name": "GEEKFARM",
        "streetAddress": "191 Garland Court",
        "city": "Camas",
        "state": "South Carolina",
        "zip": 2267,
        "type": "DELIVERY"
      },
      {
        "date": "2020-03-15T06:32:10 +07:00",
        "name": "GEEKUS",
        "streetAddress": "669 Elizabeth Place",
        "city": "Beechmont",
        "state": "Wisconsin",
        "zip": 7273,
        "type": "DELIVERY"
      },
      {
        "date": "2019-04-26T09:48:01 +07:00",
        "name": "ISOTRONIC",
        "streetAddress": "505 Dikeman Street",
        "city": "Dahlen",
        "state": "Indiana",
        "zip": 4158,
        "type": "PICKUP"
      },
      {
        "date": "2015-09-08T05:37:14 +07:00",
        "name": "GINKLE",
        "streetAddress": "799 Nixon Court",
        "city": "Martinez",
        "state": "Maine",
        "zip": 7615,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$3,154.46",
      "detention": "$2,621.55",
      "layover": "$3,927.16"
    }
  },
  {
    "invoiceNumber": "5e951a0a9b1b225a378e924c",
    "loadNumber": 21,
    "billTo": {
      "name": "FIBEROX",
      "streetAddress": "310 Boynton Place",
      "city": "Hessville",
      "state": " Washington",
      "zip": 9832
    },
    "stops": [
      {
        "date": "2015-10-18T10:05:50 +07:00",
        "name": "PORTALIS",
        "streetAddress": "711 Kenmore Terrace",
        "city": "Accoville",
        "state": "Arizona",
        "zip": 4312,
        "type": "DELIVERY"
      },
      {
        "date": "2019-09-09T11:41:11 +07:00",
        "name": "ZAPHIRE",
        "streetAddress": "705 Gaylord Drive",
        "city": "Sunwest",
        "state": "Virgin Islands",
        "zip": 8355,
        "type": "PICKUP"
      },
      {
        "date": "2017-04-05T11:42:30 +07:00",
        "name": "BIZMATIC",
        "streetAddress": "206 Cambridge Place",
        "city": "Blende",
        "state": "North Dakota",
        "zip": 7969,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$1,878.72",
      "detention": "$1,152.65",
      "layover": "$2,075.93"
    }
  },
  {
    "invoiceNumber": "5e951a0a5b070c4ded7d9b6c",
    "loadNumber": 35,
    "billTo": {
      "name": "BLANET",
      "streetAddress": "505 Kay Court",
      "city": "Bluffview",
      "state": " Idaho",
      "zip": 6976
    },
    "stops": [
      {
        "date": "2017-09-16T02:42:10 +07:00",
        "name": "GINK",
        "streetAddress": "576 Legion Street",
        "city": "Elliston",
        "state": "Massachusetts",
        "zip": 5587,
        "type": "PICKUP"
      },
      {
        "date": "2017-03-14T07:03:00 +07:00",
        "name": "NIKUDA",
        "streetAddress": "980 Stewart Street",
        "city": "Sidman",
        "state": "Oregon",
        "zip": 182,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$2,353.25",
      "detention": "$3,403.67",
      "layover": "$2,879.97"
    }
  },
  {
    "invoiceNumber": "5e951a0a03c064f7bba90431",
    "loadNumber": 24,
    "billTo": {
      "name": "PHOTOBIN",
      "streetAddress": "527 Windsor Place",
      "city": "Manitou",
      "state": " Kansas",
      "zip": 9117
    },
    "stops": [
      {
        "date": "2020-01-14T02:37:31 +08:00",
        "name": "ICOLOGY",
        "streetAddress": "306 Ingraham Street",
        "city": "Axis",
        "state": "American Samoa",
        "zip": 4810,
        "type": "PICKUP"
      },
      {
        "date": "2015-01-16T09:46:21 +08:00",
        "name": "ROTODYNE",
        "streetAddress": "365 Lincoln Road",
        "city": "Tivoli",
        "state": "Oklahoma",
        "zip": 9699,
        "type": "PICKUP"
      },
      {
        "date": "2018-11-09T11:48:19 +08:00",
        "name": "RODEMCO",
        "streetAddress": "369 Commercial Street",
        "city": "Chaparrito",
        "state": "Nebraska",
        "zip": 930,
        "type": "DELIVERY"
      },
      {
        "date": "2017-11-05T01:47:11 +08:00",
        "name": "COMTOURS",
        "streetAddress": "947 Trucklemans Lane",
        "city": "Roosevelt",
        "state": "Marshall Islands",
        "zip": 2347,
        "type": "PICKUP"
      },
      {
        "date": "2017-11-06T02:27:16 +08:00",
        "name": "HYPLEX",
        "streetAddress": "996 Clark Street",
        "city": "Roberts",
        "state": "Alaska",
        "zip": 5694,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$3,027.66",
      "detention": "$1,473.66",
      "layover": "$2,474.37"
    }
  },
  {
    "invoiceNumber": "5e951a0afa396e7d7ec6273b",
    "loadNumber": 38,
    "billTo": {
      "name": "PHOLIO",
      "streetAddress": "454 Hamilton Walk",
      "city": "Maxville",
      "state": " Michigan",
      "zip": 9301
    },
    "stops": [
      {
        "date": "2016-07-25T08:50:35 +07:00",
        "name": "PHEAST",
        "streetAddress": "751 Debevoise Street",
        "city": "Westwood",
        "state": "Mississippi",
        "zip": 3024,
        "type": "PICKUP"
      },
      {
        "date": "2015-06-26T09:51:45 +07:00",
        "name": "ONTALITY",
        "streetAddress": "904 Temple Court",
        "city": "Floriston",
        "state": "New Hampshire",
        "zip": 8644,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$3,257.74",
      "detention": "$2,768.46",
      "layover": "$1,855.96"
    }
  },
  {
    "invoiceNumber": "5e951a0a9c74b3b08d54476f",
    "loadNumber": 33,
    "billTo": {
      "name": "EQUITOX",
      "streetAddress": "985 Devon Avenue",
      "city": "Woodlake",
      "state": " Delaware",
      "zip": 1144
    },
    "stops": [
      {
        "date": "2019-04-22T08:42:26 +07:00",
        "name": "KEEG",
        "streetAddress": "413 Madison Street",
        "city": "Jessie",
        "state": "Georgia",
        "zip": 5156,
        "type": "DELIVERY"
      },
      {
        "date": "2015-04-14T04:42:08 +07:00",
        "name": "VOIPA",
        "streetAddress": "477 Narrows Avenue",
        "city": "Fairacres",
        "state": "Guam",
        "zip": 894,
        "type": "DELIVERY"
      },
      {
        "date": "2019-12-07T01:15:57 +08:00",
        "name": "BLEENDOT",
        "streetAddress": "226 Cumberland Walk",
        "city": "Nelson",
        "state": "Ohio",
        "zip": 3867,
        "type": "DELIVERY"
      },
      {
        "date": "2016-11-07T11:28:13 +08:00",
        "name": "EXOZENT",
        "streetAddress": "417 Jackson Court",
        "city": "Rehrersburg",
        "state": "Hawaii",
        "zip": 9380,
        "type": "PICKUP"
      },
      {
        "date": "2014-07-28T04:44:58 +07:00",
        "name": "BEDDER",
        "streetAddress": "244 Brightwater Avenue",
        "city": "Guthrie",
        "state": "Missouri",
        "zip": 6306,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$1,112.50",
      "detention": "$3,093.72",
      "layover": "$2,681.54"
    }
  },
  {
    "invoiceNumber": "5e951a0ac066717795b35bd7",
    "loadNumber": 26,
    "billTo": {
      "name": "EARWAX",
      "streetAddress": "909 Lefferts Place",
      "city": "Calverton",
      "state": " Tennessee",
      "zip": 9565
    },
    "stops": [
      {
        "date": "2019-07-05T08:07:46 +07:00",
        "name": "ECLIPSENT",
        "streetAddress": "189 Monument Walk",
        "city": "Courtland",
        "state": "Texas",
        "zip": 5802,
        "type": "DELIVERY"
      },
      {
        "date": "2015-04-21T12:45:56 +07:00",
        "name": "BYTREX",
        "streetAddress": "502 Poplar Avenue",
        "city": "Maybell",
        "state": "Puerto Rico",
        "zip": 7875,
        "type": "PICKUP"
      },
      {
        "date": "2014-04-19T12:03:04 +07:00",
        "name": "SOPRANO",
        "streetAddress": "586 Harwood Place",
        "city": "Elliott",
        "state": "Arkansas",
        "zip": 8709,
        "type": "DELIVERY"
      },
      {
        "date": "2017-12-04T05:59:28 +08:00",
        "name": "ZAJ",
        "streetAddress": "837 Fayette Street",
        "city": "Williams",
        "state": "Montana",
        "zip": 5819,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$3,982.14",
      "detention": "$3,205.54",
      "layover": "$2,590.83"
    }
  },
  {
    "invoiceNumber": "5e951a0ae00471a4dbe7fb19",
    "loadNumber": 38,
    "billTo": {
      "name": "FOSSIEL",
      "streetAddress": "880 Newel Street",
      "city": "Hoehne",
      "state": " Louisiana",
      "zip": 1701
    },
    "stops": [
      {
        "date": "2019-10-08T07:17:06 +07:00",
        "name": "OBLIQ",
        "streetAddress": "957 Evans Street",
        "city": "Linwood",
        "state": "Alabama",
        "zip": 5086,
        "type": "DELIVERY"
      },
      {
        "date": "2019-06-04T01:04:59 +07:00",
        "name": "MAGNAFONE",
        "streetAddress": "823 Seigel Court",
        "city": "Gallina",
        "state": "Maryland",
        "zip": 8846,
        "type": "DELIVERY"
      },
      {
        "date": "2019-05-31T03:55:17 +07:00",
        "name": "GEEKNET",
        "streetAddress": "108 Saratoga Avenue",
        "city": "Cochranville",
        "state": "Vermont",
        "zip": 782,
        "type": "DELIVERY"
      },
      {
        "date": "2015-12-24T03:51:15 +08:00",
        "name": "RECRISYS",
        "streetAddress": "488 Beverley Road",
        "city": "Vicksburg",
        "state": "Pennsylvania",
        "zip": 673,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$1,076.30",
      "detention": "$1,669.12",
      "layover": "$1,363.84"
    }
  },
  {
    "invoiceNumber": "5e951a0a10c20e07f34d8db4",
    "loadNumber": 25,
    "billTo": {
      "name": "SHADEASE",
      "streetAddress": "434 Hillel Place",
      "city": "Vandiver",
      "state": " Federated States Of Micronesia",
      "zip": 1988
    },
    "stops": [
      {
        "date": "2019-02-14T05:50:18 +08:00",
        "name": "ACIUM",
        "streetAddress": "455 Powell Street",
        "city": "Caron",
        "state": "New Jersey",
        "zip": 4556,
        "type": "DELIVERY"
      },
      {
        "date": "2017-02-12T05:20:05 +08:00",
        "name": "CUBICIDE",
        "streetAddress": "912 Wythe Place",
        "city": "Centerville",
        "state": "Iowa",
        "zip": 2341,
        "type": "DELIVERY"
      },
      {
        "date": "2020-02-18T10:22:43 +08:00",
        "name": "COMTENT",
        "streetAddress": "308 Kingsland Avenue",
        "city": "Glidden",
        "state": "Wyoming",
        "zip": 7845,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$3,978.02",
      "detention": "$1,315.84",
      "layover": "$1,044.19"
    }
  },
  {
    "invoiceNumber": "5e951a0a3566611d7b70ea8b",
    "loadNumber": 27,
    "billTo": {
      "name": "ISOPOP",
      "streetAddress": "325 Dekoven Court",
      "city": "Teasdale",
      "state": " District Of Columbia",
      "zip": 4835
    },
    "stops": [
      {
        "date": "2015-09-06T08:09:45 +07:00",
        "name": "ZILODYNE",
        "streetAddress": "446 Bevy Court",
        "city": "Sena",
        "state": "Colorado",
        "zip": 9713,
        "type": "DELIVERY"
      },
      {
        "date": "2019-08-01T02:20:05 +07:00",
        "name": "TINGLES",
        "streetAddress": "816 Lorraine Street",
        "city": "Homeland",
        "state": "West Virginia",
        "zip": 9521,
        "type": "DELIVERY"
      },
      {
        "date": "2014-03-31T05:26:31 +07:00",
        "name": "ENDIPINE",
        "streetAddress": "582 Dunne Place",
        "city": "Olney",
        "state": "California",
        "zip": 5528,
        "type": "PICKUP"
      },
      {
        "date": "2017-09-30T03:15:55 +07:00",
        "name": "ZOID",
        "streetAddress": "891 Covert Street",
        "city": "Windsor",
        "state": "New Mexico",
        "zip": 3796,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$1,376.64",
      "detention": "$1,756.57",
      "layover": "$1,808.08"
    }
  },
  {
    "invoiceNumber": "5e951a0aea6b557eb70cad74",
    "loadNumber": 28,
    "billTo": {
      "name": "EXIAND",
      "streetAddress": "609 Moffat Street",
      "city": "Spelter",
      "state": " North Carolina",
      "zip": 608
    },
    "stops": [
      {
        "date": "2014-01-11T04:42:19 +08:00",
        "name": "IRACK",
        "streetAddress": "386 Furman Avenue",
        "city": "Cade",
        "state": "Illinois",
        "zip": 4258,
        "type": "PICKUP"
      },
      {
        "date": "2014-09-02T10:44:27 +07:00",
        "name": "AQUAMATE",
        "streetAddress": "121 Campus Road",
        "city": "Virgie",
        "state": "Kentucky",
        "zip": 5832,
        "type": "PICKUP"
      },
      {
        "date": "2019-06-26T09:37:50 +07:00",
        "name": "EXOVENT",
        "streetAddress": "607 Debevoise Avenue",
        "city": "Nadine",
        "state": "Minnesota",
        "zip": 6740,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$1,887.14",
      "detention": "$2,105.86",
      "layover": "$2,422.40"
    }
  },
  {
    "invoiceNumber": "5e951a0a927e81a133084162",
    "loadNumber": 40,
    "billTo": {
      "name": "POOCHIES",
      "streetAddress": "209 Will Place",
      "city": "Harold",
      "state": " Connecticut",
      "zip": 2986
    },
    "stops": [
      {
        "date": "2016-12-05T03:51:36 +08:00",
        "name": "TECHADE",
        "streetAddress": "487 Crystal Street",
        "city": "Weogufka",
        "state": "Nevada",
        "zip": 9176,
        "type": "DELIVERY"
      },
      {
        "date": "2016-05-19T08:34:43 +07:00",
        "name": "GEEKWAGON",
        "streetAddress": "731 Vanderveer Street",
        "city": "Lisco",
        "state": "South Dakota",
        "zip": 8565,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$1,675.15",
      "detention": "$3,026.84",
      "layover": "$1,950.68"
    }
  },
  {
    "invoiceNumber": "5e951a0ac0a39df6d4342d8b",
    "loadNumber": 40,
    "billTo": {
      "name": "PUSHCART",
      "streetAddress": "366 Grant Avenue",
      "city": "Newkirk",
      "state": " Rhode Island",
      "zip": 3512
    },
    "stops": [
      {
        "date": "2014-08-18T11:12:15 +07:00",
        "name": "AVENETRO",
        "streetAddress": "778 Lake Street",
        "city": "Deputy",
        "state": "Utah",
        "zip": 5787,
        "type": "PICKUP"
      },
      {
        "date": "2017-04-14T12:16:38 +07:00",
        "name": "KOFFEE",
        "streetAddress": "194 Ocean Avenue",
        "city": "Glenshaw",
        "state": "Virginia",
        "zip": 7556,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$1,600.76",
      "detention": "$3,351.55",
      "layover": "$1,045.13"
    }
  },
  {
    "invoiceNumber": "5e951a0a9bb9138a19cfed60",
    "loadNumber": 22,
    "billTo": {
      "name": "GAPTEC",
      "streetAddress": "384 Freeman Street",
      "city": "Washington",
      "state": " Florida",
      "zip": 3538
    },
    "stops": [
      {
        "date": "2014-10-30T05:41:05 +07:00",
        "name": "KIOSK",
        "streetAddress": "433 Hall Street",
        "city": "Catharine",
        "state": "Northern Mariana Islands",
        "zip": 7668,
        "type": "PICKUP"
      },
      {
        "date": "2016-09-10T02:38:45 +07:00",
        "name": "CEMENTION",
        "streetAddress": "529 Pineapple Street",
        "city": "Corriganville",
        "state": "Palau",
        "zip": 3004,
        "type": "DELIVERY"
      },
      {
        "date": "2016-01-21T03:48:14 +08:00",
        "name": "GRACKER",
        "streetAddress": "890 Fountain Avenue",
        "city": "Gracey",
        "state": "South Carolina",
        "zip": 721,
        "type": "PICKUP"
      },
      {
        "date": "2014-05-15T05:42:56 +07:00",
        "name": "DUFLEX",
        "streetAddress": "308 Jerome Street",
        "city": "Tilleda",
        "state": "Wisconsin",
        "zip": 738,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$1,721.44",
      "detention": "$1,694.08",
      "layover": "$1,933.36"
    }
  },
  {
    "invoiceNumber": "5e951a0af6a61003755db070",
    "loadNumber": 32,
    "billTo": {
      "name": "MEDMEX",
      "streetAddress": "945 Glenwood Road",
      "city": "Bellfountain",
      "state": " Indiana",
      "zip": 2271
    },
    "stops": [
      {
        "date": "2015-09-16T12:51:54 +07:00",
        "name": "MULTIFLEX",
        "streetAddress": "749 Milton Street",
        "city": "Lydia",
        "state": "Maine",
        "zip": 7971,
        "type": "DELIVERY"
      },
      {
        "date": "2016-10-31T08:45:48 +07:00",
        "name": "ZIZZLE",
        "streetAddress": "714 Nova Court",
        "city": "Defiance",
        "state": "Washington",
        "zip": 1742,
        "type": "DELIVERY"
      },
      {
        "date": "2015-09-29T07:16:10 +07:00",
        "name": "DIGIGENE",
        "streetAddress": "293 Rodney Street",
        "city": "Eastmont",
        "state": "Arizona",
        "zip": 9611,
        "type": "DELIVERY"
      },
      {
        "date": "2017-04-16T06:34:50 +07:00",
        "name": "NAMEBOX",
        "streetAddress": "144 Bay Street",
        "city": "Bannock",
        "state": "Virgin Islands",
        "zip": 2771,
        "type": "DELIVERY"
      },
      {
        "date": "2014-09-06T01:01:35 +07:00",
        "name": "ISOTERNIA",
        "streetAddress": "292 Albemarle Road",
        "city": "Sims",
        "state": "North Dakota",
        "zip": 4242,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$3,654.06",
      "detention": "$2,158.36",
      "layover": "$1,154.46"
    }
  },
  {
    "invoiceNumber": "5e951a0aff4776eb2c57f0c7",
    "loadNumber": 30,
    "billTo": {
      "name": "DIGIFAD",
      "streetAddress": "830 Apollo Street",
      "city": "Rosine",
      "state": " Idaho",
      "zip": 1177
    },
    "stops": [
      {
        "date": "2017-07-06T08:30:08 +07:00",
        "name": "EQUICOM",
        "streetAddress": "873 Oxford Walk",
        "city": "Belleview",
        "state": "Massachusetts",
        "zip": 2240,
        "type": "PICKUP"
      },
      {
        "date": "2018-10-23T01:01:30 +07:00",
        "name": "OPTICALL",
        "streetAddress": "586 Coffey Street",
        "city": "Oasis",
        "state": "Oregon",
        "zip": 7208,
        "type": "DELIVERY"
      },
      {
        "date": "2020-03-09T04:07:02 +07:00",
        "name": "INFOTRIPS",
        "streetAddress": "217 Clifford Place",
        "city": "Layhill",
        "state": "Kansas",
        "zip": 6050,
        "type": "PICKUP"
      },
      {
        "date": "2017-08-29T02:27:02 +07:00",
        "name": "ZIPAK",
        "streetAddress": "489 Bush Street",
        "city": "Marysville",
        "state": "American Samoa",
        "zip": 8175,
        "type": "PICKUP"
      },
      {
        "date": "2018-11-22T06:31:48 +08:00",
        "name": "ENERSOL",
        "streetAddress": "909 Imlay Street",
        "city": "Buxton",
        "state": "Oklahoma",
        "zip": 9164,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$3,672.00",
      "detention": "$1,694.44",
      "layover": "$3,883.84"
    }
  },
  {
    "invoiceNumber": "5e951a0a082f2deacaff254a",
    "loadNumber": 31,
    "billTo": {
      "name": "BOSTONIC",
      "streetAddress": "146 Atkins Avenue",
      "city": "Fairfield",
      "state": " Nebraska",
      "zip": 6052
    },
    "stops": [
      {
        "date": "2015-04-20T06:23:30 +07:00",
        "name": "GYNK",
        "streetAddress": "847 Flatbush Avenue",
        "city": "Neibert",
        "state": "Marshall Islands",
        "zip": 4579,
        "type": "DELIVERY"
      },
      {
        "date": "2015-08-12T11:50:45 +07:00",
        "name": "GLEAMINK",
        "streetAddress": "823 Bergen Street",
        "city": "Shawmut",
        "state": "Alaska",
        "zip": 3218,
        "type": "PICKUP"
      },
      {
        "date": "2017-05-14T07:50:42 +07:00",
        "name": "ZILLACOM",
        "streetAddress": "480 Mermaid Avenue",
        "city": "Boling",
        "state": "Michigan",
        "zip": 7831,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$2,248.16",
      "detention": "$2,108.29",
      "layover": "$1,914.94"
    }
  },
  {
    "invoiceNumber": "5e951a0a77ad3212a64002da",
    "loadNumber": 31,
    "billTo": {
      "name": "ORBAXTER",
      "streetAddress": "972 Lewis Avenue",
      "city": "Caroleen",
      "state": " Mississippi",
      "zip": 601
    },
    "stops": [
      {
        "date": "2016-09-28T02:04:37 +07:00",
        "name": "INTERFIND",
        "streetAddress": "189 Fillmore Place",
        "city": "Gasquet",
        "state": "New Hampshire",
        "zip": 7483,
        "type": "PICKUP"
      },
      {
        "date": "2014-11-04T04:06:43 +08:00",
        "name": "ZOINAGE",
        "streetAddress": "862 Columbia Place",
        "city": "Hamilton",
        "state": "Delaware",
        "zip": 7070,
        "type": "PICKUP"
      },
      {
        "date": "2014-05-14T10:50:33 +07:00",
        "name": "MACRONAUT",
        "streetAddress": "873 Lawrence Avenue",
        "city": "Fannett",
        "state": "Georgia",
        "zip": 9006,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$1,814.58",
      "detention": "$2,262.98",
      "layover": "$1,058.19"
    }
  },
  {
    "invoiceNumber": "5e951a0ae93c152c4370a1cf",
    "loadNumber": 38,
    "billTo": {
      "name": "FANGOLD",
      "streetAddress": "174 Miami Court",
      "city": "Dunbar",
      "state": " Guam",
      "zip": 6816
    },
    "stops": [
      {
        "date": "2014-12-08T11:57:03 +08:00",
        "name": "PHARMACON",
        "streetAddress": "330 Bergen Court",
        "city": "Vowinckel",
        "state": "Ohio",
        "zip": 263,
        "type": "PICKUP"
      },
      {
        "date": "2017-02-11T08:55:40 +08:00",
        "name": "CYTREX",
        "streetAddress": "398 Union Avenue",
        "city": "Hatteras",
        "state": "Hawaii",
        "zip": 5964,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$1,334.72",
      "detention": "$3,398.21",
      "layover": "$2,725.46"
    }
  },
  {
    "invoiceNumber": "5e951a0a92fe795b1aa0e248",
    "loadNumber": 37,
    "billTo": {
      "name": "ZILLAN",
      "streetAddress": "465 High Street",
      "city": "Callaghan",
      "state": " Missouri",
      "zip": 3473
    },
    "stops": [
      {
        "date": "2017-11-17T03:07:48 +08:00",
        "name": "COMFIRM",
        "streetAddress": "551 Bills Place",
        "city": "Santel",
        "state": "Tennessee",
        "zip": 3188,
        "type": "DELIVERY"
      },
      {
        "date": "2016-04-03T04:00:09 +07:00",
        "name": "ZENSURE",
        "streetAddress": "811 Oxford Street",
        "city": "Villarreal",
        "state": "Texas",
        "zip": 4778,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$2,849.60",
      "detention": "$2,197.84",
      "layover": "$3,788.54"
    }
  },
  {
    "invoiceNumber": "5e951a0a155eae0e68689458",
    "loadNumber": 31,
    "billTo": {
      "name": "ZOXY",
      "streetAddress": "190 Ridgewood Avenue",
      "city": "Vincent",
      "state": " Puerto Rico",
      "zip": 9921
    },
    "stops": [
      {
        "date": "2019-08-22T03:07:16 +07:00",
        "name": "ONTAGENE",
        "streetAddress": "975 Pulaski Street",
        "city": "Bangor",
        "state": "Arkansas",
        "zip": 899,
        "type": "DELIVERY"
      },
      {
        "date": "2014-12-07T12:30:22 +08:00",
        "name": "RAMJOB",
        "streetAddress": "362 Keen Court",
        "city": "Westmoreland",
        "state": "Montana",
        "zip": 2458,
        "type": "DELIVERY"
      },
      {
        "date": "2020-02-06T09:41:30 +08:00",
        "name": "PANZENT",
        "streetAddress": "330 Seba Avenue",
        "city": "Nanafalia",
        "state": "Louisiana",
        "zip": 7914,
        "type": "DELIVERY"
      },
      {
        "date": "2015-09-02T01:59:51 +07:00",
        "name": "QIMONK",
        "streetAddress": "349 Elmwood Avenue",
        "city": "Lynn",
        "state": "Alabama",
        "zip": 9635,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$1,687.40",
      "detention": "$3,641.55",
      "layover": "$3,923.64"
    }
  },
  {
    "invoiceNumber": "5e951a0a58d7986d7de91135",
    "loadNumber": 37,
    "billTo": {
      "name": "EXOSPEED",
      "streetAddress": "275 Essex Street",
      "city": "Konterra",
      "state": " Maryland",
      "zip": 2424
    },
    "stops": [
      {
        "date": "2018-06-28T09:30:54 +07:00",
        "name": "ACRODANCE",
        "streetAddress": "404 Remsen Street",
        "city": "Jackpot",
        "state": "Vermont",
        "zip": 1984,
        "type": "PICKUP"
      },
      {
        "date": "2015-02-25T06:11:44 +08:00",
        "name": "INTERGEEK",
        "streetAddress": "878 Lois Avenue",
        "city": "Foscoe",
        "state": "Pennsylvania",
        "zip": 2082,
        "type": "DELIVERY"
      },
      {
        "date": "2019-03-07T04:10:47 +08:00",
        "name": "MEGALL",
        "streetAddress": "315 Colby Court",
        "city": "Albany",
        "state": "Federated States Of Micronesia",
        "zip": 5817,
        "type": "DELIVERY"
      },
      {
        "date": "2016-07-29T10:43:30 +07:00",
        "name": "DAYCORE",
        "streetAddress": "230 Horace Court",
        "city": "Gordon",
        "state": "New Jersey",
        "zip": 5597,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$2,661.29",
      "detention": "$2,319.18",
      "layover": "$2,402.26"
    }
  },
  {
    "invoiceNumber": "5e951a0ab9c69a2521534e67",
    "loadNumber": 30,
    "billTo": {
      "name": "RUBADUB",
      "streetAddress": "408 Tabor Court",
      "city": "Kilbourne",
      "state": " Iowa",
      "zip": 6499
    },
    "stops": [
      {
        "date": "2015-02-02T06:43:45 +08:00",
        "name": "PRIMORDIA",
        "streetAddress": "610 Jodie Court",
        "city": "Madaket",
        "state": "Wyoming",
        "zip": 9199,
        "type": "DELIVERY"
      },
      {
        "date": "2016-03-12T12:20:29 +08:00",
        "name": "ZENOLUX",
        "streetAddress": "911 Herbert Street",
        "city": "Brule",
        "state": "District Of Columbia",
        "zip": 6632,
        "type": "PICKUP"
      },
      {
        "date": "2015-09-19T06:22:11 +07:00",
        "name": "AEORA",
        "streetAddress": "224 Rewe Street",
        "city": "Tyro",
        "state": "Colorado",
        "zip": 6677,
        "type": "PICKUP"
      },
      {
        "date": "2016-08-28T01:39:19 +07:00",
        "name": "QUALITEX",
        "streetAddress": "210 Merit Court",
        "city": "Loretto",
        "state": "West Virginia",
        "zip": 2584,
        "type": "DELIVERY"
      },
      {
        "date": "2018-02-16T03:38:43 +08:00",
        "name": "CINESANCT",
        "streetAddress": "281 Tompkins Place",
        "city": "Rivera",
        "state": "California",
        "zip": 2539,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$1,501.66",
      "detention": "$1,329.67",
      "layover": "$1,472.68"
    }
  },
  {
    "invoiceNumber": "5e951a0aecbefe46d4f34835",
    "loadNumber": 39,
    "billTo": {
      "name": "CIRCUM",
      "streetAddress": "130 Wogan Terrace",
      "city": "Hinsdale",
      "state": " New Mexico",
      "zip": 3783
    },
    "stops": [
      {
        "date": "2018-07-29T04:13:42 +07:00",
        "name": "DIGIAL",
        "streetAddress": "908 Mill Avenue",
        "city": "Woodruff",
        "state": "North Carolina",
        "zip": 4712,
        "type": "DELIVERY"
      },
      {
        "date": "2014-12-30T07:43:46 +08:00",
        "name": "EXOSWITCH",
        "streetAddress": "660 Amboy Street",
        "city": "Lowell",
        "state": "Illinois",
        "zip": 5796,
        "type": "PICKUP"
      },
      {
        "date": "2018-01-19T12:21:41 +08:00",
        "name": "ENOMEN",
        "streetAddress": "170 Montauk Court",
        "city": "Kaka",
        "state": "Kentucky",
        "zip": 6072,
        "type": "PICKUP"
      },
      {
        "date": "2017-08-16T08:56:27 +07:00",
        "name": "ZYPLE",
        "streetAddress": "691 Cox Place",
        "city": "Dawn",
        "state": "Minnesota",
        "zip": 8671,
        "type": "DELIVERY"
      },
      {
        "date": "2017-07-01T04:48:28 +07:00",
        "name": "NEBULEAN",
        "streetAddress": "526 Bay Parkway",
        "city": "Trona",
        "state": "Connecticut",
        "zip": 9169,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$2,093.96",
      "detention": "$1,841.98",
      "layover": "$1,524.39"
    }
  },
  {
    "invoiceNumber": "5e951a0a8d755390073285ed",
    "loadNumber": 25,
    "billTo": {
      "name": "SNOWPOKE",
      "streetAddress": "572 Calyer Street",
      "city": "Sedley",
      "state": " Nevada",
      "zip": 1318
    },
    "stops": [
      {
        "date": "2017-01-23T01:14:34 +08:00",
        "name": "LUMBREX",
        "streetAddress": "908 Hicks Street",
        "city": "Edgewater",
        "state": "South Dakota",
        "zip": 7185,
        "type": "PICKUP"
      },
      {
        "date": "2014-01-19T06:22:03 +08:00",
        "name": "CUJO",
        "streetAddress": "497 Erskine Loop",
        "city": "Delshire",
        "state": "Rhode Island",
        "zip": 8545,
        "type": "DELIVERY"
      },
      {
        "date": "2019-09-14T02:58:19 +07:00",
        "name": "BEDLAM",
        "streetAddress": "260 Granite Street",
        "city": "Walker",
        "state": "Utah",
        "zip": 5010,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$2,659.22",
      "detention": "$3,641.36",
      "layover": "$3,377.28"
    }
  },
  {
    "invoiceNumber": "5e951a0a3007f2d00e98ab98",
    "loadNumber": 40,
    "billTo": {
      "name": "TWIGGERY",
      "streetAddress": "577 Dekalb Avenue",
      "city": "Tryon",
      "state": " Virginia",
      "zip": 8374
    },
    "stops": [
      {
        "date": "2014-02-26T06:14:56 +08:00",
        "name": "ROBOID",
        "streetAddress": "244 Hyman Court",
        "city": "Nicholson",
        "state": "Florida",
        "zip": 8014,
        "type": "DELIVERY"
      },
      {
        "date": "2018-09-23T03:28:55 +07:00",
        "name": "FITCORE",
        "streetAddress": "203 Centre Street",
        "city": "Osmond",
        "state": "Northern Mariana Islands",
        "zip": 4944,
        "type": "PICKUP"
      },
      {
        "date": "2014-03-20T09:27:14 +07:00",
        "name": "EXOSPACE",
        "streetAddress": "160 Corbin Place",
        "city": "Ryderwood",
        "state": "Palau",
        "zip": 5458,
        "type": "DELIVERY"
      },
      {
        "date": "2020-01-18T07:47:51 +08:00",
        "name": "MONDICIL",
        "streetAddress": "647 Vine Street",
        "city": "Alderpoint",
        "state": "South Carolina",
        "zip": 3988,
        "type": "PICKUP"
      },
      {
        "date": "2014-07-20T03:57:22 +07:00",
        "name": "TERASCAPE",
        "streetAddress": "356 Greenwood Avenue",
        "city": "Hardyville",
        "state": "Wisconsin",
        "zip": 2682,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$2,116.60",
      "detention": "$3,907.41",
      "layover": "$3,884.17"
    }
  },
  {
    "invoiceNumber": "5e951a0a3aa3b0b3ac136cbf",
    "loadNumber": 27,
    "billTo": {
      "name": "ECOSYS",
      "streetAddress": "517 Ryerson Street",
      "city": "Cashtown",
      "state": " Indiana",
      "zip": 3053
    },
    "stops": [
      {
        "date": "2015-01-28T05:53:00 +08:00",
        "name": "SHEPARD",
        "streetAddress": "155 India Street",
        "city": "Norvelt",
        "state": "Maine",
        "zip": 2912,
        "type": "DELIVERY"
      },
      {
        "date": "2015-01-08T11:26:21 +08:00",
        "name": "VIRVA",
        "streetAddress": "885 Taylor Street",
        "city": "Garberville",
        "state": "Washington",
        "zip": 9614,
        "type": "DELIVERY"
      },
      {
        "date": "2015-06-15T03:29:20 +07:00",
        "name": "KLUGGER",
        "streetAddress": "278 Mayfair Drive",
        "city": "Dubois",
        "state": "Arizona",
        "zip": 8284,
        "type": "DELIVERY"
      },
      {
        "date": "2018-12-07T09:35:46 +08:00",
        "name": "RECRITUBE",
        "streetAddress": "534 Lott Place",
        "city": "Leeper",
        "state": "Virgin Islands",
        "zip": 2001,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$2,959.31",
      "detention": "$3,433.30",
      "layover": "$2,272.02"
    }
  },
  {
    "invoiceNumber": "5e951a0af56322347d6f71b8",
    "loadNumber": 22,
    "billTo": {
      "name": "EZENTIA",
      "streetAddress": "107 Meserole Avenue",
      "city": "Loveland",
      "state": " North Dakota",
      "zip": 4276
    },
    "stops": [
      {
        "date": "2016-12-25T02:46:10 +08:00",
        "name": "ZEPITOPE",
        "streetAddress": "177 Box Street",
        "city": "Veyo",
        "state": "Idaho",
        "zip": 6982,
        "type": "PICKUP"
      },
      {
        "date": "2017-12-23T03:52:26 +08:00",
        "name": "KINETICA",
        "streetAddress": "240 Moore Street",
        "city": "Sparkill",
        "state": "Massachusetts",
        "zip": 2213,
        "type": "PICKUP"
      },
      {
        "date": "2019-08-21T12:24:23 +07:00",
        "name": "FUELWORKS",
        "streetAddress": "835 Hamilton Avenue",
        "city": "Riceville",
        "state": "Oregon",
        "zip": 6828,
        "type": "PICKUP"
      },
      {
        "date": "2018-09-11T01:47:04 +07:00",
        "name": "KANGLE",
        "streetAddress": "421 Dumont Avenue",
        "city": "Richmond",
        "state": "Kansas",
        "zip": 5686,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$3,605.24",
      "detention": "$2,275.09",
      "layover": "$3,037.89"
    }
  },
  {
    "invoiceNumber": "5e951a0a98a782ee3f38505d",
    "loadNumber": 37,
    "billTo": {
      "name": "XYMONK",
      "streetAddress": "503 Richards Street",
      "city": "Highland",
      "state": " American Samoa",
      "zip": 3934
    },
    "stops": [
      {
        "date": "2018-08-01T10:03:29 +07:00",
        "name": "JOVIOLD",
        "streetAddress": "663 Maple Street",
        "city": "Chumuckla",
        "state": "Oklahoma",
        "zip": 6703,
        "type": "PICKUP"
      },
      {
        "date": "2020-02-20T12:54:19 +08:00",
        "name": "HONOTRON",
        "streetAddress": "925 Bainbridge Street",
        "city": "Hayden",
        "state": "Nebraska",
        "zip": 1711,
        "type": "DELIVERY"
      },
      {
        "date": "2015-07-30T08:23:22 +07:00",
        "name": "TROLLERY",
        "streetAddress": "825 Argyle Road",
        "city": "Woodlands",
        "state": "Marshall Islands",
        "zip": 5375,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$1,216.78",
      "detention": "$3,026.68",
      "layover": "$3,384.84"
    }
  },
  {
    "invoiceNumber": "5e951a0a85e4f9a58d8d52f1",
    "loadNumber": 29,
    "billTo": {
      "name": "QUANTALIA",
      "streetAddress": "356 Hinckley Place",
      "city": "Calvary",
      "state": " Alaska",
      "zip": 7619
    },
    "stops": [
      {
        "date": "2019-03-18T09:46:19 +07:00",
        "name": "ASSITIA",
        "streetAddress": "285 Flatlands Avenue",
        "city": "Clarktown",
        "state": "Michigan",
        "zip": 1298,
        "type": "DELIVERY"
      },
      {
        "date": "2019-08-20T11:38:12 +07:00",
        "name": "ZIDANT",
        "streetAddress": "381 Village Court",
        "city": "Glenbrook",
        "state": "Mississippi",
        "zip": 7840,
        "type": "DELIVERY"
      },
      {
        "date": "2017-05-29T08:28:39 +07:00",
        "name": "BOILCAT",
        "streetAddress": "925 Seton Place",
        "city": "Dyckesville",
        "state": "New Hampshire",
        "zip": 9179,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$3,587.34",
      "detention": "$3,690.77",
      "layover": "$1,697.99"
    }
  },
  {
    "invoiceNumber": "5e951a0a9d76da7f482b09b1",
    "loadNumber": 40,
    "billTo": {
      "name": "UNI",
      "streetAddress": "894 Hancock Street",
      "city": "Galesville",
      "state": " Delaware",
      "zip": 4476
    },
    "stops": [
      {
        "date": "2016-01-14T04:25:28 +08:00",
        "name": "XERONK",
        "streetAddress": "131 Melba Court",
        "city": "Whitewater",
        "state": "Georgia",
        "zip": 2649,
        "type": "DELIVERY"
      },
      {
        "date": "2014-10-24T03:08:00 +07:00",
        "name": "ISOSPHERE",
        "streetAddress": "111 Verona Street",
        "city": "Aurora",
        "state": "Guam",
        "zip": 775,
        "type": "PICKUP"
      },
      {
        "date": "2017-09-14T05:08:08 +07:00",
        "name": "VANTAGE",
        "streetAddress": "105 Gatling Place",
        "city": "Coaldale",
        "state": "Ohio",
        "zip": 7813,
        "type": "DELIVERY"
      },
      {
        "date": "2019-03-22T05:03:47 +07:00",
        "name": "SHOPABOUT",
        "streetAddress": "282 Strong Place",
        "city": "Nescatunga",
        "state": "Hawaii",
        "zip": 3949,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$1,505.91",
      "detention": "$2,845.88",
      "layover": "$2,791.23"
    }
  },
  {
    "invoiceNumber": "5e951a0abb2b7f5206c3186c",
    "loadNumber": 36,
    "billTo": {
      "name": "ZBOO",
      "streetAddress": "326 Livingston Street",
      "city": "Monument",
      "state": " Missouri",
      "zip": 2908
    },
    "stops": [
      {
        "date": "2019-04-16T05:44:11 +07:00",
        "name": "ULTRASURE",
        "streetAddress": "532 Beacon Court",
        "city": "Ballico",
        "state": "Tennessee",
        "zip": 9615,
        "type": "DELIVERY"
      },
      {
        "date": "2019-02-12T06:10:09 +08:00",
        "name": "FISHLAND",
        "streetAddress": "301 Durland Place",
        "city": "Finzel",
        "state": "Texas",
        "zip": 2385,
        "type": "PICKUP"
      },
      {
        "date": "2017-10-24T04:17:25 +07:00",
        "name": "MUSANPOLY",
        "streetAddress": "509 Dictum Court",
        "city": "Lookingglass",
        "state": "Puerto Rico",
        "zip": 4517,
        "type": "DELIVERY"
      },
      {
        "date": "2016-05-24T07:04:00 +07:00",
        "name": "LOTRON",
        "streetAddress": "320 Abbey Court",
        "city": "Crisman",
        "state": "Arkansas",
        "zip": 9396,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$3,115.71",
      "detention": "$3,558.88",
      "layover": "$1,599.77"
    }
  },
  {
    "invoiceNumber": "5e951a0aad959efa9e6ebb42",
    "loadNumber": 28,
    "billTo": {
      "name": "GRAINSPOT",
      "streetAddress": "958 Interborough Parkway",
      "city": "Venice",
      "state": " Montana",
      "zip": 5465
    },
    "stops": [
      {
        "date": "2015-09-20T01:54:14 +07:00",
        "name": "QUILK",
        "streetAddress": "758 Lacon Court",
        "city": "Wyoming",
        "state": "Louisiana",
        "zip": 5460,
        "type": "DELIVERY"
      },
      {
        "date": "2016-08-29T12:36:19 +07:00",
        "name": "ESCENTA",
        "streetAddress": "793 Arlington Place",
        "city": "Germanton",
        "state": "Alabama",
        "zip": 3861,
        "type": "DELIVERY"
      },
      {
        "date": "2017-02-26T03:41:08 +08:00",
        "name": "OULU",
        "streetAddress": "473 Montieth Street",
        "city": "Boomer",
        "state": "Maryland",
        "zip": 2243,
        "type": "DELIVERY"
      },
      {
        "date": "2016-07-18T01:17:43 +07:00",
        "name": "MAINELAND",
        "streetAddress": "430 Forbell Street",
        "city": "Lopezo",
        "state": "Vermont",
        "zip": 7705,
        "type": "PICKUP"
      }
    ],
    "balances": {
      "rateAmount": "$3,938.30",
      "detention": "$2,303.06",
      "layover": "$1,096.32"
    }
  },
  {
    "invoiceNumber": "5e951a0a11d1e4fa1a2ac65a",
    "loadNumber": 25,
    "billTo": {
      "name": "DARWINIUM",
      "streetAddress": "946 Fanchon Place",
      "city": "Ona",
      "state": " Pennsylvania",
      "zip": 2483
    },
    "stops": [
      {
        "date": "2018-04-08T05:54:36 +07:00",
        "name": "DOGTOWN",
        "streetAddress": "100 Crooke Avenue",
        "city": "Bath",
        "state": "Federated States Of Micronesia",
        "zip": 5749,
        "type": "DELIVERY"
      },
      {
        "date": "2020-04-01T07:04:33 +07:00",
        "name": "MICRONAUT",
        "streetAddress": "780 Story Court",
        "city": "Swartzville",
        "state": "New Jersey",
        "zip": 2891,
        "type": "DELIVERY"
      },
      {
        "date": "2016-04-29T02:48:09 +07:00",
        "name": "BRAINQUIL",
        "streetAddress": "721 Elliott Place",
        "city": "Grandview",
        "state": "Iowa",
        "zip": 5947,
        "type": "PICKUP"
      },
      {
        "date": "2015-02-12T08:00:04 +08:00",
        "name": "EVIDENDS",
        "streetAddress": "363 Lefferts Avenue",
        "city": "Silkworth",
        "state": "Wyoming",
        "zip": 1649,
        "type": "PICKUP"
      },
      {
        "date": "2018-10-12T01:06:08 +07:00",
        "name": "KROG",
        "streetAddress": "853 Haring Street",
        "city": "Hegins",
        "state": "District Of Columbia",
        "zip": 984,
        "type": "DELIVERY"
      }
    ],
    "balances": {
      "rateAmount": "$2,377.41",
      "detention": "$2,591.98",
      "layover": "$3,750.69"
    }
  }
];

export default fakeData;
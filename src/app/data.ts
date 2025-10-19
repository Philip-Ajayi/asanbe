// data.ts
import { PowerData } from "./types";

export const powerData: PowerData = [{
  "businessUnit": "IKORODU",
  "feeders33kV": [
    {
      "name": "IPAKODO",
      "injections": [
        {
          "name": "EBUTE INJ: S/S",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                {
                  "nomenclature": "11-Ipakodo (Ebute)INJ-T1-Abuja",
                  "name": "ABUJA",
                  "band": "C"
                },
                {
                  "nomenclature": "11-Ipakodo (Ebute)INJ-T1-Ipakodo",
                  "name": "IPAKODO",
                  "band": "C"
                },
                {
                  "nomenclature": "11-Ipakodo (Ebute)INJ-T1-WAEC",
                  "name": "WAEC",
                  "band": "C"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "OWUTU",
      "injections": [
        {
          "name": "OWUTU INJ: S/S",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                {
                  "nomenclature": "11-OwutuINJ-T1-Agric",
                  "name": "AGRIC",
                  "band": "B"
                },
                {
                  "nomenclature": "11-OwutuINJ-T1-Ori Okuta",
                  "name": "ORIOKUTA",
                  "band": "C"
                }
              ]
            },
            {
              "name": "T2 15MVA",
              "feeders11kV": [
                {
                  "nomenclature": "11-OwutuINJ-T2-Majidun",
                  "name": "MAJIDUN",
                  "band": "B"
                },
                {
                  "nomenclature": "11-OwutuINJ-T2-Isawo",
                  "name": "ISAWO",
                  "band": "D"
                },
                {
                  "nomenclature": "11-OwutuINJ-T2-Asolo",
                  "name": "ASOLO",
                  "band": "C"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "T1 SABO",
      "injections": [
        {
          "name": "SABO INJ. S/S",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                {
                  "nomenclature": "11-SaboINJ-T1-Ayangburen",
                  "name": "AYANGBUREN",
                  "band": "C"
                },
                {
                  "nomenclature": "11-SaboINJ-T1-Mary Hill",
                  "name": "MARY HILL",
                  "band": "C"
                },
                {
                  "nomenclature": "11-SaboINJ-T1-Ijebu Ode",
                  "name": "IJEBUODE ROAD",
                  "band": "D"
                },
                {
                  "nomenclature": "11-SaboINJ-T1-Lasunwon",
                  "name": "LASUNWON",
                  "band": "C"
                }
              ]
            },
            {
              "name": "T2 15MVA",
              "feeders11kV": [
                {
                  "nomenclature": "11-SaboINJ-T2-Lagos Road",
                  "name": "LAGOS ROAD",
                  "band": "B"
                },
                {
                  "nomenclature": "11-SaboINJ-T2-Erunwen",
                  "name": "ERUNWEN",
                  "band": "D"
                },
                {
                  "nomenclature": "11-SaboINJ-T2-Igbogbo",
                  "name": "IGBOGBO",
                  "band": "D"
                },
                {
                  "nomenclature": "11-SaboINJ-T2-Ladega",
                  "name": "LADEGA",
                  "band": "D"
                },
                {
                  "nomenclature": "11-SaboINJ-T2-Eyita",
                  "name": "EYITA",
                  "band": "B"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "OKE ELETU",
      "injections": [
        {
          "name": "OKELETU INJ: S/S",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                {
                  "nomenclature": "11-IjedeINJ-T1-Gberibe",
                  "name": "GBERIGBE",
                  "band": "C"
                },
                {
                  "nomenclature": "11-IjedeINJ-T1-Luwasa",
                  "name": "LUWASA",
                  "band": "C"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "IGBOGBO",
      "injections": [
        {
          "name": "IGBOGBO INJ",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                {
                  "nomenclature": "11-IgbogboINJ-T1-Bayeku",
                  "name": "BAYEKU",
                  "band": "D"
                },
                {
                  "nomenclature": "11-IgbogboINJ-T1-Ofin",
                  "name": "OFIN",
                  "band": "D"
                }
              ]
            },
            {
              "name": "T2 15MVA",
              "feeders11kV": [
                {
                  "nomenclature": "11-IgbogboINJ-T2-Agunfoye",
                  "name": "AGUNFOYE",
                  "band": "D"
                },
                {
                  "nomenclature": "11-IgbogboINJ-T2-Odofin",
                  "name": "ODOFIN",
                  "band": "D"
                },
                {
                  "nomenclature": "11-IgbogboINJ-T2-Agbele",
                  "name": "AGBELE",
                  "band": "D"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "ODOGUNYAN",
      "injections": [
        {
          "name": "ODOGUNYAN",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                {
                  "nomenclature": "11-OdogunyanINJ-T1-Agodo",
                  "name": "AGODO",
                  "band": "B"
                },
                {
                  "nomenclature": "11-OdogunyanINJ-T1-Industrial",
                  "name": "INDUSTRIAL",
                  "band": "D"
                },
                {
                  "nomenclature": "11-OdogunyanINJ-T1-Centex",
                  "name": "CENTEX",
                  "band": "A"
                }
              ]
            },
            {
              "name": "T2 15MVA",
              "feeders11kV": [
                {
                  "nomenclature": "11-OdogunyanINJ-T2-Odokekere",
                  "name": "ODOKEKERE",
                  "band": "A"
                },
                {
                  "nomenclature": "11-OdogunyanINJ-T2-Ita Oluwo",
                  "name": "ITA OLUWO",
                  "band": "D"
                },
                {
                  "nomenclature": "11-OdogunyanINJ-T2-Cantonment",
                  "name": "CANTONMENT",
                  "band": "C"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "AGBOWA",
      "injections": [
        {
          "name": "EPE",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                {
                  "nomenclature": "11-EpeINJ-T1-Township",
                  "name": "TOWNSHIP",
                  "band": "E"
                },
                {
                  "nomenclature": "11-EpeINJ-T1-LASU",
                  "name": "LASU",
                  "band": "E"
                },
                {
                  "nomenclature": "11-EpeINJ-T1-Water Works",
                  "name": "WATER WORKS",
                  "band": "E"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "IBESHE",
      "injections": [
        {
          "name": "AJEGUNLE",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                {
                  "nomenclature": "11-AjegunleINJ-T1-Thomas Olaniyan",
                  "name": "THOMAS LANIYAN",
                  "band": "B"
                },
                {
                  "nomenclature": "11-AjegunleINJ-T1-Owode Onirin",
                  "name": "OWODE ONIRIN",
                  "band": "B"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
},
{
  "businessUnit": "SHOMOLU",
  "feeders33kV": [
    {
      "name": "OGUDU I",
      "injections": [
        {
          "name": "OGUDU",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-OguduINJ-T1-CAC", "name": "CAC", "band": "A" },
                { "nomenclature": "11-OguduINJ-T1-Ogudu", "name": "OGUDU RD", "band": "A" },
                { "nomenclature": "11-OguduINJ-T1-Express", "name": "EXPRESS", "band": "A" }
              ]
            },
            {
              "name": "T2 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-OguduINJ-T2-Alapere", "name": "ALAPERE", "band": "A" },
                { "nomenclature": "11-OguduINJ-T2-Oriola", "name": "ORIOLA", "band": "A" }
              ]
            },
            {
              "name": "T3 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-OguduINJ-T3-Balogun", "name": "BALOGUN", "band": "B" },
                { "nomenclature": "11-OguduINJ-T3-Soluyi", "name": "SOLUYI", "band": "A" },
                { "nomenclature": "11-OguduINJ-T3-Kola Adeshina", "name": "KOLA ADESHINA", "band": "A" }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "T2 OWORO",
      "injections": [
        {
          "name": "OWORO",
          "transformers": [
            {
              "name": "T2 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-OworoINJ-T2-Ladilac", "name": "LADI LAK", "band": "B" },
                { "nomenclature": "11-OworoINJ-T2-Oworo", "name": "OWORO", "band": "B" },
                { "nomenclature": "11-OworoINJ-T2-Pedro", "name": "PEDRO", "band": "C" }
              ]
            },
            {
              "name": "T3 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-OworoINJ-T3-Anthony", "name": "ANTHONY", "band": "A" },
                { "nomenclature": "11-OworoINJ-T3-Gbagada", "name": "GBAGADA", "band": "A" },
                { "nomenclature": "11-OworoINJ-T3-GTB", "name": "GTB", "band": "A" }
              ]
            },
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-OworoINJ-T1-Ifako", "name": "IFAKO", "band": "B" },
                { "nomenclature": "11-OworoINJ-T1-Hospital", "name": "HOSP: RD", "band": "B" },
                { "nomenclature": "11-OworoINJ-T1-Bariga", "name": "BARIGA", "band": "C" }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "OWORO IGBOBI",
      "injections": [
        {
          "name": "IGBOBI",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-IgbobiINJ-T1-Military", "name": "MIL. HOSPITAL", "band": "B" },
                { "nomenclature": "11-IgbobiINJ-T1-Apata", "name": "APATA", "band": "A" },
                { "nomenclature": "11-IgbobiINJ-T1-Orthopaedic", "name": "ORTHOPEADIC", "band": "B" }
              ]
            },
            {
              "name": "T2 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-IgbobiINJ-T2-Adurosakin", "name": "ADUROSHAKIN", "band": "A" },
                { "nomenclature": "11-IgbobiINJ-T2-Market", "name": "MARKET", "band": "A" },
                { "nomenclature": "11-IgbobiINJ-T2-Igbobi", "name": "IGBOBI", "band": "A" }
              ]
            },
            {
              "name": "T3 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-IgbobiINJ-T3-Mushin", "name": "MUNSHIN 1", "band": "C" },
                { "nomenclature": "11-IgbobiINJ-T3-Railway", "name": "RAILWAY", "band": "A" },
                { "nomenclature": "11-IgbobiINJ-T3-Ikorodu", "name": "IKORODU RD:", "band": "B" }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "ILUPEJU BYE PASS",
      "injections": [
        {
          "name": "ILUPEJU LOCAL",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-Ilupeju BypassINJ-T1-Bypass", "name": "ILUPEJU B:P", "band": "A" },
                { "nomenclature": "11-Ilupeju BypassINJ-T1-Obanikoro", "name": "OBANIKORO", "band": "A" },
                { "nomenclature": "11-Ilupeju BypassINJ-T1-Industrial", "name": "ILUPEJU IND:", "band": "A" }
              ]
            }
          ]
        },
        {
          "name": "MUSHIN",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-MushinINJ-T1-Mushin", "name": "MUSHIN", "band": "C" },
                { "nomenclature": "11-MushinINJ-T1-Mushin 2", "name": "MUSHIN II", "band": "C" }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "TI MARYLAND",
      "injections": [
        {
          "name": "MARYLAND",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-MarylandINJ-T1-Okupe", "name": "OKUPE", "band": "A" },
                { "nomenclature": "11-MarylandINJ-T1-Ketu", "name": "KETU", "band": "A" }
              ]
            },
            {
              "name": "T2 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-MarylandINJ-T2-Westex", "name": "WESTEX", "band": "A" }
              ]
            },
            {
              "name": "T3 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-MarylandINJ-T3-Demurin", "name": "DEMURIN", "band": "A" },
                { "nomenclature": "11-MarylandINJ-T3-Sylvia", "name": "SILVA", "band": "A" },
                { "nomenclature": "11-MarylandINJ-T3-Ikosi", "name": "IKOSI", "band": "B" }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "OPIC",
      "injections": [
        {
          "name": "ISHERI",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-IsheriINJ-T1-Isheri", "name": "ISHERI", "band": "A" },
                { "nomenclature": "11-IsheriINJ-T1-Olowora", "name": "OLOWORA", "band": null },
                { "nomenclature": "11-IsheriINJ-T1-Bankole", "name": "BANKOLE", "band": "A" }
              ]
            }
          ]
        },
        {
          "name": "OLOWORA",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-OloworaINJ-T1-Orisha", "name": "ORISHA", "band": "A" },
                { "nomenclature": "11-OloworaINJ-T1-Unilag", "name": "UNILAG", "band": "A" }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "MAGODO",
      "injections": [
        {
          "name": "MAGODO",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-MagodoINJ-T1-Shangisha", "name": "SHANGISHA", "band": "A" },
                { "nomenclature": "11-MagodoINJ-T1-Owulade", "name": "OWULADE", "band": "A" },
                { "nomenclature": "11-MagodoINJ-T1-Emmanuel Keshi", "name": "E/KESHI", "band": "A" },
                { "nomenclature": "11-MagodoINJ-T1-Oluyombo", "name": "OLUYONBO", "band": null }
              ]
            },
            {
              "name": "T2 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-MagodoINJ-T2-CMD", "name": "CMD", "band": "A" },
                { "nomenclature": "11-MagodoINJ-T2-Bashiru", "name": "BASHIR SHITTU", "band": "A" }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "MARYLAND AJEGUNLE",
      "injections": [
        {
          "name": "WASIMI",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-WasimiINJ-T1-Araromi", "name": "ARAROMI", "band": "A" },
                { "nomenclature": "11-WasimiINJ-T1-Agiliti", "name": "AGILITI", "band": "C" },
                { "nomenclature": "11-WasimiINJ-T1-Akanimodo", "name": "AKANIMODO", "band": "B" }
              ]
            },
            {
              "name": "T2 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-WasimiINJ-T2-Wasimi", "name": "WASIMI", "band": "B" },
                { "nomenclature": "11-WasimiINJ-T2-Agidi", "name": "AGIDI", "band": "B" }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "NEW YABA",
      "injections": [
        {
          "name": "NEW YABA",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-New YabaINJ-T1-Fadeyi", "name": "FADEYI", "band": null }
              ]
            },
            {
              "name": "T2 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-New YabaINJ-T2-Jibowu", "name": "JIBOWU", "band": "B" },
                { "nomenclature": "11-New YabaINJ-T2-Mushin 2", "name": "MUSHIN 11", "band": null }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "AKOKA",
      "injections": [
        {
          "name": "AKOKA",
          "transformers": [
            {
              "name": "T3 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-AkokaINJ-T3-Akoka", "name": "AKOKA", "band": "B" },
                { "nomenclature": "11-AkokaINJ-T3-Community", "name": "COMMUNITY", "band": "E" },
                { "nomenclature": "11-AkokaINJ-T3-Ilaje", "name": "ILAJE", "band": null }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "T3 ILUPEJU",
      "injections": [
        {
          "name": "ILUPEJU",
          "transformers": [
            {
              "name": "T3 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-IlupejuINJ-T3-Palmgrove", "name": "P/EXPRESS", "band": "A" },
                { "nomenclature": "11-IlupejuINJ-T3-Coker", "name": "COKER", "band": "A" },
                { "nomenclature": "11-IlupejuINJ-T3-PZ", "name": "PZ", "band": null }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "ALAPERE",
      "injections": [
        {
          "name": "ALAPERE",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-AlapereINJ-T1-Agboyi", "name": "AGBOYI", "band": "B" },
                { "nomenclature": "11-AlapereINJ-T1-Araba", "name": "ARABA", "band": "B" },
                { "nomenclature": "11-AlapereINJ-T1-Bakare", "name": "BAKARE", "band": "B" }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "NEW OWORO",
      "injections": [
        {
          "name": "NEW OWORO",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-New OworoINJ-T1-Odunsi", "name": "ODUNSI", "band": "A" },
                { "nomenclature": "11-New OworoINJ-T1-Finbars", "name": "FINBARS", "band": "B" }
              ]
            }
          ]
        }
      ]
    }
  ]
},
{
  "businessUnit": "OSHODI",
  "feeders33kV": [
    {
      "name": "ITIRE I",
      "injections": [
        {
          "name": "ITIRE",
          "transformers": [
            {
              "name": "T1B 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-ItireINJ-T2-Ibalex", "name": "IBALEX", "band": "C" },
                { "nomenclature": "11-ItireINJ-T2-Canal", "name": "CANAL", "band": "A" },
                { "nomenclature": "11-ItireINJ-T2-Amuwo-Ijesha", "name": "AMUWO IJESHA", "band": "A" }
              ]
            },
            {
              "name": "T1A 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-ItireINJ-T1-Ademulegun", "name": "ADEMULEGUN", "band": "B" },
                { "nomenclature": "11-ItireINJ-T1-Okota", "name": "OKOTA", "band": "A" }
              ]
            },
            {
              "name": "T3 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-ItireINJ-T3-Ago", "name": "AGO", "band": "B" },
                { "nomenclature": "11-ItireINJ-T3-Apena", "name": "APENA", "band": "B" }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "AMUKOKO",
      "injections": [
        {
          "name": "AMUWO",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-AmuwoINJ-T1-Old Ojo Road", "name": "OLD OJO RD", "band": "D" },
                { "nomenclature": "11-AmuwoINJ-T1-Ijesha Express", "name": "IJESHA EXPRESS", "band": "D" }
              ]
            },
            {
              "name": "T2 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-AmuwoINJ-T2-Jakande 1", "name": "JAKANDE 1", "band": "C" },
                { "nomenclature": "11-AmuwoINJ-T2-Jakande 2", "name": "JAKANDE 2", "band": "C" }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "AGO OKOTA 1",
      "injections": [
        {
          "name": "AGO/OKOTA",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-Ago OkotaINJ-T1-Fasheun", "name": "FASHEUN", "band": "B" },
                { "nomenclature": "11-Ago OkotaINJ-T1-Amuwo Ind.", "name": "AMUWO INDUSTRIAL", "band": "B" }
              ]
            },
            {
              "name": "T2 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-Ago OkotaINJ-T2-Oke Ogbere", "name": "OKE OGBERE", "band": "C" },
                { "nomenclature": "11-Ago OkotaINJ-T2-Lake View", "name": "LAKE VIEW", "band": "C" }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "AJAO",
      "injections": [
        {
          "name": "AJAO",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-AjaoINJ-T1-Airport Road", "name": "AIRPORT RD", "band": "B" },
                { "nomenclature": "11-AjaoINJ-T1-Domino", "name": "DOMINO", "band": "C" }
              ]
            },
            {
              "name": "T2 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-AjaoINJ-T2-New Estate", "name": "NEW ESTATE", "band": "C" },
                { "nomenclature": "11-AjaoINJ-T2-Sholanke", "name": "SHOLANKE", "band": "C" },
                { "nomenclature": "11-AjaoINJ-T2-Run View", "name": "RUN VIEW", "band": "B" }
              ]
            }
          ]
        },
        {
          "name": "MAFOLUKU",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-MafolukuINJ-T1-Makinde", "name": "MAKINDE", "band": "C" },
                { "nomenclature": "11-MafolukuINJ-T1-Saubana", "name": "SAUBANA", "band": "D" },
                { "nomenclature": "11-MafolukuINJ-T1-Dosunmu", "name": "DOSUNMU", "band": "C" }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "PTC ISOLO",
      "injections": [
        {
          "name": "ALASIA",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-AlasiaINJ-T1-Council", "name": "COUNCIL", "band": "D" },
                { "nomenclature": "11-AlasiaINJ-T1-Alasia", "name": "ALASIA", "band": "D" },
                { "nomenclature": "11-AlasiaINJ-T1-Owoseni", "name": "OWOSENI", "band": "D" }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "ISOLO TS",
      "injections": [
        {
          "name": "ISOLO",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-MushinINJ-Aswani", "name": "ASWANI", "band": "A" },
                { "nomenclature": "11-IsoloLocalINJ-Abimbola", "name": "ABIMBOLA", "band": "#N/A" }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "T3 ILUPEJU",
      "injections": [
        {
          "name": "ILUPEJU",
          "transformers": [
            {
              "name": "T3 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-IlupejuINJ-T3-L & K", "name": "L&K", "band": "B" }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "OKE AFA I",
      "injections": [
        {
          "name": "OKE AFA",
          "transformers": [
            {
              "name": "T2 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-Oke AfaINJ-T2-LCHE", "name": "LCHE", "band": "B" },
                { "nomenclature": "11-Oke AfaINJ-T2-Ilamoshe", "name": "ILAMOSHE", "band": "C" },
                { "nomenclature": "11-Oke AfaINJ-T2-Osolo", "name": "OSOLO", "band": "A" }
              ]
            },
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-Oke AfaINJ-T1-Ejigbo", "name": "EJIGBO", "band": "D" },
                { "nomenclature": "11-Oke AfaINJ-T1-Bucknor", "name": "BUCKNOR", "band": "A" },
                { "nomenclature": "11-Oke AfaINJ-T1-Ire-Akari", "name": "IRE AKARI", "band": "C" }
              ]
            },
            {
              "name": "T3 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-Oke AfaINJ-T3-Ori Oke", "name": "ORI-OKE", "band": "D" },
                { "nomenclature": "11-Oke AfaINJ-T3-NNPC", "name": "NNPC", "band": "C" },
                { "nomenclature": "11-Oke AfaINJ-T3-Bungalow", "name": "BUNGALOW", "band": "C" }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "EGBE",
      "injections": [
        {
          "name": "OLORUNPELU",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-BolorunpeluINJ-T1-Abaranje", "name": "ABARANJE", "band": "D" },
                { "nomenclature": "11-BolorunpeluINJ-T1-Idimu", "name": "IDIMU", "band": "C" },
                { "nomenclature": "11-BolorunpeluINJ-T1-Isijola", "name": "ISIJOLA", "band": "C" }
              ]
            },
            {
              "name": "T3 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-BolorunpeluINJ-T3-Governor", "name": "GOVERNOR", "band": "B" },
                { "nomenclature": "11-BolorunpeluINJ-T3-Liasu", "name": "LIASU", "band": "B" }
              ]
            }
          ]
        },
        {
          "name": "KWARU",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-KwaruINJ-T1-Asalu", "name": "ASALU", "band": "A" },
                { "nomenclature": "11-KwaruINJ-T1-Osunba", "name": "OSUNBA", "band": "A" }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "IGANDO",
      "injections": [
        {
          "name": "IGANDO",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-IgandoINJ-T1-Egan", "name": "EGAN", "band": "D" },
                { "nomenclature": "11-IgandoINJ-T1-New Igando", "name": "NEW IGANDO", "band": "D" },
                { "nomenclature": "11-IgandoINJ-T1-Obadore", "name": "OBADORE", "band": "D" }
              ]
            },
            {
              "name": "T2 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-IgandoINJ-T2-Akesan", "name": "AKESAN", "band": "D" },
                { "nomenclature": "11-IgandoINJ-T2-Agric Road", "name": "AGRIC ROAD", "band": "D" },
                { "nomenclature": "11-IgandoINJ-T2-General Hospital", "name": "GENERAL HOSPITAL", "band": "C" },
                { "nomenclature": "11-IgandoINJ-T2-Ikotun Igando", "name": "IGANDO-IKOTUN", "band": "D" }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "IJEGUN",
      "injections": [
        {
          "name": "IJEGUN",
          "transformers": [
            {
              "name": "T2 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-IjegunINJ-T2-Ijegun", "name": "IJEGUN", "band": "D" },
                { "nomenclature": "11-IjegunINJ-T2-Isheri Oshun", "name": "ISHERI OSHUN", "band": "D" },
                { "nomenclature": "11-IjegunINJ-T2-Pipeline", "name": "PIPE LINE", "band": "D" }
              ]
            },
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-IjegunINJ-T1-Okerube", "name": "OKERUBE", "band": "D" },
                { "nomenclature": "11-IjegunINJ-T1-Ikotun", "name": "IKOTUN", "band": "D" },
                { "nomenclature": "11-IjegunINJ-T1-Obalagbe", "name": "OBALAGBE", "band": "C" }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "AGODO",
      "injections": [
        {
          "name": "AGODO EGBE",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-Agodo EgbeINJ-T1-Abanishe", "name": "ABANISHE", "band": "B" },
                { "nomenclature": "11-Agodo EgbeINJ-T1-Kudaki", "name": "KUDAKI", "band": "A" }
              ]
            }
          ]
        }
      ]
    }
  ]
},
{
  "businessUnit": "IKEJA",
  "feeders33kV": [
    {
      "name": "FEEDER 8",
      "injections": [
        {
          "name": "OGBA",
          "transformers": [
            {
              "name": "T2 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-OgbaINJ-T2-Ifako", "name": "IFAKO", "band": "A" }
              ]
            },
            {
              "name": "T3 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-OgbaINJ-T3-Oba Akran", "name": "OBA AKRAN", "band": "A" },
                { "nomenclature": "11-OgbaINJ-T3-M & B", "name": "M&B", "band": "#N/A" },
                { "nomenclature": "11-OgbaINJ-T3-Agege", "name": "AGEGE", "band": "A" }
              ]
            },
            {
              "name": "T2 15MVA (Mangoro)",
              "feeders11kV": [
                { "nomenclature": "11-OgbaINJ-T2-Mangoro", "name": "MANGORO", "band": "A" }
              ]
            }
          ]
        },
        {
          "name": "FEEDER 2",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-OgbaINJ-T1-Ijaye", "name": "IJAYE", "band": "A" },
                { "nomenclature": "11-OgbaINJ-T1-Isokoko", "name": "ISOKOKO", "band": "A" }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "ALAUSA",
      "injections": [
        {
          "name": "NEW ALAUSA",
          "transformers": [
            {
              "name": "T6 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-New AlausaINJ-T6-Ogundana", "name": "OGUNDANA", "band": "A" },
                { "nomenclature": "11-New AlausaINJ-T6-Aromire", "name": "AROMIRE", "band": "#N/A" },
                { "nomenclature": "11-New AlausaINJ-T6-Awolowo", "name": "AWOLOWO", "band": "A" },
                { "nomenclature": "11-New AlausaINJ-T6-Siyanbola", "name": "SHIYANBOLA", "band": "A" }
              ]
            },
            {
              "name": "T4 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-New AlausaINJ-T4-Allen", "name": "ALLEN", "band": "A" },
                { "nomenclature": "11-New AlausaINJ-T4-Oregun", "name": "OREGUN", "band": "A" }
              ]
            },
            {
              "name": "T5 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-New AlausaINJ-T5-Morrison", "name": "MORRISON", "band": "A" },
                { "nomenclature": "11-New AlausaINJ-T5-Alausa", "name": "ALAUSA", "band": "A" },
                { "nomenclature": "11-New AlausaINJ-T5-Kudirat", "name": "KUDIRAT", "band": "A" }
              ]
            }
          ]
        },
        {
          "name": "SECRETARIAT",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-SecretariatINJ-T1-Estate", "name": "ESTATE", "band": "A" },
                { "nomenclature": "11-SecretariatINJ-T1-Lateef Jakande", "name": "LATEEF JAKANDE", "band": "A" },
                { "nomenclature": "11-SecretariatINJ-T1-Omole", "name": "OMOLE", "band": "A" }
              ]
            },
            {
              "name": "T2 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-SecretariatINJ-T2-Agidingbi", "name": "AGIDINGBI", "band": "A" },
                { "nomenclature": "11-SecretariatINJ-T2-7UP", "name": "7UP", "band": "A" },
                { "nomenclature": "11-SecretariatINJ-T2-UAC", "name": "UAC", "band": "A" }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "OPEBI",
      "injections": [
        {
          "name": "OPEBI",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-OpebiINJ-T1-Agbaoku", "name": "AGBAOKU", "band": "A" },
                { "nomenclature": "11-OpebiINJ-T1-Salvation", "name": "SALVATION", "band": "A" },
                { "nomenclature": "11-OpebiINJ-T1-Olusosun", "name": "OLUSOSUN", "band": "A" }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "PTC EXPRESS",
      "injections": [
        {
          "name": "PTC",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-PTCINJ-T1-Opebi", "name": "OPEBI", "band": "A" },
                { "nomenclature": "11-PTCINJ-T1-Olowu", "name": "OLOWU", "band": "A" }
              ]
            },
            {
              "name": "T2 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-PTCINJ-T2-Medical", "name": "MEDICAL", "band": "A" },
                { "nomenclature": "11-PTCINJ-T2-Awuse", "name": "AWUSE", "band": "A" }
              ]
            },
            {
              "name": "T3 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-PTCINJ-T3-Oba Akinjobi", "name": "OBA AKINJOBI", "band": "A" },
                { "nomenclature": "11-PTCINJ-T3-General Hospital", "name": "GENERAL HOSPITAL", "band": "A" }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "MARYLAND PTC",
      "injections": [
        {
          "name": "ADEKUNLE FAJUYI",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-Adekunle FajuyiINJ-T1-Isaac John", "name": "ISAAC JOHN", "band": "A" },
                { "nomenclature": "11-Adekunle FajuyiINJ-T1-Oduduwa", "name": "ODUDUWA", "band": "A" }
              ]
            }
          ]
        },
        {
          "name": "MARYLAND",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-MarylandINJ-T1-PTC", "name": "PTC", "band": "A" }
              ]
            },
            {
              "name": "T2 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-MarylandINJ-T2-Ojota", "name": "OJOTA", "band": "A" },
                { "nomenclature": "11-MarylandINJ-T2-GRA", "name": "GRA", "band": "A" }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "ILUPEJU",
      "injections": [
        {
          "name": "ILUPEJU",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-IlupejuINJ-T1-Bhojson", "name": "BHOJSON", "band": "#N/A" },
                { "nomenclature": "11-IlupejuINJ-T1-Rida Plastic", "name": "RIDA", "band": "A" },
                { "nomenclature": "11-IlupejuINJ-T1-ATM", "name": "ATM", "band": "A" }
              ]
            },
            {
              "name": "T4 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-IlupejuINJ-T4-Ikorodu", "name": "IKORODU ROAD", "band": "A" },
                { "nomenclature": "11-IlupejuINJ-T4-Army Cant.", "name": "ARMY CANTONMENT", "band": "B" }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CISCO",
      "injections": [
        {
          "name": "OKE IRA",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-Oke IraINJ-T1-Nob Oluwa", "name": "NOB OLUWA", "band": "C" },
                { "nomenclature": "11-Oke IraINJ-T1-Oke Ira", "name": "OKEIRA", "band": "A" },
                { "nomenclature": "11-Oke IraINJ-T1-Ayo Alabi", "name": "AYO ALABI", "band": "B" }
              ]
            },
            {
              "name": "T2 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-Oke IraINJ-T2-Thomas Salako", "name": "THOMAS SALAKO", "band": "C" },
                { "nomenclature": "11-Oke IraINJ-T2-Kayode", "name": "KAYODE", "band": "A" },
                { "nomenclature": "11-Oke IraINJ-T2-Abiodun Jagun", "name": "ABIODUN JAGUN", "band": "C" }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "NEW OJODU",
      "injections": [
        {
          "name": "OJODU",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-OjoduINJ-T1-Ojodu", "name": "OJODU", "band": "A" },
                { "nomenclature": "11-OjoduINJ-T1-Alagbole", "name": "ALAGBOLE", "band": "B" },
                { "nomenclature": "11-OjoduINJ-T1-King Avenue", "name": "KINGS AVE", "band": "A" }
              ]
            },
            {
              "name": "T2 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-OjoduINJ-T2-Express", "name": "EXPRESS", "band": "A" },
                { "nomenclature": "11-OjoduINJ-T2-River Valley", "name": "RIVER VALLEY", "band": "A" },
                { "nomenclature": "11-OjoduINJ-T2-Yakoyo", "name": "YAKOYO", "band": "B" }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "U STEEL",
      "injections": [
        {
          "name": "Adeniyi Jones",
          "transformers": [
            {
              "name": "T1 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-Adeniyi JonesINJ-T1-Ajao", "name": "AJAO ROAD", "band": "A" },
                { "nomenclature": "11-Adeniyi JonesINJ-T1-Adeniyi Jones", "name": "ADENIYI JONES", "band": "A" },
                { "nomenclature": "11-Adeniyi JonesINJ-T1-Anifowoshe", "name": "ANIFOWOSHE", "band": "A" }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "AGEGE",
      "injections": [
        {
          "name": "AGEGE",
          "transformers": [
            {
              "name": "T3 15MVA",
              "feeders11kV": [
                { "nomenclature": "11-AgegeINJ-T3-Oyemekun", "name": "OYEMEKUN", "band": "B" }
              ]
            }
          ]
        }
      ]
    }
  ]
},
  {
    businessUnit: "ABULE EGBA",
    feeders33kV: [
      {
        name: "NEW IJU",
        injections: [
          {
            name: "IJU",
            transformers: [
              {
                name: "T1 15MVA",
                feeders11kV: [
                  { nomenclature: "11-IjuINJ-T1-Grailand", name: "GRAILAND", band: "B" },
                  { nomenclature: "11-IjuINJ-T1-Ajuwon", name: "AJUWON", band: "A" },
                  { nomenclature: "11-IjuINJ-T1-Galilee", name: "GALILEE", band: "A" },
                  { nomenclature: "11-IjuINJ-T1-Asore", name: "ASORE", band: "C" },
                ]
              },
              {
                name: "T2 15MVA",
                feeders11kV: [
                  { nomenclature: "11-IjuINJ-T2-Ishaga", name: "ISHAGA", band: "C" },
                  { nomenclature: "11-IjuINJ-T2-Agbado 1", name: "AGBADO I", band: "C" },
                  { nomenclature: "11-IjuINJ-T2-Water Works", name: "WATER WORKS", band: "A" },
                ]
              }
            ]
          }
        ]
      },
      {
        name: "YIDI",
        injections: [
          {
            name: "YIDI INJ",
            transformers: [
              {
                name: "T1 15MVA",
                feeders11kV: [
                  { nomenclature: "11-YidiINJ-T1-Osoba", name: "OSOBA", band: "C" },
                  { nomenclature: "11-YidiINJ-T1-Opeilu", name: "OPEILU", band: "D" },
                ]
              }
            ]
          },
          {
            name: "OPE ILU",
            transformers: [
              {
                name: "T1 15MVA",
                feeders11kV: [
                  { nomenclature: "11-Ope IluINJ-T1-Aboro", name: "ABORO", band: "C" },
                  { nomenclature: "11-Ope IluINJ-T1-Ijoko", name: "IJOKO", band: "D" },
                ]
              }
            ]
          }
        ]
      },
      {
        name: "IPAJA EKORO",
        injections: [
          {
            name: "AGEGE INJ",
            transformers: [
              {
                name: "T1 15MVA",
                feeders11kV: [
                  { nomenclature: "11-AgegeINJ-T1-Oko Oba", name: "OKOOBA", band: "B" },
                  { nomenclature: "11-AgegeINJ-T1-Iju Road", name: "IJU RD", band: "C" },
                ]
              }
            ]
          }
        ]
      },
      {
        name: "ABEOKUTA EXP",
        injections: [
          {
            name: "IJAIYE",
            transformers: [
              {
                name: "T1 15MVA",
                feeders11kV: [
                  { nomenclature: "11-Ijaiye OjokoroINJ-T1-Abeokuta Express", name: "ABEOKUTA", band: "C" },
                  { nomenclature: "11-Ijaiye OjokoroINJ-T1-Jankara", name: "JANKARA", band: "B" },
                  { nomenclature: "11-Ijaiye OjokoroINJ-T1-Agbado 2", name: "AGBADO II", band: "C" },
                ]
              }
            ]
          }
        ]
      },
      {
        name: "BERKLEY",
        injections: [
          {
            name: "BERKLEY",
            transformers: [
              {
                name: "T1 15MVA",
                feeders11kV: [
                  { nomenclature: "11-BeckleyINJ-T1-Beckley", name: "BERKLEY", band: "B" },
                  { nomenclature: "11-BeckleyINJ-T1-Agbe road", name: "AGBE RD", band: "B" },
                ]
              }
            ]
          }
        ]
      },
      {
        name: "AMJE",
        injections: [
          {
            name: "YUSUF",
            transformers: [
              { name: "T1 7:5MVA", feeders11kV: [{ nomenclature: "11-YusufINJ-T1-Yusuf", name: "YUSUF", band: "C" }] },
              { name: "T2 15MVA", feeders11kV: [{ nomenclature: "11-YusufINJ-T2-Akera", name: "AKERA", band: "C" }] },
            ]
          }
        ]
      },
      {
        name: "ABULE IROKO",
        injections: [
          {
            name: "ABULE IROKO",
            transformers: [
              {
                name: "T1 15MVA",
                feeders11kV: [
                  { nomenclature: "11-Abule IrokoINJ-T1-Alakuko", name: "ALAKUKO", band: "C" },
                  { nomenclature: "11-Abule IrokoINJ-T1-Abule Iroko", name: "ABULE IROKO", band: "C" },
                  { nomenclature: "11-Abule IrokoINJ-T1-Books", name: "BOOKS", band: "C" },
                ]
              }
            ]
          }
        ]
      },
      {
        name: "LAMBE",
        injections: [
          {
            name: "AKUTE",
            transformers: [
              {
                name: "T1 15MVA",
                feeders11kV: [
                  { nomenclature: "11-AkuteINJ-T1-Ishashi", name: "ISASHI", band: "C" },
                  { nomenclature: "11-AkuteINJ-T1-Oyeyemi", name: "OYEYEMI", band: "C" },
                  { nomenclature: "11-AkuteINJ-T1-Majente", name: "MAJENTE", band: "C" },
                ]
              }
            ]
          },
          {
            name: "LAMBE",
            transformers: [
              {
                name: "T1 15MVA",
                feeders11kV: [
                  { nomenclature: "11-LambeINJ-T1-Olambe", name: "LAMBE", band: "C" },
                  { nomenclature: "11-LambeINJ-T1-Jolasco", name: "JOLASCO", band: "C" },
                  { nomenclature: "11-LambeINJ-T1-Matogun", name: "MATOGUN", band: "C" },
                ]
              }
            ]
          }
        ]
      },
      {
        name: "OLD IJU",
        injections: [
          {
            name: "OBAWOLE",
            transformers: [
              {
                name: "T1 15MVA",
                feeders11kV: [
                  { nomenclature: "11-ObawoleINJ-T1-Shonubi", name: "TOPE SHONUBI", band: "A" },
                  { nomenclature: "11-ObawoleINJ-T1-Youdeowei", name: "ANTHONY YOUDEOWEI", band: "A" },
                  { nomenclature: "11-ObawoleINJ-T1-Rotimi Williams", name: "ROTIMI WILLIAMS", band: "A" },
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    businessUnit: "AKOWONJO",
    feeders33kV: [
      {
        name: "T4 IPAJA",
        injections: [
          {
            name: "ALIMOSHO",
            transformers: [
              {
                name: "T4 15MVA",
                feeders11kV: [
                  { nomenclature: "11-AlimoshoINJ-T4-Akowonjo", name: "AKOWONJO", band: "A" },
                  { nomenclature: "11-AlimoshoINJ-T4-FHA", name: "FHA", band: "A" },
                  { nomenclature: "11-AlimoshoINJ-T4-Oki", name: "OKI", band: "B" },
                ],
              },
              {
                name: "T6 15MVA",
                feeders11kV: [
                  { nomenclature: "11-AlimoshoINJ-T6-Shasha", name: "SHASHA", band: "B" },
                  { nomenclature: "11-AlimoshoINJ-T6-Orelope", name: "ORELOPE", band: "A" },
                ],
              },
              {
                name: "T8 15MVA",
                feeders11kV: [
                  { nomenclature: "11-AlimoshoINJ-T8-Alimosho", name: "ALIMOSHO", band: "A" },
                  { nomenclature: "11-AlimoshoINJ-T8-Okunola", name: "OKUNOLA", band: "A" },
                  { nomenclature: "11-AlimoshoINJ-T8-Wole Omo Osho", name: "WOLE OMOOSHO", band: "A" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "ABESAN",
        injections: [
          {
            name: "ABESAN",
            transformers: [
              {
                name: "T1 15MVA",
                feeders11kV: [
                  { nomenclature: "11-AbesanINJ-T1-Baruwa", name: "BARUWA", band: "B" },
                  { nomenclature: "11-AbesanINJ-T1-Ipaja", name: "IPAJA", band: "A" },
                  { nomenclature: "11-AbesanINJ-T1-Aboru", name: "ABORU", band: "D" },
                ],
              },
              {
                name: "T2 15MVA",
                feeders11kV: [
                  { nomenclature: "11-AbesanINJ-T2-Abesan", name: "ABESAN", band: "B" },
                  { nomenclature: "11-AbesanINJ-T2-Shagari", name: "SHAGARI", band: "A" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "DUNLOP",
        injections: [
          {
            name: "MANGORO",
            transformers: [
              {
                name: "T1 15MVA",
                feeders11kV: [
                  { nomenclature: "11-MongoroINJ-T1-New Dopemu", name: "NEW DOPEMU", band: "A" },
                  { nomenclature: "11-MongoroINJ-T1-Sule", name: "SULE", band: "C" },
                  { nomenclature: "11-MongoroINJ-T1-Capitol", name: "CAPITOL", band: "C" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "ADIYAN",
        injections: [
          {
            name: "GOWON",
            transformers: [
              {
                name: "T1 15MVA",
                feeders11kV: [
                  { nomenclature: "11-New GowonINJ-T1-Unity", name: "UNITY", band: "B" },
                  { nomenclature: "11-New GowonINJ-T1-Kuwait", name: "KUWAIT", band: "B" },
                  { nomenclature: "11-New GowonINJ-T1-Olorunadaba", name: "OLORUN ADABA", band: "A" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "IPAJA EKORO",
        injections: [
          {
            name: "EKORO",
            transformers: [
              {
                name: "T2 15MVA",
                feeders11kV: [
                  { nomenclature: "11-EkoroINJ-T2-Oke Odo", name: "OKE ODO", band: "D" },
                  { nomenclature: "11-EkoroINJ-T2-Agbele", name: "AGBELE", band: "D" },
                  { nomenclature: "11-EkoroINJ-T2-Olota", name: "OLOTA", band: "C" },
                ],
              },
              {
                name: "T1 7.5MVA",
                feeders11kV: [
                  { nomenclature: "11-EkoroINJ-T1-Ekoro", name: "EKORO", band: "C" },
                  { nomenclature: "11-EkoroINJ-T1-Ajasa", name: "AJASA", band: "C" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "ABEOKUTA EXP",
        injections: [
          {
            name: "IJAIYE",
            transformers: [
              {
                name: "T1 15MVA",
                feeders11kV: [
                  { nomenclature: "11-Ijaiye OjokoroINJ-T1-Meiran", name: "MEIRAN", band: "#N/A" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "AIYETORO",
        injections: [
          {
            name: "AIYETORO",
            transformers: [
              {
                name: "T1 15MVA",
                feeders11kV: [
                  { nomenclature: "11-AyetoroINJ-T1-Lafenwa", name: "LAFENWA", band: "A" },
                  { nomenclature: "11-AyetoroINJ-T1-Bada", name: "BADA", band: "B" },
                  { nomenclature: "11-AyetoroINJ-T1-Itele", name: "ITELE", band: "B" },
                ],
              },
            ],
          },
          {
            name: "ALAJA",
            transformers: [
              {
                name: "T1 15MVA",
                feeders11kV: [
                  { nomenclature: "11-AlajaINJ-T1-Fadayomi", name: "FADAYOMI", band: "C" },
                  { nomenclature: "11-AlajaINJ-T1-Koloba", name: "KOLOBA", band: "B" },
                  { nomenclature: "11-AlajaINJ-T1-Megida", name: "MEGIDA", band: "B" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "AYOBO",
        injections: [
          {
            name: "AYOBO",
            transformers: [
              {
                name: "T1 15MVA",
                feeders11kV: [
                  { nomenclature: "11-AyoboINJ-T1-Ayobo", name: "AYOBO", band: "B" },
                  { nomenclature: "11-AyoboINJ-T1-Ikola", name: "IKOLA", band: "A" },
                  { nomenclature: "11-AyoboINJ-T1-Atanla", name: "ATANLA", band: "B" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "AMJE",
        injections: [
          {
            name: "YUSUF",
            transformers: [
              {
                name: "T2 15MVA",
                feeders11kV: [
                  { nomenclature: "11-YusufINJ-T2-Agbefa", name: "AGBEIFA", band: "C" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "SHASHA",
        injections: [
          {
            name: "SHASHA",
            transformers: [
              {
                name: "T1 15MVA",
                feeders11kV: [
                  { nomenclature: "11-ShashaINJ-T1-Coker Estate", name: "COKER", band: "A" },
                  { nomenclature: "11-ShashaINJ-T1-Orisunbare", name: "ORISUNBARE", band: "C" },
                  { nomenclature: "11-ShashaINJ-T1-Oguntade", name: "OGUNTADE", band: "B" },
                  { nomenclature: "11-ShashaINJ-T1-Foursquare", name: "FOURSQUARE", band: "C" },
                  { nomenclature: "11-ShashaINJ-T1-NAF", name: "AIRFORCE", band: "C" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "AGEGE",
        injections: [
          {
            name: "AGEGE",
            transformers: [
              {
                name: "T1 15MVA",
                feeders11kV: [
                  { nomenclature: "11-AgegeINJ-T1-Abattoir", name: "ABATTOIR", band: "C" },
                ],
              },
              {
                name: "T2 15MVA",
                feeders11kV: [
                  { nomenclature: "11-AgegeINJ-T2-Power Line", name: "POWER LINE", band: "C" },
                  { nomenclature: "11-AgegeINJ-T2-Abule Egba", name: "ABULE EGBA", band: "C" },
                  { nomenclature: "11-AgegeINJ-T2-Orile Agege", name: "ORILE ROAD", band: "D" },
                ],
              },
              {
                name: "T3 15MVA",
                feeders11kV: [
                  { nomenclature: "11-AgegeINJ-T3-Pen Cinema", name: "PENCINEMA", band: "C" },
                  { nomenclature: "11-AgegeINJ-T3-Tabon Tabon", name: "TABON TABON", band: "C" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "TOWER ALUMINIUM",
        injections: [
          {
            name: "ADARANIJO",
            transformers: [
              {
                name: "T1 15MVA",
                feeders11kV: [
                  { nomenclature: "11-AdaranijoINJ-T1-NYSC", name: "NYSC", band: "C" },
                  { nomenclature: "11-AdaranijoINJ-T1-Arigbanla", name: "ARIGBANLA", band: "A" },
                  { nomenclature: "11-AdaranijoINJ-T1-Oyewole", name: "OYEWOLE", band: "C" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "ABULE TAYLOR",
        injections: [
          {
            name: "ABULE TAYLOR",
            transformers: [
              {
                name: "T1 15MVA",
                feeders11kV: [
                  { nomenclature: "11-Abule TaylorINJ-T1-Walter Anderm", name: "WALTER ANDERM", band: "C" },
                  { nomenclature: "11-Abule TaylorINJ-T1-Bode Williams", name: "BODE WILLIAMS", band: "A" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "AMIKANLE",
        injections: [
          {
            name: "AMIKANLE",
            transformers: [
              {
                name: "T1 15MVA",
                feeders11kV: [
                  { nomenclature: "11-AmikanleINJ-T1-Isoto", name: "ISOTO", band: "C" },
                  { nomenclature: "11-AmikanleINJ-T1-Ige", name: "IGE", band: "C" },
                  { nomenclature: "11-AmikanleINJ-T1-Aiyetobi", name: "AIYETOBI", band: "D" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

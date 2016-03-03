'use strict';

(function() {

    function ShopsController($scope) {
        this.name = 'ShopsController';

        this.shops = [
            {
                "id": 43,
                "name": "5aSEC",
                "point": {
                    "pk": 118,
                    "x": 723,
                    "y": 213,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 213,
                            "point_a": 118,
                            "point_b": 21,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "43",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_5a-sec.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_5a-sec.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 19,
                "categories": [
                    19
                ],
                "contest_set": [],
                "description": "Ekologiczna pralnia chemiczna. Dzięki zastosowaniu nowoczesnych technologii światowych można wyczyścić każdy rodzaj odzieży w zaledwie 90 minut. Doskonała jakość usług.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:08:16.341921",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 2,
                "name": "ADIDAS",
                "point": {
                    "pk": 68,
                    "x": 811,
                    "y": 331,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 43,
                            "point_a": 68,
                            "point_b": 28,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 45,
                            "point_a": 68,
                            "point_b": 27,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "2",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_adidas.jpg",
                "front_url": "",
                "tags": [],
                "has_icon": false,
                "main_category": 22,
                "categories": [
                    22,
                    27,
                    20
                ],
                "contest_set": [],
                "description": " Ogromny wybór odzieży sportowej damskiej, męskiej, dziecięcej i akcesoriów zawsze w niskich cenach. Profesjonalna obsługa  do Państwa dyspozycji. Serdecznie zapraszamy u nas każdy znajdzie coś dla siebie.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:48:03.910378",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 73,
                "name": "Alior Bank",
                "point": {
                    "pk": 83,
                    "x": 249,
                    "y": 414,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 91,
                            "point_a": 83,
                            "point_b": 47,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "73",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_alior-bank.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_alior_hD7Bs02.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 19,
                "categories": [
                    19
                ],
                "contest_set": [],
                "description": "Placówka Alior Express jest skierowana do klientów indywidualnych, które chcą skorzystać z produktów bankowych o najwyższej jakości. Dostępne w oddziale sa: rachunki osobiste typu ROR, lokaty, pożyczki, karty kredytowe oraz produkty inwestycyjne. Główną zaletą Alior Express jest to, że daje swoim klientom możliwość płacenia comiesięcznych rachunków domowych bez żadnych opłat",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:12:45.031311",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 3,
                "name": "APART",
                "point": {
                    "pk": 122,
                    "x": 749,
                    "y": 276,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 229,
                            "point_a": 122,
                            "point_b": 27,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 231,
                            "point_a": 122,
                            "point_b": 28,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "3",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_apart.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_apart.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 21,
                "categories": [
                    22,
                    21
                ],
                "contest_set": [],
                "description": "Firma APART posiada największą sieć salonów jubilerskich w Polsce. W naszych salonach oferujemy Państwu szeroki wybór biżuterii platynowej, złotej z brylantami, a także złotej i srebrnej oraz zegarki najlepszych światowych marek.\r\nTo właśnie biżuteria firmy APART najlepiej podkreśli urok i klasę każdego stroju. Każdy znajdzie u nas piękny drobiazg dla siebie oraz wyjątkowy prezent dla swoich najbliższych.\r\nwww.apart.pl\r\n",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:27:21.209984",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 38,
                "name": "Apteka Dbam o Zdrowie",
                "point": {
                    "pk": 141,
                    "x": 65,
                    "y": 406,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 299,
                            "point_a": 141,
                            "point_b": 143,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "38",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_apteki.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_apteka.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 26,
                "categories": [
                    26
                ],
                "contest_set": [],
                "description": "7 dni w tygodniu/24h",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:44:17.467920",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 65,
                "name": "Auchan",
                "point": {
                    "pk": 53,
                    "x": 541,
                    "y": 124,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 3,
                            "point_a": 53,
                            "point_b": 15,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 5,
                            "point_a": 53,
                            "point_b": 14,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "65",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_auchan.jpg",
                "front_url": "",
                "tags": [],
                "has_icon": false,
                "main_category": 23,
                "categories": [
                    23
                ],
                "contest_set": [],
                "description": "Opis wkrótce.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:37:36.326592",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 80,
                "name": "Bankomat BZ WBK",
                "point": {
                    "pk": 135,
                    "x": 226,
                    "y": 412,
                    "level_id": 0,
                    "type": 20,
                    "edges_a": [
                        {
                            "pk": 285,
                            "point_a": 135,
                            "point_b": 130,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 287,
                            "point_a": 135,
                            "point_b": 45,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "80",
                "email": null,
                "www": null,
                "phone": null,
                "logo_url": "http://pasazlodz.techcave.pl/media/logos/80.jpg",
                "front_url": "",
                "tags": [],
                "has_icon": false,
                "main_category": 9,
                "categories": [],
                "contest_set": [],
                "description": "Bankomat BZ WBK",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-10T12:13:17.751606",
                "external_id": null,
                "level": "0",
                "local_nr": null,
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 79,
                "name": "Bankomat Euronet",
                "point": {
                    "pk": 177,
                    "x": 492,
                    "y": 267,
                    "level_id": 0,
                    "type": 20,
                    "edges_a": [
                        {
                            "pk": 585,
                            "point_a": 177,
                            "point_b": 131,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 587,
                            "point_a": 177,
                            "point_b": 132,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "79",
                "email": null,
                "www": null,
                "phone": null,
                "logo_url": "http://pasazlodz.techcave.pl/media/logos/79.jpg",
                "front_url": "",
                "tags": [],
                "has_icon": false,
                "main_category": 9,
                "categories": [],
                "contest_set": [],
                "description": "Bankomat Euronet",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-10T12:13:17.751606",
                "external_id": null,
                "level": "0",
                "local_nr": null,
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 81,
                "name": "Bankomat mBank",
                "point": {
                    "pk": 137,
                    "x": 787,
                    "y": 305,
                    "level_id": 0,
                    "type": 20,
                    "edges_a": [
                        {
                            "pk": 301,
                            "point_a": 137,
                            "point_b": 28,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 303,
                            "point_a": 137,
                            "point_b": 27,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "81",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_mbank.jpg",
                "front_url": "",
                "tags": [],
                "has_icon": false,
                "main_category": 19,
                "categories": [
                    19
                ],
                "contest_set": [],
                "description": "Bankomat mBank",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:12:33.189526",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 83,
                "name": "Bankomat PKO BP",
                "point": {
                    "pk": 134,
                    "x": 177,
                    "y": 321,
                    "level_id": 0,
                    "type": 20,
                    "edges_a": [
                        {
                            "pk": 275,
                            "point_a": 134,
                            "point_b": 48,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 277,
                            "point_a": 134,
                            "point_b": 49,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "83",
                "email": null,
                "www": null,
                "phone": null,
                "logo_url": "http://pasazlodz.techcave.pl/media/logos/83.jpg",
                "front_url": "",
                "tags": [],
                "has_icon": false,
                "main_category": 9,
                "categories": [],
                "contest_set": [],
                "description": "Bankomat PKO BP",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-10T12:13:17.751606",
                "external_id": null,
                "level": "0",
                "local_nr": null,
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 116,
                "name": "Bolid Formuły 1",
                "point": {
                    "pk": 168,
                    "x": 419,
                    "y": 341,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 531,
                            "point_a": 168,
                            "point_b": 40,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 533,
                            "point_a": 168,
                            "point_b": 41,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "116",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/logos/116.jpg",
                "front_url": "",
                "tags": [],
                "has_icon": false,
                "main_category": 20,
                "categories": [
                    20
                ],
                "contest_set": [],
                "description": "",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:30:44.898597",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 84,
                "name": "Buty na czasie",
                "point": {
                    "pk": 158,
                    "x": 666,
                    "y": 363,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 507,
                            "point_a": 158,
                            "point_b": 32,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 509,
                            "point_a": 158,
                            "point_b": 31,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "84",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_na-czasie.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_na_czas.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 21,
                "categories": [
                    22,
                    21
                ],
                "contest_set": [],
                "description": "Na Czasie to nowoczesny sklep z obuwiem na każdą kieszeń. Oferujemy szeroki wybór butów damskich, męskich i dziecięcych w bardzo atrakcyjnych cenach. Nasze kolekcje oparte są na najnowszych trendach i wysokiej klasy wzornictwie. W naszej ofercie znajdziecie Państwo ponad 1000 modeli obuwia. Zapraszamy na zakupy do nowego salonu sprzedaży w Pasażu Łódzkim!",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:25:25.987722",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 12,
                "name": "CCC",
                "point": {
                    "pk": 62,
                    "x": 824,
                    "y": 120,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 31,
                            "point_a": 62,
                            "point_b": 23,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "12",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_ccc.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_ccc.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 21,
                "categories": [
                    22,
                    21,
                    20
                ],
                "contest_set": [],
                "description": "Salony CCC to jedne z najbardziej rozpoznawalnych salonów obuwniczych w kraju. Sprzedaż w CCC oparta jest o zasadę „house of brands”, polegającą na sprzedaży wielu marek obuwia pod jednym dachem.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:33:40.571576",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 13,
                "name": "COCCODRILLO",
                "point": {
                    "pk": 93,
                    "x": 248,
                    "y": 219,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 127,
                            "point_a": 93,
                            "point_b": 5,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 129,
                            "point_a": 93,
                            "point_b": 6,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "13",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_coccodrillo.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_coccodrillo.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 20,
                "categories": [
                    20
                ],
                "contest_set": [],
                "description": "Mamy bardzo szeroką ofertę odzieży i obuwia dla dzieci i młodzieży do lat 14, nowoczesne wzornictwo, unikalne projekty, najwyższa jakość materiałów i wykonania. ",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:29:41.780185",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 61,
                "name": "CUKIERNIA SOWA",
                "point": {
                    "pk": 127,
                    "x": 545,
                    "y": 293,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 251,
                            "point_a": 127,
                            "point_b": 35,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 249,
                            "point_a": 127,
                            "point_b": 36,
                            "b_to_a_relation": 0,
                            "length": 5,
                            "direction": 0
                        },
                        {
                            "pk": 263,
                            "point_a": 127,
                            "point_b": 131,
                            "b_to_a_relation": 0,
                            "length": 5,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "61",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_cukiernia-sowa.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_sowa.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 25,
                "categories": [
                    25
                ],
                "contest_set": [],
                "description": "",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:42:23.584607",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 15,
                "name": "DECATHLON",
                "point": {
                    "pk": 65,
                    "x": 937,
                    "y": 370,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 481,
                            "point_a": 65,
                            "point_b": 155,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "15",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_decathlon.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_decathlon.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 20,
                "categories": [
                    27,
                    20
                ],
                "contest_set": [],
                "description": "Sklep sportowy, oferujący szeroki wybór odzieży oraz sprzętu, zarówno dla osób początkujących jak i bardziej zaawansowanych. 65 sportów pod jednym dachem. Możliwość testowania sprzętu umożliwi każdemu z naszych klientów odkrycie nowych dyscyplin.\r\n",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:46:57.244907",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 17,
                "name": "DIVERSE",
                "point": {
                    "pk": 69,
                    "x": 779,
                    "y": 357,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 47,
                            "point_a": 69,
                            "point_b": 29,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 438,
                            "point_a": 69,
                            "point_b": 144,
                            "b_to_a_relation": 0,
                            "length": 5,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "17",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_diverse.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_diverse.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 21,
                "categories": [
                    22,
                    21
                ],
                "contest_set": [],
                "description": "W 1993 roku, gdy marka Diverse skromnie stawiała swoje pierwsze kroki w świecie mody, jej główną inspiracją był Nowy Jork i jego kultura klubowa oraz zamiłowanie do sportów ekstremalnych. Diverse, jak sama nazwa wskazuje, to marka dla ludzi poszukujących różnorodności, a strój tych osób odzwierciedla takie cechy jak aktywne podejście do życia, spontaniczność, ciekawość, chęć do odkrywania nieznanych miejsc i otwartość na nowe idee. Silny charakter, pewność siebie, ogromna energia i świeżość, to cechy, które definiują unikalną osobowość Diverse. Marki dojrzewają wraz ze swoimi klientami i Diverse nie jest w tej kwestii wyjątkiem. Szybko przeistoczył się w markę lifestyle’ową, odpowiadającą coraz szerszym potrzebom swoich oddanych odbiorców. Mimo tego, że sporty ekstremalne na stałe wpisały się w jego DNA, Diverse oferuje teraz swoim klientkom znacznie więcej niż kiedykolwiek wcześniej. Osobowość marki Diverse została poszerzona o łagodniejszą, bardziej modową i kobiecą stronę. Z siecią ponad 160 sklepów oraz z jednym z najlepszych na rynku sklepów internetowych Diverse jeszcze nigdy nie był tak dobrze przygotowany na spełnianie potrzeb swoich odbiorców.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:23:17.168652",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 104,
                "name": "E-SMOKING WOLRD",
                "point": {
                    "pk": 57,
                    "x": 690,
                    "y": 132,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 17,
                            "point_a": 57,
                            "point_b": 20,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 19,
                            "point_a": 57,
                            "point_b": 21,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "104",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/logos/104.jpg",
                "front_url": "",
                "tags": [],
                "has_icon": false,
                "main_category": 19,
                "categories": [
                    19
                ],
                "contest_set": [],
                "description": "Tel.: 730-087-279",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:09:29.528716",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 45,
                "name": "EUROBANK",
                "point": {
                    "pk": 99,
                    "x": 399,
                    "y": 217,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 147,
                            "point_a": 99,
                            "point_b": 10,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 149,
                            "point_a": 99,
                            "point_b": 11,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "45",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_eurobank.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_eurobank.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 19,
                "categories": [
                    19
                ],
                "contest_set": [],
                "description": "",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:12:58.545670",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 18,
                "name": "EXTREME INTIMO",
                "point": {
                    "pk": 87,
                    "x": 131,
                    "y": 263,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 107,
                            "point_a": 87,
                            "point_b": 50,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 109,
                            "point_a": 87,
                            "point_b": 51,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "18",
                "email": null,
                "www": null,
                "phone": null,
                "logo_url": "http://pasazlodz.techcave.pl/media/logos/18.jpg",
                "front_url": "",
                "tags": [],
                "has_icon": false,
                "main_category": 9,
                "categories": [],
                "contest_set": [],
                "description": "",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-10T12:13:17.751606",
                "external_id": null,
                "level": "0",
                "local_nr": null,
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 74,
                "name": "FEU VERT",
                "point": {
                    "pk": 90,
                    "x": 46,
                    "y": 457,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 420,
                            "point_a": 90,
                            "point_b": 143,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "74",
                "email": null,
                "www": null,
                "phone": null,
                "logo_url": "http://pasazlodz.techcave.pl/media/logos/74.jpg",
                "front_url": "",
                "tags": [],
                "has_icon": false,
                "main_category": 9,
                "categories": [],
                "contest_set": [],
                "description": "Auto Centrum Feu Vert: specjalistyczny sklep motoryzacyjny połączony z nowoczesnym warsztatem.\n•\tkompleksowa obsługa wszystkich marek samochodów\n•\tmożliwość kompleksowego wyposażenia samochodu i zakupu dowolnej części zamiennej \n•\tszybki montaż zakupionych części \n•\tusługi oparte na zaleceniach producentów\n•\tnajwyższej jakości sprzęt i materiały eksploatacyjne\n•\togólnopolska gwarancja wykonanych usług\n",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-10T12:13:17.751606",
                "external_id": null,
                "level": "0",
                "local_nr": null,
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 63,
                "name": "Foodmax",
                "point": {
                    "pk": 77,
                    "x": 464,
                    "y": 366,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 71,
                            "point_a": 77,
                            "point_b": 38,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 73,
                            "point_a": 77,
                            "point_b": 39,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "63",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_foodmax.jpg",
                "front_url": "",
                "tags": [],
                "has_icon": false,
                "main_category": 25,
                "categories": [
                    25
                ],
                "contest_set": [],
                "description": "Twoja ulubiona restauracja z pysznym jedzeniem na wagę. Skomponuj swój posiłek i zapłać dokładnie za tyle, ile nałożyłeś.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:42:54.653985",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 118,
                "name": "FOTO A.A.",
                "point": {
                    "pk": 167,
                    "x": 318,
                    "y": 358,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 535,
                            "point_a": 167,
                            "point_b": 44,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 537,
                            "point_a": 167,
                            "point_b": 43,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "118",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_foto-a-a-bielski.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_foto.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 19,
                "categories": [
                    19,
                    24
                ],
                "contest_set": [],
                "description": "Foto A.A. Bielski rok zał. 1903: Pełen zakres usług fotograficznych i gadżetów okolicznościowych: - zdjęcia do dokumentów; - odbitki we wszystkich formatach; archiwizacje na nośniki cyfrowe zdjęć, filmów, slajdów, negatywów; - foto obrazy na płótnie, powiększenia wielkoformatowe",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:41:22.328166",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 19,
                "name": "H&M",
                "point": {
                    "pk": 85,
                    "x": 156,
                    "y": 331,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 99,
                            "point_a": 85,
                            "point_b": 48,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 101,
                            "point_a": 85,
                            "point_b": 49,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "19",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_hm.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_hm.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 21,
                "categories": [
                    22,
                    21,
                    20
                ],
                "contest_set": [],
                "description": "H&M (Hennes & Mauritz AB) powstał w 1947 roku w Szwecji. Od tego czasu zdobył uznanie w 14 krajach na świecie. W swoim salonie H&M planuje udowodnić również polskim klientom, że dewizą firmy jest „moda i jakość za najlepszą cenę”. ",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:32:01.897845",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 46,
                "name": "H . SKRZYDLEWSKA",
                "point": {
                    "pk": 89,
                    "x": 130,
                    "y": 207,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 115,
                            "point_a": 89,
                            "point_b": 52,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 117,
                            "point_a": 89,
                            "point_b": 3,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "46",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_kwiaciarnia.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_kwiaciarnia.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 19,
                "categories": [
                    19
                ],
                "contest_set": [],
                "description": "Sieć kwiaciarni H. Skrzydlewska to jedna z największych i najbardziej rozpoznawalnych firm na terenie Łodzi.  Należymy do międzynarodowej sieci Interflora skupiającej najlepsze firmy kwiaciarskie z całego świata. Zapewniamy kompleksowy serwis kwiatowy wszelkich uroczystości i spotkań - dostarczamy każdą ilość kwiatów - odległość nie stanowi dla nas żadnych barier. W swoim asortymencie posiadamy bardzo duży wybór kwiatów pochodzących z różnych stron świata. ",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:09:44.230057",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 105,
                "name": "IGLOO CAFE",
                "point": {
                    "pk": 60,
                    "x": 736,
                    "y": 135,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 25,
                            "point_a": 60,
                            "point_b": 21,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 27,
                            "point_a": 60,
                            "point_b": 22,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "105",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_igloo-cafe.jpg",
                "front_url": "",
                "tags": [],
                "has_icon": false,
                "main_category": 25,
                "categories": [
                    25
                ],
                "contest_set": [],
                "description": "Tel.: 785 656 049",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:42:39.262247",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 102,
                "name": "INGLOT",
                "point": {
                    "pk": 169,
                    "x": 504,
                    "y": 230,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [],
                    "is_heavy_weight": false
                },
                "locale_id": "102",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_inglot.jpg",
                "front_url": "",
                "tags": [],
                "has_icon": false,
                "main_category": 26,
                "categories": [
                    26
                ],
                "contest_set": [],
                "description": "Kosmetyki kolorowe i pielęgnacyjne.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:45:21.006689",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 47,
                "name": "IN MEDIO",
                "point": {
                    "pk": 84,
                    "x": 171,
                    "y": 367,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 95,
                            "point_a": 84,
                            "point_b": 47,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 97,
                            "point_a": 84,
                            "point_b": 48,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 444,
                            "point_a": 84,
                            "point_b": 145,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "47",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_inmmedio.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_inmedio.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 24,
                "categories": [
                    24
                ],
                "contest_set": [],
                "description": "Inmedio - liczące obecnie ponad 400 sklepów prasowych w Polsce - jest siecią dynamicznie rozwijaną na terenie środkowo-wschodniej Europy. Sklepy Inmedio powstają przede wszystkim w galeriach handlowych dużych i  średnich miast oraz w ich kluczowych punktach. Największe sklepy mają w swojej ofercie, oprócz prasy, książki i artykuły multimedialne. Wyróżniają się nowoczesnym wystrojem wnętrz, wysposażeniem oraz układem prasy ułatwiającym klientowi dotarcie do interesujących go tytułów. Są to atuty, które przyciągają czytelnika i pomimo spadkowej tendencji sprzedaży książek i prasy, sklepy Inmedio mają się dobrze. ",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:40:08.486742",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 86,
                "name": "Jubiler Domańscy",
                "point": {
                    "pk": 109,
                    "x": 225,
                    "y": 313,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 183,
                            "point_a": 109,
                            "point_b": 47,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 185,
                            "point_a": 109,
                            "point_b": 48,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 446,
                            "point_a": 109,
                            "point_b": 145,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "86",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_domanscy.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_domanscy.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 21,
                "categories": [
                    22,
                    21
                ],
                "contest_set": [],
                "description": " Firma Jubilerska Domańscy działa na rynku łódzkim od 1980 roku. Nasza historia zaczęła się od warsztatu mieszczącego się przy ulicy Przybyszewskiego. Obecnie posiadamy trzy punkty sprzedaży oraz pracownię.\r\nTradycja, doświadczenie i otwartość na potrzeby Naszych Klientów czynią nas profesjonalistą w branży jubilerskiej.\r\nPosiadamy pełną ofertę srebra i złota, biżuterii modowej oraz największy wybór obrączek. Te ostatnie wykonujemy również ze złota dostarczonego przez Klienta. Skupujemy złoto. Przerabiamy i naprawiamy biżuterię oraz dajemy 100% gwarancji najniższej ceny. Proszę nas sprawdzić. Zapraszamy.\r\n",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:27:44.744232",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 122,
                "name": "Kantor Exchange Group",
                "point": {
                    "pk": 163,
                    "x": 166,
                    "y": 214,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 551,
                            "point_a": 163,
                            "point_b": 52,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 553,
                            "point_a": 163,
                            "point_b": 51,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "122",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/logos/122.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_kantor.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 19,
                "categories": [
                    19
                ],
                "contest_set": [],
                "description": "Szeroki zakres walut oraz złota inwestycyjnego, skup złota.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:08:28.909105",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 85,
                "name": "KARI",
                "point": {
                    "pk": 88,
                    "x": 130,
                    "y": 238,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 111,
                            "point_a": 88,
                            "point_b": 51,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 113,
                            "point_a": 88,
                            "point_b": 52,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "85",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_kari.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_kari.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 21,
                "categories": [
                    22,
                    21,
                    20
                ],
                "contest_set": [],
                "description": "Kari to oferta dla kobiet i mężczyzn: buty w najmodniejszych fasonach sezonu. Modne dodatki m.in.. Biżuteria, szale, paski oraz torebki zainspirują do zabawy modą.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:33:51.866230",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 22,
                "name": "KASTOR",
                "point": {
                    "pk": 79,
                    "x": 412,
                    "y": 374,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 77,
                            "point_a": 79,
                            "point_b": 41,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 394,
                            "point_a": 79,
                            "point_b": 40,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "22",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_kastor.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_kastor.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 22,
                "categories": [
                    22
                ],
                "contest_set": [],
                "description": "KASTOR S.A. to producent koszul męskich i konfekcji damskiej. Koszule męskie KASTOR kierowane są do Panów ceniących jakość, wygodę, komfort użytkowania oraz łatwość pielęgnacji. Konfekcja damska SENSO skierowana jest do Pań ceniących elegancję, ponadczasową klasykę oraz wrażliwych na modę.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:23:49.228774",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 62,
                "name": "KRAKOWSKI KREDENS",
                "point": {
                    "pk": 112,
                    "x": 553,
                    "y": 216,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 193,
                            "point_a": 112,
                            "point_b": 15,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 195,
                            "point_a": 112,
                            "point_b": 16,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 584,
                            "point_a": 112,
                            "point_b": 176,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "62",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_kredens.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_krakowski.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 23,
                "categories": [
                    23
                ],
                "contest_set": [],
                "description": "Krakowski Kredens - produkty spożywcze najwyższej jakości. W naszej ofercie: Przetwory  Mięsne, Warzywne i Owocowe, Makarony, Musztardy, Miody, Syropy, Herbaty, Kawy, Słodycze, Alkohole.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:37:49.542743",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 9,
                "name": "LAID BACK",
                "point": {
                    "pk": 74,
                    "x": 614,
                    "y": 363,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 61,
                            "point_a": 74,
                            "point_b": 33,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 63,
                            "point_a": 74,
                            "point_b": 34,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "9",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_laidbak.jpg",
                "front_url": "",
                "tags": [],
                "has_icon": false,
                "main_category": 22,
                "categories": [
                    22
                ],
                "contest_set": [],
                "description": "Odzież męska.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:24:07.448193",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 111,
                "name": "LaserStyl",
                "point": {
                    "pk": 171,
                    "x": 757,
                    "y": 328,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 523,
                            "point_a": 171,
                            "point_b": 29,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 525,
                            "point_a": 171,
                            "point_b": 28,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "111",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_laser-styl.jpg",
                "front_url": "",
                "tags": [],
                "has_icon": false,
                "main_category": 24,
                "categories": [
                    24
                ],
                "contest_set": [],
                "description": "sztuka grawerowania laserem Pamiątki okolicznościowe - dedykowanie i personalizacja.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:40:21.621994",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 69,
                "name": "MARILYN",
                "point": {
                    "pk": 97,
                    "x": 349,
                    "y": 217,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 139,
                            "point_a": 97,
                            "point_b": 9,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 141,
                            "point_a": 97,
                            "point_b": 8,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "69",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_marilyn.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_marilyn.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 21,
                "categories": [
                    21
                ],
                "contest_set": [],
                "description": "Firma Marilyn oferuje luksusowe wyroby pończosznicze najnowszej generacji. W ekskluzywnej kolekcji firmy znajduje się kilkanaście rodzajów rajstop, m.in. klasyczne, relaksująco-zdrowotne, wyszczuplająco-modelujące, dziecięce, a także wiele modeli skarpetek, podkolanówek, itp. Bogata kolorystyka i zróżnicowana grubość wyrobów pozwolą bez problemu dopasować je do każdej kreacji dla kobiet o różnych upodobaniach, potrzebach i temperamencie. Dzięki nowoczesnej i rygorystycznej kontroli jakości wyroby Marilyn stanowią produkt najwyższej klasy. Uzupełnieniem produktów pończoszniczych jest oferta damskiej bielizny.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:15:56.170989",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 120,
                "name": "Market Ubezpieczeń",
                "point": {
                    "pk": 165,
                    "x": 177,
                    "y": 295,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 543,
                            "point_a": 165,
                            "point_b": 50,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 545,
                            "point_a": 165,
                            "point_b": 49,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "120",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_market-ubezpieczen.jpg",
                "front_url": "",
                "tags": [],
                "has_icon": false,
                "main_category": 19,
                "categories": [
                    19
                ],
                "contest_set": [],
                "description": "Market Ubezpieczeń to multiagencja ubezpieczeniowa. Mamy w ofercie 16 towarzystw, w jednym miejscu macie Państwo możliwość sprawdzenia najtańszej oferty poprzez porównanie składki OC, porównanie składki AC, porównanie ubezpieczeń pozostałych.\r\nSpecjalizujemy się w ubezpieczeniach samochodów OC, AC i NNW, Assistance, ubezpieczeniach szyb pojazdów i ubezpieczeniach bagażu. Market Ubezpieczeń jest partnerem największych towarzystw ubezpieczeniowych: MTU, Compensa, Signal Iduna, PZU, HDI, Interrisk, AVIVA, Hestia, Generali, Allianz, oraz wielu innych. Nasi doradcy przeprowadzą dla Państwa symulację wartości składki na podstawie której sami Państwo wybiorą towarzystwo ubezpieczeniowe.\r\nW naszej ofercie znajdą Państwo również Otwarte Fundusze Emerytalne (Aegon, Axa, Generali, Amplico, Warta) i Fundusze Inwestycyjne (Aegon, Axa, Generali, Ing, Amplico, Skandia).",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:09:59.867215",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 48,
                "name": "MATRAS",
                "point": {
                    "pk": 58,
                    "x": 704,
                    "y": 93,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 21,
                            "point_a": 58,
                            "point_b": 21,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "48",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_matras.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_matras.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 24,
                "categories": [
                    24
                ],
                "contest_set": [],
                "description": "Matras jest liderem dystrybucji książek na polskim rynku. W księgarniach na terenie Polski Matras oferuje ponad 130.000 tytułów książek i kilka milionów egzemplarzy od literatury pięknej poprzez biografie po książki dla dzieci. Oferta sieci jest skierowana do czytelników o różnych zainteresowaniach. Czytelnicy znajdą u nas nie tylko bestsellery i nowości, ale także pozycje niszowe i poszukiwane przez koneserów.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:40:40.625461",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 24,
                "name": "MIDORI",
                "point": {
                    "pk": 78,
                    "x": 437,
                    "y": 371,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 75,
                            "point_a": 78,
                            "point_b": 40,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 392,
                            "point_a": 78,
                            "point_b": 39,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "24",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_midori.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_midori.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 20,
                "categories": [
                    20
                ],
                "contest_set": [],
                "description": "Sklep Midori oferuje elegancką oraz codzienną odzież damską. Głównym założeniem marki jest tworzenie odzieży dobrej jakości, eleganckiej, perfekcyjnie wykończonej jednak dostępnej w umiarkowanych cenach. Oferowane kolekcje są klasycznie proste, funkcjonalne, zgodne z obowiązującymi trendami. Sklep oferuje również ubranka dziecięce hiszpańskiej firmy Mayoral. Odzież tej firmy charakteryzuje się oryginalnym wzornictwem, świeżą, soczystą kolorystyką, oraz dużą dbałością o jakość i detale. Mayoral jest marką znaną, lubianą oraz docenianą na całym świecie. Zapraszamy do odwiedzenia stron internetowych obydwu marek: www.midori.pl oraz www.mayoral.com",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:29:57.560160",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 76,
                "name": "MOHITO",
                "point": {
                    "pk": 80,
                    "x": 363,
                    "y": 382,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 79,
                            "point_a": 80,
                            "point_b": 42,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 81,
                            "point_a": 80,
                            "point_b": 43,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "76",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_mohito.jpg",
                "front_url": "",
                "tags": [],
                "has_icon": false,
                "main_category": 21,
                "categories": [
                    21
                ],
                "contest_set": [],
                "description": "Kolekcje MOHITO, zawsze zgodne ze światowymi trendami mody, łamią stereotypy typowego ubioru do pracy. Stworzone są, by zdobić, uatrakcyjniać, podkreślać kobiecość i przeciwstawiać się życiowej rutynie.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:16:08.897551",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 44,
                "name": "Multi usługi",
                "point": {
                    "pk": 115,
                    "x": 630,
                    "y": 216,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 203,
                            "point_a": 115,
                            "point_b": 18,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "44",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_multiuslugi.jpg",
                "front_url": "",
                "tags": [],
                "has_icon": false,
                "main_category": 9,
                "categories": [],
                "contest_set": [],
                "description": "Dorabianie kluczy, naprawa obuwia, wyrób pieczątek i wizytówek, ksero, druk.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-17T16:39:57.316972",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 107,
                "name": "NC+",
                "point": {
                    "pk": 159,
                    "x": 794,
                    "y": 185,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 515,
                            "point_a": 159,
                            "point_b": 23,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 517,
                            "point_a": 159,
                            "point_b": 24,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "107",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/logos/107.jpg",
                "front_url": "",
                "tags": [],
                "has_icon": false,
                "main_category": 19,
                "categories": [
                    19
                ],
                "contest_set": [],
                "description": "Autoryzowany punkt sprzedaży telewizji nowej generacji NC+. Uzyskasz u nas informacje o aktualnych promocjach, podpiszesz umowę, wymienisz dekoder lub osprzęt. Przedłużysz umowę z Cyfrą + lub Telewizją N. Możesz nabyć zestaw antenowy oraz zamówić wykonanie instalacji. Oferujemy zakup lub doładowanie telewizji na kartę.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:10:15.134088",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 153,
                "name": "NEOFLAM",
                "point": {
                    "pk": 178,
                    "x": 259,
                    "y": 376,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 589,
                            "point_a": 178,
                            "point_b": 45,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 591,
                            "point_a": 178,
                            "point_b": 130,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "153",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_neoflam.jpg",
                "front_url": "",
                "tags": [],
                "has_icon": false,
                "main_category": 9,
                "categories": [],
                "contest_set": [],
                "description": "",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-17T16:40:04.436258",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 35,
                "name": "New York Hot Dog",
                "point": {
                    "pk": 126,
                    "x": 594,
                    "y": 293,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 245,
                            "point_a": 126,
                            "point_b": 34,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 247,
                            "point_a": 126,
                            "point_b": 35,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "35",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_hot-dog_XqwqLsW.jpg",
                "front_url": "",
                "tags": [],
                "has_icon": false,
                "main_category": 25,
                "categories": [
                    25
                ],
                "contest_set": [],
                "description": "",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:43:09.822180",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 70,
                "name": "NIKE",
                "point": {
                    "pk": 86,
                    "x": 137,
                    "y": 292,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 103,
                            "point_a": 86,
                            "point_b": 50,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 105,
                            "point_a": 86,
                            "point_b": 49,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "70",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_nike-factory-store.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_nike.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 22,
                "categories": [
                    22,
                    27,
                    20
                ],
                "contest_set": [],
                "description": "„Inspiruje nas 35 lat biegania” – to hasło promujące markę producenta odzieży i obuwia sportowego dla ludzi aktywnych oraz sportowców – Nike. Nike to specjalistyczne buty, które zapewnią amortyzację, stabilizacją podczas biegu i ochronę przed urazami. W ofercie sklepu sportowego buty damskie i męskie, odzież damska i męska, kurtki, plecaki oraz akcesoria.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:47:11.338714",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 103,
                "name": "OPI - Nail Bar",
                "point": {
                    "pk": 175,
                    "x": 569,
                    "y": 180,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 573,
                            "point_a": 175,
                            "point_b": 15,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 575,
                            "point_a": 175,
                            "point_b": 16,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 577,
                            "point_a": 175,
                            "point_b": 176,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "103",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_nailbar.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_nail-bar.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 26,
                "categories": [
                    26
                ],
                "contest_set": [],
                "description": "Tel.: 504-940-446",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:45:41.437800",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 50,
                "name": "ORANGE",
                "point": {
                    "pk": 119,
                    "x": 744,
                    "y": 209,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 215,
                            "point_a": 119,
                            "point_b": 22,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "50",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_orange.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_orange.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 19,
                "categories": [
                    19
                ],
                "contest_set": [],
                "description": "Orange kieruje swoją ofertę zarówno do klientów indywidualnych jak i biznesowych. W salonie można podpisać umowę dotyczącą telefonu stacjonarnego, komórkowego, internetu czy telewizji oraz opłacić rachunki. W sprzedaży nie tylko znaleźć można telefony stacjonarne i komórkowe, ale także zestaw akcesoriów.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:10:27.061488",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 51,
                "name": "PAUL DOBRZYCKI HAIR DESIGN",
                "point": {
                    "pk": 100,
                    "x": 422,
                    "y": 219,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 151,
                            "point_a": 100,
                            "point_b": 11,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "51",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_paul-dobrzycki.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_fruzjer.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 26,
                "categories": [
                    26
                ],
                "contest_set": [],
                "description": "Oferujemy szeroki zakres nowatorskich usług fryzjerskich: strzyżenia nowoczesne, klasyczne i awangardowe, wszystkie rodzaje i techniki koloryzacji, zabiegi Spa regenerujące i odbudowujące włosy. Ponad to zapraszamy na makijaż, manicure, pedicure, hennę i relaksujące zabiegi Spa na dłonie i stopy oraz przedłużanie paznokci metodą \"Acrgel\" - porcelana i \"Fieberglas\" - paska jedwabiu.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:45:57.156097",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 112,
                "name": "Perfumy",
                "point": {
                    "pk": 170,
                    "x": 734,
                    "y": 357,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 527,
                            "point_a": 170,
                            "point_b": 150,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 529,
                            "point_a": 170,
                            "point_b": 156,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "112",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "",
                "front_url": "",
                "tags": [],
                "has_icon": false,
                "main_category": 24,
                "categories": [
                    24
                ],
                "contest_set": [],
                "description": "Stoisko z perfumami.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:40:53.650516",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 71,
                "name": "PINI CAFE & VINE",
                "point": {
                    "pk": 71,
                    "x": 687,
                    "y": 364,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 53,
                            "point_a": 71,
                            "point_b": 31,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 55,
                            "point_a": 71,
                            "point_b": 32,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "71",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_pini.jpg",
                "front_url": "",
                "tags": [],
                "has_icon": false,
                "main_category": 25,
                "categories": [
                    25
                ],
                "contest_set": [],
                "description": "PINI CAFE & VINE",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:43:25.440852",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 53,
                "name": "PLAY",
                "point": {
                    "pk": 96,
                    "x": 323,
                    "y": 215,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 137,
                            "point_a": 96,
                            "point_b": 8,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "53",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/logos/53.jpg",
                "front_url": "",
                "tags": [],
                "has_icon": false,
                "main_category": 19,
                "categories": [
                    19
                ],
                "contest_set": [],
                "description": "SALON PLAY OFERUJE PEŁEN ZAKRES OBSŁUGI KLIENTÓW INDYWIDUALNYCH I BIZNESOWYCH W OBRĘBIE SPRZEDAŻY USŁUG ABONAMENTOWYCH , MOBILNEGO DOSTĘPU DO INTERNETU, OFERTY NA KARTĘ, MIX, TELEFONU STACJONARNEGO ORAZ TELEWIZJI N. W OFERCIE DUŻY WYBÓR NAJNOWSZYCH MULTIMEDIALNYCH TELEFONÓW, SMARTFONÓW.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:10:40.282925",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 52,
                "name": "PLUS GSM",
                "point": {
                    "pk": 117,
                    "x": 699,
                    "y": 213,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 209,
                            "point_a": 117,
                            "point_b": 20,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 211,
                            "point_a": 117,
                            "point_b": 21,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "52",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_plus.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_plus.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 19,
                "categories": [
                    19
                ],
                "contest_set": [],
                "description": "Punkt oferuje telefony komórkowe na abonament, na kartę Mix, dostęp do internetu iPlus. W ofercie znajdują się zestawy startowe Simplus, Sami Swoi, 36i6 oraz telekarty. W punkcie można oddać telefon do naprawy gwarancyjnej. Służymy fachowym doradztwem, pomagamy rozwiązywać problemy. Sprowadzamy telefony na indywidualne zamówienia.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:11:00.365420",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 100,
                "name": "Poczta Polska",
                "point": {
                    "pk": 162,
                    "x": 227,
                    "y": 179,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 555,
                            "point_a": 162,
                            "point_b": 4,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 557,
                            "point_a": 162,
                            "point_b": 5,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "100",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_poczta-polska.jpg",
                "front_url": "",
                "tags": [],
                "has_icon": false,
                "main_category": 19,
                "categories": [
                    19
                ],
                "contest_set": [],
                "description": "Opis wkrótce.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:11:10.398389",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 87,
                "name": "Pretty Girl",
                "point": {
                    "pk": 104,
                    "x": 471,
                    "y": 290,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 165,
                            "point_a": 104,
                            "point_b": 39,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 163,
                            "point_a": 104,
                            "point_b": 38,
                            "b_to_a_relation": 0,
                            "length": 5,
                            "direction": 0
                        },
                        {
                            "pk": 265,
                            "point_a": 104,
                            "point_b": 131,
                            "b_to_a_relation": 0,
                            "length": 5,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "87",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_pretty-girl.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_pretty-girl.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 21,
                "categories": [
                    21
                ],
                "contest_set": [],
                "description": "PRETTY GIRL to marka z ugruntowaną pozycją na polskim rynku odzieżowym, która kreuje modę dla kobiet ceniących wysoką jakość i oryginalne wzory. Od początku działalności głównym priorytetem firmy jest zapewnienie naszym klientkom wysokiej jakości proponowanego asortymentu przy jednoczesnym zachowaniu atrakcyjnych cen. Wszechstronność naszych projektantów oraz wyczucie mody sprawia, iż nasze kolekcje są zgodne z obowiązującymi trendami, komfortowe w użytkowaniu oraz w wielu przypadkach ponadczasowe.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:16:21.637868",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 25,
                "name": "PUMA",
                "point": {
                    "pk": 67,
                    "x": 884,
                    "y": 370,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 498,
                            "point_a": 67,
                            "point_b": 154,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "25",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_puma.jpg",
                "front_url": "",
                "tags": [],
                "has_icon": false,
                "main_category": 22,
                "categories": [
                    22,
                    27,
                    20
                ],
                "contest_set": [],
                "description": "Puma jest światowym producentem odzieży, obuwia i akcesorii sportowych. Zaawansowana technologicznie odzież i bogata jej kolorystyka sprawi, że sport stanie się zabawą.\r\nEkskluzywne marki: FERRARI i DUCATI pociągną Cię w świat motoryzacji, a nasi Sprzedawcy ubiorą Cię modnie, zarówno na siłownię, jak i na szaloną imprezę.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:47:38.443213",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 27,
                "name": "QUIOSQUE",
                "point": {
                    "pk": 123,
                    "x": 725,
                    "y": 296,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 233,
                            "point_a": 123,
                            "point_b": 29,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 235,
                            "point_a": 123,
                            "point_b": 30,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "27",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_quiosque.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_quiosque.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 21,
                "categories": [
                    21
                ],
                "contest_set": [],
                "description": "QUIOSQUE tworzy kolekcje tylko dla kobiet, świetnie znając ich potrzeby. Inspirują nas kobiety takie jak Ty: otwarte na świat i nowe trendy, aktywne, świadome swego piękna.\r\nW QUIOSQUE znajdziesz propozycje odpowiednie na każdą okazję: do pracy, na romantyczną randkę czy weekendowy wypoczynek.\r\nUbrania QUIOSQUE mają dobrą jakość i doskonały krój, dzięki czemu eksponują to, co najpiękniejsze, dając poczucie maksymalnego komfortu…\r\nKolekcje QUIOSQUE są zaprojektowane na zasadzie wzajemnie uzupełniających się linii, których asortyment można łatwo łączyć ze sobą i zestawiać według indywidualnych potrzeb.\r\nTel: 42 288-13-86",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:15:03.533447",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 7,
                "name": "Ray Obuwie",
                "point": {
                    "pk": 70,
                    "x": 777,
                    "y": 378,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 49,
                            "point_a": 70,
                            "point_b": 29,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 51,
                            "point_a": 70,
                            "point_b": 30,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 440,
                            "point_a": 70,
                            "point_b": 144,
                            "b_to_a_relation": 0,
                            "length": 5,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "7",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_ray-obuwie.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_ray-obuwie.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 21,
                "categories": [
                    22,
                    21,
                    20
                ],
                "contest_set": [],
                "description": "603 701 752",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:34:05.693361",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 28,
                "name": "RESERVED",
                "point": {
                    "pk": 125,
                    "x": 646,
                    "y": 293,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 241,
                            "point_a": 125,
                            "point_b": 32,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 243,
                            "point_a": 125,
                            "point_b": 33,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "28",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_reserved.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_reserved.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 21,
                "categories": [
                    22,
                    21
                ],
                "contest_set": [],
                "description": "Reserved dostarcza na rynek szeroki asortyment odzieży dla mężczyzn i kobiet, reprezentującej najnowsze tendencje w modzie światowej. Najpopularniejsze grupy asortymentowe w ofercie sklepu to kurtki, koszule, swetry, sukienki, spódnice, spodnie, jeans, bielizna i wyroby konferencyjne.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:24:20.016366",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 40,
                "name": "ROSSMANN",
                "point": {
                    "pk": 110,
                    "x": 203,
                    "y": 273,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 187,
                            "point_a": 110,
                            "point_b": 49,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 189,
                            "point_a": 110,
                            "point_b": 50,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "40",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_rossman.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_rossman.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 26,
                "categories": [
                    26
                ],
                "contest_set": [],
                "description": "Asortyment sklepów Rossmann liczy ponad 9,5 tysiąca artykułów i jest zorientowany zarówno na produkty renomowanych firm zagranicznych (Beiersdorf, Colgate-Palmolive, Henkel, Johnson&Johnson, Proceter&Gamble, Unilever), jak i polskich (AAOceanic, Eris, Kolastyna, Pollena Ewa). W ofercie sklepu znaleźć można, obok produktów przeznaczonych do pielęgnacji ciała i włosów, także chemię gospodarczą, różnego rodzaju akcesoria domowe, zabawki dla dzieci. Perfumerie Rossman świadczą także usługi fotograficzne – takie jak wywoływanie zdjęć.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:46:10.098619",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 58,
                "name": "RTV EURO AGD",
                "point": {
                    "pk": 64,
                    "x": 824,
                    "y": 271,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 39,
                            "point_a": 64,
                            "point_b": 27,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 458,
                            "point_a": 64,
                            "point_b": 147,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "58",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_rtveuroagd.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_euro-rtv.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 9,
                "categories": [],
                "contest_set": [],
                "description": "RTV EURO AGD jest pierwszą ogólnopolską wyspecjalizowaną siecią detaliczną. Oferujemy sprzęt audio-wideo, zmechanizowany sprzęt gospodarstwa domowego, laptopy i inny sprzęt komputerowy, sprzęt telekomunikacyjny, sprzęt fotograficzny oraz akcesoria.\r\nOd lat sprzedajemy najwięcej produktów RTV i AGD w Polsce. Staramy się zapewnić Klientom szeroką ofertę sprzętu wysokiej jakości, po atrakcyjnych cenach, wspartą fachową obsługą.\r\nOferujemy też wiele usług związanych ze sprzedażą (dostawy, raty, ubezpieczenia - rozszerzenie gwarancji) oraz możliwość zamówienia sprzętu przez telefon lub przez internet.\r\nZapraszamy do sklepów RTV EURO AGD - LIDERA RYNKU RTV I AGD W POLSCE!\r\nTel: 510-020-809",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-17T17:03:16.139291",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 109,
                "name": "Saamoobsługowe wózki dla dzieci",
                "point": {
                    "pk": 172,
                    "x": 793,
                    "y": 273,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 519,
                            "point_a": 172,
                            "point_b": 147,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 521,
                            "point_a": 172,
                            "point_b": 27,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "109",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/logos/109.jpg",
                "front_url": "",
                "tags": [],
                "has_icon": false,
                "main_category": 20,
                "categories": [
                    20
                ],
                "contest_set": [],
                "description": "",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:31:44.854588",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 49,
                "name": "Salony Optyczne Doktor Marchewka",
                "point": {
                    "pk": 113,
                    "x": 583,
                    "y": 215,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 197,
                            "point_a": 113,
                            "point_b": 16,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 199,
                            "point_a": 113,
                            "point_b": 17,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "49",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_doktor-marchewka.jpg",
                "front_url": "",
                "tags": [],
                "has_icon": false,
                "main_category": 26,
                "categories": [
                    26
                ],
                "contest_set": [],
                "description": "Wkrótce otwarcie!",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:45:06.274125",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 59,
                "name": "SENATOR",
                "point": {
                    "pk": 95,
                    "x": 299,
                    "y": 218,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 135,
                            "point_a": 95,
                            "point_b": 7,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "59",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_senator.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_sennator.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 9,
                "categories": [],
                "contest_set": [],
                "description": "42 636 96 25",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-17T17:04:11.027741",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 41,
                "name": "SEPHORA",
                "point": {
                    "pk": 105,
                    "x": 407,
                    "y": 301,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 167,
                            "point_a": 105,
                            "point_b": 40,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 169,
                            "point_a": 105,
                            "point_b": 41,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "41",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_sephora.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_sephora.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 26,
                "categories": [
                    26
                ],
                "contest_set": [],
                "description": "Sephora - znacznie więcej niż perfumeria. To wyjątkowe miejsce, w którym piękno i doskonałość odnajdujemy w nieograniczonej ilości odsłon. Króluje w nim wolność i odwaga odkrywania.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:46:25.439269",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 121,
                "name": "Sezonowa Szafa",
                "point": {
                    "pk": 164,
                    "x": 165,
                    "y": 250,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 547,
                            "point_a": 164,
                            "point_b": 51,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 549,
                            "point_a": 164,
                            "point_b": 50,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "121",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_sezonowa-szafa.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_295791154a1185e5076d.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 21,
                "categories": [
                    22,
                    21,
                    20
                ],
                "contest_set": [],
                "description": "Jesteśmy firmą rodzinną, która istnieje od 16 sierpnia 2005 roku. Od początku specjalizujemy się w sprzedaży nakryć głowy, szalików i rękawiczek. Specjalizacja w dodatkach Państwa garderoby sprawia, że robimy to najlepiej w kraju.\r\nW marcu 2010 roku rozszerzyliśmy portfolio naszych produktów o się najlepsze okulary przeciwsłoneczne jakie są dostępne na rynku światowym. Nikt nie jest w stanie nam dorównać - tego pragniemy dowieść. Nasze doświadczenie i oddanie gwarantuje Państwu najwyższą jakość usług.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:32:39.380765",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 6,
                "name": "Sinsay",
                "point": {
                    "pk": 106,
                    "x": 361,
                    "y": 309,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 171,
                            "point_a": 106,
                            "point_b": 42,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 173,
                            "point_a": 106,
                            "point_b": 41,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "6",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_sinsay.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_sinsay.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 21,
                "categories": [
                    21
                ],
                "contest_set": [],
                "description": "Tel.: 785 003 750",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:17:05.798706",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 29,
                "name": "SIZEER",
                "point": {
                    "pk": 121,
                    "x": 760,
                    "y": 248,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 456,
                            "point_a": 121,
                            "point_b": 147,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "29",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_sizeer.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_sizeer.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 21,
                "categories": [
                    22,
                    21,
                    27
                ],
                "contest_set": [],
                "description": "SIZEER SHOES & WEAR to królestwo komfortu i wygody. W sieci niemal 60 nowoczesnych, multibrandowych butików nie ma miejsca dla formalnych strojów. Tutaj spotykają się najlepsze sportstyle’owe marki świata. Obok produktów z logo Nike’a, Adidasa, Pumy, Reeboka i UMBRO znaleźć można ekskluzywnego Timberlanda, a już niebawem również Lacoste! Oferta sklepów ciągle się poszerza. Ilość Sizeerów na terenie całego kraju jest z miesiąca na miesiąc coraz większa. Ludzie spod znaku Sizeer nie potrafią się nudzić, poszukują wszelkich form aktywności, nawet jeśli miałaby ona oznaczać spacer do najbliższej kawiarni... uwielbiają spotkania z przyjaciółmi, są doskonale poinformowani na temat nowych trendów zarówno modowych, jak i sportowych. Uwolnili swój czas!",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:47:24.340413",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 21,
                "name": "Sklep Zoologiczny Leopardus",
                "point": {
                    "pk": 82,
                    "x": 273,
                    "y": 405,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 89,
                            "point_a": 82,
                            "point_b": 45,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "21",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_leopardus.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_leopardus.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 24,
                "categories": [
                    24
                ],
                "contest_set": [],
                "description": "Sklep Zoologiczny.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:41:39.155710",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 55,
                "name": "SOL TRAVEL",
                "point": {
                    "pk": 92,
                    "x": 224,
                    "y": 215,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 123,
                            "point_a": 92,
                            "point_b": 5,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 125,
                            "point_a": 92,
                            "point_b": 4,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "55",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_sol.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_sol.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 19,
                "categories": [
                    19
                ],
                "contest_set": [],
                "description": "Biuro Podróży Sol Travel działa od 1996 r. Członkostwo w Polskiej Izbie Turystyki oraz współpraca z renomowanymi Organizatorami dają Państwu gwarancję bezpiecznego wyjazdu oraz wysoką jakość świadczonych usług. W naszej ofercie znajdziecie Państwo: oferty Last Minute, wczasy krajowe, zagraniczne, wycieczki objazdowe, kolonie, obozy, bilety autokarowe i lotnicze oraz ubezpieczenia turystyczne. Zapraszamy.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:11:36.960312",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 60,
                "name": "SONY CENTRE",
                "point": {
                    "pk": 63,
                    "x": 824,
                    "y": 163,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 33,
                            "point_a": 63,
                            "point_b": 24,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "60",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_sony-centre.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_sony.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 9,
                "categories": [],
                "contest_set": [],
                "description": "Sony Centre to salon w którym Państwo znajdą wszystkie produkty marki Sony dostępne na rynku polskim.\r\n\r\nNasi sprzedawcy zawsze fachowo i wyczerpująco odpowiedzą na wszystkie pytania.\r\nPomogą w razie jakichkolwiek problemów. \r\n\r\nPonadto nasz salon jest Autoryzowanym Centrum Serwisowym \r\ngdzie uzyskają Państwo informacje i pomoc na temat sprzętu Sony. \r\n\r\n\r\ntel. 41-240-58-55\r\n",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T11:03:04.797836",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 64,
                "name": "SPHINX",
                "point": {
                    "pk": 76,
                    "x": 523,
                    "y": 365,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 67,
                            "point_a": 76,
                            "point_b": 36,
                            "b_to_a_relation": 0,
                            "length": 5,
                            "direction": 0
                        },
                        {
                            "pk": 479,
                            "point_a": 76,
                            "point_b": 149,
                            "b_to_a_relation": 0,
                            "length": 5,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "64",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_sphinx.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_sphinx.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 25,
                "categories": [
                    25
                ],
                "contest_set": [],
                "description": "Oryginalny smak dań, świeżość i jakość, miejsce z niepowtarzalną atmosferą relaksu . Oferujemy jedyną w swoim rodzaju oryginalną Shoarmę®, szeroki wybór steków, świeże ryby, wyborne sałaty, pyszne makarony i słodkie desery.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T11:03:33.734843",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 30,
                "name": "SWISS",
                "point": {
                    "pk": 120,
                    "x": 765,
                    "y": 209,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 221,
                            "point_a": 120,
                            "point_b": 24,
                            "b_to_a_relation": 0,
                            "length": 5,
                            "direction": 0
                        },
                        {
                            "pk": 219,
                            "point_a": 120,
                            "point_b": 23,
                            "b_to_a_relation": 0,
                            "length": 5,
                            "direction": 0
                        },
                        {
                            "pk": 223,
                            "point_a": 120,
                            "point_b": 22,
                            "b_to_a_relation": 0,
                            "length": 5,
                            "direction": 0
                        },
                        {
                            "pk": 460,
                            "point_a": 120,
                            "point_b": 148,
                            "b_to_a_relation": 0,
                            "length": 5,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "30",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_swiss.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_swiss.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 21,
                "categories": [
                    22,
                    21
                ],
                "contest_set": [],
                "description": "Butik SWISS oferuje szeroki wybór wysokiej jakości zegarków i biżuterii. W swoim portfolio posiada zegarki sygnowane nazwiskami najsłynniejszych światowych projektantów - Michaela Korsa, Giorgio Armaniego czy Tommy’ego Hilfigera, cenione marki modowe - Fossil, Diesel czy Ice-Watch, jak również szwajcarskie marki jak Roamer, Atlantic. Podążasz za najnowszymi trendami? Cenisz ponadczasową klasykę? A może wolisz nowoczesną elegancję lub zaawansowane technologie? Z szerokiej i bardzo zróżnicowanej oferty na pewno wybierzesz idealny model zegarka dla siebie!\r\nDostępne marki:\r\nCertina, Ck, Tissot \r\nPełną ofertę butików SWISS znajdziesz na www.swiss.eu\r\n",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T11:03:53.287401",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 31,
                "name": "TAKKO FASHION",
                "point": {
                    "pk": 107,
                    "x": 301,
                    "y": 310,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 175,
                            "point_a": 107,
                            "point_b": 43,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 177,
                            "point_a": 107,
                            "point_b": 45,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "31",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_takko.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_takko.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 21,
                "categories": [
                    22,
                    21,
                    20
                ],
                "contest_set": [],
                "description": "Sklep oferujący odzież damską, męską oraz dziecięcą- zarówno sportową jak i elegancką. Często organizujemy atrakcyjne akcje rabatowe dla naszych klientów. ",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T11:04:06.822050",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 72,
                "name": "Tattum",
                "point": {
                    "pk": 81,
                    "x": 309,
                    "y": 396,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 83,
                            "point_a": 81,
                            "point_b": 44,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 85,
                            "point_a": 81,
                            "point_b": 45,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "72",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_tatuum.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_tatuum.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 21,
                "categories": [
                    22,
                    21
                ],
                "contest_set": [],
                "description": "Marka TATUUM, oferująca odzież damską i męską, to dobra jakość i funkcjonalność łącząca najnowsze światowe trendy z klasyką. Najwyższej jakości tkaniny naturalne, o kolorystyce obejmującej granaty i czerwienie oraz biel i czerń. \r\n \r\n",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T11:04:23.659621",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 10,
                "name": "TIK TAK",
                "point": {
                    "pk": 75,
                    "x": 572,
                    "y": 360,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 65,
                            "point_a": 75,
                            "point_b": 35,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "10",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_fik-fok.jpg",
                "front_url": "",
                "tags": [],
                "has_icon": false,
                "main_category": 21,
                "categories": [
                    21
                ],
                "contest_set": [],
                "description": "Serdecznie zapraszamy do naszego salonu z artykułami dla dzieci i niemowląt.\r\nW naszym sklepie znajdą Państwo ekspozycję:\r\n-funkcjonalnych i trwałych mebli dla dzieci i młodzieży:\r\n-Pinio\r\n-Timoore (jedyny autoryzowany salon firmowy w Łodzi)\r\n- fotelików samochodowych firmy Avionaut\r\n-wózków dla dzieci uznanych firm:\r\n-Emmaljunga\r\n-Anex\r\n-Camarelo\r\n-łóżek turystycznych dla niemowląt\r\n-krzesełka do karmienia",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T11:04:52.675220",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 32,
                "name": "TK-MAXX",
                "point": {
                    "pk": 61,
                    "x": 784,
                    "y": 95,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 29,
                            "point_a": 61,
                            "point_b": 23,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "32",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_tk-maxx.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_tk-maxx.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 21,
                "categories": [
                    22,
                    21,
                    20
                ],
                "contest_set": [],
                "description": "TK Maxx to sklep oferujący znane marki, najnowsze trendy w modzie, wysokiej jakości ubrania, obuwie, unikalne akcesoria i równie fascynujące artykuły dla domu - wszystko pod jednym dachem zawsze do 60% taniej od regularnych cen sprzedaży w Polsce i na świecie. Unikalny system \"off-price\" umożliwia klientom zakup markowych i wysokiej jakości artykułów po najbardziej atrakcyjnych cenach.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T11:05:06.742296",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 56,
                "name": "T-MOBILE",
                "point": {
                    "pk": 94,
                    "x": 274,
                    "y": 218,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 131,
                            "point_a": 94,
                            "point_b": 6,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 133,
                            "point_a": 94,
                            "point_b": 7,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "56",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_t-mobile.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_t-mobile.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 19,
                "categories": [
                    19
                ],
                "contest_set": [],
                "description": "T-Mobile jest jedną z największych sieci komórkowych. W Polsce świadczy pełen zakres usług telekomunikacyjnych dla Klientów indywidualnych oraz instytucjonalnych. Sieć T-Mobile oferuje usługi telefonii i Internetu mobilnego oraz stacjonarnego w systemach abonamentowych, przedpłaconych oraz mix.\r\nZapraszamy do Sklepu T-Mobile, w którym można:\r\n-podpisać nową umowę,\r\n-przedłużyć umowę,\r\n-dokonać cesji umowy,\r\n-kupić zestaw T-Mobile na kartę,\r\n-doładować konto T-Mobile na kartę,\r\n-złożyć lub odwołać polecenie zapłaty,\r\n-oddać sprzęt do naprawy i otrzymać aparat zastępczy,\r\n-włączyć lub wyłączyć usługi w systemach abonamentowych, przedpłaconych oraz mix,\r\n-kupić sprzęt (telefon, netbook, laptop) bez umowy,\r\n-kupić akcesoria.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T11:05:22.301196",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 1,
                "name": "@@tolet@@",
                "point": {
                    "pk": 88,
                    "x": 130,
                    "y": 238,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 111,
                            "point_a": 88,
                            "point_b": 51,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 113,
                            "point_a": 88,
                            "point_b": 52,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "1",
                "email": null,
                "www": null,
                "phone": null,
                "logo_url": "http://pasazlodz.techcave.pl/media/logos/1.jpg",
                "front_url": "",
                "tags": [],
                "has_icon": false,
                "main_category": 9,
                "categories": [],
                "contest_set": [],
                "description": "Sklep 5.10.15 oferuje bogaty wybór kolekcji ubranek stworzonych z bezpiecznych tkanin najwyższej jakości. Uważnie patrzymy na świat dziecka, co pozwala nam projektować ubranka, w których maluchy nie tylko ładnie wyglądają, ale też wspaniale się czują. Dbamy o przystępne ceny, proponując starannie wykonane ubranka, buty i akcesoria dla przedszkolaka, gimnazjalisty i niemowlaka. Zapraszamy do sklepu 5.10.15.!",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-10T12:13:17.751606",
                "external_id": null,
                "level": "0",
                "local_nr": null,
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 8,
                "name": "@@tolet@@",
                "point": {
                    "pk": 91,
                    "x": 202,
                    "y": 216,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 119,
                            "point_a": 91,
                            "point_b": 52,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 121,
                            "point_a": 91,
                            "point_b": 4,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "8",
                "email": null,
                "www": null,
                "phone": null,
                "logo_url": "http://pasazlodz.techcave.pl/media/logos/8.jpg",
                "front_url": "",
                "tags": [],
                "has_icon": false,
                "main_category": 9,
                "categories": [],
                "contest_set": [],
                "description": "BUTIK I LIKE",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-10T12:13:17.751606",
                "external_id": null,
                "level": "0",
                "local_nr": null,
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 54,
                "name": "@@tolet@@",
                "point": {
                    "pk": 114,
                    "x": 606,
                    "y": 216,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 201,
                            "point_a": 114,
                            "point_b": 17,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "54",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/logos/54.jpg",
                "front_url": "",
                "tags": [],
                "has_icon": false,
                "main_category": 19,
                "categories": [
                    19
                ],
                "contest_set": [],
                "description": "Autoryzowany Punkt Sprzedaży Cyfrowego Polsatu.Sprzedaż telewizji satelitarnej.Montaż i serwis instalacji antenowych.\r\n",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:11:22.611882",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 20,
                "name": "@@tolet@@",
                "point": {
                    "pk": 124,
                    "x": 697,
                    "y": 293,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 237,
                            "point_a": 124,
                            "point_b": 31,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 239,
                            "point_a": 124,
                            "point_b": 30,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "20",
                "email": null,
                "www": null,
                "phone": null,
                "logo_url": "http://pasazlodz.techcave.pl/media/logos/20.jpg",
                "front_url": "",
                "tags": [],
                "has_icon": false,
                "main_category": 9,
                "categories": [],
                "contest_set": [],
                "description": "HI MOUNTAIN",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-10T12:13:17.751606",
                "external_id": null,
                "level": "0",
                "local_nr": null,
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 113,
                "name": "Torre GSM",
                "point": {
                    "pk": 174,
                    "x": 675,
                    "y": 329,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 567,
                            "point_a": 174,
                            "point_b": 31,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 571,
                            "point_a": 174,
                            "point_b": 32,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "113",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_torre-gsm.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_komtrki.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 24,
                "categories": [
                    24
                ],
                "contest_set": [],
                "description": "Opis wkrótce...",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T11:05:35.612464",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 4,
                "name": "TORRE GSM",
                "point": {
                    "pk": 98,
                    "x": 374,
                    "y": 217,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 143,
                            "point_a": 98,
                            "point_b": 9,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 145,
                            "point_a": 98,
                            "point_b": 10,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "4",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_torre-gsm_2V8PBlv.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_torre-gsm_zukuX3p.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 24,
                "categories": [
                    24
                ],
                "contest_set": [],
                "description": "W naszych punktach znajdziecie Państwo: \r\n- najnowsze modele telefonów komórkowych\r\n- pokrowce i futerały polskich i zagranicznych producentów\r\n- baterie do telefonów o zwiększonej pojemności\r\n- ładowarki sieciowe i samochodowe\r\n- karty pamięci, adaptery, bluetooth i wiele innych.\r\nZapraszamy !",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T11:05:56.822881",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 39,
                "name": "Toyota AMX",
                "point": {
                    "pk": 116,
                    "x": 665,
                    "y": 213,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 205,
                            "point_a": 116,
                            "point_b": 19,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 207,
                            "point_a": 116,
                            "point_b": 20,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "39",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/logos/39.jpg",
                "front_url": "",
                "tags": [],
                "has_icon": false,
                "main_category": 19,
                "categories": [
                    19
                ],
                "contest_set": [],
                "description": "Opis wkrótce.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:13:13.438328",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 11,
                "name": "Toy'R'Us",
                "point": {
                    "pk": 54,
                    "x": 615,
                    "y": 94,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 7,
                            "point_a": 54,
                            "point_b": 17,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 9,
                            "point_a": 54,
                            "point_b": 18,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "11",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_toys-rus.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_toysrus.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 20,
                "categories": [
                    20
                ],
                "contest_set": [],
                "description": "42 295 53 70",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T11:06:16.412631",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 33,
                "name": "TRIUMPH",
                "point": {
                    "pk": 108,
                    "x": 250,
                    "y": 314,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 181,
                            "point_a": 108,
                            "point_b": 45,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "33",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_triumph.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_triumph.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 21,
                "categories": [
                    21
                ],
                "contest_set": [],
                "description": "Firma Triumph ma już ponad stuletnią tradycję. Wyroby tej marki znane są na całym świecie od pokoleń. Śmiało można powiedzieć, że historia firmy to jednocześnie historia bielizny. Oferta obejmuje wszystkie rodzaje bielizny damskiej oraz szeroką gamę piżam i modeli plażowych dla mężczyzn. Zgodnie z maksymą: Odpowiedni produkt na każdą okazję, każdy klient może wyszukać sobie taki rodzaj bielizny, jaki pasuje do jego wymagań, wyobrażeń i gustu.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T11:06:48.439675",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 5,
                "name": "Vera Puccino",
                "point": {
                    "pk": 59,
                    "x": 730,
                    "y": 93,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 23,
                            "point_a": 59,
                            "point_b": 21,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "5",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_vera-puccino.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_vera-puccino.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 21,
                "categories": [
                    22,
                    21
                ],
                "contest_set": [],
                "description": "Opis wkrótce...",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T11:08:05.007054",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 34,
                "name": "VIP COLLECTION",
                "point": {
                    "pk": 73,
                    "x": 643,
                    "y": 362,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 57,
                            "point_a": 73,
                            "point_b": 32,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 59,
                            "point_a": 73,
                            "point_b": 33,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "34",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_vip-collection.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_vip-collection.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 21,
                "categories": [
                    22,
                    21
                ],
                "contest_set": [],
                "description": "VIP Collection jest rozpoznawalną marką o ugruntowanej pozycji w branży eleganckiej galanterii skórzanej w Polsce. Od ponad dekady proponuje najwyższej jakości wzornictwo w sklepach na terenie całego kraju. Oferta firmy jest bardzo szeroka – zaczynając od portfeli, toreb, na bagażu kończąc",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T11:08:10.276763",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 36,
                "name": "Wojas",
                "point": {
                    "pk": 103,
                    "x": 472,
                    "y": 252,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 267,
                            "point_a": 103,
                            "point_b": 132,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "36",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/logos/36.jpg",
                "front_url": "",
                "tags": [],
                "has_icon": false,
                "main_category": 21,
                "categories": [
                    22,
                    21
                ],
                "contest_set": [],
                "description": "Wojas to jeden z największych i najbardziej cenionych polskich producentów obuwia, dysponujący siecią ponad 140 salonów w Polsce, na Słowacji i Ukrainie. Jakość wyrobów została potwierdzona wieloma nagrodami i wyróżnieniami. Doświadczenie w branży oraz wychodzenie naprzeciw potrzebom nawet najbardziej wymagających klientów sprawiają, że marka Wojas jest rozpoznawalna w kraju oraz poza jego granicami, a także cieszy się ogromnym zainteresowaniem. ",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T10:26:22.170136",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 82,
                "name": "Wpłatomat Euronet",
                "point": {
                    "pk": 134,
                    "x": 177,
                    "y": 321,
                    "level_id": 0,
                    "type": 20,
                    "edges_a": [
                        {
                            "pk": 275,
                            "point_a": 134,
                            "point_b": 48,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 277,
                            "point_a": 134,
                            "point_b": 49,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "82",
                "email": null,
                "www": null,
                "phone": null,
                "logo_url": "http://pasazlodz.techcave.pl/media/logos/82.jpg",
                "front_url": "",
                "tags": [],
                "has_icon": false,
                "main_category": 9,
                "categories": [],
                "contest_set": [],
                "description": "Wpłatomat Euronet",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-10T12:13:17.751606",
                "external_id": null,
                "level": "0",
                "local_nr": null,
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 67,
                "name": "XL LEE Wrangler",
                "point": {
                    "pk": 111,
                    "x": 531,
                    "y": 216,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 157,
                            "point_a": 111,
                            "point_b": 14,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 191,
                            "point_a": 111,
                            "point_b": 15,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 257,
                            "point_a": 111,
                            "point_b": 133,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 582,
                            "point_a": 111,
                            "point_b": 176,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "67",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/logos/67.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_lee_wrangler.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 21,
                "categories": [
                    22,
                    21
                ],
                "contest_set": [],
                "description": "Stała wyprzedaż outletowa do -70% marek Lee, Wrangler, LeeCooper, Volcano.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T11:09:20.032942",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 37,
                "name": "YES",
                "point": {
                    "pk": 102,
                    "x": 479,
                    "y": 221,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 155,
                            "point_a": 102,
                            "point_b": 13,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 269,
                            "point_a": 102,
                            "point_b": 133,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 474,
                            "point_a": 102,
                            "point_b": 14,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "37",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_yes.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_yes.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 21,
                "categories": [
                    22,
                    21
                ],
                "contest_set": [],
                "description": "Oferta Sklepów Jubilerskich YES, których jest ponad 100, adresowana jest do Klientów, którzy stawiają wzornictwu najwyższe wymagania. \r\nKolekcje i wzory biżuterii takie jak YES CHARMS COLLECTION, STUDIO Y – wytyczają nowe trendy i cieszą się uznaniem Klientów. Natomiast do klasyki należą już ponadczasowe kolekcje, np. WIKTORIAŃSKA oraz wzory biżuterii, takie jak pierścionki z brylantem ÉTERNEL, STELLA czy AMORE. YES, to również 30-letnie doświadczenie oraz najwyższa jakość. \r\nYES.pl\r\n\r\n",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T11:09:33.244654",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 42,
                "name": "YVES ROCHER",
                "point": {
                    "pk": 101,
                    "x": 448,
                    "y": 217,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 153,
                            "point_a": 101,
                            "point_b": 12,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "42",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_yves-rocher.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_yves.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 26,
                "categories": [
                    26
                ],
                "contest_set": [],
                "description": "Yves Rocher to kosmetyki do pielęgnacji twarzy i ciała, kosmetyki do opalania, wspaniały świat perfum oraz pełna barw paleta makijażu. Zapraszamy do Atelier Kosmetyki Roślinnej.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T11:10:04.506969",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 57,
                "name": "Zwoltex",
                "point": {
                    "pk": 128,
                    "x": 535,
                    "y": 259,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 259,
                            "point_a": 128,
                            "point_b": 132,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 261,
                            "point_a": 128,
                            "point_b": 131,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "57",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/logos/57.jpg",
                "front_url": "http://pasazlodz.techcave.pl/media/shop/pl_front_zwoltex.jpg",
                "tags": [],
                "has_icon": false,
                "main_category": 24,
                "categories": [],
                "contest_set": [],
                "description": "Carlo Perito proponuje swoim klientom najwyższej jakości ręczniki, wyroby dla dzieci i niemowląt,  kocyki, tekstylia kuchenne, prześcieradła, pościel, tkaniny frotte.",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T11:10:44.684052",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            },
            {
                "id": 106,
                "name": "Z pieca rodem",
                "point": {
                    "pk": 160,
                    "x": 762,
                    "y": 177,
                    "level_id": 0,
                    "type": 6,
                    "edges_a": [
                        {
                            "pk": 511,
                            "point_a": 160,
                            "point_b": 22,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        },
                        {
                            "pk": 513,
                            "point_a": 160,
                            "point_b": 23,
                            "b_to_a_relation": 0,
                            "length": 1,
                            "direction": 0
                        }
                    ],
                    "is_heavy_weight": false
                },
                "locale_id": "106",
                "email": "",
                "www": "",
                "phone": "",
                "logo_url": "http://pasazlodz.techcave.pl/media/shop/pasaz_lodz_logo_z-pieca-rodem.jpg",
                "front_url": "",
                "tags": [],
                "has_icon": false,
                "main_category": 23,
                "categories": [
                    23
                ],
                "contest_set": [],
                "description": "Tel.: 883-338-705",
                "archived": false,
                "created_at": "2016-02-10T12:13:17.751606",
                "updated_at": "2016-02-18T11:10:59.749579",
                "external_id": null,
                "level": "0",
                "local_nr": "",
                "lottery": false,
                "has_verifier": false,
                "floor": 0,
                "opening_hours": null,
                "link_set": [],
                "video_set": []
            }
        ];

        var _self = this;



        $scope.$on('userInput', function(event, data) {
            _self.searchInput = data;
        });
    }

    ShopsController.$inject = ['$scope'];

    angular.module('webApp')
        .controller('ShopsController', ShopsController);
})();
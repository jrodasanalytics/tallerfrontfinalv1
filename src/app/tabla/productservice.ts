import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from './product';

@Injectable({
    providedIn: 'root'
  })

export class ProductService {

    status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

    productNames: string[] = [
    ];

    constructor(private http: HttpClient) { }

    getProducts() {
        return [
            {
              "id": 0,
              "periodo": "2007-10",
              "usuario": "Barker Blackburn",
              "paquete": "Platino",
              "sistema": "GeopointPlanner",
              "empresa": "EXERTA",
              "metodo": "D",
              "inbatch": 466,
              "webservice": 211,
              "procesados": 880
            },
            {
              "id": 1,
              "periodo": "2014-2",
              "usuario": "Christie Berger",
              "paquete": "Básico",
              "sistema": "Sysgis",
              "empresa": "ENERVATE",
              "metodo": "B",
              "inbatch": 862,
              "webservice": 363,
              "procesados": 664
            },
            {
              "id": 2,
              "periodo": "2016-8",
              "usuario": "Lily Moran",
              "paquete": "Platino",
              "sistema": "GeopointView",
              "empresa": "XELEGYL",
              "metodo": "D",
              "inbatch": 833,
              "webservice": 790,
              "procesados": 826
            },
            {
              "id": 3,
              "periodo": "2002-11",
              "usuario": "Ashley Spencer",
              "paquete": "Básico",
              "sistema": "GeopointPlanner",
              "empresa": "GEOFORMA",
              "metodo": "C",
              "inbatch": 903,
              "webservice": 658,
              "procesados": 362
            },
            {
              "id": 4,
              "periodo": "2020-5",
              "usuario": "Candy Deleon",
              "paquete": "Avanzado",
              "sistema": "Sysgis",
              "empresa": "GREEKER",
              "metodo": "B",
              "inbatch": 573,
              "webservice": 541,
              "procesados": 379
            },
            {
              "id": 5,
              "periodo": "2016-6",
              "usuario": "Macias Sweet",
              "paquete": "Platino",
              "sistema": "GeopointView",
              "empresa": "KOOGLE",
              "metodo": "B",
              "inbatch": 459,
              "webservice": 606,
              "procesados": 840
            },
            {
              "id": 6,
              "periodo": "2002-5",
              "usuario": "Clarke Roach",
              "paquete": "Básico",
              "sistema": "GeopointView",
              "empresa": "COMVEYER",
              "metodo": "D",
              "inbatch": 204,
              "webservice": 181,
              "procesados": 661
            },
            {
              "id": 7,
              "periodo": "2020-5",
              "usuario": "Elvira Cummings",
              "paquete": "Avanzado",
              "sistema": "GeopointView",
              "empresa": "MIRACULA",
              "metodo": "D",
              "inbatch": 883,
              "webservice": 776,
              "procesados": 572
            },
            {
              "id": 8,
              "periodo": "1999-1",
              "usuario": "Marcie Page",
              "paquete": "Básico",
              "sistema": "Sysgis",
              "empresa": "LIMAGE",
              "metodo": "D",
              "inbatch": 303,
              "webservice": 422,
              "procesados": 838
            },
            {
              "id": 9,
              "periodo": "2010-4",
              "usuario": "Tina Huff",
              "paquete": "Avanzado",
              "sistema": "Sysgis",
              "empresa": "ZAJ",
              "metodo": "C",
              "inbatch": 471,
              "webservice": 212,
              "procesados": 678
            },
            {
              "id": 10,
              "periodo": "1998-3",
              "usuario": "Figueroa Craig",
              "paquete": "Básico",
              "sistema": "GeopointView",
              "empresa": "GADTRON",
              "metodo": "D",
              "inbatch": 683,
              "webservice": 976,
              "procesados": 934
            },
            {
              "id": 11,
              "periodo": "1998-8",
              "usuario": "Bowen Mckinney",
              "paquete": "Básico",
              "sistema": "GeopointPlanner",
              "empresa": "TUBALUM",
              "metodo": "A",
              "inbatch": 641,
              "webservice": 397,
              "procesados": 602
            },
            {
              "id": 12,
              "periodo": "2004-6",
              "usuario": "Nicholson Branch",
              "paquete": "Básico",
              "sistema": "GeopointPlanner",
              "empresa": "MAGMINA",
              "metodo": "C",
              "inbatch": 600,
              "webservice": 753,
              "procesados": 608
            },
            {
              "id": 13,
              "periodo": "2013-11",
              "usuario": "Mary Owen",
              "paquete": "Básico",
              "sistema": "GeopointView",
              "empresa": "ZIPAK",
              "metodo": "D",
              "inbatch": 376,
              "webservice": 860,
              "procesados": 530
            },
            {
              "id": 14,
              "periodo": "1998-7",
              "usuario": "Julia Osborn",
              "paquete": "Avanzado",
              "sistema": "Sysgis",
              "empresa": "ZENTILITY",
              "metodo": "A",
              "inbatch": 971,
              "webservice": 521,
              "procesados": 814
            },
            {
              "id": 15,
              "periodo": "1995-6",
              "usuario": "Angelique Doyle",
              "paquete": "Platino",
              "sistema": "GeopointView",
              "empresa": "QUILK",
              "metodo": "B",
              "inbatch": 670,
              "webservice": 988,
              "procesados": 810
            },
            {
              "id": 16,
              "periodo": "2001-8",
              "usuario": "Felicia Fuentes",
              "paquete": "Básico",
              "sistema": "GeopointPlanner",
              "empresa": "MAINELAND",
              "metodo": "B",
              "inbatch": 345,
              "webservice": 347,
              "procesados": 477
            },
            {
              "id": 17,
              "periodo": "2006-3",
              "usuario": "Armstrong Clemons",
              "paquete": "Platino",
              "sistema": "Sysgis",
              "empresa": "PIGZART",
              "metodo": "A",
              "inbatch": 539,
              "webservice": 141,
              "procesados": 513
            },
            {
              "id": 18,
              "periodo": "2000-7",
              "usuario": "Coffey Townsend",
              "paquete": "Avanzado",
              "sistema": "GeopointView",
              "empresa": "VIRVA",
              "metodo": "C",
              "inbatch": 472,
              "webservice": 623,
              "procesados": 464
            },
            {
              "id": 19,
              "periodo": "2000-11",
              "usuario": "Angela Walton",
              "paquete": "Platino",
              "sistema": "GeopointView",
              "empresa": "HELIXO",
              "metodo": "C",
              "inbatch": 329,
              "webservice": 902,
              "procesados": 973
            },
            {
              "id": 20,
              "periodo": "2010-6",
              "usuario": "Michelle Parker",
              "paquete": "Avanzado",
              "sistema": "Sysgis",
              "empresa": "VANTAGE",
              "metodo": "C",
              "inbatch": 841,
              "webservice": 458,
              "procesados": 702
            },
            {
              "id": 21,
              "periodo": "2000-10",
              "usuario": "Ellen Bates",
              "paquete": "Avanzado",
              "sistema": "Sysgis",
              "empresa": "CEPRENE",
              "metodo": "B",
              "inbatch": 291,
              "webservice": 245,
              "procesados": 773
            },
            {
              "id": 22,
              "periodo": "2016-9",
              "usuario": "Wanda Parrish",
              "paquete": "Avanzado",
              "sistema": "GeopointView",
              "empresa": "MAXEMIA",
              "metodo": "C",
              "inbatch": 609,
              "webservice": 383,
              "procesados": 260
            },
            {
              "id": 23,
              "periodo": "2002-6",
              "usuario": "Kimberley Walls",
              "paquete": "Avanzado",
              "sistema": "GeopointPlanner",
              "empresa": "PETIGEMS",
              "metodo": "C",
              "inbatch": 326,
              "webservice": 207,
              "procesados": 492
            },
            {
              "id": 24,
              "periodo": "2010-8",
              "usuario": "Duncan Sears",
              "paquete": "Avanzado",
              "sistema": "Sysgis",
              "empresa": "REMOTION",
              "metodo": "A",
              "inbatch": 526,
              "webservice": 492,
              "procesados": 917
            },
            {
              "id": 25,
              "periodo": "2010-3",
              "usuario": "Williams Flores",
              "paquete": "Platino",
              "sistema": "GeopointView",
              "empresa": "AFFLUEX",
              "metodo": "A",
              "inbatch": 562,
              "webservice": 707,
              "procesados": 382
            },
            {
              "id": 26,
              "periodo": "2015-11",
              "usuario": "Caroline Donaldson",
              "paquete": "Básico",
              "sistema": "GeopointView",
              "empresa": "RODEOCEAN",
              "metodo": "D",
              "inbatch": 879,
              "webservice": 685,
              "procesados": 421
            },
            {
              "id": 27,
              "periodo": "2009-4",
              "usuario": "Holman Mccormick",
              "paquete": "Avanzado",
              "sistema": "GeopointView",
              "empresa": "GRAINSPOT",
              "metodo": "B",
              "inbatch": 485,
              "webservice": 941,
              "procesados": 968
            },
            {
              "id": 28,
              "periodo": "2014-4",
              "usuario": "Fowler Hamilton",
              "paquete": "Básico",
              "sistema": "GeopointView",
              "empresa": "QUILM",
              "metodo": "B",
              "inbatch": 746,
              "webservice": 290,
              "procesados": 251
            },
            {
              "id": 29,
              "periodo": "2004-11",
              "usuario": "Wolfe Montoya",
              "paquete": "Platino",
              "sistema": "GeopointView",
              "empresa": "SCENTRIC",
              "metodo": "A",
              "inbatch": 447,
              "webservice": 634,
              "procesados": 358
            },
            {
              "id": 30,
              "periodo": "2017-3",
              "usuario": "Therese Knox",
              "paquete": "Platino",
              "sistema": "GeopointView",
              "empresa": "MALATHION",
              "metodo": "B",
              "inbatch": 758,
              "webservice": 253,
              "procesados": 383
            },
            {
              "id": 31,
              "periodo": "2004-6",
              "usuario": "Ruby Travis",
              "paquete": "Básico",
              "sistema": "GeopointPlanner",
              "empresa": "BLEEKO",
              "metodo": "C",
              "inbatch": 213,
              "webservice": 372,
              "procesados": 344
            },
            {
              "id": 32,
              "periodo": "2014-5",
              "usuario": "Saunders Baird",
              "paquete": "Platino",
              "sistema": "Sysgis",
              "empresa": "XEREX",
              "metodo": "C",
              "inbatch": 417,
              "webservice": 519,
              "procesados": 324
            }
          ]
    }
}
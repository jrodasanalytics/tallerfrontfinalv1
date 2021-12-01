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

    getEmpresas(){
      return [
        {name: "Coca Cola", img:"n/a"},
        {name: "Scotiabank", img:"n/a"},
        {name: "Banco Central", img:"n/a"},
        {name: "Ministerio de la Policía", img:"n/a"},
        {name: "Nintendo", img:"n/a"},
        {name: "Pizza Hut", img:"n/a"},
        {name: "MasterCard", img:"n/a"}
      ]
    }

    getUsuarios(){
      return [
        {name: "Jordi Pérez", img:"n/a"},
        {name: "Salvio Delgado", img:"n/a"},
        {name: "Luciano Calvo", img:"n/a"},
        {name: "Casiano Marín", img:"n/a"},
        {name: "Joel Arias", img:"n/a"},
        {name: "Jacinto Peña", img:"n/a"},
        {name: "Eulalia Jiménez", img:"n/a"},
        {name: "Constantino Iglesias", img:"n/a"},
        {name: "Victorino Vázquez", img:"n/a"},
        {name: "Heliodoro Pastor", img:"n/a"},
        {name: "Timoteo Crespo", img:"n/a"},
        {name: "Valentín Benítez", img:"n/a"}
      ]
    }

    getSistemas(){
      return [
        {name: "Geopoint Engine", img:"n/a"},
        {name: "Geopoint View", img:"n/a"},
        {name: "Geopoint Planner", img:"n/a"},
        {name: "AutoDesk", img:"n/a"},
        {name: "Photoshop", img:"n/a"},
        {name: "Power BI", img:"n/a"},
        {name: "FL Studio", img:"n/a"},
        {name: "Balsamiq Wireframes", img:"n/a"}
      ]
    }

    getMetodos(){
      return [
        {name: "Manual", img:"n/a"},
        {name: "Automático", img:"n/a"}
      ]
    }

    getPaquetes(){
      return [
        {name: "Básico", img:"n/a"},
        {name: "Bronce", img:"n/a"},
        {name: "Plata", img:"n/a"},
        {name: "Oro", img:"n/a"},
        {name: "Diamante", img:"n/a"}
      ]
    }

    getProducts() {
        return [
          {
            "id": 0,
            "periodo": "2019-10",
            "usuario": "Heliodoro Pastor",
            "paquete": "Oro",
            "sistema": "FL Studio",
            "empresa": "Nintendo",
            "metodo": "Automático",
            "inbatch": 712,
            "webservice": 705,
            "procesados": 723
          },
          {
            "id": 1,
            "periodo": "2002-3",
            "usuario": "Luciano Calvo",
            "paquete": "Básico",
            "sistema": "Photoshop",
            "empresa": "MasterCard",
            "metodo": "Automático",
            "inbatch": 217,
            "webservice": 417,
            "procesados": 495
          },
          {
            "id": 2,
            "periodo": "2012-6",
            "usuario": "Victorino Vázquez",
            "paquete": "Oro",
            "sistema": "Geopoint Engine",
            "empresa": "Ministerio de la Policía",
            "metodo": "Automático",
            "inbatch": 679,
            "webservice": 132,
            "procesados": 255
          },
          {
            "id": 3,
            "periodo": "2018-10",
            "usuario": "Jordi Pérez",
            "paquete": "Oro",
            "sistema": "Geopoint Engine",
            "empresa": "Ministerio de la Policía",
            "metodo": "Manual",
            "inbatch": 671,
            "webservice": 873,
            "procesados": 816
          },
          {
            "id": 4,
            "periodo": "2007-1",
            "usuario": "Jacinto Peña",
            "paquete": "Plata",
            "sistema": "Geopoint Planner",
            "empresa": "Scotiabank",
            "metodo": "Automático",
            "inbatch": 686,
            "webservice": 552,
            "procesados": 707
          },
          {
            "id": 5,
            "periodo": "2016-12",
            "usuario": "Victorino Vázquez",
            "paquete": "Básico",
            "sistema": "AutoDesk",
            "empresa": "Nintendo",
            "metodo": "Manual",
            "inbatch": 946,
            "webservice": 853,
            "procesados": 488
          },
          {
            "id": 6,
            "periodo": "2011-6",
            "usuario": "Eulalia Jiménez",
            "paquete": "Oro",
            "sistema": "Photoshop",
            "empresa": "MasterCard",
            "metodo": "Automático",
            "inbatch": 634,
            "webservice": 107,
            "procesados": 426
          },
          {
            "id": 7,
            "periodo": "2020-8",
            "usuario": "Heliodoro Pastor",
            "paquete": "Bronce",
            "sistema": "AutoDesk",
            "empresa": "Scotiabank",
            "metodo": "Automático",
            "inbatch": 656,
            "webservice": 341,
            "procesados": 701
          },
          {
            "id": 8,
            "periodo": "2017-5",
            "usuario": "Luciano Calvo",
            "paquete": "Plata",
            "sistema": "Power BI",
            "empresa": "Nintendo",
            "metodo": "Automático",
            "inbatch": 668,
            "webservice": 793,
            "procesados": 322
          },
          {
            "id": 9,
            "periodo": "2010-7",
            "usuario": "Constantino Iglesias",
            "paquete": "Bronce",
            "sistema": "Power BI",
            "empresa": "Coca Cola",
            "metodo": "Manual",
            "inbatch": 676,
            "webservice": 127,
            "procesados": 477
          },
          {
            "id": 10,
            "periodo": "2021-11",
            "usuario": "Joel Arias",
            "paquete": "Bronce",
            "sistema": "Photoshop",
            "empresa": "MasterCard",
            "metodo": "Manual",
            "inbatch": 195,
            "webservice": 729,
            "procesados": 466
          },
          {
            "id": 11,
            "periodo": "2009-10",
            "usuario": "Luciano Calvo",
            "paquete": "Bronce",
            "sistema": "AutoDesk",
            "empresa": "MasterCard",
            "metodo": "Manual",
            "inbatch": 841,
            "webservice": 632,
            "procesados": 620
          },
          {
            "id": 12,
            "periodo": "2012-2",
            "usuario": "Constantino Iglesias",
            "paquete": "Oro",
            "sistema": "Power BI",
            "empresa": "MasterCard",
            "metodo": "Manual",
            "inbatch": 909,
            "webservice": 406,
            "procesados": 999
          },
          {
            "id": 13,
            "periodo": "2006-4",
            "usuario": "Timoteo Crespo",
            "paquete": "Plata",
            "sistema": "Photoshop",
            "empresa": "Ministerio de la Policía",
            "metodo": "Manual",
            "inbatch": 480,
            "webservice": 768,
            "procesados": 313
          },
          {
            "id": 14,
            "periodo": "2021-11",
            "usuario": "Timoteo Crespo",
            "paquete": "Diamante",
            "sistema": "Geopoint View",
            "empresa": "MasterCard",
            "metodo": "Manual",
            "inbatch": 499,
            "webservice": 856,
            "procesados": 889
          },
          {
            "id": 15,
            "periodo": "2015-5",
            "usuario": "Jordi Pérez",
            "paquete": "Básico",
            "sistema": "Geopoint View",
            "empresa": "Banco Central",
            "metodo": "Manual",
            "inbatch": 949,
            "webservice": 695,
            "procesados": 866
          },
          {
            "id": 16,
            "periodo": "2009-12",
            "usuario": "Timoteo Crespo",
            "paquete": "Plata",
            "sistema": "AutoDesk",
            "empresa": "MasterCard",
            "metodo": "Manual",
            "inbatch": 168,
            "webservice": 282,
            "procesados": 350
          },
          {
            "id": 17,
            "periodo": "2015-11",
            "usuario": "Victorino Vázquez",
            "paquete": "Oro",
            "sistema": "Geopoint Planner",
            "empresa": "Pizza Hut",
            "metodo": "Manual",
            "inbatch": 774,
            "webservice": 361,
            "procesados": 702
          },
          {
            "id": 18,
            "periodo": "2014-12",
            "usuario": "Luciano Calvo",
            "paquete": "Oro",
            "sistema": "Geopoint Planner",
            "empresa": "Banco Central",
            "metodo": "Manual",
            "inbatch": 347,
            "webservice": 866,
            "procesados": 442
          },
          {
            "id": 19,
            "periodo": "2013-7",
            "usuario": "Salvio Delgado",
            "paquete": "Oro",
            "sistema": "Geopoint Engine",
            "empresa": "Ministerio de la Policía",
            "metodo": "Manual",
            "inbatch": 144,
            "webservice": 792,
            "procesados": 181
          },
          {
            "id": 20,
            "periodo": "2000-9",
            "usuario": "Luciano Calvo",
            "paquete": "Plata",
            "sistema": "Balsamiq Wireframes",
            "empresa": "Banco Central",
            "metodo": "Automático",
            "inbatch": 222,
            "webservice": 532,
            "procesados": 290
          },
          {
            "id": 21,
            "periodo": "2009-5",
            "usuario": "Eulalia Jiménez",
            "paquete": "Básico",
            "sistema": "Geopoint Planner",
            "empresa": "Coca Cola",
            "metodo": "Manual",
            "inbatch": 997,
            "webservice": 847,
            "procesados": 458
          },
          {
            "id": 22,
            "periodo": "2007-3",
            "usuario": "Casiano Marín",
            "paquete": "Oro",
            "sistema": "Geopoint Planner",
            "empresa": "Ministerio de la Policía",
            "metodo": "Manual",
            "inbatch": 266,
            "webservice": 370,
            "procesados": 179
          },
          {
            "id": 23,
            "periodo": "2008-7",
            "usuario": "Heliodoro Pastor",
            "paquete": "Oro",
            "sistema": "Balsamiq Wireframes",
            "empresa": "Scotiabank",
            "metodo": "Manual",
            "inbatch": 967,
            "webservice": 374,
            "procesados": 743
          },
          {
            "id": 24,
            "periodo": "2009-11",
            "usuario": "Victorino Vázquez",
            "paquete": "Oro",
            "sistema": "Balsamiq Wireframes",
            "empresa": "Scotiabank",
            "metodo": "Automático",
            "inbatch": 275,
            "webservice": 396,
            "procesados": 820
          },
          {
            "id": 25,
            "periodo": "2003-5",
            "usuario": "Eulalia Jiménez",
            "paquete": "Básico",
            "sistema": "Photoshop",
            "empresa": "Ministerio de la Policía",
            "metodo": "Automático",
            "inbatch": 567,
            "webservice": 952,
            "procesados": 774
          },
          {
            "id": 26,
            "periodo": "2020-10",
            "usuario": "Luciano Calvo",
            "paquete": "Bronce",
            "sistema": "Photoshop",
            "empresa": "Pizza Hut",
            "metodo": "Manual",
            "inbatch": 573,
            "webservice": 210,
            "procesados": 616
          },
          {
            "id": 27,
            "periodo": "2021-8",
            "usuario": "Joel Arias",
            "paquete": "Oro",
            "sistema": "AutoDesk",
            "empresa": "Ministerio de la Policía",
            "metodo": "Manual",
            "inbatch": 605,
            "webservice": 426,
            "procesados": 431
          },
          {
            "id": 28,
            "periodo": "2014-5",
            "usuario": "Salvio Delgado",
            "paquete": "Diamante",
            "sistema": "FL Studio",
            "empresa": "MasterCard",
            "metodo": "Manual",
            "inbatch": 893,
            "webservice": 885,
            "procesados": 261
          },
          {
            "id": 29,
            "periodo": "2016-11",
            "usuario": "Victorino Vázquez",
            "paquete": "Bronce",
            "sistema": "Geopoint Planner",
            "empresa": "Ministerio de la Policía",
            "metodo": "Manual",
            "inbatch": 149,
            "webservice": 244,
            "procesados": 583
          },
          {
            "id": 30,
            "periodo": "2010-5",
            "usuario": "Valentín Benítez",
            "paquete": "Básico",
            "sistema": "Geopoint Engine",
            "empresa": "Ministerio de la Policía",
            "metodo": "Automático",
            "inbatch": 583,
            "webservice": 886,
            "procesados": 240
          },
          {
            "id": 31,
            "periodo": "2014-12",
            "usuario": "Eulalia Jiménez",
            "paquete": "Diamante",
            "sistema": "AutoDesk",
            "empresa": "Scotiabank",
            "metodo": "Manual",
            "inbatch": 711,
            "webservice": 545,
            "procesados": 363
          },
          {
            "id": 32,
            "periodo": "2006-2",
            "usuario": "Casiano Marín",
            "paquete": "Bronce",
            "sistema": "AutoDesk",
            "empresa": "MasterCard",
            "metodo": "Manual",
            "inbatch": 356,
            "webservice": 545,
            "procesados": 577
          },
          {
            "id": 33,
            "periodo": "2009-12",
            "usuario": "Joel Arias",
            "paquete": "Básico",
            "sistema": "Photoshop",
            "empresa": "Ministerio de la Policía",
            "metodo": "Manual",
            "inbatch": 520,
            "webservice": 362,
            "procesados": 739
          },
          {
            "id": 34,
            "periodo": "2001-2",
            "usuario": "Victorino Vázquez",
            "paquete": "Oro",
            "sistema": "Geopoint Engine",
            "empresa": "Ministerio de la Policía",
            "metodo": "Automático",
            "inbatch": 339,
            "webservice": 229,
            "procesados": 435
          },
          {
            "id": 35,
            "periodo": "2019-10",
            "usuario": "Jordi Pérez",
            "paquete": "Oro",
            "sistema": "FL Studio",
            "empresa": "Banco Central",
            "metodo": "Automático",
            "inbatch": 114,
            "webservice": 734,
            "procesados": 528
          },
          {
            "id": 36,
            "periodo": "2002-7",
            "usuario": "Victorino Vázquez",
            "paquete": "Bronce",
            "sistema": "Geopoint Planner",
            "empresa": "Pizza Hut",
            "metodo": "Manual",
            "inbatch": 699,
            "webservice": 571,
            "procesados": 301
          },
          {
            "id": 37,
            "periodo": "2006-12",
            "usuario": "Jordi Pérez",
            "paquete": "Oro",
            "sistema": "AutoDesk",
            "empresa": "Ministerio de la Policía",
            "metodo": "Manual",
            "inbatch": 151,
            "webservice": 181,
            "procesados": 528
          },
          {
            "id": 38,
            "periodo": "2010-6",
            "usuario": "Jordi Pérez",
            "paquete": "Oro",
            "sistema": "Geopoint Engine",
            "empresa": "Scotiabank",
            "metodo": "Manual",
            "inbatch": 951,
            "webservice": 744,
            "procesados": 685
          },
          {
            "id": 39,
            "periodo": "2008-8",
            "usuario": "Eulalia Jiménez",
            "paquete": "Plata",
            "sistema": "Geopoint Engine",
            "empresa": "Banco Central",
            "metodo": "Automático",
            "inbatch": 634,
            "webservice": 742,
            "procesados": 275
          },
          {
            "id": 40,
            "periodo": "2020-5",
            "usuario": "Heliodoro Pastor",
            "paquete": "Plata",
            "sistema": "Power BI",
            "empresa": "Ministerio de la Policía",
            "metodo": "Manual",
            "inbatch": 453,
            "webservice": 648,
            "procesados": 516
          },
          {
            "id": 41,
            "periodo": "2013-9",
            "usuario": "Valentín Benítez",
            "paquete": "Bronce",
            "sistema": "Balsamiq Wireframes",
            "empresa": "Pizza Hut",
            "metodo": "Automático",
            "inbatch": 445,
            "webservice": 363,
            "procesados": 670
          },
          {
            "id": 42,
            "periodo": "2006-9",
            "usuario": "Luciano Calvo",
            "paquete": "Bronce",
            "sistema": "Balsamiq Wireframes",
            "empresa": "MasterCard",
            "metodo": "Manual",
            "inbatch": 112,
            "webservice": 262,
            "procesados": 558
          },
          {
            "id": 43,
            "periodo": "2016-1",
            "usuario": "Jordi Pérez",
            "paquete": "Básico",
            "sistema": "Photoshop",
            "empresa": "Pizza Hut",
            "metodo": "Automático",
            "inbatch": 724,
            "webservice": 787,
            "procesados": 162
          },
          {
            "id": 44,
            "periodo": "2013-8",
            "usuario": "Luciano Calvo",
            "paquete": "Plata",
            "sistema": "FL Studio",
            "empresa": "Scotiabank",
            "metodo": "Automático",
            "inbatch": 262,
            "webservice": 419,
            "procesados": 163
          }
        ]
    }
}
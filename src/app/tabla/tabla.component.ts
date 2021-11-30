import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
export interface PeriodicElement {
    index: number;
    Periodo: string;
    Paquete: string;
    Usuario: string;
    Sistema: string;
    Empresa: string;
    Metodo: string;
    InBatch: number; 
    WebService: number;
    Procesados:number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {index: 1, Periodo: '2021-10', Paquete: 'GPE',Usuario: 'pjhuaman@analytics.pe',Sistema: 'Hydrogen',Empresa:'Telefonica', Metodo:'Automatico', InBatch: 19, WebService: 1212,Procesados: 123},
  {index: 2, Periodo: '2010-10', Paquete: 'GPE',Usuario: 'pjhuaman@analytics.pe',Sistema: 'Hydrogen',Empresa:'Telefonica', Metodo:'Automatico', InBatch: 19, WebService: 1212,Procesados: 123},
  {index: 3, Periodo: '2010-10', Paquete: 'GPE',Usuario: 'pjhuaman@analytics.pe',Sistema: 'Hydrogen',Empresa:'Telefonica', Metodo:'Automatico', InBatch: 19, WebService: 1212,Procesados: 123},
  {index: 4, Periodo: '2010-10', Paquete: 'GPE',Usuario: 'pjhuaman@analytics.pe',Sistema: 'Hydrogen',Empresa:'Telefonica', Metodo:'Automatico', InBatch: 19, WebService: 1212,Procesados: 123},
  {index: 5, Periodo: '2010-10', Paquete: 'GPE',Usuario: 'pjhuaman@analytics.pe',Sistema: 'Hydrogen',Empresa:'Telefonica', Metodo:'Automatico', InBatch: 19, WebService: 1212,Procesados: 123},
  {index: 6, Periodo: '2010-10', Paquete: 'GPE',Usuario: 'pjhuaman@analytics.pe',Sistema: 'Hydrogen',Empresa:'Telefonica', Metodo:'Automatico', InBatch: 19, WebService: 1212,Procesados: 123},
  {index: 7, Periodo: '2010-10', Paquete: 'GPE',Usuario: 'pjhuaman@analytics.pe',Sistema: 'Hydrogen',Empresa:'Telefonica', Metodo:'Automatico', InBatch: 19, WebService: 1212,Procesados: 123},
  {index: 8, Periodo: '2010-10', Paquete: 'GPE',Usuario: 'pjhuaman@analytics.pe',Sistema: 'Hydrogen',Empresa:'Telefonica', Metodo:'Automatico', InBatch: 19, WebService: 1212,Procesados: 123},
  {index: 9, Periodo: '2010-10', Paquete: 'GPE',Usuario: 'pjhuaman@analytics.pe',Sistema: 'Hydrogen',Empresa:'Telefonica', Metodo:'Automatico', InBatch: 19, WebService: 1212,Procesados: 123},
  {index: 10, Periodo: '2010-10', Paquete: 'GPE',Usuario: 'pjhuaman@analytics.pe',Sistema: 'Hydrogen',Empresa:'Telefonica', Metodo:'Automatico', InBatch: 19, WebService: 1212,Procesados: 123},
  {index: 11, Periodo: '2010-10', Paquete: 'GPE',Usuario: 'pjhuaman@analytics.pe',Sistema: 'Hydrogen',Empresa:'Telefonica', Metodo:'Automatico', InBatch: 19, WebService: 1212,Procesados: 123},
  {index: 12, Periodo: '2010-10', Paquete: 'GPE',Usuario: 'pjhuaman@analytics.pe',Sistema: 'Hydrogen',Empresa:'Telefonica', Metodo:'Automatico', InBatch: 19, WebService: 1212,Procesados: 123},
  {index: 13, Periodo: '2010-10', Paquete: 'GPE',Usuario: 'pjhuaman@analytics.pe',Sistema: 'Hydrogen',Empresa:'Telefonica', Metodo:'Automatico', InBatch: 19, WebService: 1212,Procesados: 123},
  {index: 14, Periodo: '2010-10', Paquete: 'GPE',Usuario: 'pjhuaman@analytics.pe',Sistema: 'Hydrogen',Empresa:'Telefonica', Metodo:'Automatico', InBatch: 19, WebService: 1212,Procesados: 123},
];


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  displayedColumns: string[] = ['index', 'Periodo', 'Paquete', 'Usuario', 'Sistema','Empresa','Metodo','InBatch','WebService','Procesados'];
  dataSource = ELEMENT_DATA;
  Highcharts: typeof Highcharts = Highcharts;
  HighchartsPie: typeof Highcharts = Highcharts;

  chartOptionsPie: Highcharts.Options = {
    series: [{
      data: [1, 2, 3],
      type: 'pie'
    }]
  };

  chartOptions: Highcharts.Options = {

    title: {
        text: 'Usuarios'
    },
  
    // subtitle: {
    //     text: 'Resize the frame or click buttons to change appearance'
    // },
  
    legend: {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical'
    },
  
    xAxis: {
        categories: ['Apples', 'Oranges', 'Bananas'],
        labels: {
            x: -10
        }
    },
  
    yAxis: {
        allowDecimals: false,
        title: {
            text: 'Amount'
        }
    },
  
    series: [{
        name: 'Christmas Eve',
        data: [1, 4, 3],
        type: 'column'
    }, {
        name: 'Christmas Day before dinner',
        data: [6, 4, 2],
        type: 'column'
    }, {
        name: 'Christmas Day after dinner',
        data: [8, 4, 3],
        type: 'column'
    }],
  
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom',
                    layout: 'horizontal'
                },
                yAxis: {
                    labels: {
                        align: 'left',
                        x: 0,
                        y: -5
                    },
                    title: {
                        text: null
                    }
                },
                credits: {
                    enabled: false
                }
            }
        }]
    }
  };


  constructor() { }

  ngOnInit(): void {
  }

}

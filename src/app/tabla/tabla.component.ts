import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
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
  {Periodo: '2010-10', Paquete: 'GPE',Usuario: 'pjhuaman@analytics.pe',Sistema: 'Hydrogen',Empresa:'Telefonica', Metodo:'Automatico', InBatch: 19, WebService: 1212,Procesados: 123},
  {Periodo: '2010-10', Paquete: 'GPE',Usuario: 'pjhuaman@analytics.pe',Sistema: 'Hydrogen',Empresa:'Telefonica', Metodo:'Automatico', InBatch: 19, WebService: 1212,Procesados: 123},
  {Periodo: '2010-10', Paquete: 'GPE',Usuario: 'pjhuaman@analytics.pe',Sistema: 'Hydrogen',Empresa:'Telefonica', Metodo:'Automatico', InBatch: 19, WebService: 1212,Procesados: 123},
  {Periodo: '2010-10', Paquete: 'GPE',Usuario: 'pjhuaman@analytics.pe',Sistema: 'Hydrogen',Empresa:'Telefonica', Metodo:'Automatico', InBatch: 19, WebService: 1212,Procesados: 123},
  {Periodo: '2010-10', Paquete: 'GPE',Usuario: 'pjhuaman@analytics.pe',Sistema: 'Hydrogen',Empresa:'Telefonica', Metodo:'Automatico', InBatch: 19, WebService: 1212,Procesados: 123},
  {Periodo: '2010-10', Paquete: 'GPE',Usuario: 'pjhuaman@analytics.pe',Sistema: 'Hydrogen',Empresa:'Telefonica', Metodo:'Automatico', InBatch: 19, WebService: 1212,Procesados: 123},
  {Periodo: '2010-10', Paquete: 'GPE',Usuario: 'pjhuaman@analytics.pe',Sistema: 'Hydrogen',Empresa:'Telefonica', Metodo:'Automatico', InBatch: 19, WebService: 1212,Procesados: 123},
  {Periodo: '2010-10', Paquete: 'GPE',Usuario: 'pjhuaman@analytics.pe',Sistema: 'Hydrogen',Empresa:'Telefonica', Metodo:'Automatico', InBatch: 19, WebService: 1212,Procesados: 123},
  {Periodo: '2010-10', Paquete: 'GPE',Usuario: 'pjhuaman@analytics.pe',Sistema: 'Hydrogen',Empresa:'Telefonica', Metodo:'Automatico', InBatch: 19, WebService: 1212,Procesados: 123},
  {Periodo: '2010-10', Paquete: 'GPE',Usuario: 'pjhuaman@analytics.pe',Sistema: 'Hydrogen',Empresa:'Telefonica', Metodo:'Automatico', InBatch: 19, WebService: 1212,Procesados: 123},
  {Periodo: '2010-10', Paquete: 'GPE',Usuario: 'pjhuaman@analytics.pe',Sistema: 'Hydrogen',Empresa:'Telefonica', Metodo:'Automatico', InBatch: 19, WebService: 1212,Procesados: 123},
  {Periodo: '2010-10', Paquete: 'GPE',Usuario: 'pjhuaman@analytics.pe',Sistema: 'Hydrogen',Empresa:'Telefonica', Metodo:'Automatico', InBatch: 19, WebService: 1212,Procesados: 123},
  {Periodo: '2010-10', Paquete: 'GPE',Usuario: 'pjhuaman@analytics.pe',Sistema: 'Hydrogen',Empresa:'Telefonica', Metodo:'Automatico', InBatch: 19, WebService: 1212,Procesados: 123},
  {Periodo: '2010-10', Paquete: 'GPE',Usuario: 'pjhuaman@analytics.pe',Sistema: 'Hydrogen',Empresa:'Telefonica', Metodo:'Automatico', InBatch: 19, WebService: 1212,Procesados: 123},
  {Periodo: '2010-10', Paquete: 'GPE',Usuario: 'pjhuaman@analytics.pe',Sistema: 'Hydrogen',Empresa:'Telefonica', Metodo:'Automatico', InBatch: 19, WebService: 1212,Procesados: 123},
  {Periodo: '2010-10', Paquete: 'GPE',Usuario: 'pjhuaman@analytics.pe',Sistema: 'Hydrogen',Empresa:'Telefonica', Metodo:'Automatico', InBatch: 19, WebService: 1212,Procesados: 123},
  {Periodo: '2010-10', Paquete: 'GPE',Usuario: 'pjhuaman@analytics.pe',Sistema: 'Hydrogen',Empresa:'Telefonica', Metodo:'Automatico', InBatch: 19, WebService: 1212,Procesados: 123},
  {Periodo: '2010-10', Paquete: 'GPE',Usuario: 'pjhuaman@analytics.pe',Sistema: 'Hydrogen',Empresa:'Telefonica', Metodo:'Automatico', InBatch: 19, WebService: 1212,Procesados: 123},
  {Periodo: '2010-10', Paquete: 'GPE',Usuario: 'pjhuaman@analytics.pe',Sistema: 'Hydrogen',Empresa:'Telefonica', Metodo:'Automatico', InBatch: 19, WebService: 1212,Procesados: 123},

];


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  displayedColumns: string[] = ['Periodo', 'Paquete', 'Usuario', 'Sistema','Empresa','Metodo','InBatch','WebService','Procesados'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

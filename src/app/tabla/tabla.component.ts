import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Product } from './product';
import { ProductService } from './productservice';
import { Input } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
    selector: 'app-tabla',
    templateUrl: './tabla.component.html',
    styleUrls: ['./tabla.component.scss'],
    styles: [`
    :host ::ng-deep .p-dialog .product-image {
        width: 150px;
        margin: 0 auto 2rem auto;
        display: block;
    }
  `],
  providers: [MessageService,ConfirmationService]
  })
  
export class TablaComponent implements OnInit {

    productDialog!: boolean;

    products!: Product[];
  
    product!: Product;
  
    selectedProducts!: Product[];
  
    submitted!: boolean;
  
    statuses!: any[];
  
    cols!: any[];
  
    _selectedColumns!: any[];

    loading: boolean = true;
  
    constructor(private productService: ProductService, private messageService: MessageService, private confirmationService: ConfirmationService) { }
  
    ngOnInit() {

      this.products = this.productService.getProducts();

      this.loading = false;
  
      this.statuses = [
          {label: 'INSTOCK', value: 'instock'},
          {label: 'LOWSTOCK', value: 'lowstock'},
          {label: 'OUTOFSTOCK', value: 'outofstock'}
      ];
      this.cols = [
          { field: 'id', header: 'No.', type:'numeric'},
          { field: 'periodo', header: 'Periodo', type:'text'},
          { field: 'usuario', header: 'Usuario', type:'text'},
          { field: 'paquete', header: 'Paquete', type:'text'},
          { field: 'sistema', header: 'Sistema', type:'text'},
          { field: 'empresa', header: 'Empresa', type:'text'},
          { field: 'metodo', header: 'Método', type:'text'},
          { field: 'inbatch', header: 'InBatch', type:'numeric'},
          { field: 'webservice', header: 'WebService', type:'numeric'},
          { field: 'procesados', header: 'Procesados', type:'numeric'},
      ];
      this._selectedColumns = this.cols;
    }
  
    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }
  
    findIndexById(id: number): number {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                index = i;
                break;
            }
        }
  
        return index;
    }
  
    createId(): string {
        let id = '';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for ( var i = 0; i < 5; i++ ) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }
  
      @Input() get selectedColumns(): any[] {
          return this._selectedColumns;
      }
  
      set selectedColumns(val: any[]) {
          //restore original order
          this._selectedColumns = this.cols.filter(col => val.includes(col));
      }

      clear(table: Table) {
        table.clear();
    }

    getEventValue($event:any) :string {
        return $event.target.value;
      } 

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
  Highcharts2: typeof Highcharts = Highcharts;

  chartOptions2: Highcharts.Options = {
    title: {
        text: 'Browser<br>shares<br>2017',
        align: 'center',
        verticalAlign: 'middle',
        y: 60
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%'],
            size: '110%'
        }
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '50%',
        data: [
            ['slice', 1],
            ['slice', 2],
            ['slice', 3],
             
        ]
    }]

  };
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  msgs: any[];
  options: { title: { display: boolean; text: string; fontSize: number; }; legend: { position: string; }; };
  linedata: { labels: string[]; datasets: { data: number[]; backgroundColor: string[]; hoverBackgroundColor: string[]; }[]; };

  constructor() { }

  ngOnInit() {
    this.options = {
      title: {
        display: true,
        text: 'PrimeNG vs PrimeUI',
        fontSize: 16
      },
      legend: {
        position: 'bottom'
      }
    };
    this.linedata = {
      labels: ['PrimeNG', 'PrimeUI', 'PrimeReact'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: true,
          borderColor: '#4bc0c0'
      },
      {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: true,
          borderColor: '#565656'
      }
      ]
    };
  }


  selectData(event: any) {
    this.msgs = [];
    this.msgs.push({
      severity: 'info',
      summary: 'Data Selected',
      'detail': this.linedata.datasets[event.element._datasetIndex]
      .data[event.element._index]
    });
  }

}

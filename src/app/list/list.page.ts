import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  monthArray: Array<any> = [];
  dataArray: Array<any> = [];
  store;
  public lineChartData: ChartDataSets[] = [
    { data: this.dataArray, label: 'مجمل الحسابات حسب الشهر' }
  ];
  public lineChartLabels: Label[] = this.monthArray;

  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: '#1e77b9'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.selectedStore.subscribe(s=>{
      this.store = s;
    })
    this.data.getStats(this.store.StoreID).subscribe((d: Array<any>) => {
      d.forEach(element => {
        this.monthArray.push(element.mo);
        this.dataArray.push(element.sum);
      });
      console.log(this.monthArray, this.dataArray);
    });
  }
}

import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {HashVaultService} from '@module/mining/hashvault/hashvault.service';
import {interval, Subscription} from 'rxjs';
import { Chart, ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import 'chartjs-adapter-moment';
import {default as Annotation} from 'chartjs-plugin-annotation';
@Component({
  selector: 'lthn-app-hashvault',
  templateUrl: './hashvault.component.html',
  styleUrls: ['./hashvault.component.scss']
})
export class HashvaultComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  @Input() wallet: string = ''
  public poolInfo: any;
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [ ],
        label: 'Series A',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: "origin",
        parsing: false,
        spanGaps: false,
      }

    ],
    labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ]
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {
        type: 'timeseries',
        time: {
          displayFormats: {
            day: 'D MMM'
          },
          unit: 'day'
        },
        ticks: {
          source: 'data',
          font: {
            size: 10,
            family: 'Source Sans Pro'
          },
          color: 'white',
          padding: 2,
          maxRotation: 0
        }
      },
      y: {
        ticks: {
          callback: null,
          font: {
            family: 'Source Sans Pro',
            size: 10
          },
          color: 'white',
          mirror: true,
          padding: 4
        },
        position: 'left'
      }
    },

    plugins: {
      legend: {
        display: false
      },

      decimation: {
        enabled: true,
        algorithm: 'lttb',
        samples: 50
      }
    }
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  constructor(public HashVault: HashVaultService) {
    Chart.register(Annotation)
  }

  async ngOnInit() {

    this.poolInfo = await this.HashVault.getWalletStats(this.wallet)
    console.log(this.poolInfo)
    this.lineChartData.datasets[0].data = this.poolInfo.chart.map((n: any) => ({
      x: n.ts,
      y: n.ch + n.sh
    }));
    this.sub = interval(30000).subscribe(async () => {
      this.poolInfo = await this.HashVault.getWalletStats(this.wallet)
      this.lineChartData.datasets[0].data = this.poolInfo.chart.map((n: any) => ({
        x: n.ts,
        y: n.ch + n.sh
      }));
      console.log(this.poolInfo)

    });



  }
  public ngOnDestroy(): void {
    if(this.sub) this.sub.unsubscribe();
  }




}

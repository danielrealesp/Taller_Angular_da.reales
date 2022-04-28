import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieServiceService } from './serie-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'series',
  templateUrl: './serie-module.component.html',
  styleUrls: ['./serie-module.component.css']
})
export class SerieModuleComponent implements OnInit {

  series: Serie[] = [];

  public getSeries(): void {
    this.serieServiceService.getSeries()
      .subscribe(series => {this.series = series; console.log(series)});
  }

  public averageSeason():number {
    return this.series.reduce((sum, serie) => sum + serie.seasons, 0) / this.series.length;
  }

  constructor(private serieServiceService: SerieServiceService, private router: Router) { }

  ngOnInit() {
    this.getSeries();
  }


}

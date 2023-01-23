import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MeteoService } from '../services/meteo.service'




@Component({
  selector: 'app-meteo-detail',
  templateUrl: './meteo-detail.component.html',
  styleUrls: ['./meteo-detail.component.css']
})
export class MeteoDetailComponent {

  // meteo : any;
  hourly: any;
  hourly1: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private meteoService: MeteoService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getMeteo();
  }

  async getMeteo(): Promise<void> {
    const name = this.route.snapshot.paramMap.get('name');
    // pour lire la paramètre 'name' dans l'URL de la page  comme définit dans le router avec
    // path: 'meteo/:name'

    console.log('getmeteo', name);
    if (name) {
      await this.meteoService.getMeteo(name)
        .then(response => this.hourly = response)
        .catch(fail => this.hourly = fail);
      console.log(this.hourly);
    }

    this.hourly.list.forEach((element: any, index : number) => {
      if (index % 8 == 0) {
        console.log(index)
        this.hourly1.push(element);
      }
    });

  }

}

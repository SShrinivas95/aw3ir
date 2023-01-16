import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MeteoItem } from '../meteoItem';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {
  city: MeteoItem = {
    id: 0,
    name: '',
    weather: null

  };

  cityList: MeteoItem[] = [];

  constructor() { }

  ngOnInit() {
    if (localStorage['cityList'] !== undefined) {
      this.cityList = JSON.parse(localStorage['cityList']);
    } else {
      this.cityList = [];
    }

  }
  onSubmit() {

    if (this.isCityExist(this.city.name) === false) {

      const courant: MeteoItem = {
        name: this.city.name,
        id: Date.now(),
        weather: null,
      };

      this.cityList.push(courant);
      this.saveCityList();

      console.log(this.city.name, 'ajouté à la dans la liste');
    } else {
      console.log(this.city.name, 'existe déjà dans la liste');
    }

  }


  remove(enleve: any) {
    this.cityList = this.cityList.filter(function (item) {
      return item.name !== enleve.name
    });
    this.saveCityList();
  }

  isCityExist(ville: any) {
    for (const nom of this.cityList) {
      if (nom.name === ville) return true;
    }
    return false;
  }
  

  saveCityList() {
    localStorage['cityList'] = JSON.stringify(this.cityList);
  }
}



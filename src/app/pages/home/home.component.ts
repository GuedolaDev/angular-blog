import { Component, OnInit } from '@angular/core';
import { dataFake, Noticies } from 'src/app/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  noticiesList = dataFake
  smallCardList = this.noticiesList.slice(1);
  principalNotice: Noticies = this.noticiesList[0]

  constructor() { }

  ngOnInit(): void {
    console.log("Lista de noticias", this.smallCardList)
  }

}

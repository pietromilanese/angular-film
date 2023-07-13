import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/models/film.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  data: Film[] = [];
  name: string = "";

  constructor(private activatedRoute: ActivatedRoute) { }






  ngOnInit(): void {

    this.activatedRoute.data.subscribe(({data}) => {
      this.data = data;
      console.log(this.data)
    })

  }
}



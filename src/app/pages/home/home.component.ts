import { Component, OnInit } from '@angular/core';
import { MovieApiServiseService } from '../../service/movie-api-servise.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(public service:MovieApiServiseService){ }


  bannerResult:any=[];

  ngOnInit():void{
    this.bannerData();
  }

  // bannerdata
  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      console.log(result.results,'bannerresult#');
      this.bannerResult =result.results;

    });
  }

}

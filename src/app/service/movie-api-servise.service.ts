import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieApiServiseService {

  constructor(private http:HttpClient) { }

  baseUrl ="https://api.themoviedb.org/3/trending/all/day";
  apikey= "5cae93732682de2cc1c23a242d638bd6";


  //bannerapiData
  bannerApiData():Observable<any>
  {
    console.log("api is working ");
    return this.http.get(`${this.baseUrl}?api_key=${this.apikey}`);
  }


}

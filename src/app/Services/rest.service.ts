import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { News } from '../News';
import { RouterModule, Routes } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RestService implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit(){
  }

  listTaskUrl : string = "http://localhost:5000/task/list";
  listTaskUrlMynet : string = "http://localhost:5000/task/list/mynet";
  listTaskUrlHaberturk : string = "http://localhost:5000/task/list/haberturk";
  listTaskUrlCnnturk : string = "http://localhost:5000/task/list/cnnturk";
  listTaskUrlSabah : string = "http://localhost:5000/task/list/sabah";
  listTaskUrlAhaber : string = "http://localhost:5000/task/list/ahaber";
  listTaskUrlNtv : string = "http://localhost:5000/task/list/ntv";
  listTaskUrlBbc : string = "http://localhost:5000/task/list/bbc";
  listTaskUrlBirsaat : string = "http://localhost:5000/task/list/birsaat";
  listTaskUrlBirgun : string = "http://localhost:5000/task/list/birgun";
 


  readNews()
  {
    return this.http.get<News[]>(this.listTaskUrl);
  }

  readNewsMynet()
  {
    return this.http.get<News[]>(this.listTaskUrlMynet);
  }

  readNewsHaberturk()
  {
    return this.http.get<News[]>(this.listTaskUrlHaberturk);
  }

  readNewsCnnturk()
  {
    return this.http.get<News[]>(this.listTaskUrlCnnturk);
  }

  readNewsSabah()
  {
    return this.http.get<News[]>(this.listTaskUrlSabah);
  }

  readNewsAhaber()
  {
    return this.http.get<News[]>(this.listTaskUrlAhaber);
  }

  readNewsNtv()
  {
    return this.http.get<News[]>(this.listTaskUrlNtv);
  }

  readNewsBbc()
  {
    return this.http.get<News[]>(this.listTaskUrlBbc);
  }

  readNewsBirsaat()
  {
    return this.http.get<News[]>(this.listTaskUrlBirsaat);
  }
  readNewsBirgun()
  {
    return this.http.get<News[]>(this.listTaskUrlBirgun);
  }


}





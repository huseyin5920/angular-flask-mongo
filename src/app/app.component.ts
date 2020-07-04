import { Component, OnInit } from '@angular/core';
import { RestService } from './Services/rest.service';
import { News } from './News';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'rss-angular';

  constructor(private rs : RestService){}

  headers = ["Haber","Haber Detay", "Haber Linki",  "Haber Saati", "Haber servisi"]
  index = ["baslik", "kisa_bilgi", "link", "zaman", "saglayici"];
  news : News[] = [];
  
  ngOnInit()
  {
      debugger
      this.rs.readNews()
      .subscribe
        (
          (response) => 
          {
            debugger
            
            this.news = response;
          },
          (error) =>
          {
            debugger
            console.log("No Data Found" + error);
          }

        )
  } 

  goToPage(pageName:string):void{
    this.rs.readNewsMynet()
    .subscribe
    (
      (response_mynet) => 
      {
        debugger
        
        this.news = response_mynet;
      },
      (error) =>
      {
        debugger
        console.log("No Data Found" + error);
      }

    )
  }

  goToPageHaberturk(pageName:string):void{
    this.rs.readNewsHaberturk()
    .subscribe
    (
      (response_haberturk) => 
      {
        debugger
        
        this.news = response_haberturk;
      },
      (error) =>
      {
        debugger
        console.log("No Data Found" + error);
      }

    )
  }

  goToPageCnnturk(pageName:string):void{
    this.rs.readNewsCnnturk()
    .subscribe
    (
      (response_cnnturk) => 
      {
        debugger
        
        this.news = response_cnnturk;
      },
      (error) =>
      {
        debugger
        console.log("No Data Found" + error);
      }

    )
  }

  goToPageSabah(pageName:string):void{
    this.rs.readNewsSabah()
    .subscribe
    (
      (response_sabah) => 
      {
        debugger
        
        this.news = response_sabah;
      },
      (error) =>
      {
        debugger
        console.log("No Data Found" + error);
      }

    )
  }


  goToPageAhaber(pageName:string):void{
    this.rs.readNewsAhaber()
    .subscribe
    (
      (response_ahaber) => 
      {
        debugger
        
        this.news = response_ahaber;
      },
      (error) =>
      {
        debugger
        console.log("No Data Found" + error);
      }

    )
  }


  goToPageNtv(pageName:string):void{
    this.rs.readNewsNtv()
    .subscribe
    (
      (response_ntv) => 
      {
        debugger
        
        this.news = response_ntv;
      },
      (error) =>
      {
        debugger
        console.log("No Data Found" + error);
      }

    )
  }


  goToPageBbc(pageName:string):void{
    this.rs.readNewsBbc()
    .subscribe
    (
      (response_bbc) => 
      {
        debugger
        
        this.news = response_bbc;
      },
      (error) =>
      {
        debugger
        console.log("No Data Found" + error);
      }

    )
  }

  goToPageBirsaat(pageName:string):void{
    this.rs.readNewsBirsaat()
    .subscribe
    (
      (response_birsaat) => 
      {
        debugger
        
        this.news = response_birsaat;
      },
      (error) =>
      {
        debugger
        console.log("No Data Found" + error);
      }

    )}

    goToPageBirgun(pageName:string):void{
      this.rs.readNewsBirgun()
      .subscribe
      (
        (response_birgun) => 
        {
          debugger
          
          this.news = response_birgun;
        },
        (error) =>
        {
          debugger
          console.log("No Data Found" + error);
        }
  
      )
    }
  

  
}
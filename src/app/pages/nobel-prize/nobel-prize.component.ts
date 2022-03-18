import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { filter } from 'rxjs';
import { laureate, nobelprize } from 'src/app/models/nobelprize';
import { NobelprizeService } from 'src/app/services/nobelprize.service';

@Component({
  selector: 'app-nobel-prize',
  templateUrl: './nobel-prize.component.html',
  styleUrls: ['./nobel-prize.component.css']
})
export class NobelPrizeComponent implements OnInit {
 //laureate:laureate[] = { id:"",firstname:"",surname:"",motivation:",share:"};
 //nobel_prize_winners : nobelprize = { year:"",category:"",laureates:this.laureate};
 nobel_data : nobelprize[] = [];
 category_list:string[]=[];
 year_list:number[]=[];
 selected_category:string="";
 selected_year:number=0;
 isLoadingResults:boolean = true;
 resultsLength:number = 0;
 
  constructor(private ns: NobelprizeService) {
    this.ns.getNobelData().subscribe({
      next:(data:nobelprize[])=>{
        this.isLoadingResults = false;
        this.nobel_data = data;
        this.resultsLength =  this.nobel_data.length;
        console.log("datta",this.nobel_data);

        //getting distinct values for year and category from json array
          this.year_list = this.nobel_data.map(item=>item.year).filter((
          item,index,self)=>self.indexOf(item)==index)  ;  

          this.category_list = this.nobel_data.map(item=>item.category).
          filter((item,index,self)=>self.indexOf(item)==index);

      },
      error:(error:any)=>{
        this.nobel_data = [];
        this.year_list = [];
        this.category_list = [];
      }
    })
   }
  
  ngOnInit(): void {
    
  }

}

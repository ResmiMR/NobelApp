import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { laureate, nobelprize } from 'src/app/models/nobelprize';

@Component({
  selector: 'app-laureate-list',
  templateUrl: './laureate-list.component.html',
  styleUrls: ['./laureate-list.component.css']
})
export class LaureateListComponent implements OnInit,OnChanges {
  //displayedColumns: string[] = ['year','category','firstname', 'lastname',  'motivation'];
  displayedColumns: string[] = ['year','category','laureates'];
   
  subcolumns: string[] = ['Name',  'Motivation'];
 
  @Input("laureate-list") data: nobelprize[] = [];

  @Input() resultsLength = 0;
  @Input() isLoadingResults = true;
  @Input() selected_year = 0;
  @Input() selected_category = "";
  ROWSPANDATA :any[]= []
  dataSource!: MatTableDataSource<nobelprize>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor() {
   }
  ngOnChanges(changes: SimpleChanges): void {
  
    console.log("datta in child",this.data);
    this.dataSource = new MatTableDataSource<nobelprize>(this.data);
    this.dataSource.paginator = this.paginator;

  }

  ngOnInit(): void {
  
  }
  ngAfterViewInit() {
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort= this.sort;
   }
   
}

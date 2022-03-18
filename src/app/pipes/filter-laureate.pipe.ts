import { Pipe, PipeTransform } from '@angular/core';
import { laureate, nobelprize } from '../models/nobelprize';

@Pipe({
  name: 'filterLaureate'
})
export class FilterLaureatePipe implements PipeTransform {

  transform(nobel_data: nobelprize[], category: string, year:number): any {
    if(category){
      nobel_data =  nobel_data.filter((x:nobelprize)=>x.category==category );
    }
    if(year){
      nobel_data =  nobel_data.filter((x:nobelprize)=>x.year==year );
    }
      return nobel_data;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allVehicles: any[], searchedVehicle: string, propertyName: string): any {

    const result: any = []
    if (!allVehicles || searchedVehicle == "" || propertyName == "") {
      return allVehicles
    }
    
    allVehicles.forEach((item: any) => {
      if (item[propertyName].trim().toLowerCase().includes(searchedVehicle.trim().toLowerCase())) {
        result.push(item)
      }
    })
    return result;
  }


}

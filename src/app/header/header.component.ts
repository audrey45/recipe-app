import { Component } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

import { DataStorageService } from '../shared/data-storage.service';



@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor(private dataStorageService: DataStorageService) { }

    saveData() {
        this.dataStorageService.storeRecipes().subscribe(
            (response: HttpResponse<any>) => {
                console.log(response);
            }
        );
    }
    fetchData(){
       this.dataStorageService.getRecipes();
     }

}

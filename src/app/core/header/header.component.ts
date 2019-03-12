import { Component } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';



@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor(private dataStorageService: DataStorageService,
        private authService: AuthService) { }

    saveData() {
        this.dataStorageService.storeRecipes().subscribe(
            (response: HttpResponse<any>) => {
                console.log(response);
            }
        );
    }
    fetchData() {
        this.dataStorageService.getRecipes();
    }
    logout() {
        this.authService.logout();

    }

}

import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


export interface CanComponentDeactivate {
  canDeactivate: () => boolean;
 }

@Injectable({
  providedIn: 'root'
})
export class UnsavedchangesGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(
    component: CanComponentDeactivate): boolean {
       return component.canDeactivate ? component.canDeactivate() : true;
  }
  
}

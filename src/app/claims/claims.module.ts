import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClaimsRoutingModule } from './claims-routing.module';
import { ClaimsComponent } from './claims.component';
import { CreateClaimComponent } from './create-claim/create-claim.component';


@NgModule({
  declarations: [ClaimsComponent, CreateClaimComponent],
  imports: [
    CommonModule,
    ClaimsRoutingModule
  ]
})
export class ClaimsModule { }

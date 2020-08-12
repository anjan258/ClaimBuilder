import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClaimsRoutingModule } from './claims-routing.module';
import { ClaimsComponent } from './claims.component';
import { CreateClaimComponent } from './create-claim/create-claim.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [ClaimsComponent, CreateClaimComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClaimsRoutingModule,
    BsDatepickerModule.forRoot()

  ]
})
export class ClaimsModule { }

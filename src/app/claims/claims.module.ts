import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClaimsRoutingModule } from './claims-routing.module';
import { ClaimsComponent } from './claims.component';
import { CreateClaimComponent } from './create-claim/create-claim.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ListSkusComponent } from './list-skus/list-skus.component';


@NgModule({
  declarations: [ClaimsComponent, CreateClaimComponent, ListSkusComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClaimsRoutingModule,
    BsDatepickerModule.forRoot()

  ]
})
export class ClaimsModule { }

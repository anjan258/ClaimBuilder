import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateClaimComponent } from '../claims/create-claim/create-claim.component';

import { ClaimsComponent } from './claims.component';

const routes: Routes = [
  { path: '', component: ClaimsComponent },
  { path: 'buildClaim', component: CreateClaimComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaimsRoutingModule { }

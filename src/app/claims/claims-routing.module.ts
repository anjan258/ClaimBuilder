import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateClaimComponent } from '../claims/create-claim/create-claim.component';
import { UnsavedchangesGuard } from 'src/app/shared/unsavedchanges.guard';

import { ClaimsComponent } from './claims.component';

const routes: Routes = [
  { path: '', component: ClaimsComponent },
  { path: 'buildClaim', component: CreateClaimComponent, canDeactivate: [UnsavedchangesGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UnsavedchangesGuard]
})
export class ClaimsRoutingModule { }

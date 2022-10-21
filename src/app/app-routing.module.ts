import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { SubmissionsComponent } from "./components/submissions/submissions.component";
import { NotImpementedComponent } from "./not-impemented/not-impemented.component";

const routes: Routes  = [
  {path:'submissions', component: SubmissionsComponent},
  { path: '**', component: NotImpementedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
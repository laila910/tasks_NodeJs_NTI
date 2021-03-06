import { RolesComponent } from './task/roles/roles.component';
// import { HomeComponent } from './pages/home/home.component';
// import { SingleserviceComponent } from './pages/singleservice/singleservice.component';
import { ProvidersComponent } from './task/providers/providers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: "", component: HomeComponent },
  // { path: ":id", component: SingleserviceComponent },
  { path: " ", component: RolesComponent },
  { path: ":id", component: ProvidersComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

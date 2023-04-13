import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CochesComponent } from './coches/coches.component';
const routes: Routes = [
  { path: 'coches/:marca/:modelo', component: CochesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'mascotas', component: ListarMascotasComponent },
  { path: '', redirectTo: '/mascotas', pathMatch: 'full' }, // Cuando es la raíz
  { path: '**', redirectTo: '/mascotas' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

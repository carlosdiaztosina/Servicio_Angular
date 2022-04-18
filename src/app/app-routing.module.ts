import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCocheComponent } from './components/add-coche/add-coche.component';
import { EditCocheComponent } from './components/edit-coche/edit-coche.component';
import { CochesListComponent } from './components/coches-list/coches-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-student' },
  { path: 'add-coche', component: AddCocheComponent },
  { path: 'edit-coche/:id', component: EditCocheComponent },
  { path: 'coches-list', component: CochesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

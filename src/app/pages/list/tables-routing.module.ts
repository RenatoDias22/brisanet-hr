import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [{
    path: 'users',
    component: UsersComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  UsersComponent,
];

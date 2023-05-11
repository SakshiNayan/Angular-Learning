import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

const routes: Routes = [
  { path: 'server', component: ServerComponent },
  {path:'directive', component:ServersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

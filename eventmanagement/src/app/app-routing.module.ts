import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { SiginComponent}from'./sigin/sigin.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [ {path:"admin",component:AdminComponent},
{path:"user",component:UserComponent},
{path:"edit/:id",component:EditComponent},
{path:'details/:id',component:DetailsComponent},
{path:"signin",component:SiginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

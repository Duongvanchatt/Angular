import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from './page/client/product/product.component';
import {BlogComponent} from './page/client/blog/blog.component';
import {WorkComponent} from './page/client/work/work.component';
import { ClientComponent } from './layout/client/client.component';
import { AdminComponent } from './layout/admin/admin.component';
import { ListComponent } from './page/admin/list_post/list.component';
import { AddComponent } from './page/admin/add_post/add.component';
import { WorkDetailComponent } from './page/client/work-detail/work-detail.component';


const routes: Routes = [
  {path: '', component: ClientComponent, children: [
    {path: '', component: ProductComponent},
    {path: 'blog', component: BlogComponent },
    {path: 'work', component: WorkComponent },
    {path: 'work-detail/:id', component: WorkDetailComponent},
]},
 {path: 'admin', component: AdminComponent, children: [
   {path: "", redirectTo: 'list', pathMatch: 'full'},
   {path: 'listpost', component: ListComponent},
   {path: 'addpost', component: AddComponent},
   {path: 'editpost/:id', component: AddComponent}
 ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

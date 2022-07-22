import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductComponent } from './page/client/product/product.component';
import { BlogComponent } from './page/client/blog/blog.component';
import { BannerComponent } from './component/banner/banner.component';
import { WorkComponent } from './page/client/work/work.component';
import { WorkDetailComponent } from './page/client/work-detail/work-detail.component';
import { AdminComponent } from './layout/admin/admin.component';
import { ClientComponent } from './layout/client/client.component';
import { HeaderadminComponent } from './component/headeradmin/headeradmin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './page/admin/add_post/add.component';
import {ListComponent} from './page/admin/list_post/list.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    BlogComponent,
    BannerComponent,
    WorkComponent,
    WorkDetailComponent,
    AdminComponent,
    ClientComponent,
    HeaderadminComponent,
    AddComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

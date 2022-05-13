import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { CensysService } from '../_services/censys.service';
import { RouterModule, Routes } from '@angular/router';
import { ShodanService } from '../_services/shodan.service';
import { NbButtonModule, NbIconModule, NbLayoutModule, NbMenuModule, NbMenuService, NbSidebarModule, NbSidebarService } from '@nebular/theme';
const routes : Routes = [
  {
    path: '',
    redirectTo: 'product',
    pathMatch: 'full'
  },
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: "product",
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
      }
    ]
  }
]

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
    NbLayoutModule,
    NbButtonModule,
    NbMenuModule,
    NbSidebarModule,
    NbIconModule
  ],
  providers: [
    CensysService,
    ShodanService,
    NbSidebarService,
    
  ]
})
export class PagesModule { }

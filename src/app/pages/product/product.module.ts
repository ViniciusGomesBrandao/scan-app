import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { SearchComponent } from './search/search.component';
import { RouterModule, Routes } from '@angular/router';
import { NbInputModule, NbSelectModule, NbButtonModule, NbIconModule } from '@nebular/theme';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: 'search',
        component: SearchComponent
      }
    ]
  }
]
@NgModule({
  declarations: [
    ProductComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    NbInputModule,
    NbButtonModule,
    NbIconModule,
    NbSelectModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }

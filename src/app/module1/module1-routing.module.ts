import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';


const routes: Routes = [
  {  path: '',
  component: Comp1Component },
  {  path: '2',
  component: Comp2Component },
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})

export class Module1RoutingModule { }

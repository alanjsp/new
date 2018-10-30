import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1/comp1.component';
import { Module1RoutingModule } from './module1-routing.module';
import { Comp2Component } from './comp2/comp2.component';

@NgModule({
  imports: [
    CommonModule,
    Module1RoutingModule
  ],
  declarations: [Comp1Component, Comp2Component]
})
export class Module1Module { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes,PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


const routes: Routes = [
  { path: '', loadChildren: './module1/module1.module#Module1Module' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],

  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }


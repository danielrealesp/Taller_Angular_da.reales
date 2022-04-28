import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieModuleComponent } from './serie-module.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SerieModuleComponent],
  exports: [SerieModuleComponent]
})
export class SerieModuleModule { }

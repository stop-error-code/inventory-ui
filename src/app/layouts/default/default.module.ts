import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { MenuComponent } from 'src/app/modules/menu/menu.component';
import { RouterModule } from '@angular/router';
import { ApplicationsComponent } from 'src/app/modules/applications/applications.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
@NgModule({
  declarations: [
    DefaultComponent,
    MenuComponent,
    ApplicationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule

  ]
})
export class DefaultModule { }

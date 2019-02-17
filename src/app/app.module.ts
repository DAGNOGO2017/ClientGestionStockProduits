import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import {produitMockService} from './produit/produit.mock.service';
import { NavabarComponent } from './navabar/navabar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    NavabarComponent,
    SidebarComponent,
    ContentComponent,
    DashboardComponent
  ],
  imports: [  
    BrowserModule,
    AppRoutingModule
  ],
  providers: [produitMockService],
  bootstrap: [AppComponent]
})
export class AppModule { }

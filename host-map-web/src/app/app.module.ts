import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FdSearchBarComponent } from './search-bar/fd-search-bar.component';
import { HostPanelComponent } from './host-panel/host-panel.component';
import {AgmCoreModule} from "@agm/core";
import {environment} from "../environments/environment";
import { MapContainerComponent } from './map-container/map-container.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { MapPageComponent } from './map-page/map-page.component';
import { HistoricoPageComponent } from './historico-page/historico-page.component';
import {RouterModule, Routes} from "@angular/router";


export const rotas : Routes = [
  { path: '', redirectTo: '/map', pathMatch: 'full' },
  { path: 'map', component: MapPageComponent },
  { path: 'map/:dominio', component: MapPageComponent },
  { path: 'historico', component: HistoricoPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FdSearchBarComponent,
    HostPanelComponent,
    MapContainerComponent,
    TopMenuComponent,
    MapPageComponent,
    HistoricoPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rotas, {useHash: true}),
    AgmCoreModule.forRoot({
      apiKey: environment.googleApiKey
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

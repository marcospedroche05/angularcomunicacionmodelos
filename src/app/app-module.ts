import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { ListaproductosComponent } from './components/listaproductos.component/listaproductos.component';
import { appRoutingProvider, routing } from './app.routing';
import { MenuComponent } from './components/menu.component/menu.component';
import { PadrecochesComponent } from './components/padrecoches.component/padrecoches.component';
import { HijococheComponent } from './components/hijocoche.component/hijocoche.component';
import { PadredeporteComponent } from './components/padredeporte.component/padredeporte.component';
import { HijodeporteComponent } from './components/hijodeporte.component/hijodeporte.component';

@NgModule({
  declarations: [
    App,
    ListaproductosComponent,
    MenuComponent,
    PadrecochesComponent,
    HijococheComponent,
    PadredeporteComponent,
    HijodeporteComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    appRoutingProvider
  ],
  bootstrap: [App]
})
export class AppModule { }

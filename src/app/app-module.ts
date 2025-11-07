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
import { ComicComponent } from './components/comic.component/comic.component';
import { LibreriaComponent } from './components/libreria.component/libreria.component';
import { FormsModule } from '@angular/forms';
import { ServiceComics } from './services/service.comics';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    ListaproductosComponent,
    MenuComponent,
    PadrecochesComponent,
    HijococheComponent,
    PadredeporteComponent,
    HijodeporteComponent,
    ComicComponent,
    LibreriaComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
  ],
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    appRoutingProvider,
    ServiceComics
  ],
  bootstrap: [App]
})
export class AppModule { }

import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { ListaproductosComponent } from "./components/listaproductos.component/listaproductos.component";
import { HijococheComponent } from "./components/hijocoche.component/hijocoche.component";
import { PadrecochesComponent } from "./components/padrecoches.component/padrecoches.component";
import { PadredeporteComponent } from "./components/padredeporte.component/padredeporte.component";
import { LibreriaComponent } from "./components/libreria.component/libreria.component";

const appRoutes: Routes = [
    {path: "listaproductos", component: ListaproductosComponent},
    {path: "coches", component: PadrecochesComponent},
    {path: "padredeportes", component: PadredeporteComponent},
    {path: "libreria", component: LibreriaComponent}
]

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> =
RouterModule.forRoot(appRoutes);
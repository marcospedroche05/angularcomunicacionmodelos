import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { ListaproductosComponent } from "./components/listaproductos.component/listaproductos.component";
import { HijococheComponent } from "./components/hijocoche.component/hijocoche.component";
import { PadrecochesComponent } from "./components/padrecoches.component/padrecoches.component";
import { PadredeporteComponent } from "./components/padredeporte.component/padredeporte.component";

const appRoutes: Routes = [
    {path: "listaproductos", component: ListaproductosComponent},
    {path: "coches", component: PadrecochesComponent},
    {path: "padredeportes", component: PadredeporteComponent}
]

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> =
RouterModule.forRoot(appRoutes);
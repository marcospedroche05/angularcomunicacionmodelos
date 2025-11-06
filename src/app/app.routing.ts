import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { ListaproductosComponent } from "./components/listaproductos.component/listaproductos.component";

const appRoutes: Routes = [
    {path: "listaproductos", component: ListaproductosComponent}
]

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> =
RouterModule.forRoot(appRoutes);
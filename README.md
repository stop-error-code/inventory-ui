Inventariop UI

ng new inventario-ui
-agregamos angular routing
-seleccionamos scss
-borrar el contendido de /app/app.component.html
-añadir la linea 
<router-outlet></router-outlet>
-correr
ng add @angular/material
-si y si
npm i highcharts-angular --save
npm i highcharts --save
npm i @angular/flex-layout @angular/cdk --save

-Creamos un componente para definir el layout del sitio
ng g c layout/default
--creamos el modulo
ng g m layouts/default
--creamos la primer pagina
ng g c modules/menu

--Agregar DefaultComponent en default.module,ts
--Agregar menu en default.module.ts
--aggregar en app.routing el children con el path al menu 
--importar en default.module.ts el router module
--modificar default.component.html dejar el router-outlet

--crear los componentes de header/footer/sidebar
ng g c shared/components/sidebar
ng g c shared/components/header
ng g c shared/components/footer
--crear el modulo shared/components/sidebar
ng g m shared  
--crear el componente applications
ng g c modules/applications
--limpier en app.module.ts los componentes creados anteriormente, es una declaracion innecesaria
--añadir el impor del shared module al default
--agregar  tag app-foot/header/sidebar en el html de default
--añadir en el shared module el import y export de los componetes de header/footer/sidebar
--añadir la libreria sidenav de materiar
--generamos un mat-drawer container
--adentro agregamos un madrawer mode=side y agregamos el componente de sidebar dentro
--creamos un mat-drawer-content con el router dentro
--agregamos estilos para el defauilt componente
:host{
  display: flex;
  flex-direction: column;
  height: 100%;
}
mat-drawer{
  width: 350px;
}
mat-drawer-container{
  width: 100%;
}


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './componentes/menu/menu.module';
import { SobreComponent } from './componentes/sobre/sobre.component';

@NgModule({
  declarations: [AppComponent, SobreComponent],
  imports: [BrowserModule, AppRoutingModule, MenuModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { DemoComponent } from "./demo/demo.component";
import { BandeauComponent } from "./bandeau/bandeau.component";
import { AvisComponent } from "./avis/avis.component";
import { CollegueComponent } from "./collegue/collegue.component";
import { ListeColleguesComponent } from "./listeCollegues/listeCollegues.component";

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    BandeauComponent,
    AvisComponent,
    CollegueComponent,
    ListeColleguesComponent
  ],
  imports: [BrowserModule, MDBBootstrapModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
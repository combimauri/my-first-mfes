import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeatureOneModule } from './feature-one/feature-one.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FeatureOneModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './components/auth/auth.component';
import { MainComponent } from './components/main/main.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { AuthenticationService } from './components/shared/services/authentication.service';
import { InterceptorService } from './components/shared/services/interceptor.service';
import { NzInputModule } from 'ng-zorro-antd/input';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NgZorroAntdModule } from './ng-zorro-antd.module';

registerLocaleData(en);
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
  (key) => antDesignIcons[key]
);

@NgModule({
  declarations: [AppComponent, AuthComponent, MainComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
  ],
  providers: [
    {
      provide: NZ_I18N,
      useValue: en_US,
    },
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
    {
      provide: NZ_ICONS,
      useValue: icons,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

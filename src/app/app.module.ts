import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './databinding/databinding.component';
import { HomeComponent } from './home/home.component';
import { ProductsModule } from './products/products.module';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { RouterNotFoundComponent } from './router-not-found/router-not-found.component';
import { GadgetsModule } from './gadgets/gadgets.module';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AuthGuardService } from './auth-guard.service';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'databinding', component: DataBindingComponent },
  { path: 'products/list-products', component: ListProductsComponent },
  { path: 'search', component: SearchComponent , canActivate: [AuthGuardService]},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo:"/home", pathMatch:"full"},
  { path: '**', component: RouterNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataBindingComponent,
    RouterNotFoundComponent,
    SearchComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductsModule,
    GadgetsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

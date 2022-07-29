# AwesomeApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## References

1. Angular : https://angular.io/api
2. Typescript : https://www.typescriptlang.org/docs/handbook/intro.html
3. Reactivex / rxJs : https://reactivex.io/documentation/observable.html 
4. ngRx / redux : https://ngrx.io/guide/store/walkthrough
5. Bootstrap 5 : https://getbootstrap.com/docs/5.0/forms/overview/
6. Angular ag grid : https://www.ag-grid.com/angular-data-grid/getting-started/
7. Angular material : https://material.angular.io/
8. Prime Ng : https://www.primefaces.org/primeng/setup


## Chrome Extensions

1. Redux Dev Tools
2. Angular Dev Tools

## command to build 

1. ng build
2. npm install serve -g [not required if already insalled]
3. cd dist
4. cd awesome app
5. serve .


ng build --source-map-true  [to be able to debug in browser]
ng build --output-hashing=all [no caching on clients machine]

## references

Git Hub : https://github.com/aniljos/Angular-July-2022
Trainer Details : Anil Joesph 9833169784 anil.jos@gmail.com

## adding ng rx
ng add @ngrx/store@latest
ng add @ngrx/store-devtools@latest

or

npm install @ngrx/store --save
npm install @ngrx/store-devtools --save

## addind bootstrap
1. npm install bootstrap@5.1.3
2. adding into style.css at root level : @import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

## used mock service in this project
Git : https://github.com/aniljos/REST-API-Mock

 ## Angular Training



### Commands

1. Install Angular CLI: npm install -g @angular/cli
2. Create Application: ng new awesome-app
3. Start Application: ng serve --open

### Repositories

1. Angular APP: https://github.com/aniljos/Angular-September-20
2. Mock REST API: https://github.com/aniljos/REST-API-Mock

### Angular Version

1. AngularJS (1.x): https://angularjs.org/
2. Angular (> 2.x): https://angular.io/

### Tool Chain

1. Integrates multiple tools and libraries which assist in the build, testing and deploy


### .npmrc

1. Configure the proxy setting
2. Custom repository

### Types of Modules

1. ES6 Module
2. Angular Modules

### Angular Modules

1. Bootstrap Module- One per application
2. Modules provided by Angular
3. Lirary: 3rd Party Modules

### Decorator

1. ES6 Feature
2. Metadata
3. Similar Annotations or Attributes
   
### Template

1. Template is compiled and converted a View
2. In Angular 1.x this compilation happen in the browser
3. Angular 2 onwards has the AOT Compilation
4. Angular 8 introduced the Ivy compiler

### Async

1. Callbacks
2. Promises
3. Observables(RxJs)--Reactive

### Change Detection

1. Angular observes all the elements & objects that are part of the data-binding
2. Whenever a change is detected, Angular refresh/redener the UI
3. Zone.js is used for the change detection

### Observable

1. Observable Stream
2. Lazy -- need to call the subscribe
3. Unicast -- only one subscriber

### Subject(RxJS)

1. Its an observable
2. Multicast --  multiple subscriber
3. BehaviouralSubject -- Initial value
4. ReplaySubject -- has a buffer, replay the values to the new subscribers

### Single-Page Application

1. There is only one page(index.html) 
2. Page had renders views(components)
3. Navigation is between the views(component)

### Router Modules & Routes 

1. Navigation between routes
2. Manages the history
3. Child Routes
4. Lazy-loading of modules
5. Router Guards: Implemented as service
6. Navigation events


### State

1. Memory: Services(singleton)  ==> Subjects for reactive
2. Memory: Redux(ngRx)
3. Local Persistent: LocalStorage/SessionStorage ==> encrypt
4. Server Persistent: Backend
   

### Custom Form Validators

1. Validators(client) and AsyncValidators(async client & server)
2. Validator: ValidatorFn
3. AsyncValidato: AsyncValidatorFn
4. Reactive Forms: Validators are functions, AsyncValidators(server) are services
5. Templated Form : Validators are directive, AsyncValidators(server) are services & directive


### HttpClient

1. Interceptors - Intercept the request before the server call, Intercep the response before we prosess it.
2. Defined as Service 

### Change Detection onPush

1. Always use model/data-binding on immutable objects
2. onPush with immutable objects will give a better performace
   
### Sever-side rendering

1. Faster App load(First page or any routable page)
2. Optimizes for SEO
3. Angular Universal

### Mocks

1. Http -- HttpTestingController
2. Jasmine -- spyOn methods
3. Mock Libraries

   
 
 
 


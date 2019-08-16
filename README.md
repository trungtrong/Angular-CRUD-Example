# Configure Datepicker using ngx-bootstrap and bootstrap 

>1. Bootstrap v3.4.0
>2. ngx-bootstrap v5.1.1

# Step by step Install:
>1. Install ngx-bootstrap:
* npm install ngx-bootstrap --save

>2. Adding to your application:
* In app.module.ts:
<pre> import { BrowserAnimationsModule } from '@angular/ platform-browser/animations';
 import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

 @NgModule({
    imports: [
      BrowserAnimationsModule,
      BsDatepickerModule.forRoot()
    ] </pre>

* In angular.json:
<pre>
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "node_modules/ngx-bootstrap/datepicker/bs-datepicker.css",
  "src/styles.css"
] </pre>

> Please read the Documentation about ngx-bootstrap:
<p><a>https://valor-software.com/ngx-bootstrap/#/datepicker</a></p>

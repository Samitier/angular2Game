import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

declare function require(name:string);
require("../styles/index.less");

platformBrowserDynamic().bootstrapModule(AppModule);


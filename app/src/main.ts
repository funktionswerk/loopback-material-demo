import 'zone.js';
import 'reflect-metadata';
import 'hammerjs';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

require('./main.styl');

platformBrowserDynamic().bootstrapModule(AppModule);
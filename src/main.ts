import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { APP_CONFIG } from '@env/environment';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/yaml/yaml';
import 'codemirror/mode/sass/sass';
import 'codemirror/mode/css/css';
import 'codemirror/mode/python/python';
import 'codemirror/mode/shell/shell';
import 'codemirror/mode/asciiarmor/asciiarmor';
import 'codemirror/mode/properties/properties';
import 'codemirror/mode/htmlmixed/htmlmixed';
if (APP_CONFIG.production) {
  enableProdMode();
}

function bootstrap() {
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
};


if (document.readyState === 'complete') {
  bootstrap();
} else {
  document.addEventListener('DOMContentLoaded', bootstrap);
}


import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from './app/app.server.module';
export { renderModule, renderModuleFactory } from '@angular/platform-server';
/Users/christine/Downloads/myangularapp/myangularapp2/src/main.ts/Users/christine/Downloads/myangularapp/myangularapp2/src/main.ts
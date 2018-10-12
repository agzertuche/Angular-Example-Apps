import { NgModule } from '@angular/core';

import { EllipsisPipe } from './ellipsis.pipe';

export const PIPES = [EllipsisPipe];

@NgModule({
  declarations: PIPES,
  exports: PIPES,
})
export class PipesModule {}

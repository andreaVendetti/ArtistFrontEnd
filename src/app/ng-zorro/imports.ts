import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule, NzFormItemComponent } from 'ng-zorro-antd/form';
import { NzInputModule, NzInputWrapperComponent } from 'ng-zorro-antd/input';
import { ɵNzTransitionPatchDirective } from "ng-zorro-antd/core/transition-patch";
import { NzColDirective } from "ng-zorro-antd/grid";
import { NzIconModule } from 'ng-zorro-antd/icon';

export const NZ_LOGIN_MODULES = [
  NzFormModule,
  NzInputModule,
  NzButtonModule,
  NzIconModule
];


export const NZ_OPERE_INSERT_MODULES = [
  NzFormModule,
  NzInputModule,
  NzButtonModule
];


export const NZ_OPERE_LIST_MODULES = [ 
  NzInputModule,  
  NzIconModule
];
import { NgModule        } from '@angular/core';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule       }  from 'primeng/button';
import { FieldsetModule     } from 'primeng/fieldset';
import { ImageModule        } from 'primeng/image';
import { InputTextModule    }  from 'primeng/inputtext';
import { MenubarModule      }  from 'primeng/menubar';
import { MultiSelectModule  } from 'primeng/multiselect';
import { TableModule        } from 'primeng/table';
import { ToolbarModule      } from 'primeng/toolbar';



@NgModule({
  declarations: [],
  imports: [],
  exports:[
    AutoCompleteModule,
    ButtonModule,
    FieldsetModule,
    InputTextModule,
    ImageModule,
    MenubarModule,
    MultiSelectModule,
    TableModule,
    ToolbarModule
  ]
})
export class PrimeNgModule { }

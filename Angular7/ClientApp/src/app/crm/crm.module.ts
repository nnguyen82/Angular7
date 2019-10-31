import { NgModule }       from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrmRoutingModule } from '../crm/crm-routing.module';
import { CrmChildComponent } from '../crm/crmchild/crm.child.component';

@NgModule({
  imports: [
        CommonModule,
        CrmRoutingModule
  ],
  declarations: [
      CrmChildComponent
  ]
})
export class CRMModule {}

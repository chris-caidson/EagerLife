import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisionBoardPage } from './vision-board';

@NgModule({
  declarations: [
    VisionBoardPage,
  ],
  imports: [
    IonicPageModule.forChild(VisionBoardPage),
  ],
})
export class VisionBoardPageModule {}

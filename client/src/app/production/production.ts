import { Component } from '@angular/core';

@Component({
  selector: 'app-production',
  imports: [],
  templateUrl: './production.html',
  styleUrl: './production.css',
})
export class gpt_lesson {
  factoryName = 'Factory 4.0';
  //---------------------------------------------------------
  machines = [
    { id: 1, name: 'Laser Cutter' },
    { id: 2, name: '3D Printer' },
    { id: 3, name: 'Assembler' }
  ];
  
  showMachines = true;
  //---------------------------------------------------------

}

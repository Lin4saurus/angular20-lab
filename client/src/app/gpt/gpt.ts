import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-gpt',
  imports: [],
  templateUrl: './gpt.html',
  styleUrl: './gpt.css',
})
export class gpt_lesson {
//2-variables--------------------------------------------------------
  factoryName = 'Fábrica Central';
  isActive = true;
  widthSize = 200;

//3-event binding w increase--------------------------------------------------------
  counter = 0;
  increase1() {
    this.counter++;
  }

//4n-Nuevo Control Flow (@if, @for)--------------------------------------------------------

  machines = [
    { id: 1, name: 'Laser Cutter' },
    { id: 2, name: '3D Printer' },
    { id: 3, name: 'Assembler' }
  ];
  
  showMachines = true;

  //--4-signals------------------------------------------------------
  production = signal(0);

  doubleProduction = computed(() => this.production() * 2);

  increase2() {
    this.production.update(value => value + 1);
 }
 //---------------------------------------------------------

}

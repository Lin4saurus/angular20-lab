import { Routes } from '@angular/router';
import { gpt_lesson } from './gpt/gpt';
import { Home } from './home/home';
import { Qwen } from './qwen/qwen';


export const routes: Routes = [
    { path: '', component: Home },  
    { path: 'Home', component: Home },  
    { path: 'gpt_lesson', component: gpt_lesson },
    { path: 'Qwen', component: Qwen },
];

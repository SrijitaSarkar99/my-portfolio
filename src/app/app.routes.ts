import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { SideQuests } from './pages/side-quests/side-quests';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'side-quests',
        component: SideQuests
    }
];

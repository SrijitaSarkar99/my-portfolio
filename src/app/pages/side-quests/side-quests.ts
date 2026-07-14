import { Component } from '@angular/core';

type Artwork = {
  title: string;
  category: string;
  image: string;
};

@Component({
  selector: 'app-side-quests',
  imports: [],
  templateUrl: './side-quests.html',
  styleUrl: './side-quests.scss',
})
export class SideQuests {
  protected readonly artworks: Artwork[] = [
    { title: 'Granny square blanket', category: 'Crochet', image: 'images/placeholder.png' },
    { title: 'Amigurumi bear', category: 'Crochet', image: 'images/placeholder.png' },
    { title: 'Sunset landscape', category: 'Painting', image: 'images/placeholder.png' },
    { title: 'Still life study', category: 'Painting', image: 'images/placeholder.png' },
    { title: 'Clay bust', category: 'Sculpture', image: 'images/placeholder.png' },
    { title: 'Abstract form', category: 'Sculpture', image: 'images/placeholder.png' },
  ];
}

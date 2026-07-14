import { Component } from '@angular/core';

type ProjectEntry = {
  name: string;
  description: string;
  tech: string;
  image: string;
  link?: string;
};

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected projectEntries: ProjectEntry[] = [
    {
      name: 'Project One',
      description: 'A short description of what this project does and the problem it solves.',
      tech: 'Angular, TypeScript',
      image: 'images/placeholder.png',
      link: 'https://github.com/SrijitaSarkar99',
    },
    {
      name: 'Project Two',
      description: 'A short description of what this project does and the problem it solves.',
      tech: 'Node.js, PostgreSQL',
      image: 'images/placeholder.png',
      link: 'https://github.com/SrijitaSarkar99',
    },
  ];
}

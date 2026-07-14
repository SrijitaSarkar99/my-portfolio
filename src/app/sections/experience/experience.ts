import { Component } from '@angular/core';

type ExperienceEntry = {
  role: string;
  company: string;
  year: string;
  description?: string;
};

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  protected experienceEntries: ExperienceEntry[] = [
    {
      role: 'Software Engineer',
      company: 'Your Company',
      year: '2024 – Present',
      description: 'Briefly describe what you build, the stack you use, and your impact.',
    },
    {
      role: 'Software Engineer Intern',
      company: 'Previous Company',
      year: '2023',
      description: 'A one-line summary of what you worked on and what you learned.',
    },
  ];
}

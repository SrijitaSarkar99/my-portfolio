import { Component } from '@angular/core';

type EducationEntry = {
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  protected educationEntries: EducationEntry[] = [
    {
      degree: 'Master of Computer Applications',
      institution: 'National Institute of Technology, Suratkal',
      year: '2024',
      description: 'I learned about the fundamentals computer applications and how to apply them to real-world problems.',
    },
    {
      degree: 'B.Sc. (Hons.) in Computer Science',
      institution: 'Scottish Church College, Calcutta University',
      year: '2020',
      description: 'I learned about the fundamentals of computer science and how to apply them to real-world problems.',
    },
  ];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})

export class Projects {
projects = [
  { name: 'Plot in Vijay Nagar', description: '1000 sq ft plot in prime location', image: 'assets/plot1.jpg' },
  { name: '2BHK in Palasia', description: 'Luxury apartment with amenities', image: 'assets/flat1.jpg' },
  { name: 'Commercial Shop', description: '200 sq ft space on AB Road', image: 'assets/shop1.jpg' },
];

}

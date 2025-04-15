import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-planes',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './planes.component.html',
  styleUrl: './planes.component.css'
})
export default class PlanesComponent {

}

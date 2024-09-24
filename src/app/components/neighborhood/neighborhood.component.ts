import { Component, Input } from '@angular/core';
import { Neighborhood } from 'app/core/models/neighborhood';

@Component({
  selector: 'app-neighborhood',
  standalone: true,
  imports: [],
  templateUrl: './neighborhood.component.html',
  styleUrl: './neighborhood.component.scss'
})

export class NeighborhoodComponent {
  @Input() public neighborhood!: Neighborhood;
}

import { Component, Input } from '@angular/core';
import { Driver } from 'app/core/models/driver';

@Component({
  selector: 'app-driver',
  standalone: true,
  imports: [],
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.scss'
})


export class DriverComponent {
  @Input() public driver!: Driver;
}

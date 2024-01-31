import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  activatedRoute = inject(ActivatedRoute);

  userId: string | null;

  getUserId() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.userId = params.get('userId');  
    });
  }

  constructor() {
    this.userId = "";
    this.getUserId();  
  }
}

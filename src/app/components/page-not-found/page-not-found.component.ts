import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';

import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
 
@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [RouterModule, MatIconModule, MatCardModule, MatButtonModule],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {

}

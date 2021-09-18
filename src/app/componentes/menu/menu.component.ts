import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.menuCollapse();
  }

  menuCollapse() {
    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    console.log('passei aqui');
    if (sidebarToggle) {
      // Uncomment Below to persist sidebar toggle between refreshes
      if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        document.body.classList.toggle('sb-sidenav-toggled');
        console.log('passei aqui');
      }
      console.log('passei aqui');
      sidebarToggle.addEventListener('click', (event) => {
        event.preventDefault();
        document.body.classList.toggle('sb-sidenav-toggled');
        localStorage.setItem(
          'sb|sidebar-toggle',
          String(document.body.classList.contains('sb-sidenav-toggled'))
        );
      });
    }
  }
}

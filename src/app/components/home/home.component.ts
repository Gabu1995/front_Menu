import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', command: () => this.scrollToSection('home') },
      { label: 'Quienes Somos', icon: 'pi pi-fw pi-info', command: () => this.scrollToSection('about') },
      { label: 'Misión', icon: 'pi pi-fw pi-flag', command: () => this.scrollToSection('mission') },
      { label: 'Visión', icon: 'pi pi-fw pi-eye', command: () => this.scrollToSection('vision') },
    ];
  }

  scrollToSection(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

}

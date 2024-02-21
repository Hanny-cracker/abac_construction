import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public getScreenWidth: any;
  navStyle = "";
  slideStyle = '';
  showSidebar() {
   if(this.getScreenWidth <400){
     this.navStyle = 'width:100%';
     this.slideStyle = 'display : block';
   }else{
     this.navStyle = ' width:250px';
   this.slideStyle = 'display : block';
 }
   
   
 }
 hideSidebar(){
  //  this.slideStyle = 'display : none'
   this.navStyle = 'width:0%;'; 
 }

 @HostListener('window:resize', ['$event'])
 onWindowResize() {
   this.getScreenWidth = window.innerWidth;
   if(this.getScreenWidth > 800 ){
       this.navStyle = 'none';
     }
 }
}

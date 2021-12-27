import {Component, OnInit, Input, HostListener} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() isOpenSideBar = false;
  isScrolling: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  @HostListener('window:scroll', ['$event'] ) onScroll() {
    window.scrollY > 90 ? this.isScrolling = true : this.isScrolling = false;
  }

}

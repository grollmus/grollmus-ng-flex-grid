import { Component, Directive, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Directive({
  selector: 'a',
  standalone: true,
})
export class LinkStyleDirective {
  @HostBinding('class')
  elementClass =
    'px-7 py-3 rounded-md bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 transition-all hover:scale-110 ease-in-out duration-300 text-white text-3xl font-black';
}

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule, LinkStyleDirective],
  templateUrl: './index.page.html',
  styleUrl: './index.page.css',
})
export class IndexPage {}

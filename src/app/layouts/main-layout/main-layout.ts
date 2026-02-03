import { Component } from '@angular/core';
import { RouterOutlet } from "../../../../node_modules/@angular/router/types/_router_module-chunk";
import { Header } from '../../shared/header/header';
import { Sidebar } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Header, Sidebar],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {

}

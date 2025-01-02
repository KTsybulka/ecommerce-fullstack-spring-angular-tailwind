import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaConfig, FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fontAwsomeIcons } from './shared/font-awesome-icons';
import { NavbarComponentComponent } from "./layout/navbar/navbar.component";
import { FooterComponentComponent } from "./layout/footer/footer.component";

@Component({
  imports: [RouterModule, FontAwesomeModule, NavbarComponentComponent, FooterComponentComponent],
  selector: 'ecom-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
  private faIconLibrary = inject(FaIconLibrary); // Inject FontAwesome library
  private faConfig = inject(FaConfig); // Inject FontAwesome config

  ngOnInit(): void {
    this.initFontAwesome(); // Initialize FontAwesome
  }

  private initFontAwesome(): void {
    this.faConfig.defaultPrefix = 'far'; // Set the default prefix for icons
    this.faIconLibrary.addIcons(...fontAwsomeIcons); // Add your icons
  }
}

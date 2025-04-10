import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="min-h-screen flex flex-col">
      <!-- Header -->
      <header class="bg-primary text-white p-4 shadow-md">
        <div class="container mx-auto flex justify-between items-center">
          <h1 class="text-2xl font-bold">TadaKids</h1>
          <nav>
            <ul class="flex space-x-6">
              <li><a href="#" class="hover:text-accent transition">Home</a></li>
              <li><a href="#" class="hover:text-accent transition">Products</a></li>
              <li><a href="#" class="hover:text-accent transition">About</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <!-- Main Content -->
      <main class="flex-grow container mx-auto p-4">
        <router-outlet></router-outlet>
      </main>

      <!-- Footer -->
      <footer class="bg-secondary text-white p-4">
        <div class="container mx-auto text-center">
          <p>© 2023 TadaKids - Fun for everyone!</p>
        </div>
      </footer>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'tada-kids';
}

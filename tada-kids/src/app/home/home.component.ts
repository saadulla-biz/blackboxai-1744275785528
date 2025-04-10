import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <!-- Hero Section -->
      <section class="bg-blue-500 text-white p-4">
        <div class="container mx-auto text-center">
          <h1 class="text-4xl font-bold">Welcome to TadaKids!</h1>
          <p>Discover fun and educational toys</p>
          <button class="bg-white text-blue-500 p-2 rounded">
            Shop Now
          </button>
        </div>
      </section>

      <!-- Featured Products -->
      <section class="p-4">
        <div class="container mx-auto">
          <h2 class="text-2xl font-bold text-center">Our Toys</h2>
          <div class="grid grid-cols-1 gap-4">
            <div *ngFor="let item of products" class="bg-white p-4 rounded shadow">
              <h3 class="text-xl font-bold">{{item.name}}</h3>
              <p class="text-gray-600">{{item.price}}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: []
})
export class HomeComponent {
  products = [
    {
      name: 'Building Blocks',
      price: 24.99
    },
    {
      name: 'Puzzle Set',
      price: 19.99
    }
  ];
}

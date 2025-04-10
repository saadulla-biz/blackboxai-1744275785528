import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-gradient-to-b from-yellow-50 to-pink-50">
      <!-- Hero Section -->
      <section class="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8">
        <div class="container mx-auto text-center">
          <h1 class="text-5xl font-bold mb-4 animate-bounce">
            Welcome to <span class="text-yellow-300">TadaKids!</span> 🎉
          </h1>
          <p class="text-xl mb-6">Where learning meets fun!</p>
          <button class="bg-yellow-300 hover:bg-yellow-400 text-purple-800 font-bold py-3 px-6 rounded-full text-lg transition-all transform hover:scale-105">
            Let's Play! <i class="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </section>

      <!-- Featured Products -->
      <section class="py-8 px-4">
        <div class="container mx-auto">
          <h2 class="text-3xl font-bold text-center mb-8 text-purple-700">
            <i class="fas fa-star mr-2"></i> Our Awesome Toys <i class="fas fa-star ml-2"></i>
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div *ngFor="let item of products" class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div class="text-4xl text-center mb-4 text-pink-500">
                <i [class]="item.icon"></i>
              </div>
              <h3 class="text-xl font-bold text-center mb-2 text-purple-600">{{item.name}}</h3>
              <p class="text-center text-gray-600 mb-4">{{item.description}}</p>
              <div class="text-center text-2xl font-bold text-pink-500">{{item.price}}</div>
              <button class="mt-4 w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-full transition-colors">
                Add to Cart <i class="fas fa-cart-plus ml-2"></i>
              </button>
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
      description: 'Creative construction fun!',
      price: '$24.99',
      icon: 'fas fa-cubes'
    },
    {
      name: 'Puzzle Set',
      description: 'Brain-teasing challenges',
      price: '$19.99',
      icon: 'fas fa-puzzle-piece'
    },
    {
      name: 'Art Kit',
      description: 'Colorful creativity',
      price: '$29.99',
      icon: 'fas fa-paint-brush'
    }
  ];
}

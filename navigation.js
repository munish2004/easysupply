export function renderNavigation() {
  return `
    <header class="fixed w-full bg-white/95 shadow-sm backdrop-blur-sm z-50 transition-all duration-300">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <div class="flex items-center">
            <a href="#" class="flex items-center">
              <span class="text-primary text-2xl font-bold">Easy<span class="text-secondary">Supply</span></span>
            </a>
          </div>
          
          <!-- Desktop Navigation -->
          <nav class="hidden md:flex space-x-8">
            <a href="#" class="nav-link">Home</a>
            <a href="#services" class="nav-link">Services</a>
            <a href="#about" class="nav-link">About</a>
            <a href="#contact" class="nav-link">Contact</a>
          </nav>
          
          <!-- Mobile menu button -->
          <button id="menu-toggle" class="md:hidden flex items-center">
            <i class="fas fa-bars text-gray-700 text-xl"></i>
          </button>
        </div>
        
        <!-- Mobile Navigation -->
        <div id="mobile-menu" class="md:hidden hidden pb-4 border-t border-gray-200 mt-2">
          <div class="flex flex-col space-y-3 pt-3">
            <a href="#" class="mobile-nav-link">Home</a>
            <a href="#services" class="mobile-nav-link">Services</a>
            <a href="#about" class="mobile-nav-link">About</a>
            <a href="#contact" class="mobile-nav-link">Contact</a>
          </div>
        </div>
      </div>
    </header>
  `;
}
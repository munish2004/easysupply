export function renderFooter() {
  const currentYear = new Date().getFullYear();
  
  return `
    <footer class="bg-gray-900 text-white pt-16 pb-8">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          <div>
            <a href="#" class="inline-block mb-6">
              <span class="text-white text-2xl font-bold">Easy<span class="text-secondary">Supply</span></span>
            </a>
            <p class="text-gray-400 mb-6">
              Streamlining supply solutions for retirement homes across Canada.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <i class="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-6">Quick Links</h3>
            <ul class="space-y-3">
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" class="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" class="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" class="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-6">Contact Info</h3>
            <ul class="space-y-4">
              <li class="flex items-start">
                <i class="fas fa-envelope text-secondary mr-3 mt-1"></i>
                <span class="text-gray-400">info@easysupply.ca</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-phone text-secondary mr-3 mt-1"></i>
                <span class="text-gray-400"> 800-coming-soon</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-800 pt-8 mt-8">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <p class="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; ${currentYear} EasySupply. All rights reserved.
            </p>
            <div class="flex space-x-6">
              <a href="#" class="text-gray-500 text-sm hover:text-gray-400 transition-colors">Privacy Policy</a>
              <a href="#" class="text-gray-500 text-sm hover:text-gray-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;
}
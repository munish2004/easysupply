export function renderHero() {
  return `
    <section class="relative bg-gradient-to-r from-primary to-primary-dark text-white pt-28 pb-20 overflow-hidden">
      <div class="absolute inset-0 bg-pattern opacity-10"></div>
      <div 
        class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        data-aos="fade-up"
      >
        <div class="text-center max-w-3xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Streamlined Supply Solutions for Retirement Homes
          </h1>
          <p class="text-lg md:text-xl opacity-90 mb-8">
            EasySupply delivers reliable distribution services tailored specifically for retirement communities across Canada.
          </p>
          <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#services" 
              class="btn-primary text-center"
            >
              <i class="fas fa-box-open mr-2"></i> Our Services
            </a>
            <a 
              href="#contact" 
              class="btn-secondary text-center"
            >
              <i class="fas fa-envelope mr-2"></i> Contact Us
            </a>
          </div>
        </div>
      </div>
      
      <!-- Features highlight -->
      <div class="container mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div 
            class="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg"
            data-aos="fade-up" 
            data-aos-delay="100"
          >
            <div class="inline-block p-3 bg-white/20 rounded-full mb-4">
              <i class="fas fa-truck text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2">Reliable Delivery</h3>
            <p class="opacity-80">Consistent, on-time delivery schedules you can depend on.</p>
          </div>
          
          <div 
            class="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            <div class="inline-block p-3 bg-white/20 rounded-full mb-4">
              <i class="fas fa-boxes-stacked text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2">Quality Products</h3>
            <p class="opacity-80">Premium supplies that meet the needs of retirement communities.</p>
          </div>
          
          <div 
            class="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg"
            data-aos="fade-up" 
            data-aos-delay="300"
          >
            <div class="inline-block p-3 bg-white/20 rounded-full mb-4">
              <i class="fas fa-headset text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2">Dedicated Support</h3>
            <p class="opacity-80">Personalized service from our experienced team.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
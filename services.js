export function renderServices() {
  return `
    <section id="services" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Our Distribution Services</h2>
          <p class="text-lg text-gray-600">
            We provide comprehensive supply solutions designed specifically for the unique needs of retirement homes.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Service 1 -->
          <div 
            class="bg-white rounded-xl shadow-md p-6 transition-transform hover:shadow-lg hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <i class="fas fa-heartbeat text-primary text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Medical Supplies</h3>
            <p class="text-gray-600 mb-4">
              Essential medical products, including PPE, sanitizers, and basic healthcare items tailored for retirement home needs.
            </p>
            <a href="#contact" class="text-primary font-medium flex items-center hover:text-primary-dark">
              Learn More <i class="fas fa-arrow-right ml-2 text-sm"></i>
            </a>
          </div>
          
          <!-- Service 2 -->
          <div 
            class="bg-white rounded-xl shadow-md p-6 transition-transform hover:shadow-lg hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <i class="fas fa-utensils text-primary text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Dining & Nutrition</h3>
            <p class="text-gray-600 mb-4">
              Food service supplies, specialized dietary products, and kitchen equipment for retirement home dining services.
            </p>
            <a href="#contact" class="text-primary font-medium flex items-center hover:text-primary-dark">
              Learn More <i class="fas fa-arrow-right ml-2 text-sm"></i>
            </a>
          </div>
          
          <!-- Service 3 -->
          <div 
            class="bg-white rounded-xl shadow-md p-6 transition-transform hover:shadow-lg hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <i class="fas fa-broom text-primary text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Facility Maintenance</h3>
            <p class="text-gray-600 mb-4">
              Cleaning products, housekeeping supplies, and maintenance equipment to keep retirement facilities safe and pristine.
            </p>
            <a href="#contact" class="text-primary font-medium flex items-center hover:text-primary-dark">
              Learn More <i class="fas fa-arrow-right ml-2 text-sm"></i>
            </a>
          </div>
          
          <!-- Service 4 -->
          <div 
            class="bg-white rounded-xl shadow-md p-6 transition-transform hover:shadow-lg hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <i class="fas fa-gamepad text-primary text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Activity & Recreation</h3>
            <p class="text-gray-600 mb-4">
              Games, craft materials, and recreational equipment to enhance the quality of life for retirement home residents.
            </p>
            <a href="#contact" class="text-primary font-medium flex items-center hover:text-primary-dark">
              Learn More <i class="fas fa-arrow-right ml-2 text-sm"></i>
            </a>
          </div>
          
          <!-- Service 5 -->
          <div 
            class="bg-white rounded-xl shadow-md p-6 transition-transform hover:shadow-lg hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <i class="fas fa-couch text-primary text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Furniture & Decor</h3>
            <p class="text-gray-600 mb-4">
              Specialized furniture, accessibility equipment, and decor items designed for senior comfort and safety.
            </p>
            <a href="#contact" class="text-primary font-medium flex items-center hover:text-primary-dark">
              Learn More <i class="fas fa-arrow-right ml-2 text-sm"></i>
            </a>
          </div>
          
          <!-- Service 6 -->
          <div 
            class="bg-white rounded-xl shadow-md p-6 transition-transform hover:shadow-lg hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <i class="fas fa-tablet-alt text-primary text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Technology Solutions</h3>
            <p class="text-gray-600 mb-4">
              Senior-friendly technology, communication devices, and monitoring systems to enhance care quality.
            </p>
            <a href="#contact" class="text-primary font-medium flex items-center hover:text-primary-dark">
              Learn More <i class="fas fa-arrow-right ml-2 text-sm"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}

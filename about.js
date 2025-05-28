export function renderAbout() {
  return `
    <section id="about" class="py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row items-center">
          <div 
            class="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0"
            data-aos="fade-right"
          >
            <h2 class="text-3xl md:text-4xl font-bold mb-6">About EasySupply</h2>
            <p class="text-lg text-gray-600 mb-6">
              EasySupply is a Canadian company dedicated to simplifying the supply chain for retirement homes across the country. Founded with a vision to address the unique challenges faced by senior care facilities, we provide reliable distribution services tailored specifically to this sector.
            </p>
            <p class="text-lg text-gray-600 mb-6">
              Our team brings experience in services and logistics sectors and we pride ourselves on delivering quality products with exceptional service.
            </p>
            <div class="grid grid-cols-2 gap-6 mt-8">
              <div class="flex items-start">
                <div class="flex-shrink-0 mr-3">
                  <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <i class="fas fa-handshake text-primary text-xl"></i>
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">Our Mission</h3>
                  <p class="text-gray-600">To streamline supply logistics for retirement homes, enabling them to focus on what matters most—resident care.</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="flex-shrink-0 mr-3">
                  <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <i class="fas fa-snowflake text-primary text-xl"></i>
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">Canadian Roots</h3>
                  <p class="text-gray-600">Proudly Canadian-owned and operated, serving retirement communities across all provinces.</p>
                </div>
              </div>
            </div>
          </div>
          <div 
            class="lg:w-1/2"
            data-aos="fade-left"
          >
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-4">
                <div class="rounded-xl overflow-hidden shadow-lg h-64">
                  <img 
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" 
                    alt="Team collaboration" 
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="rounded-xl overflow-hidden shadow-lg h-40">
                  <img 
                    src="https://images.pexels.com/photos/3744724/pexels-photo-3744724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Canadian landscape" 
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div class="space-y-4 mt-6">
                <div class="rounded-xl overflow-hidden shadow-lg h-40">
                  <img 
                    src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Warehouse operations" 
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="rounded-xl overflow-hidden shadow-lg h-64">
                  <img 
                    src="https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" 
                    alt="Senior care" 
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Why Choose Us -->
        <div class="mt-20">
          <div 
            class="text-center max-w-3xl mx-auto mb-12"
            data-aos="fade-up"
          >
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Why Choose EasySupply?</h2>
            <p class="text-lg text-gray-600">
              We understand the unique challenges of retirement home supply management.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div 
              class="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <i class="fas fa-clock text-primary text-2xl"></i>
              </div>
              <h3 class="text-xl font-semibold mb-3">Timely Delivery</h3>
              <p class="text-gray-600">
                Consistent delivery schedules you can rely on, helping you maintain optimal inventory levels.
              </p>
            </div>
            
            <div 
              class="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <i class="fas fa-tags text-primary text-2xl"></i>
              </div>
              <h3 class="text-xl font-semibold mb-3">Competitive Pricing</h3>
              <p class="text-gray-600">
                Volume-based discounts and efficient logistics allow us to offer fair, transparent pricing.
              </p>
            </div>
            
            <div 
              class="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <i class="fas fa-check-circle text-primary text-2xl"></i>
              </div>
              <h3 class="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p class="text-gray-600">
                We carefully vet all products to ensure they meet the specific needs of senior care facilities.
              </p>
            </div>
            
            <div 
              class="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div class="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <i class="fas fa-user-friends text-primary text-2xl"></i>
              </div>
              <h3 class="text-xl font-semibold mb-3">Dedicated Support</h3>
              <p class="text-gray-600">
                Your facility is assigned a dedicated account manager who understands your specific needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
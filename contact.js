export function renderContact() {
  return `
    <section id="contact" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          class="text-center max-w-3xl mx-auto mb-16"
          data-aos="fade-up"
        >
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p class="text-lg text-gray-600">
            Ready to streamline your retirement home supply chain? Get in touch with our team today.
          </p>
        </div>
        
        <div class="flex flex-col lg:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
          <div 
            class="lg:w-1/2 p-10 lg:p-16 bg-primary text-white"
            data-aos="fade-right"
          >
            <h3 class="text-2xl font-semibold mb-6">Get In Touch</h3>
            <p class="mb-8 opacity-90">
              We're here to answer any questions you have about our services. Reach out to us and we'll respond as soon as we can.
            </p>
            
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <i class="fas fa-map-marker-alt text-xl mr-4"></i>
                </div>
                <div>
                  <h4 class="text-lg font-medium mb-1">Address</h4>
                  <p class="opacity-90">Greater Toronto Area, Ontario Canada</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <i class="fas fa-envelope text-xl mr-4"></i>
                </div>
                <div>
                  <h4 class="text-lg font-medium mb-1">Email</h4>
                  <p class="opacity-90">info@easysupply.ca</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <i class="fas fa-phone text-xl mr-4"></i>
                </div>
                <div>
                  <h4 class="text-lg font-medium mb-1">Phone</h4>
                  <p class="opacity-90">800-coming-soon</p>
                </div>
              </div>
            </div>
            
            <div class="mt-10">
              <h4 class="text-lg font-medium mb-4">Follow Us</h4>
              <div class="flex space-x-4">
                <a href="#" class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#" class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div 
            class="lg:w-1/2 p-10 lg:p-16"
            data-aos="fade-left"
          >
            <h3 class="text-2xl font-semibold mb-6">Send Us a Message</h3>
            <form id="contact-form" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label for="facility" class="block text-sm font-medium text-gray-700 mb-1">Facility Name</label>
                <input 
                  type="text" 
                  id="facility" 
                  name="facility" 
                  required 
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="Your retirement home name"
                />
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="(123) 456-7890"
                />
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  required 
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="Tell us about your supply needs..."
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  class="w-full py-3 px-6 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}
import React from 'react'
// import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

function Profile() {
  return (
    // <h1>Profile</h1>
  
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="font-bold text-xl text-gray-900">Logo</div>
          <div className="space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Services</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <div className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
              <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block">Welcome to Our</span>
                    <span className="block text-blue-600">Modern Website</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Transform your digital presence with our cutting-edge solutions. We help businesses grow and succeed in the digital age.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                        Get Started
                        {/* <ArrowRight className="ml-2 h-5 w-5" /> */}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900">Professional Design</h3>
                <p className="mt-2 text-gray-500">Clean and modern designs that make your brand stand out from the competition.</p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900">Responsive Layout</h3>
                <p className="mt-2 text-gray-500">Websites that look great on all devices, from mobile phones to desktop computers.</p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900">Fast Performance</h3>
                <p className="mt-2 text-gray-500">Optimized for speed to ensure the best possible user experience.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
              <p className="mt-4 text-gray-500">Get in touch with our team</p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="flex items-center justify-center">
                {/* <Phone className="h-6 w-6 text-blue-600" /> */}
                <span className="ml-3 text-gray-500">(555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center">
                {/* <Mail className="h-6 w-6 text-blue-600" /> */}
                <span className="ml-3 text-gray-500">info@example.com</span>
              </div>
              <div className="flex items-center justify-center">
                {/* <MapPin className="h-6 w-6 text-blue-600" /> */}
                <span className="ml-3 text-gray-500">123 Main St, City</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};



export default Profile
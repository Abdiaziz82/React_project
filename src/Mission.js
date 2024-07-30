import React from 'react'
// import image from './image copy.png';
function Mission() {
  return (
    <div>

<section style={{paddingTop:'190px'}}  class="bg-gray-100">
    <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div class="max-w-lg">
                <h2   class="about  text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
                <p class=" hub mt-4 text-gray-600 text-lg">
                HealthHub is an innovative application designed to seamlessly connect users with nearby hospitals while promoting accessibility improvements. Users can quickly locate medical facilities in their vicinity, view detailed information on accessibility features, and make informed decisions based on real-time ratings and reviews. For hospital owners, HealthHub offers a platform to update and showcase their accessibility features, track improvements, and engage with the community. This dual-focus approach not only helps individuals find the care they need but also encourages facilities to enhance their inclusivity, creating a more accessible healthcare environment for all.</p>
                <div class="mt-8">
                    <a  style={{color:'#005B48'}}   href="#" class="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                        <span  class="ml-2">&#8594;</span></a>
                </div>
            </div>
            <div class="mt-12 md:mt-0">
                <img src="https://cdn.pixabay.com/photo/2021/02/19/04/00/doctor-6029164_1280.png"class="object-cover rounded-lg shadow-md"/>
            </div>
        </div>
    </div>
</section>


        
    </div>
  )
}

export default Mission
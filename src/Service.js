import React from 'react'

function Service() {
  return (
    <div style={{backgroundColor:'#FFF7EF'}}>
<div   style={{paddingTop:'190px'}} class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 dark:bg-gray-900">
    <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h2  class="serv mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Services Offered</h2>
        <p   class=" provide mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            We provide a range of different services
            tailored to meet various needs
        </p>
    </div>

    <div class="space-y-8 mb-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
   
        <div
            class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 class=" serv mb-4 text-2xl font-semibold">Service A</h3>
            <p class=" provide font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Best option for individuals looking for
                personalized solutions
            </p>
            <div class="flex justify-center items-baseline my-8">
                <span class="mr-2 text-5xl font-extrabold">$49</span>
                <span class="text-gray-500 dark:text-gray-400">/month</span>
            </div>
     
            <ul role="list" class="mb-8 space-y-4 text-left">
                <li class="flex items-center space-x-3">
              
                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span className='provide'><span class="font-semibold">3</span> Custom Features</span>
                </li>
       
            </ul>
            <a href=""
                class="text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:ring-teal-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-teal-900">Get
                started</a>
        </div>


        <div
            class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 class=" serv mb-4 text-2xl font-semibold">Service B</h3>
            <p class="  provide font-light text-gray-500 sm:text-lg dark:text-gray-400">Best for small businesses looking to
                enhance productivity</p>
            <div class="flex justify-center items-baseline my-8">
                <span class="mr-2 text-5xl font-extrabold">$79</span>
                <span class="text-gray-500 dark:text-gray-400">/month</span>
            </div>
       
            <ul role="list" class="mb-8 space-y-4 text-left">
                <li class="flex items-center space-x-3">
          
                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span className='provide'><span class="font-semibold">5</span > Custom Features</span>
                </li>
          
            </ul>
            <a href=""
                class="text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:ring-teal-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-teal-900">Get
                started</a>
        </div>

      
        <div
            class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 class=" serv mb-4 text-2xl font-semibold">Service C</h3>
            <p class=" provide font-light text-gray-500 sm:text-lg dark:text-gray-400">Best for large enterprises seeking
                comprehensive solutions</p>
            <div class="flex justify-center items-baseline my-8">
                <span class="mr-2 text-5xl font-extrabold">$199</span>
                <span class="text-gray-500 dark:text-gray-400">/month</span>
            </div>
         
            <ul role="list" class="mb-8 space-y-4 text-left">
                <li class="flex items-center space-x-3">

                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span className='provide'><span class=" provide font-semibold">Unlimited</span> Custom Features</span>
                </li>
                
            </ul>
            <a href=""
                class="text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:ring-teal-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-teal-900">Get
                started</a>
        </div>
    </div>

  
    <div class="mx-auto max-w-screen-md text-center">
        <p class="text-lg font-medium text-gray-800 dark:text-white">Ready to get started?</p>
        <a href="" class="text-teal-600 hover:text-teal-700 dark:hover:text-teal-400 font-semibold">Sign up now</a>
    </div>
</div>


    </div>
  )
}

export default Service
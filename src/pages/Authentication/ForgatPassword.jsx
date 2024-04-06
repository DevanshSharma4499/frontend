import React from 'react'

const ForgatPassword = () => {
  return (
    <div>
      <section class="bg-gray-50 ">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
      <img class="w-[150px] h-[80px] mt-2 mr-2" src="./images/logo.png" alt="logo"/>
             
      </a>
      <div class="w-full p-6 bg-white rounded-lg shadow  md:mt-0 sm:max-w-md   sm:p-8">
          <h1 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Forgot your password?
          </h1>
          <p class="font-light text-gray-500 ">Don't fret! Just type in your email and we will send you a code to reset your password!</p>
          <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
              <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                  <input type="email" name="email" id="email" class="bd bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 " placeholder="name@company.com" required=""/>
              </div>
              <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 bd border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 " required=""/>
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="terms" class="font-light text-gray-500 ">I accept the <a class="font-medium text-green-600 hover:underline " href="#">Terms and Conditions</a></label>
                  </div>
              </div>
              <button type="submit" class="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Reset password</button>
          </form>
      </div>
  </div>
</section>
    </div>
  )
}

export default ForgatPassword

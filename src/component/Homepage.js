import React from 'react'
import Navigation from './Navigation'

function Homepage() {
  return (
    <div>

      <Navigation />

      <section>
  <div
    class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div class="mx-auto text-center">
      <h1
        class="bg-gradient-to-r from-blue-500 via-green-400 to-emerald-700 bg-clip-text text-3xl font-extrabold text-transparent lg:text-7xl"
      >
        Combating Fake Drugs.

        <span class="sm:block"> Through Blockchain. </span>
      </h1>

      <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <a
          class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="/get-started"
        >
          Read More
        </a>
      </div>
    </div>
  </div>
</section>


      <h1>Homepage</h1>
    </div>
  )
}

export default Homepage
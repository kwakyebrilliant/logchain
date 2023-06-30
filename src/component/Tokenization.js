/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import Navigation from './Navigation';
import images2 from '../assets/images2.webp';
import banner from '../assets/images2.svg';

import assets from '../assets/asssets.png'
import assets2 from '../assets/asssets2.png'

import '../component/utils/animations.css';
import Footer from './utils/Footer';

function Tokenization() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabNames = ['Today', 'This Week', 'This Month', 'This Year'];

  return (
    <div>
      <Navigation />
      
      <div className="relative">
        <div
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: `url(${images2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        <div className="relative mb-16 z-0 py-8">
          <div className="grid container mx-auto pt-40 p-8 grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-lg lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <h2 className="text-3xl font-bold sm:text-4xl">Find Tokenized Assets</h2>
              
              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero
                aliquid sint distinctio iure ipsum cupiditate? Quis, odit assumenda?
                Deleniti quasi inventore, libero reiciendis minima aliquid tempora.
                Obcaecati, autem.
              </p>

       

            <div className="relative mt-8">
              <label for="Search" className="sr-only"> Search </label>

              <input
                type="text"
                id="Search"
                placeholder="Search tokenized assets..."
                className="w-full h-12 focus:outline-none rounded-full border-none border-gray-200 pe-10 ps-4 text-sm  py-2.5 shadow-sm sm:text-sm"
              />

              <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                <button 
                  type="button" 
                  className="absolute border border-emerald-700 end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                  >
                  <span className="sr-only">Search</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </span>
            </div>

              
              
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4 justify-center flex sm:text-3xl">Tokenization Statistics</h2>
              
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
                <div className="flex flex-col rounded-lg border border-emerald-600 hover:bg-gray-200 hover:border-gray-200 px-4 py-8 text-center">
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Outstanding Invoices
                  </dt>
                  <dd className="text-4xl font-extrabold mb-4 text-emerald-600 md:text-5xl">
                    4.8m
                  </dd>
                </div>
                
                <div className="flex flex-col rounded-lg border border-emerald-600 hover:bg-gray-200 hover:border-gray-200 px-4 py-8 text-center">
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Undue Invoices
                  </dt>
                  <dd className="text-4xl font-extrabold mb-4 text-emerald-600 md:text-5xl">
                    4.8m
                  </dd>
                </div>
                
                <div className="flex flex-col rounded-lg border border-emerald-600 hover:bg-gray-200 hover:border-gray-200 px-4 py-8 text-center">
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Insurance Coverage
                  </dt>
                  <dd className="text-4xl font-extrabold mb-4 text-emerald-600 md:text-5xl">
                    4.8m
                  </dd>
                </div>
                
                <div className="flex flex-col rounded-lg border border-emerald-600 hover:bg-gray-200 hover:border-gray-200 px-4 py-8 text-center">
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Tokenization Value
                  </dt>
                  <dd className="text-4xl font-extrabold mb-4 text-emerald-600 md:text-5xl">
                    $4.8m
                  </dd>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        <section className="relative pb-20 bg-white">

        <div className="px-4 sm:px-6">
          <div className="pt-12 md:pt-20">
            {/* Section header */}
            <div className="max-w-6xl mx-auto text-center pb-12 md:pb-16">
              <h2 className="text-xl text-emerald-700 ">
                Tokenized Assets
              </h2>
              <p className="text-2xl text-gray-600" data-aos="zoom-y-out">
                The following are some of tokenized assets on the platform.
              </p>
            </div>
            </div>



            <div className="lg:px-16 px-4">

              <div className=" grid grid-cols-1 lg:grid-cols-4 gap-4 gap-x-8 gap-y-8">
                <a className="rounded-lg bg-gray-100 p-8">
                  <div className="flex items-center gap-4">
                    <img
                      alt="Man"
                      src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                      className="h-16 w-16 rounded-full object-cover"
                    />

                    <div>
                      <div className="flex justify-center gap-0.5 text-green-500">
                        <h1>Asset Brook</h1>
                      </div>

                      <p className="mt-1 text-lg font-medium text-gray-700">
                      0xF...y6b
                      </p>
                    </div>
                  </div>

                  <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                    voluptatem alias ut provident sapiente repellendus.
                  </p>
                </a>

                <a className="rounded-lg bg-gray-100 p-8">
                  <div className="flex items-center gap-4">
                    <img
                      alt="Man"
                      src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                      className="h-16 w-16 rounded-full object-cover"
                    />

                    <div>
                      <div className="flex justify-center gap-0.5 text-green-500">
                        <h1>Asset Brook</h1>
                      </div>

                      <p className="mt-1 text-lg font-medium text-gray-700">
                      0xF...y6b
                      </p>
                    </div>
                  </div>

                  <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                    voluptatem alias ut provident sapiente repellendus.
                  </p>
                </a>

                <a className="rounded-lg bg-gray-100 p-8">
                  <div className="flex items-center gap-4">
                    <img
                      alt="Man"
                      src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                      className="h-16 w-16 rounded-full object-cover"
                    />

                    <div>
                      <div className="flex justify-center gap-0.5 text-green-500">
                        <h1>Asset Brook</h1>
                      </div>

                      <p className="mt-1 text-lg font-medium text-gray-700">
                      0xF...y6b
                      </p>
                    </div>
                  </div>

                  <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                    voluptatem alias ut provident sapiente repellendus.
                  </p>
                </a>

                <a className="rounded-lg bg-gray-100 p-8">
                  <div className="flex items-center gap-4">
                    <img
                      alt="Man"
                      src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                      className="h-16 w-16 rounded-full object-cover"
                    />

                    <div>
                      <div className="flex justify-center gap-0.5 text-green-500">
                        <h1>Asset Brook</h1>
                      </div>

                      <p className="mt-1 text-lg font-medium text-gray-700">
                      0xF...y6b
                      </p>
                    </div>
                  </div>

                  <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                    voluptatem alias ut provident sapiente repellendus.
                  </p>
                </a>

                

              </div>
            </div>

         
        </div>
        </section>


        <section className="relative bg-white pb-20" style={{ backgroundImage: `url(${banner})` }}>
        <div className='bg-gray-50 shadow-lg lg:mx-20 mx-8 rounded-md h-full'>
          <div className='flex justify-center lg:pt-16 pt-8'>
            <h1 className='lg:text-5xl text-2xl font-bold text-gray-700'>Tokenization in</h1>
            {tabNames.map((name, index) => (
          <h1 className='lg:text-5xl text-2xl font-bold ml-1.5 text-emerald-700' key={index} style={{ display: activeTab === index ? 'block' : 'none' }}>
            {name}
          </h1>
        ))}
          </div>

          <div className="">
         <nav aria-label="Tabs" className="overflow-x-auto sm:w-full md:w-2/3 mx-auto">
        <ul className="flex border-b border-gray-100 whitespace-nowrap">
          {tabNames.map((name, index) => (
            <li
              key={index}
              className={`flex-1 cursor-pointer ${
                activeTab === index ? '' : ''
              }`}
              onClick={() => handleTabClick(index)}
            >
              <div className="relative block p-4">
                <div className="flex items-center justify-center gap-4">
                  <span className="text-sm font-medium text-gray-900">{name}</span>
                </div>
                {activeTab === index && (
                  <span className="absolute bottom-0 left-0 h-0.5 bg-emerald-600 w-full"></span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </nav>

      {/* Content */}
      <div className="p-4">
        {activeTab === 0 && 
        <div>

          <section>
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div
              className="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8"
            >
              <div className="mb-8 sm:break-inside-avoid">
                <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                  <p class="leading-relaxed text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                    minima dicta amet, molestiae aliquam incidunt suscipit recusandae
                    labore ratione doloremque, architecto et illo minus quo tenetur
                    ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam
                    corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim
                    ad inventore laudantium est illum voluptatem quis.
                  </p>
                </blockquote>

                <div className="mt-4 flex items-center gap-4">
                  <img
                    alt="Woman"
                    src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                    className="h-12 w-12 rounded-full object-cover"
                  />

                  <div className="text-sm">
                    <p className="font-medium text-green-500">Asset Brook</p>
                    <p className="mt-1">0xF...y6b</p>
                  </div>
                </div>
              </div>

              <div className="mb-8 sm:break-inside-avoid">
                <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                  <p className="leading-relaxed text-gray-700">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel
                    quo deserunt quos expedita minima incidunt sed tempora, a architecto
                    consectetur reprehenderit, in repellat voluptatum.
                  </p>
                </blockquote>

                <div className="mt-4 flex items-center gap-4">
                  <img
                    alt="Woman"
                    src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                    className="h-12 w-12 rounded-full object-cover"
                  />

                  <div className="text-sm">
                    <p className="font-medium text-green-500">Asset Brook</p>
                    <p className="mt-1">0xF...y6b</p>
                  </div>
                </div>
              </div>

              <div className="mb-8 sm:break-inside-avoid">
                <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                  <p className="leading-relaxed text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                    beatae incidunt perferendis soluta facilis voluptas dicta
                    repudiandae quasi asperiores libero, exercitationem molestiae autem
                    sapiente dolore nulla non consequatur. Eaque, dolores.
                  </p>
                </blockquote>

                <div className="mt-4 flex items-center gap-4">
                  <img
                    alt="Woman"
                    src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                    className="h-12 w-12 rounded-full object-cover"
                  />

                  <div className="text-sm">
                    <p className="font-medium text-green-500">Asset Brook</p>
                    <p className="mt-1">0xF...y6b</p>
                  </div>
                </div>
              </div>

              <div className="mb-8 sm:break-inside-avoid">
                <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                  <p className="leading-relaxed text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                    doloribus eius aut unde, dolores accusantium!
                  </p>
                </blockquote>

                <div className="mt-4 flex items-center gap-4">
                  <img
                    alt="Woman"
                    src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                    className="h-12 w-12 rounded-full object-cover"
                  />

                  <div className="text-sm">
                    <p className="font-medium text-green-500">Asset Brook</p>
                    <p className="mt-1">0xF...y6b</p>
                  </div>
                </div>
              </div>

              <div className="mb-8 sm:break-inside-avoid">
                <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                  <p className="leading-relaxed text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a
                    voluptatum quidem nulla quisquam natus velit provident earum esse,
                    odio numquam labore recusandae similique sunt.
                  </p>
                </blockquote>

                <div className="mt-4 flex items-center gap-4">
                  <img
                    alt="Woman"
                    src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                    className="h-12 w-12 rounded-full object-cover"
                  />

                  <div className="text-sm">
                    <p className="font-medium text-green-500">Asset Brook</p>
                    <p className="mt-1">0xF...y6b</p>
                  </div>
                </div>
              </div>

              <div className="mb-8 sm:break-inside-avoid">
                <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                  <p className="leading-relaxed text-gray-700">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut
                    necessitatibus, repudiandae qui dolor minima.
                  </p>
                </blockquote>

                <div className="mt-4 flex items-center gap-4">
                  <img
                    alt="Woman"
                    src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                    className="h-12 w-12 rounded-full object-cover"
                  />

                  <div className="text-sm">
                    <p className="font-medium text-green-500">Asset Brook</p>
                    <p className="mt-1">0xF...y6b</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
          </div>}
        {activeTab === 1 && 
        <div>
          <section>
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div
              className="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8"
            >
              <div className="mb-8 sm:break-inside-avoid">
                <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                  <p class="leading-relaxed text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                    minima dicta amet, molestiae aliquam incidunt suscipit recusandae
                    labore ratione doloremque, architecto et illo minus quo tenetur
                    ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam
                    corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim
                    ad inventore laudantium est illum voluptatem quis.
                  </p>
                </blockquote>

                <div className="mt-4 flex items-center gap-4">
                  <img
                    alt="Woman"
                    src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                    className="h-12 w-12 rounded-full object-cover"
                  />

                  <div className="text-sm">
                    <p className="font-medium">Gladis Lennon</p>
                    <p className="mt-1">Head of SEO</p>
                  </div>
                </div>
              </div>

              <div className="mb-8 sm:break-inside-avoid">
                <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                  <p className="leading-relaxed text-gray-700">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel
                    quo deserunt quos expedita minima incidunt sed tempora, a architecto
                    consectetur reprehenderit, in repellat voluptatum.
                  </p>
                </blockquote>

                <div className="mt-4 flex items-center gap-4">
                  <img
                    alt="Woman"
                    src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                    className="h-12 w-12 rounded-full object-cover"
                  />

                  <div className="text-sm">
                    <p className="font-medium">Gladis Lennon</p>
                    <p className="mt-1">Head of SEO</p>
                  </div>
                </div>
              </div>

              <div className="mb-8 sm:break-inside-avoid">
                <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                  <p className="leading-relaxed text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                    beatae incidunt perferendis soluta facilis voluptas dicta
                    repudiandae quasi asperiores libero, exercitationem molestiae autem
                    sapiente dolore nulla non consequatur. Eaque, dolores.
                  </p>
                </blockquote>

                <div className="mt-4 flex items-center gap-4">
                  <img
                    alt="Woman"
                    src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                    className="h-12 w-12 rounded-full object-cover"
                  />

                  <div className="text-sm">
                    <p className="font-medium">Gladis Lennon</p>
                    <p className="mt-1">Head of SEO</p>
                  </div>
                </div>
              </div>

              <div className="mb-8 sm:break-inside-avoid">
                <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                  <p className="leading-relaxed text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                    doloribus eius aut unde, dolores accusantium!
                  </p>
                </blockquote>

                <div className="mt-4 flex items-center gap-4">
                  <img
                    alt="Woman"
                    src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                    className="h-12 w-12 rounded-full object-cover"
                  />

                  <div className="text-sm">
                    <p className="font-medium">Gladis Lennon</p>
                    <p className="mt-1">Head of SEO</p>
                  </div>
                </div>
              </div>

              <div className="mb-8 sm:break-inside-avoid">
                <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                  <p className="leading-relaxed text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a
                    voluptatum quidem nulla quisquam natus velit provident earum esse,
                    odio numquam labore recusandae similique sunt.
                  </p>
                </blockquote>

                <div className="mt-4 flex items-center gap-4">
                  <img
                    alt="Woman"
                    src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                    className="h-12 w-12 rounded-full object-cover"
                  />

                  <div className="text-sm">
                    <p className="font-medium">Gladis Lennon</p>
                    <p className="mt-1">Head of SEO</p>
                  </div>
                </div>
              </div>

              <div className="mb-8 sm:break-inside-avoid">
                <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                  <p className="leading-relaxed text-gray-700">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut
                    necessitatibus, repudiandae qui dolor minima.
                  </p>
                </blockquote>

                <div className="mt-4 flex items-center gap-4">
                  <img
                    alt="Woman"
                    src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                    className="h-12 w-12 rounded-full object-cover"
                  />

                  <div className="text-sm">
                    <p className="font-medium">Gladis Lennon</p>
                    <p className="mt-1">Head of SEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>}
        {activeTab === 2 &&
         <div>

          <section>
                    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                      <div
                        className="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8"
                      >
                        <div className="mb-8 sm:break-inside-avoid">
                          <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                            <p className="leading-relaxed text-gray-700">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                              minima dicta amet, molestiae aliquam incidunt suscipit recusandae
                              labore ratione doloremque, architecto et illo minus quo tenetur
                              ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam
                              corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim
                              ad inventore laudantium est illum voluptatem quis.
                            </p>
                          </blockquote>

                          <div className="mt-4 flex items-center gap-4">
                            <img
                              alt="Woman"
                              src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                              className="h-12 w-12 rounded-full object-cover"
                            />

                            <div className="text-sm">
                              <p className="font-medium">Gladis Lennon</p>
                              <p className="mt-1">Head of SEO</p>
                            </div>
                          </div>
                        </div>

                        <div className="mb-8 sm:break-inside-avoid">
                          <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                            <p className="leading-relaxed text-gray-700">
                              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel
                              quo deserunt quos expedita minima incidunt sed tempora, a architecto
                              consectetur reprehenderit, in repellat voluptatum.
                            </p>
                          </blockquote>

                          <div className="mt-4 flex items-center gap-4">
                            <img
                              alt="Woman"
                              src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                              className="h-12 w-12 rounded-full object-cover"
                            />

                            <div className="text-sm">
                              <p className="font-medium">Gladis Lennon</p>
                              <p className="mt-1">Head of SEO</p>
                            </div>
                          </div>
                        </div>

                        <div className="mb-8 sm:break-inside-avoid">
                          <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                            <p className="leading-relaxed text-gray-700">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                              beatae incidunt perferendis soluta facilis voluptas dicta
                              repudiandae quasi asperiores libero, exercitationem molestiae autem
                              sapiente dolore nulla non consequatur. Eaque, dolores.
                            </p>
                          </blockquote>

                          <div className="mt-4 flex items-center gap-4">
                            <img
                              alt="Woman"
                              src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                              className="h-12 w-12 rounded-full object-cover"
                            />

                            <div className="text-sm">
                              <p className="font-medium">Gladis Lennon</p>
                              <p className="mt-1">Head of SEO</p>
                            </div>
                          </div>
                        </div>

                        <div className="mb-8 sm:break-inside-avoid">
                          <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                            <p className="leading-relaxed text-gray-700">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                              doloribus eius aut unde, dolores accusantium!
                            </p>
                          </blockquote>

                          <div className="mt-4 flex items-center gap-4">
                            <img
                              alt="Woman"
                              src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                              className="h-12 w-12 rounded-full object-cover"
                            />

                            <div className="text-sm">
                              <p className="font-medium">Gladis Lennon</p>
                              <p className="mt-1">Head of SEO</p>
                            </div>
                          </div>
                        </div>

                        <div className="mb-8 sm:break-inside-avoid">
                          <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                            <p className="leading-relaxed text-gray-700">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a
                              voluptatum quidem nulla quisquam natus velit provident earum esse,
                              odio numquam labore recusandae similique sunt.
                            </p>
                          </blockquote>

                          <div className="mt-4 flex items-center gap-4">
                            <img
                              alt="Woman"
                              src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                              className="h-12 w-12 rounded-full object-cover"
                            />

                            <div className="text-sm">
                              <p className="font-medium">Gladis Lennon</p>
                              <p className="mt-1">Head of SEO</p>
                            </div>
                          </div>
                        </div>

                        <div className="mb-8 sm:break-inside-avoid">
                          <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                            <p className="leading-relaxed text-gray-700">
                              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut
                              necessitatibus, repudiandae qui dolor minima.
                            </p>
                          </blockquote>

                          <div className="mt-4 flex items-center gap-4">
                            <img
                              alt="Woman"
                              src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                              className="h-12 w-12 rounded-full object-cover"
                            />

                            <div className="text-sm">
                              <p className="font-medium">Gladis Lennon</p>
                              <p className="mt-1">Head of SEO</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
        </div>}
        {activeTab === 3 && 
        <div>
                    <section>
                    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                      <div
                        className="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8"
                      >
                        <div className="mb-8 sm:break-inside-avoid">
                          <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                            <p class="leading-relaxed text-gray-700">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                              minima dicta amet, molestiae aliquam incidunt suscipit recusandae
                              labore ratione doloremque, architecto et illo minus quo tenetur
                              ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam
                              corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim
                              ad inventore laudantium est illum voluptatem quis.
                            </p>
                          </blockquote>

                          <div className="mt-4 flex items-center gap-4">
                            <img
                              alt="Woman"
                              src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                              className="h-12 w-12 rounded-full object-cover"
                            />

                            <div className="text-sm">
                              <p className="font-medium">Gladis Lennon</p>
                              <p className="mt-1">Head of SEO</p>
                            </div>
                          </div>
                        </div>

                        <div className="mb-8 sm:break-inside-avoid">
                          <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                            <p className="leading-relaxed text-gray-700">
                              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel
                              quo deserunt quos expedita minima incidunt sed tempora, a architecto
                              consectetur reprehenderit, in repellat voluptatum.
                            </p>
                          </blockquote>

                          <div className="mt-4 flex items-center gap-4">
                            <img
                              alt="Woman"
                              src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                              className="h-12 w-12 rounded-full object-cover"
                            />

                            <div className="text-sm">
                              <p className="font-medium">Gladis Lennon</p>
                              <p className="mt-1">Head of SEO</p>
                            </div>
                          </div>
                        </div>

                        <div className="mb-8 sm:break-inside-avoid">
                          <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                            <p className="leading-relaxed text-gray-700">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                              beatae incidunt perferendis soluta facilis voluptas dicta
                              repudiandae quasi asperiores libero, exercitationem molestiae autem
                              sapiente dolore nulla non consequatur. Eaque, dolores.
                            </p>
                          </blockquote>

                          <div className="mt-4 flex items-center gap-4">
                            <img
                              alt="Woman"
                              src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                              className="h-12 w-12 rounded-full object-cover"
                            />

                            <div className="text-sm">
                              <p className="font-medium">Gladis Lennon</p>
                              <p className="mt-1">Head of SEO</p>
                            </div>
                          </div>
                        </div>

                        <div className="mb-8 sm:break-inside-avoid">
                          <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                            <p className="leading-relaxed text-gray-700">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                              doloribus eius aut unde, dolores accusantium!
                            </p>
                          </blockquote>

                          <div className="mt-4 flex items-center gap-4">
                            <img
                              alt="Woman"
                              src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                              className="h-12 w-12 rounded-full object-cover"
                            />

                            <div className="text-sm">
                              <p className="font-medium">Gladis Lennon</p>
                              <p className="mt-1">Head of SEO</p>
                            </div>
                          </div>
                        </div>

                        <div className="mb-8 sm:break-inside-avoid">
                          <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                            <p className="leading-relaxed text-gray-700">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a
                              voluptatum quidem nulla quisquam natus velit provident earum esse,
                              odio numquam labore recusandae similique sunt.
                            </p>
                          </blockquote>

                          <div className="mt-4 flex items-center gap-4">
                            <img
                              alt="Woman"
                              src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                              className="h-12 w-12 rounded-full object-cover"
                            />

                            <div className="text-sm">
                              <p className="font-medium">Gladis Lennon</p>
                              <p className="mt-1">Head of SEO</p>
                            </div>
                          </div>
                        </div>

                        <div className="mb-8 sm:break-inside-avoid">
                          <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                            <p className="leading-relaxed text-gray-700">
                              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut
                              necessitatibus, repudiandae qui dolor minima.
                            </p>
                          </blockquote>

                          <div className="mt-4 flex items-center gap-4">
                            <img
                              alt="Woman"
                              src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                              className="h-12 w-12 rounded-full object-cover"
                            />

                            <div className="text-sm">
                              <p className="font-medium">Gladis Lennon</p>
                              <p className="mt-1">Head of SEO</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
          
        </div>}
      </div>
    </div>

          
        </div>
        <div className="absolute -top-1 right-0 mr-16 flex justify-end items-end">
          <div className="lg:h-40 lg:w-40 rounded-full bg-emerald-50 shadow-lg transform rotate-45 animate-circle" />
        </div>
        <div className="absolute bottom-0 -left-0 flex justify-end items-end">
          <div className="lg:w-24 lg:h-24 rounded-full bg-emerald-50 shadow-lg transform rotate-45 animate-circle -ml-10" />
        </div>
      </section>


      <section className="relative bg-gray-50">
        <div className='flex justify-center lg:pt-16 pt-8'>
          <h1 className='lg:text-xl text-2xl font-bold text-blue-950'>The platform</h1>
        </div>
        <div className='flex justify-center'>
          <h1 className='lg:text-6xl text-2xl font-bold text-blue-950'>See the full</h1>
        </div>
        <div className='flex justify-center'>
          <h1 className='lg:text-6xl text-2xl font-bold text-emerald-400'>tokenization assets</h1>
        </div>

        <div className='flex mt-2 justify-center'>
          <p className="leading-relaxed text-center max-w-3xl px-4 sm:px-12 py-12 sm:py-12">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut
            necessitatibus, repudiandae qui dolor minima.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero 
            aliquid sint distinctio iure ipsum cupiditate? Quis, odit assumenda? 
            Deleniti quasi inventore
          </p>
        </div>

        <div className="relative flex justify-center">
          <img className="hidden lg:block w-2/6" src={assets} alt="Image 1" />
          <img className="hidden lg:block animate-bounce-slow w-96 h-88 -bottom-20 left-0 right-0 relative" src={assets2} alt="Image 2" />
          <img className="hidden lg:block w-2/6" src={assets} alt="Image 3" />
        </div>
      </section>


      <section className="relative mt-12">
        <Footer />
      </section>


      </div>
    </div>
  );
}

export default Tokenization;

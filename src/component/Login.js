import React, {useState} from 'react'

function Login() {

    const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>

            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-emerald-600 sm:text-3xl">
                Get started today
                </h1>

                <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                    Using blockchain technology, we are Solving the supply chain problems in the pharmaceutical industry.
                </p>

                <form
                action=""
                className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                >
                <p className="text-center text-lg font-medium">Choose your account</p>

                <select
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    value={selectedOption}
                    onChange={handleOptionChange}>
                    <option value="">User type</option>
                    <option value="customer">Customer</option>
                    <option value="administrator">Administrator</option>
                    <option value="manager">Manager</option>
                    <option value="manufacturer">Manufacturer</option>
                    <option value="tester">Tester</option>
                    <option value="Transporter">Transporter</option>
                    <option value="wholesaler">Wholesaler/ Retailer</option>
                    <option value="pharmacy1">Pharmacy 1</option>
                    <option value="pharmacy2">Pharmacy 2</option>
                </select>
      
                {
                      selectedOption ==='administrator' && (

                        <div>
                            <div>
                    <label for="email" className="sr-only">Email</label>

                    <div className="relative">
                    <input
                        type="email"
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter email"
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                        </svg>
                    </span>
                    </div>
                </div>

                <div className='pt-4'>
                    <label for="password" className="sr-only">Password</label>

                    <div class="relative">
                    <input
                        type="password"
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter password"
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                        </svg>
                    </span>
                    </div>
                </div>
                        </div>
                        
                      )
                  } 


                    <a
                    className=" w-full justify-center flex rounded-lg bg-emerald-600 px-5 py-3 text-sm font-medium hover:bg-transparent border border-emerald-600 hover:text-emerald-600 text-white"
                    type="submit"
                    href='/summary'
                    >
                    <span className="text-sm font-medium">
                    Connect
                    </span>
                    </a>

                
                </form>
            </div>
            </div>


    </div>
  )
}

export default Login
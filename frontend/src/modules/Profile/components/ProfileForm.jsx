import React from 'react';
import PrimaryBtn from '../../../components/PrimaryBtn';

const ProfileForm = () => {
  const onSubmitHandler = (e)=>{
    e.preventDefault();
    console.log(e)
  }
  return (
    <div className=" border-t pt-4 my-4">
      <form onSubmit={onSubmitHandler}>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First name
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-transparent border border-gray-300 outline-none text-black-300 text-sm rounded-lg focus:ring-0 block w-full p-2.5  "
              placeholder="John"
              required
            />
          </div>
          <div>
            <label
              for="last_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              class="bg-transparent border border-gray-300 outline-none text-black-300 text-sm rounded-lg focus:ring-0 block w-full p-2.5  "
              placeholder="Doe"
              required
            />
          </div>
          <div>
            <label
              for="company"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              class="bg-transparent border border-gray-300 outline-none text-black-300 text-sm rounded-lg focus:ring-0 block w-full p-2.5  "
              placeholder="Flowbite"
              required
            />
          </div>
          <div>
            <label
              for="phone"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone number
            </label>
            <input
              type="text"
              id="phone"
              class="bg-transparent border border-gray-300 outline-none text-black-300 text-sm rounded-lg focus:ring-0 block w-full p-2.5  "
              placeholder="123-45-678"
             // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
          <div>
            <label
              for="website"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Website URL
            </label>
            <input
              type="url"
              id="website"
              class="bg-transparent border border-gray-300 outline-none text-black-300 text-sm rounded-lg focus:ring-0 block w-full p-2.5  "
              placeholder="flowbite.com"
              required
            />
          </div>
          <div>
            <label
              for="visitors"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Unique visitors (per month)
            </label>
            <input
              type="number"
              id="visitors"
              class="bg-transparent border border-gray-300 outline-none text-black-300 text-sm rounded-lg focus:ring-0 block w-full p-2.5  "
              placeholder=""
              required
            />
          </div>
        </div>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            class="bg-transparent border border-gray-300 outline-none text-black-300 text-sm rounded-lg focus:ring-0 block w-full p-2.5  "
            placeholder="john.doe@company.com"
            required
          />
        </div>
        {/* <div class="mb-6">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            class="bg-transparent border border-gray-300 outline-none text-black-300 text-sm rounded-lg focus:ring-0 block w-full p-2.5  "
            placeholder="•••••••••"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="confirm_password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirm password
          </label>
          <input
            type="password"
            id="confirm_password"
            class="bg-transparent border border-gray-300 outline-none text-black-300 text-sm rounded-lg focus:ring-0 block w-full p-2.5  "
            placeholder="•••••••••"
            required
          />
        </div> */}

        <PrimaryBtn style={'text-white hover:text-black'}>
          Save Changes
        </PrimaryBtn>
      </form>

      <div className="border-t mt-4">
        <h3 className="my-3 text-xl font-semibold ">Delete Account</h3>

        <label
          className="flex items-center space-x-2 cursor-pointer"
          htmlFor="a"
        >
          <input type="checkbox" name="" id="a" />
          <span>I confirm my account deactivation</span>
        </label>

        <PrimaryBtn style={'bg-[#D24B4C] text-white mt-4 '}>
          Deactivate Account
        </PrimaryBtn>
      </div>
    </div>
  );
};

export default ProfileForm;

import React from 'react'

const ProfilePicture = () => {
  return (
    <div>
     <div className='flex  space-x-4'>
     <div className='h-28 w-28 rounded-md'>
        <img className='w-full h-full rounded-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWp1N2zHsQSQ7AKxlWgF2fKcube1CLrOWUBogYrO5NFg&s" alt="" />
      </div>
      <div className='pt-4 space-y-4'>
 
       <label className='py-2.5 px-4 font-medium bg-sky-200 rounded-md'>Upload New Photo
       
       <input className='hidden' type="file" />
       </label>
   
        <h2 className='text-gray-600'>Allowed JPG, GIF or PNG. Max size of 800K</h2>
      </div>
     </div>


    </div>
  )
}

export default ProfilePicture
import React from 'react'
import ProfilePicture from '../components/ProfilePicture'
import ProfileForm from '../components/ProfileForm'

const Profile = () => {
  return (
    <div className='max-w-7xl mx-auto px-6 lg:px-0 py-6 h-full'>
    <div className=' border shadow-lg px-4 py-2 rounded-lg'>
    <h3 className='my-3 text-xl font-semibold'>Profile Details</h3>
    <ProfilePicture/>
      <ProfileForm/>
    </div>
      
      </div>
  )
}

export default Profile
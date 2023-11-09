import moment from 'moment/moment'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AiOutlineMail } from 'react-icons/ai'
import { FaUserAlt, FaPhoneAlt } from 'react-icons/fa'
import { FiArrowDownLeft } from 'react-icons/fi'

const SingleUser = () => {
  const { id: UserId } = useParams()
  const [result, setResult] = useState([])

  console.log(UserId)

  useEffect(() => {
    fetch(`https://randomuser.me/api/?seed=${UserId}`)
      .then(data => data.json())
      .then(result => {
        setResult(result.results)
        console.log(result.results)
      })
  }, [])

  return (
    <div className='flex justify-center items-center h-fit py-5 bg-gray-900'>
      {result.map(user => {
        const {
          email,
          phone,
          gender,
          dob: { date, age },
          name: { title, first, last },
          location: {
            city,
            state,
            country,
            postcode,
            street: { number, name },
            coordinates: { latitude, longitude },
            timezone: { description, offset }
          },
          picture: { large },
          login: { username }
        } = user

        return (
          <div
            key={UserId}
            className='md:w-[50%] w-full h-fit flex flex-col items-center   bg-gray-100 rounded-md'
          >
            <div className='w-full text-left pt-5 px-5 '><Link to="/"><FiArrowDownLeft className='text-gray-700 cursor-pointer text-3xl rotate-45'/></Link></div>
            <img src={large} alt='' className='rounded-full mt-2' />
            <h1 className='text-3xl py-3 font-medium'>
              {title} {first} {last}
            </h1>
            <p className='text-lg font-medium'>
              <span className='font-bold text-xl'>DOB:</span>{' '}
              {moment(`${date}`).format('MMMM Do YYYY')}
            </p>
            <p className='text-lg'>{age} Years</p>
            <p className='text-lg font-medium'>
              <span className='font-bold text-xl'>Gender:</span>{' '}
              {gender}
            </p>

            <hr className='h-2 bg-slate-800 w-[20%] rounded my-5' />

            <div className='flex flex-col text-left w-full px-3 my-4'>
              <p className='flex items-center gap-2 text-lg'>
                <span className='text-lg'>
                  <AiOutlineMail />
                </span>{' '}
                {email}
              </p>
              <p className='flex items-center gap-2 text-lg'>
                <span className='text-lg'>
                  <FaUserAlt />
                </span>{' '}
                {username}
              </p>
              <p className='flex items-center gap-2 text-lg'>
                <span className='text-lg'>
                  <FaPhoneAlt />
                </span>{' '}
                {phone}
              </p>
            </div>

            <div className='flex flex-col gap-3 w-full px-3 my-4'>
              <div className='flex flex-row items-center justify-between'>
                <span className='text-xl font-bold'>Street:</span>
                <p className='text-lg '>
                  {number}, {name}
                </p>
              </div>
              <div className='flex flex-row items-center justify-between'>
                <span className='text-xl font-bold'>Country:</span>
                <p className='text-lg '>{country}</p>
              </div>
              <div className='flex flex-row items-center justify-between'>
                <span className='text-xl font-bold'>City:</span>
                <p className='text-lg '>{city}</p>
              </div>
              <div className='flex flex-row items-center justify-between'>
                <span className='text-xl font-bold'>State:</span>
                <p className='text-lg '>{state}</p>
              </div>
              <div className='flex flex-row items-center justify-between'>
                <span className='text-xl font-bold'>Postal Code:</span>
                <p className='text-lg '>{postcode}</p>
              </div>
              <div className='flex flex-row items-center justify-between'>
                <span className='text-xl font-bold'>Latitude:</span>
                <p className='text-lg '>{latitude}</p>
              </div>
              <div className='flex flex-row items-center justify-between'>
                <span className='text-xl font-bold'>Longitude:</span>
                <p className='text-lg '>{longitude}</p>
              </div>
              <div className='flex flex-row items-center justify-between'>
                <p className='text-lg '>
                  {offset}, {description}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default SingleUser

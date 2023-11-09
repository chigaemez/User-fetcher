import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'
import Header from '../Pages/Header'

const UserData = () => {
  const [User, setUser] = useState([])
  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected)
  }

  const start = currentPage * itemsPerPage
  const end = start + itemsPerPage
  const usersdatas = User.slice(start, end)

  const FetchData = async () => {
    const res = await axios
      .get('https://randomuser.me/api/?results=50')
      .then(res => {
        setUser(res.data.results)
        // console.log(res.data.results)
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    FetchData()
  }, [])

  return (
    <div className='   bg-gray-800   h-fit pb-2 '>
      <Header />
      <div className='flex flex-col items-center justify-center px-2  '>
        <div className='bg-white w-[80%]  h-[10vh]  py-3 px-2 mx-2 my-1 rounded'>
          <h2 className='text-xl '>Users</h2>
          <p className='text-xl '>{50}</p>
        </div>

        <div className='overflow-auto md:w-[80%] w-full rounded shadow   '>
          <table className='table-auto w-full bg-white'>
            <thead className='bg-gray-50 border-b-2 border-gray-200'>
              <tr>
                <th className='border p-2 text-left tracking-wide'>
                  Full Name
                </th>
                <th className='border p-2 text-left tracking-wide'>Country</th>
                <th className='border p-2 text-left tracking-wide'>
                  Email Address
                </th>
                <th className='border p-2 text-left tracking-wide '>
                  Phone Number
                </th>
              </tr>
            </thead>

            <tbody>
              {usersdatas.map(user => {
                const {
                  email,
                  phone,
                  name: { title, first, last },
                  location: { country }
                } = user
                return (
                  <tr key={user.id.name}>
                    <td className='border p-3 whitespace-nowrap cursor-pointer'>
                      <Link to={`user_details/${user.id.name}`}>
                        <p>
                          {title} {first} {last}
                        </p>
                      </Link>
                    </td>

                    <td className='border whitespace-nowrap p-3'>{country}</td>
                    <td className='border whitespace-nowrap p-3'>{email}</td>
                    <td className='border whitespace-nowrap p-3'>{phone}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div className='flex justify-between w-[80%] items-center'>
          <ReactPaginate
            pageCount={Math.ceil(User.length / itemsPerPage)}
            pageRangeDisplayed={4}
            marginPagesDisplayed={1}
            onPageChange={handlePageChange}
            containerClassName='flex justify-end my-6'
            activeClassName='bg-red-500 text-white rounded-sm'
            pageClassName='mx-3'
            pageLinkClassName='bg-white text-blue-500 border border-blue-500 rounded-md px-[7px] py-1'
            breakClassName={'mx-2 text-gray-500'}
            previousLabel={<p className='text-white'>Prev</p>}
            nextLabel={<p className='text-white'>Next</p>}
          />
        </div>
      </div>
    </div>
  )
}

export default UserData

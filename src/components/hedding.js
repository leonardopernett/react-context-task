import React from 'react'
import {Link} from 'react-router-dom'
import {IoMdAddCircleOutline} from 'react-icons/io'

export default function Hedding() {
  return (
    <>
      <div className="flex item-center  mb-10   p-3 ">
        <Link to="/">
          <h5 className="text-gray-100 text-2xl font-bold	mt-1">Task App</h5>
        </Link>
        <div className="flex-grow text-right px-4 py-2">
          <Link to="/task-form">
            <button className="bg-green-400 ml-auto flex items-center hover:bg-green-500 text-white font-semibold py-1 px-4 rounded-md">
                <IoMdAddCircleOutline/>
                 Add Task
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

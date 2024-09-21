import { FacebookFilled, GithubFilled, InstagramFilled, LinkedinFilled, TwitterOutlined } from '@ant-design/icons'
// import React from 'react'

const Footer = () => {
  return (
    <footer className="flex justify-around items-center text-xs py-4 px-8 md:px-2 bg-gray-800 dark:bg-gray-900 text-white">
       <div>
       &copy; {new Date().getFullYear()} Victor Ogunwehin. All Rights Reserved.
       </div>
       <div>
        <ul className='list-none flex justify-center gap-4'>
            <li>
              <a href="www.linkedin.com/in/victor-ogunwehin" className="no-underline text-blue-200 hover:text-blue-400">
               <LinkedinFilled />
                </a>
            </li>
            <li>
              <a href="www.facebook.com/victor.ogunwehin" className="no-underline text-blue-200 hover:text-blue-400">
              <FacebookFilled />
                </a>
            </li>
            <li>
              <a href="www.instagram.com/victor.ogunwehin" className="no-underline text-blue-200 hover:text-blue-400">
                <InstagramFilled />
                </a>
            </li>
            <li>
              <a href="www.twitter.com/victor.ogunwehin" className="no-underline text-blue-200 hover:text-blue-400">
                <TwitterOutlined />
                </a>
            </li>
            <li>
              <a href="www.github.com/ProgViki" className="no-underline text-blue-200 hover:text-blue-400">
                <GithubFilled />
                </a>
            </li>
        </ul>
       </div>
    </footer>
  )
}

export default Footer

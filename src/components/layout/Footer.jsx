import React from 'react'

function Footer() {
    const footer_year=new Date().getFullYear()
  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
        <div>
            <p className=''>Copyright &copy;{footer_year} All Rights Reserved  </p>
        </div>

    </footer>
  )
}

export default Footer
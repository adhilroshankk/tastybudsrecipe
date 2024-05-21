import React from 'react'

function Footer() {
  return (
    <div>

      <div className='footer-div bg-dark pt-5 mt-5 text-center text-light'>
        <div>
          <p className='heading text-lg'>MY RECIPES</p>
          <p className='p'>About</p>
          <p className='p'>Contact</p>
          <p className='p'>Office</p>
          <p className='p'>Media Mentions</p>
          <p className='p'>Sponsered Content</p>
        </div>

        <div>
          <p className='heading'>FOOD&RECIPES</p>
          <p className='p'>Sugar Free January</p>
          <p className='p'>Freezer Meals 101</p>
          <p className='p'>Quick and Easy Recipes</p>
          <p className='p'>Instant pot Recipes</p>
          <p className='p'>Pasta Recipes</p>
        </div>

        <div>

          <div>
            <p className='heading'>Get in Touch</p>
            <div className='foot-logos d-flex justify-content-center gap-3'>
                <i class="fa-brands fa-facebook fAw"></i>
                <i class="fa-brands fa-whatsapp fAw"></i>
                <i class="fa-brands fa-twitter fAw"></i>
                <i class="fa-solid fa-globe fAw"></i>
            </div>
          </div>


        </div>
      </div>

      <div className='text-center py-3 mfooter'>
        <p className='m-0'>© 2024 My Recipe / All Rights Reserved / Privacy</p>
      </div>

    </div>
  )
}

export default Footer
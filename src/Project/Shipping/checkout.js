import React from 'react'

export const Checkout = () => {
  return (
    <div className="grid grid-cols-3 gap-12 p-12 px-32 text-gray-800 bg-gradient-to-br from-blizzard to-perfume font-body">
      <div className="col-span-2">
        <div className='rounded-xl shadow-md p-4 px-8 bg-spindle flex justify-between content-center min-w-min'>
          <div>
            <h1 className='text-lg text-gray-500 uppercase'>User</h1>
            <h1 className='text-xl font-semibold mt-1'>Name</h1>
          </div>
          <button className='text-lg font-semibold px-3 h-12 uppercase rounded-2xl border-2 bg-prim border-perfume hover:bg-gray-900 hover:border-gray-900 hover:text-gray-100 my-auto'>Change</button>
        </div>
        <div className="rounded-xl p-4 px-8 bg-spindle shadow-md mt-12">
          <h1 className='text-lg font-semibold uppercase'>Shipping Address</h1>
        </div>
        <form>
          <div className='mt-6'>
            <div className='grid grid-cols-6 grid-flow-row gap-6'>
              <div className='col-span-3'>
                <div className='flex flex-col'>
                  <label className='text-lg'>First Name*</label>
                  <input type='text' id='fname' className='py-3 px-5 mt-1 rounded-xl bg-prim text-black font-semibold text-lg focus:border-none' placeholder='First Name'/>
                </div>
              </div>
              <div className='col-span-3'>
                <div className='flex flex-col'>
                  <label className='text-lg'>Last Name*</label>
                  <input type='text' id='lname' className='py-3 px-5 mt-1 rounded-xl bg-prim text-black font-semibold text-lg focus:border-none' placeholder='Last Name'/>
                </div>
              </div>
            </div>
            <div className="flex flex-col my-4">
              <label className='text-lg'>Address*</label>  
              <input type='text' id='address' className='py-3 px-5 mt-1 w-3/4 rounded-xl bg-prim text-black font-semibold text-lg focus:border-none' placeholder='Address'/>
            </div>
            <div className='grid grid-cols-6 grid-flow-row gap-6'>
              <div className='col-span-3'>
                <div className='flex flex-col'>
                  <label className='text-lg'>City*</label>
                  <input type='text' id='city' className='py-3 px-5 mt-1 rounded-xl bg-prim text-black font-semibold text-lg focus:border-none' placeholder='City'/>
                </div>
              </div>
              <div className='col-span-3'>
                <div className='flex flex-col'>
                  <label className='text-lg'>Country*</label>
                  <input type='text' id='country' className='py-3 px-5 mt-1 rounded-xl bg-prim text-black font-semibold text-lg focus:border-none' placeholder='Country'/>
                </div>
              </div>
            </div>
            <div className="flex flex-col my-4">
              <label className='text-lg'>Postal Code*</label>  
              <input type='text' id='PIN' className='py-3 px-5 mt-1 w-1/4 rounded-xl bg-prim text-black font-semibold text-lg focus:border-none' placeholder='Postal Code'/>
            </div>
            <div className='flex gap-6 mt-8'>
              <button className='py-3 px-6 rounded-xl uppercase font-semibold text-lg border-2 border-gray-900 bg-gray-900 text-prim hover:bg-prim hover:border-perfume hover:text-gray-900'>Save and Deliver here</button>
              <button className='py-3 px-6 rounded-xl uppercase font-semibold text-lg border-2 bg-prim border-perfume hover:bg-gray-900 hover:border-gray-900 hover:text-prim'>Cancel</button>
            </div>
          </div>
        </form>
      </div>
      <div className="col-span-1 rounded-xl shadow-md p-4 px-8 bg-spindle min-h-min">
        <h1 className='uppercase text-lg font-semibold mt-4'>Your Order</h1>
        <hr className='my-6 border-gray-800'/>
        <div className=''>
          <div className='min-h-min px-4 py-5 w-full flex content-center'>
            <div className='w-2/5'>
              <div className='w-3/4 h-full bg-white'>

              </div>
            </div>
            <div className=''>
              <h1 className='text-xl font-semibold'>Product Name</h1>
              <div className='flex'>
                <h1 className='text-md font-semibold mr-4'>Type: <span className='font-normal'>XXX</span></h1>
                <h1 className='text-md font-semibold'>Size: <span className='font-normal'>XXX</span></h1>
              </div>
              <h1 className='text-md font-semibold mr-4'>Quantity: <span className='font-normal'>XXX</span></h1>
              <h1 className='text-xl font-semibold mr-4'>$XXX</h1>
            </div>
          </div>
          <div className='min-h-min px-4 py-5 w-full flex content-center'>
            <div className='w-2/5'>
              <div className='w-3/4 h-full bg-white'>

              </div>
            </div>
            <div className=''>
              <h1 className='text-xl font-semibold'>Product Name</h1>
              <div className='flex'>
                <h1 className='text-md font-semibold mr-4'>Type: <span className='font-normal'>XXX</span></h1>
                <h1 className='text-md font-semibold'>Size: <span className='font-normal'>XXX</span></h1>
              </div>
              <h1 className='text-md font-semibold mr-4'>Quantity: <span className='font-normal'>XXX</span></h1>
              <h1 className='text-xl font-semibold mr-4'>$XXX</h1>
            </div>
          </div>
        </div>
        <hr className='my-6 border-gray-800'/>
        <div className='min-h-min px-4 py-2 w-full flex content-center'>
          <div className='w-2/5'>
            <h1 className='text-xl font-semibold'>Taxes:</h1>
          </div>
          <div className=''>
            <h1 className='text-lg font-semibold'>$XXX</h1>
          </div>
        </div>
        <div className='min-h-min px-4 py-2 w-full h-full flex content-center'>
          <div className='w-2/5'>
            <h1 className='text-xl font-semibold'>Discount:</h1>
          </div>
          <div className=''>
            <h1 className='text-lg font-semibold'>$XXX</h1>
          </div>
        </div>
        <hr className='my-6 border-gray-800'/>
        <div className='min-h-min px-4 py-2 w-full flex content-center'>
          <div className='w-2/5'>
            <h1 className='text-2xl font-semibold uppercase'>Total:</h1>
          </div>
          <div className=''>
            <h1 className='text-2xl font-semibold'>$XXX</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

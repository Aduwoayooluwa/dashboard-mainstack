import Image from 'next/image'
import React, { Fragment } from 'react'

type Props = {}

const MobileView = (props: Props) => {
    return (
        <Fragment>
            <main className='h-screen bg-white flex flex-col md:hidden'>
                <div className='w-full shadow'>
                    <Image className='' src="/assets/main_logo.svg" width={50} height={50} alt="" />
                </div>
                

                <section className='h-full grid place-items-center'>
                    <p className='font-medium px-3 text-sm text-black'>To Access the Dashboard, Kindly use a Desktop or Laptop</p>
                </section>
            </main>
            
        </Fragment>
    )
}

export default MobileView
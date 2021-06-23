import Image from 'next/image';
// import Fuse from 'fuse.js'
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
import { signIn, signOut, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';

// import Autocomplete from 'react-autocomplete';
// import { useEffect, useState } from 'react';

function Header({ products }) {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);
  // const fuse = new Fuse (products, {
  //   keys: [
  //     'title',
  //     'id',
  //     'description',
  //   ],
  //   includeScore: true
  // })

  // const results = fuse.search('fj')
  // const characterResults = results.map(results => results.item)
  // const [value, setValue]= useState()

  // useEffect(() => {
  //   console.log(characterResults)
  // }, [characterResults])

  return (
    <header>
      {/* Top Nav */}
      <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
          <Image
            onClick={() => router.push('/')}
            src='https://links.papareact.com/f90'
            width={150}
            height={40}
            objectFit='contain'
            className='cursor-pointer'
          />
        </div>

        {/* Search */}

        <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 '>
          <input
            characterResults
            className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none'
            type='text'
          />

          {/* <Autocomplete
      shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
      getItemValue={item => item.title}
      items={characterResults}
      renderItem={(item, isHighlighted) =>
      <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}  key={item.id}>
       {item.title}
        </div>  
          // console.log(item)
        }  
        value={value} 
        onChange={(e) =>  setValue(e.target.value)}
        onSelect={(val) =>  val}
      /> */}

          <SearchIcon className='h-12 p-4' />
        </div>

        {/* Right Nav*/}
        <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap '>
          <div
            onClick={!session ? signIn : signOut}
            className=' cursor-pointer link'
          >
            <p className='hover:underline'>
              {session ? `Hello ${session.user.name}` : 'Sign In'}
            </p>
            <p className='font-extrabold md:text-sm '>Account & Lists </p>
          </div>

          <div onClick={()=> router.push('/orders')} className='link'>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm '>& Orders</p>
          </div>

          <div
            onClick={() => router.push('/checkout')}
            className='relative link flex items-center'
          >
            <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>
              {items.length}
            </span>
            <ShoppingCartIcon className='h-10' />
            <p className='hidden md:inline font-extrabold md:text-sm mt-2'>
              Basket
            </p>
          </div>
        </div>
      </div>

      {/*Bottom Nav */}

      <div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white'>
        <p className='link flex items-center'>
          <MenuIcon className='h-6 mr-1' />
          All
        </p>
        <p className='link '>Prime Video</p>
        <p className='link '>Amazon Business</p>
        <p className='link '>Today's Deals</p>
        <p className='link hidden lg:inline-flex '>Electronics</p>
        <p className='link hidden lg:inline-flex '>Food & Grocery</p>
        <p className='link hidden lg:inline-flex '>Prime</p>
        <p className='link hidden lg:inline-flex '>Shopper Toolkit</p>
        <p className='link hidden lg:inline-flex '>Health & Personal Care</p>
        <p className='link hidden lg:inline-flex '>Buy Again</p>
      </div>
    </header>
  );
}

export default Header;

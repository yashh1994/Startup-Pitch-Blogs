import React from 'react'
import Form from 'next/form'
import SearchFormReset from '../SearcFormReset'
import { Search } from 'lucide-react'

export default function SearchForm({query}: {query?: string}) {
  
    return (
    <Form action="/" scroll={false} className='search-form' > 
    
    <input 
    name="query"
    defaultValue={query} 
    className='search-input' 
    placeholder='Search for a startup, pitch, or idea...'
    />


    <div className='flex gap-2'>

        {query && <SearchFormReset />}

        <button type='submit' className='search-btn text-white'>
          <Search className='size-5' />
        </button>
    </div>
    </Form>
  )
}

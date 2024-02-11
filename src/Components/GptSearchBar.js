import React from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const language = useSelector(store=>store.config.lang);
   

  return (
    <div className='pt-[10%] flex justify-center'>

        <form className='w-1/2 bg-black grid grid-cols-12 rounded-lg'>
            <input placeholder={lang[language].placeHolder} type='text' className='p-4 m-4 col-span-10 rounded-lg '/>
            <button className='col-span-2 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'>{lang[language].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar
import React from 'react'

export default function Posts({title,summary,content,filePath,createdAt,author}) {
  //<img src='https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg?crop=1xw:0.9997727789138833xh;center,top&resize=980:*'/>
  console.log(author)
  return (
   
    <div>
    
    <div className='mt-20'>
      <div className='grid grid-cols-2 gap-5px'>
      <div>
       
       {author?.email}
      </div>
      <div className='flex items-center justify-center'>
        <div>
          {title}
        </div>
        <div>
         {summary}
      </div>
      <time>{createdAt}</time>
      </div>
    </div>
    </div>

    </div>
   
  )
}

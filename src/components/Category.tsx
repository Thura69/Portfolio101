import React from 'react'


 const Category:React.FC<any> = ({title,active}) => {
  return (
      <div className={`cursor-pointer  flex   hover:gap-2 items-center gap-1 bottom-2 right-2 rounded-full uppercase font-sans px-[10px] mid:px-[15px] lg:px-[15px] lg:p-[10px] p-[4px] border-[1.5px]   text-[12px] mid:text-[12px] duration-700 ${active?"text-bg bg-textgray":"text-textgray border-textgray"}`}>
    <p>{title}</p>
</div>
  )
}

export default Category;
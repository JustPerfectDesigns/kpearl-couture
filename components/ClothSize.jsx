const ClothSize = ({ name }) => {
  return (
    <div className='flex items-center gap-3 border-b'>
      <span>{name.title}</span>
      <div className='h-[35px] w-[1px] bg-[#B0B0B0]'></div>
      <input
        type='number'
        placeholder='0'
        className='w-[50px] border-none outline-none'
      />
    </div>
  )
}
export default ClothSize

export const Ticket = () => {
  return (
    <div className='h-40 w-[342px] flex flex-col justify-between p-4 bg-[url(/assets/images/pattern-ticket.svg)] bg-contain bg-no-repeat relative'>
      <div>
        <img src="/assets/images/logo-full.svg" alt="logo" />
        <p>Jan 31, 2025 / Austing, TX</p>
      </div>

      <div className='flex gap-3'>
        <img
          alt="image avatar"
          src="/assets/images/image-avatar.jpg" 
          className='size-[45px] rounded-lg'
        />
        <div>
          <p className='text-xl font-medium'>Jonatan Kristof</p>
          <p className='flex'>
            <img src="/assets/images/icon-github.svg" alt="" />
            <p>@jonatankristof</p>
          </p>
        </div>
      </div>
      <p className='text-2xl absolute top-1/2 right-0 transform -translate-y-1/2 rotate-90 text-Neutral-500'>#01609</p>
    </div>
  )
}

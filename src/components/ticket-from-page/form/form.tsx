import { UploadInput } from './upload-input'
import { TextInput } from './text-input'
import { Button } from './button'

export const Form = () => {
  return (
    <div className=''>
      <UploadInput />
      <div className='flex flex-col gap-6'>
        <TextInput
          label='Full Name'
          placeholder='Jonathan Kirstof'
        />
        <TextInput
          label='Email Address'
          placeholder='jonatan@email.com'
          type='email'
        />
        <TextInput
          label='Github Username'
          placeholder='@jonatankristof0101'
        />
        <Button />
      </div>
    </div>
  )
}

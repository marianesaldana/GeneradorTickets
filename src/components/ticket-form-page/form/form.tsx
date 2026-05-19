import { UploadInput } from './upload-input'
import { TextInput } from './text-input'
import { Button } from './button'
import { useForm, type SubmitHandler } from 'react-hook-form'

type Inputs = {
  fullName: string;
  email: string;
  githubUser: string;
}

export const Form = () => {

  const {
    register,
    formState: {errors},
    handleSubmit
  } = useForm<Inputs>()

  const sendForm: SubmitHandler<Inputs>  = (data) => {
    console.log(data)
  }

  return (
    <form className='' onSubmit={handleSubmit(sendForm)}>
      <UploadInput />
      <div className='flex flex-col gap-6'>
        <TextInput
          {...register("fullName", { required: "Full Name is required" })}
          label='Full Name'
          placeholder='Jonathan Kirstof'
          isError={errors.fullName?.type === 'required'}
          errorMessage={errors.fullName?.message}
        />
        <TextInput
          {...register("email", { 
            required: "Email is required", 
            pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
          })}
          label='Email Address'
          placeholder='jonatan@email.com'
          type='email'
          isError={errors.email?.type === 'required' || errors.email?.type === 'pattern'}
          errorMessage={errors.email?.message || 'Please provide a valid email'}
        />
        <TextInput
          {...register("githubUser")}
          label='Github Username'
          placeholder='@jonatankristof0101'
        />
        <Button />
      </div>
    </form>
  )
}

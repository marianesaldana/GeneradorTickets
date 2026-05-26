interface Props {
  label?: string;
  disabled?: boolean;
}

export const Button = ({ label = 'Generate My Ticket', disabled = false }: Props) => {
  return (
    <button
      type='submit'
      disabled={disabled}
      className='bg-Orange-700 text-Neutral-900 w-full rounded-xl py-4 text-xl font-bold cursor-pointer hover:bg-Orange-500 disabled:opacity-60 disabled:cursor-not-allowed'
    >
      {label}
    </button>
  )
}

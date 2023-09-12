import { ButtonBase } from "@/components/react/button/ButtonBase"

const CreateFeedbackPages = () => {
  const handleClick = () => {
    console.log('testing component')
  }
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <ButtonBase text="Testing" onClick={handleClick}/>
    </div>
  )
}

export default CreateFeedbackPages
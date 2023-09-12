import type { IButtonBase } from "./types"
import { Button, createStyles } from '@mantine/core'


export const ButtonBase = (props: IButtonBase) => {
  const {
    text,
    onClick,
    radius = "xl",
    disabled = false,
    uppercase = true,
    compact = false
  } = props

  const useStyles = createStyles({})
  const { cx } = useStyles()
  return (
    <Button
      classNames={{
        root: cx("bg-primary-blue-600")
      }}
      onClick={onClick}
      radius={radius}
      disabled={disabled}
      compact={compact}
      uppercase={uppercase}
    >
      { text }
    </Button>
  )
}


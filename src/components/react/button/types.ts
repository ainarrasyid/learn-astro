import type { MantineNumberSize } from "@mantine/core"

export interface IButtonBase {
  text: string
  onClick?: () => void
  radius?: MantineNumberSize
  disabled?: boolean
  uppercase?: boolean
  compact?: boolean
}
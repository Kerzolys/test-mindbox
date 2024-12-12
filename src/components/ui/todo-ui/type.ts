import { TTodo } from "../../../utils/types"

export type TodoUiProps = {
  todo: TTodo
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}
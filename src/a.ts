type MyTypeHere = {
  name: string
}

export type AppProps = {
  message: string
  count: number
  disabled: boolean
  names: string[]
  status: 'waiting' | 'success'
  obj: {
    id: string
    title: string
  }
  objArr: {
    id: string
    title: string
  }[]
  obj2: object
  obj3: {}
  dict1: {
    [key: string]: MyTypeHere
  }
  dict2: Record<string, MyTypeHere>
  onClick: () => void
  onChange: (id: number) => void
  onChangeV2: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClickV2: (event: React.MouseEvent<HTMLButtonElement>) => void
  onSomething: Function
  optional?: MyTypeHere
  setState: React.Dispatch<React.SetStateAction<number>>
}


/**
 * Useful React Prop Type Examples
 * Relevant for components that accept other React components as props
*/

export declare interface AppPropsV2 {
children?: React.ReactNode,
childrenElement: JSX.Element,
style?: React.CSSProperties,
onChange?: React.FormEventHandler<HTMLInputElement>,
props:  React.ComponentPropsWithoutRef<"button">,
}
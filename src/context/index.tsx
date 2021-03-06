import { 
  createContext, 
  Dispatch, 
  PropsWithChildren, 
  SetStateAction, 
  useState 
} from 'react';

export function contextCreator<A>(defaultValue: A) {
  
  type UpdateType = Dispatch<SetStateAction<typeof defaultValue>>;

  const defaultUpdate: UpdateType = () => defaultValue;

  const ctx = createContext({
    state: defaultValue,
    update: defaultUpdate,
  });

  function Provider(props: PropsWithChildren<{}>) {
    const [state, update] = useState(defaultValue);
    return <ctx.Provider value={{ state, update }} {...props} />;
  }

  return [ctx, Provider] as const;
}

export const [userContext, UserProvider] = contextCreator({ name: 'generic string data', data: {}});
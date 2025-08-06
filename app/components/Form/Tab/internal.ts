export type ApiElement = {
  title: string;
  disabled: boolean;
};

interface Api {
  add: (v: ApiElement) => void;
}

export const tabsContext = Symbol() as InjectionKey<Api>;

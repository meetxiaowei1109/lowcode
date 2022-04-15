interface ButtonsType {
  title: string;
  icon: HTMLElement;
  id: string;
}

export interface MenuSelectEvent {
  domEvent: unknown;
  item: unknown;
  key: string;
  keyPath: string[];
  selectedKeys: string[];
}

export interface CardListType {
  title: string;
  icon: HTMLElement;
  buttons: ButtonsType[];
}

export interface ComponentType {
  id: string;
  field: string;
  fieldName: string;
  componentId: string;
  top: number;
  ref: any;
}

export interface FormChildPropType {
  componentList: ComponentType[];
  id: string;
  item: HTMLDivElement;
  setComponentList: Function;
  fieldName: string;
  field: string;
}

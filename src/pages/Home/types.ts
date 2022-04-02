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

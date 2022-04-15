import React, {
  useState,
  useEffect,
  useRef,
  DragEvent,
  MouseEvent,
} from "react";
import { Form, Input } from "antd";
import { FormChildPropType, ComponentType } from "../../pages/Home/types";
import { throttle } from "../../utils/index";

function FormChild({ id, componentList, ...prop }: FormChildPropType) {
  const itemRef = useRef<HTMLDivElement>(null);
  const componentDrag = throttle((e: DragEvent) => {
    console.log("mouse", e.clientX, e.clientY);
  }, 500);
  const componentDragStart = (e: DragEvent) => {
    e.dataTransfer.setData("id", "1");
  };

  useEffect(() => {
    const top = itemRef.current!.offsetTop;
    console.log(top);
    prop.setComponentList(
      componentList.map((e) => {
        if (e.id === id) {
          e.top = top;
          e.ref = itemRef;
        } else {
          e.top = e.ref.current!.offsetTop;
        }
        return e;
      })
    );
  }, []);

  return (
    <div
      draggable
      ref={itemRef}
      onDragStart={componentDragStart}
      onDrag={componentDrag}
      className="main-div"
    >
      <Form.Item label={prop.fieldName} name={prop.field} className="main-item">
        {prop.item}
      </Form.Item>
      <span className="main-top">
        {componentList.find((e) => e.id === id)?.top}
      </span>
    </div>
  );
}

export default FormChild;

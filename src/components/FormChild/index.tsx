import React, {
  useState,
  useEffect,
  useRef,
  DragEvent,
  MouseEvent,
} from "react";
import { Form, Input } from "antd";
import { throttle } from "../../utils/index";

function FormChild(prop: any) {
  const itemRef = useRef<HTMLDivElement>(null);

  const componentDrag = throttle((e: DragEvent) => {
    console.log("mouse", e.clientX, e.clientY);
  }, 500);
  const componentDragStart = (e: DragEvent) => {
    e.dataTransfer.setData("id", "1");
  };

  useEffect(() => {
    console.log(itemRef.current!.offsetLeft, itemRef.current!.offsetTop);
    console.log(prop.item);
  }, []);

  return (
    <div
      draggable
      ref={itemRef}
      onDragStart={componentDragStart}
      onDrag={componentDrag}
    >
      <Form.Item label="表单名称" name="1" className="main-item">
        {prop.item}
      </Form.Item>
    </div>
  );
}

export default FormChild;

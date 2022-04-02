import {
  BuildOutlined,
  SelectOutlined,
  DeploymentUnitOutlined,
} from "@ant-design/icons";

import { Input } from "antd";

export const String2Element: any = {
  1: <Input />,
  2: <Input.TextArea />,
  3: <Input.Password />,
  4: <Input.TextArea />,
  5: <Input.TextArea />,
  6: <Input.TextArea />,
  7: <Input.TextArea />,
  8: <Input.TextArea />,
  9: <Input.TextArea />,
  10: <Input.TextArea />,
  11: <Input.TextArea />,
  12: <Input.TextArea />,
  13: <Input.TextArea />,
  14: <Input.TextArea />,
  15: <Input.TextArea />,
  16: <Input.TextArea />,
  17: <Input.TextArea />,
  18: <Input.TextArea />,
  19: <Input.TextArea />,
};

export const CardListConfig = [
  {
    title: "输入组件",
    icon: <BuildOutlined />,
    buttons: [
      {
        title: "单行文本",
        icon: <BuildOutlined />,
        id: "1",
      },
      {
        title: "多行文本",
        icon: <BuildOutlined />,
        id: "2",
      },
      {
        title: "密码",
        icon: <BuildOutlined />,
        id: "3",
      },
      {
        title: "计数器",
        icon: <BuildOutlined />,
        id: "4",
      },
    ],
  },
  {
    title: "选择组件",
    icon: <SelectOutlined />,
    buttons: [
      {
        title: "下拉选择",
        icon: <BuildOutlined />,
        id: "5",
      },
      {
        title: "级联选择",
        icon: <BuildOutlined />,
        id: "6",
      },
      {
        title: "单选框组",
        icon: <BuildOutlined />,
        id: "7",
      },
      {
        title: "多选框组",
        icon: <BuildOutlined />,
        id: "8",
      },
      {
        title: "开关",
        icon: <BuildOutlined />,
        id: "9",
      },
      {
        title: "滑块",
        icon: <BuildOutlined />,
        id: "10",
      },
      {
        title: "时间选择",
        icon: <BuildOutlined />,
        id: "11",
      },
      {
        title: "时间范围",
        icon: <BuildOutlined />,
        id: "12",
      },
      {
        title: "日期选择",
        icon: <BuildOutlined />,
        id: "13",
      },
      {
        title: "日期范围",
        icon: <BuildOutlined />,
        id: "14",
      },
      {
        title: "评分",
        icon: <BuildOutlined />,
        id: "15",
      },
      {
        title: "颜色选择",
        icon: <BuildOutlined />,
        id: "16",
      },
      {
        title: "上传",
        icon: <BuildOutlined />,
        id: "17",
      },
    ],
  },
  {
    title: "其他组件",
    icon: <DeploymentUnitOutlined />,
    buttons: [
      {
        title: "行容器",
        icon: <BuildOutlined />,
        id: "18",
      },
      {
        title: "按钮",
        icon: <BuildOutlined />,
        id: "19",
      },
    ],
  },
];

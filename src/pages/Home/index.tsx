import {
  Layout,
  Menu,
  Button,
  Radio,
  Row,
  Col,
  Card,
  Tabs,
  Form,
  Input,
  InputNumber,
  Switch,
} from "antd";
import { useState, useEffect, MouseEvent, DragEvent, useRef } from "react";
import { MenuSelectEvent, ComponentType } from "./types";
import { CardListConfig, String2Element } from "./config";
import FormChild from "../../components/FormChild";
import { throttle } from "../../utils/index";
import "./index.less";

const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;

function Home() {
  const [checked, setChecked] = useState(true);
  const [filedName, setFiledName] = useState(0);
  const [componentList, setComponentList] = useState<ComponentType[]>([]);

  const handleMenuSelect = (e: MenuSelectEvent) => {
    console.log(e.key);
  };
  const tabsChange = (e: unknown) => {
    console.log(e);
  };
  const onFinish = (e: unknown) => {
    console.log(e);
  };
  const onFinishFailed = (e: unknown) => {
    console.log(e);
  };

  const componentDrag = throttle((e: DragEvent) => {
    console.log("mouse", e.clientX, e.clientY);
  }, 500);
  const componentDragStart = (e: DragEvent, id: string) => {
    e.dataTransfer.setData("id", id);
  };
  const handleDrop = (e: DragEvent) => {
    // console.log("Drop", e.clientX, e.clientY);
    // const listLength = componentList.length;
    // let ans: ComponentType = { id: "", componentId: "", top: 0 };
    // let difference = Math.abs(componentList[listLength - 1].top - e.clientY);
    // let index;
    // for (let i = 0; i < listLength; i++) {
    //   const temp = Math.abs(componentList[i].top - e.clientY);
    //   if (temp <= difference) {
    //     difference = temp;
    //     ans = componentList[i];
    //     index = i;
    //   }
    // }

    // console.log(difference, index);
    const temp = [
      ...componentList,
      {
        id: Date.now() + "1109",
        field: 'field' + filedName,
        fieldName: '表单名称'+ filedName,
        componentId: e.dataTransfer.getData("id"),
        top: e.clientY,
        ref: null,
      },
    ];
    temp.sort((a,b)=>a.top-b.top);
    setFiledName(filedName+1);
    setComponentList(temp);
  };

  // const handleDragOver = throttle((e: MouseEvent) => {
  //   console.log(e);
  //   e.preventDefault();
  // }, 500);
  const handleDragOver = (e: MouseEvent) => {
    e.preventDefault();
  };

  return (
    <Layout className="layout">
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          onSelect={handleMenuSelect}
        >
          <Menu.Item key="1">菜单1</Menu.Item>
          <Menu.Item key="2">菜单2</Menu.Item>
          <Menu.Item key="3">菜单3</Menu.Item>
        </Menu>
      </Header>
      <Content>
        <div className="site-layout-content">
          <section className="content-section">
            <Row gutter={[16, 16]}>
              {CardListConfig.map((e, i) => (
                <Col span={24} key={i}>
                  <Card
                    title={e.title}
                    extra={e.icon}
                    type="inner"
                    size="small"
                  >
                    <div className="card-me">
                      <Row gutter={[16, 16]}>
                        {e.buttons.map((item, index) => (
                          <Col span={12} key={index}>
                            <Button
                              icon={item.icon}
                              block
                              draggable
                              onDragStart={(e) => {
                                componentDragStart(e, item.id);
                              }}
                              onDrag={componentDrag}
                            >
                              {item.title}
                            </Button>
                          </Col>
                        ))}
                      </Row>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </section>
          <main
            className="content-main"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <Form className="main-form" name="basic" labelCol={{ span: 5 }}>
              {componentList.map((e) => (
                <FormChild
                  key={e.id}
                  id={e.id}
                  field={e.field}
                  fieldName={e.fieldName}
                  item={String2Element[e.componentId]}
                  componentList={componentList}
                  setComponentList={setComponentList}
                />
              ))}
            </Form>
          </main>
          <section className="content-section tabs-params">
            <Tabs defaultActiveKey="2" centered onChange={tabsChange}>
              <TabPane tab="组件属性" key="1">
                Content of Tab Pane 1
              </TabPane>
              <TabPane tab="表单属性" key="2">
                <Form
                  name="basic"
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Form.Item label="表单名称" name="1">
                    <Input />
                  </Form.Item>
                  <Form.Item label="表单模型" name="2">
                    <Input />
                  </Form.Item>
                  <Form.Item label="校验模型" name="3">
                    <Input />
                  </Form.Item>
                  <Form.Item label="表单尺寸" name="4">
                    <Radio.Group
                      size="small"
                      optionType="button"
                      buttonStyle="solid"
                    >
                      <Radio.Button value="a">中等</Radio.Button>
                      <Radio.Button value="b">较小</Radio.Button>
                      <Radio.Button value="c">迷你</Radio.Button>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item label="表单对齐" name="5">
                    <Radio.Group
                      size="small"
                      optionType="button"
                      buttonStyle="solid"
                    >
                      <Radio.Button value="a">左对齐</Radio.Button>
                      <Radio.Button value="b">右对齐</Radio.Button>
                      <Radio.Button value="c">顶部对齐</Radio.Button>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item label="标签宽度" name="6">
                    <InputNumber />
                  </Form.Item>
                  <Form.Item label="栅格间隔" name="7">
                    <InputNumber />
                  </Form.Item>
                  <Form.Item label="禁用表单" name="8">
                    <Switch checked={checked} />
                  </Form.Item>
                </Form>
              </TabPane>
            </Tabs>
          </section>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        LowCode ©2018 Created by EvilKind
      </Footer>
    </Layout>
  );
}

export default Home;

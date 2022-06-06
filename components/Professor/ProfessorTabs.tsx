import { List, Tabs, Typography } from "antd";
import {
    FontColorsOutlined,
    CameraOutlined
} from '@ant-design/icons';
import { Iprofessor } from "../../interface/teacher";
import { FaQuoteLeft } from 'react-icons/fa';
import styles from './style.module.sass'
interface ProfessorTabsProps {
    professor?: Iprofessor
}

export default function ProfessorTabs(props: ProfessorTabsProps) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { TabPane } = Tabs;
    return (
        <>

            <Tabs style={{ marginTop: '2rem' }} defaultActiveKey="1" centered>
                <TabPane
                    tab={
                        <span>
                            <FontColorsOutlined />
                            Frases icônicas
                        </span>
                    }
                    key="1"
                >
                    <List
                        size="large"
                        bordered
                        dataSource={props.professor?.phrases || ['']}
                        renderItem={item =>
                            <List.Item>
                                <FaQuoteLeft style={{ fontSize: '24px' }} />
                                <Typography.Title level={3} italic className={styles.quote}>{item}</Typography.Title>
                            </List.Item>
                        }
                    />
                </TabPane>
                {/* <TabPane
                    tab={
                        <span>
                            <CameraOutlined />
                            Galeria
                        </span>
                    }
                    key="2"
                >
                    <ProfessorGallery professor={props.professor} />
                </TabPane> */}

            </Tabs>
        </>
    )
}

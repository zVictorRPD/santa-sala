
import { List, Tabs, Typography } from "antd";
import {
    FontColorsOutlined,
    CameraOutlined
} from '@ant-design/icons';
import AlunoGallery from "./AlunoGallery";
import { Ialuno } from "../../interface/student";
import { FaQuoteLeft } from 'react-icons/fa';
import styles from './style.module.sass'
interface AlunoTabsProps {
    aluno?: Ialuno
}

export default function AlunoTabs(props: AlunoTabsProps) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { TabPane } = Tabs;
    return (
        <>

            <Tabs style={{ marginTop: '2rem' }} defaultActiveKey="1" centered>
                <TabPane
                    tab={
                        <span>
                            <CameraOutlined />
                            Galeria
                        </span>
                    }
                    key="1"
                >
                    <AlunoGallery aluno={props.aluno} />
                </TabPane>
                <TabPane
                    tab={
                        <span>
                            <FontColorsOutlined />
                            Frases icônicas
                        </span>
                    }
                    key="2"
                >
                    <List
                        size="large"
                        bordered
                        dataSource={props.aluno?.phrases || ['']}
                        renderItem={item =>
                            <List.Item>
                                <FaQuoteLeft style={{fontSize:'24px'}} />
                                <Typography.Title level={3} italic className={styles.quote}>{item}</Typography.Title>
                            </List.Item>
                        }
                    />
                </TabPane>
            </Tabs>
        </>
    )
}

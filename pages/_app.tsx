import '../styles/globals.sass'
import type { AppProps } from 'next/app'
import { Layout, ConfigProvider } from 'antd';
import 'antd/dist/antd.variable.min.css';
import HeaderMenu from "../components/layout/Menu";
import { RecoilRoot } from 'recoil';
import { Container } from '../styles/global';
const { Header, Footer, Content } = Layout;
ConfigProvider.config({
  theme: {
    primaryColor: '#77449C',
  },
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout style={{ minHeight: "100vh" }}>
        <Header className='header-style'>
          <HeaderMenu />
        </Header>
        <Content style={{backgroundColor: '#fff'}}>
          <Container>
            <Component {...pageProps} />
          </Container>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Site criado por: zVictor_RPD com a colaboração de Felps e Paçoca <br />Todos os direitos reservados ©
        </Footer>
      </Layout>
    </RecoilRoot>
  )
}

export default MyApp

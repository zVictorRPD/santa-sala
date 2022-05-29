import { Menu } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const Logo = styled.div`
    width:200px;
    height:60px;
    display:flex; 
    align-items: center;
    justify-content:center;
    margin-right:auto;
    cursor:pointer;
    h3{
        color: #fff;
        margin: 0;
        font-size: 24px;
        margin-left: 10px;
    }
`

export default function HeaderMenu() {
    return (
        <>
            <Menu
                theme='dark'
                mode='horizontal'
                style={{ justifyContent: 'flex-end' }}
            >
                <Link href="/">
                    <Logo>
                        <Image
                            src='/assets/logo.png'
                            alt='logo do site'
                            width='40px'
                            height='40px'
                        />
                        <h3>Santa Sala</h3>
                    </Logo>
                </Link>
                <Menu.Item><Link href="/alunos">Alunos</Link></Menu.Item>
                <Menu.Item><Link href="/professores">Professores</Link></Menu.Item>
                <Menu.Item><Link href="/materias">Matérias</Link></Menu.Item>
                <Menu.Item><Link href="/mencao-honrosa">Menções Honrosas</Link></Menu.Item>
                {/* <Dropdown overlay={studentMenu} placement="bottomLeft"><Menu.Item>Item 1</Menu.Item></Dropdown> */}
            </Menu>
        </>

    )
}
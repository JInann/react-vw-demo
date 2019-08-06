import React,{Component} from 'react';
import styled from 'styled-components'
import './index.css'

let vw = num=>((num/750)*100).toFixed(3)+'vw'

const MyList = styled.div`
    display:grid;
    grid-template-columns:repeat(4,1fr);
`
const ListItem = styled.div`
     text-align:center;   
`
const ItemTitle = styled.div`
    font-size:${vw(28)};
    color:#282828;
`
const Img = styled.img`
    font-size:0;
`
const ItemImg = styled(Img)`
    width:${vw(60)};
    height:${vw(60)};
`
const Main = styled.div`
    padding:${vw(34)};
`

class UserCenter extends Component{
    render(){
        return (
            <div className="usercenter">
                <div className="banner">
                    <div className="info">
                        <div className="photo">
                            <img src={require('../img/photo.png')} alt=""/>
                        </div>
                        <div className="name">NAME</div>
                        <div className="address">嘿嘿嘿</div>
                    </div>
                </div>
                <Main>
                <div className="mylist">
                    <h2>我的列表</h2>
                    <MyList>
                        <ListItem>
                            <ItemImg src={require('../img/家人管理.png')}></ItemImg>
                            <ItemTitle>我的菜单</ItemTitle>
                        </ListItem>
                        <ListItem>
                            <ItemImg src={require('../img/我的家财.png')}></ItemImg>
                            <ItemTitle>我的菜单</ItemTitle>
                        </ListItem>
                    </MyList>
                </div>
                </Main> 
            </div>
        )
    }
}

export default UserCenter
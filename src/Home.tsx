import React from 'react';
import "./Home.css";
import {Card, Image} from "antd";
import {HeartOutlined, ReloadOutlined} from '@ant-design/icons';

const reload = () => {
    // todo 刷新菜单
    console.log("11")
}
const to_video = (url: string) => {
    window.open(url)
}
const like = () => {

}
const Home: React.FC = () => (
    <div className="connect">
        <div className="card-div">
            <Card className="card-content">
                <div onClick={() => to_video("https://www.bilibili.com/video/BV1vk4y127ZB/")}>
                    <p>红烧肉</p>
                    <Image
                        preview={false}
                        height={150}
                        width={200}
                        src="https://i3.meishichina.com/atta/recipe/2018/09/03/2018090315359567641295948.jpg?x-oss-process=style/p800"
                    />
                    <p>咸香</p>
                </div>
                <span style={{marginRight: 10}}>喜欢这个推荐就点个赞吧</span>
                <HeartOutlined onClick={like} style={{color: '#EF1414'}}/>
            </Card>
            <Card className="card-content">
                <div onClick={() => to_video("https://www.bilibili.com/video/BV1QV4y1y7tx/")}>
                    <p>鱼香肉丝</p>
                    <Image
                        preview={false}
                        height={150}
                        width={200}
                        src="https://i3.meishichina.com/atta/recipe/2020/09/10/20200910159975029967423310157115.jpg?x-oss-process=style/p800"
                    />
                    <p>咸辣</p>
                </div>
                <span style={{marginRight: 10}}>喜欢这个推荐就点个赞吧</span>
                <HeartOutlined onClick={like} style={{color: '#EF1414'}}/>
            </Card>
            <Card className="card-content">
                <div onClick={() => to_video("https://www.bilibili.com/video/BV1RV41167WV/")}>
                    <p>拍黄瓜</p>
                    <Image
                        preview={false}
                        height={150}
                        width={200}
                        src="https://i3.meishichina.com/atta/recipe/2021/07/26/20210726162731208912730210113593.jpg?x-oss-process=style/p800"
                    />
                    <p>清淡</p>
                </div>
                <span style={{marginRight: 10}}>喜欢这个推荐就点个赞吧</span>
                <HeartOutlined onClick={like} style={{color: '#EF1414'}}/>
            </Card>
        </div>
        <div className="other-div">
            <span className="reload-span">其他菜单</span>
            <ReloadOutlined className="reload" onClick={reload}/>
        </div>
    </div>
);

export default Home;
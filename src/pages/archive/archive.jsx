import React, {Component} from 'react';
import HomeContent from './../home/homeContent/homeContent'
import ArchiveCont from './component/archiveCont'
import './../../assets/common.css'
import './../home/home.css'
import './archive.css'

export default class archive extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        let item = {
            title: '啊实打实大是就考虑到',
            content: 'gernm,nfkjasdakdhasID就爱看大神hi骄傲未见重大无故而安慰',
            time: '2019-01-11 00:00:00',
            type: 'JavaScript',
        };
        let gs = [
            {
                year: '2019',
                content: [
                    {
                        month: '3',
                        content: [
                            {
                                title: 'test1',
                                content: 'test1',
                                time: '2019-01-11 00:00:00',
                                type: 'JavaScript',
                            },{
                                title: 'test2',
                                content: 'test2',
                                time: '2019-01-11 00:00:00',
                                type: 'JavaScript',
                            }
                        ]
                    },
                    {
                        month: '4',
                        content: [
                            {
                                title: 'test4-1',
                                content: 'test4-1',
                                time: '2019-01-11 00:00:00',
                                type: 'JavaScript',
                            },{
                                title: 'test4-2',
                                content: 'test4-2',
                                time: '2019-01-11 00:00:00',
                                type: 'JavaScript',
                            }
                        ]
                    }
                ]
            },
            {
                year: '2018',
                content: [
                    {
                        month: '3',
                        content: [
                            {
                                title: 'test1',
                                content: 'test1',
                                time: '2019-01-11 00:00:00',
                                type: 'JavaScript',
                            },{
                                title: 'test2',
                                content: 'test2',
                                time: '2019-01-11 00:00:00',
                                type: 'JavaScript',
                            }
                        ]
                    },
                    {
                        month: '4',
                        content: [
                            {
                                title: 'test4-1',
                                content: 'test4-1',
                                time: '2019-01-11 00:00:00',
                                type: 'JavaScript',
                            },{
                                title: 'test4-2',
                                content: 'test4-2',
                                time: '2019-01-11 00:00:00',
                                type: 'JavaScript',
                            }
                        ]
                    }
                ]
            },
        ];
        return (
            <div className="container">
                <div className="archive-content">
                    <div className="archives">
                        <div className="line"> </div>
                        <div className="archives-warp">
                            <p className="blog-total">目前共计18篇文章</p>
                            {
                                gs.map((item,key) => {
                                    return(
                                        <ArchiveCont key={key} archiveItem={item}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

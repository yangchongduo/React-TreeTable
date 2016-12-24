import React from 'react';
import ReactDOM from 'react-dom';
import {
    TreeTable,
    TreeHeadCol
} from '../../lib/Index.js';
import {
    noKeyData,
    data
} from './fackData';

const Component = React.Component;

class Main extends Component {
    constructor() {
        super();
        this.state = {
            page: 1,
            list: [],
            length: 10,
            data: data,
            selected: [],
            expandRowKeys: []
        }
    }

/*    componentWillMount() {
        fetch('http://localhost:3000/list').then(res => {
            return res.json();
        }).then(json => {
            this.setState({
                list: json
            })
        })
    }*/
    render() {
        const dataFormat = {
            "a": function (cell, level, row) {
                return cell
            },
            "b": function (cell, level, row, index, col) {
                if (level != 0) {
                    // let key = col[index - 1];
                    // return row[key.id || key];
                    return '';
                } else {
                    return cell + ' I am row b'
                }
            },
            "c": function (cell, level, row, index, col) {
                if (level != 0) {
                    let key = col[index - 2];
                    return row[key.id || key];
                } else {
                    return cell
                }
            },
            "d": function (cell, level, row, index, col) {
                if (level != 0) {
                    let key = col[index - 1];
                    return row[key.id || key];
                } else {
                    return cell + 1
                }
            }
        };
        const style = {
            margin: "20px",
            background: "#fff"
        };
        return (
            <div>
                <div style={style}>
                    <TreeTable
                        isTree={true}
                        iskey="caller"
                        data={data}
                        startArrowCol={1}
                      //  arrowRender={arrowRender}
                    >
                        <TreeHeadCol falg="1" width={200} dataField="elapsedTime" dataFormat={dataFormat.a}>时间</TreeHeadCol>
                     <TreeHeadCol dataField="caller" dataSort={true} width={800}
                                     dataFormat={dataFormat.a}>方法</TreeHeadCol>
                    </TreeTable>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<Main/>, document.querySelector('.main'));

/**
 * Created by BG236557 on 2016/5/27.
 */
import React from 'react';
import {extend} from './Util'

const Component = React.Component;

export default class TreeRow extends Component {
    constructor(props) {
        super(props);
    }

    handleToggle(e) {
        const {open, data, parent} = this.props;
        e.stopPropagation();
        let options = extend({}, {
            open, data, parent
        });
        this.props.onClick(options);
    }

    cellRender() {
        let output = [];
        let arrow = -1;
        let {
            open,
            data,
            cols,
            iskey,
            level,
            isTree,
            hashKey,
            checked,
            isSelect,
            arrowCol,
            colIndex,
            selectRow,
            arrowRender,
            hideSelectColumn,
            childrenPropertyName
        } = this.props;
        const _key = hashKey ? data.__uid : data[iskey];
        let colSpan, colTarget;

        if (isSelect && !hideSelectColumn) {
            output.push(
                <td key={_key} style={{backgroundColor: checked && selectRow.bgColor, textAlign: 'center'}}>
                    <input type={selectRow.mode} checked={checked} readOnly={true}/>
                </td>
            )
        }
        var preLevel;
        cols.map((key, i, col) => {

            let cell = data[key.id], dataFormat = key.dataFormat, props = {colSpan: null, rowSpan: null};

            const style = {
                width: key.width,
                maxWidth: key.width,
                textAlign: key.dataAlign,
                display: key.hidden && 'none',
                backgroundColor: isSelect && checked && selectRow.bgColor
            };

            if (dataFormat) {
                cell = dataFormat(data[key.id], level, data, i, col)
            }
            if (colSpan && colTarget < i && i < colSpan) return;
            if (key.render) {
                props = key.render(colIndex, data[key.id], data, col) || props;
                colSpan = props.colSpan + i;
                colTarget = i;
            }
            if (props.colSpan === 0 || props.rowSpan === 0)return;
            if (i > arrowCol) {
                arrow++;
            } else if (i === arrowCol) {
                arrow = cell || cell === 0 ? 0 : -1;
            }

            let showArrow = data[childrenPropertyName];
            showArrow = showArrow && showArrow.length > 0;

            const type = typeof key.showArrow;

            if (type === 'function') {
                showArrow = key.showArrow.call(null, data[key.id], level, data, i, col);
            } else if (type === 'boolean') {
                showArrow = key.showArrow;
            }
            output.push(
                <td style={style}
                    key={'' + _key + i}
                    colSpan={props.colSpan}
                    rowSpan={props.rowSpan}
                >
                    { preLevel !== level ? (
                        <p >
                            {isTree && showArrow && !arrow &&
                            <span className="table-arrow" onClick={this.handleToggle.bind(this)}>
                            {arrowRender(open)}
                        </span>
                            }
                            <span>{cell}</span>
                        </p>
                    ) : (
                        <p style={{marginLeft: level * 15 + 'px'}}>
                            {(isTree && showArrow && !arrow) ? (
                                <span className="table-arrow" onClick={this.handleToggle.bind(this)}>{arrowRender(open)}
                        </span>
                            ) : (<span className="table_self"></span>) }

                            <span>{cell}</span>
                        </p>
                    )}
                </td>
            )
            preLevel = level
        });

        return output;
    }

    render() {
        let {
            data,
            level,
            hover,
            isTree,
            checked,
            isSelect,
            selectRow,
            hoverStyle,
            onMouseOut,
            onMouseOver
        } = this.props;
        return (
            <tr style={hover ? hoverStyle : {}}
                className={isTree && !level && "ancestor" || null}
                onMouseOut={onMouseOut} onMouseOver={onMouseOver}
                onClick={isSelect ? ()=>selectRow.onSelect(!checked, data) : ()=> {
                    return false;
                }}
            >
                {this.cellRender()}
            </tr>
        )
    }
}

TreeRow.defaultProps = {
    level: 0,
    hashKey: false,
    hideSelectColumn: false,
    arrowRender: (open)=> {
        return (
            <i
                className="fa fa-play"
                style={open ? {transform: 'rotate(90deg)'} : {}}
            > </i>
        )
    }
};
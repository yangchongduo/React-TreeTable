'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Util = require('./Util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by BG236557 on 2016/5/27.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Component = _react2.default.Component;

var TreeRow = function (_Component) {
    _inherits(TreeRow, _Component);

    function TreeRow(props) {
        _classCallCheck(this, TreeRow);

        return _possibleConstructorReturn(this, (TreeRow.__proto__ || Object.getPrototypeOf(TreeRow)).call(this, props));
    }

    _createClass(TreeRow, [{
        key: 'handleToggle',
        value: function handleToggle(e) {
            var _props = this.props,
                open = _props.open,
                data = _props.data,
                parent = _props.parent;

            e.stopPropagation();
            var options = (0, _Util.extend)({}, {
                open: open, data: data, parent: parent
            });
            this.props.onClick(options);
        }
    }, {
        key: 'cellRender',
        value: function cellRender() {
            var _this2 = this;

            var output = [];
            var arrow = -1;
            var _props2 = this.props,
                open = _props2.open,
                data = _props2.data,
                cols = _props2.cols,
                iskey = _props2.iskey,
                level = _props2.level,
                isTree = _props2.isTree,
                hashKey = _props2.hashKey,
                checked = _props2.checked,
                isSelect = _props2.isSelect,
                arrowCol = _props2.arrowCol,
                colIndex = _props2.colIndex,
                selectRow = _props2.selectRow,
                arrowRender = _props2.arrowRender,
                hideSelectColumn = _props2.hideSelectColumn,
                childrenPropertyName = _props2.childrenPropertyName;

            var _key = hashKey ? data.__uid : data[iskey];
            var colSpan = void 0,
                colTarget = void 0;

            if (isSelect && !hideSelectColumn) {
                output.push(_react2.default.createElement(
                    'td',
                    { key: _key, style: { backgroundColor: checked && selectRow.bgColor, textAlign: 'center' } },
                    _react2.default.createElement('input', { type: selectRow.mode, checked: checked, readOnly: true })
                ));
            }
            var preLevel;
            cols.map(function (key, i, col) {

                var cell = data[key.id],
                    dataFormat = key.dataFormat,
                    props = { colSpan: null, rowSpan: null };

                var style = {
                    width: key.width,
                    maxWidth: key.width,
                    textAlign: key.dataAlign,
                    display: key.hidden && 'none',
                    backgroundColor: isSelect && checked && selectRow.bgColor
                };

                if (dataFormat) {
                    cell = dataFormat(data[key.id], level, data, i, col);
                }
                if (colSpan && colTarget < i && i < colSpan) return;
                if (key.render) {
                    props = key.render(colIndex, data[key.id], data, col) || props;
                    colSpan = props.colSpan + i;
                    colTarget = i;
                }
                if (props.colSpan === 0 || props.rowSpan === 0) return;
                if (i > arrowCol) {
                    arrow++;
                } else if (i === arrowCol) {
                    arrow = cell || cell === 0 ? 0 : -1;
                }

                var showArrow = data[childrenPropertyName];
                showArrow = showArrow && showArrow.length > 0;

                var type = _typeof(key.showArrow);

                if (type === 'function') {
                    showArrow = key.showArrow.call(null, data[key.id], level, data, i, col);
                } else if (type === 'boolean') {
                    showArrow = key.showArrow;
                }
                output.push(_react2.default.createElement(
                    'td',
                    { style: style,
                        key: '' + _key + i,
                        colSpan: props.colSpan,
                        rowSpan: props.rowSpan
                    },
                    preLevel !== level ? _react2.default.createElement(
                        'p',
                        null,
                        isTree && showArrow && !arrow && _react2.default.createElement(
                            'span',
                            { className: 'table-arrow', onClick: _this2.handleToggle.bind(_this2) },
                            arrowRender(open)
                        ),
                        _react2.default.createElement(
                            'span',
                            null,
                            cell
                        )
                    ) : _react2.default.createElement(
                        'p',
                        { style: { marginLeft: level * 15 + 'px' } },
                        isTree && showArrow && !arrow ? _react2.default.createElement(
                            'span',
                            { className: 'table-arrow', onClick: _this2.handleToggle.bind(_this2) },
                            arrowRender(open)
                        ) : _react2.default.createElement('span', { className: 'table_self' }),
                        _react2.default.createElement(
                            'span',
                            null,
                            cell
                        )
                    )
                ));
                preLevel = level;
            });

            return output;
        }
    }, {
        key: 'render',
        value: function render() {
            /* this.setState({
             flag: this.state.flag + 1
             })*/
            var _props3 = this.props,
                data = _props3.data,
                level = _props3.level,
                hover = _props3.hover,
                isTree = _props3.isTree,
                checked = _props3.checked,
                isSelect = _props3.isSelect,
                selectRow = _props3.selectRow,
                hoverStyle = _props3.hoverStyle,
                onMouseOut = _props3.onMouseOut,
                onMouseOver = _props3.onMouseOver;

            return _react2.default.createElement(
                'tr',
                { style: hover ? hoverStyle : {},
                    className: isTree && !level && "ancestor" || null,
                    onMouseOut: onMouseOut, onMouseOver: onMouseOver,
                    onClick: isSelect ? function () {
                        return selectRow.onSelect(!checked, data);
                    } : function () {
                        return false;
                    }
                },
                this.cellRender()
            );
        }
    }]);

    return TreeRow;
}(Component);

exports.default = TreeRow;


TreeRow.defaultProps = {
    level: 0,
    hashKey: false,
    hideSelectColumn: false,
    arrowRender: function arrowRender(open) {
        return _react2.default.createElement(
            'i',
            {
                className: 'fa fa-play',
                style: open ? { transform: 'rotate(90deg)' } : {}
            },
            ' '
        );
    }
};
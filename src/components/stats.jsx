import React, { PropTypes } from 'react';
export default React.createClass({
  propTypes : {
    stats: React.PropTypes.shape({
      inboundMessages: React.PropTypes.number.isRequired,
      outboundMessages: React.PropTypes.number.isRequired,
      messageTypes: React.PropTypes.object.isRequired
    }).isRequired
  },
  render (){
    return (
      <div>
        <span title="inbound messages">
          <i className="fa fa-arrow-down"></i>&nbsp;
          <strong>{this.props.stats.inboundMessages}</strong>&nbsp;
        </span>
        <span title="outbound messages">
          <i className="fa fa-arrow-up"></i>&nbsp;
          <strong>{this.props.stats.outboundMessages}</strong>
        </span>&nbsp;|&nbsp;
        <strong title="collection operations">collection ops: {this.props.stats.messageTypes.collections}</strong>&nbsp;|&nbsp;
        <strong title="method calls">method calls: {this.props.stats.messageTypes.methodCalls}</strong>&nbsp;|&nbsp;
        <strong title="subscriptions">subs: {this.props.stats.messageTypes.subscriptions}</strong>
      </div>
    )
  }
});
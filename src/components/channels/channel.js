import React from 'react';

class Channel extends React.Component {

    onClick(e) {
        e.preventDefault();
        const {setChannel, channel} = this.props;
        setChannel(channel);
    }
    render() {
        const {channel,activeChannel} = this.props;
        const active = channel === activeChannel ? "active" : "";
        return(
            <li className={active}>
            <a onClick={this.onClick.bind(this)}>
            {channel.name}
            </a>
            </li>
        )
    }
}


export default Channel

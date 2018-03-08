import React from "react";
import Channel from "./channel";

class ChannelList extends React.Component {
    render() {
        return(
            <ul>
            {
                this.props.channels.map(chan =>{
                 return <Channel
                    channel={chan}
                    setChannel={this.props.setChannel}
                        />
                })

            }
            </ul>
        )
    }
}


export default ChannelList

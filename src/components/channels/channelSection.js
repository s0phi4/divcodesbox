import React from "react";
import ChannelForm from "./channelForm";
import ChannelList from "./channelList"

class ChannelSection extends React.Component {
    render() {
        return(
            <div>
                <ChannelForm
                {...this.props}
            />
                 <ChannelList
                {...this.props}
            />
            </div>
        )
    }
}


export default ChannelSection

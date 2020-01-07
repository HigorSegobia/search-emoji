import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";

import EmojiResultRow from "./EmojiResultRow"
import "./EmojiResult.css";

export default class EmojiResult extends PureComponent{
    static propTypes = {
        emojiData: PropTypes.array
    };

    componentDidMount(){
        this.clipboard = new Clipboard(".copy-to-clipboard");
    }

    componentWillMount(){
        this.clipboard.destroy();
    }


    render() {
        return (
            <div className="component-emoji-results">
                {this.props.emojiData.map(emojiData => (
                    <EmojiResultRow
                    key={emojiData.title}
                    symbol={emojiData.symbol}
                    title={emojiData.title}
                    />
                ))}
            </div>
        );
    }
}
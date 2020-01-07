import React, {PureComponent} from 'react';
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
import filterEmoji from "./filterEmoji";


export default class App extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      filterEmoji: filterEmoji("", 20)
    };
  }

  handleSearchChange = event => {
    this.setState({
      filterEmoji: filterEmoji(event.target.value, 20)
    });
  };

  render (){
    return (
      <div>
        <Header />
        <SearchInput texteChange = {this.handleSearchChange} />
        <EmojiResults emojiData = {this.state.filterEmoji} />
      </div>
    );
  }
}

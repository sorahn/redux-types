import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { Store } from "./store";

type ToggleProps = {
  toggle: boolean;
};

type ToggleState = {
  bar: number;
};

class MyToggle extends Component<ToggleProps, ToggleState> {
  state: ToggleState = {
    bar: 5
  };

  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.props.toggle)}</pre>
        <span>{this.state.bar}</span>
      </div>
    );
  }
}

//
// Like this, you get an error in App.tsx
// JSX element type 'Toggle' does not have any construct or call signatures.
// export default compose(
//   injectIntl,
//   connect((store: Store) => ({ toggle: store.toggle }))
// )(MyToggle);

//
// Like this, you get a different error in App.tsx
// Property 'toggle' is missing in type '{}' but required in type 'Readonly<ToggleProps>'.
// export default compose<typeof MyToggle>(
//   injectIntl,
//   connect((store: Store) => ({ toggle: store.toggle }))
// )(MyToggle);

//
// from Stackoverflow:
// compiles, but why bother if you've just gotta stuff 'any' in there ?
export default compose(
  injectIntl,
  connect((store: Store) => ({ toggle: store.toggle }))
)(MyToggle) as any;

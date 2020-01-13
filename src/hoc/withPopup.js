import React from "react";

const withPopup = WrappedComponent => {
  return class WithCollapse extends React.Component {
    state = {
      isOpen: false
    };

    componentDidUpdate() {
      if (this.state.isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    }

    handlePopupShow = () => {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen
      }));
    };

    render() {
      return (
        <WrappedComponent
          handlePopupShow={this.handlePopupShow}
          isOpen={this.state.isOpen}
          {...this.props}
        />
      );
    }
  };
};

export default withPopup;

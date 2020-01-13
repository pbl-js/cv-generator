import React from "react";

const withPopup = WrappedComponent => {
  return class WithCollapse extends React.Component {
    state = {
      education: false,
      skills: false,
      language: false
    };

    componentDidUpdate() {
      const { education, experience, language } = this.state;
      if (education || experience || language) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    }

    handlePopupShow = (type, value) => {
      this.setState({
        [type]: !value
      });
    };

    render() {
      return (
        <WrappedComponent
          handlePopupShow={this.handlePopupShow}
          popups={this.state}
          {...this.props}
        />
      );
    }
  };
};

export default withPopup;

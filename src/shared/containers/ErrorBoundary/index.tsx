import React, {Component} from 'react';

import ErrorIndicator from '../../components/ErrorIndicator';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  render() {
    return this.state.hasError ? <ErrorIndicator /> : this.props.children;
  }
}

export default ErrorBoundary;

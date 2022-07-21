import React from 'react';

class ErrorBoundary extends React.Component {
   constructor() {
      super();
      this.state = { hasError: false };
   }

   componentDidCatch(error) {
      // Log error
      // Send error to analytics
      // Trigger rendering alternative JSX
      // ...
      this.setState({ hasError: true});
   }

   render() {
      if (this.state.hasError) {
         return <p>Something went wrong!</p>
      }
      return this.props.children;
   }
}

export default ErrorBoundary;

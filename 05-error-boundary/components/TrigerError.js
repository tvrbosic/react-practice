import React from 'react';

class TriggerError extends React.Component {
   componentDidMount() {
      throw new Error('Error for testing Error Boundary!');
   };

   render() {
      return <div>Trigger error component</div>
   }
}

export default TriggerError;
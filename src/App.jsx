import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         arr:[
            {
               name:"faeze firozi",
               id:"1"
               },
               {
               name:"mahbobe alizade",
               id:"2"
               },
               {
                  name:"zohre khadem",
               id:"3"
               }
              
      ]
   };
   }
    
   render() {
      return (
         <div>
          {this.state.arr.map((a, i) => <Com3 key = {i} 
                     arr= {a} />)}          
         </div>
      );
   }
}
class Com3 extends React.Component {
  
   render() {
      return (
         <div>
         {this.props.arr.name}
         {this.props.arr.id}
         </div>
      );
   }
}
export default App;

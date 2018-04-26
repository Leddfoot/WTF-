import React from 'react';
// fetch('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100 ')



export class SomeOtherPage extends React.Component {
  constructor() {
    super();
    this.state = {
      gitList: [],
    };
  }


  // componentDidMount() {
  //     console.log(this.state.gitList);
  //
  //   fetch('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100')
  // .then(function(response) { return response.json(); })
  // .then(function(json) {
  // for(var i = 0; i < json.items.length; i++) {
  //   console.log(json.items);
  //   return(
  //       <div key={json.items.id}>
  //         <p>{json.items.id}{json.items.name}{json.items.description}</p>
  //       </div>
  //   );
  // }
  // });
  // }

  componentDidMount() {
    // console.log(this.state.gitList);
    // console.log(this.state);
    fetch('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100')
    .then (results => {
      return results.json();
    }).then (data => {
      let gitList = data.items.map((item) => {
        return(
            <div key={item.id}>
              <p>{item.id}{item.name}{item.description}{item.owner.url}</p>
            </div>
        )
      })
      this.setState({gitList: gitList});
      console.log("state", this.state);
    })
  };



  render(){
    return (
        <div className="container2">
          <div className="container1">
            {this.state.gitList}
          </div>
        </div>
    );
  }
}


export default SomeOtherPage;

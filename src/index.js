import React, { Component } from 'react'
import 'simple-react-loader/dist/index.css'
export class Loader extends Component{

  constructor(props) {
    super(props);
  }

  render(){

    let loaderIcon = "";

  if (this.props.type=="pulse") {
    loaderIcon =<i className="fa fa-spinner fa-pulse fa-5x fa-fw"></i>;
  }

  if (this.props.type=="refresh") {
    loaderIcon =<i class="fa fa-refresh fa-spin fa-5x fa-fw" aria-hidden="true"></i>;
  }

  if (this.props.type=="save") {
    loaderIcon =<i class="fa fa-cog fa-spin fa-5x fa-fw" aria-hidden="true"></i>;
  }

    let  loaderStyle={};

    if (!this.props.showLoader) {

      loaderStyle = {display : "none" };
    }

    return (<div >
      <div className="loadingpanel">
           <div className="loadingcontainer">
              
              {loaderIcon}
             
               <span className="sr-only">Loading...</span>
           </div>
       </div>
       </div>)
  }

}
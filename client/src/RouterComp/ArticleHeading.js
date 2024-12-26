import "./ArticleHeadingStyles.css";
import React, { Component } from "react";

class ArticleHeading extends Component {
  render(){
    return(
      <div className="article-heading">
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default ArticleHeading;

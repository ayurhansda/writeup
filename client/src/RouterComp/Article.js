import React, { Component } from "react";
import "./ArticleStyles.css";
import ArticleHeading from "./ArticleHeading";
import { FaCircle, FaUser } from "react-icons/fa";

class Article extends Component {
  render(){
    return(
      <div>
        <ArticleHeading heading="Writeup title" text="Author Name"/>
        <main className="container d-flex flex-column align-items-start ps-3 pe-3">
          <div className="d-flex container">
            <p className="display-5 fw-bold">Malware Development:Part 1</p>
          </div>
          <div className="d-flex align-items-center">
            <a className="prof-link d-flex align-items-center mt-2 mb-4" style={{textDecoration: 'none'}} href="#">
              <FaUser className="ms-2 bg-light rounded-circle p-2" style={{color: 'black', fontSize: 47}} />
              <span className="ms-3 fw-semibold" style={{color: 'white', fontSize: 20}}>Fancy Panda</span>
              <FaCircle className="ms-2 mt-1" style={{color: 'gray', fontSize: 5}} />
              <span className="ms-2 mt-1 fw-semibold" style={{color: 'red', fontSize: 15}}>Follow</span>
            </a>
          </div>
          <div className="content" style={{fontSize: 25}}>
            <p>Hey everyone : )</p>
            <p className="intro-paragraph">After learning that many people want to learn about Malware Development, I’ve
                started this series on the topic. In this series, I will cover everything from basic concepts to
                advanced techniques.</p>
            <p>Let’s start from the very basics.</p>
            <p>In malware development, one of the most common questions beginners have is: Where do I start, and what
                are all the things I need to learn to start it and become a professional malware developer?</p>
            <p><strong><em>Let’s start the core of part-1 .</em></strong></p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nemo, necessitatibus, non earum pariatur, assumenda quidem repellat eum nostrum illum repudiandae! Non suscipit ullam sint? Voluptatum velit magni molestiae delectus officiis, labore ex officia dignissimos id doloribus sapiente sint consectetur cum repellendus laudantium ullam ipsum ab possimus culpa voluptate, aliquid, accusantium qui magnam. Tempora quae minus ratione a, totam pariatur aperiam ea aut libero enim dolor dignissimos quisquam eligendi mollitia nihil animi ullam esse nostrum ipsam id qui, cupiditate fugit? Consequuntur amet earum, modi architecto repudiandae adipisci laboriosam. Sed necessitatibus eius dignissimos vero repellat voluptates corporis minus quidem numquam laudantium. Sint, voluptates adipisci commodi impedit inventore eius, a excepturi, magnam repellendus deserunt quasi blanditiis ex placeat nemo quas assumenda architecto unde quod molestias itaque. Nulla esse libero, saepe inventore omnis totam nesciunt optio nobis, dignissimos, exercitationem eligendi fuga deserunt mollitia aliquid ipsum aut minus. Cumque, totam placeat deserunt, vero praesentium error explicabo eligendi delectus libero iure nisi ullam, atque adipisci labore eum natus esse quidem architecto consectetur debitis dolores officiis porro! Inventore debitis ex saepe! Illum, at unde vitae repellat dolores quidem pariatur qui, numquam delectus, ipsa ex? Eos nobis placeat, repellendus similique et id veritatis delectus ea quod ex?
            </p>
            <br />
          </div>
        </main>
      </div>
    );
  }
}

export default Article;

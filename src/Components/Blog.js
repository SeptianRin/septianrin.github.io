import React, { Component } from "react";
import Fade from "react-reveal";
import Parser from "rss-parser";
let id = 0;
let parser = new Parser()
let blogItem = [];
let imageResponse = "";

class Blog extends Component {
    componentDidMount(){
        try {
            (async () => {
                await parser.parseURL('http://blog.septianrin.space/index.xml')
                .then(responseData => {
                    responseData.items.forEach(item => {
                        blogItem.push(item)
                    });
                    imageResponse = responseData.image.url
                    this.setState({items: responseData.items,photo: responseData.image.url})
                });              
              })();
          } catch (error) {
            console.log(error);
          }
    }
      render() {
        if (!this.props.data) return null;
        console.log(blogItem)
        console.log(imageResponse)
    
        const listItem = blogItem.map(function (item) {
          return (
              <a href={item.link}>
            <div key={id++} className="columns portfolio-item">
              <div className="item-wrap">
                <image alt={item.title} src={imageResponse} />
                <div style={{ textAlign: "center" }}>{item.title}</div>
                <p style={{margin: 20}}>{item.content}</p>
              </div>
            </div>
            </a>
          );
        });
    
        return (
          <section id="portfolio">
            <Fade left duration={1000} distance="40px">
              <div className="row">
                <div className="twelve columns collapsed">
                  <h1>Check Out My Recent Blogpost.</h1>
    
                  <div
                    id="portfolio-wrapper"
                    className="bgrid-quarters s-bgrid-thirds cf">
                    {listItem}
                  </div>
                </div>
              </div>
            </Fade>
          </section>
        );
      }
    }

export default Blog;
import React from "react";
import { Row, Col } from 'antd';
import LoadMoreArticlesLink from "../components/LoadMoreArticlesLink";
import BlogItem from "../components/BlogItem";
import blog1 from '../images/blog1.png';
import blog2 from '../images/blog2.png';
import blog3 from '../images/blog3.png';
import blog4 from '../images/blog4.png';
import blog5 from '../images/blog5.png';
import blog6 from '../images/blog6.png';
import blog7 from '../images/blog7.png';

const Blog = () => (
  <div className="blog-wrapper">
    <Row className="blog-row" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="blog-top" xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
        <h1>DESPRE BUCUREȘTIUL VULNERABIL</h1>
        <p>
          Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
          and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
          Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like).
        </p>
      </Col>
    </Row>
    <Row className="blog-row" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <BlogItem src={blog1} size="md" headline="MONUMENTE ISTORICE ÎN CLASA U1 DE RISC" />
      <BlogItem src={blog2} size="lg" headline="STUDIU VULNERABILITATE SOCIO-DEMOGRAFICĂ" />
    </Row>
    <Row className="blog-row" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <BlogItem src={blog3} size="sm" headline="MATERIALE EDUCATIVE PENTRU PROTECȚIE ÎN CAZ DE CUTREMUR" />
      <BlogItem src={blog4} size="sm" headline="STUDIU PROFILARE SOCIOLOGICĂ A LOCUIRII" />
      <BlogItem src={blog5} size="sm" headline="CE NE SPUN DATELE DESPRE LOCUIRE?" />
    </Row>
    <Row className="blog-row" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <BlogItem src={blog6} size="lg" headline="PROPUNERE DE POLITICĂ PUBLICĂ PRIVIND LOCUIREA SUB RISC SEISMIC" />
      <BlogItem src={blog7} size="md" headline="BUCUREȘTIUL VULNERABIL" />
    </Row>
    <Row>
      <Col span={24}>
        <LoadMoreArticlesLink />
      </Col>
    </Row>
  </div>
);

export default Blog;

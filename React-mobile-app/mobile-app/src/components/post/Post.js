import React from 'react';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LikeButton from '../likeButton/LikeButton';
import './Post.scss';

function Post (props) {
    return (
      <Row xs={1} md={1} className="g-4">
        <div className="grid">
          <Col>
            <Card key={props.card.id} className="card-style">     
              <Card.Img variant="top" src={props.card.image} />
              <Card.Body>
                <Row>
                  <Col>
                    <LikeButton></LikeButton>
                  </Col>
                  <Col>
                    <Card.Text className="text-muted">{new Date(props.card.createdAt).toLocaleDateString()}</Card.Text>
                  </Col>
                </Row> 
                <Row className="card-body-text">
                  <Card.Title>{props.card.author.username}</Card.Title>
                  <Card.Text>{props.card.text}</Card.Text>
                  <Card.Text className="text-muted">Comments: {props.card.comments.length}</Card.Text>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </div>
      </Row>
    );
};
export default Post;
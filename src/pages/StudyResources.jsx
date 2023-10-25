import React from 'react';
import './StudyResources.css';
import { Card, Col, Row } from 'antd';
import reactImage from "../assets/react-image.jpg";


const StudyResources = () => {
  const resources = [
    { id: 1, name: 'React', url: 'https://reactjs.org/', img: reactImage  },
    { id: 2, name: 'MDN Web', url: 'https://developer.mozilla.org/', img: reactImage },
    { id: 3, name: 'W3Schools', url: 'https://www.w3schools.com/',  img: reactImage },
    { id: 4, name: 'Stack Overflow', url: 'https://stackoverflow.com/', img: reactImage }
  ];

  return (
    <div className="study-resources-container">
<h1 style={{ fontSize: '50px', marginBottom:'50px', marginTop:'50px'}}>Study Resources</h1>
      <Row gutter={16}>
        {resources.map((resource) => (
          <Col span={6} key={resource.id}>
            <Card
  title={
    <div style={{ fontSize: '30px'}}>
      {resource.name}
     </div>
         }
              bordered={false}
              cover={<img alt={resource.name} src={resource.img} />}
            >
              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                Visit Resources
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default StudyResources;

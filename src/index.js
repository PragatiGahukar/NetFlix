import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Component/CardsNew';
import Sdata from './Component/Sdata';
/* import './Component/index.css'; */
console.log(Sdata[0].imgsrc.logo);
console.log(Sdata[0].imgsrc.Img3);
ReactDOM.render(
  <>
  <div className="head1"><h1>List of top 5 Netflix series</h1></div>

  <Card imgsrc={Sdata[0].imgsrc.logo} title={Sdata[0].title} sname={Sdata[0].sname} link={Sdata[0].link}/>
  <Card imgsrc={Sdata[1].imgsrc.Img2} title={Sdata[1].title} sname={Sdata[1].sname} link={Sdata[1].link}/>
  <Card imgsrc={Sdata[2].imgsrc.Img3} title={Sdata[2].title} sname={Sdata[2].sname} link={Sdata[2].link}/>
  <Card imgsrc={Sdata[3].imgsrc.Img4} title={Sdata[3].title} sname={Sdata[3].sname} link={Sdata[3].link}/>
  <Card imgsrc={Sdata[4].imgsrc.Img5} title={Sdata[4].title} sname={Sdata[4].sname} link={Sdata[4].link}/>
  </>
  ,
  document.getElementById('root')
);
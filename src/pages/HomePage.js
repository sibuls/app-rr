import React from 'react';
import Article from '../components/Article';


const articles = [
{
    id:1,
    title: "Czym jest teoria strun",
    author: "Jan Nowak",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum deleniti mollitia laudantium nam quam corporis omnis dolores assumenda dicta quaerat autem voluptatem, vitae temporibus odit cupiditate, quia tenetur alias officiis quos consequuntur quo accusamus eos. Dolores natus odio, corrupti blanditiis facilis porro, illum earum dignissimos nam commodi ducimus voluptate modi.  "
},
{
    id:2,
    title: "Czym jest paradoks Fermiego",
    author: "Jan Zbyszek",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum deleniti mollitia laudantium nam quam corporis omnis dolores assumenda dicta quaerat autem voluptatem, vitae temporibus odit cupiditate, quia tenetur alias officiis quos consequuntur quo accusamus eos. Dolores natus odio, corrupti blanditiis facilis porro, illum earum dignissimos nam commodi ducimus voluptate modi.  "
},
{
    id:3,
    title: "Ciemna materia i ciemna energia",
    author: "Zygmunt Kowalski",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum deleniti mollitia laudantium nam quam corporis omnis dolores assumenda dicta quaerat autem voluptatem, vitae temporibus odit cupiditate, quia tenetur alias officiis quos consequuntur quo accusamus eos. Dolores natus odio, corrupti blanditiis facilis porro, illum earum dignissimos nam commodi ducimus voluptate modi.  "
},

]

const articlesPage = articles.map(article => (

 
   <Article  key={article.id} {...article} />
 


))

const HomePage = () => {
    return (  

<div className="home">
    {/* <h2>Dzień dobry? Oto lista nowości!</h2> */}
{articlesPage}


</div>


    );
}
 
export default HomePage;
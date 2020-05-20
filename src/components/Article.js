import React from 'react';
import '../styles/Article.css'




const Article = ({title,author,text}) => {



    return ( 
<article className="homeArticle">
        <h1>{title}</h1>
        <h4>{author}</h4>
        <p>{text}</p>
</article>
       


     );
}
 
export default Article;




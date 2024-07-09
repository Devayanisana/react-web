import React ,{ useState, useEffect }from "react";
import { Navbar } from "react-bootstrap";


function NewsComponent() {

  const [news,setnews] = useState([]);

 useEffect(() => {
  fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e3cd0eef62294ce2ace0078f2857264f")
    .then(response => response.json())
    .then(data => setnews(data.articles))
    .catch(error => console.error("Problem with fetching data!!",error))
 },[])
  
  
  
  return (
    <div>
        <Navbar/>
        <div className='container'>
            <div className='row'>
                {
                    news.map((value,key) => (
                        <div key={key} className="col-2">
                            <a href={value.url}>
                                <div className="card">
                                    <img src={value.urlToImage} alt={value.title}/>
                                    <div className="card-body">
                                <h4 classNme="card-title">{value.author}</h4>
                                <p className="crad-text">{value.title}</p>
                                </div>
                                </div>
                            </a>
                        </div>
         ))
    }
                        </div>
                        </div>
                        </div>
                    )
  
                    
  
  
}
export default NewsComponent;
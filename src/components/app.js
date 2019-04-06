import React from 'react';
import ImageList from './ImageList';
import axios from 'axios';
import SearchBar from './searchBar';


class App extends React.Component{
    state={images:[]};

    onSearchSubmit=async(term)=>{
    const response= await axios.get('https://api.unsplash.com/search/photos',{
         params: {query: term},
         headers: {
             Authorization: 'Client-ID b604474c373b6caf5a1322bbe369d55c125956b7de11eb360bf496da0aa26bb6'
         }
     });
     this.setState({images:response.data.results});
     //console.log(this.state.images)
    }
    render(){
    return (
<div className='ui container' style={{marginTop:'10px'}}>
    <SearchBar onSubmit={this.onSearchSubmit} />
    <ImageList image={this.state.images} />
</div>
    )
    }
};
export default App;

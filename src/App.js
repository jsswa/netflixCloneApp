import React from 'react';
import './App.css';
import Logo from './Logo.js';
import Navigation from './components/Navigation';
import UserProfile from './components/UserProfile';
import MainPanel from './components/MainPanel.js';
import TitleList from './components/TitleList';

class App extends React.Component {
  state = {searchTerm:"", searchUrl:""};
  apiKey = '5fc734def9688b07870a26a8350000ff';

  handleKeyUp = (e) => {
    if (e.key === 'Enter' && this.state.searchTerm !== '') {
      var searchUrl = "search/multi?query=" + this.state.searchTerm + "&api_key=" + this.apiKey + "&language=fr";
      this.setState({searchUrl:searchUrl});
    }
  };

  handleChange = (e) => {
      this.setState({searchTerm : e.target.value});    
  };

  render() {
    return (
      <div>
        <header className="Header">
          <Logo />
          <Navigation />
          <div id="search" className="Search">
            <input onKeyUp={this.handleKeyUp} onChange={this.handleChange} type="search" placeholder="Rechercher un fil ou une série..." value={this.state.searchTerm}/>
          </div>
          <UserProfile />
        </header>
        <MainPanel />
        <TitleList title="Résultats de recherche" url={this.state.searchUrl} />
        <TitleList title="Suggestions" url='discover/tv?sort_by=popularity.desc&page=1' />
        <TitleList title="Tendance" url='discover/movie?sort_by=popularity.desc&page=1' />
        <TitleList title="Top films d'horreur" url='genre/27/movies?sort_by=popularity.desc&page=1' />
        <TitleList title="Top films de sciences fiction" url='genre/878/movies?sort_by=popularity.desc&page=1' />
        <TitleList title="Top films comique" url='genre/35/movies?sort_by=popularity.desc&page=1' />
      </div>
    );
  }
}

export default App;

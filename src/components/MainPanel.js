import React from 'react';
import MainButton from './MainButton'

class MainPanel extends React.Component {
    render() {
        return (
          <div id="hero" className="Hero" style={{backgroundImage: 'url(https://i.imgur.com/f56nmea.jpg'}}>
            <div className="content">
              <img className="logo" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EBABD6354324304D2A5D35254BECFC76F08EC0F6D6EEE3406446117F344CAAA9/scale?width=1200&aspectRatio=1.78" alt="narcos background" />
              <h2>Saison 2 disponible</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget velit et nisl euismod egestas. Praesent eu arcu a sem malesuada accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris et fringilla est. Donec vitae scelerisque purus. Suspendisse nec eros eget est porta pharetra. Etiam lacinia dui et massa tempus interdum. Suspendisse consequat rhoncus mi sit amet dignissim. Maecenas aliquam ultricies venenatis. Cras mattis hendrerit laoreet. Cras tincidunt volutpat aliquam. Integer et iaculis odio, fringilla luctus orci. </p>
              <div className="button-wrapper">
                <MainButton primary={true} text="Regarder maintenant" />
                <MainButton primary={false} text="+ Mes favoris" />
              </div>
            </div>
            <div className="overlay"></div>
          </div>
        );
      }
}

export default MainPanel;
